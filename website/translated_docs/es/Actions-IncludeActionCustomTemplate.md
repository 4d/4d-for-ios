---
id: action-custom-template
title: Añadir acciones a las plantillas
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Agregue acciones a plantillas de formularios de Lista y formularios detallados.
</div>

<div markdown="1" class = "prerequisites">
**REQUISITOS PREVIOS**
Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.
</div>

En este tutorial, veremos lo fácil que puede ser **agregar acciones a plantillas personalizadas**.

## PASO 1. Descargue el proyecto Starter

Para comenzar, descargue el Proyecto Starter, que incluye:

* 2 plantillas de formularios Lista personalizadas (TasksList y TasksCollection)
* 1 plantilla de formulario detallado personalizada (TasksDetail)
* un archivo Tasks.4dbase

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROYECTO STARTER</a>
</div>

## PASO 2. Agregar plantillas personalizadas al proyecto 4D for iOS

Primero, suelte:

* las carpetas de plantillas **TasksList** y **TasksCollection** en la carpeta *Tasks.4dbase/Resources/Mobile/form/list*

![Listform templates](assets/en/actions/Listform-templates.png)

* las carpetas del modelo **TasksDetail** en *Tasks.4dbase/Resources/Mobile/form/detail folder*

![Detailform template](assets/en/actions/Detailform-template.png)

## PASO 3. Añadir las acciones en los formularios Lista

Como hemos visto anteriormente en la [ descripción de la sección Actions](actions.html), hay dos tipos de acciones disponibles (acciones de tabla y acciones de entidad).

Let's first open the `list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard` file.

### Añadir las acciones a la plantilla personalizada TasksList

#### A. Añadir un Tag de acción de tabla

Seleccione el **List form Controller** y añada esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)


#### B. Añadir un Tag de acción de entidad

Select the Animatable Table View and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

¡Su plantilla personalizada está lista para mostrar las acciones!

You can select the TaskList custom template from the **Forms section** and add the following fields:

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Ahora agreguemos las etiquetas de acción a la plantilla personalizada TasksCollection

### Añadir las acciones a la plantilla personalizada TasksCollection

To do so, open the `list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard` file.

#### A. Añadir un Tag de acción de tabla

El proceso es bastante similar al proceso de la plantilla personalizada TasksList.

Seleccione el **List form Controller** y añada esta línea en el **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Añadir un Tag de acción de entidad

Para las entidades, la forma de mostrar las acciones es bastante diferente de TableView: la acción de deslizar no está realmente adaptada a CollectionViews.

So with collection views, the best way to display actions is to use a **long pressure** gesture on the cells you want to interact with.

For that, select the collectionView cell and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `touch.zoomScale`
* Type: `Number`
* Value: `0,96` (adapt the scale ratio depending on the result you want to get)

You can select the TasksCollection custom template from the **Forms section** and add the following fields:

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)


## PASO 4. Añadir las acciones en los formularios detallados

In Detail forms, you can use the **generic button** in the navigation bar or **create easily your own custom action button**. En ambos casos, debe agregar etiquetas.

For generic button embedded in the navigation bar, select the Controller and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

En nuestro tutorial, queremos crear nuestro propio botón genérico. For that, open the `detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard` file.

Open it, select the button at bottom right and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

Como puede ver, faltan algunos botones visuales en el archivo Storyboard. You can actually find those visuals in the  **Resources folder** template. Se incluirán en el proyecto durante el proceso de generación.

For example for the **moreButton.imageset**:

![Template ressources](assets/en/actions/Template-Ressources.png)

You can select the TasksDetail custom template from the **Forms section** and add the following fields:

![TasksDetail Forms section](assets/en/actions/detailform-forms-section.png)

¡Felicitaciones!, su aplicación iOS Tasks ahora está completa e incluye acciones en los formularios Lista y detallados.

![Template ressources](assets/en/actions/ListForm-entity-action-tableview.png)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROYECTO FINAL</a>
</div>

