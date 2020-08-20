---
id: autenticación
title: Autenticación email
---

> **OBJETIVOS**
> 
> Integre la confirmación por correo electrónico para autenticar a los usuarios de la aplicación móvil


> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite la autenticación de correo está integrado en 4D mono usuario y 4D server v18 R4.


Ensure that your customers and clients feel comfortable logging into their apps with email authentication!

It provides a way to verify that an email comes from whom it claims to be from and will allow you to block harmful or fraudulent uses of email.

How it works:

### 1. Active el formulario de conexión

Integrate a login form into your app from the project editor, in the Publishing section.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Ingrese su dirección de correo electrónico

An email address is required when the app is launched. When a user enters their email and clicks on the **Login** button, the **On Mobile app Authentication** method is called and the user's session status is updated to a "pending" status. A validation email is then sent to the user's email address.

### 3. Revise su correo

When the validation email is received, the user only needs to click on the validation link. This will call the **On Web Connection database** method and update the user's session status from "pending" to "accepted".

### 4. Vuelva a su aplicación

Once validation is completed, the user can reopen their app and click on the **Login** button. The **On Mobile App Authentication** method is called again, but this time the user's session status is "accepted", so access is granted!

Simple, right?

To make the validation process simple and secure, 4D for iOS handles:

![Autenticación](assets/en/authentication/4D-for-iOS-email-auth.png)

But let's use our special component to see how this works!


# Utilización del componente

## Un componente para gestionar la autenticación de los correos electrónicos

Se ha desarrollado un componente de caja de herramientas para ayudarlo a administrar varios procesos: el componente 4D Mobile App Server.

¡Veamos cómo utilizarlo!

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
    //añada un historial si lo desea
End case 

```

¡Tan simple como eso! You will find more in-depth information about this component in the [component documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially for resources you may use, like HTML templates and settings that you may want to define.


# Sin el componente

Let's take a look at a basic example without using the component.

Para hacerlo, aquí está el código que puede utilizar:

## On Mobile App Authentication


```4d
C_OBJECT($0;$1;$response;$request;$email;$status)

  // las propiedades de los parámetros provienen de la aplicación móvil
$request:=$1

  // Crear un email con una URL de activación
$mail:=New object
$mail.from:="myapplication@gmail.com"
$mail.to:=$request.email  // email introducido por el usuario en su teléfono inteligente
$mail.subject:="Login confirmation"
$mail.htmlBody:="<a href=\"https://myserverapplication/activation/"+$request.session.id \
+"\">Clic acá para confirmar su email.</a>\"<br>"

  // Enviar correo
$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")
$transporter:=SMTP New transporter($smtp)
$status:=$transporter.send($mail)

  // Configurar respuesta para 4D for iOS
$response:=New object

  // Declarar que la sesión actual está siendo verificada
$response.verify:=True

  // Verificar si el email fue enviado exitosamente
If ($status.success)
      //crear un objeto compartido para nuestras sesiones, accesible desde todos los procesos
    If (Storage.pendingSessions=Null)
        Use (Storage)
            Storage.pendingSessions:=New shared object
        End use 
    End if 

    Use (Storage.pendingSessions)
          //Añadir una sesión a nuestra lista de sesiones
        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id
    End use 

    $response.success:=True
    $response.statusText:="Por favor verifique su buzón"
Else 
      // Mostrar un mensaje de error en el teléfono inteligente
    $response.statusText:="El mail no se ha enviado por favor inténtelo más tarde"
    $response.success:=False
End if 

$0:=$response

```

## On Web connection

Este método le permitirá activar la sesión después de hacer clic en el enlace del correo electrónico de confirmación.

```4d
C_TEXT($1;$2;$3;$4;$5;$6)

C_TEXT($token;$session)
C_OBJECT($sessionFile;$sessionObject)

If ($1="/activation/@")
    $token:=Substring($1;13)
End if 


  //leer la sesión desde el ID recibido de la URL
If (Storage.pendingSessions#Null)
    $session:=Storage.pendingSessions[$token]
End if 

If ($session#"")
      //obtener carpeta de sesiónr
    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)
    $sessionObject:=JSON Parse($sessionFile.getText())
      //actualizar valor del estado
    $sessionObject.status:="accepted"
    $sessionFile.setText(JSON Stringify($sessionObject))
    Use (Storage.pendingSessions)
          //eliminar sesión pendiente
        OB REMOVE(Storage.pendingSessions;$token)
    End use 

    /*
        El comando MOBILE APP REFRESH SESSIONS verifica todos los
         archivos de sesión de la aplicación ubicados en la carpeta MobileApps del servidor,
         y actualiza el contenido de la sesión existente en la memoria para cualquier archivo editado.
    */

    MOBILE APP REFRESH SESSIONS

    WEB SEND TEXT("You are successfully authenticated")
Else 
    WEB SEND TEXT("Invalid session")
End if 
```

¡Y listo!

## ¿Qué hacemos ahora?

Hemos cubierto la validación básica de correo electrónico en este tutorial. You should now be able to easily access your 4D for iOS app!
