---
id: xcode-overview
title: Xcode Overview
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Ensure a basic understanding of working with Xcode.
</div>

Xcode displays various areas that we're going to review:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Barra de ferramentas

* **Run** and **Stop** buttons are located on the left side of the toolbar. Pressing the **Run** button will build, run, and launch your application in the selected iOS Simulator.

![Compile e Execute](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* The dropdown menu next to the **Stop** button indicates which build target you want to run and which Simulator is being used.

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* No lado direito da barra de ferramentas, você encontrará botões para alterar a exibição.

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Área do editor

![Área do editor](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

This is where the coding happens when a Swift file is selected. When a Storyboard file is selected, the view changes and the Interface Builder appears.

## Área de interface Builder

![Área de interface Builder](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side.

## Área Utilidade

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![Área Utilidade](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Painel Inspetor

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![Painel Inspetor](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

* **File inspector**: For viewing and managing file metadata, such as a filename, type, and path.

* **Quick Help**: For viewing details about what has been selected in an editor.

* **Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

* **Attributes inspector**: For configuring the attributes specific to the selected interface object. Por exemplo, alguns atributos de campo de texto incluem o alinhamento de texto e cor, tipo de borda e capacidade de edição.

* **Size inspector**: For specifying characteristics such as the size and position of an interface object.

* **Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### Painel Biblioteca

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Painel Biblioteca](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates**: These templates are for the common types of files listed as choices in the New File menu.

* **Code snippets**: These are short pieces of source code for use in your application. Para usar um, arraste-o diretamente em seu arquivo de código fonte.

* **Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. Para adicionar um para a vista, arraste-o diretamente no storyboard no editor Interface Builder.

* **Media files**: This library contains all your graphics, icons, and sound files. Para usar um, arraste-o diretamente para seu storyboard no editor Interface Builder.

## Área Debug

This area displays the output and the state of various variables when running your app.

## Área navegação

Several tabs are included here, the most important of which are:

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.

    - Erros em vermelho são problemas críticos que precisam ser corrigidos para construir sua aplicação.
    - Erros em amarelo são avisos sobre problemas que têm potencial de causar problemas mas não bloqueiam a compilação da aplicação.

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.
