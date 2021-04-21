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

* **Nombres:** define el nombre de la acción a utilizar en el método base [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) para lanzar su código 4D.
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
</tr><tr>
<td>Código de barras</td><td>Extraer el valor asociado al código de barras. Formatos soportados: EAN8, EAN13, Code 39, Code 93, Code 128, QR Code, UPC, PDF417</td>
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
<td>Booleano</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
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
<td>Firma</td><td>Permitir firmar con el dedo</td>
</tr>

</table>

### Acciones predefinidas

4D for iOS incluye tres acciones (predefinidas) para administrar el contenido de su aplicación:

* Editar
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

> **NOTA**
> 
> * Puede refrescar la selección después de ejecutar una acción utilizando `$out.dataSynchro:=True`.
> * Puede notificar al usuario de la aplicación cuando se ha ejecutado una acción utilizando `$out.statusText:="Message you want to display"`.
> * También puede decidir forzar el cierre del formulario de edición utilizando `$out.close:=True`.



### Acciones en modo sin conexión

The user of an iOS app can draft, store and queue action requests, even if he’s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list.

Pending tasks can be visualized and opened from:

•   *The Settings screen*

It displays a summary and a history of all pending and completed tasks.

![Action section](assets/en/project-editor/screen1)

•   *The List & Detail forms*

They display all the tasks related to the table or to the entity that you are currently viewing.

![Action section](assets/en/project-editor/screen2)

> **Notes**
> 
> * The "Share" predefined action is only executable online.
> * Actions are editable while pending, but they can no longer be modified once they switch to the "Completed" mode.


## Aplicación iOS

En su aplicación iOS, las acciones están disponibles de diferentes formas en sus formularios listados y detallados, según las plantillas que seleccione en la sección Formularios.

### Formularios Lista en tabla

* **Acción de entidad:** deslice hacia la izquierda en una celda para mostrar las acciones disponibles en un formulario Lista. Se muestra un botón "+" si define más de 3 acciones por entidad.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Acciones de tabla:** un botón de acciones genéricas está disponible en la barra de navegación para mostrar una lista de acciones de tabla.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

> **RECOMENDACIONES**
> 
> Las acciones se mostrarán en el mismo orden definido en la sección Acción.


### Formularios Lista en colección

* **Acción de entidad:**dependiendo de la plantilla seleccionada, las acciones se muestran al hacer clic en un botón genérico o al mantener el clic en una celda.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Acciones de tabla:** como para los formularios Lista en tablas, hay un botón de acciones genérico disponible en la barra de navegación para mostrar una lista de acciones de tabla.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formularios detallados

Como para las acciones de tabla en los formularios detallados, un botón de acciones genéricas está disponible en la barra de navegación para mostrar todas sus acciones de entidad en una lista.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formularios de edición

Si ha creado una acción de edición o de adición, tan pronto como la seleccione de la lista de acciones, aparecerá un **formulario de edición**.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

Desde acá, puede:

* editar todos sus campos seleccionándolos y
* validar o cancelar sus modificaciones con los botones **Listo** o **Cancelar** (disponibles en la barra de navegación).

Para su comodidad, el formulario de Edición incluye algunas **funcionalidades especiales**:

* El tipo de teclado depende del tipo de parámetro seleccionado en la sección Actions.
* Puede ir al campo siguiente o anterior utilizando la flecha en la parte superior del teclado.
* El teclado iOS se puede cerrar tocando cualquier parte fuera de un campo.
* Se le indica al usuario cuando un valor no es válido.
* La vista se centra en los campos obligatorios vacíos cuando el usuario hace clic en el botón Done.

## ¿Qué hacemos ahora?

* Un [tutorial](actions-getting-started.html) está disponible para guiarlo a través del **proceso de definición de una acción**.

* Otro [tutorial](action-custom-template.html) lo guiará para integrar los **TAG de acción** en las plantillas personalizadas.

* Un [tutorial](action-parameters.html) final lo guiará a lo largo del proceso **definición de los parámetros de una acción**.
