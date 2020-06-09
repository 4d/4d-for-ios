---
id: push-notification
title: Push notifications
---

<div markdown="1" class = "tips">

**OBJECTIVES**

Integrate push notification to your 4d for iOS apps

</div>


# What is a push notification?

On a mobile phone, a push notification is an alert message received via an application and that you can open, delete, allow or block. It can be very useful for example to notify your app users that a new version is available.

But what about the architecture to be implemented, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display on the user's mobile?

# Technical architecture

Here are the different elements needed to create, send and receive a mobile push notification:

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

# Prerequisites

In order to use the component that is necessary to send push notifications, an AuthKey_XXXX.p8 authentication file from Apple is required.

First, go to Apple developer account page, sign in, then select Certificates, IDs & Profiles.

You will then be able to generate your push certificate and download it.

You can find more information about this process [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) in the component documentation.

# An fullly integrated component to deal with push notifications

The 4D Mobile App Server Component is a toolbox component that have been developed and included into 4D to help you manage several processes sush as Email Authentication and Push notifications.

# Basic example to manage your push notifications

Here is an example to send a push notification to specific emails:

```4d

// Build your authentication object



// Define the users you want to target using their email

$mails:=New collection("quentin@test.com";"david@test.com")

$response:=$pushNotification.send($notification;$mails)

```

As simple as that!


## STEP 8. Where to go from here?

The component that handles and makes the process easier is also available [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md), in order to adapt the push notifications to your own needs. Feel free to use it and pick the aspects that are relevant to you. And of course, all contributors are welcome to this project in the form of feedback, bug reports and even better - pull requests.


