---
id: creating-detailform-templates
title: Plantillas de formularios detallados
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Crear su primera plantilla de formulario listado.
</div>

<div markdown="1" class = "prerequisites">
**REQUISITOS PREVIOS**
Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.
</div>

En este tutorial, lo guiaremos en la creación de varios ejemplos de plantilla de formulario detallado. It will display an **image header**, as well as **title and content fields** that will be duplicated in the generated iOS app.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Descargue el proyecto Starter

To begin, download the **Starter Project**, which includes:

* A **Custom Detail form** folder (custom Detail form template folder)
* A **Contact.4dbase** file (Contact demo database with a ready to use mobile app project)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/archive/d6e32c547604bd32f56528b02310d083a844ffcc.zip">PROYECTO STARTER - FORMATO DETALLADO PERSONALIZADO</a>
</div>

¡Ahora está listo para crear a su primera plantilla de formulario detallado!

## Añada una plantilla de formulario detallado a su proyecto móvil

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Luego abra Contact.4dbase con 4D. and go to File > open > Mobile Project... to open the **Contact Demo App**

Finally go to the **Forms section** in the project editor. ¡Verá que la plantilla de formulario detallado personalizada se ha agregado correctamente a la lista de plantillas!

![Forms section](assets/en/custom-detailform/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## La carpeta de plantillas de formulario detallado y su contenido

* **a layoutIconx2.png** icon in 160x160px that will be displayed in the project editor when you select your custom template among others
* **a manifest.json** file that includes a basic description of the template
* **a template.svg** file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields
* Source folder that includes the **storyboard** (graphical interface) and **swift** file (code for the form)

¿Qué son esos archivos, para qué sirven y cómo personalizarlos?