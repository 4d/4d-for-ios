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
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac pour automatiser l'installation de votre application (facultatif)</div> 

En fonction de vos objectifs et de vos préférences, vous pouvez choisir de vous inscrire dans l'un des programmes suivants d'Apple : * [Free Apple Developer Program](free-developer-account.html): A des fins de test uniquement * [Apple Developer Program for organization](register-apple-developer-program-organization.html) ou [individual](register-apple-developer-program-individual.html): Pour déployer sur App Store * [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): Pour déployer votre application interne

C'est parti !

## ÉTAPE 1. Création d'un compte

* **Identifiant Apple ** : Créez votre identifiant Apple. Si vous n'en possédez pas un, cliquez [ici](https://appleid.apple.com/account#!&page=create).

* **Developer Account** : Choisissez un Apple Developer Program (for organizations ou bien for individuals) si vous souhaiter déployer votre application sur l'App Store ou bien depuis l'Apple Developer Enterprise Program (pour un déploiement interne).

## ÉTAPE 2. Configuration d'Xcode

* **Developer Account** : In Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/test-build/Developer-Account-4D-for-iOS.png) 

## ÉTAPE 3. Obtention de votre Team ID

* Si vous utilisez un [Free Apple Developer Program](free-developer-account.html), passez à [l'étape 4](#step-4-team-id-for-free-account).
* If your are using an [Apple Developer Program for organization](register-apple-developer-program-organization.html), [individual](register-apple-developer-program-individual.html) or an [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) go to [step 5](#step-4-select-your-team-id).

## STEP 4. Team ID for Free account

### Let Xcode generate your provisioning profile and certificate

* Open your current project from the BUILD tab.

![Build tab](assets/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/test-build/account-Selection-Free-Account.png)

* Connect your device to your computer and select it from the top menu in Xcode.

![Select your device](assets/test-build/select-device-Free-Account.png)

* Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.

### Select your Team ID

* Reopen 4D for iOS in Sections > General and select your new Team ID in the Team popup.

![Select your Team ID](assets/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Go to [step 6](#step-6-build) to run your project on your device from the Project Editor.

## STEP 5. Team ID for paid subscription account

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![Developer Account membership](assets/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General section](assets/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Go to STEP 6 to run your project on your device.

## STEP 6. Installation

### Install automatically with Apple Configurator 2

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

![Install button](assets/test-build/Install-button-build-tab-4D-for-iOS.png)

* The app is being installed on your device!

### Install manually using Xcode

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