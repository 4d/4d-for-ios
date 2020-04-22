---
id: structure
title: Structure
---

Esta sección muestra todas las tablas y los campos de su base de datos.

![Structure section](assets/en/project-editor/Structure-section-4D-for-iOS.png)

Aquí, puede definir un subconjunto de su estructura física para reproducir en dispositivos móviles seleccionando tablas y campos específicos. El seleccionado:

* las tablas seleccionadas se agregarán automáticamente a las pestañas de su aplicación.
* los campos seleccionados estarán disponibles más adelante, cuando sea el momento de definir sus formularios Lista y sus formularios detallados.

## Relaciones Muchos a Uno

* 4D 17R5 le permite visualizar las relaciones de la tabla en la aplicación generada y publicarlas desde la sección Estructura. Luego, cuando se publican los campos relacionados, se pueden utilizar como cualquier otro campo en la [creación de una aplicación](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Para ayudarlo a definir la estructura de su aplicación, hay varios filtros y un motor de búsqueda disponibles para facilitar la selección de sus tablas y campos.<div class = "tips"> 

**RECOMENDACIONES**

You can publish a selection of fields by pressing the spacebar rather than selecting them one by one.</div> 

## Relaciones Uno a Muchos

### Tratar las relaciones de Uno a Muchos desde el editor del proyecto

Now, in recent versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you have to do is:

* publicar al menos un campo de la tabla de destino (Muchos)

* publicar la relación de la tabla fuente (Uno)

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Then, when your related fields are published, they can be used like any other field. So you will be able to:

* Definir las propiedades de las relaciones en la sección [ Etiquetas e iconos](labels-and-icons.html#relations-properties).

* Suelte la relación Uno a Muchos en un formulario detallado de la Sección Formularios para crear un enlace entre un formulario detallado y una tabla relacionada.

### ¿Qué se creará en el proyecto generado?

Basically a Relation button will be created in detail forms to go straight to the related view.

[Tutorials](one-to-many-relations.html) are available to help you use One to Many relation in your 4D for iOS project.

## Recarga incremental

### Autorizar las modificaciones de la estructura

In 4D 17R5, the 4D for iOS reload becomes incremental. This means that only new, modified or deleted data from the database will be updated. This is a great optimisation in terms of loading time!

To do so, 4D for iOS needs to make structure optimizations and create:

* Una tabla ```__DeletedRecords``` para almacenar los registros borrados, y
* Los campos ```__GlobalStamp``` para almacenar las modificaciones para cada tabla publicada en su aplicación móvil

All you need to do is enabling 4D for iOS to make the necessary structure adjustments for an optimised mobile data update.

Once authorized, 4D for iOS will do all the work for you, and you will fully benefit from all the advantages of incrememental data reload.<div class = "tips"> 

**NOTA**

These optimizations are required for both local and server databases.</div> 

### ¡Halar para refrescar!

iOS app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can now reset your app data and find information about your app.<div class = "tips"> 

**NOTA**

As soon as the admin performs an important maintenance operation, he shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction</div>