---
id: actions
title: Actions
---

Esta sección le permite definir los nombres y los íconos para cada acción y el alcance para cada tabla.

## Editor de proyecto

* **Nombres:** añade una nueva acción haciendo clic en el botón Más "+".
* **Iconos:** seleccione un icono para su acción de su librería de iconos. También puede agregar su propio icono siguiendo este [tutorial](using-icons.html).
* **Tabla:** seleccione la tabla en la que desea aplicar la acción.
* **Alcance:** seleccione si desea aplicar la acción en una **entidad** o en una **tabla**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

Un nuevo método base [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) está disponible para llamar a todos sus métodos 4D.

## Aplicación iOS

En su aplicación iOS, las acciones están disponibles de diferentes formas en sus formularios listados y detallados, según las plantillas que seleccione en la sección Formularios.

### Formularios Lista en tabla

* **Acción de entidad para las celdas:** deslice hacia la izquierda en una celda para mostrar las acciones disponibles en un formulario Lista. Se muestra un botón "+" si define más de 3 acciones por entidad.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Acciones de tabla:** un botón de acciones genéricas está disponible en la barra de navegación para mostrar una lista de acciones de tabla.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

### Formularios Lista en colección

* **Acción de entidad para las celdas:**dependiendo de la plantilla seleccionada, las acciones se muestran al hacer clic en un botón genérico o al mantener el clic en una celda.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Acciones de tabla:** como para los formularios Lista en tablas, hay un botón de acciones genérico disponible en la barra de navegación para mostrar una lista de acciones de la tabla.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Detail forms

As for Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

## Where to Go From Here?

* We will see [later](action-custom-template.html#step-4-add-actions-in-detail-forms) how to include your own **custom action button** in detail forms.

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.