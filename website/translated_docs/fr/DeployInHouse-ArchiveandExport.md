---
id: deploy-in-house-archive-and-export
title: Archiver et télécharger votre projet
sidebar_label: Archiver et télécharger votre projet
---
<div class = "objectives"> 

**OBJECTIFS**

* Archiver et télécharger votre projet
* Générer des fichiers .ipa des manifest</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Un serveur Web sécurisé
* Une icône de résolution 57 x 57 px
* Une icône de résolution 512 x 512 px</div> 

## ÉTAPE 1. Configurez Xcode

Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts.

Xcode will automatically install required provisioning and certificates.

## ÉTAPE 2. Obtenez votre Team ID

* Connectez-vous à votre compte Apple Developer. Vous trouverez votre Team ID dans Membership.

![Get your Team ID](assets/deploy-in-house/Team-ID-4D-for-iOS.png)

## ÉTAPE 3. Configurez 4D for iOS

* Lancez 4D for iOS

* Dans l’onglet SECTIONS :
    
    * Général : Entrez votre Team ID.
    
    ![Enterprise-Team-ID](assets/deploy-in-house/Enterprise-Team-ID.png)
    
    * Publication : Entrez votre URL de production (HTTP est obligatoire pour le déploiement).

* Dans l’onglet GÉNÉRATION :
    
    * Créer et exécuter : Créez votre projet.

## ÉTAPE 4. Ouvrez votre projet avec Xcode

* À partir de l’onglet GÉNÉRATION de l'éditeur de projet, cliquez sur Projet > Ouvrir le produit avec Xcode

![pen your project with Xcode ](assets/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ÉTAPE 5. Archivez votre projet à partir de Xcode

* A partir de Xcode, accédez au Menu du simulateur et sélectionnez **Generic iOS Device**

![Generic iOS Device](assets/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Puis, dans le menu, cliquez sur Product et sélectionnez **Archive**

![Archive your Project](assets/deploy-in-house/Archive-your-Project.png)

## ÉTAPE 6. Exportez votre projet

* À la fin de l’archivage, la fenêtre de l’organisateur apparaît avec l’archive que vous venez de créer

* Cliquez sur **Export**.

![Export your project](assets/deploy-in-house/Organizer-window-archive.png)

## ÉTAPE 7. Sélectionnez votre méthode de distribution

* Sélectionnez **Enterprise** et cliquez sur **Next**.

![Distribution Method](assets/deploy-in-house/Distribution-Method-selection.png)

## ÉTAPE 8. Sélectionnez les options de distribution de votre entreprise

* You can leave all option boxes checked.

![Enterprise distribution options](assets/deploy-in-house/Enterprise-distribution-options.png)

* You can choose to let Xcode generate a manifest.plist file for you or generate it manually.

* Cliquez sur **Next**.

#### What is a manifest?

The manifest is an XML-based property list and should contain:

* **URL** : URL pointing to the .ipa file.
* **display-image**: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* **full-size-image**: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* **bundle-identifier**: Your app identifier string. You can get it from your app's .plist file.
* **bundle-version**: Your app's current bundle version string. You can get it from your app's .plist file.
* **title**: Your app's name.

Here is an example of a manifest.plist file :

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
    

## ÉTAPE 9. Distribution manifest information

* We recommand letting Xcode do the job of entering your app URL as well as the icons URLs. You will, of course, have the option to change those URLs later.

![Distribution manifest information](assets/deploy-in-house/Distribution-manifest-information.png)

* Click **Next**. 

## ÉTAPE 10. Re-sign your application

* Let Xcode manage the **Automatically manage signing** option.

![Re-sign your application](assets/deploy-in-house/Re-sign-your-application.png)

* Cliquez sur **Next**.

## ÉTAPE 11. Revoyez le contenu de votre application .ipa

* Here you can verify that your application identifier is correct as well as your Team ID.

![Review your app.ipa content](assets/deploy-in-house/Review-ipa-content.png)

* Click on **Export** and select where to save your app folder on your computer.