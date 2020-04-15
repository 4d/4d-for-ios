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

* Cliquez sur le signe "+" situé près de *Register iOS App IDs* pour ajouter un nouvel identifiant d’application.

* Définissez le nom et le Bundle ID de votre application.

![App ID](assets/en/deploy-app-store/Developer-account-App-ID.png)

* Définissez les services d’application ("App Services") à inclure dans votre application

![App Services](assets/en/deploy-app-store/App-Services-to-include.png)

* Confirmez votre identifiant d'application en cliquant sur **Register**.

![Confirm App ID](assets/en/deploy-app-store/Confirm-App-ID.png)

## ÉTAPE 2. Identifiez-vous sur l'App Store Connect

* Connectez-vous à votre [compte App Store Connect](https://appstoreconnect.apple.com)
* Cliquez sur **My Apps**.

![App Store Connect](assets/en/deploy-app-store/App-Store-Connect-home-page.png)

## ÉTAPE 3. Créez une nouvelle application iOS

Click the **+** sign in the top left corner to create a new iOS App.

![Créez une nouvelle application iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Add the following information:

* **Platforms** : sélectionnez iOS.
* **Name** : le nom de votre application.
* **Primary language** : la langue principale de votre application.
* **Bundle ID** : sélectionnez le Bundle ID de votre application à partir de la liste déroulante.
* **SKU** : un identifiant unique pour votre application (un ID privé non visible par les utilisateurs)
* **Limit User Access (optionnel)** : limitez aux utilisateurs l'accès à votre application grâce à App Manager, Developer, Marketer, ou Sales.

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

* Déroulez vers le bas, définissez les **Keywords** (mots-clés) et complétez la **Description** (ce que les utilisateurs visualiseront dans l'App Store).

* Vous pouvez partager des mises à jour de votre application, y compris de nouvelles offres promotionnelles, de nouveaux contenus ou fonctionnalités, des offres limitées ou d'autres événements intégrés dans votre application. Vous pouvez également ajouter un **Promotional Text** (texte promotionnel) qui s'affichera au-dessus de votre description dans l'App Store (pour les clients dont les appareils fonctionnent avec iOS 11 ou avec des versions plus récentes).
* Entrez un **Support URL** qui inclut des informations de support pour votre application. Cet URL sera visible sur l’App Store.
* **Marketing URL** est facultatif. Il peut diriger les utilisateurs vers un site Web de marketing relié à votre application. 

In the **iOS App section**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* Dans la zone **General App Information**, entrez les droits d'auteur, la version et les coordonnées du représentant commercial de votre application.
* L'icône de votre application est incluse dans le projet 4D for iOS généré.
* L'évaluation ("rating") est une propriété requise pour le contrôle parental de l'App Store. Cliquez sur "Edit" et sélectionnez la catégorie d'âge adaptée à votre application.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information** : Coordonnées et informations de sécurité confidentielles. 
* **Version Release** : Indique s'il s'agit d'une publication automatique ou manuelle.
* Enfin, cliquez sur **Save**.