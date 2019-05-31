---
id: storyboard-detailform-template
title: Storyboard
---

¡Ahora es el momento de crear su interfaz iOS de formulario detallado con Xcode!

Este es el resultado que queremos lograr:

![Storyboard custom detailform](assets/en/custom-detailform/storyboard-custom-detailform.png)

Para cada celda, vamos a añadir:

* Una foto de perfil en el encabezado 
* Un campo a duplicar

## Abrir el archivo storyboard con Xcode

Primero, abra su archivo storyboard en Xcode.

![Empty storyboard custom template](assets/en/custom-detailform/empty-storyboard-custom-detailform-template.png)

Está bastante vacío, así que vamos a agregar algo de contenido.

## Añadir un "Scroll View"

Para que nuestro formulario detallado sea desplazable, el primer paso es arrastrar y soltar una "Scroll View" (vista de desplazamiento) desde la **Librería de objetos**.

![Add Scroll View Storyboard](assets/en/custom-detailform/add-scrollview-storyboard.png)

Desde el **Inspector de tamaño** (en el lado derecho de la ventana del Interface Builder), defina el valor del Scroll vista en 359 y el valor de altura en 667. A continuación, defina el valor de X en 8 y el valor de Y en 0.

![Scroll View position height and width](assets/en/custom-detailform/scrollview-position-height-width.png)

Luego, agregue cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 8, Leading: 8, Top: 0, y Bottom: 0) como se muestra a continuación:

![Scrollview Constraints](assets/en/custom-detailform/scrollview-constraints.png)

## Añadir una "Vertical Stack View"

Arrastre y suelte una "Vertical Stack View" desde la **librería de objetos** a la "Scroll view". Desde el **Size inspector** (al lado derecho del Interface Builder), defina el valor de ancho en 359 y el valor de alto en 202. A continuación, defina el valor de X en 0 y el valor de Y en 8.

![Add stackview Storyboard](assets/en/custom-detailform/add-vertical-stackview-storyboard.png)

Dado que el ancho y el alto del Stack View están definidos por los elementos que se encuentran dentro de ella, configuraremos el tamaño y las restricciones más adelante.

## Añadir las vistas en el Stack Views

Arrastre y suelte una vista de la **librería de objetos** en la Stack View que acaba de agregar a su storyboard. Llamémosla **Field View 1**.

![Add Field View 1](assets/en/custom-detailform/add-view1-storyboard.png)

Luego arrastre y suelte otra vista de la **Librería de objetos** directamente en el Document Outline al mismo nivel que Field View 1 (para integrarla en la Stack View) y llámela **Field View 2**.

![Add Field View 2](assets/en/custom-detailform/add-view2-storyboard.png)

Para agregar espacio entre las vistas, seleccione su Stack View y defina el valor de espaciado en 8 (en el Attributes Inspector).

![Stackview spacing](assets/en/custom-detailform/stackview-spacing.png)

Seleccione **Field View 1** y **Field View 2** y defina, en el **Size inspector** (a la derecha del Interface Builder), el valor de ancho en 359 y de alto en 97.

![views position height and width](assets/en/custom-detailform/views-position-height-width-storyboard.png)

Seleccione **Field View 1** y añada tres restricciones haciendo clic en el botón **Add New Constraints button** (Trailing: 0, Leading: 0 y Top: 0):

![Field Views constraints](assets/en/custom-detailform/fieldView-1-Field-View-2-constraints.png)

Para que "Stack View" y "Scroll View" tengan el mismo ancho, debe agregar un restricción:

Presione Ctrl y arrastre la Stack View a la Scroll View. Cuando suelte el botón del ratón, el Interface Builder muestra un menú con una lista de posibles restricciones. Seleccione "Equal Width".

![Stack View Equal Width](assets/en/custom-detailform/stackview-equal-width-scrollview.png)

Luego, agregue cuatro restricciones con la Stack View haciendo clic en **Add New Constraints** (Trailing: 0, Leading: 0, Top: 8, y Bottom: 0) como se muestra a continuación:

![Stackview constraints](assets/en/custom-detailform/stackview-constraints.png)

Esto es lo que verá cuando se agreguen restricciones:

![Stackview final constraints](assets/en/custom-detailform/stackview-constraints-final.png)

Ahora que tiene dos vistas en su Stack View y ha definido restricciones, concentrémonos en Field View 1.

## Añada una Image View al Field View 1

Desde la **Object library** (la librería de objetos), arrastre y suelte una **Image View** (una vista de imagen) en Field View 1.

![Add Image View storyboard](assets/en/custom-detailform/add-imageview-storyboard.png)

Desde el **Size inspector** (al lado derecho del Interface Builder), defina el valor del ancho del Image View en 359 y su altura en 97. A continuación, defina el valor de X en 0 y el valor de Y en 0.

![Image View position height and width](assets/en/custom-detailform/imageview-position-height-width.png)

Luego, agregue cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 0, Leading: 0, Top: 0, y Bottom: 0) como se muestra a continuación:

![Image View constraints](assets/en/custom-detailform/imageview-constraints.png)

En el **Size inspector**cambie el valor **Default** del intrínseco Size por **Placeholder**.

![Intrinsic size Image View](assets/en/custom-detailform/intrinsic-size-imageview.png)

## Añadir las etiquetas al Field View 2

### Etiqueta de título

In the **Object library**, drag and drop a **Label** into Field View 2 and set the Width value to 343 and the Height value to 22. Then set the X value to 8 and the Y value to 8.

![Add label](assets/en/custom-detailform/add-label1-storyboard.png)

Double click on the label and name it "```___FIELD_LABEL___```". Then in the **attribute inspector** set the font to **Helvetica Neue Light 18.0** and the color to **BackgroundColor**:

![Title label font and color](assets/en/custom-detailform/title-label-font-and-color.png)

### Content label

Duplicate the Title label and set the duplicate's Width value to 339 and the Height value to 44. Then set the X value to 12 and the Y value to 37.

![Add label](assets/en/custom-detailform/add-label2-storyboard.png)

Double click on the label and name it "```<___FIELD_LABEL___>```". Then from the **attribute inspector** set the font to **Helvetica Neue Light 20.0** and the color to **Black Color**:

![Content label font and color](assets/en/custom-detailform/content-label-font-and-color.png)

Select the Content and Title labels and add four contraints by clicking on the **Add New Constraints button** (Trailing: 8, Leading: Multiple, Top: Multiple, and Bottom: Multiple) as shown below:

![Title and Content labels constraints](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)

You're done with graphical elements! All of your constraints are well defined :)

## How to get data into your cells

### Image View

Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![User defined runtime attributes](assets/en/custom-detailform/user-defined-runtime-attributes.png)

* **Key Path**: Start with bindTo to activate binding on the component. Enter ```bindTo.record.___FIELD_1___```

* **Type**: Always ```String```

* **Value**: The attribute name. Enter ```___FIELD_1_BINDING_TYPE___```

![Identity inspector storyboard](assets/en/custom-detailform/identity-inspector-storyboard.png)

### Labels

For the **first label** we are going to add several lines mainly to display icons:

![Label1 User Defined Runtime Attributes](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)

You also need to set the Class to ```IconLabel``` and check the **Inherit Module From Target** checkbox as we can see below:

![Label1 Custom Class](assets/en/custom-detailform/label1-custom-class.png)

Select the **second label** and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD___```

* **Type**: ```String```

* **Value**: ```___FIELD_BINDING_TYPE___```

![Label2 User Defined Runtime Attributes](assets/en/custom-detailform/label2-user-defined-runtime-attributes.png)

## Add TAGS to the cells to be duplicated

Field View 2 includes elements that will be duplicated so you can have as many field as you define in the project editor.

Each storyboard element has a Object ID. For example, if you select Field View 2 and go to the **Identity inspector**, you'll see its Object ID:

![Object ID Storyboard](assets/en/custom-detailform/object-id-storyboard.png)

In order to tell the project editor that all of the elements included in this view will be duplicated, we need to add TAG to each element and constraints.

The process is a little bit tricky... Let's begin by opening the storyboard file with your favorite code editor!

### Field View 2

* Select **Field View 2** and get its Object ID from the Identity Inspector (on the right side of the Interface Builder window). In our project, Field View 2 ID is: **SiX-3H-lNB**.

* Search for this ID in the storyboard xml code and replace it with **TAG-FD-001** each time it appears. As you can see, this Object ID is mentioned several times so be careful!

![Storyboard xml](assets/en/custom-detailform/storyboard-xml.png)

Save the storyboard xml file. As you can see, the Field View 2 Object ID has changed in your storyboard in Xcode:

![Field View 2 Object ID](assets/en/custom-detailform/field-view-2-object-id.png)

### First label

* Now, get the **first label** Object ID from the Identity Inspector and replace it with **TAG-FD-002** each time it appears in the storyboard xml code.

![Label 1 Object ID](assets/en/custom-detailform/label1-object-id.png)

Done with the first label!

### Second label

* Next, get the **second label** Oject ID from the Identity Inspector and replace it with **TAG-FD-003** each time it appears in the storyboard xml code.

![Label 2 Object ID](assets/en/custom-detailform/label2-object-id.png)

Voilà!

### Constraints

Both labels have constraints that we need to tag, too:

![Tag constraints](assets/en/custom-detailform/duplicated-constraints.png)

Just like View Field 2 and label, get all **7 Constraints** Object IDs from the Identity Inspector and replace them with: **TAG-FD-004**, **TAG-FD-005**, **TAG-FD-006**, **TAG-FD-007**, **TAG-FD-008**, **TAG-FD-009** and **TAG-FD-010**.

Go to your project editor and select your detail template from the Forms section, then click on Build.

![Custom detail template forms](assets/en/custom-detailform/custom-detail-template-forms.png)

Not bad for a first attempt! :)

![iPhone Demo](assets/en/custom-detailform/iphone-demo.png)

Field View 2 is well duplicated! Let's see if we can make this app a bit more interesting!

### Customize your app

We're going to add a corner radius to the Image View, as well as Field View 2.

Select your Image View and add the two following lines in the User Defined Runtime Attributes:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

and

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: Check the box

![iPhone Demo](assets/en/custom-detailform/imageview-corner-radius.png)

Next, select Field View 2 and add the following:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

![iPhone Demo](assets/en/custom-detailform/fieldview2-corner-radius.png)

You can now build your project from the project editor!

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Where to go from here?

In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter Project resources. Click on **Final Project** below to download the completed template folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-detailform/CustomDetailFormFinalTemplate.zip">CUSTOM DETAILFORM FINAL TEMPLATE</a>

  </p>
</div>