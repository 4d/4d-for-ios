---
id: user-information-query
title: Filtro de búsqueda - información usuario
---

Ahora filtremos el contenido de nuestra aplicación según la dirección de correo electrónico de inicio de sesión del administrador de la cuenta (información del usuario):

* Go to the **Data section**.
* Right-click in the **Filter query** field to make **Field, Comparators and Operators buttons** appear.
* Click on the **Operators** button and select **AND**.
* Now define the user information you want to get from the database method, **:email**.
* Remember to validate the query by clicking on the **Validate** button. De lo contrario, no podrá crear su aplicación.

![Filtro de búsqueda - información usuario](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

The query will filter data depending on the **In Progress** status AND the **Account manager's email address** (accessible from the AccountManager table thanks to the *Many-to-One* relation on the manager's name).

> **NOTA**
> 
> * Se muestra un **icono usuario** a la derecha de cada tabla cuando se le aplica un filtro de información de usuario.
> * Tan pronto como una búsqueda se base en la información del usuario y se valide, debe editar el **Método de autenticación de la aplicación móvil**. Para hacerlo, haga clic con el botón derecho en el botón **Edit authentication method** para abrir la ventana de edición del método de base de datos.


Add the following line in the database method:

```4d
$response.userInfo:=New object("email";$request.email)
```

This will allow retrieving the manager's login email address and displaying data depending on that criteria.

![Filtro de búsqueda - información usuario](assets/en/restricted-queries/database-method-user-information-query.png)

Now if you build your app and enter "michelle.simpson@mail.com" as login email, you'll find all of Michelle Simpson's *"In progress"* contracts.

![Resultado final](assets/en/restricted-queries/restricted-queries-final-result.png)




