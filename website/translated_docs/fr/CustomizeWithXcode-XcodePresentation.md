---
id: xcode-overview
title: Présentation de Xcode
sidebar_label: Présentation de Xcode
---
<div class = "objectives"> 

**OBJECTIFS**

* Travailler avec Xcode</div> 

Xcode affiche plusieurs zones que nous allons examiner :

![Xcode](assets/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Barre d’outils

* Les boutons **Run** et **Stop** sont situés à gauche de la barre d'outils. Le bouton **Run** permet de créer, d'exécuter et de lancer votre application dans le simulateur iOS sélectionné. ![Build and Run](assets/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* Le menu déroulant situé à côté du bouton **Stop**indique les éléments que vous souhaitez exécuter ainsi que le simulateur qui est utilisé. ![Toolbar Target](assets/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* Sur le côté droit de la barre d’outils, vous trouverez des boutons vous permettant de modifier l’affichage. ![Toolbar View buttons](assets/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Zone d’édition

![Editor Area](assets/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

C’est ici que se fait le codage lorsqu’un fichier Swift est sélectionné. When a Storyboard file is selected, the view changes and the Interface Builder appears.

## Zone de génération

![Interface Builder Area](assets/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side.

## Zone de fonctionnalités

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![Utility Area](assets/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Inspector pane

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![Inspector pane](assets/customize-with-xcode/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

**File inspector**: For viewing and managing file metadata, such as a filename, type, and path.

**Quick Help**: For viewing details about what has been selected in an editor.

**Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

**Attributes inspector**: For configuring the attributes specific to the selected interface object. For example, some text field attributes include text alignment and color, border type, and editability.

**Size inspector**: For specifying characteristics such as the size and position of an interface object.

**Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### Library pane

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Library pane](assets/customize-with-xcode/Xcode-Library-pane.png)

**File templates**: These templates are for the common types of files listed as choices in the New File menu.

**Code snippets**: These are short pieces of source code for use in your application. To use one, drag it directly into your source code file.

**Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. To add one to a view, drag it directly into your storyboard in the Interface Builder editor.

**Media files**: This library contains all your graphics, icons, and sound files. To use one, drag it directly to your storyboard in the Interface Builder editor.

## Zone de débogage

This area displays the output and the state of various variables when running your app.

## Zone de navigation

Several tabs are included here, the most important of which are:

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly. ![Navigation tab](assets/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project. ![Search navigator tab](assets/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.
    
    * Errors in red are critical issues that need to be corrected in order to build your application. 
    * Errors in yellow are warnings about issues which have the potential to cause problems but do not block the building of the application. 

You can click on errors and warnings to visualize them in the project. ![Issue Navigator](assets/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.