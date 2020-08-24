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

Pero, ¿qué pasa con la arquitectura a implementar, para integrar esta funcionalidad en una aplicación móvil? And what is the process of a push notification, from creation to display on the user's mobile?

# Technical architecture

Here are the different elements needed to create, send and receive a mobile push notification:

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

# Prerrequisitos

In order to send push notifications, an AuthKey_XXXYYY.p8 authentication file from Apple is required.

* First, go to Apple developer account page, sign in, then select Certificates, IDs & Profiles.

* You will then be able to generate your push certificate and to download it.

* Finally, activate the Push notification feature integrate your certificate in your 4D for iOS project from the Publishing section.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

You can find more information about this process [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) in the component documentation.

# Basic example to manage your push notifications

Here is an example to send a push notification to `test@4d.com`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

It's as simple as that!


## ¿Qué hacemos ahora?

The component that handles and makes the process easier is also available [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md), in order to adapt the push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports and even better: pull requests.


