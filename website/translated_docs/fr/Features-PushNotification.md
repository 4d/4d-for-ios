---
id: push-notification
title: Notifications Push
---

> **OBJECTIFS**
> 
> Integrate push notifications to your 4d for iOS apps

> **CONDITIONS PRÉALABLES**
> 
> The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) component that allows to send push notifications is integrated in 4D single-user and 4D Server.

## Qu'est-ce qu'une notification push ?

On a mobile phone, a push notification is an alert message received via an application, that you can open, delete, allow or block. It can be very useful to notify your app users that a new version is available, for example.

But what about the architecture that needs to be implemented, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display, on the user's mobile?

## Architecture technique

Voici les différents éléments nécessaires pour créer, envoyer et recevoir une notification push mobile :

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

## Conditions préalables

To send push notifications, an AuthKey_XXXYYY.p8 authentication file from Apple is required.

* Tout d'abord, accédez à la page du compte de développeur Apple, connectez-vous, puis sélectionnez Certificates, IDs & Profiles.

* Vous pourrez alors générer votre certificat Push et le télécharger.

* Finally, activate the Push notification feature to integrate your certificate in your 4D for iOS project from the Publishing section.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Vous pouvez trouver plus d'informations sur ce processus [ici](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) dans la documentation des composants.

## Exemple de base pour gérer vos notifications push

Voici un exemple pour envoyer une notification push à `test@4d.com` :

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

It couldn't be any easier!

## Push notification with data synchronization

With a push notification, you can also launch a synchronization to update your data.

For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone.

To do so in the 4D Mobile App Server component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the `dataSynchro` boolean value in the `userInfo` object.

### Data synchronization with a notification opening a record

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
### Data synchronization with a simple notification

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
![Data synchronization animation](assets/en/push-notification/pushandSynchro.gif)

## Windows Configuration

Windows users need to download the [last CURL version](https://curl.se/download.html) to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8 and 4DBASE/MobileApps/ID.BundleID/manifest.json files from your Design database to your production database.

## Que faire ensuite ?

Le composant qui gère et facilite le processus est également disponible [ici](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md), afin d'adapter les notifications push à vos propres besoins. N'hésitez pas à l'utiliser et à choisir les aspects les plus pertinents pour votre application. Bien évidemment, tous les contributeurs sont les bienvenus dans ce projet, via des retours d'expérience, des rapports de bug, voire même des "pull requests".


