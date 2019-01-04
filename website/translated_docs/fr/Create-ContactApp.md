---
id: contact-app
title: Contact App
sidebar_label: Contact App
---
<div class = "objectives"> 

**OBJECTIFS**

* Créez votre première application avec 4D for iOS</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Ce tutoriel vous permettra de vous plonger directement dans le développement de 4D for iOS. Il vous permettra de créer rapidement et facilement votre première application.

*Scénario : Vous êtes un directeur commercial et vous souhaitez consulter vos coordonnées durant vos déplacements.*

Nous allons créer une application iPhone de répertoire pour rechercher des noms de contact dans la liste puis afficher les détails de chaque contact. Nous l’appellerons « Contact ».

## ÉTAPE 1. Prise en main

Téléchargez notre projet de prise en main qui contient un fichier de base de données et une icône du projet, mais pas encore de projet mobile.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactStarter.zip">STARTER PROJECT</a>

  </p>
</div>

## ÉTAPE 2. Création du projet

Commençons par une structure très simple à l’aide d’une seule table. Dans 4D, allez à **Nouveau > Projet mobile**.

Nommez votre projet puis cliquez sur **Créer**.

![Project Creation](assets/contact-app/Project-creation-4D-for-iOS.png)

## ÉTAPE 3. Ouvrir l’éditeur de projet

Bienvenue dans 4D for iOS ! L’écran d’accueil affiche les principales étapes de création d'applications de ce superbe outil. 🙂

![Welcome Screen](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

Cliquez sur **Continuer**.

## ÉTAPE 4. Sections - Général

Vous pourrez configurer ici les informations primaires de votre application :

* **Organisation:** Entrez le nom de votre société ainsi que l'identificateur de l’application (ex. « Ma société » et com.MaSociete).
* **Produit :** Entrez le nom de votre application. Appelons-le « Contact ».
* **ID:** (Bundle ID) est généré automatiquement comme une composition de l’identificateur de votre société et du nom de votre produit.
* **Version :** Laissez la version 1.0 et définissez les droits d’auteur de votre application. Il est fortement recommandé d’utiliser les formats fournis par 4D for iOS.
* **Icônes:** Glissez et déposez une icône pour votre application dans la zone de l’icône.
* **Développeur :** Ceci est renseigné automatiquement à partir du nom d’utilisateur sur votre ordinateur. Copiez/collez la référence de votre équipe de développeurs (à partir de votre compte développeur) dans le champ Équipe. Vous pouvez également laisser le champ vide pour générer votre application uniquement sur le Simulateur.

![General](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ÉTAPE 5. Sections - Structure

C’est ici que vous définirez un sous-ensemble de vos données (les tables et champs de la base de données ) à présenter aux appareils mobiles.

Dans notre exemple, sélectionnez **ID**, **Prénom**, **Nom**, **Fonction**, **Société**, **Téléphone**, **Notes** et **Photo**.<div class = "tips"> 

**NOTE**

* Nous vous recommandons vivement de publier votre clé primaire afin d’identifier chaque enregistrement de votre base.</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## STEP 6. Sections - Icons & Labels

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:** * Define a short and a long label for your Contact table * Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

**Field Properties:** * Define a short and a long label for your selected fields. * Click on the icon field and select icons for each field. There are several options for field icons: * You can select an icon for each field, * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you * You can simply leave them empty to not display any field icons.

![Icons & Labels](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## STEP 7. Sections - Main Menu

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![Main Menu](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## STEP 8. Sections - Forms

We're almost done, but first we need to decide how the app's layout. There are both List and Details forms to choose from.

* Select a list form template to display your table as a list. For our Contact app, let’s use the **Profile** template.

![List form template](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, *i.e.*, Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![List form content](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form. * Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Drag and drop the content onto the appropriate places on the detail form template, *i.e.*, First Name, Last Name, and Photo.

![Detail form content](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## STEP 9. Build the app

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* Select a device to use as a Simulator by clicking on the device button.
* Click **Build and Run**.
* Wait a few seconds and …. voila! Your iOS app is alive!

![Build and Run](assets/contact-app/Build-the-app-simulator.png)

## STEP 10. Where to go from here?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">FINAL PROJECT</a>

  </p>
</div>