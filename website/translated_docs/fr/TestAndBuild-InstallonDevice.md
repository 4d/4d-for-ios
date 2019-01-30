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

Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [Free Apple Developer Program](free-developer-account.html): For testing only
* [Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html): For an App Store Deployment
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): To deploy your app in-house

C'est parti !

## ÉTAPE 1. Création d'un compte

* **Apple ID**: Create your Apple ID. If you don’t already have one, click [here](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## ÉTAPE 2. Configuration d'Xcode

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/test-build/Developer-Account-4D-for-iOS.png) 

## ÉTAPE 3. Obtention de votre Team ID

* If your are using a [Free Apple Developer Program](free-developer-account.html) go to [step 4](#step-4-team-id-for-free-account).
* If your are using an [Apple Developer Program for organization](register-apple-developer-program-organization.html), [individual](register-apple-developer-program-individual.html) or an [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) go to [step 5](#step-5-team-id-for-paid-subscription-account).

## ÉTAPE 4. Team ID pour un compte gratuit

### Profil et certificat fournis par Xcode

* Open your current project from the BUILD tab.

![Build tab](assets/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/test-build/account-Selection-Free-Account.png)

* Connect your device to your computer and select it from the top menu in Xcode.

![Select your device](assets/test-build/select-device-Free-Account.png)

* Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.

### Création du projet avec Xcode

* Press the Build and run Button from Xcode !

![Build and Run](assets/test-build/Build-Run-Free-Account.png)

## ÉTAPE 5. Team ID pour un compte payant

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![Developer Account membership](assets/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General section](assets/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Go to STEP 6 to run your project on your device.

## ÉTAPE 6. Installation

### Installation automatique avec Apple Configurator 2

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

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