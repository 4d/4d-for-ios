---
id: user-information-query
title: Filtro de pesquisa usuário
---

Agora vamos filtrar o conteúdo de nosso app dependendo da direção de correio eletrônico de início de sessão de administrador de conta (informação de usuário):

* Acesse a seção **"Dados"**. 
* Dê um clique direito no campo **Filtro de pesquisa** para que apareçam os **botões Campo, Comparadores e Operadores** .
* Clique no botão **Operadores** e selecione **AND**.
* Agora defina a informação de usuário que deseja obter do método de banco de dados, **:email**.
* Lembre de validar a pesquisa clicando no botão **Validate**. Do contrário não poderá criar sua aplicação.

![Filtro de pesquisa usuário](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

A pesquisa vai filtrar os dados dependendo do status de **In Progress** E do **endereço de email do gerente de conta** (acessível da tabela AccountManager graças a relação *Many-to-One* no nome do gerente).<div class = "tips"> 

**NOTA **

* Um** ícone de usuário** é exibido à direita de cada tabela quando um filtro de informação de usuário é aplicado.
* Assim que uma pesquisa for baseada em informação de usuário e validada, precisa editar o **método de autenticação de app Móvel**. Para fazer isso, dê um clique direito no botão **Editar método de autenticação** para abrir a janela de edição de método de banco de dados.</div> 

Adicione a linha abaixo no método de banco de dados:

```4d
$response.userInfo:=New object("email";$request.email)
```

Isso permite recuperar o endereço de email do login do gerente e exibir dados dependendo desse critério.

![Filtro de pesquisa usuário](assets/en/restricted-queries/database-method-user-information-query.png)

Agora, se construir seu app e entrar "michelle.simpson@mail.com" como email de login, vai achar todos os contratos de Michelle Simpson *"Em progresso"*.

![Final result](assets/en/restricted-queries/restricted-queries-final-result.png)