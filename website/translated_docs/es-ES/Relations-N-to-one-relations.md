---
id: many-to-one-relations
title: Relaciones Muchos a Uno
---

4D v17 R5 incluye un nuevo concepto: las relaciones Muchos a Uno<div class = "tips"> 

**NOTA**

En este tutorial, utilizaremos los nombres de las relaciones entre sus tablas. Dar nombres de enlaces descriptivos, puede facilitar la definición de la estructura de su proyecto.</div> 

Comencemos descargando el Proyecto Starter:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">PROJET STARTER N A UNO</a>

  </p>
</div>

Aquí queremos mostrar la categoría de cada tarea en el formulario detallado de su aplicación. Para hacerlo, abra el **StarteriOSProject** en ** Abrir>Proyecto móvil...**

Luego diríjase a la sección Structure y seleccione la **Task table**.

### Sección Structure

* Puede constatar que el **enlace TaskCategory** está subrayado

* Al hacer clic en él, se mostrarán los campos disponibles a través de esta relación

* Seleccione el **campo Name**

![Select link from structure section](assets/en/relations/select-link-from-structure.png)

* Este campo funcionará como cualquier otro campo durante el resto del proceso de creación de la aplicación

* También puede filtrar el contenido de su aplicación utilizando campos relacionados, de la sección Datos. Para ello introduzca ```TaskCategory.Name != 'Personal'``` en el filtro de búsqueda, para excluir las tareas personales.
    
    ![Related field in Forms section](assets/en/relations/Related-field-from-Data-section.png)

* Luego puede seleccionar un **ícono** y los **formatos** y definir las **etiquetas cortas y largas** en la sección Etiquetas e iconos

![Related field from Labels and Icons section](assets/en/relations/related-field-from-labels-icons.png)

* Vaya a la sección Formularios y arrastre el campo en el formulario detallado Tasks

![Related field in Forms section](assets/en/relations/related-field-forms.png)

* Crear y ejecutar

¡Su campo relacionado debe aparecer en el formulario detallado de su aplicación!

![Related field in Forms section](assets/en/relations/final-result-n-to-one-relations.png)