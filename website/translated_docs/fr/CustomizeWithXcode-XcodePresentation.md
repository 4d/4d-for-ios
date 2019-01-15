---
id: xcode-overview
title: Présentation d'Xcode
sidebar_label: Présentation d'Xcode
---
<div class = "objectives"> 

**OBJECTIFS**

* Travailler avec Xcode</div> 

Nous allons passer en revue les différentes zones qui s'affichent dans Xcode :

![Xcode](assets/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Barre d’outils

* Les boutons **Run** et **Stop** sont situés à gauche de la barre d'outils. Le bouton **Run** permet de créer, d'exécuter et de lancer votre application dans le simulateur iOS sélectionné. ![Build and Run](assets/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* Le menu déroulant situé à côté du bouton **Stop** indique les éléments que vous souhaitez exécuter ainsi que le simulateur qui est utilisé. ![Toolbar Target](assets/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* Sur le côté droit de la barre d’outils, vous trouverez des boutons vous permettant de modifier l’affichage. ![Toolbar View buttons](assets/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Zone d’édition

![Editor Area](assets/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

C’est ici que se fait le codage lorsqu’un fichier Swift est sélectionné. Lorsqu’un fichier Storyboard est sélectionné, la vue change et l'interface Builder apparaît.

## Zone "Interface Builder"

![Interface Builder Area](assets/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

Il s’agit d’une interface graphique qui vous permet de générer un fichier Storyboard ou XIB. Toutes vos "scènes" sont accessibles sur le côté gauche.

## Zone de fonctionnalités

La zone de fonctionnalités d'Xcode comporte deux volets : le volet "Inspector" et le volet "Library".

![Utility Area](assets/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### L'inspecteur

Dans la section "Properties", il existe six différents onglets d'Inspector, comme illustré ci-dessous :

![Inspector pane](assets/customize-with-xcode/Xcode-Inspector-pane.png)

De gauche à droite, ces onglets correspondent à :

**Inspecteur de fichier** : pour visualiser et gérer les métadonnées d'un fichier, telles que le nom, le type et le chemin du fichier.

**Aide rapide** : pour afficher les détails liés à ce qui a été sélectionné dans l'éditeur.

**Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

**Attributes inspector**: For configuring the attributes specific to the selected interface object. For example, some text field attributes include text alignment and color, border type, and editability.

**Size inspector**: For specifying characteristics such as the size and position of an interface object.

**Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### La bibliothèque

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Library pane](assets/customize-with-xcode/Xcode-Library-pane.png)

**File templates**: These templates are for the common types of files listed as choices in the New File menu.

**Code snippets**: These are short pieces of source code for use in your application. To use one, drag it directly into your source code file.

**Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. To add one to a view, drag it directly into your storyboard in the Interface Builder editor.

**Media files**: This library contains all your graphics, icons, and sound files. To use one, drag it directly to your storyboard in the Interface Builder editor.

## Zone de débogage

Cette zone affiche la sortie et l’état de différentes variables lors de l’exécution de votre application.

## Zone de navigation

Plusieurs onglets sont inclus ici, dont les plus importants sont :

* **L'onglet Navigation** : répertorie et donne accès à tous les fichiers nécessaires pour que votre application fonctionne correctement. ![Navigation tab](assets/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **L'onglet Navigateur de recherche** : permet de rechercher tous les fichiers du projet. ![Search navigator tab](assets/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **L'onglet Navigateur d'alertes** : affiche toutes les erreurs issues d'un projet iOS.
    
    * Les erreurs affichées en rouge sont des questions cruciales qui doivent être corrigées afin de générer votre application. 
    * Les erreurs affichées en jaune sont des avertissements au sujet d'alertes susceptibles de causer des problèmes, mais qui ne bloquent pas la génération de l’application. 

Vous pouvez cliquer sur les erreurs et les avertissements pour les visualiser dans le projet. ![Issue Navigator](assets/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Nous allons ensuite mettre l’accent sur les fichiers inclus dans votre application 4D for iOS depuis l’onglet "Project navigation".