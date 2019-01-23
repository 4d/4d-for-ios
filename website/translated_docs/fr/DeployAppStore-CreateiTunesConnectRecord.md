---
id: deploy-app-store-app-store-connect
title: Créez un enregistrement App Store
sidebar_label: Créez un enregistrement App Store
---
<div class = "objectives"> 

**OBJECTIFS**

* Créez un identifiant d’application sur votre compte développeur ("Developer")
* Créez votre application dans l’App Store Connect</div> <div class = "prerequisites"> 

**PREREQUISITES**

[Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html)</div> 

## ÉTAPE 1. Créez votre identifiant d'application

#### Qu'est-ce qu'un identifiant d'application ?

*Un identifiant d'application est une chaîne composée de 2 parties servant à identifier une ou plusieurs applications à partir d'une seule équipe de développement. La chaîne est constituée d’une chaîne de recherche des Team ID et Bundle ID, tous deux séparés par un point (.) (ex : TeamID.BundleID).*<div class = "tips"> 

**NOTE**

* If you have chosen an Apple Developer Account as an individual, your account is available immediately and you can create your App ID.

* If your have chosen an Apple Developer Account as an organization, you must wait for Apple validation to create your App ID.</div> 

* Pour créer votre identifiant d'application, sélectionnez [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle) depuis votre compte développeur

* Cliquez sur le signe "+" situé près de *Register iOS App IDs* pour ajouter un nouvel identifiant d’application.

* Définissez le nom et le Bundle ID de votre application.

![App ID](assets/deploy-app-store/Developer-account-App-ID.png)

* Définissez les services d’application ("App Services") à inclure dans votre application

![App Services](assets/deploy-app-store/App-Services-to-include.png)

* Confirmez votre identifiant d'application en cliquant sur **Register**.

![Confirm App ID](assets/deploy-app-store/Confirm-App-ID.png)

## ÉTAPE 2. Identifiez-vous sur l'App Store Connect

* Connectez-vous à votre [compte App Store Connect](https://appstoreconnect.apple.com)

* Cliquez sur **My Apps**.

![App Store Connect](assets/deploy-app-store/App-Store-Connect-home-page.png)

## ÉTAPE 3. Créez une nouvelle application iOS

Cliquez sur le signe **+** dans la partie supérieur gauche pour créer une nouvelle application iOS.

![Create a new iOS App](assets/deploy-app-store/Create-new-iOS-App.png)

Ajoutez les informations suivantes :

* **Platforms** : sélectionnez iOS.
* **Name** : le nom de de votre application.
* **Primary language** : la langue principale de votre application.
* **Bundle ID** : sélectionnez le Bundle ID de votre application à partir de la liste déroulante.
* **SKU** : un identifiant unique pour votre application (un ID privé non visible par les utilisateurs)
* **Limit User Access (optionnel)** : vous permet de limiter aux utilisateurs l'accès à votre application grâce à App Manager, Developer, Marketer, ou Sales.<div class = "tips"> 

**NOTE**

If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project.</div> 

![Change BundleID](assets/deploy-app-store/Change-BundleID-Xcode-Project.png)

## ÉTAPE 4. Informations sur l’application

Depuis l’App Store Connect > App information : * définissez l'URL "Privacy Policy URL" de votre application (facultatif). * Entrez un sous-titre pour votre application. Celui-ci apparaîtra en-dessous du nom de votre application dans l’App Store d'iOS 11. * Sélectionnez une catégorie primaire et secondaire (facultatif) dans laquelle/lesquelles apparaitra votre application.

![App information](assets/deploy-app-store/App-Store-Connect-app-information.png)

## ÉTAPE 5. Prix et disponibilité

C’est ici que vous pourrez définir le prix de votre application.<div class = "tips"> 

**CONSEILS**

You can define limited-time discounts by specifying start and end dates.</div> 

## ÉTAPE 6. Préparation à l'inscription

Dans **Version Information**, renseignez tous les atouts de votre application que vous souhaitez voir apparaître dans l’App Store :

![Prepare for Submission](assets/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Ajoutez des captures d'écran de votre application. Les captures d'écran de l'iPhone 5.5 "Super Retina Display et de l'iPad 12.9" Retina Display sont obligatoires. Pour plus d'informations, consultez [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).<div class = "tips"> 

**TIPS**

You can generate all of your screenshots in Simulator (File > New Screen Shot).</div> 

* Déroulez vers le bas, définissez les **Keywords** (mots-clés) et complétez la **Description** (c'est ce que les utilisateurs visualiseront dans l'App Store).

* Vous pouvez partager des mises à jour de votre application, notamment de nouvelles offres ou des achats intégrés dans l'application, de nouveaux contenus ou fonctionnalités, des offres limitées ou d'autres événements dans votre application et ajouter un **Promotional Text** (texte promotionnel) qui s'affichera au-dessus de votre description dans l'App Store (pour les clients dont les appareils fonctionnent avec iOS 11 ou avec des versions plus récentes).

* Entrez un **Support URL** qui inclut des informations de support pour votre application. Cet URL sera visible sur l’App Store.

* **Marketing URL** est facultatif. Il peut diriger les utilisateurs vers un site Web de marketing relié à votre application.

Dans la section **iOS App** :

![iOS App section](assets/deploy-app-store/Prepare-for-submission-build-icon.png)

Localisez les versions de votre produit dans **Génération**.

* Dans la zone **General App Information**, entrez les droits d'auteur, la version et les coordonnées du représentant commercial de votre application.

* L'icône de votre application est incluse dans le projet 4D for iOS généré.

* L'évaluation est une propriété requise pour le contrôle parental de l'App Store. Cliquez sur "Edit" et sélectionnez la catégorie d'âge adaptée à votre application.

Les sections **App Review Information** et **Version Release** contiennent des informations requises par l'App Store. Les informations fournies ici ne seront pas visibles par les utilisateurs.

![App Review Information](assets/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information** : Coordonnées et informations de sécurité confidentielles. 
* **Version Release** : Indique s'il s'agit d'une publication automatique ou manuelle.

* Enfin, cliquez sur **Save**.