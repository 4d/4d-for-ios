---
id: autenticación
title: Autenticación email
---

> **OBJETIVOS**
> 
> Integre la confirmación por correo electrónico para autenticar a los usuarios de la aplicación móvil

> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite la autenticación de correo está integrado en 4D mono usuario y 4D server 18R4.

¡Deje que sus clientes y clientes se sientan cómodos iniciando sesión en su aplicación utilizando la autenticación de correo electrónico!

Ofrece una forma de verificar que un correo electrónico proviene de quien dice ser y permitirá bloquear usos dañinos o fraudulentos del correo electrónico.

En resumen, el principio es el siguiente:

### 1. Active el formulario de conexión

Integre un formulario de conexión en su aplicación, desde el editor del proyecto en la sección Publicación.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Ingrese su dirección de correo electrónico

Se requiere un correo electrónico cuando se lanza la aplicación. Cuando un usuario ingresa su correo electrónico y hace clic en el botón Iniciar sesión, se llama On Mobile app Authentication y el estado de la sesión del usuario debe actualizarse a un estado "pendiente". Luego, se envía un correo electrónico de validación al usuario.

### 3. Revise su correo

Cuando el correo electrónico de validación está disponible, el usuario solo debe hacer clic en el enlace de validación. Esto llamará al método de base de datos On Web Connection y actualizará el estado de la sesión del usuario de "pendiente" a "aceptado".

### 4. Vuelva a su aplicación

Una vez se realiza la validación, el usuario puede volver a abrir su aplicación y hacer clic en el botón Iniciar sesión. On Mobile App Authentication se vuelve a llamar, pero esta vez, el estado de la sesión del usuario es "aceptado", por lo que se concede el acceso.

Es bastante simple, ¿verdad?

Entonces, para hacer el proceso de validación más fácil y seguro, 4D for iOS maneja:

![Autenticación](assets/en/authentication/4D-for-iOS-email-auth.png)

¡Pero averigüemos cómo funciona esto, utilizando nuestro componente especial!


# Utilización del componente

## Un componente para gestionar la autenticación de los correos electrónicos

Se ha desarrollado un componente de caja de herramientas para ayudarlo a administrar varios procesos: el componente 4D Mobile App Server.

¡Veamos cómo utilizarlo!

## On Mobile App Authentification

Call the Mobile **App Email Checker** method in the **On Mobile App Authentification database** method with the information provided by the mobile application:

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Call the **Activate sessions** method in the **On Web Connection** database method with the Session ID parameter retrieved from the URL:

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //add log if you want
End case 

```

Its as simple as that! You will find more information about this component in the [documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially about resources you may use, like html templates and settings that you may want to define.


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

## ¿Qué hacemos ahora?

We've covered basic email validation in this tutorial. You should now be able to easily access your 4D for iOS app !
