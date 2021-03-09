---
id: forms
title: Formularios
---

La sección Formularios le permite seleccionar las plantillas de formulario Lista y de formularios detallados para cada tabla.

4D for iOS provides various templates with custom transition effects to build modern iOS applications.

Aquí está el desglose de esta pantalla, de arriba a abajo:

* **Los formularios Lista y los formularios detallados:**permiten cambiar entre los formulario Lista y los formularios detallados para cada tabla.
* **Las tablas publicadas:** muestra todas las tablas publicadas en la sección Estructura.
* **Formularios disponibles:** permite cambiar entre la selección de plantillas y la definición de contenido.

![List form template selection](assets/en/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## Formularios Lista

It's very simple, empty templates are used by default for an app's list and detail forms.

Seleccione una plantilla para su primera tabla. The content definition screen appears. Luego puede arrastrar y soltar los campos de la lista directamente en la plantilla que se muestra a la derecha. La mayoría de los formularios Lista incluyen campos opcionales Búsqueda y Sección.

![List form content definition](assets/en/project-editor/Forms-section-content-definition-4D-for-iOS.png)

About the Search field, a really nice Barcode search feature was added in the R6 version.

To activate it, just click on the magnifying glass and check the **Barcode Scanner** option!

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

This feature will allow:

* Filtering a list form by scanning a Barcode that contains a text value. Esto llenará la barra de búsqueda y abrirá el formulario detallado si sólo queda un valor después de filtrar.
* Displaying specific list and detail forms by simply scanning a barcode which values are URL Schemes or Universal Links after [Deep linking](deep-linking) feature activation.

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Los formularios detallados

![Detail form template selection](assets/en/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

As for the List Form definition, select a template and add your fields onto your detail form.

There are several ways to add your fields in Detail forms:

* You can drag and drop fields anywhere into the SVG view to add it and display it just after the last added field or between any other field that is already displayed.

* Doble clic en un campo. It will be added to the list.

* Right-click on one of the fields that are available in the Fields table at the left: this will display a menu to add all missing fields to your Detail forms.

![Detail form content definition](assets/en/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

You can add as many fields for most of the detail forms available.

And at any moment, you can reorder your field by selecting it and dropping it at any place in your detail form.

> **RECOMENDACIONES**
> 
> * ¿Quiere cambiar la plantilla de su formulario listado o de formulario detallado? 
> 
> * Cuando cambia las plantillas, los tipos de campo automáticamente se reconocen, guardan y colocan en las áreas apropiadas (según las plantillas y los tipos de campos).


## Galería

Probablemente haya notado que, cuando desea seleccionar una plantilla en la sección Formularios, un icono "Más" está disponible para los formularios listados y detallados desde 4D v18R3.

![More template button](assets/en/project-editor/Forms-more-button.png)

Simplemente haga clic en ese icono para mostrar la lista completa.

![Template picker more button](assets/en/project-editor/Forms-template-gallery.png)

Then, the only thing you need to do is selecting the template that suits your needs and 4D for iOS will handle all the installation process to help you work faster and more efficiently.

You can now start working on the template, as it is ready-to-use!

> **RECOMENDACIONES**
> 
> La galería también está disponible [en línea](https://4d-for-ios.github.io/gallery/).


## ¿Qué hacemos ahora?

Next step: choose a template that suits your needs, and in case something is missing, a [tutorial](gallery-template-update.html) will help you making a **template update**.
