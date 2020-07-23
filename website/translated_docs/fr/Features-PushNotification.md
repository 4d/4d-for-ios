---
id: push-notification
title: Notifications Push
---

<div markdown="1" class = "tips">
**OBJECTIFS**
Intégrez les notifications push dans vos applications 4D for iOS
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) component that allows sending push notifications is integrated in 4D mono and 4D server v18 R4.
</div>

# Qu'est-ce qu'une notification push ?

On a mobile device, a push notification is an alert message received via an application that you can open, delete, allow, or block. It can be very useful, for example, to notify the users of your app that a new version is available.

But what about the architecture to implement in order to integrate this functionality into a mobile application? What is the process for a push notification, from creation to display on the user's device?

# Architecture technique

Here are the different elements needed to create, send, and receive mobile push notifications:

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

# Conditions préalables

To send push notifications, an AuthKey_XXXYYY.p8 authentication file from Apple is required.

* First, go to the Apple developer account page, sign in, then select **Certificates, IDs & Profiles**.

* You will then be able to generate your push certificate and download it.

* Activate the Push notification feature and integrate your certificate into your 4D for iOS project from the Publishing section.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

You can find more in-depth information about this process [on the Push notification page](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) in the component documentation.

# Exemple de base pour gérer vos notifications push

Here is an example of how to send a push notification to `test@4d.com`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

C'est aussi simple que ça !


## Que faire ensuite ?

The component that handles and makes the process easier is also available [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) so you can adapt push notifications to your own needs. N'hésitez pas à l'utiliser et à choisir les aspects les plus pertinents pour votre application. And of course, all contributors are welcome to this project, through feedback, bug reports, and even better: pull requests.


