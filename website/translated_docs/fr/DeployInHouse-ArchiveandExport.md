---
id: deploy-in-house-archive-and-export
title: Archiver et télécharger votre projet
sidebar_label: Archiver et télécharger votre projet
---
<div class = "objectives"> 

**OBJECTIFS**

* Archiver et télécharger votre projet
* Générer des fichiers .ipa des fichiers manifest</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Un serveur Web sécurisé
* Une icône de résolution 57 x 57 px
* Une icône de résolution 512 x 512 px</div> 

## ÉTAPE 1. Configurez Xcode

Une fois votre compte validé par Apple, ouvrez Xcode et ajoutez votre compte Apple Enterprise Developer dans Preferences > Accounts.

Xcode installera automatiquement les certificats et les éléments de mise à disposition nécessaires.

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

* Vous pouvez laisser toutes les options cochées.

![Enterprise distribution options](assets/deploy-in-house/Enterprise-distribution-options.png)

* Vous pouvez laisser Xcode vous générer un fichier manifest.plist ou bien le générer manuellement.

* Cliquez sur **Next**.

#### Qu'est-ce qu'un manifest ?

Le manifest est une liste de propriétés fondée sur XML et doit contenir :

* **URL** : un URL pointant vers le fichier .ipa.
* **display-image**: un URL pointant vers une icône PNG 57 x 57 px (72 x 72 px pour iPad) qui sera utilsée lors du téléchargement et de l'installation.
* **full-size-image**: un URL pointant vers une image PNG 512 x 512 px représentant l'application iTunes.
* **bundle-identifier**: La chaîne d'identification de votre application. Vous pouvez l'obtenir à partir du fichier .plist de votre application.
* **bundle-version**: La chaine de la version courante du bundle de votre application. Vous pouvez l'obtenir à partir du fichier .plist de votre application.
* **title**: Le nom de votre application.

Voici un exemple de fichier manifest.plist :

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
    

## ÉTAPE 9. Informations de distribution du manifest

* Nous vous recommandons de laisser Xcode entrer l'URL de votre application et les URL des icônes. Bien entendu, vous aurez la possibilité de changer les URL plus tard.

![Distribution manifest information](assets/deploy-in-house/Distribution-manifest-information.png)

* Cliquez sur **Next**. 

## ÉTAPE 10. Re-signez votre application

* Laissez Xcode gérer l'option **Automatically manage signing**.

![Re-sign your application](assets/deploy-in-house/Re-sign-your-application.png)

* Cliquez sur **Next**.

## ÉTAPE 11. Revoyez le contenu de votre application .ipa

* Ici, vous pouvez vérifier que l'identifiant de votre application et que votre Team ID sont corrects.

![Review your app.ipa content](assets/deploy-in-house/Review-ipa-content.png)

* Cliquez sur **Export** et sélectionnez l’emplacement dans lequel vous souhaitez enregistrer le dossier de votre application sur votre ordinateur.