---
id: creating-detailform-templates
title: Plantillas de formularios Lista
---

> **OBJETIVOS**
> 
> Crear su primera plantilla de formulario listado.


> **REQUISITOS PREVIOS**
> 
> Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.


In this tutorial, we'll cover nearly all aspects of creating a list form template such as: creating a list form with a **searchBar** and a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Descargue el proyecto Starter

Before we begin, be sure to download the **Starter Project** which includes:

* A **List form** folder
* A **Contact.4dbase** file (a demo database with a ready-to-use mobile app project)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">PROYECTO STARTER LISTFORM</a>
</div>

¡Ahora está listo para crear su primera plantilla de formulario listado!

## Añada una plantilla de formulario listado a su proyecto móvil

The first thing you'll need to do is create a *Contact.4dbase/Resources/Mobile/form/list* folder. Then drag and drop your **list form** folder into it.

![Mobile folder custom template](assets/en/custom-listform/mobile-folder-custom-template.png)

Luego abra el archivo Contact.4dbase con 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![Forms section](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## Contenido de la plantilla de formulario Lista

En esta carpeta, encontrará:

* **a layoutIconx2.png** icon in 160x160px : it'll be displayed in the project editor when you select your template
* **a manifest.json file** : includes a basic description of the template
* **a template.svg file** : the visual representation of your template displayed when you define your list form content.
* Source folder : including the **storyboard** (graphical interface) and **Swift** file (code for the form)

¿Qué son estos archivos? ¿Para qué se utilizan? ¿Cómo personalizarlos?
