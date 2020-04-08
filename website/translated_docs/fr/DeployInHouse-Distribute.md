---
id: deploy-in-house-distribution
title: Distribuer une application interne
---

:::tip OBJECTIVES Upload your app to a secured server. :::


## ÉTAPE 1. Téléchargez votre application

Upload your app files to a secured server:

* Ressources (image d'affichage et image en taille réelle)
* Fichier manifest.plist
* Fichier .ipa

You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.).

:::tip NOTE Your asset and ipa URLs must match the URLs defined in your manifest.plist file. :::

## ÉTAPE 2. Créez le lien d’installation

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

```
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

This link can be used when sending emails, embedded in an html page, or even within a QR code.

Here is a simple example:

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*The QR Code used for this documentation is not active.*

## ÉTAPE 3. Installez votre application sur iOS

* Installez l’application en cliquant sur le lien ou en scannant un Code QR.

![Scan and install](assets/en/deploy-in-house/Scan-and-install.png)

* Lorsque vous ouvrez une application installée manuellement, une notification s’affichera, indiquant que le développeur de l’application n’est pas fiable sur votre appareil.

* Ignore this message and click **Cancel**.

* In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.

![Untrust developer](assets/en/deploy-in-house/Untrust-developer.png)

* Saisissez le nom du profil développeur pour que ce dernier soit reconnu comme fiable.

![Trust-confirmation](assets/en/deploy-in-house/Trust-confirmation.png)

* Vous pouvez ensuite accéder à votre application et l'ouvrir.

Félicitations  ! you can now distribute your first app in-house!
