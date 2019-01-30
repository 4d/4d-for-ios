---
id: deploy-app-store-app-store-connect
title: Créer une fiche sur App Store
sidebar_label: Créer une fiche sur App Store
---
<div class = "objectives"> 

**OBJECTIFS**

* Créer un identifiant d’application sur son compte développeur ("Developer")
* Créer son application dans l’App Store Connect</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

[Apple Developer Program pour les entreprises](register-apple-developer-program-organization.html) ou [les particuliers](register-apple-developer-program-individual.html) – $/an</div> 

## ÉTAPE 1. Créez votre identifiant d'application

#### Qu'est-ce qu'un identifiant d'application ?

*Un identifiant d'application est une chaîne composée de 2 parties servant à identifier une ou plusieurs applications à partir d'une seule équipe de développement. La chaîne est constituée d’une chaîne de recherche des Team ID et Bundle ID, tous deux séparés par un point (.) (ex : TeamID.BundleID).*<div class = "tips"> 

**NOTE**

* Si vous avez choisi un compte de développeur Apple en tant que particulier ("Apple Developer Account as an individual"), votre compte est immédiatement disponible et vous permet de créer votre identifiant d'application.

* Si vous avez choisi un compte de développeur Apple en tant qu’entreprise ("Apple Developer Account as an organization"), vous devez attendre la validation d’Apple pour pouvoir créer votre identifiant d'application.</div> 

* To create your App ID, go to your developer account and select [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle)
* Click the + sign next to *Register iOS App IDs* to add a new App ID. 
* Define your app's Name and Bundle ID. 

![App ID](assets/deploy-app-store/Developer-account-App-ID.png)

* Définissez les services d’application ("App Services") à inclure dans votre application

![App Services](assets/deploy-app-store/App-Services-to-include.png)

* Confirmez votre identifiant d'application en cliquant sur **Register**.

![Confirm App ID](assets/deploy-app-store/Confirm-App-ID.png)

## ÉTAPE 2. Identifiez-vous sur l'App Store Connect

* Sign in to your [App Store Connect Account](https://appstoreconnect.apple.com)
* Click on **My Apps**.

![App Store Connect](assets/deploy-app-store/App-Store-Connect-home-page.png)

## ÉTAPE 3. Créez une nouvelle application iOS

Cliquez sur le signe **"+"** dans la partie supérieur gauche pour créer une nouvelle application iOS.

![Create a new iOS App](assets/deploy-app-store/Create-new-iOS-App.png)

Ajoutez les informations suivantes :

* **Platforms** : sélectionnez iOS.
* **Name** : le nom de de votre application.
* **Primary language** : la langue principale de votre application.
* **Bundle ID** : sélectionnez le Bundle ID de votre application à partir de la liste déroulante.
* **SKU** : un identifiant unique pour votre application (un ID privé non visible par les utilisateurs)
* **Limit User Access (optionnel)** : limitez aux utilisateurs l'accès à votre application grâce à App Manager, Developer, Marketer, ou Sales.<div class = "tips"> 

**NOTE**

Si votre Bundle ID n’est pas disponible, il se peut qu'il soit déjà utilisé par une autre application disponible dans l’App Store. Vous devrez alors changer le vôtre dans votre projet Xcode.</div> 

![Change BundleID](assets/deploy-app-store/Change-BundleID-Xcode-Project.png)

## ÉTAPE 4. Informations sur l’application

From App Store Connect > App Information:

* Define your app's Privacy Policy URL (optional).
* Enter a subtitle for your app. This will appear below your app's name throughout the App Store in iOS 11.
* Select a primary and secondary (optional) category for your app to appear in.

![App information](assets/deploy-app-store/App-Store-Connect-app-information.png)

## ÉTAPE 5. Prix et disponibilité

C’est ici que vous pourrez définir le prix de votre application.<div class = "tips"> 

**CONSEILS**

Vous pouvez appliquer des remises limitées dans le temps en précisant les dates de début et de fin de l'offre.</div> 

## ÉTAPE 6. Préparation à l'inscription

Dans **Version Information**, renseignez tous les atouts de votre application que vous souhaitez faire figurer dans l’App Store :

![Prepare for Submission](assets/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Add your app screenshots. Screenshots for the iPhone 5.5" Super Retina Display and iPad 12.9" Retina Display are mandatory. For more details, see [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).<div class = "tips"> 

**CONSEILS**

Vous pouvez générer toutes vos captures d'écran dans le simulateur (File > New Screen Shot).</div> 

* Scroll down and define the **Keywords** and complete the **Description** (this is what users will see in the App Store).
* You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a **Promotional Text** that will appear above your description on the App Store (for customers with devices running iOS 11 or later).
* Enter a **Support URL** that includes support information for your app. This URL will be visible on the App Store.
* **Marketing URL** is optional. This can direct users to a marketing website for your app. 

Dans la section **iOS App** :

![iOS App section](assets/deploy-app-store/Prepare-for-submission-build-icon.png)

Localisez les versions de votre produit dans **Build**.

* In **General App Information** area, enter the Copyright, Version, and Trade Representative Contact Information for your app.
* Your app icon is included in the generated 4D for iOS project.
* Rating is a required property used by the App Store's parental controls. Click Edit and select the appropriate age category for your app.

Les sections **App Review Information** et **Version Release** contiennent des informations requises par l'App Store. Les informations fournies ici ne seront pas visibles par les utilisateurs.

![App Review Information](assets/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information. 
* **Version Release**: Specifies an automatic or manual publication.
* Finally, click **Save**.