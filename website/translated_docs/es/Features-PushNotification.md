---
id: push-notification
title: Notificaciones Push
---

> **OBJETIVOS**
> 
> Integre las notificaciones push en sus aplicaciones 4d for iOS

> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite enviar notificaciones push está integrado en 4D mono usuario y 4D Server.

## ¿Qué es una notificación push?

En un teléfono móvil, una notificación Push es un mensaje de alerta, recibido a través de una aplicación, que puede abrir, eliminar, autorizar o bloquear. Puede ser muy útil por ejemplo para notificar a los usuarios de la aplicación que hay una nueva versión disponible.

Pero, ¿qué pasa con la arquitectura a implementar, para integrar esta funcionalidad en una aplicación móvil? Y ¿Cuál es el proceso de una notificación push, desde la creación hasta la visualización en el teléfono del usuario?

## Arquitectura técnica

Estos son los diferentes elementos necesarios para crear, enviar y recibir una notificación push móvil:

![Proceso de notificaciones Push](assets/en/push-notification/4D-for-ios-push-notification.png)

## Prerrequisitos

Para enviar notificaciones push, se requiere un archivo de autenticación AuthKey_XXXYYY.p8 de Apple.

* Primero, vaya a la página de la cuenta de desarrollador Apple, inicie sesión y luego seleccione Certificates, IDs & Profiles.

* A continuación, podrá generar su certificado Push y descargarlo.

* Finalmente, active la funcionalidad de notificación Push e integre su certificado en su proyecto 4D for iOS desde la sección Publication.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Puede encontrar más información sobre este proceso [aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) en la documentación del componente.

## Ejemplo básico para gestionar sus notificaciones push

Este es un ejemplo para enviar una notificación push a `test@4d.com `:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

¡Tan simple como eso!

## Notificación push con sincronización de datos

Con una notificación push, también puede lanzar una sincronización para actualizar sus datos.

Por ejemplo, si su aplicación tiene una opción de seguimiento de la entrega, la información sobre la entrega se actualizará en la base de datos gracias a una notificación enviada al cliente. Esta notificación, que contiene una solicitud de sincronización de los datos, permitirá al cliente obtener los datos modificados en su teléfono inteligente.

Para ello, en el componente Servidor de aplicaciones 4D Mobile, es necesario especificar si se desea forzar la sincronización de los datos en la notificación push. Por lo tanto, simplemente suministre el valor booleano `dataSynchro` en el objeto `userInfo`.

### Sincronización de datos con una notificación que abre un registro

Por defecto, una notificación que abre un registro activa automáticamente una sincronización de datos.

Por ejemplo, en una aplicación Contact, si se ha modificado la información específica de un contacto (*es decir.* el registro de un contacto, como la dirección o el número de teléfono), el usuario recibe una notificación que abre automáticamente el registro correspondiente y sincroniza los datos contenidos en el mismo. Cuando el usuario abre la notificación, la información del contacto se actualiza completamente.

Este es un ejemplo del comportamiento por defecto, una petición `dataSynchro` con el método `open()`:

*Tenga en cuenta que para el método `open()` exclusivamente, este es el comportamiento por defecto. Como resultado, si no especifica el valor booleano `dataSynchro`, es `true` por defecto.*

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

Sin embargo, también se puede optar por no forzar una sincronización de datos, evitando `dataSynchro`:

```4D 

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```
### Sincronización de datos con una simple notificación

También puede solicitar una sincronización para una simple notificación sin abrir un registro específico. Por ejemplo, se han añadido algunas entradas nuevas. Entonces puede informar a su usuario y actualizar los datos sin ninguna manipulación por su parte.

Aquí hay un ejemplo de código que también puede utilizar con otros métodos, siempre y cuando llene el objeto `userInfo` con el valor `dataSynchro`.

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```
![Data synchronization animation](assets/en/push-notification/pushandSynchro.gif)

## Configuración Windows

Windows users need to download the [last CURL version](https://curl.se/download.html) to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8 and 4DBASE/MobileApps/ID.BundleID/manifest.json files from your Design database to your production database.BundleID/AuthKey_XXXX.P8 and 4DBASE/MobileApps/ID.BundleID/manifest.json files from your Design database to your production database.

## ¿Qué hacemos ahora?

El componente que maneja y facilita el proceso también está disponible [aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para que pueda adaptar las notificaciones push a sus propias necesidades. Siéntase libre de usarlo y elegir los aspectos más relevantes para su aplicación. Y por supuesto, todas las contribuciones son bienvenidos a este proyecto, a través de comentarios, informes de errores y aún mejor: "pull requests".


