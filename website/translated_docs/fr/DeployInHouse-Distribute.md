---
id: deploy-in-house-distribution
title: Distribuer une application interne
---

<div markdown="1" class = "objectives">
**OBJECTIFS **
Télécharger une application sur un serveur sécurisé.
</div>

## ÉTAPE 1. Téléchargez votre application

Téléchargez votre application sur un serveur sécurisé :

* Ressources (image d'affichage et image en taille réelle)
* Fichier manifest.plist
* Fichier .ipa

Vous pouvez utiliser n’importe quel service de stockage en nuage pour distribuer votre application à partir du moment où il est sécurisé (Dropbox, Google Drive, etc.).

<div markdown="1" class = "tips">
**NOTE**
Votre ressource et vos URL ipa doivent correspondre aux URL définis dans votre fichier manifest.plist.
</div>

## ÉTAPE 2. Créez le lien d’installation

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

```
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

Ce lien peut être utilisé pour l’envoi d’e-mails, intégré dans une page html, ou même dans un code QR.

Voici un exemple simple :

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*Le Code QR utilisé pour cette documentation n’est pas actif.*

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

Congratulations ... you can now distribute your first app in-house!
