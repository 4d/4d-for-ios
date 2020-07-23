---
id: authentication
title: Authentification email
---

<div markdown="1" class = "tips">
**OBJECTIFS**
Intégrez la confirmation par e-mail pour authentifier les utilisateurs de l'application mobile
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
Le composant [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) qui permet l'authentification des e-mails est intégré dans 4D mono et 4D Server 18 R4.
</div>

Garantissez le confort de vos clients grâce à la connexion à leur application via l'authentification par e-mail !

Elle fournit un moyen de vérifier qu'un e-mail provient de qui il prétend provenir et permettra de bloquer les utilisations nuisibles ou frauduleuses des e-mails.

En bref, le principe est le suivant :

### 1. Activez le formulaire de connexion

Intégrez un formulaire de connexion dans votre application, depuis l'éditeur de projet dans la section Publication.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Saisissez votre adresse e-mail

Un e-mail est requis au lancement de l'application. Lorsqu'un utilisateur saisit son e-mail et clique sur le bouton de connexion, On Mobile app Authentication est appelée et le statut de la session de l'utilisateur doit être mis à jour et définie au statut «en attente» (pending). Un email de validation est ensuite envoyé à l'utilisateur.

### 3. Vérifiez votre boîte de réception

Lorsque l'e-mail de validation est disponible, l'utilisateur doit simplement cliquer sur le lien de validation. Cela appellera la méthode de base de données On Web Connection et mettra à jour le statut de la session de l'utilisateur qui passera de «en attente» à «accepté».

### 4. Retournez sur votre application

Une fois la validation effectuée, l'utilisateur peut rouvrir son application et cliquer sur le bouton Connexion. On Mobile App Authentication est appelée à nouveau mais cette fois, le statut de la session de l'utilisateur est "accepté", donc l'accès est accordé !

C’est plutôt simple, non?

Ainsi, pour faciliter et sécuriser le processus de validation, 4D for iOS gère :

![Authentification](assets/en/authentication/4D-for-iOS-email-auth.png)

Mais voyons comment cela fonctionne, en utilisant notre composant spécial !


# Utilisation du composant

## Un composant pour gérer l'authentification des e-mails

Un composant boite à outils a été développé pour vous aider à gérer plusieurs processus : le composant 4D Mobile App Server.

Voyons comment l'utiliser !

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

C'est aussi simple que ça ! Vous trouverez plus d'informations sur ce composant dans la [documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), en particulier sur les ressources que vous pouvez utiliser, comme les modèles et paramètres html que vous voudrez peut-être définir.


# Without the component

We will see here a basic example without using the component.

To do so, here is the code you can use:

## On Mobile App Authentication


```4d
C_OBJECT($0;$1;$response;$request;$email;$status)

  // parameters settings come from the mobile app
$request:=$1

  // Create an email with an activation URL
$mail:=New object
$mail.from:="myapplication@gmail.com"
$mail.to:=$request.email  // email entered by the user on their smartphone
$mail.subject:="Login confirmation"
$mail.htmlBody:="<a href=\"https://myserverapplication/activation/"+$request.session.id \
+"\">Click Here to confirm your email.</a>\"<br>"

  // Send mail
$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")
$transporter:=SMTP New transporter($smtp)
$status:=$transporter.send($mail)

  // Configure response for 4D for iOS
$response:=New object

  // Declare that the current session is being verified
$response.verify:=True

  // Check if the email was successsfully sent
If ($status.success)
      //create a share object to contain our sessions, accessible from all processes
    If (Storage.pendingSessions=Null)
        Use (Storage)
            Storage.pendingSessions:=New shared object
        End use 
    End if 

    Use (Storage.pendingSessions)
          //Add a session to our session lists
        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id
    End use 

    $response.success:=True
    $response.statusText:="Please check your mail box"
Else 
      // Display an error message on the smatphone
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


  //get session from ID received from URL
If (Storage.pendingSessions#Null)
    $session:=Storage.pendingSessions[$token]
End if 

If ($session#"")
      //get session folder
    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)
    $sessionObject:=JSON Parse($sessionFile.getText())
      //update status value
    $sessionObject.status:="accepted"
    $sessionFile.setText(JSON Stringify($sessionObject))
    Use (Storage.pendingSessions)
          //delete pending session
        OB REMOVE(Storage.pendingSessions;$token)
    End use 

    /*
        The MOBILE APP REFRESH SESSIONS command checks all mobile
        application session files located in the MobileApps folder of the server, 
        and updates existing session contents in memory for any edited files.
    */

    MOBILE APP REFRESH SESSIONS

    WEB SEND TEXT("You are successfully authenticated")
Else 
    WEB SEND TEXT("Invalid session")
End if 
```

And that's it !

## Que faire ensuite ?

We've covered basic email validation in this tutorial. You should now be able to easily access your 4D for iOS app !
