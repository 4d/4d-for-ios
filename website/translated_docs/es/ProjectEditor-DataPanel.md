---
id: data
title: Datos
---

Esta sección le permite:

* definir los datos que se incluirán en su aplicación (**Archivo de datos actual** o **Archivo de datos del servidor de producción**),
* efectuar una **regeneración** automática de datos cada vez que genere su aplicación o efectúe una generación manual, y
* filter the data to vizualize in your app depending on the **general filter queries** or the **user information**.

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Panel de fuente de datos

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

Este panel le permite definir su **fuente de datos**. Puede elegir obtener datos del **Archivo de datos actual** o de un **Archivo de datos del servidor de producción**.

Para asegurar el acceso al servidor de producción, se debe generar un **archivo key. mobileapp** desde el servidor de producción y se debe comunicar físicamente al desarrollador. This **key.mobileapp** file is available next to the data, in the MobileApps folder. Then, the developer can select it from the project editor to access to the production server data.

Si elige obtener datos de su servidor de producción, el **URL de producción**debe ingresarse desde la **sección Publicación**.

Here, you can also check if the server is available and choose to activate it, if necessary.

> **NOTA**
> 
> * Tips are available to help you ensure that the server works correctly.
> * Puede acceder directamente al panel de publicación para definir su URL de producción.
> * Para acceder a los datos del servidor de producción, se requiere un archivo key para asegurar las comunicaciones.

You can define if you want to **include images** and or to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time to build your app. Siempre puede generar sus datos manualmente haciendo clic en el botón **Regenerar ahora**.


## Propiedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table, based on **defined filter queries** or on **user parameters**.

### Los filtros de búsqueda

Puede definir los filtros por tabla, en función de los valores de campo:

* Primero, ingrese su búsqueda en el campo dedicado escribiéndola directamente en el "campo de búsqueda". También puede redactar su búsqueda utilizando las pestañas Campos, Comparadores y Operadores, que están disponibles justo sobre el campo de búsqueda cuando está enfocado. Esto puede ser útil para definir su búsqueda.

* Entonces, debe validar su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda (una búsqueda editada y no validada aparece en rojo en el editor de proyecto).

* Finally, check the **Embed data into the built application** option to embed the data into the application once it's built. Deje sin marcar si no desea que los datos estén integrados.

When a query filter is valid, a funnel icon appears, indicating that the defined filter is based on a defined filter query.

> **EJEMPLO** 
> 
> En el campo **Filtro de búsqueda** ingrese:
> 
> `FirstName = 'Lisa' & LastName = 'Hart'`
> 
> Esta búsqueda le permite mostrar solo los registros que incluyen "Lisa" y "Hart" en los campos FirstName y LastName.


### Filtrado con filtros de información de usuario

You can define filters depending on the user information that you define in the Mobile App Authentication method:

* Al igual que con los filtros de búsqueda, primero debe definir su búsqueda en el campo apropiado.

* Para especificar que la busqueda dependa de la información del usuario, solo agregue ":" y la llave objeto `userinfo`.

* Luego, valide su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda.

* Una vez que se valida el filtro de búsqueda, aparece un botón que le permite agregar información sobre los usuarios en el método [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Cuando un filtro de búsqueda es válido, se muestra un icono de usuario que indica que el filtro definido se basa en información del usuario.

> **EJEMPLO**
> 
> En el campo **Filtro de búsqueda** ingrese:
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


