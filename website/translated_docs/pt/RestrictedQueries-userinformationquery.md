---
id: user-information-query
title: Filtro de pesquisa usuário
---

Agora vamos filtrar o conteúdo de nosso app dependendo da direção de correio eletrônico de início de sessão de administrador de conta (informação de usuário):

* Go to the **Data section**.
* Right-click in the **Filter query** field to make **Field, Comparators and Operators buttons** appear.
* Click on the **Operators** button and select **AND**.
* Now define the user information you want to get from the database method, **:email**.
* Remember to validate the query by clicking on the **Validate** button. Do contrário não poderá criar sua aplicação.

![Filtro de pesquisa usuário](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

The query will filter data depending on the **In Progress** status AND the **Account manager's email address** (accessible from the AccountManager table thanks to the *Many-to-One* relation on the manager's name).

<div markdown="1" class = "tips">
**NOTA **

* A **user icon** is displayed on the right of each table when a user information filter is applied to it.
* As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window.
</div>

Adicione a linha abaixo no método de banco de dados:

```4d
$response.userInfo:=New object("email";$request.email)
```

Isso permite recuperar o endereço de email do login do gerente e exibir dados dependendo desse critério.

![Filtro de pesquisa usuário](assets/en/restricted-queries/database-method-user-information-query.png)

Now if you build your app and enter "michelle.simpson@mail.com" as login email, you'll find all of Michelle Simpson's *"In progress"* contracts.

![Final result](assets/en/restricted-queries/restricted-queries-final-result.png)




