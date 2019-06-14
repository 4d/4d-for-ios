---
id: creating-detailform-templates
title: Plantillas de formulario listado
---

<div class = "objectives"> 

**OBJETIVOS**

Crear su primera plantilla de formulario listado.</div> <div class = "prerequisites"> 

**PRERREQUISITOS**

Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.</div> 

En este tutorial, cubriremos casi todos los aspectos de la creación de una plantilla de formulario listado como: la creación de un formulario listado con una **barra de búsqueda** y una tabla que muestra una **imagen**, un **título**, y un **subtítulo** para cada celda.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Descargue el proyecto Starter

Para comenzar, descargue el **Starter Project**, que incluye:

* Una carpeta **List form** 
* Un archivo **Contact.4dbase** (base de demostración con un proyecto de aplicación móvil listo para utilizar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-listform/CustomListFormStarterProject.zip">PROYECTO STARTER LISTFORM</a>

  </p>
</div>

¡Ahora está listo para crear su primera plantilla de formulario listado!

## Añada una plantilla de formulario listado a su proyecto móvil

Primero deber crear una carpeta *Contact.4dbase/Resources/Mobile/form/list*. Then drag and drop your **list form** folder into it.

![Mobile folder list form template](assets/en/custom-listform/mobile-folder-custom-template.png)

Next, open the Contact.4dbase file with 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![Forms section](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## List form template content

In this folder, you'll find:

* **a layoutIconx2.png** icon in 160x160px : it'll be displayed in the project editor when you select your template
* **a manifest.json file** : includes a basic description of the template
* **a template.svg file** : the visual representation of your template displayed when you define your list form content.
* Source folder : including the **storyboard** (graphical interface) and **Swift** file (code for the form)

What are these files? What are they used for? How can you customize them?