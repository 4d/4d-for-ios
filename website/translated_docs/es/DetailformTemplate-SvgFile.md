---
id: svg-file-detailform-template
title: Template.svg
sidebar_label: Template.svg
---

El archivo template.svg es una representación básica de plantilla. En este archivo svg, deberá definir áreas para poder agregar campos a la plantilla de formulario detallado desde el editor de proyecto.

Aquí hay una versión final:

![Archivo Template svg](assets/en/custom-detailform/detailform-template-svg-file.png)

Esta plantilla tiene una numeración de campos dinámica, lo que significa que le permitirá agregar una **imagen** y puede colocar ** tantos campos **como necesite. Entonces, durante la creación de su formulario detallado en la sección Formularios y arrastra y suelta un campo, aparece un nuevo campo vacío debajo del anterior para que agregue un nuevo campo:

![Archivo Template svg](assets/en/custom-detailform/detailform-dynamic-field-number.png)

Abra el archivo template.svg con su editor de código favorito.

Centrémonos en las diferentes partes de su archivo SVG y en lo que necesitará editar.

## Título
```xml
<title>Custom Detail form</title>
```

Agregue el título de su plantilla aquí.

## Posición, alto, ancho y tipo del área
Puede definir la posición, el alto y el ancho de todos sus campos como hicimos para el tutorial  [Custom list view](creating-listform.html).

### Propiedades de los campos

```
//1
<g id="f" visibility="hidden" ios:dy="35">

//2
<rect class="bg field" x="14" y="0" width="238" height="30"/>

//3
<textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>

//4
<rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>

//5
<use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posición de toda el área Y
2. Posición, alto y ancho del área de fondo
3. Definir la posición del área de texto y el ancho
4. Definir la posición del campo desplegable, alto y ancho, así como también los tipos de campos aceptados (en este ejemplo se aceptan todos los tipos)
5. Definir un botón de cancelación que se mostrará para eliminar el contenido actual

### Área Image field

```
//1
<g transform="translate(0,60)">

//2
<rect class="bg field" x="15" y="0" width="236" height="65"/>

//3
<path class="picture" transform="translate(10 0) scale(6)"/>

//4
<textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>

//5
<rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>

//6
<use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posición de toda el área Y
2. Posición, alto y ancho del área de fondo
3. Icono para mostrar una imagen en el imageField
4. Definir la posición del área de texto y el ancho
5. Defina la posición del campo soltable, su alto y su ancho, así como los tipos de campos aceptados
6. Define un botón de cancelación que se mostrará para eliminar el contenido actual

Ahora que tiene un **icono**, la **descripción básica de la plantilla** en el archivo manifest.json y su archivo **svg**, pasemos a la parte divertida con ¡Xcode!

> **NOTA**
> 
> Todos los tipos están disponibles [aquí](https://developer.4d.com/docs/en/Concepts/data-types.html).

> **CONSEJO**
> 
> * Para facilitar la definición de los tipos de campos, 4D for iOS le permite incluir tipos de campos con los ** valores positivos ** y también excluir los tipos de campo con ** valores negativos **. For example, `ios:type="-3,-4"` will allow you to drag and drop every field exept images and dates.
> 
> * To include all types, just type `ios:type="all"`.

