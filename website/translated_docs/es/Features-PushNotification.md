---
id: push-notification
title: Push notifications
---

> **OBJETIVOS**
> 
> Integre notificaciones push en sus aplicaciones 4d for iOS


> **REQUISITOS PREVIOS**
> 
> El componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite enviar notificaciones push está integrado en 4D mono usuario y 4D server v18 R4.


# What is a push notification?

On a mobile device, a push notification is an alert message received via an application that you can open, delete, allow, or block. It can be very useful, for example, to notify the users of your app that a new version is available.

But what about the architecture to implement in order to integrate this functionality into a mobile application? What is the process for a push notification, from creation to display on the user's device?

# Technical architecture

Here are the different elements needed to create, send, and receive mobile push notifications:

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

# Prerrequisitos

To send push notifications, an AuthKey_XXXYYY.p8 authentication file from Apple is required.

* First, go to the Apple developer account page, sign in, then select **Certificates, IDs & Profiles**.

* You will then be able to generate your push certificate and download it.

* Activate the Push notification feature and integrate your certificate into your 4D for iOS project from the Publishing section.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

You can find more in-depth information about this process [on the Push notification page](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) in the component documentation.

# Basic example to manage your push notifications

Here is an example of how to send a push notification to `test@4d.com`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

It's as simple as that!


## ¿Qué hacemos ahora?

The component that handles and makes the process easier is also available [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) so you can adapt push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports, and even better: pull requests.


