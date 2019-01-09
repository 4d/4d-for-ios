---
id: deploy-app-store-archive-and-upload
title: Archivez et téléchargez votre projet
sidebar_label: Archivez et téléchargez votre projet
---
<div class = "objectives"> 

**OBJECTIFS**

* Archivez et publiez votre projet App Store Connect</div> 

## ÉTAPE 1. Configuration de Xcode

* Si vous avez choisi un compte de développeur Apple, votre compte est immédiatement disponible. 
* Si vos avez choisi un compte de développeur Apple en tant qu’organisation, vous devez attendre la validation d’Apple.
* Lorsque votre compte est accessible, ajoutez-le à Xcode dans Préférences > Comptes.
* Xcode installera automatiquement les certificats et les éléments de mise à disposition nécessaires. 

## ÉTAPE 2. Obtenir l'ID de votre équipe

* Connectez-vous à votre compte de développeur Apple. Vous pouvez trouver votre ID d’équipe dans Membership.

![Get your Team ID](assets/deploy-in-house/Team-ID-4D-for-iOS.png)

## ÉTAPE 3. Configurer 4D for iOS

* Lancez 4D for iOS

* Dans l’onglet SECTIONS :

**Général : Entrez votre ID d’équipe**

![Team ID](assets/deploy-app-store/Team-ID.png)

**Publication : Entrez votre URL de production**

(HTTPS est obligatoire pour le déploiement).

![Publishing](assets/deploy-app-store/Publishing.png)

* Dans l’onglet BUILD :

**Créer et exécuter : Créez votre projet**

![BuildTab](assets/deploy-app-store/BuildTab.png)

## ÉTAPE 4. Ouvrir votre projet avec Xcode

* À partir de l’onglet BUILD de l'éditeur de projet, cliquez sur Projet > Ouvrir le produit avec Xcode

![Open your project with Xcode](assets/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ÉTAPE 5. Archiver votre projet à partir de Xcode

* A partir de Xcode, allez dans le Menu du simulateur et sélectionnez **Generic iOS Device**.

![Generic iOS Device](assets/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Puis, dans le menu, cliquez sur Product et sélectionnez **Archive**

![Archive your project from Xcode](assets/deploy-in-house/Archive-your-Project.png)

## ÉTAPE 6. Valider votre projet

* À la fin de l’archivage, la fenêtre de l’organisateur apparaît avec l’archive que vous venez de créer.

* Click on the **Validate** button to start the validation process.

![Validate your project](assets/deploy-app-store/Organizer-Project-Validation.png)

* The first step is selecting the App Store distribution options.

![App Store distribution options](assets/deploy-app-store/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by checking the **Automatically manage signing** option.

![Re-sign your app](assets/deploy-app-store/Re-sign-your-App.png)

* Review your app's content.

![App review](assets/deploy-app-store/Review-App.png)

* If your project passes the validation process, you should see this message:

![Validation](assets/deploy-app-store/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Click **Done**. This will return you to the Organizer window.

## STEP 7. Upload to App Store

Once the validation process has been completed, you're ready to add your app to the App Store.

* Click the **Upload to App Store** button.

![Upload to App Store](assets/deploy-app-store/Upload-to-AppStore.png)

* When your project has been successfully uploaded, you'll see this window:

![Upload successful](assets/deploy-app-store/upload-Successful.png)

## STEP 8. Select the build for the App Store

* From App Store Connect > App Store > iOS App, select your app and click the **+** button that appears in the Build section

![Add build](assets/deploy-app-store/Add-build-app-store-connect.png)

* Select the build you want to submit and click **Done**.

![Build selection](assets/deploy-app-store/Select-build-app-store-connect.png)

* Finally, click on the **Submit for Review** button.

## STEP 9. Submit for Review

* The final step to submitting your app for review is answering a few quick questions about your app. 

![Submit for Review](assets/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click **Submit**.

* The average App Store review time is around two days!