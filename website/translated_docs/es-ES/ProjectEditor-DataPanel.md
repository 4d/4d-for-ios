---
id: data
title: Datos
---

Esta sección le permite:

* definir los datos que se incluirán en su aplicación (**Archivo de datos actual** o **Archivo de datos del servidor de producción**),
* efectuar una **regeneración** automática de datos cada vez que genere su aplicación o efectúe una generación manual, y
* filtrar los datos para visualizarlos en su aplicación en funcion de los **filtros de busqueda generales** o la **información del usuario**. 

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Panel de fuente de datos

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

Este panel le permite definir su **fuente de datos**. Puede elegir obtener datos del **Archivo de datos actual** o de un **Archivo de datos del servidor de producción**.

Para asegurar el acceso al servidor de producción, se debe generar un **archivo key. mobileapp** desde el servidor de producción y se debe comunicar físicamente al desarrollador. Este archivo **key.mobileapp** está disponible en la carpeta MobileApps junto a los datos. Luego, el desarrollador puede seleccionarlo en el editor del proyecto para acceder a los datos del servidor de producción.

Si elige obtener datos de su servidor de producción, el **URL de producción**debe ingresarse desde la **sección Publicación**.

Aquí, también puede comprobar si el servidor está disponible y activarlo si es necesario.

:::tip NOTE * Tips are available to help you ensure the server works correctly. * You can directly access the Publishing panel to define your production URL. * To access production server data, a key file is required for secure communications. :::

You can define if you want to **include images** and also whether or not you want to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time building your app. You can always generate your data manually by clicking on the **Regenerate Now button**.

## Propiedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table based on **defined filter queries** or based on **user parameters**.

### Los filtros de búsqueda

You can define filters per table which depend on field values:

* Primero, ingrese su búsqueda en el campo dedicado escribiéndola directamente en el "campo de búsqueda". También puede redactar su búsqueda utilizando las pestañas Campos, Comparadores y Operadores, que están disponibles justo sobre el campo de búsqueda cuando está enfocado. Esto puede ser útil para definir su búsqueda.

* Entonces, debe validar su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda (una búsqueda editada y no validada aparece en rojo en el editor de proyecto).

* Finalmente, marque la opción **Integrar los datos en la aplicación** para integrar los datos en la aplicación cuando se genere. Deje sin marcar si no desea que los datos estén integrados.

When a query filter is valid, a funnel icon appears indicating that the defined filter is based on a defined filter query.

:::tip EXAMPLE In the **Filter query** field enter:

    FirstName = 'Lisa' & LastName = 'Hart'

This query allows you to display only the records that include "Lisa" as FirstName and "Hart" as LastName. :::

### Filtrado con filtros de información de usuario

You can define filters depending on user information which you define in the Mobile App Authentication method:

* Al igual que con los filtros de búsqueda, primero debe definir su búsqueda en el campo apropiado.

* Para especificar que la busqueda dependa de la información del usuario, solo agregue ":" y la llave objeto `userinfo`.

* Luego, valide su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda.

* Una vez que se valida el filtro de búsqueda, aparece un botón que le permite agregar información sobre los usuarios en el método [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

When a query filter is valid, a user icon appears to indicate that the defined filter is based on user information.

:::tip EXAMPLE In the **Filter query** field enter:

CityName = :city

In the [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method, enter:

    $response.userInfo:=New object("city";"Paris")

This query allows you to display only the records which include "Paris" as CityName. :::

:::tip NOTE You'll find all the rules about query syntax in the [4D documentation](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html). :::