---
id: autenticación
title: Autenticación email
---

> **OBJETIVOS**
> 
> Integre la confirmación por correo electrónico para autenticar a los usuarios de la aplicación móvil.

> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite la autenticación de correo está integrado en 4D mono usuario y 4D server 18R4.

Deje que sus clientes y clientes se sientan cómodos iniciando sesión en su aplicación, por medio de la autenticación de correo electrónico.

Ofrece una forma de verificar que un correo electrónico proviene de quien dice ser y permitirá bloquear usos dañinos o fraudulentos de los correos electrónicos.

En resumen, el principio es el siguiente:

### 1. Active el formulario de conexión

Integre un formulario de conexión desde el editor del proyecto, en la sección Publicación.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Ingrese su dirección de correo electrónico

Se requiere un correo electrónico cuando se lanza la aplicación. Cuando un usuario ingresa su correo electrónico y hace clic en el botón Iniciar sesión, se llama On Mobile app Authentication y el estado de la sesión del usuario debe actualizarse a un estado "pendiente". Luego, se envía un correo electrónico de validación al usuario.

### 3. Revise su correo

Cuando el correo electrónico de validación está disponible, el usuario solo debe hacer clic en el enlace de validación. Esto llamará al método de base de datos On Web Connection y actualizará el estado de la sesión del usuario de "pendiente" a "aceptado".

### 4. Vuelva a su aplicación

Una vez se realiza la validación, el usuario puede volver a abrir su aplicación y hacer clic en el botón Iniciar sesión. On Mobile App Authentication se vuelve a llamar, pero esta vez, el estado de la sesión del usuario es "aceptado", por lo que se concede el acceso.

Es bastante simple, ¿verdad?

So, to make the validation process easier and secure, 4D for iOS handles the following process:

![Autenticación](assets/en/authentication/4D-for-iOS-email-auth.png)

Now let's figure out how this works, using our special component!


# Utilización del componente

## Un componente para gestionar la autenticación de los correos electrónicos

Our 4D Mobile App Server Component has been developed to help you manage several processes.

Let's check how you can use it!

## On Mobile App Authentification

Llame al método **App Email Checker** en el método **On Mobile App Authentification database** con la información proporcionada por el dispositivo móvil:

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Llame al método **Activate sessions** en el método base **On Web Connection** con el parámetro ID de la sesión extraída de la URL:

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //añada un historial si lo desea
End case 

```

It couldn't be any easier! You will find more information about this component in the [documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially about the resources you may use, such as html templates and settings that you may want to define.


# Sin el componente

Here is a basic example with no use of the component.

To do so, enter the following code:

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

This method will allow you to activate the session after clicking on the link in the confirmation email.

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

We've covered the basic email validation steps in this tutorial. You should now be able to easily access your 4D for iOS app!
