---
id: creating-detailform-templates
title: Plantillas de formulario listado
---

<div class = "objectives"> 

**OBJECTIVES**

Create your first list form template.</div> <div class = "prerequisites"> 

**PREREQUISITES**

Click [here](prerequisites.html) to see what you'll need to get started!</div> 

In this tutorial, we'll cover nearly all aspects of creating a list form template such as: creating a list form with a **searchBar** and a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Descargue el proyecto Starter

Before we begin, be sure to download the **Starter Project** which includes:

* Una carpeta **List form** 
* Un archivo **Contact.4dbase** (base de demostración con un proyecto de aplicación móvil listo para utilizar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">LISTFORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first list form template!

## Añada una plantilla de formulario listado a su proyecto móvil

The first thing you'll need to do is create a *Contact.4dbase/Resources/Mobile/form/list* folder. Then drag and drop your **list form** folder into it.

![Mobile folder list form template](assets/en/custom-listform/mobile-folder-custom-template.png)

Next, open the Contact.4dbase file with 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![Forms section](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## Contenido de la plantilla de formulario Lista

In this folder, you'll find:

* Un icono **layoutIconx2.png** de 160x160px que se mostrará en el editor del proyecto cuando seleccione su plantilla
* Un archivo **manifest.json** que incluye una descripción básica de la plantilla
* **Un archivo template.svg**: la representación visual de su plantilla que se muestra cuando define el contenido de su formulario listado.
* Carpeta Source>: incluye los archivos **storyboard** (interfaz gráfica) y **swift** (código para el formulario)

What are these files? What are they used for? How can you customize them?