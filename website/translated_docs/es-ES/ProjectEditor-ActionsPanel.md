---
id: actions
title: Actions
---

Esta sección le permite:

* crear acciones para ejecutar código 4D desde su aplicación iOS.
* definir y añadir parámetros a sus acciones.

## En el editor de proyectos

### Cree su acción

Puede crear una nueva acción haciendo clic en el botón + en la parte inferior de la tabla Acciones. Aparecerá una nueva línea en la tabla.

A continuación, deberá definir lo siguiente:

* **Nombre:** define el nombre de la acción a utilizar en el método base [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) para lanzar su código 4D.
* **Iconos:** seleccione un icono para su acción de su librería de iconos. También puede agregar su propio icono siguiendo este [tutorial](using-icons.html).
* **Etiquetas cortas y largas: **las etiquetas para las acciones que se mostrarán en su aplicación.
* **Tabla:** seleccione la tabla en la que desea aplicar la acción.
* **Alcance:** seleccione si desea aplicar la acción en una **entidad** o en una **tabla**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Añada parámetros a su acción

Como en **4D v17R6**, puede añadir los **parámetros de acción** y **editar** datos directamente desde su aplicación.

Para cada parámetro, puede editar las siguientes propiedades:

* Nombre
* Etiqueta larga
* Etiqueta corta
* Formato
* Restricciones de entrada (definir valores mínimos o máximos)
* Placeholder
* Definición de un campo obligatorio
* Valor por defecto

![Action parameters](assets/en/project-editor/Actions-parameters-4D-for-iOS.png)

Puede cambiar el orden de los parámetros con solo arrastrar y soltar.

Estos son los diferentes **formatos** que puede seleccionar para un parámetro:

<table>
  

<tr>
<th colspan="2"  style="text-align:center">TEXTO</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descripción</th>
  </tr>
  
  <tr>
    
<td>Texto</td><td>Poner en mayúscula la primera letra de una cadena</td>
  </tr>
  
  <tr>
    
<td>Correo electrónico</td><td>Teclado iOS optimizado para la entrada de correo electrónico</td>
  </tr>
  
  <tr>
    
<td>Número de teléfono</td><td>Teclado iOS para ingresar números de teléfono.</td>
  </tr>
  
  <tr>
    
<td>Cuenta</td><td>Teclado iOS optimizado para la entrada de correo electrónico</td>
  </tr>
  
  <tr>
    
<td>Contraseña</td><td>Optimizado para manejar contraseñas</td>
  </tr>
  
  <tr>
    
<td>URL</td><td>Teclado iOS optimizado para la entrada del URL</td>
  </tr>
  
  <tr>
    
<td>Código postal</td><td>Teclado iOS optimizado para la entrada del código postal</td>
  </tr>
  
  <tr>
    
<td>Área de texto</td><td>Incluye varias líneas de texto en un solo campo</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NÚMERO</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descripción</th>
  </tr>
  
  <tr>
    
<td>Número</td><td>Números con décimales</td>
  </tr>
  
  <tr>
    
<td>Entero</td><td>Números sin decimales</td>
  </tr>
  
  <tr>
    
<td>Científica</td><td>Notación científica</td>
  </tr>
  
  <tr>
    
<td>Porcentaje</td><td>Notación en porcentaje</td>
  </tr>
  
  <tr>
    
<td>Nombre en letras</td><td>Convierte los números en cadenas</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">FECHA</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descripción</th>
  </tr>
  
  <tr>
    
<td>Fecha</td><td>Nov 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Fecha corta</td><td>    11/23/37</td>
  </tr>
  
  <tr>
    
<td>Fecha larga</td><td>Noviembre 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Fecha completa</td><td>Martes, 23 de noviembre 1937</td>
  </tr>
  
  <tr>
    
<td colspan="2"></td>
  </tr>

<tr>
<th colspan="2" style="text-align:center">HORA</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descripción</th>
  </tr>
  
  <tr>
    
<td>Hora</td><td>3:30 PM</td>
  </tr>
  
  <tr>
    
<td>Duración</td><td>2 horas 30 minutos</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">BOOLEANO</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descripción</th>
  </tr>
  
  <tr>
    
<td>Booleano</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
  </tr>
  
  <tr>
    
<td>Marca de verificación</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"></td>
  </tr>

<tr>
<td colspan="2"></td>
</tr>
<tr>
<th colspan="2" style="text-align:center">IMÁGENES</th>
</tr>
<tr>
<td colspan="2">Los parámetros de imagen estarán disponibles en una próxima versión</td>
</tr>

</table>

### Acciones predefinidas

4D for iOS incluye tres acciones (predefinidas) para administrar el contenido de su aplicación:

* Acción de edición 
* Acción de añadir 
* Acción de eliminar 

#### 1. Acción de añadir

4D for iOS simplifica al máximo la creación de **acciones de adición**.

Lo único que debe hacer es seleccionar la opción **Acción de adición para**, accesible desde el **botón + ** en la parte inferior de la tabla Acciones.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Luego **seleccione la tabla** que quiere asociar a la acción añadir. ¡Y listo!

Esto **creará automáticamente** todos los parámetros en el Editor de proyectos. En la aplicación generada, esto le permitirá editar cada valor de campo.

Para ese tipo de acción, verá que todas las **propiedades** ya están completadas para su conveniencia al lado derecho de la lista de parámetros.

#### 2. Acción de edición

La creación de **acciones de edición** sigue el mismo proceso que las acciones de adición, con la excepción de que no podrá definir valores predeterminados desde la sección Acciones.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)

#### 3. Acción de eliminación

La creación de **acciones de eliminación ** sigue el mismo proceso que las acciones de edición. La única diferencia es que esta acción le permite eliminar una entidad.

Para crear una acción de eliminación, seleccione la opción **Acción de eliminación para**, accesible desde el **botón + ** en la parte inferior de la tabla Acciones.

Este tipo de acción debe utilizarse con precaución.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

Para las acciones de edición y adición, puede modificar:

* los parámetros, agregando o eliminando un parámetro utilizando los **botones + y -** en la parte inferior de la lista de parámetros de acciones.
* las propiedades, definiéndolas como desee. 

### On Mobile App Action

El método base [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) está disponible para llamar a todos sus métodos 4D.

Después de crear todas sus acciones, simplemente haga clic en el botón Crear de la tabla Acciones para generar automáticamente un bloque de código *Case of* que incluya todos los nombres de sus acciones en el método *On Mobile App Action*.

:::tip NOTE

* You can refresh the selection after executing an action using ```$out.dataSynchro:=True```.
* You can notify the app user when action has been executed using ```$out.statusText:="Message you want to display"```.
* You can also decide to force close the Edition form using ```$out.close:=True```. :::

## Aplicación iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Formularios Lista en tabla

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

:::tip TIPS Actions will be displayed in the same order as defined in the Action section. :::

### Formularios Lista en colección

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formularios detallados

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formularios de edición

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous field using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## ¿Qué hacer ahora?

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.

* A final [tutorial](using-parameters.html) will guide you through the **action parameters definition**.