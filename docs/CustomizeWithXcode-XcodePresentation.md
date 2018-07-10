---
id: xcode-overview
title: Xcode Overview
sidebar_label: Xcode Overview
---

<div markdown="1" class = "objectives">
<b>OBJECTIVES</b>

* Ensure a basic understanding of working with Xcode.
</div>


Xcode displays various areas that we're going to review:

![alt-text](assets/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Toolbar

* <b>Run</b> and <b>Stop</b> buttons are located on the left side of the toolbar. Pressing the <b>Run</b> button will build, run, and launch your application in the selected iOS Simulator. 
![alt-text](assets/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* The dropdown menu next to the <b>Stop</b> button indicates which build target you want to run and which Simulator is being used.
![alt-text](assets/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* On the right side of the toolbar, you'll find buttons to change the display.
![alt-text](assets/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)


## Editor Area

![alt-text](assets/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

This is where the coding happens when a Swift file is selected.
When a Storyboard file is selected, the view changes and the Interface Builder appears.


## Interface Builder Area

![alt-text](assets/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side. 


## Utility Area

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![alt-text](assets/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Inspector pane

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![alt-text](assets/customize-with-xcode/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

<b>File inspector</b>: For viewing and managing file metadata, such as a filename, type, and path.

<b>Quick Help</b>: For viewing details about what has been selected in an editor.

<b>Identity inspector</b>: For viewing object metadata such as an object’s class, runtime attributes, label.

<b>Attributes inspector</b>: For configuring the attributes specific to the selected interface object. For example, some text field attributes include text alignment and color, border type, and editability.

<b>Size inspector</b>: For specifying characteristics such as the size and position of an interface object.

<b>Connections inspector</b>: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### Library pane

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![alt-text](assets/customize-with-xcode/Xcode-Library-pane.png)

<b>File templates</b>: These templates are for the common types of files listed as choices in the New File menu.

<b>Code snippets</b>: These are short pieces of source code for use in your application. To use one, drag it directly into your source code file.

<b>Objects</b>: This library contains the kinds of interface objects you’d use to make up your user interface. To add one to a view, drag it directly into your storyboard in the Interface Builder editor.

<b>Media files</b>: This library contains all your graphics, icons, and sound files. To use one, drag it directly to your storyboard in the Interface Builder editor.

## Debug Area
 This area displays the output and the state of various variables when running your app.


## Navigation Area
Several tabs are included here, the most important of which are:

* <b>Navigation tab</b>: Lists and provides access to all files necessary for your application to work properly.
![alt-text](assets/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* <b>Search navigator tab</b>: Allows searching all files in the project.
![alt-text](assets/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* <b>Issue navigator tab</b>: Displays all errors in an iOS project. 
	- Errors in red are critical issues that need to be corrected in order to build your application. 
	- Errors in yellow are warnings about issues which have the potential to cause problems but do not block the building of the application. 

You can click on errors and warnings to visualize them in the project.
![alt-text](assets/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)


Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.
