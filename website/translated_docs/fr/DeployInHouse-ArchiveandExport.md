---
id: deploy-in-house-archive-and-export
title: Archiver et exporter un projet
---

> **OBJECTIFS**
> 
> * Archiver et exporter un projet 4D for iOS
> * Générer des fichiers .ipa et des fichiers manifest


> **CONDITIONS PRÉALABLES**
> 
> * [Apple Enterprise Developer Program – $/an](register-apple-developer-enterprise-program.html)
> * Un serveur Web sécurisé
> * Une icône de résolution 57 x 57 px
> * Une icône de résolution 512 x 512 px


## ÉTAPE 1. Configurez Xcode

Une fois votre compte validé par Apple, ouvrez Xcode et ajoutez votre compte Apple Enterprise Developer dans Preferences > Accounts.

Xcode installera automatiquement les certificats et les éléments de provisioning nécessaires.

## ÉTAPE 2. Obtenez votre Team ID

* Connectez-vous à votre compte Apple Developer. Vous trouverez votre Team ID dans Membership.

![Obtenez votre Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## ÉTAPE 3. Configurez 4D for iOS

* Lancez 4D for iOS

* Dans l’onglet SECTIONS :

    * Général : Saisissez votre Team ID.

    ![Enterprise-Team-ID](assets/fr/deploy-in-house/Enterprise-Team-ID.png)

    * Publication : Entrez votre URL de production (HTTP est obligatoire pour le déploiement).

* Dans l’onglet GÉNÉRATION :
    * Créer & exécuter : Créez votre projet.

## ÉTAPE 4. Ouvrez votre projet avec Xcode

* À partir de l’onglet GÉNÉRATION de l'éditeur de projet, cliquez sur Projet > Ouvrir le produit avec Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ÉTAPE 5. Archivez votre projet à partir de Xcode

* À partir de Xcode, accédez au Menu du simulateur et sélectionnez **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Puis, dans le menu, cliquez sur Product et sélectionnez **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## ÉTAPE 6. Exportez votre projet

* À la fin de l’archivage, la fenêtre de l’organisateur apparaît avec l’archive que vous venez de créer

* Cliquez sur **Export**.

![Exportez votre projet](assets/en/deploy-in-house/Organizer-window-archive.png)

## ÉTAPE 7. Sélectionnez votre méthode de distribution

* Sélectionnez **Enterprise** et cliquez sur **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## ÉTAPE 8. Sélectionnez les options de distribution de votre entreprise

* Vous pouvez laisser toutes les options cochées.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* Vous pouvez laisser Xcode vous générer un fichier manifest.plist ou bien le générer manuellement.

* Cliquez sur **Next**.

#### Qu'est-ce qu'un manifest ?

Le manifest est une liste de propriétés fondée sur XML et doit contenir :

* **URL** : un URL vers le fichier .ipa.
* **display-image** : un URL vers une icône PNG 57 x 57 px (72 x 72 px pour iPad) qui sera utilisée lors du téléchargement et de l'installation.
* **full-size-image** : un URL vers une image PNG 512 x 512 px représentant l'application iTunes.
* **bundle-identifier** : La chaîne d'identification de votre application. Vous pouvez l'obtenir à partir du fichier .plist de votre application.
* **bundle-version** : La chaine de la version courante du bundle de votre application. Vous pouvez l'obtenir à partir du fichier .plist de votre application.
* **title** : Le nom de votre application.

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

* Cliquez sur **Next**.


## ÉTAPE 10. Re-signez votre application

* Laissez à Xcode le soin de gérer l'option **Automatically manage signing**.

![Re-signez votre application](assets/en/deploy-in-house/Re-sign-your-application.png)

* Cliquez sur **Next**.

## ÉTAPE 11. Vérifiez le contenu de votre application .ipa

* Vous pouvez vérifier ici l'exactitude de l'identifiant de votre application et de votre Team ID.

![Vérifiez le contenu de votre application .ipa](assets/en/deploy-in-house/Review-ipa-content.png)

* Cliquez sur **Export** et sélectionnez l’emplacement dans lequel vous souhaitez enregistrer le dossier de votre application sur votre ordinateur.
