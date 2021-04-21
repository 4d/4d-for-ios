---
id: authentication
title: Authentification email
---

> **OBJECTIFS**
> 
> Integrate email confirmation to authenticate mobile app users.

> **CONDITIONS PRÉALABLES**
> 
> The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) component allowing email authentication is integrated in 4D mono and 4D server 18R4.

Let your customers and clients feel comfortable logging into their app, through email authentication!

It provides a way to verify that an email comes from whom it claims to be from, and will allow to block harmful or fraudulent uses of emails.

En bref, le principe est le suivant :

### 1. Activez le formulaire de connexion

You integrate a login form from the project editor, in the Publishing section.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Saisissez votre adresse e-mail

Un e-mail est requis au lancement de l'application. Lorsqu'un utilisateur saisit son e-mail et clique sur le bouton de connexion, On Mobile app Authentication est appelée et le statut de la session de l'utilisateur doit être mis à jour et définie au statut «en attente» (pending). Un email de validation est ensuite envoyé à l'utilisateur.

### 3. Vérifiez votre boîte de réception

Lorsque l'e-mail de validation est disponible, l'utilisateur doit simplement cliquer sur le lien de validation. Cela appellera la méthode de base de données On Web Connection et mettra à jour le statut de la session de l'utilisateur qui passera de «en attente» à «accepté».

### 4. Retournez sur votre application

Une fois la validation effectuée, l'utilisateur peut rouvrir son application et cliquer sur le bouton Connexion. On Mobile App Authentication est appelée à nouveau mais cette fois, le statut de la session de l'utilisateur est "accepté", donc l'accès est accordé !

C’est plutôt simple, non?

So, to make the validation process easier and secure, 4D for iOS handles the following process:

![Authentification](assets/en/authentication/4D-for-iOS-email-auth.png)

Now let's figure out how this works, using our special component!


# Utilisation du composant

## Un composant pour gérer l'authentification des e-mails

Our 4D Mobile App Server Component has been developed to help you manage several processes.

Let's check how you can use it!

## On Mobile App Authentification

Appelez la méthode **App Email Checker** dans la méthode **On Mobile App Authentification database** avec les informations fournies par l'application mobile :

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Appelez la méthode **Activate sessions** dans la méthode base **On Web Connection** avec le paramètre ID de la session extrait de l'URL :

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //ajoutez un journal si vous le souhaitez
End case 

```

It couldn't be any easier! You will find more information about this component in the [documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially about the resources you may use, such as html templates and settings that you may want to define.


# Sans le composant

Here is a basic example with no use of the component.

To do so, enter the following code:

## On Mobile App Authentication


```4d
C_OBJECT($0;$1;$response;$request;$email;$status)

  // les propriétés des paramètres proviennent de l'application mobile
$request:=$1

  // Créer un email avec une URL d'activation
$mail:=New object
$mail.from:="myapplication@gmail.com"
$mail.to:=$request.email  // email saisi par l'utilisateur sur leur smartphone
$mail.subject:="Login confirmation"
$mail.htmlBody:="<a href=\"https://myserverapplication/activation/"+$request.session.id \
+"\">Click Here to confirm your email.</a>\"<br>"

  // Envoyer e-mail
$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")
$transporter:=SMTP New transporter($smtp)
$status:=$transporter.send($mail)

  // Configurer la réponse à for 4D for iOS
$response:=New object

  // Déclarer que la session courante est en cours de vérification
$response.verify:=True

  // Vérifier si l'e-mail a été envoyé avec succès
If ($status.success)
      //créer un objet partagé pour contenir nos sessions, accessible depuis tous les process
    If (Storage.pendingSessions=Null)
        Use (Storage)
            Storage.pendingSessions:=New shared object
        End use 
    End if 

    Use (Storage.pendingSessions)
          //Ajouter une session à nos listes de session
        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id
    End use 

    $response.success:=True
    $response.statusText:="Please check your mail box"
Else 
      // Afficher un message d'erreur sur le smartphone
    $response.statusText:="The mail is not sent please try again later"
    $response.success:=False
End if 

$0:=$response

```

## On Web connection

This method will allow you to activate the session after clicking on the link in the confirmation email.

```4d
C_TEXT($1;$2;$3;$4;$5;$6)

C_TEXT($token;$session)
C_OBJECT($sessionFile;$sessionObject)

If ($1="/activation/@")
    $token:=Substring($1;13)
End if 


  //lire la session depuis l'ID reçu de l'URL
If (Storage.pendingSessions#Null)
    $session:=Storage.pendingSessions[$token]
End if 

If ($session#"")
      //obtenir le dossier de la session
    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)
    $sessionObject:=JSON Parse($sessionFile.getText())
      //mettre à jour la valeur du statut
    $sessionObject.status:="accepted"
    $sessionFile.setText(JSON Stringify($sessionObject))
    Use (Storage.pendingSessions)
          //supprimer la session en attente
        OB REMOVE(Storage.pendingSessions;$token)
    End use 

    /*
        La commande MOBILE APP REFRESH SESSIONS vérifie tous les fichiers de session de l'application mobile situés dans le dossier MobileApps du serveur, 
        et met à jour les contenus de la session existante dans la mémoire pour les fichiers modifiés.
    */

    MOBILE APP REFRESH SESSIONS

    WEB SEND TEXT("You are successfully authenticated")
Else 
    WEB SEND TEXT("Invalid session")
End if 
```

Et voilà !

## Que faire ensuite ?

We've covered the basic email validation steps in this tutorial. You should now be able to easily access your 4D for iOS app!
