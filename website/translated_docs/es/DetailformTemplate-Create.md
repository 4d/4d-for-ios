---
id: creating-detailform-templates
title: Plantillas de formularios detallados
---

> **OBJETIVOS**
> 
> Crear su primera plantilla de formulario listado.

> **REQUISITOS PREVIOS**
> 
> Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.

En este tutorial, lo guiaremos en la creación de varios ejemplos de plantilla de formulario detallado. Se mostrará un **encabezado de imagen **, así como también **los campos de título y contenido** que se duplicarán en la aplicación iOS generada.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Descargue el proyecto Starter

Para comenzar, descargue el **Starter Project**, que incluye:

* Una carpeta **Custom Detail form** (Carpeta de plantilla personalizada de formulario detallado)
* Un archivo **Contact.4dbase** (base de demostración Contact con un proyecto de aplicación móvil listo para utilizar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/releases/latest/download/tutorial-CustomDetailFormStarter.zip">PROYECTO STARTER - FORMATO DETALLADO PERSONALIZADO</a>
</div>

¡Ahora está listo para crear a su primera plantilla de formulario detallado!

## Añada una plantilla de formulario detallado a su proyecto móvil

Primero, cree una carpeta *Contact.4dbase/Resources/Mobile/form/detail* y arrastre y suelte la carpeta **Custom Detail form** en ella.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Luego abra Contact.4dbase con 4D. y vaya a File > open > Mobile Project... para abrir la aplicación **Contact Demo App**

A continuación, vaya a la **sección Formularios** en el editor de proyectos. ¡Verá que la plantilla de formulario detallado personalizada se ha agregado correctamente a la lista de plantillas!

![Sección Formularios](assets/en/custom-detailform/custom-detailform-template.png)

Ahora concentrémonos en el contenido de la carpeta **Custom Detail form**.

## La carpeta de plantillas de formulario detallado y su contenido

* Un icono **a layoutIconx2.png** de 160x160px que se mostrará en el editor del proyecto cuando seleccione su plantilla personalizada entre otras
* Un archivo **a manifest.json** que incluye una descripción básica de la plantilla
* Un archivo **a template.svg** que será la representación de su plantilla que se mostrará cuando defina el contenido de su formulario listado y dónde arrastrará y soltará sus campos
* Carpeta Source que incluye los archivos **storyboard** (interfaz gráfica) y **swift** (código para el formulario)
* **android folder** that includes the layout.xml file (graphical interface) in app > src > main > res > layout folder

¿Qué son esos archivos, para qué sirven y cómo personalizarlos?