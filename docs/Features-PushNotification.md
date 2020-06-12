---
id: push-notification
title: Push notifications
---

<div markdown="1" class = "tips">

**OBJECTIVES**

Integrate push notification to your 4d for iOS apps

</div>

<div markdown="1" class = "prerequisites">

**PREREQUISITES**

The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) component that allows to send push notifications is integrated in 4D mono and 4D server 18R4.

</div>

# What is a push notification?

On a mobile phone, a push notification is an alert message received via an application and that you can open, delete, allow or block. It can be very useful for example to notify your app users that a new version is available.

But what about the architecture to be implemented, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display on the user's mobile?

# Technical architecture

Here are the different elements needed to create, send and receive a mobile push notification:

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

# Prerequisites

In order to send push notifications, an AuthKey_XXXYYY.p8 authentication file from Apple is required.

* First, go to Apple developer account page, sign in, then select Certificates, IDs & Profiles.

* You will then be able to generate your push certificate and download it.

* Finally, activate the Push notification feature integrate your certificate in your 4D for iOS project from the Publishing section.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

You can find more information about this process [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) in the component documentation.

# Basic example to manage your push notifications

Here is an example to send a push notification to test@4d.com:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

As simple as that!


## Where to go from here?

The component that handles and makes the process easier is also available [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md), in order to adapt the push notifications to your own needs. Feel free to use it and pick the aspects that are relevant to you. And of course, all contributors are welcome to this project in the form of feedback, bug reports and even better: pull requests.


