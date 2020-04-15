---
id: xcode-overview
title: Presentación de Xcode
---

<div class = "objectives"> 

**OBJECTIVES**

Ensure a basic understanding of working with Xcode.</div> 

Xcode displays various areas that we're going to review:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Toolbar (Barra de herramientas)

* Los botones **Run** y **Stop** se ubican a la izquierda de la barra de herramientas. El botón **Run** permite crear, ejecutar y lanzar su aplicación en el simulador iOS seleccionado.

![Crear y ejecutar](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* El menú desplegable junto al botón **Stop** indica los elementos que desea ejecutar y qué simulador se está utilizando.

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* En el lado derecho de la barra de herramientas, encontrará botones para cambiar la visualización.

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Editor Area (Área de edición)

![Editor Area (Área de edición)](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

This is where the coding happens when a Swift file is selected. When a Storyboard file is selected, the view changes and the Interface Builder appears.

## Área "Interface Builder"

![Área "Interface Builder"](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side.

## Utility Area (Área de funcionalidades)

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![Utility Area (Área de funcionalidades)](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Panel Inspector

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![Panel Inspector](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

* **File inspector (inspector de archivo)**: para ver y administrar los metadatos de un archivo, tales como el nombre, el tipo y la ruta del de archivo.

* **Quick Help (ayuda rápida)**: para ver detalles sobre lo que ha sido seleccionado en un editor.

* **Identity inspector (inspector de identidad)**: para la visualización de los metadatos del objeto tales como la clase de un objeto, el tiempo de ejecución de sus atributos, de la etiqueta.

* **Attributes inspector (inspector de atributos)**: para configurar los atributos específicos del objeto de la interfaz seleccionado. Por ejemplo, algunos atributos de un campo texto incluyen la alineación del texto y un color, el tipo de borde y los parámetros de modificación.

* **Size inspector (inspector de dimensiones)**: para especificar las características tales como el tamaño y la posición de un objeto.

* **Conexiones inspector (inspector de conexiones)**: para ver los "outlets" de un objeto, establecer nuevas conexiones y borrar las conexiones existentes.

### Library (Biblioteca)

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Library (Biblioteca)](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates (plantillas de archivos)**: estas plantillas son para los tipos de archivos comunes que aparecen como opciones en el menú New File".

* **Code snippets (fragmentos de código)**: estas son piezas cortas de código fuente para su uso en la aplicación. Para utilizar uno, arrastre directamente en su archivo de código fuente.

* **Objetos**: esta biblioteca contiene los tipos de objetos de la interfaz que puede utilizar para hacer su interfaz de usuario. Para agregar un objeto en una vista, arrastre directamente su Storyboard, en el editor Interface Builder.

* **Media files (archivos multimedia)**: esta biblioteca contiene su gráficos, iconos y archivos de audio. Para utilizarlos, arrastre directamente a su Storyboard, en el editor Interface Builder.

## Debug Area (Área de depuración)

This area displays the output and the state of various variables when running your app.

## Área de navegación

Several tabs are included here, the most important of which are:

* **Pestaña "Navigation"**: listas y da acceso a todos los archivos necesarios para que su aplicación funcione correctamente.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab (navegador de búsqueda)**: permite buscar todos los archivos del proyecto.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Pestaña Issue navigator**: muestra todos los errores en un proyecto iOS.
    
    * Los errores en rojo corresponden a problemas críticos que deben ser corregidos para poder generar su aplicación. 
    * Los errores en amarillo son alertas que tienen el potencial de causar problemas, pero que no bloquean la generación de la aplicación. 

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.