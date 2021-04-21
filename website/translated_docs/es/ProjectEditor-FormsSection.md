---
id: forms
title: Formularios
---

La sección Formularios le permite seleccionar las plantillas de formulario Lista y de formularios detallados para cada tabla.

4D for iOS ofrece varias plantillas con efectos de transición personalizados para generar aplicaciones iOS modernas.

Aquí está el desglose de esta pantalla, de arriba a abajo:

* **Los formularios Lista y los formularios detallados:**permiten cambiar entre los formulario Lista y los formularios detallados para cada tabla.
* **Las tablas publicadas:** muestra todas las tablas publicadas en la sección Estructura.
* **Formularios disponibles:** permite cambiar entre la selección de plantillas y la definición de contenido.

![List form template selection](assets/en/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## Formularios Lista

Es muy simple, las plantillas vacías se utilizan de forma predeterminada para los formularios Lista y los formularios de detallados de una aplicación.

Seleccione una plantilla para su primera tabla. Aparece la pantalla de definición de contenido. Luego puede arrastrar y soltar los campos de la lista directamente en la plantilla que se muestra a la derecha. La mayoría de los formularios Lista incluyen campos opcionales Búsqueda y Sección.

![List form content definition](assets/en/project-editor/Forms-section-content-definition-4D-for-iOS.png)

En cuanto al campo de búsqueda, en la versión R6 se ha añadido una función de búsqueda por código de barras muy interesante.

Para activarla, sólo tiene que hacer clic en la lupa y marcar la opción Escáner de código de barras.

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

Esta funcionalidad permitirá:

* Filtrar un formulario lista escaneando un Código de Barras que contiene un valor texto. Esto llenará la barra de búsqueda y abrirá el formulario detallado si sólo queda un valor después de filtrar.
* Mostrar formularios específicos listados y detallados simplemente escaneando un código de barras cuyos valores sean Esquemas URL o Enlaces Universales después de la activación de la funcionalidad [Deep linking](deep-linking).

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Los formularios detallados

![Detail form template selection](assets/en/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

Así como para el formulario Lista, seleccione una plantilla y añada sus campos en su formulario detallado.

Hay varias formas de añadir sus campos en los formularios detallados:

* Puede arrastrar y soltar campos en cualquier lugar de la vista SVG para agregarlos y mostrarlos justo después del último campo añadido o entre cualquier otro campo que ya se muestre.

* Doble clic en un campo. Se añadirá a la lista.

* Al hacer clic derecho en uno de los campos que están disponibles en la tabla Campos a la izquierda: se mostrará un menú que le permitirá agregar todos los campos faltantes a sus formularios detallados.

![Detail form content definition](assets/en/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

Puede agregar tantos campos para la mayor parte de los formularios detallados disponibles.

Y en cualquier momento, puede reordenar su campo seleccionándolo y soltándolo en cualquier lugar de su formulario detallado.

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

Luego, lo único que necesita hacer es seleccionar la plantilla que se adapte a sus necesidades y 4D for iOS se encargará de todo el proceso de instalación para ayudarlo a trabajar de manera más rápida y eficiente.

Ahora puede comenzar a trabajar directamente en la plantilla, ¡Ya que está lista para usar!

> **RECOMENDACIONES**
> 
> La galería también está disponible [en línea](https://4d-for-ios.github.io/gallery/).


## ¿Qué hacemos ahora?

Siguiente paso: elijar una plantilla que se adapte a sus necesidades, y en caso de que falte algo, un [tutorial](gallery-template-update.html) lo ayudará a hacer una **actualización de plantilla**.
