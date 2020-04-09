---
id: deploy-app-store-app-store-connect
title: Créer une fiche sur App Store
---

<div class = "objectives">
**OBJECTIVES**

* Create an App ID on your Developer Account
* Create your app in App Store Connect</div> <div class = "prerequisites">
**PREREQUISITES**
[Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html)</div>


## ÉTAPE 1. Créez votre identifiant d'application

#### Qu'est-ce qu'un identifiant d'application ?

*An App ID is a two-part string used to identify one or more apps from a single development team. The string consists of a Team ID and a Bundle ID, with a period (.) separating the two parts (ex: TeamID.BundleID).*<div class = "tips">
**NOTE**

* If you have chosen an Apple Developer Account as an individual, your account is available immediately and you can create your App ID.
* If you have chosen an Apple Developer Account as an organization, you must wait for Apple validation to create your App ID.</div>

To create your App ID, go to your developer account and select [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle)

* Click the + sign next to *Register iOS App IDs* to add a new App ID.

* Définissez le nom et le Bundle ID de votre application.

![App ID](assets/en/deploy-app-store/Developer-account-App-ID.png)

* Définissez les services d’application ("App Services") à inclure dans votre application

![App Services](assets/en/deploy-app-store/App-Services-to-include.png)

* Confirm your App ID by clicking **Register**.

![Confirm App ID](assets/en/deploy-app-store/Confirm-App-ID.png)

## ÉTAPE 2. Identifiez-vous sur l'App Store Connect

* Connectez-vous à votre [compte App Store Connect](https://appstoreconnect.apple.com)
* Click on **My Apps**.

![App Store Connect](assets/en/deploy-app-store/App-Store-Connect-home-page.png)

## ÉTAPE 3. Créez une nouvelle application iOS

Click the **+** sign in the top left corner to create a new iOS App.

![Créez une nouvelle application iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Add the following information:

* **Platforms**: Select iOS.
* **Name**: The name of your app.
* **Primary language**: The main language for your app.
* **Bundle ID**: Select your App Bundle ID from the dropdown list.
* **SKU**: A unique ID for your app (this stays private and is not seen by users)
* **Limit User Access (optional)**: Allows you to limit access to your app to users with App Manager, Developer, Marketer, or Sales roles.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)<div class = "tips">
**NOTE**
If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project.</div>

## ÉTAPE 4. Informations sur l’application

From App Store Connect > App Information:

* Définissez le "Privacy Policy URL" de votre application (facultatif).
* Entrez un sous-titre pour votre application. Celui-ci apparaîtra en-dessous du nom de votre application dans l’App Store d'iOS 11.
* Sélectionnez une catégorie primaire et secondaire (facultatif) dans laquelle/lesquelles apparaitra votre application.

![Informations sur l’application](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## ÉTAPE 5. Prix et disponibilité

This is where you define the price for your app.<div class = "tips">
**TIPS**
You can define limited-time discounts by specifying start and end dates.</div>

## ÉTAPE 6. Préparation à l'inscription

Add all of the assets for your app to appear in the App Store in **Version Information**:<div class = "tips">
**TIPS**
You can generate all of your screenshots in Simulator (File > New Screen Shot).</div>

![Préparation à l'inscription](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Ajoutez des captures d'écran de votre application. Les captures d'écran de l'iPhone 5.5 "Super Retina Display et de l'iPad 12.9" Retina Display sont obligatoires. Pour plus d'informations, consultez [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Scroll down and define the **Keywords** and complete the **Description** (this is what users will see in the App Store).
* You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a **Promotional Text** that will appear above your description on the App Store (for customers with devices running iOS 11 or later).
* Enter a **Support URL** that includes support information for your app. This URL will be visible on the App Store.
* **Marketing URL** is optional. Il peut diriger les utilisateurs vers un site Web de marketing relié à votre application.

In the **iOS App section**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* In **General App Information** area, enter the Copyright, Version, and Trade Representative Contact Information for your app.
* L'icône de votre application est incluse dans le projet 4D for iOS généré.
* L'évaluation ("rating") est une propriété requise pour le contrôle parental de l'App Store. Cliquez sur "Edit" et sélectionnez la catégorie d'âge adaptée à votre application.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information.
* **Version Release**: Specifies an automatic or manual publication.
* Finally, click **Save**.
