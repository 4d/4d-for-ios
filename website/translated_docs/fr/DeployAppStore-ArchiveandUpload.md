---
id: deploy-app-store-archive-and-upload
title: Archiver et télécharger un projet
---

<div markdown="1" class = "objectives">
**OBJECTIFS**
Archiver et publier un projet sur l'App Store Connect.
</div>

## ÉTAPE 1. Configurez Xcode
* Si vous avez choisi un compte Apple Developer, celui-ci est immédiatement disponible.
* Si vous avez choisi un compte de développeur Apple en tant qu’entreprise, vous devez attendre la validation d’Apple.
* When your account is accessible, add it to Xcode in Preferences > Accounts.
* Xcode installera automatiquement les certificats et les éléments de provisioning nécessaires.

## ÉTAPE 2. Obtenez votre Team ID

* Connectez-vous à votre compte Apple Developer. Vous trouverez votre Team ID dans Membership.

![Obtenez votre Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## ÉTAPE 3. 4D for iOS configuration

* Lancez 4D for iOS
* Dans l’onglet SECTIONS :

**Général : Entrez votre Team ID**

![Team ID](assets/en/deploy-app-store/Team-ID.png)

**Publication : Entrez votre URL de production**

(HTTPS est obligatoire pour le déploiement).

![Publication](assets/en/deploy-app-store/Publishing.png)

* Dans l’onglet GÉNÉRATION :

**Créer & exécuter : Créez votre projet**

![BuildTab](assets/en/deploy-app-store/BuildTab.png)

## ÉTAPE 4. Ouvrez votre projet avec Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![Ouvrez votre projet avec Xcode](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ÉTAPE 5. Archivez votre projet à partir de Xcode

* From Xcode go to the simulator Menu and select **Generic iOS Device**.

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Archivez votre projet à partir de Xcode](assets/en/deploy-in-house/Archive-your-Project.png)

## ÉTAPE 6. Validez votre projet

* À la fin de l’archivage, la fenêtre de l’organisateur apparaît avec l’archive que vous venez de créer.

* Click on the **Validate** button to start the validation process.

![Validez votre projet](assets/en/deploy-app-store/Organizer-Project-Validation.png)

* La première étape consiste à sélectionner les options de distribution de l'App Store.

![App Store distribution options](assets/en/deploy-app-store/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by  checking the **Automatically manage signing** option.

![Re-sign your app](assets/en/deploy-app-store/Re-sign-your-App.png)

* Vérifiez le contenu de votre application.

![App review](assets/en/deploy-app-store/Review-App.png)

* Si le processus de validation est réussi, le message suivant s'affiche :

![Validation](assets/en/deploy-app-store/Archive-validation-complete.png)

Si une erreur se produit, un message s’affichera. Ces erreurs doivent être corrigées avant de recommencer le processus de validation.

* Click **Done**. Cela vous renverra à la fenêtre de l’organisateur.

## ÉTAPE 7. Téléchargez sur l’App Store

Une fois la validation terminée, vous êtes prêt à ajouter votre application sur l’App Store.

* Click the **Upload to App Store** button.

![Téléchargez sur l’App Store](assets/en/deploy-app-store/Upload-to-AppStore.png)

* Lorsque votre projet a été téléchargé avec succès, vous verrez cette fenêtre s'afficher :

![Upload successful](assets/en/deploy-app-store/upload-Successful.png)

## ÉTAPE 8. Sélectionnez la version destinée à l’App Store

* From App Store Connect > App Store > iOS App, select your app and click the **+** button that appears in the Build section

![Add build](assets/en/deploy-app-store/Add-build-app-store-connect.png)

* Select the build you want to submit and click **Done**.

![Build selection](assets/en/deploy-app-store/Select-build-app-store-connect.png)

* Finally, click on the **Submit for Review** button.

## ÉTAPE 9. Envoyez pour révision

* La dernière étape consiste à répondre à quelques questions sur votre application.

![Envoyez pour révision](assets/en/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click **Submit**.

* En moyenne, la durée de révision d'App Store est de deux jours !
