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

![Création d’un projet](assets/contact-app/Project-creation-4D-for-iOS.png)

## ÉTAPE 3. Ouvrir l’éditeur de projet

Bienvenue dans 4D for iOS ! L’écran d’accueil affiche les principales étapes de création d'applications de ce superbe outil. 🙂

![Écran de bienvenue](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

Cliquez sur **Continuer**.

## ÉTAPE 4. Sections - Général

Vous pourrez configurer ici les informations primaires de votre application :

* **Organisation:** Entrez le nom de votre société ainsi que l'identificateur de l’application (ex. « Ma société » et com.MaSociete).
* **Produit :** Entrez le nom de votre application. Appelons-le « Contact ».
* **ID:** (Bundle ID) est généré automatiquement comme une composition de l’identificateur de votre société et du nom de votre produit.
* **Version :** Laissez la version 1.0 et définissez les droits d’auteur de votre application. Il est fortement recommandé d’utiliser les formats fournis par 4D for iOS.
* **Icônes:** Glissez et déposez une icône pour votre application dans la zone de l’icône.
* **Développeur :** Ceci est renseigné automatiquement à partir du nom d’utilisateur sur votre ordinateur. Copiez/collez la référence de votre équipe de développeurs (à partir de votre compte développeur) dans le champ Équipe. Vous pouvez également laisser le champ vide pour générer votre application uniquement sur le Simulateur.

![Général](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ÉTAPE 5. Sections - Structure

C’est ici que vous définirez un sous-ensemble de vos données (les tables et champs de la base de données ) à présenter aux appareils mobiles.

Dans notre exemple, sélectionnez **ID**, **Prénom**, **Nom**, **Fonction**, **Société**, **Téléphone**, **Notes** et **Photo**.<div class = "tips"> 

**NOTE**

* Nous vous recommandons vivement de publier votre clé primaire afin d’identifier chaque enregistrement de votre base.</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ÉTAPE 6. Sections - Icônes & Étiquettes

Définissons maintenant certaines étiquettes et icônes pour les tables et champs sélectionnés.

**Propriétés de la talbe:** * Définissez une courte et une longue étiquette pour votre table Contact * Cliquez sur le champ icône. La bibliothèque d’icônes s’affiche et vous pouvez sélectionner une icône pour illustrer la table Contacts. Vous pouvez également choisir de laisser le champ icône vide. 4D for iOS génèrera pour vous une icône par défaut !

**Propriétés de la table:** * Définissez une courte et une longue étiquette pour les champs sélectionnés. * Cliquez sur le champ icône et sélectionnez des icônes pour chaque champ. Il existe plusieurs options pour les icônes de champ : * Vous pouvez choisir une icône pour chaque champ, * Si au moins une icône a été définie et si les autres champs sont laissés vides, 4D for iOS génèrera pour vous des icônes par défaut * Vous pouvez simplement les laisser vides pour ne pas afficher d'icônes de champ.

![Icônes & Étiquettes](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ÉTAPE 7. Sections - Menu principal

Définissons ensuite l'ordre des tables dans le menu principal de l'application.

* **Tableaux Disponibles :** Affiche la ou les tables à utiliser.
* **Tables Sélectionnées :** Affiche les éléments de menu de votre application. Notre exemple ne contient qu'un seul élément, mais il vous est possible de glisser et déposer vos éléments afin de les réordonner.

![Menu principal](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ÉTAPE 8. Sections - Formulaires

Nous avons presque terminé, mais il faut tout d’abord décider de la mise en page de l’application. Il s'agit de faire un choix à partir des formulaires Liste et Détails.

* Sélectionnez un modèle de formulaire liste pour afficher votre table sous forme de liste. Pour notre application Contact, nous allons utiliser le modèle **Profil**.

![Modèle de formulaire Liste](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

À ce stade, le bas de la fenêtre de configuration a changé, en passant de la sélection du modèle à la définition du contenu.

* Glissez et déposez les champs que vous souhaitez afficher sur le modèle, *soit*, Nom de famille dans le champ de recherche et le champ Titre. Les champs Recherche et Section sont facultatifs. Pour le moment, laissez le champ Section vide.

![Contenu du formulaire Liste](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

Enfin, nous allons définir le formulaire Détail. * Sélectionnez le modèle qui convient le mieux à votre application. Pour notre application Contact, nous allons utiliser le modèle **Contact Visuel**.

![Modèle de formulaire Détail](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Glissez et déposez le contenu dans les endroits appropriés sur le modèle de formulaire Détail, *soit*, Prénom, Nom et Photo.

![Contenu du formulaire Détail](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ÉTAPE 9. Construire l’application

Et maintenant, la partie amusante ! Il est temps de construire votre application et de la tester sur le Simulateur pour voir le résultat final !

* Cliquez sur l’onglet **Construire**.
* Sélectionnez un appareil à utiliser en tant que Simulateur en cliquant sur le bouton appareil.
* Cliquez sur **Créer et Lancer**.
* Patientez quelques secondes et ... le tour est joué ! Votre application iOS est créée !

![Créer et Lancer](assets/contact-app/Build-the-app-simulator.png)

## ÉTAPE 10. Que faire ensuite ?

Nous avons fait le tour des bases de la création d’applications dans ce tutoriel, vous devriez maintenant être en mesure de créer, par vous-mêmes, de simples applications. Mais ce n'est fini ! Dans le prochain tutoriel, vous apprendrez comment construire une application encore plus complexe. Cliquez sur **Projet Final** ci-dessous pour télécharger l’application Contact finale.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">PROJET FINAL</a>

  </p>
</div>