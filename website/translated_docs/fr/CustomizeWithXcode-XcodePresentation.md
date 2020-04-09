---
id: xcode-overview
title: Présentation de Xcode
---

<div class = "objectives">
**OBJECTIVES**
Ensure a basic understanding of working with Xcode.</div>

Xcode displays various areas that we're going to review:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Toolbar (Barre d’outils)

* **Run** and **Stop** buttons are located on the left side of the toolbar. Pressing the **Run** button will build, run, and launch your application in the selected iOS Simulator.

![Créer & exécuter](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* The dropdown menu next to the **Stop** button indicates which build target you want to run and which Simulator is being used.

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

* **File inspector**: For viewing and managing file metadata, such as a filename, type, and path.

* **Quick Help**: For viewing details about what has been selected in an editor.

* **Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

* **Attributes inspector**: For configuring the attributes specific to the selected interface object. Par exemple, certains attributs d'un champ texte incluent un alignement et une couleur, un type de bordure et des paramètres de modification.

* **Size inspector**: For specifying characteristics such as the size and position of an interface object.

* **Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### Library (Bibliothèque)

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Library (Bibliothèque)](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates**: These templates are for the common types of files listed as choices in the New File menu.

* **Code snippets**: These are short pieces of source code for use in your application. Pour en utiliser un, faites-le glisser directement dans votre fichier de code source.

* **Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. Pour ajouter un objet dans une vue, faites-le glisser directement dans votre Storyboard, dans l’éditeur d’Interface Builder.

* **Media files**: This library contains all your graphics, icons, and sound files. Pour les utiliser, faites-les glisser directement vers votre Storyboard, dans l’éditeur d’Interface Builder.

## Debug Area (Zone de débogage)

This area displays the output and the state of various variables when running your app.

## Navigation Area (Zone de navigation)

Several tabs are included here, the most important of which are:

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.

    - Les erreurs affichées en rouge correspondent à des problèmes critiques qui doivent être résolus pour pouvoir générer votre application.
    - Les erreurs affichées en jaune correspondent à des alertes susceptibles de poser problème, mais qui ne bloquent pas la génération de l’application.

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.
