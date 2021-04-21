---
id: user-information-query
title: Filtro de búsqueda - información usuario
---

Ahora filtremos el contenido de nuestra aplicación según la dirección de correo electrónico de inicio de sesión del administrador de la cuenta (información del usuario):

* Acceda a la **sección "Datos"**.
* Haga clic derecho en el campo **Filtro de búsqueda** para que aparezcan los **botones Campos, Comparadores y Operadores**.
* Haga clic en el botón **Operadores** y seleccione **AND**.
* Ahora defina la información del usuario que desea obtener del método de base de datos, **:email**.
* Recuerde validar la consulta haciendo clic en el botón **Validar**. De lo contrario, no podrá crear su aplicación.

![Filtro de búsqueda - información usuario](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

La búsqueda filtrará los datos en función del estado **In Progress** Y de la **dirección de correo electrónico del administrador de cuentas** (accesible desde la tabla AccountManager gracias a la relación *Muchos a Uno* en el nombre del gerente).

> **NOTA**
> 
> * Se muestra un **icono usuario** a la derecha de cada tabla cuando se le aplica un filtro de información de usuario.
> * Tan pronto como una búsqueda se base en la información del usuario y se valide, debe editar el **Método de autenticación de la aplicación móvil**. Para hacerlo, haga clic con el botón derecho en el botón **Edit authentication method** para abrir la ventana de edición del método de base de datos.


Agregue la siguiente línea en el método de base de datos:

```4d
$response.userInfo:=New object("email";$request.email)
```

Esto permitirá recuperar la dirección de correo electrónico de inicio de sesión del administrador y mostrar los datos según ese criterio.

![Filtro de búsqueda - información usuario](assets/en/restricted-queries/database-method-user-information-query.png)

Ahora, si crea su aplicación e ingresa "michelle.simpson@mail.com" como correo electrónico de inicio de sesión, encontrará todos los contratos *"In progress"* de Michelle Simpson.

![Resultado final](assets/en/restricted-queries/restricted-queries-final-result.png)




