---
id: authentication
title: Authentification email
---

<div markdown="1" class = "tips">
**OBJECTIFS **
Intégrez la confirmation par e-mail pour authentifier les utilisateurs de l'application mobile
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) component that allows email authentication is integrated in 4D mono and 4D server v18 R4.
</div>

Ensure that your customers and clients feel comfortable logging into their apps with email authentication!

It provides a way to verify that an email comes from whom it claims to be from and will allow you to block harmful or fraudulent uses of email.

How it works:

### 1. Activez le formulaire de connexion

Integrate a login form into your app from the project editor, in the Publishing section.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Saisissez votre adresse e-mail

An email address is required when the app is launched. When a user enters their email and clicks on the **Login** button, the **On Mobile app Authentication** method is called and the user's session status is updated to a "pending" status. A validation email is then sent to the user's email address.

### 3. Vérifiez votre boîte de réception

When the validation email is received, the user only needs to click on the validation link. This will call the **On Web Connection database** method and update the user's session status from "pending" to "accepted".

### 4. Retournez sur votre application

Once validation is completed, the user can reopen their app and click on the **Login** button. The **On Mobile App Authentication** method is called again, but this time the user's session status is "accepted", so access is granted!

Simple, right?

To make the validation process simple and secure, 4D for iOS handles:

![Authentification](assets/en/authentication/4D-for-iOS-email-auth.png)

But let's use our special component to see how this works!


# Utilisation du composant

## Un composant pour gérer l'authentification des e-mails

Un composant boite à outils a été développé pour vous aider à gérer plusieurs processus : le composant 4D Mobile App Server.

Voyons comment l'utiliser !

## On Mobile App Authentification

Call the **Mobile App Email Checker** method in the **On Mobile App Authentification** database method with the information provided by the mobile application:

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Call the **Activate sessions** method in the **On Web Connection** database method with the **Session ID** parameter retrieved from the URL:

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //ajoutez un journal si vous le souhaitez
End case 

```

C'est aussi simple que ça ! You will find more in-depth information about this component in the [component documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially for resources you may use, like HTML templates and settings that you may want to define.


# Without the component

Let's take a look at a basic example without using the component.

To do so, here is the code you can use:

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

This method will allow you activate the session after clicking on the link in the confirmation email.

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

We've covered basic email validation in this tutorial. You should now be able to easily access your 4D for iOS app!
