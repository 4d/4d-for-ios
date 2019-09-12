---
id: structure
title: Structure
---

Esta sección muestra todas las tablas y los campos de su base de datos.

![Structure section](assets/en/project-editor/Structure-section-4D-for-iOS.png)

Aquí, puede definir un subconjunto de su estructura física para reproducir en dispositivos móviles seleccionando tablas y campos específicos. El seleccionado:

* las tablas seleccionadas se agregarán automáticamente a las pestañas de su aplicación.
* los campos seleccionados estarán disponibles más adelante, cuando sea el momento de definir sus formularios Lista y sus formularios detallados.

## Many to One relations

* 4D 17R5 allows you to visualize table relations in the generated app publishing them from the Structure section. Luego, cuando se publican los campos relacionados, se pueden utilizar como cualquier otro campo en la [creación de una aplicación](n-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Para ayudarlo a definir la estructura de su aplicación, hay varios filtros y un motor de búsqueda disponibles para facilitar la selección de sus tablas y campos.<div class = "tips"> 

**CONSEJOS**

Puede publicar una selección de campos presionando la barra espaciadora, en lugar de seleccionarlos uno por uno.</div> 

## One to Many relations

### Deal with One to Many relations from the project editor

Now, in recent versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you have to do is:

* publishing at least one field of the target (Many) table

* publishing the relation from the source (One) table

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Then, when your related fields are published, they can be used like any other field. So you will be able to:

* Define relations properties in the [Labels and Icons](labels-and-icons.html#relations-properties) section.

* Drop the 1 to N relation in a Detail form from the Forms Section to create a link between a detail form and a related table.

### What will be created in the generated project ?

Basically a Relation button will be created in detail forms to go straight to the related view.

[Tutorials](one-to-n-relations.html) are available to help you use 1 to N relation in your 4D for iOS project.

## Incremental reload

### Enable structure adjustments

In 4D 17R5, the 4D for iOS reload becomes incremental. This means that only new, modified or deleted data from the database will be updated. This is a great optimisation in terms of loading time!

To do so, 4D for iOS needs to make structure optimizations and create:

* A ```__DeletedRecords``` table to store deleted records
* and ```__GlobalStamp``` fields to store modification stamps for each published table in your mobile application

All you need to do is enabling 4D for iOS to make the necessary structure adjustments for an optimised mobile data update.

Once authorized, 4D for iOS will do all the work for you, and you will fully benefit from all the advantages of incrememental data reload.<div class = "tips"> 

**NOTA**

Estas optimizaciones son necesarias tanto para las bases locales como para las bases del servidor.</div> 

### Pull to refresh!

iOS app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can now reset your app data and find information about your app.<div class = "tips"> 

**NOTA**

As soon as the admin performs an important maintenance operation, he shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction</div>