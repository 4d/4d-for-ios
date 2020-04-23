---
id: contact-app
title: Application Contacts
---

<div class = "objectives"> 

**OBJECTIFS **

Créer une toute première application avec 4D for iOS</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES **

Cliquez [ici](prerequisites.html) pour pouvoir commencer !</div> 

Ce tutoriel vous permettra de vous lancer directement dans le développement de 4D for iOS. Vous pourrez ainsi créer, rapidement et facilement, votre première application.

*Scénario : Vous êtes un directeur commercial et vous souhaitez consulter votre liste de contacts durant vos déplacements.*

Nous allons créer une application de répertoire pour iPhone afin de rechercher des contacts dans une liste et d'afficher leurs coordonnées. Nous l’appellerons « Contacts ».

## ÉTAPE 1. Prise en main

Téléchargez notre projet Starter (de prise en main) qui contient un fichier de base de données et l'icône du projet, mais qui n'inclut pas encore de projet mobile.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">PROJET STARTER</a>

  </p>
</div>

## ÉTAPE 2. Création du projet

Commençons par une structure très simple à l’aide d’une seule table. Dans 4D, cliquez sur **Nouveau > Projet mobile**.

Nommez votre projet puis cliquez sur **Créer**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## ÉTAPE 3. L’éditeur de projet

Bienvenue dans 4D for iOS ! L’écran d’accueil affiche les principales étapes de création d'une application, qui vous sont proposées dans ce superbe outil. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Cliquez sur **Continue**.

## ÉTAPE 4. Sections - Général

Vous pourrez configurer ici les principales informations de votre application :

* **Organisation :** Entrez le nom de votre entreprise ainsi que l'identifiant de l’application (ex. « Mon entreprise » et « com.MonEntreprise »).
* **Produit :** Entrez le nom de votre application. Appelons-la « Contacts ».
* **ID :** (Bundle ID) généré automatiquement et composé de l’identifiant de votre entreprise et du nom de votre produit.
* **Version :** Laissez la version 1.0 inchangée et renseignez les droits d’auteur de votre application. Il est fortement recommandé d’utiliser les formats fournis par 4D for iOS.
* **Icônes :** Glissez et déposez une icône pour votre application dans la zone consacrée.
* **Développeur :** Cette sous-section est renseignée automatiquement à partir du nom d’utilisateur sur votre ordinateur. Copiez-collez la référence de votre équipe de développeurs (à partir de votre compte développeur) dans le champ "Team". Vous pouvez également laisser le champ vide pour générer votre application uniquement sur le Simulateur.

![Général](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ÉTAPE 5. Sections - Structure

C’est dans cette section que vous définirez un sous-ensemble de vos données (tables et champs de la base) à afficher dans l'application.

Dans notre exemple, sélectionnons **ID**, **FirstName**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** et **Photo**.<div class = "tips"> 

**NOTE**

Nous vous recommandons vivement de publier votre clé primaire afin d’identifier chaque enregistrement de votre base</div> 

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ÉTAPE 6. Sections - Libellés et icônes

Définissons maintenant certains libellés et icônes pour les tables et champs sélectionnés.

**Propriétés des tables :**

* Définissez un libellé court et un libellé long pour votre table Contact.
* Cliquez sur le champ icône. La bibliothèque d’icônes s’affiche. Vous pouvez choisir une icône pour illustrer la table Contact, comme vous pouvez aussi laisser le champ "Icônes" vide. 4D for iOS vous génèrera une icône par défaut !

**Propriétés du champ :**

* Définissez un court et un long libellé pour les champs que vous avez sélectionnés.
* Cliquez sur le champ "Icônes" et choisissez des icônes pour chaque champ. Plusieurs options sont possibles : 
    * Vous pouvez sélectionner une icône pour chaque champ.
    * Si au moins une icône a été définie et si les autres champs sont laissés vides, 4D for iOS vous génèrera des icônes par défaut.
    * Vous pouvez simplement les laisser vides pour n'afficher aucune icône de champ. 

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ÉTAPE 7. Sections - Menu

Définissons ensuite l'ordre des tables dans le menu de l'application.

* **Tables disponibles :** Affiche la ou les tables à utiliser.
* **Tables sélectionnées :** Affiche les éléments de menu de votre application. Notre exemple ne contient qu'un seul élément, mais il vous est possible de glisser et déposer vos éléments afin de les réordonner.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ÉTAPE 8. Sections - Formulaires

Nous avons presque terminé, mais il faut d’abord configurer la mise en page de l’application. En choisissant des Formulaires Liste et des Formulaires détaillés.

* Sélectionnez un modèle de formulaire Liste pour afficher votre table sous forme de liste. Pour notre application Contacts, nous allons utiliser le modèle **Profile**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

À ce stade, la partie inférieure de la fenêtre de configuration a changé, en passant de la sélection du modèle à la définition du contenu.

* Glissez et déposez les champs que vous souhaitez afficher sur le modèle, à savoir, "Last Name" dans le champ "à utiliser pour la recherche" et le champ "Titre". Le "champ à utiliser pour la recherche" et le "champ à utiliser en tant que section" sont facultatifs. Pour le moment, laissez le "champ à utiliser en tant que section" vide.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

Enfin, nous allons définir le formulaire détaillé.

* Sélectionnez le modèle de formulaire qui convient le mieux à votre application. Pour notre application Contacts, nous allons utiliser le modèle **Visual Contact**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Glissez et déposez le contenu dans les sections appropriées du modèle de formulaire détaillé, à savoir, First Name, Last Name et Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ÉTAPE 9. Création de l’application

Passons maintenant à la phase la plus amusante ! Il est temps de créer votre application et de la tester sur le Simulateur pour voir le résultat final !

* Cliquez sur l’onglet **Génération**.
* Sélectionnez un appareil à utiliser en tant que Simulateur en cliquant sur le bouton "appareil".
* Cliquez sur **Générer et exécuter**.
* Patientez quelques secondes et ... le tour est joué ! Votre application iOS est créée !

![Créer & exécuter](assets/en/contact-app/Build-the-app-simulator.png)

## ÉTAPE 10. Que faire ensuite ?

Dans ce tutoriel, nous avons fait le tour des étapes de création d’une application basique. Vous devriez maintenant être en mesure de créer, par vous-mêmes, de simples applications. Mais ce n'est fini ! Dans le prochain tutoriel, vous allez apprendre à créer une application plus complexe. Cliquez sur le bouton **Projet Final** ci-dessous pour télécharger la version finale de l’application Contacts.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROJET FINAL</a>

  </p>
</div>