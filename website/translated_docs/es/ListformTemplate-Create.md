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


En este tutorial, cubriremos casi todos los aspectos de la creación de una plantilla de formulario listado como: la creación de un formulario listado con una **barra de búsqueda** y una tabla que muestra una **imagen**, un **título**, y un **subtítulo** para cada celda.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Descargue el proyecto Starter

Para comenzar, descargue el **Starter Project**, que incluye:

* Una carpeta **List form**
* Un archivo **Contact.4dbase** (base de demostración con un proyecto de aplicación móvil listo para utilizar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">PROYECTO STARTER LISTFORM</a>
</div>

¡Ahora está listo para crear su primera plantilla de formulario listado!

## Añada una plantilla de formulario listado a su proyecto móvil

Primero deber crear una carpeta *Contact.4dbase/Resources/Mobile/form/list*. Luego arrastre y suelte la carpeta **list form** en ella.

![Mobile folder custom template](assets/en/custom-listform/mobile-folder-custom-template.png)

Luego abra el archivo Contact.4dbase con 4D. (Archivo > Abrir > Mobile Project > **App Demo Contact **)

Finalmente, en la **Sección Formulario** del editor del proyecto, verá que su plantilla de formulario listado se ha agregado exitosamente a la lista de plantillas de formularios Lista disponibles.

![Sección Formularios](assets/en/custom-listform/custom-listform-template.png)

Ahora concentrémonos en el contenido de la carpeta **Custom List form**.

## Contenido de la plantilla de formulario Lista

En esta carpeta, encontrará:

* Un icono **layoutIconx2.png** de 160x160px que se mostrará en el editor del proyecto cuando seleccione su plantilla
* **Un archivo manifest.json** que incluye una descripción básica de la plantilla
* **Un archivo template.svg**: la representación visual de su plantilla que se muestra cuando define el contenido de su formulario listado.
* Carpeta Source: incluye los archivos **storyboard** (interfaz gráfica) y archivo **swift** (código para el formulario)

¿Qué son estos archivos? ¿Para qué se utilizan? ¿Cómo personalizarlos?
