---
id: xcode-overview
title: Présentation de Xcode
---

:::tip OBJECTIVES Ensure a basic understanding of working with Xcode. :::

Xcode displays various areas that we're going to review:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Toolbar (Barre d’outils)

* Les boutons **Run** et **Stop** sont situés à gauche de la barre d'outils. Le bouton **Run** permet de créer, d'exécuter et de lancer votre application dans le simulateur iOS sélectionné.

![Créer & exécuter](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* Le menu déroulant situé à côté du bouton **Stop** indique les éléments que vous souhaitez exécuter ainsi que le simulateur qui est utilisé.

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* Sur le côté droit de la barre d’outils, vous trouverez des boutons vous permettant de modifier l’affichage.

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Editor Area (Zone d’édition)

![Editor Area (Zone d’édition)](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

This is where the coding happens when a Swift file is selected. When a Storyboard file is selected, the view changes and the Interface Builder appears.

## Zone "Interface Builder"

![Zone "Interface Builder"](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side.

## Utility Area (Zone de fonctionnalités)

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![Utility Area (Zone de fonctionnalités)](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Inspector (Inspecteur)

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![Inspector (Inspecteur)](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

* **File inspector (inspecteur de fichier)** : pour visualiser et gérer les métadonnées d'un fichier, telles que le nom, le type et le chemin du fichier.

* **Quick Help (aide rapide)** : pour afficher les détails liés à ce qui a été sélectionné dans l'éditeur.

* **Identity inspector (inspecteur d'identité)** : pour l’affichage des métadonnées de l’objet, telles que la classe d’un objet, la durée d'exécution de ses attributs ainsi que son "label".

* **Attributes inspecteur (inspecteur d'attributs)** : pour configurer les attributs spécifiques à l’objet sélectionné. Par exemple, certains attributs d'un champ texte incluent un alignement et une couleur, un type de bordure et des paramètres de modification.

* **Size inspector (inspecteur de dimensions)** : pour préciser des caractéristiques telles que la taille et la position d’un objet.

* **Connections inspector (inspecteur de connexions)** : pour visualiser les "outlets" d'un objet, établir de nouvelles connexions et supprimer des connexions existantes.

### Library (Bibliothèque)

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Library (Bibliothèque)](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates (modèles de fichiers)** : ces modèles s'appliquent aux types de fichiers courants figurant dans la liste du menu "New File".

* **Code snippets (extraits de code)** : il s'agit d'extraits de code source destinés à être utilisés dans votre application. Pour en utiliser un, faites-le glisser directement dans votre fichier de code source.

* **Objects (objets)** : cette bibliothèque contient les types d’objets d’interface que vous pouvez choisir pour constituer votre interface utilisateur. Pour ajouter un objet dans une vue, faites-le glisser directement dans votre Storyboard, dans l’éditeur d’Interface Builder.

* **Media files (les fichiers multimédia)** : cette bibliothèque contient tous vos graphiques, icônes et fichiers audio. Pour les utiliser, faites-les glisser directement vers votre Storyboard, dans l’éditeur d’Interface Builder.

## Debug Area (Zone de débogage)

This area displays the output and the state of various variables when running your app.

## Navigation Area (Zone de navigation)

Several tabs are included here, the most important of which are:

* **L'onglet "Navigation"** : répertorie et donne accès à tous les fichiers nécessaires au bon fonctionnement de votre application.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **L'onglet "Search navigator" (navigateur de recherche)** : permet de rechercher tous les fichiers du projet.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **L'onglet "Issue navigator" (navigateur d'alertes)** : affiche toutes les erreurs issues d'un projet iOS.
    
    * Les erreurs affichées en rouge correspondent à des problèmes critiques qui doivent être résolus pour pouvoir générer votre application. 
    * Les erreurs affichées en jaune correspondent à des alertes susceptibles de poser problème, mais qui ne bloquent pas la génération de l’application. 

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.