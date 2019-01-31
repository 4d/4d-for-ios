---
id: xcode-overview
title: Xcode Overview
sidebar_label: Xcode Overview
---
<div class = "objectives"> 

**OBJETIVOS**

* Garantizar una comprensión básica del funcionamiento de Xcode.</div> 

Xcode muestra las diferentes áreas que vamos a revisar:

![Xcode](assets/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Toolbar (Barra de herramientas)

* Los botones **Run** y **Stop** se ubican a la izquierda de la barra de herramientas. El botón **Run** permite crear, ejecutar y lanzar su aplicación en el simulador iOS seleccionado. ![Build and Run](assets/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* El menú desplegable junto al botón **Stop** indica los elementos que desea ejecutar y qué simulador se está utilizando. ![Toolbar Target](assets/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* En el lado derecho de la barra de herramientas, encontrará botones para cambiar la visualización. ![Toolbar View buttons](assets/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Editor Area (Área de edición)

![Editor Area](assets/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

Aquí es donde ocurre la codificación cuando se selecciona un archivo Swift. Cuando se selecciona un archivo Storyboard, la vista cambia y aparece el Interface Builder.

## Área "Interface Builder"

![Interface Builder Area](assets/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side.

## Utility Area

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

## Debug Area

This area displays the output and the state of various variables when running your app.

## Navigation Area

Several tabs are included here, the most important of which are:

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly. ![Navigation tab](assets/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project. ![Search navigator tab](assets/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.
    
    * Errors in red are critical issues that need to be corrected in order to build your application. 
    * Errors in yellow are warnings about issues which have the potential to cause problems but do not block the building of the application. 

You can click on errors and warnings to visualize them in the project. ![Issue Navigator](assets/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.