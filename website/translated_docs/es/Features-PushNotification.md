---
id: push-notification
title: Notificaciones Push
---

> **OBJETIVOS**
> 
> Integre notificaciones push en sus aplicaciones 4d for iOS


> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite enviar notificaciones push está integrado en 4D mono usuario y 4D server v18 R4.


# ¿Qué es una notificación push?

En un dispositivo móvil, una notificación Push es un mensaje de alerta, recibido a través de una aplicación, que puede abrir, eliminar, autorizar o bloquear. Puede ser muy útil, por ejemplo, notificar a los usuarios de su aplicación que hay una nueva versión disponible.

Pero, ¿qué pasa con la arquitectura a implementar para integrar esta funcionalidad en una aplicación móvil? ¿Cuál es el proceso de una notificación push, desde la creación hasta la visualización en el dispositivo del usuario?

# Arquitectura técnica

Estos son los diferentes elementos necesarios para crear, enviar y recibir notificaciones push móviles:

![Proceso de notificaciones Push](assets/en/push-notification/4D-for-ios-push-notification.png)

# Prerrequisitos

Para enviar notificaciones push, se requiere un archivo de autenticación AuthKey_XXXYYY.p8 de Apple.

* Primero, vaya a la página de la cuenta de desarrollador Apple, inicie sesión y luego seleccione **Certificates, IDs & Profiles**.

* A continuación, podrá generar su certificado Push y descargarlo.

* Active la funcionalidad de notificación Push e integre su certificado en su proyecto 4D for iOS desde la sección Publication.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Puede encontrar información más detallada sobre este proceso [en la página Push notification](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) en la documentación del componente.

# Ejemplo básico para gestionar sus notificaciones push

Este es un ejemplo de cómo enviar una notificación push a ` test@4d.com `:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

¡Tan simple como eso!


## ¿Qué hacemos ahora?

El componente que maneja y facilita el proceso también está disponible [aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para que pueda adaptar las notificaciones push automáticas a sus propias necesidades. Siéntase libre de usarlo y elegir los aspectos más relevantes para su aplicación. Y por supuesto, todas las contribuciones son bienvenidos a este proyecto, a través de comentarios, informes de errores y aún mejor: solicitudes pull.


