---
id: data
title: Datos
---

Esta sección le permite:

* definir los datos que se incluirán en su aplicación (**Archivo de datos actual** o **Archivo de datos del servidor de producción**),
* efectuar una **regeneración** automática de datos cada vez que genere su aplicación o efectúe una generación manual, y
* filtrar los datos para visualizarlos en su aplicación en función de los **filtros de búsqueda generales** o la **información del usuario**.

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Panel de fuente de datos

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

Este panel le permite definir su **fuente de datos**. Puede elegir obtener datos del **Archivo de datos actual** o de un **Archivo de datos del servidor de producción**.

Para asegurar el acceso al servidor de producción, se debe generar un **archivo key. mobileapp** desde el servidor de producción y se debe comunicar físicamente al desarrollador. Este archivo **key.mobileapp** está disponible en la carpeta MobileApps junto a los datos. Luego, el desarrollador puede seleccionarlo en el editor del proyecto para acceder a los datos del servidor de producción.

Si elige obtener datos de su servidor de producción, el **URL de producción**debe ingresarse desde la **sección Publicación**.

Aquí, también puede comprobar si el servidor está disponible y activarlo si es necesario.

> **NOTA**
> 
> * Hay sugerencias disponibles para ayudarlo a garantizar que el servidor funcione correctamente.
> * Puede acceder directamente al panel de publicación para definir su URL de producción.
> * Para acceder a los datos del servidor de producción, se requiere un archivo key para asegurar las comunicaciones.


Puede definir si desea **incluir imágenes** y también si desea **Regenerar datos sistemáticamente** en cada generación.

Cuando las opciones **No regenerar los datos en cada build** y **No incluir imágenes**están marcadas, puede ahorrar una cantidad considerable de tiempo en la construcción de su aplicación. Cuando las opciones **No regenerar los datos en cada build** y **No incluir imágenes**están marcadas, puede ahorrar una cantidad considerable de tiempo en la construcción de su aplicación.


## Propiedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

En este panel, puede definir todos los filtros para cada tabla según los **filtros de búsquedas definidos** o según los **parámetros usuario**.

### Los filtros de búsqueda

Puede definir los filtros por tabla, en función de los valores de campo:

* Primero, ingrese su búsqueda en el campo dedicado escribiéndola directamente en el "campo de búsqueda". También puede redactar su búsqueda utilizando las pestañas Campos, Comparadores y Operadores, que están disponibles justo sobre el campo de búsqueda cuando está enfocado. Esto puede ser útil para definir su búsqueda.

* Entonces, debe validar su búsqueda. Esto debe hacerse cada vez que modifique el filtro de búsqueda (una búsqueda editada y no validada aparece en rojo en el editor de proyecto).

* Finalmente, marque la opción **Integrar los datos en la aplicación** para integrar los datos en la aplicación cuando se genere. Deje sin marcar si no desea que los datos estén integrados.

Cuando un filtro de búsqueda es válido, se muestra un icono de usuario que indica que el filtro definido se basa en un filtro de búsqueda definido.

> **EJEMPLO** 
> 
> En el campo **Filtro de búsqueda** ingrese:
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

