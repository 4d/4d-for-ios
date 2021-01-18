---
id: push-notification
title: Notificaciones Push
---

> **OBJETIVOS**
> 
> Integre las notificaciones push en sus aplicaciones 4d for iOS

> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite enviar notificaciones push está integrado en 4D mono usuario y 4D server 18R4.

# ¿Qué es una notificación push?

En un teléfono móvil, una notificación Push es un mensaje de alerta, recibido a través de una aplicación, que puede abrir, eliminar, autorizar o bloquear. Puede ser muy útil por ejemplo para notificar a los usuarios de la aplicación que hay una nueva versión disponible.

Pero, ¿qué pasa con la arquitectura a implementar, para integrar esta funcionalidad en una aplicación móvil? Y ¿Cuál es el proceso de una notificación push, desde la creación hasta la visualización en el teléfono del usuario?

# Arquitectura técnica

Estos son los diferentes elementos necesarios para crear, enviar y recibir una notificación push móvil:

![Proceso de notificaciones Push](assets/en/push-notification/4D-for-ios-push-notification.png)

# Prerrequisitos

Para enviar notificaciones push, se requiere un archivo de autenticación AuthKey_XXXYYY.p8 de Apple.

* Primero, vaya a la página de la cuenta de desarrollador Apple, inicie sesión y luego seleccione Certificates, IDs & Profiles.

* A continuación, podrá generar su certificado Push y descargarlo.

* Finalmente, active la funcionalidad de notificación Push e integre su certificado en su proyecto 4D for iOS desde la sección Publication.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Puede encontrar más información sobre este proceso [aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) en la documentación del componente.

# Ejemplo básico para gestionar sus notificaciones push

Este es un ejemplo para enviar una notificación push a `test@4d.com `:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

¡Tan simple como eso!

# Push notification with data synchronization

With a push notification, you can also launch a synchronization to update your data.

For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone.

To do so in the 4D Mobile App Server component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the `dataSynchro` boolean value in the `userInfo` object.

## Data synchronization with a notification opening a record

By default, a notification opening a record automatically triggers a data synchronization.

For example, in a Contact app, if a contact’s specific information (*i.e.* a contact’s record, such as the address or the phone number) has been modified, the user receives a notification that automatically opens the relevant record and synchronizes the data contained in the record. When the user opens the notification, the contact’s information is fully updated.

Here's an example of the default behaviour, a `dataSynchro` request with the `open()` method:

*Note that for `open()` method exclusively, this is the default behaviour. As a result, if you don't specify the `dataSynchro` boolean value, it is `true` by default.*

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

However, you can also choose not to force a data synchronization, by preventing `dataSynchro`:

```4D 

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```
## Data synchronization with a simple notification

You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part.

Here is a code example that you can also use with other methods, as long as you fill the `userInfo` object with `dataSynchro` value.

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```

# ¿Qué hacemos ahora?

El componente que maneja y facilita el proceso también está disponible [aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para que pueda adaptar las notificaciones push a sus propias necesidades. Siéntase libre de usarlo y elegir los aspectos más relevantes para su aplicación. Y por supuesto, todas las contribuciones son bienvenidos a este proyecto, a través de comentarios, informes de errores y aún mejor: "pull requests".


