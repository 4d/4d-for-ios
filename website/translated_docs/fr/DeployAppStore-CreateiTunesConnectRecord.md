---
id: deploy-app-store-app-store-connect
title: Créer une fiche sur App Store
---

<div markdown="1" class = "objectives">
**OBJECTIFS **

* Créer un identifiant d’application sur son compte développeur ("Developer")
* Créer son application dans l’App Store Connect
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
[Apple Developer Program pour les entreprises](register-apple-developer-program-organization.html) ou [les particuliers](register-apple-developer-program-individual.html)
</div>


## ÉTAPE 1. Créez votre identifiant d'application

#### Qu'est-ce qu'un identifiant d'application ?

*Un identifiant d'application est une chaîne composée de 2 parties servant à identifier une ou plusieurs applications à partir d'une seule équipe de développement. The string consists of a Team ID and a Bundle ID, with a period (.) separating the two parts (ex: TeamID.BundleID).*

<div markdown="1" class = "tips">
**NOTE**

* Si vous avez choisi un compte de développeur Apple en tant que particulier ("Apple Developer Account as an individual"), votre compte est immédiatement disponible et vous permet de créer votre identifiant d'application.
* Si vous avez choisi un compte de développeur Apple en tant qu’entreprise ("Apple Developer Account as an organization"), vous devez attendre la validation d’Apple pour pouvoir créer votre identifiant d'application.
</div>

Pour créer votre identifiant d'application, sélectionnez [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle) depuis votre compte développeur

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

![Créez une nouvelle application iOS](assets/deploy-app-store/Create-new-iOS-App.png)

Ajoutez les informations suivantes :

* **Platforms**: Select iOS.
* **Name**: The name of your app.
* **Primary language**: The main language for your app.
* **Bundle ID**: Select your App Bundle ID from the dropdown list.
* **SKU**: A unique ID for your app (this stays private and is not seen by users)
* **Limit User Access (optional)**: Allows you to limit access to your app to users with App Manager, Developer, Marketer, or Sales roles.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)

<div markdown="1" class = "tips">
**NOTE**
Si votre Bundle ID n’est pas disponible, il se peut qu'il soit déjà utilisé par une autre application de l’App Store. Vous devrez alors changer le vôtre dans votre projet Xcode.
</div>

## ÉTAPE 4. Informations sur l’application

From App Store Connect > App Information:

* Définissez le "Privacy Policy URL" de votre application (facultatif).
* Enter a subtitle for your app. This will appear below your app's name throughout the App Store in iOS 11.
* Sélectionnez une catégorie primaire et secondaire (facultatif) dans laquelle/lesquelles apparaitra votre application.

![Informations sur l’application](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## ÉTAPE 5. Prix et disponibilité

C’est ici que vous pourrez définir le prix de votre application.

<div markdown="1" class = "tips">
**ASTUCES**
Vous pouvez appliquer des remises limitées dans le temps en précisant les dates de début et de fin de l'offre.
</div>

## ÉTAPE 6. Préparation à l'inscription

Add all of the assets for your app to appear in the App Store in **Version Information**:

<div markdown="1" class = "tips">
**ASTUCES**
You can generate all of your screenshots in Simulator (File > New Screen Shot).
</div>

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

The **App Review Information** and **Version Release** sections include information required by the App Store. Les informations fournies ici ne seront pas visibles par les utilisateurs.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information.
* **Version Release**: Specifies an automatic or manual publication.
* Finally, click **Save**.
