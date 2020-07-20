---
id: install-device
title: Installation sur votre appareil iOS
---

<div markdown="1" class = "objectives">
**OBJECTIFS **
Installer une application 4D for iOS sur un appareil connecté
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**

* Apple Developer Program.
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac pour installer votre application automatiquement (facultatif).
</div>

<div markdown="1" class = "tips">
**NOTE**
Apple configurator 2 requires **macOS 10.14** or later.
</div>

En fonction de vos objectifs et de vos préférences, vous pouvez choisir de vous inscrire dans l’un des programmes suivants :

* [Apple Developer Program gratuit](free-developer-account.html) : à des fins de test uniquement
* [Apple Developer Program pour les entreprises](register-apple-developer-program-organization.html) ou [pour les particuliers](register-apple-developer-program-individual.html) : à des fins de déploiement sur l'App Store
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) : à des fins de déploiement interne de votre application

C'est parti !

## ÉTAPE 1. Créez un compte

* **Apple ID**: Create your Apple ID. Si vous n'en possédez pas un, cliquez [ici](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## ÉTAPE 2. Configurez Xcode

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/en/test-build/Developer-Account-4D-for-iOS.png)

## ÉTAPE 3. Obtenez votre Team ID

* Si vous utilisez un [Apple Developer Program gratuit](free-developer-account.html), passez à [l'étape 4](#step-4-team-id-for-free-account).
* Si vous utilisez un [Apple Developer Program pour les entreprises](register-apple-developer-program-organization.html), [pour les particuliers](register-apple-developer-program-individual.html) ou un [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html), passez à [l'étape 5](#step-5-team-id-for-paid-subscription-account).

## ÉTAPE 4. Team ID pour un compte gratuit

### Profil et certificat fournis par Xcode

* Ouvrez votre projet actuel depuis l’onglet GÉNÉRATION.

![Build tab](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/en/test-build/account-Selection-Free-Account.png)

* Connectez votre appareil à votre ordinateur et sélectionnez-le dans le menu supérieur de Xcode.

![Sélectionnez votre appareil](assets/en/test-build/select-device-Free-Account.png)

* Xcode génère automatiquement les profils et les certificats de provisioning nécessaires à la création de votre application.

### Création du projet avec Xcode

* Cliquez sur le bouton Build and Run dans Xcode !

![Build and Run](assets/en/test-build/Build-Run-Free-Account.png)

## ÉTAPE 5. Team ID pour un compte payant

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![Developer Account membership](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General section](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Passez à l’étape 6 pour exécuter votre projet sur votre appareil.

## ÉTAPE 6. Installation

### Installation automatique avec Apple Configurator 2

* Lorsque votre application est prête, cliquez sur l’onglet GÉNÉRATION.
* Connectez votre appareil à votre ordinateur avec un câble USB.
* From the BUILD tab, click on **Install**.

![Install button](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* L’application est installée sur votre appareil !

### Installation manuelle avec Xcode

* Lorsque votre application est prête, cliquez sur l’onglet GÉNÉRATION.
* Connectez votre appareil à votre ordinateur avec un câble USB.
* From the BUILD tab, click on **Install**.

![Manual installation](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* Une archive de votre projet est créée.

![Archive creation](assets/en/test-build/Archive-creation.png)

* Indiquez l'archive générée dans Finder.

![Reveal archive in Finder](assets/en/test-build/Reveal-archive-in-Finder.png)

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* L’application est installée sur votre appareil !





