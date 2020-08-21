---
id: many-to-one-relations
title: Relaciones Muchos a Uno
---

4D v17 R5 incluye un nuevo concepto: las relaciones Muchos a Uno

> **NOTA**
> 
> En este tutorial, utilizaremos los nombres de las relaciones entre sus tablas.

> Dar nombres de enlaces descriptivos, puede facilitar la definición de la estructura de su proyecto.

Comencemos descargando el Proyecto Starter:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">PROJET STARTER N A UNO</a>
</div>

Here we want to display the category for each task in the detail form of your generated app. To do so, open the **StarteriOSProject** from **Open > Mobile Project...**

Then go right to your Structure section and select the **Task table**.

### Sección Structure

* You can notice that the **TaskCategory relation** is underlined

* Al hacer clic en él, se mostrarán los campos disponibles a través de esta relación

* Select the **Name field**

![Select link from structure section](assets/en/relations/select-link-from-structure.png)

* Este campo funcionará como cualquier otro campo durante el resto del proceso de creación de la aplicación

* También puede filtrar el contenido de su aplicación utilizando campos relacionados, de la sección Datos. To do so enter `TaskCategory.Name != 'Personal'` in the Filter query field to exclude personal tasks.

 ![Related field in Forms section](assets/en/relations/Related-field-from-Data-section.png)

* You can then select an **icon** as well as **formatters** and define **short and long labels** from the Labels and Icons section

![Related field from Labels and Icons section](assets/en/relations/related-field-from-labels-icons.png)

* Vaya a la sección Formularios y arrastre el campo en el formulario detallado Tasks

![Related field in Forms section](assets/en/relations/related-field-forms.png)

* Build and Run

¡Su campo relacionado debe aparecer en el formulario detallado de su aplicación!

![Related field in Forms section](assets/en/relations/final-result-n-to-one-relations.png)


