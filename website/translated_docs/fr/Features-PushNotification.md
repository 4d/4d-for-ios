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
Le composant [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) qui permet d'envoyer des notifications push est intégré dans 4D mono et 4D Server 18 R4.
</div>

# Qu'est-ce qu'une notification push ?

Sur un appareil mobile, une notification Push est un message d'alerte, reçu via une application, que vous pouvez ouvrir, supprimer, autoriser ou bloquer. Cela peut être très utile, par exemple, pour informer les utilisateurs de votre application qu'une nouvelle version est disponible.

Mais qu'en est-il de l'architecture à mettre en œuvre, pour intégrer cette fonctionnalité dans une application mobile ? Quel est le processus d'une notification push, partant de la création à l'affichage sur l'appareil de l'utilisateur ?

# Architecture technique

Voici les différents éléments nécessaires pour créer, envoyer et recevoir des notifications push mobile :

![Push notification process](assets/en/push-notification/4D-for-ios-push-notification.png)

# Conditions préalables

Pour envoyer des notifications push, un fichier d'authentification AuthKey_XXXYYY.p8 d'Apple est requis.

* Tout d'abord, accédez à la page du compte de développeur Apple, connectez-vous, puis sélectionnez **Certificates, IDs & Profiles**.

* Vous pourrez alors générer votre certificat Push et le télécharger.

* Activez la fonctionnalité de notification Push et intégrez votre certificat dans votre projet 4D for iOS depuis la section Publication.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Vous pouvez trouver plus d'informations sur ce processus [sur la page Push notification](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) dans la documentation des composants.

# Exemple de base pour gérer vos notifications push

Voici un exemple pour savoir comment envoyer une notification push à `test@4d.com` :

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

C'est aussi simple que ça !


## Que faire ensuite ?

Le composant qui gère et facilite le processus est également disponible [ici](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md), afin d'adapter les notifications push à vos propres besoins. N'hésitez pas à l'utiliser et à choisir les aspects les plus pertinents pour votre application. Bien évidemment, tous les contributeurs sont les bienvenus dans ce projet, via des retours d'expérience, des rapports de bug, voire même des "pull requests".


