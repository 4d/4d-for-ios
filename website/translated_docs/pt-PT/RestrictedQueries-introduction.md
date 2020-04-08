---
id: filter-query-introduction
title: Restricted queries
---

:::tip OBJECTIVES Definir filtros de pesquisa básicos, e baseados em informação de usuários, para exibir conteúdo filtrado no app iOS gerado. :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

Clique [aqui](prerequisites.html) para ver o que precisa para começar!

</div>

In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## Baixe o Starter Project

Before we begin, be sure to download the **Starter Project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">STARTER PROJECT</a>
  </p>
</div>

O banco de dados inclui um:

* **CRM table** with all the data we want to display in the generated iOS app
* **AccountManager table** with basic information about the account managers (email and name).

![CRM database](assets/en/restricted-queries/CRMDatabase.png)

:::tip NOTE Este projeto usa [modelos personalizados](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), [ícones personalizados](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) e  [formatadores de dados](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html). :::

Você já está preparado para definir sua primeira pesquisa restrita!

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
