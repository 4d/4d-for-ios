---
id: contact-app
title: Application Contacts
---

:::tip OBJECTIVES Create your first app with 4D for iOS :::

:::CONDITIONS PRÉALABLES Cliquez [ici](prerequisites.html) pour pouvoir commencer ! :::

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## ÉTAPE 1. Prise en main
Download our Starter Project, which contains a database file and project icon, but no mobile project yet.

<div style="text-align: center; margin-top: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">PROJET STARTER</a>
  </p>
</div>

## ÉTAPE 2. Création du projet

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## ÉTAPE 3. L’éditeur de projet

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## ÉTAPE 4. Sections - Général

Here, you'll configure your app's primary information:

* **Organization:** Enter the name of your company and the application's identifier (ex. « Mon entreprise » et « com.MonEntreprise »).
* **Product:** Enter your app's name. Appelons-la « Contacts ».
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your app's copyright. Il est fortement recommandé d’utiliser les formats fournis par 4D for iOS.
* **Icons:** Drag and drop an icon for your app into the icon area.
* **Developer:** This is automatically filled from the user name on your computer. Copiez-collez la référence de votre équipe de développeurs (à partir de votre compte développeur) dans le champ "Team". Vous pouvez également laisser le champ vide pour générer votre application uniquement sur le Simulateur.

![Général](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ÉTAPE 5. Sections - Structure

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

:::tip NOTE We highly recommend publishing your primary key in order to identify each record of your database :::

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ÉTAPE 6. Sections - Libellés et icônes

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Définissez un libellé court et un libellé long pour votre table Contact.
* Cliquez sur le champ icône. La bibliothèque d’icônes s’affiche. Vous pouvez choisir une icône pour illustrer la table Contact, comme vous pouvez aussi laisser le champ "Icônes" vide. 4D for iOS vous génèrera une icône par défaut !

**Field Properties:**

* Définissez un court et un long libellé pour les champs que vous avez sélectionnés.
* Cliquez sur le champ "Icônes" et choisissez des icônes pour chaque champ. Plusieurs options sont possibles :
    * Vous pouvez sélectionner une icône pour chaque champ.
    * Si au moins une icône a été définie et si les autres champs sont laissés vides, 4D for iOS vous génèrera des icônes par défaut.
    * Vous pouvez simplement les laisser vides pour n'afficher aucune icône de champ.

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ÉTAPE 7. Sections - Menu

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Notre exemple ne contient qu'un seul élément, mais il vous est possible de glisser et déposer vos éléments afin de les réordonner.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ÉTAPE 8. Sections - Formulaires

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Sélectionnez un modèle de formulaire Liste pour afficher votre table sous forme de liste. For our Contact app, let’s use the **Profile** template.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, <i>i.e.</i>, Last Name into the search and Title fields. Le "champ à utiliser pour la recherche" et le "champ à utiliser en tant que section" sont facultatifs. Pour le moment, laissez le "champ à utiliser en tant que section" vide.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)


* Drag and drop the content onto the appropriate places on the detail form template, <i>i.e.</i>, First Name, Last Name, and Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ÉTAPE 9. Création de l’application

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* Sélectionnez un appareil à utiliser en tant que Simulateur en cliquant sur le bouton "appareil".
* Click  **Build and Run**.
* Patientez quelques secondes et ... le tour est joué ! Votre application iOS est créée !

![Créer & exécuter](assets/en/contact-app/Build-the-app-simulator.png)

## ÉTAPE 10. Que faire ensuite ?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Mais ce n'est pas fini ! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROJET FINAL</a>
  </p>
</div>
