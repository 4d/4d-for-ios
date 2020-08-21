---
id: data
title: Datos
---

Esta sección le permite:

* define the data to include in your app (**Current data file** or **Production server data file**),
* automatically **regenerate data** each time you build your app or generate it manually, and
* filter data to vizualize in your app depending on **general filter queries** or **user information**.

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Panel de fuente de datos

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

This panel allows you to define your **data source**. You can choose to get data from the **Current data file** or from a **Production server**.

To secure access to the production server, a **key file** must be generated from the production server and physically communicated to the developer. This **key.mobileapp** file is available next to data in the MobileApps folder. Luego, el desarrollador puede seleccionarlo en el editor del proyecto para acceder a los datos del servidor de producción.

The **Production URL** must be entered from the **Publishing section** if you choose to get data from your production server.

Aquí, también puede comprobar si el servidor está disponible y activarlo si es necesario.

> **NOTA**
> 
> * Hay sugerencias disponibles para ayudarlo a garantizar que el servidor funcione correctamente.
> * Puede acceder directamente al panel de publicación para definir su URL de producción.
> * Para acceder a los datos del servidor de producción, se requiere un archivo key para asegurar las comunicaciones.


You can define if you want to **include images** and also whether or not you want to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time building your app. You can always generate your data manually by clicking on the **Regenerate Now button**.


## Propiedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table based on **defined filter queries** or based on **user parameters**.

### Los filtros de búsqueda

Puede definir los filtros por tabla, en función de los valores de campo:

* Primero, ingrese su búsqueda en el campo dedicado escribiéndola directamente en el "campo de búsqueda". También puede redactar su búsqueda utilizando las pestañas Campos, Comparadores y Operadores, que están disponibles justo sobre el campo de búsqueda cuando está enfocado. Esto puede ser útil para definir su búsqueda.

* Entonces, debe validar su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda (una búsqueda editada y no validada aparece en rojo en el editor de proyecto).

* Finally, check the **Embed data into the built application** option to embed the data into the application when it's built. Deje sin marcar si no desea que los datos estén integrados.

Cuando un filtro de búsqueda es válido, se muestra un icono de usuario que indica que el filtro definido se basa en un filtro de búsqueda definido.

> **EJEMPLO** 
> 
> In the **Filter query** field enter:
> 
> `FirstName = 'Lisa' & LastName = 'Hart'`
> 
> Esta búsqueda le permite mostrar solo los registros que incluyen "Lisa" y "Hart" en los campos FirstName y LastName.


### Filtrado con filtros de información de usuario

Puede definir filtros según la información del usuario que defina en el método Mobile App Authentication:

* Al igual que con los filtros de búsqueda, primero debe definir su búsqueda en el campo apropiado.

* Para especificar que la busqueda dependa de la información del usuario, solo agregue ":" y la llave objeto `userinfo`.

* Luego, valide su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda.

* Una vez que se valida el filtro de búsqueda, aparece un botón que le permite agregar información sobre los usuarios en el método [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Cuando un filtro de búsqueda es válido, se muestra un icono de usuario que indica que el filtro definido se basa en información del usuario.

> **EJEMPLO**
> 
> In the **Filter query** field enter:
> 
> CityName = :city
> 
> En el [método base On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html), introduzca:
> 
> `$response.userInfo:=New object("city";"Paris")`
> 
> Esta búsqueda le permite mostrar solo los registros que incluyen "Paris" como CityName.


> **NOTA**
> 
> Encontrará todas las reglas de sintaxis asociadas a la búsqueda en la [documentación de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).

