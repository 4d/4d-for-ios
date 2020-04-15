---
id: user-information-query
title: Filtro de búsqueda usuario
---

Ahora filtremos el contenido de nuestra aplicación según la dirección de correo electrónico de inicio de sesión del administrador de la cuenta (información del usuario):

* Acceda a la **sección "Datos"**. 
* Haga clic derecho en el campo **Filtro de búsqueda** para que aparezcan los **botones Campos, Comparadores y Operadores**.
* Haga clic en el botón **Operadores** y seleccione **AND**.
* Ahora defina la información del usuario que desea obtener del método de base de datos, **:email**.
* Recuerde validar la consulta haciendo clic en el botón **Validar**. De lo contrario, no podrá crear su aplicación.

![User information query](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

La búsqueda filtrará los datos según el estado **In Progress** Y la **dirección de correo electrónico del administrador de cuentas** (accesible desde la tabla AccountManager gracias a la relación *Muchos a Uno* en el nombre del gerente).<div class = "tips"> 

**NOTA**

* A **user icon** is displayed on the right of each table when a user information filter is applied to it.
* As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window.</div> 

Add the following line in the database method:

```4d
$response.userInfo:=New object("email";$request.email)
```

This will allow retrieving the manager's login email address and displaying data depending on that criteria.

![Filtro de búsqueda usuario](assets/en/restricted-queries/database-method-user-information-query.png)

Now if you build your app and enter "michelle.simpson@mail.com" as login email, you'll find all of Michelle Simpson's *"In progress"* contracts.

![Resultado final](assets/en/restricted-queries/restricted-queries-final-result.png)