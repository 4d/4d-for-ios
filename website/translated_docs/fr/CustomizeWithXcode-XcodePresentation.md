---
id: xcode-overview
title: Présentation de Xcode
---

<div markdown="1" class = "objectives">
**OBJECTIFS **
Comprendre le fonctionnement de Xcode.
</div>

Nous allons passer en revue les différentes zones qui s'affichent dans Xcode :

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Toolbar (Barre d’outils)

* **Run** and **Stop** buttons are located on the left side of the toolbar. Pressing the **Run** button will build, run, and launch your application in the selected iOS Simulator.

![Build and Run](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* The dropdown menu next to the **Stop** button indicates which build target you want to run and which Simulator is being used.

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* Sur le côté droit de la barre d’outils, vous trouverez des boutons vous permettant de modifier l’affichage.

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Editor Area (Zone d’édition)

![Editor Area (Zone d’édition)](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

C’est ici que le code est inséré lorsqu'un fichier Swift est sélectionné. Lorsqu’un fichier Storyboard est sélectionné, la vue change et l'Interface Builder apparaît.

## Zone "Interface Builder"

![Zone "Interface Builder"](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

Il s’agit d’une interface graphique qui vous permet de générer un fichier Storyboard ou XIB. Toutes vos "scènes" sont visibles sur le côté gauche.

## Utility Area (Zone de fonctionnalités)

La zone de fonctionnalités de Xcode comporte deux volets : Inspector (l'inspecteur) et Library (la bibliothèque).

![Utility Area (Zone de fonctionnalités)](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Inspector (Inspecteur)

Dans la section des propriétés, Inspector se divise en six onglets, comme illustré ci-dessous :

![Inspector (Inspecteur)](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

De gauche à droite, ces onglets correspondent à :

* **File inspector**: For viewing and managing file metadata, such as a filename, type, and path.

* **Quick Help**: For viewing details about what has been selected in an editor.

* **Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

* **Attributes inspector**: For configuring the attributes specific to the selected interface object. Par exemple, certains attributs d'un champ texte incluent un alignement et une couleur, un type de bordure et des paramètres de modification.

* **Size inspector**: For specifying characteristics such as the size and position of an interface object.

* **Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### Library (Bibliothèque)

Dans la section des propriétés, Library se divise en quatre onglets, comme illustré ci-dessous :

De gauche à droite, ces onglets correspondent à :

![Library (Bibliothèque)](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates**: These templates are for the common types of files listed as choices in the New File menu.

* **Code snippets**: These are short pieces of source code for use in your application. Pour en utiliser un, faites-le glisser directement dans votre fichier de code source.

* **Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. Pour ajouter un objet dans une vue, faites-le glisser directement dans votre Storyboard, dans l’éditeur d’Interface Builder.

* **Media files**: This library contains all your graphics, icons, and sound files. Pour les utiliser, faites-les glisser directement vers votre Storyboard, dans l’éditeur d’Interface Builder.

## Debug Area (Zone de débogage)

Cette zone affiche le résultat et l’état de différentes variables lors de l’exécution de votre application.

## Navigation Area (Zone de navigation)

Plusieurs onglets sont inclus ici, notamment :

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.

    - Les erreurs affichées en rouge correspondent à des problèmes critiques qui doivent être résolus pour pouvoir générer votre application.
    - Les erreurs affichées en jaune correspondent à des alertes susceptibles de poser problème, mais qui ne bloquent pas la génération de l’application.

Vous pouvez cliquer sur les erreurs et les alertes pour les visualiser dans le projet.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Nous allons ensuite nous pencher sur les fichiers inclus dans votre application 4D for iOS depuis l’onglet "Project navigation".
