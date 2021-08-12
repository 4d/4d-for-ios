---
id: one-to-many-relations
title: Relaciones Uno a Muchos
---

Este tutorial le mostrará lo fácil que puede ser incluir relaciones Uno a Muchos en 4D for iOS.


> **NOTA**
> 
> En este tutorial, utilizaremos los nombres de las relaciones entre sus tablas.

> Dar nombres de enlaces descriptivos, puede facilitar la definición de la estructura de su proyecto.


Comencemos descargando el Proyecto Starter:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip">PROJET STARTER UNO A MUCHOS</a>
</div>

En este tutorial, vamos a construir una **aplicación Task** utilizando 4D for iOS.

![Task App Final result](assets/en/relations/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

Pero primero, demos un vistazo a la estructura de nuestra base:

![Select link from structure section](assets/en/relations/Database-1-to-N-relations-4D-for-iOS.png)

Como puede ver, hay un enlace de Uno a Muchos llamado **tasks** que usaremos en nuestra aplicación iOS para mostrar las tareas'(**1**) (**a Muchos**) de los empleados.

Ahora, vaya directamente al menú Abrir > Proyecto móvil... a seleccionar *Time Keeper* y vaya a la sección **Structure**.

## Sección Estructura

Puede ver la **relación de tareas** que hemos visto antes... ¡Puede publicarla!

Este campo ahora funcionará como cualquier otro campo durante el resto del proceso de creación de la aplicación.

![Structure section Relations properties](assets/en/relations/Structure-section-relations-4D-for-iOS.png)

> **RECOMENDACIONES**
> 
> * Al pasar el ratón, una sugerencia muestra el nombre de la tabla fuente que origina la relación.


## Sección Etiquetas e Iconos

La relación Uno a Muchos está ahora disponible en la sección [Etiquetas e Iconos](labels-and-icons.html).

Es importante saber que incluir una relación de Uno a Muchos creará un botón en la aplicación iOS generada.

En la sección Etiquetas e iconos definirá:

* una etiqueta de botón
* un icono de botón
* un [título](one-to-n-relations-title-definition.html) que se mostrará en la vista de destino (para indicar su proveniencia, por ejemplo).

![Labels & Icons section Relations properties](assets/en/project-editor/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## Sección Formularios

* Vaya a la sección Formularios y suelte la relación *tasks* en el formulario detallado Employee Task.

![Related field in Forms section](assets/en/relations/1-to-n-relations-forms-section.png)

## Build and Run

1. A partir del formulario Employee List, haga clic en un empleado
2. Esto abrirá el formulario detallado del empleado, donde debería ver un nuevo ¡**botón Relación**!
3. Haga clic en este botón Relación para mostrar las tareas del empleado.

![Related field in Forms section](assets/en/relations/One-to-n-relations-task-ios-app.png)

Y listo, así es como funcionan las relaciones Uno a Muchos en 4D for iOS.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip">PROJET FINAL 1 A N</a>
</div>
