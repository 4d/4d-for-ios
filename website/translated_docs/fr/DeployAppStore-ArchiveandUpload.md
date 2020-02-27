---
id: deploy-app-store-archive-and-upload
title: Archiver et télécharger un projet
---

:::tip OBJECTIVES Archive and upload your project to App Store Connect. :::

## ÉTAPE 1. Configurez Xcode

* Si vous avez choisi un compte Apple Developer, celui-ci est immédiatement disponible. 
* Si vous avez choisi un compte de développeur Apple en tant qu’entreprise, vous devez attendre la validation d’Apple.
* Lorsque votre compte est accessible, ajoutez-le à Xcode dans Preferences > Accounts.
* Xcode installera automatiquement les certificats et les éléments de provisioning nécessaires. 

## ÉTAPE 2. Obtenez votre Team ID

* Connectez-vous à votre compte de développeur Apple. Vous trouverez votre Team ID dans Membership.

![Obtenez votre Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## ÉTAPE 3. Configurez 4D for iOS

* Lancez 4D for iOS
* Dans l’onglet SECTIONS :

**General: Enter your Team ID**

![Team ID](assets/en/deploy-app-store/Team-ID.png)

**Publishing: Enter your production URL**

(HTTPS is mandatory for deployment).

![Publication](assets/en/deploy-app-store/Publishing.png)

* Dans l’onglet GÉNÉRATION :

**Build and Run: Build your Project**

![BuildTab](assets/en/deploy-app-store/BuildTab.png)

## ÉTAPE 4. Ouvrez votre projet avec Xcode

* À partir de l’onglet GÉNÉRATION de l'éditeur de projet, cliquez sur Projet > Ouvrir le produit avec Xcode

![Ouvrez votre projet avec Xcode](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ÉTAPE 5. Archivez votre projet à partir de Xcode

* À partir de Xcode, accédez au Menu du simulateur et sélectionnez **Generic iOS Device**.

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Puis, dans le menu, cliquez sur Product et sélectionnez **Archive**

![Archivez votre projet à partir de Xcode](assets/en/deploy-in-house/Archive-your-Project.png)

## ÉTAPE 6. Validez votre projet

* À la fin de l’archivage, la fenêtre de l’organisateur apparaît avec l’archive que vous venez de créer.

* Cliquez sur le bouton **Validate** pour démarrer le processus de validation.

![Validez votre projet](assets/en/deploy-app-store/Organizer-Project-Validation.png)

* La première étape consiste à sélectionner les options de distribution de l'App Store.

![App Store distribution options](assets/en/deploy-app-store/App-Store-Distribution-options.png)

* Vous devez ensuite re-signer votre application. Laisser à Xcode le soin de gérer cette étape en cochant l'option **Automatically manage signing**.

![Re-sign your app](assets/en/deploy-app-store/Re-sign-your-App.png)

* Vérifiez le contenu de votre application.

![App review](assets/en/deploy-app-store/Review-App.png)

* Si le processus de validation est réussi, le message suivant s'affiche :

![Validation](assets/en/deploy-app-store/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Cliquez sur **Done**. Cela vous renverra à la fenêtre de l’organisateur.

## ÉTAPE 7. Téléchargez sur l’App Store

Once the validation process has been completed, you're ready to add your app to the App Store.

* Cliquez sur le bouton **Upload to App Store**.

![Téléchargez sur l’App Store](assets/en/deploy-app-store/Upload-to-AppStore.png)

* Lorsque votre projet a été téléchargé avec succès, vous verrez cette fenêtre s'afficher :

![Upload successful](assets/en/deploy-app-store/upload-Successful.png)

## ÉTAPE 8. Sélectionnez la version destinée à l’App Store

* Depuis l’App Store Connect > App Store > iOS App, sélectionnez votre application et cliquez sur le bouton **"+"** qui apparaît dans la section Build.

![Add build](assets/en/deploy-app-store/Add-build-app-store-connect.png)

* Sélectionnez la version que vous souhaitez envoyer et cliquez sur **Done**.

![Build selection](assets/en/deploy-app-store/Select-build-app-store-connect.png)

* Enfin, cliquez sur le bouton **Submit for Review**.

## ÉTAPE 9. Envoyez pour révision

* La dernière étape consiste à répondre à quelques questions sur votre application. 

![Envoyez pour révision](assets/en/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* Une fois l'étape des réponses aux questions terminée, cliquez sur **Submit**.

* En moyenne, la durée de révision d'App Store est de deux jours !