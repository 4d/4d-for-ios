---
id: structure
title: Estructura
---

Esta sección muestra todas las tablas y los campos de su base de datos.

![Sección Estructura](assets/en/project-editor/Structure-section-4D-for-iOS.png)

Aquí, puede definir un subconjunto de su estructura física para reproducir en dispositivos móviles seleccionando tablas y campos específicos. El seleccionado:

* las tablas seleccionadas se agregarán automáticamente a las pestañas de su aplicación.
* los campos seleccionados estarán disponibles más adelante, cuando sea el momento de definir sus formularios Lista y sus formularios detallados.

## Relaciones Muchos a Uno

* 4D 17R5 le permite visualizar las relaciones de la tabla en la aplicación generada y publicarlas desde la sección Estructura. Luego, cuando se publican los campos relacionados, se pueden utilizar como cualquier otro campo en la [creación de una aplicación](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Para ayudarlo a definir la estructura de su aplicación, hay varios filtros y un motor de búsqueda disponibles para facilitar la selección de sus tablas y campos.

> **RECOMENDACIONES**
> 
> Puede publicar una selección de campos presionando la barra espaciadora, en lugar de seleccionarlos uno por uno.


## Relaciones Uno a Muchos

### Tratar las relaciones de Uno a Muchos desde el editor del proyecto

Ahora, en versiones recientes de 4D, puede tratar con **Relaciones Uno a Muchos** y mostrar una lista de campos relacionados en una página nueva.

Todo lo que tiene que hacer es:

* publicar al menos un campo de la tabla de destino (Muchos)

* publicar la relación de la tabla fuente (Uno)

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Luego, cuando se publican sus campos relacionados, se pueden utilizar como cualquier otro campo. Entonces podrá:

* Definir las propiedades de las relaciones en la sección [ Etiquetas e iconos](labels-and-icons.html#relations-properties).

* Suelte la relación Uno a Muchos en un formulario detallado de la Sección Formularios para crear un enlace entre un formulario detallado y una tabla relacionada.

### ¿Qué se creará en el proyecto generado?

Básicamente, se creará un botón Relación en los formularios detallados para ir directamente a la vista relacionada.

[Tutoriales](one-to-many-relations.html) están disponibles para ayudarlo a utilizar la relación Uno a Muchos en su proyecto 4D for iOS.



## Recarga incremental

### Autorizar las modificaciones de la estructura

En 4D 17 R5, la recarga de 4D for iOS se vuelve incremental. Esto significa que solo se actualizarán los datos de la base que sean nuevos, modificados o eliminados. ¡Esta es una gran optimización en términos de tiempo de carga!

Para hacerlo, 4D for iOS debe optimizar la estructura y crear:

* Una tabla `__DeletedRecords` para almacenar los registros borrados
* y campos `__GlobalStamp` para almacenar las modificaciones para cada tabla publicada en su aplicación móvil

Todo lo que necesita hacer es permitir que 4D for iOS realice los ajustes de estructura necesarios para una actualización optimizada de datos móviles.

Una vez autorizado, 4D for iOS hará todo el trabajo por usted, y usted se beneficiará completamente de todas las ventajas de la recarga incremental de datos.

> **NOTA**
> 
> Estas optimizaciones son necesarias tanto para las bases locales como para las bases del servidor.


### ¡Halar para refrescar!

Del lado de la aplicación iOS, sus datos se actualizan cada vez que inicia su aplicación y cada vez que su aplicación se pone en primer plano, para obtener datos actualizados constantemente.

En uso normal, simplemente deslice hacia abajo desde cualquier formulario Lista para recargar sus datos.

Desde la configuración del iPhone, ahora puede reinicializar los datos de su aplicación y encontrar información sobre su aplicación.

> **NOTA**
> 
> Tan pronto como el administrador realice una operación de mantenimiento importante, deberá alertar a los usuarios de la aplicación 4D for iOS que se requiere una recarga completa: Recuperación por etiqueta / Restauración / Compactación
