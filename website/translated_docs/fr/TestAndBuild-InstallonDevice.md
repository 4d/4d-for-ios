---
id: install-device
title: Installer votre appareil iOS
sidebar_label: Installer votre appareil iOS
---
<div class = "objectives"> 

**OBJECTIFS**

* Installer une application 4D for iOS sur un appareil connecté</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Apple Developer Program
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac pour automatiser l'installation de votre application (facultatif)

**Note :** Apple configurator 2 nécessite **macOS 10.14** ou une version plus récente</div> 

En fonction de vos objectifs et de vos préférences, vous pouvez choisir de vous inscrire dans l'un des programmes suivants d'Apple : * [Free Apple Developer Program](free-developer-account.html): A des fins de test uniquement * [Apple Developer Program for organization](register-apple-developer-program-organization.html) ou [individual](register-apple-developer-program-individual.html): Pour déployer votre application sur App Store * [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): Pour déployer votre application interne

C'est parti !

## ÉTAPE 1. Création d'un compte

* **Identifiant Apple ** : Créez votre identifiant Apple. Si vous n'en possédez pas un, cliquez [ici](https://appleid.apple.com/account#!&page=create).

* **Developer Account** : Choisissez un Apple Developer Program (for organizations ou bien for individuals) si vous souhaiter déployer votre application sur l'App Store ou bien depuis l'Apple Developer Enterprise Program (pour un déploiement interne).

## ÉTAPE 2. Configuration d'Xcode

* **Developer Account** : Dans Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/test-build/Developer-Account-4D-for-iOS.png) 

## ÉTAPE 3. Obtention de votre Team ID

* Si vous utilisez un [Free Apple Developer Program](free-developer-account.html), passez à [l'étape 4](#step-4-team-id-for-free-account).
* Si vous utilisez un [Apple Developer Program for organization](register-apple-developer-program-organization.html), [individual](register-apple-developer-program-individual.html) ou un [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) passez à [l'étape 5](#step-5-team-id-for-paid-subscription-account).

## ÉTAPE 4. Team ID pour un compte gratuit

### Laissez Xcode vous fournir votre profil et votre certificat

* Ouvrez votre projet actuel depuis l’onglet GÉNÉRATION.

![Build tab](assets/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Vérifiez que l'option**Automatically manage signing** est cochée, puis sélectionnez le compte que vous avez ajouté [ici](free-developer-account.html) à partir de la liste déroulante "Team".

![Account-Selection](assets/test-build/account-Selection-Free-Account.png)

* Connectez votre appareil à votre ordinateur et sélectionnez-le dans le menu dans le menu supérieur d'Xcode.

![Select your device](assets/test-build/select-device-Free-Account.png)

* Xcode génère automatiquement les profils et les certificats de mise à disposition nécessaires que vous aurez besoin pour créer votre application.

### Créez votre projet avec Xcode à l'aide de votre compte gratuit

* Cliquez sur le bouton Créer et exécuter depuis Xcode !

![Build and Run](assets/test-build/Build-Run-Free-Account.png)

## ÉTAPE 5. Team ID pour un compte payant

* **Team ID** : Cliquez sur Developer Account > Membership et obtenez votre Team ID. ![Developer Account membership](assets/test-build/Team-ID-4D-for-iOS.png)

* 4D **for iOS** : lancez 4D for iOS depuis Sections > Général et entrez votre Team ID. ![General section](assets/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Passez à l’étape 6 pour exécuter votre projet sur votre appareil.

## ÉTAPE 6. Installation

### Installation automatique avec Apple Configurator 2

* Lorsque votre application est prête, cliquez sur l’onglet GÉNÉRATION.
* Connectez votre appareil à votre ordinateur avec un câble USB.
* Dans l’onglet GÉNÉRATION, cliquez sur **Installer**.

![Install button](assets/test-build/Install-button-build-tab-4D-for-iOS.png)

* The app is being installed on your device!

### Installation manuelle avec Xcode

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

![Manual installation](assets/test-build/Manual-installation-4D-for-iOS.png)

* An archive of your project is created

![Archive creation](assets/test-build/Archive-creation.png)

* Reveal the generated archive in Finder

![Reveal archive in Finder](assets/test-build/Reveal-archive-in-Finder.png)

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](assets/test-build/Devices-and-Simulators-4D-for-iOS.png)

* The app is being installed on your device!