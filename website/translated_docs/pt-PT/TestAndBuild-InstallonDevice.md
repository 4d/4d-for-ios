---
id: install-device
title: Installing on your iOS device
---

<div class = "objectives"> 

**OBJECTIVES**

Install a 4D for iOS application on a connected device</div> <div class = "prerequisites"> 

**PREREQUISITES**

* Apple Developer Program.
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate app installation (optional).</div> <div class = "tips"> 

**NOTA **

Apple configurator 2 exige **macOS 10.14** ou superior.</div> 

Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [Free Apple Developer Program](free-developer-account.html): For testing only
* [Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html): For an App Store Deployment
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): To deploy your app in-house

Let's go through the process...

## PASSO 1. Account creation

* **Apple ID**: Create your Apple ID. If you don’t already have one, click [here](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## PASSO 2. Configuração Xcode

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/en/test-build/Developer-Account-4D-for-iOS.png) 

## PASSO 3. Obtenha uma ID de Time

* If your are using a [Free Apple Developer Program](free-developer-account.html) go to [step 4](#step-4-team-id-for-free-account).
* If your are using an [Apple Developer Program for organization](register-apple-developer-program-organization.html), [individual](register-apple-developer-program-individual.html) or an [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) go to [step 5](#step-5-team-id-for-paid-subscription-account).

## PASSO 4. Team ID for Free account

### Let Xcode generate your provisioning profile and certificate

* Open your current project from the BUILD tab.

![Build tab](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/en/test-build/account-Selection-Free-Account.png)

* Connect your device to your computer and select it from the top menu in Xcode.

![Select your device](assets/en/test-build/select-device-Free-Account.png)

* Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.

### Build your project from Xcode using your Free Account

* Press the Build and run Button from Xcode !

![Criar e executar](assets/en/test-build/Build-Run-Free-Account.png)

## PASSO 5. Team ID for paid subscription account

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![Developer Account membership](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General section](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Go to STEP 6 to run your project on your device.

## PASSO 6. Installation

### Install automatically with Apple Configurator 2

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

![Install button](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* The app is being installed on your device!

### Install manually using Xcode

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

![Manual installation](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* An archive of your project is created

![Archive creation](assets/en/test-build/Archive-creation.png)

* Reveal the generated archive in Finder

![Reveal archive in Finder](assets/en/test-build/Reveal-archive-in-Finder.png)

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* The app is being installed on your device!