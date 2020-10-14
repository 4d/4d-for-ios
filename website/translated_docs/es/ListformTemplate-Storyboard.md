---
id: storyboard-listform-template
title: Storyboard
---

¡Ahora es el momento de crear su interfaz iOS de formulario listado con Xcode!

Este es el resultado que queremos lograr:

![Storyboard custom listform](assets/en/custom-listform/storyboard-custom-listform.png)

Para cada celda, vamos a añadir:

* Una foto de perfil
* Título
* Subtitulo

## Abrir el archivo storyboard con Xcode

Primero, abra su archivo storyboard en Xcode.

![Empty storyboard custom template](assets/en/custom-listform/empty-storyboard-custom-template.png)

Está bastante vacío, así que vamos a agregar algo de contenido.

## Añadir una "Image View"

From the **Object library**, drag and drop an  **Image View** into a cell. Puede buscar una "Image View" en la barra de búsqueda en la parte inferior de la librería de objetos.

![Add Image View storyboard](assets/en/custom-listform/add-imageview-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Luego, defina el valor de X en 8 y el valor de Y en 3.

![Image View position height and width](assets/en/custom-listform/imageview-position-height-width.png)

Next, add a constraint (Leading: 8) by clicking on the **Add New Constraints button** (at the bottom of the Interface Builder window). Agregue también restricciones de ancho y alto, como se muestra:

![Image View leading space width height](assets/en/custom-listform/imageview-leading-space-width-height.png)

Finally, click on the **Align button** (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.

![Image View align vertically](assets/en/custom-listform/imageview-align-vertically.png)

¡Su vista de imagen ahora está bien ubicada!

![Image View final](assets/en/custom-listform/imageview-final.png)

Ahora, vamos a trabajar en las etiquetas de celdas.

## Añadir etiquetas de título y subtítulo

Let's begin by **adding a View**. Search for "View" in the **Object library** and drag it into the cell container.

![Add View Storyboard](assets/en/custom-listform/add-view-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Luego, defina el valor de X en 126 y el valor de Y en 10.

![View position height and width](assets/en/custom-listform/view-position-height-width.png)

For the Image View, add four constraints by clicking on the **Add New Constraints button** (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:

![View contraints Storyboard](assets/en/custom-listform/view-constraints-storyboard.png)

Arrastre y suelte una etiqueta en la Vista que acaba de agregar desde la Librería de objetos.

![Add label Storyboard](assets/en/custom-listform/add-label-storyboard.png)

From the **Size inspector panel**, set the Label View Width value to 269 and the Height value to 32. Luego, defina el valor de X en 8 y el valor de Y en 8.

**Duplicate the label** and in the **Size inspector panel**, set the X value to 8 and the Y value to 48.

![Duplicate the label](assets/en/custom-listform/duplicated-label-storyboard.png)

Select both labels add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:

![Labels contraints storyboard](assets/en/custom-listform/labels-contraints-storyboard.png)

With a label selected, double-click on the **Height constraint** to edit it.

![Label height constraint edition](assets/en/custom-listform/label-height-constraint-edition.png)

Change the relation from Equal to **Greater Than or Equal** so it can have a variable height (to handle multiline labels).

![Change relation label height constraint](assets/en/custom-listform/change-relation-label-height-constraint.png)

Repita el proceso para la segunda etiqueta.

## Personalizar la etiqueta

Desde el inspector de atributos (al lado derecho de la ventana del Interface Builder), puede personalizar los colores de fuente de su etiqueta. Let's make the second label **Dark Grey Color** :

![Label color dark grey](assets/en/custom-listform/label-color-dark-grey.png)

También puede seleccionar el color principal de su aplicación:

![Label color background color](assets/en/custom-listform/label-color-background-color.png)

Desde el inspector de atributos, también puede personalizar la fuente. Select both labels and select Font > Custom > **Helvetica Neue**:

![Label font custom](assets/en/custom-listform/label-font-custom.png)

To complete the customizations, select both labels and **enter 0 for Lines** in the inspector window. Esto permite que el número de líneas sea ilimitado.

![Label lines number](assets/en/custom-listform/label-lines-number.png)

> **NOTA**
> 
> El Storyboard se optimiza para tener una **altura de celda variable** en función del contenido de cada celda.
> 
> ![Row height tableview cell](assets/en/custom-listform/row-height-tableview-cell.png)


## Cómo obtener datos en sus celdas

### Image View
Seleccione su Vista imagen y vaya a **Identity inspector** > User Defined Runtime Attributes. Haga clic en el **botón +** para añadir una línea.

![User defined runtime attributes](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path**: Begin with bindTo to activate binding on the component. Introduzca `bindTo.record.___FIELD_1___`

* **Type**: siempre `String`

* **Value**: nombre del atributo. Introduzca `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](assets/en/custom-listform/identity-inspector-storyboard.png)

### Etiquetas

Seleccione la primera etiqueta y agregue una línea en el área "Defined Runtime Attributes":

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Tipo**: `Cadena`

* **Value**: `___FIELD_2_BINDING_TYPE___`

![Field 2 Binding](assets/en/custom-listform/field-2-binding.png)

Seleccione la segunda etiqueta y agregue una línea en el área "Defined Runtime Attributes":

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Tipo**: `Cadena`

* **Value**: `___FIELD_3_BINDING_TYPE___`

![Field 3 Binding](assets/en/custom-listform/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility:

* Double-click the first label to edit it and enter `___FIELD_2_LABEL___`
* Double-click the second label to edit it and enter `___FIELD_3_LABEL___`

![Storyboard label display names](assets/en/custom-listform/storyboard-label-display-name.png)

Vaya al editor de su proyecto y seleccione su plantilla de formulario listado en la sección Formularios, luego haga clic en Crear y Ejecutar.

Este es el el resultado del simulador:

![Simulator result](assets/en/custom-listform/simulator-result.png)

## Personalice su aplicación

El último paso es agregar un radio de esquina a la vista de imagen para tener un mejor diseño.

Seleccione su Vista imagen y añada las dos líneas siguientes en el área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

y

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: seleccione la casilla

![ImageView corner Radius](assets/en/custom-listform/imageview-corner-radius.png)

¡Ahora puede crear su proyecto desde el editor de proyectos!

![Custom template final result](assets/en/custom-listform/custom-template-final-result.png)

## ¿Qué hacemos ahora?

En este tutorial, hemos cubierto los conceptos básicos para crear plantillas de formularios listados. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del Proyecto Starter. Espere, ¡Hay más! En el siguiente tutorial, aprenderá cómo crear plantillas de formulario detalladas. Click on **Final Project** below to download the completed template list folder.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip">PLANTILLA FINAL DE FORMULARIO LISTADO PERSONALIZADO</a>
</div>




