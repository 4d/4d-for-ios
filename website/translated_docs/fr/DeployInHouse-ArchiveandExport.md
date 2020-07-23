---
id: deploy-in-house-archive-and-export
title: Archiver et exporter un projet
---

<div markdown="1" class = "objectives">
**OBJECTIFS**

* Archiver et exporter un projet 4D for iOS
* Générer des fichiers .ipa et des fichiers manifest
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**

* [Apple Enterprise Developer Program – $/an](register-apple-developer-enterprise-program.html)
* Un serveur Web sécurisé
* Une icône de résolution 57 x 57 px
* Une icône de résolution 512 x 512 px
</div>

## ÉTAPE 1. Configurez Xcode

Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts.

Xcode installera automatiquement les certificats et les éléments de provisioning nécessaires.

## ÉTAPE 2. Obtenez votre Team ID

* Connectez-vous à votre compte Apple Developer. Vous trouverez votre Team ID dans Membership.

![Obtenez votre Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## ÉTAPE 3. 4D for iOS configuration

* Lancez 4D for iOS

* Dans l’onglet SECTIONS :

    * Général : Saisissez votre Team ID.

    ![Enterprise-Team-ID](assets/fr/deploy-in-house/Enterprise-Team-ID.png)

    * Publication : Entrez votre URL de production (HTTP est obligatoire pour le déploiement).

* Dans l’onglet GÉNÉRATION :
    * Créer & exécuter : Créez votre projet.

## ÉTAPE 4. Ouvrez votre projet avec Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ÉTAPE 5. Archivez votre projet à partir de Xcode

* From Xcode, go to the simulator Menu and select **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## ÉTAPE 6. Exportez votre projet

* À la fin de l’archivage, la fenêtre de l’organisateur apparaît avec l’archive que vous venez de créer

* Click **Export**.

![Exportez votre projet](assets/en/deploy-in-house/Organizer-window-archive.png)

## ÉTAPE 7. Sélectionnez votre méthode de distribution

* Select **Enterprise** and click **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## ÉTAPE 8. Sélectionnez les options de distribution de votre entreprise

* Vous pouvez laisser toutes les options cochées.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* Vous pouvez laisser Xcode vous générer un fichier manifest.plist ou bien le générer manuellement.

* Click **Next**.

#### Qu'est-ce qu'un manifest ?

Le manifest est une liste de propriétés fondée sur XML et doit contenir :

* **URL** : URL pointing to the .ipa file.
* **display-image**: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* **full-size-image**: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* **bundle-identifier**: Your app identifier string. Vous pouvez l'obtenir à partir du fichier .plist de votre application.
* **bundle-version**: Your app's current bundle version string. Vous pouvez l'obtenir à partir du fichier .plist de votre application.
* **title**: Your app's name.

Voici un exemple de fichier manifest.plist :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>https://...Contact.ipa</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>display-image</string>
                    <key>url</key>
                    <string>https://...Contact_icon_57.png</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>full-size-image</string>
                    <key>url</key>
                    <string>https://...Contact_icon_512.png</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>com.contactApp.ContactDemoapp</string>
                <key>bundle-version</key>
                <string>1.0</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>Contact Demo app</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>
```


## ÉTAPE 9. Informations sur la distribution du manifest

* Nous vous recommandons de laisser à Xcode le soin d'entrer l'URL de votre application et les URL des icônes. Bien entendu, vous aurez la possibilité de changer les URL plus tard.

![Informations sur la distribution du manifest](assets/en/deploy-in-house/Distribution-manifest-information.png)

* Click **Next**.


## ÉTAPE 10. Re-signez votre application

* Let Xcode manage the **Automatically manage signing** option.

![Re-signez votre application](assets/en/deploy-in-house/Re-sign-your-application.png)

* Click **Next**.

## ÉTAPE 11. Vérifiez le contenu de votre application .ipa

* Vous pouvez vérifier ici l'exactitude de l'identifiant de votre application et de votre Team ID.

![Vérifiez le contenu de votre application .ipa](assets/en/deploy-in-house/Review-ipa-content.png)

* Click on **Export** and select where to save your app folder on your computer.
