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

## ÉTAPE 3. Configurez 4D for iOS

* Lancez 4D for iOS

* Dans l’onglet SECTIONS :

**Général : Entrez votre ID d’équipe**

![Team ID](assets/deploy-app-store/Team-ID.png)

**Publishing: Enter your production URL**

(HTTPS is mandatory for deployment).

![Publishing](assets/deploy-app-store/Publishing.png)

* On the BUILD tab:

**Build and Run: Build your Project**

![BuildTab](assets/deploy-app-store/BuildTab.png)

## STEP 4. Open your project with Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![Open your project with Xcode](assets/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## STEP 5. Archive your project from Xcode

* From Xcode go to the simulator Menu and select **Generic iOS Device**.

![Generic iOS Device](assets/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Archive your project from Xcode](assets/deploy-in-house/Archive-your-Project.png)

## STEP 6. Validate your project

* At the end of the archive process, the Organizer window appears with the archive you have just created.

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