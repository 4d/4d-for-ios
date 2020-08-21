---
id: deploy-app-store-app-store-connect
title: Créer une fiche sur App Store
---

> **OBJECTIFS**
> 
> * Créer un identifiant d’application sur son compte développeur ("Developer")
> * Créer son application dans l’App Store Connect


> **CONDITIONS PRÉALABLES**
> 
> [Apple Developer Program pour les entreprises](register-apple-developer-program-organization.html) ou [les particuliers](register-apple-developer-program-individual.html)


## ÉTAPE 1. Créez votre identifiant d'application

#### Qu'est-ce qu'un identifiant d'application ?

*Un identifiant d'application est une chaîne composée de 2 parties servant à identifier une ou plusieurs applications à partir d'une seule équipe de développement. La chaîne est constituée d’un Team ID et d'un Bundle ID, tous deux séparés par un point (.) (ex : TeamID.BundleID).*

> **NOTE**
> 
> * Si vous avez choisi un compte de développeur Apple en tant que particulier ("Apple Developer Account as an individual"), votre compte est immédiatement disponible et vous permet de créer votre identifiant d'application.
> * Si vous avez choisi un compte de développeur Apple en tant qu’entreprise ("Apple Developer Account as an organization"), vous devez attendre la validation d’Apple pour pouvoir créer votre identifiant d'application.


Pour créer votre identifiant d'application, sélectionnez [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle) depuis votre compte développeur

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

Cliquez sur le signe **"+"** dans la partie supérieure gauche pour créer une nouvelle application iOS.

![Créez une nouvelle application iOS](assets/deploy-app-store/Create-new-iOS-App.png)

Ajoutez les informations suivantes :

* **Platforms** : sélectionnez iOS.
* **Name** : le nom de votre application.
* **Primary language** : la langue principale de votre application.
* **Bundle ID** : sélectionnez le Bundle ID de votre application à partir de la liste déroulante.
* **SKU** : un identifiant unique pour votre application (un ID privé non visible par les utilisateurs)
* **Limit User Access (optionnel)** : limitez aux utilisateurs l'accès à votre application grâce à App Manager, Developer, Marketer, ou Sales.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)

> **NOTE**
> 
> Si votre Bundle ID n’est pas disponible, il se peut qu'il soit déjà utilisé par une autre application de l’App Store. Vous devrez alors changer le vôtre dans votre projet Xcode.

## ÉTAPE 4. Informations sur l’application

Dans App Store Connect > App Information :

* Définissez le "Privacy Policy URL" de votre application (facultatif).
* Entrez un sous-titre pour votre application. Celui-ci apparaîtra en-dessous du nom de votre application dans l’App Store d'iOS 11.
* Sélectionnez une catégorie primaire et secondaire (facultatif) dans laquelle/lesquelles apparaitra votre application.

![Informations sur l’application](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## ÉTAPE 5. Prix et disponibilité

C’est ici que vous pourrez définir le prix de votre application.

> **ASTUCES**
> 
> Vous pouvez appliquer des remises limitées dans le temps en précisant les dates de début et de fin de l'offre.

## ÉTAPE 6. Préparation à l'inscription

Dans **Version Information**, renseignez tous les atouts de votre application que vous souhaitez faire figurer dans l’App Store :

> **ASTUCES**
> 
> Vous pouvez générer toutes vos captures d'écran dans le simulateur (File > New Screen Shot).

![Préparation à l'inscription](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Ajoutez des captures d'écran de votre application. Les captures d'écran de l'iPhone 5.5 "Super Retina Display et de l'iPad 12.9" Retina Display sont obligatoires. Pour plus d'informations, consultez [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Déroulez vers le bas, définissez les **Keywords** (mots-clés) et complétez la **Description** (ce que les utilisateurs visualiseront dans l'App Store).
* Vous pouvez partager des mises à jour de votre application, y compris de nouvelles offres promotionnelles, de nouveaux contenus ou fonctionnalités, des offres limitées ou d'autres événements intégrés dans votre application. Vous pouvez également ajouter un **Promotional Text** (texte promotionnel) qui s'affichera au-dessus de votre description dans l'App Store (pour les clients dont les appareils fonctionnent avec iOS 11 ou avec des versions plus récentes).
* Saisissez un **Support URL** qui comprend des informations d'assistance pour votre application. Cette URL sera visible sur l'App Store.
* **Marketing URL** est facultatif. Il peut diriger les utilisateurs vers un site Web de marketing relié à votre application.

Dans la section **iOS App** :

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Localisez les versions de votre produit dans **Build**.

* Dans la zone **General App Information**, entrez les droits d'auteur, la version et les coordonnées du représentant commercial de votre application.
* L'icône de votre application est incluse dans le projet 4D for iOS généré.
* L'évaluation ("rating") est une propriété requise pour le contrôle parental de l'App Store. Cliquez sur "Edit" et sélectionnez la catégorie d'âge adaptée à votre application.

Les sections **App Review Information** et **Version Release** contiennent des informations requises par l'App Store. Les informations fournies ici ne seront pas visibles par les utilisateurs.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information** : Coordonnées et informations de sécurité confidentielles.
* **Version Release** : Indique s'il s'agit d'une publication automatique ou manuelle.
* Enfin, cliquez sur **Save**.
