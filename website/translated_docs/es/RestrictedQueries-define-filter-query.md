---
id: define-filter-query
title: Definir un filtro de búsqueda
---

For the moment, if you build the Starter Project app and enter "michelle.simpson@mail.com" as the login email (one of the account managers), you'll see **all manager contracts and statuses** (*Closed* and *In Progress*).

![iOS app without queries](assets/en/restricted-queries/ios-app-without-queries.png)

As we discussed earlier, we want the account managers to access their *In Progress* contracts by logging into their mobile app with their email. Para hacer esto:

* Go to the **Data section**
* Right-click in the **Filter query** field to make the **Field, Comparators and Operators buttons** appear.
* Click on the **Fields** button and select **Status**.
* Click on the **Comparators** button and select **Equal to**.
* Because you want to display *open* contracts, enter **In progress**
* Remember to validate your query by clicking on the **Validate** button, otherwise you won't be able to build your app.

Debería obtener este resultado:

![CRM database](assets/en/restricted-queries/filterquery.png)

> **NOTA**
> 
> * Se muestra un icono de **filtro** a la derecha de cada tabla cuando se le aplica un filtro básico.
> * Para este tipo de filtros de búsqueda, puede optar por integrar los datos en la aplicación o cargar los datos después de iniciar sesión marcando la casilla de verificación **Integrar los datos en la aplicación**.
> * El tamaño se calculará en la primera generación para que pueda visualizar el **tamaño de sus datos**.

If you build your app and enter "michelle.simpson@mail.com" as the login email, you'll see that all contracts *In Progress* are displayed in the Simulator!

![iOS app with basic query](assets/en/restricted-queries/restrited-queries-basic-query.png)

Not exactly what we expected! What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query!


