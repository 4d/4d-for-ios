---
id: define-filter-query
title: Definir un filtro de búsqueda
---

Por el momento, si genera la aplicación Starter Project e introduce "michelle.simpson@mail.com" como correo electrónico de inicio de sesión (uno de los administradores de cuentas), verá **todos los contratos y estados de los administradores** (*Closed* y *In Progress*).

![iOS app without queries](assets/en/restricted-queries/ios-app-without-queries.png)

Como se indicó anteriormente, queremos que los administradores de cuentas accedan a sus contratos *En curso* iniciando sesión en su aplicación móvil con su correo electrónico. Para hacer esto:

* Acceda a la **sección "Datos"**
* Haga clic derecho en el campo **Filtro de búsqueda** para que aparezcan los **botones Campos, Comparadores y Operadores**.
* Haga clic en el botón **Campos** y seleccione **Estado**.
* Click on the **Comparators** button and select **Equal to**.
* Because you want to display *open* contracts, enter **In progress**
* Remember to validate your query by clicking on the **Validate** button, otherwise you won't be able to build your app.

You should have this result:

![CRM database](assets/en/restricted-queries/filterquery.png)<div class = "tips"> 

**NOTE**

* A **filter** icon is displayed at the right of each table when a basic filter is applied to it.
* For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the **Embed data into the built application** checkbox.
* Size will be calculated at the first build for you to visualize the **size of your data**.</div> 

If you build your app and enter "michelle.simpson@mail.com" as the login email, you'll see that all contracts *In Progress* are displayed in the Simulator!

![iOS app with basic query](assets/en/restricted-queries/restrited-queries-basic-query.png)

Not exactly what we expected! What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query!