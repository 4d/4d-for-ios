---
id: deploy-app-store-app-store-connect
title: Créez un enregistrement App Store
sidebar_label: Créez un enregistrement App Store
---
<div class = "objectives"> 

**OBJECTIFS**

* Créez un identifiant d’application sur votre compte développeur ("Developer")
* Créez votre application dans l’App Store Connect</div> 

## ÉTAPE 1. Créez votre identifiant d'application

#### Qu'est-ce qu'un identifiant d'application ?

*Un identifiant d'application est une chaîne composée de 2 parties servant à identifier une ou plusieurs application depuis une seule équipe de développement. La chaîne est constituée d’une chaîne de recherche des Team ID et Bundle ID, tous deux séparés par un point (.) (ex : TeamID.BundleID).*<div class = "tips"> 

**NOTE**

* Si vous avez choisi un compte de développeur Apple en tant que particulier ("Apple Developer Account"), votre compte est immédiatement disponible et vous permet de créer votre identifiant d'application.

* Si vous avez choisi un compte de développeur Apple en tant qu’organisation ("Apple Developer Account as an organization"), vous devez attendre la validation d’Apple pour pouvoir créer votre identifiant d'application.</div> 

* Pour créer votre identifiant d'application, sélectionnez [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle) depuis votre compte développeur

* Cliquez sur le signe "+" situé près de *Register iOS App IDs* pour ajouter un nouvel identifiant d’application.

* Définissez le nom et le Bundle ID de votre application.

![App ID](assets/deploy-app-store/Developer-account-App-ID.png)

* Définissez les Services d’application ("App Services") à inclure dans votre application

![App Services](assets/deploy-app-store/App-Services-to-include.png)

* Confirmez votre identifiant d'application en cliquant sur **Register**.

![Confirm App ID](assets/deploy-app-store/Confirm-App-ID.png)

## ÉTAPE 2. Identifiez-vous sur l' ''App Store Connect"

* Connectez-vous à votre [compte App Store Connect](https://appstoreconnect.apple.com)

* Click on **My Apps**.

![App Store Connect](assets/deploy-app-store/App-Store-Connect-home-page.png)

## STEP 3. Create a new iOS App

Click the **+** sign in the top left corner to create a new iOS App.

![Create a new iOS App](assets/deploy-app-store/Create-new-iOS-App.png)

Add the following information:

* **Platforms**: Select iOS.
* **Name**: The name of your app.
* **Primary language**: The main language for your app.
* **Bundle ID**: Select your App Bundle ID from the dropdown list.
* **SKU**: A unique ID for your app (this stays private and is not seen by users)
* **Limit User Access (optional)**: Allows you to limit access to your app to users with App Manager, Developer, Marketer, or Sales roles.<div class = "tips"> 

**NOTE**

If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project.</div> 

![Change BundleID](assets/deploy-app-store/Change-BundleID-Xcode-Project.png)

## STEP 4. App information

From App Store Connect > App Information: * Define your app's Privacy Policy URL (optional). * Enter a subtitle for your app. This will appear below your app's name throughout the App Store in iOS 11. * Select a primary and secondary (optional) category for your app to appear in.

![App information](assets/deploy-app-store/App-Store-Connect-app-information.png)

## STEP 5. Pricing and Availability

This is where you define the price for your app.<div class = "tips"> 

**TIPS**

You can define limited-time discounts by specifying start and end dates.</div> 

## STEP 6. Prepare for Submission

Add all of the assets for your app to appear in the App Store in **Version Information**:

![Prepare for Submission](assets/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Add your app screenshots. Screenshots for the iPhone 5.5" Super Retina Display and iPad 12.9" Retina Display are mandatory. For more details, see [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).<div class = "tips"> 

**TIPS**

You can generate all of your screenshots in Simulator (File > New Screen Shot).</div> 

* Scroll down and define the **Keywords** and complete the **Description** (this is what users will see in the App Store).

* You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a **Promotional Text** that will appear above your description on the App Store (for customers with devices running iOS 11 or later).

* Enter a **Support URL** that includes support information for your app. This URL will be visible on the App Store.

* **Marketing URL** is optional. This can direct users to a marketing website for your app.

In the **iOS App section**:

![iOS App section](assets/deploy-app-store/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* In **General App Information** area, enter the Copyright, Version, and Trade Representative Contact Information for your app.

* Your app icon is included in the generated 4D for iOS project.

* Rating is a required property used by the App Store's parental controls. Click Edit and select the appropriate age category for your app.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](assets/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information. 
* **Version Release**: Specifies an automatic or manual publication.

* Finally, click **Save**.