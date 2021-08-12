---
id: action-custom-template
title: Añadir acciones a las plantillas
---

> **OBJETIVOS**
> 
> Agregue acciones a plantillas de formularios de Lista y formularios detallados.

> **REQUISITOS PREVIOS**
> 
> Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.

En este tutorial, veremos lo fácil que puede ser **agregar acciones a plantillas personalizadas**.

## PASO 1. Descargue el proyecto Starter

Para comenzar, descargue el Proyecto Starter, que incluye:

* 2 plantillas de formularios Lista personalizadas (TasksList y TasksCollection)
* 1 plantilla de formulario detallado personalizada (TasksDetail)
* un archivo Tasks.4dbase

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROYECTO STARTER</a>
</div>

## PASO 2. Agregar plantillas personalizadas al proyecto 4D for iOS

Primero, suelte:

* las carpetas de plantillas **TasksList** y **TasksCollection** en la carpeta *Tasks.4dbase/Resources/Mobile/form/list*

![Listform templates](assets/en/actions/Listform-templates.png)

* las carpetas del modelo **TasksDetail** en *Tasks.4dbase/Resources/Mobile/form/detail folder*

![Detailform template](assets/en/actions/Detailform-template.png)

## PASO 3. Añadir las acciones en los formularios Lista

Como hemos visto anteriormente en la [ descripción de la sección Actions](actions.html), hay dos tipos de acciones disponibles (acciones de tabla y acciones de entidad).

Primero abramos el archivo `list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.`</code>

### Añadir las acciones a la plantilla personalizada TasksList

#### A. Añadir un Tag de acción de tabla

Seleccione el **List form Controller** y añada esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)


#### B. Añadir un Tag de acción de entidad

Seleccione la vista Animatable Table y añada esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

¡Su plantilla personalizada está lista para mostrar las acciones!

Puede seleccionar la plantilla personalizada TaskList en la **sección Formularios** y agregar los siguientes campos:

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Ahora agreguemos las etiquetas de acción a la plantilla personalizada TasksCollection

### Añadir las acciones a la plantilla personalizada TasksCollection

Para hacer eso, abra el archivo Storyboard `list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.`

#### A. Añadir un Tag de acción de tabla

El proceso es bastante similar al proceso de la plantilla personalizada TasksList.

Seleccione el **List form Controller** y añada esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Añadir un Tag de acción de entidad

Para las entidades, la forma de mostrar las acciones es bastante diferente de TableView: la acción de deslizar no está realmente adaptada a CollectionViews.

Entonces, con las vistas de colección, la mejor manera de mostrar las acciones es utilizar un gesto de **presión largo** en las celdas con las que desea interactuar.

Para eso, seleccione la celda collectionView y agregue esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

Para optimizar la interacción, puede agregar un efecto escalar con una retroalimentación háptica agregando la siguiente línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `touch.zoomScale`
* Type: `Number`
* Value: `0,96` (adapte la relación de escala según el resultado que desee obtener)

Puede seleccionar la plantilla personalizada TasksCollection en la **sección Formularios** y agregar los siguientes campos:

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)


## PASO 4. Añadir las acciones en los formularios detallados

En los formularios detallados, puede utilizar el **botón genérico** en la barra de navegación o **crear fácilmente su propio botón de acción personalizado**. En ambos casos, debe agregar etiquetas.

Para el botón genérico integrado en la barra de navegación, seleccione el Controlador y añada esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

En nuestro tutorial, queremos crear nuestro propio botón genérico. Para eso, abra el archivo Storyboard `detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard`.

Ábralo, seleccione el botón en la parte inferior derecha y agregue esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

Como puede ver, faltan algunos botones visuales en el archivo Storyboard. Puede encontrar esas imágenes en la plantilla **carpeta Resources**. Se incluirán en el proyecto durante el proceso de generación.

Por ejemplo, para el **moreButton.imageset**:

![Template ressources](assets/en/actions/Template-Ressources.png)

Puede seleccionar la plantilla personalizada TasksDetail en la **sección Formularios** y agregar los siguientes campos:

![TasksDetail Forms section](assets/en/actions/detailform-forms-section.png)

¡Felicitaciones!, su aplicación iOS Tasks ahora está completa e incluye acciones en los formularios Lista y detallados.

![Template ressources](assets/en/actions/ListForm-entity-action-tableview.png)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROYECTO FINAL</a>
</div>

