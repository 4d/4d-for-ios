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

* **Names:** The action name to use in the [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) database method to trigger your 4D code.
* **Icons:** The icon to choose from your icon library. También puede agregar su propio icono siguiendo este [tutorial](using-icons.html).
* **Short and long Labels:** The labels for the actions to display in your app.
* **Table:** The table on which you want to apply the action.
* **Scope:** Where to use the action, an **entity** or a **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Añada parámetros a su acción

As of **4D v17R6**, you can add **action parameters** and **edit** data directly from your app.

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

Here are the different **Formats** you can select for a parameter:

<table>

<tr>
<th colspan="2"  style="text-align:center">TEXTO</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Texto</td><td>Poner en mayúscula la primera letra de una cadena</td>
</tr><tr>
<td>Correo electrónico</td><td>Teclado iOS optimizado para la entrada de correo electrónico</td>
</tr><tr>
<td>Número de teléfono</td><td>Teclado iOS para ingresar números de teléfono.</td>
</tr><tr>
<td>Cuenta</td><td>Teclado iOS optimizado para la entrada de correo electrónico</td>
</tr><tr>
<td>Contraseña</td><td>Optimizado para manejar contraseñas</td>
</tr><tr>
<td>URL</td><td>Teclado iOS optimizado para la entrada del URL</td>
</tr><tr>
<td>Código postal</td><td>Teclado iOS optimizado para la entrada del código postal</td>
</tr><tr>
<td>Área de texto</td><td>Incluye varias líneas de texto en un solo campo</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NÚMERO</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Number</td><td>Números con décimales</td>
</tr><tr>
<td>Entero</td><td>Números sin decimales</td>
</tr><tr>
<td>Científica</td><td>Notación científica</td>
</tr><tr>
<td>Porcentaje</td><td>Notación en porcentaje</td>
</tr><tr>
<td>Nombre en letras</td><td>Convierte los números en cadenas</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">FECHA</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Fecha</td><td>Nov 23, 1937</td>
</tr><tr>
<td>Fecha corta</td><td> 11/23/37</td>
</tr><tr>
<td>Fecha larga</td><td>Noviembre 23, 1937</td>
</tr><tr>
<td>Fecha completa</td><td>Martes, 23 de noviembre 1937</td>
</tr><tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">HORA</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Hora</td><td>3:30 PM</td>
</tr><tr>
<td>Duración</td><td>2 horas 30 minutos</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">BOOLEANO</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Boolean</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
</tr><tr>
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

* Editar
* Acción de añadir
* Acción de eliminar

#### 1. Acción de añadir

4D for iOS makes the **Add actions** creation process very simple.

The only thing you need to do is select the **Add action for** option, accessible from the **+ button** at the bottom of the Actions table.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action. ¡Y listo!

This will **automatically create** all the parameters for you in the Project Editor. En la aplicación generada, esto le permitirá editar cada valor de campo.

For those kind of action, you will see that all **properties** are already filled in for your convenience at the right side of the parameter's list.


#### 2. Acción de edición

**Edit actions** creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)


#### 3. Acción de eliminación

**Delete action** creation follows the same process as the Edit action. La única diferencia es que esta acción le permite eliminar una entidad.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

Este tipo de acción debe utilizarse con precaución.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

Para las acciones de edición y adición, puede modificar:

* parameters by adding or removing a parameter using the **+ and - buttons** at the bottom of the Action parameters list.
* las propiedades, definiéndolas como desee.

### On Mobile App Action

El método base [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) está disponible para llamar a todos sus métodos 4D.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.<div class = "tips">
**NOTA**

* You can refresh the selection after executing an action using `$out.dataSynchro:=True`.
* You can notify the app user when action has been executed using `$out.statusText:="Message you want to display"`.
* You can also decide to force close the Edition form using `$out.close:=True`.</div>

## Aplicación iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Formularios Lista en tabla

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)<div class = "tips">
**TIPS**
Actions will be displayed in the same order as defined in the Action section.</div>


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
