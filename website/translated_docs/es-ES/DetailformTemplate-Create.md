---
id: creating-detailform-templates
title: Plantillas de formulario detallado
---

:::tip OBJECTIVES Create your first list form template. :::

:::PRERREQUISITOS importante Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar. :::

In this tutorial, we'll guide you through the creation of a detail form template. It will display an **image header**, as well as **title and content fields** that will be duplicated in the generated iOS app.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## ¡Descargue el proyecto Starter!

Para comenzar, descargue el **Starter Project**, que incluye:

* Una carpeta **Custom Detail form** (Carpeta de plantilla personalizada de formulario detallado)
* Un archivo **Contact.4dbase** (base de demostración Contact con un proyecto de aplicación móvil listo para utilizar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/archive/d6e32c547604bd32f56528b02310d083a844ffcc.zip">CUSTOM DETAIL FORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first detail form template !

## Añada una plantilla de formulario detallado a su proyecto móvil

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Then open the Contact.4dbase with 4D. and go to File > open > Mobile Project... to open the **Contact Demo App**

Finally go to the **Forms section** in the project editor. You will see that the Custom Detail form template has been successfully added to the Detail form template list !

![Forms section](assets/en/custom-detailform/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## La carpeta de plantillas de formulario detallado y su contenido

* Un icono **a layoutIconx2.png** de 160x160px que se mostrará en el editor del proyecto cuando seleccione su plantilla personalizada entre otras
* Un archivo **a manifest.json** que incluye una descripción básica de la plantilla
* Un archivo **a template.svg** que será la representación de su plantilla que se mostrará cuando defina el contenido de su formulario listado y dónde arrastrará y soltará sus campos
* Carpeta Source que incluye los archivos **storyboard** (interfaz gráfica) y **swift** (código para el formulario)

What are those files, what it is used for and how to customize it ?