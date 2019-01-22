---
id: deploy-in-house-distribution
title: Distribuez votre application interne
sidebar_label: Distribuez votre application interne
---
<div class = "objectives"> 

**OBJECTIFS**

* Télécharger votre application sur un serveur sécurisé</div> 

## ÉTAPE 1. Téléchargez votre application<div class = "tips"> 

**CONSEILS**

Vous pouvez utiliser n’importe quel service de stockage en nuage pour distribuer votre application dès qu’elle est sécurisée (Dropbox, Google Drive, etc.).</div> 

Téléchargez votre application sur un serveur sécurisé :

* Ressources (image d'affichage et image en taille réelle)
* Fichier manifest.plist
* Fichier .ipa<div class = "tips"> 

**NOTE**

Votre ressource et vos URL ipa doivent correspondre aux URL définis dans votre fichier manifest.plist.</div> 

## ÉTAPE 2. Créez le lien d’installation

* Créez un lien de Services ITMS (iTunes Music Store) avec, comme paramètre, l’adresse web complète de votre fichier manifest :

    itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist
    
    

* Ce lien peut être utilisé pour l’envoi d’e-mails, intégré dans une page html, ou même dans un code QR.

Voici un exemple simple :

![Contact demo app install](assets/deploy-in-house/Contact-demo-app-install.png)

*Le QR Code utilisé pour cette documentation n’est pas actif.*

## ÉTAPE 3. Installez votre application d'entreprise sur iOS

* Installez l’application en cliquant sur le lien ou en scannant un Code QR

![Scan and install](assets/deploy-in-house/Scan-and-install.png)

* Lorsque vous ouvrez une application d’entreprise installée manuellement, une notification s’affichera indiquant que le développeur de l’application n’est pas fiable sur votre appareil.

* Ignorez ce message et cliquez sur **Annuler**.

* Dans Paramètres > Général > Profils ou Profils & Gestion de l'appareil, dans la rubrique « App d'Entreprise », le profil du développeur est répertorié.

![Untrust developer](assets/deploy-in-house/Untrust-developer.png)

* Tapez le nom du profil développeur pour que ce dernier soit reconnu comme fiable.

![Trust-confirmation](assets/deploy-in-house/Trust-confirmation.png)

* Vous pouvez ensuite accéder à votre application et l'ouvrir.

Félicitations  ... vous pouvez désormais distribuer votre première application interne !