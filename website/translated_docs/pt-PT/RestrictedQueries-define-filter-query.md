---
id: define-filter-query
title: Definir um filtro de pesquisa
---

Por agora, se construir o app Starter Project e digitar "michelle.simpson@mail.com" como o email de login (uma das contas de administrador), verá **todos os contratos e estados dos administradores** (*Closed* e *In Progress*).

![iOS app without queries](assets/en/restricted-queries/ios-app-without-queries.png)

Como falamos anteriormente, queremos que os administradores de contas acessem a seus contratos *Em Progresso* iniciando a sessão em seu aplicativo móvel com seu correio eletrônico. Para fazer isso:

* Vá para a seção **Dados**
* Dê clique direito no campo **Filtro de pesquisa** para fazer com que apareçam os botões **Campos, Comparadores e Operadores**.
* Clique no botão **Campos** e selecione **Estado**.
* Clique no botão **Comparadores** e selecione **Igual a**.
* Como quer mostrar os contratos*abertos*, ingresse **Em progresso**
* Lembre de validar sua pesquisa clicando no botão **Validar** do contrário não poderá criar sua aplicação.

Deve obter este resultado:

![CRM database](assets/en/restricted-queries/filterquery.png)<div class = "tips"> 

**NOTA **

* A **filter** icon is displayed at the right of each table when a basic filter is applied to it.
* For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the **Embed data into the built application** checkbox.
* Size will be calculated at the first build for you to visualize the **size of your data**.</div> 

If you build your app and enter "michelle.simpson@mail.com" as the login email, you'll see that all contracts *In Progress* are displayed in the Simulator!

![iOS app with basic query](assets/en/restricted-queries/restrited-queries-basic-query.png)

Not exactly what we expected! What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query!