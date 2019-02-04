---
id: deploy-in-house-distribution
title: Distribuer une application interne
---
<div class = "objectives"> 

**OBJECTIFS**

Upload your app to a secured server.</div> 

## ÉTAPE 1. Téléchargez votre application<div class = "tips"> 

**CONSEILS**

Vous pouvez utiliser n’importe quel service de stockage en nuage pour distribuer votre application à partir du moment où il est sécurisé (Dropbox, Google Drive, etc.).</div> 

Téléchargez votre application sur un serveur sécurisé :

* Ressources (image d'affichage et image en taille réelle)
* Fichier manifest.plist
* Fichier .ipa<div class = "tips"> 

**NOTE**

Votre ressource et vos URL ipa doivent correspondre aux URL définis dans votre fichier manifest.plist.</div> 

## ÉTAPE 2. Créez le lien d’installation

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

    itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist
    
    

This link can be used when sending emails, embedded in an html page, or even within a QR code.

Here is a simple example:

![Contact demo app install](assets/deploy-in-house/Contact-demo-app-install.png)

*The QR Code used for this documentation is not active.*

## ÉTAPE 3. Installez votre application sur iOS

* Install the app by clicking on the link or scanning a QR Code

![Scan and install](assets/deploy-in-house/Scan-and-install.png)

* When you first open an enterprise app that you've manually installed, a notification will be displayed stating that the developer of the app isn't trusted on your device.

* Ignore this message and click **Cancel**.

* In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.

![Untrust developer](assets/deploy-in-house/Untrust-developer.png)

* Tap the name of the developer profile to establish trust for this developer.

![Trust-confirmation](assets/deploy-in-house/Trust-confirmation.png)

* You can then go to your app and open it.

Congratulations ... you can now distribute your first app in-house!