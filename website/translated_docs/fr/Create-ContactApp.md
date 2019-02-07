---
id: contact-app
title: Application Contacts
---
<div class = "objectives"> 

**OBJECTIFS**

Créer sa première application avec 4D for iOS</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

Cliquez [ici](prerequisites.html) pour commencer !</div> 

Ce tutoriel vous permettra de vous lancer directement dans le développement de 4D for iOS. Il vous permettra de créer, rapidement et facilement, votre première application.

*Scénario : Vous êtes un directeur commercial et vous souhaitez consulter votre liste de contacts durant vos déplacements.*

Nous allons créer une application de répertoire pour iPhone afin de rechercher des contacts dans une liste et d'afficher leurs coordonnées. Nous l’appellerons « Contacts ».

## ÉTAPE 1. Prise en main

Téléchargez notre projet Starter (de prise en main) qui contient un fichier de base de données et l'icône du projet, mais qui n'inclut pas encore de projet mobile.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/contact-app/ContactStarter.zip">PROJET STARTER</a>

  </p>
</div>

## ÉTAPE 2. Création du projet

Commençons par une structure très simple à l’aide d’une seule table. Dans 4D, cliquez sur **Nouveau > Projet mobile**. assets/en/en/ Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## ÉTAPE 3. L’éditeur de projet

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## ÉTAPE 4. Sections - Général

Here, you'll configure your app's primary information:

* **Organisation :** Entrez le nom de votre entreprise ainsi que l'identifiant de l’application (ex. « Mon entreprise » et « com.MonEntreprise »).
* **Produit :** Entrez le nom de votre application. Appelons-la « Contacts ».
* **ID :** (Bundle ID) généré automatiquement et composé de l’identifiant de votre entreprise et du nom de votre produit.
* **Version :** Laissez la version 1.0 inchangée et définissez les droits d’auteur de votre application. Il est fortement recommandé d’utiliser les formats fournis par 4D for iOS.
* **Icônes :** Glissez et déposez une icône pour votre application dans la zone consacrée.
* **Développeur :** Cette sous-section est renseignée automatiquement à partir du nom d’utilisateur sur votre ordinateur. Copiez-collez la référence de votre équipe de développeurs (à partir de votre compte développeur) dans le champ "Team". Vous pouvez également laisser le champ vide pour générer votre application uniquement sur le Simulateur.

![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ÉTAPE 5. Sections - Structure

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.<div class = "tips"> 

**NOTE**

Nous vous recommandons vivement de publier votre clé primaire afin d’identifier chaque enregistrement de votre base</div> 

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ÉTAPE 6. Sections - Libellés et icônes

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Définissez un court et un long libellé pour votre table Contact
* Cliquez sur le champ icône. La bibliothèque d’icônes s’affiche. Vous pouvez choisir une icône pour illustrer la table Contact. Vous pouvez également choisir de laisser le champ "Icônes" vide. 4D for iOS vous génèrera une icône par défaut !

**Field Properties:**

* Définissez un court et un long libellé pour les champs que vous avez sélectionnés.
* Cliquez sur le champ "Icônes" et choisissez des icônes pour chaque champ. Il existe plusieurs options pour les icônes de champ : 
    * Vous pouvez sélectionner une icône pour chaque champ,
    * Si au moins une icône a été définie et les autres champs sont laissés vides, 4D for iOS vous génèrera des icônes par défaut
    * Vous pouvez simplement les laisser vides pour n'afficher aucune icône de champ. 

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ÉTAPE 7. Sections - Menu

Next up is defining the order of the tables in the app's main menu.

* **Tables disponibles :** Affiche la ou les tables à utiliser.
* **Tables sélectionnées :** Affiche les éléments de menu de votre application. Notre exemple ne contient qu'un seul élément, mais il vous est possible de glisser et déposer vos éléments afin de les réordonner.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ÉTAPE 8. Sections - Formulaires

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Sélectionnez un modèle de formulaire Liste pour afficher votre table sous forme de liste. Pour notre application Contacts, nous allons utiliser le modèle **Profile**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Glissez et déposez les champs que vous souhaitez afficher sur le modèle, à savoir, "Last Name" dans le champ "à utiliser pour la recherche" et le champ "Titre". Le "champ à utiliser pour la recherche" et le "champ à utiliser en tant que section" sont facultatifs. Pour le moment, laissez le "champ à utiliser en tant que section" vide.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Sélectionnez le modèle de formulaire qui convient le mieux à votre application. Pour notre application Contacts, nous allons utiliser le modèle **Visual Contact**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Glissez et déposez le contenu dans les sections appropriées du modèle de formulaire détaillé, à savoir, First Name, Last Name et Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ÉTAPE 9. Création de l’application

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Cliquez sur l’onglet **Génération**.
* Sélectionnez un appareil à utiliser en tant que Simulateur en cliquant sur le bouton "appareil".
* Cliquez sur **Générer et exécuter**.
* Patientez quelques secondes et ... le tour est joué ! Votre application iOS est créée !

![Build and Run](assets/en/contact-app/Build-the-app-simulator.png)

## ÉTAPE 10. Que faire ensuite ?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/contact-app/ContactFinal.zip">PROJET FINAL</a>

  </p>
</div>