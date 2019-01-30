---
id: contact-app
title: Application Contacts
sidebar_label: Application Contacts
---
<div class = "objectives"> 

**OBJECTIFS**

* Créer sa première application avec 4D for iOS</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Ce tutoriel vous permettra de vous lancer directement dans le développement de 4D for iOS. Il vous permettra de créer, rapidement et facilement, votre première application.

*Scénario : Vous êtes un directeur commercial et vous souhaitez consulter votre liste de contacts durant vos déplacements.*

Nous allons créer une application de répertoire pour iPhone afin de rechercher des contacts dans une liste et d'afficher leurs coordonnées. Nous l’appellerons « Contacts ».

## ÉTAPE 1. Prise en main

Téléchargez notre projet Starter (de prise en main) qui contient un fichier de base de données et l'icône du projet, mais qui n'inclut pas encore de projet mobile.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactStarter.zip">PROJET STARTER</a>

  </p>
</div>

## ÉTAPE 2. Création du projet

Commençons par une structure très simple à l’aide d’une seule table. Dans 4D, cliquez sur **Nouveau > Projet mobile**.

Nommez votre projet puis cliquez sur **Créer**.

![Création d’un projet](assets/contact-app/Project-creation-4D-for-iOS.png)

## ÉTAPE 3. L’éditeur de projet

Bienvenue dans 4D for iOS ! L’écran d’accueil affiche les principales étapes de création d'une application proposées dans ce superbe outil. 🙂

![Écran de bienvenue](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

Cliquez sur **Continuer**.

## ÉTAPE 4. Sections - Général

Vous pourrez configurer ici les principales informations de votre application :

* **Organisation :** Entrez le nom de votre entreprise ainsi que l'identifiant de l’application (ex. « Mon entreprise » et « com.MonEntreprise »).
* **Produit :** Entrez le nom de votre application. Appelons-la « Contacts ».
* **ID :** (Bundle ID) généré automatiquement et composé de l’identifiant de votre entreprise et du nom de votre produit.
* **Version :** Laissez la version 1.0 inchangée et définissez les droits d’auteur de votre application. Il est fortement recommandé d’utiliser les formats fournis par 4D for iOS.
* **Icônes :** Glissez et déposez une icône pour votre application dans la zone consacrée.
* **Développeur :** Cette sous-section est renseignée automatiquement à partir du nom d’utilisateur sur votre ordinateur. Copiez-collez la référence de votre équipe de développeurs (à partir de votre compte développeur) dans le champ "Team". Vous pouvez également laisser le champ vide pour générer votre application uniquement sur le Simulateur.

![Général](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ÉTAPE 5. Sections - Structure

C’est dans cette section que vous définirez un sous-ensemble de vos données (tables et champs de la base) à afficher dans l'application.

Dans notre exemple, sélectionnons **ID**, **FirstName**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** et **Photo**.<div class = "tips"> 

**NOTE**

* Nous vous recommandons vivement de publier votre clé primaire afin d’identifier chaque enregistrement de votre base.</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ÉTAPE 6. Sections - Libellés et icônes

Définissons maintenant certains libellés et icônes pour les tables et champs sélectionnés.

**Table Properties:**

* Define a short and a long label for your Contact table
* Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

**Field Properties:**

* Define a short and a long label for your selected fields.
* Click on the icon field and select icons for each field. There are several options for field icons: 
    * You can select an icon for each field,
    * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you
    * You can simply leave them empty to not display any field icons. 

![Libellés et icônes ](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ÉTAPE 7. Sections - Menu

Définissons ensuite l'ordre des tables dans le menu de l'application.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![Menu ](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ÉTAPE 8. Sections - Formulaires

Nous avons presque terminé, mais il faut d’abord configurer la mise en page de l’application. Il s'agit de faire un choix à partir des Formulaires liste et des Formulaires détaillés.

* Select a list form template to display your table as a list. For our Contact app, let’s use the **Profile** template.

![Modèle de formulaire Liste](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

À ce stade, la partie inférieure de la fenêtre de configuration a changé, en passant de la sélection du modèle à la définition du contenu.

* Drag and drop the fields you want displayed onto the template, *i.e.*, Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![Contenu du formulaire Liste](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Modèle de formulaire détaillé](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Drag and drop the content onto the appropriate places on the detail form template, *i.e.*, First Name, Last Name, and Photo.

![Contenu du formulaire détaillé](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ÉTAPE 9. Création de l’application

Passons maintenant à la phase la plus amusante ! Il est temps de créer votre application et de la tester sur le Simulateur pour voir le résultat final !

* Click the **Build** tab.
* Select a device to use as a Simulator by clicking on the device button.
* Click **Build and Run**.
* Wait a few seconds and …. voila! Your iOS app is alive!

![Créer & exécuter](assets/contact-app/Build-the-app-simulator.png)

## ÉTAPE 10. Que faire ensuite ?

Nous avons fait le tour des bases de la création d’une application dans ce tutoriel. Vous devriez maintenant être en mesure de créer, par vous-mêmes, de simples applications. Mais ce n'est fini ! Dans le prochain tutoriel, vous saurez créer une application plus complexe. Cliquez sur **Projet Final** ci-dessous pour télécharger la version finale de l’application Contacts.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">PROJET FINAL</a>

  </p>
</div>