---
id: filter-query-introduction
title: Restricted queries
---

:::tip OBJECTIVES Definir filtros de pesquisa básicos, e baseados em informação de usuários, para exibir conteúdo filtrado no app iOS gerado. :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

Clique [aqui](prerequisites.html) para ver o que precisa para começar!

</div>

Neste tutorial vamos falar sobre **pesquisas restritas** com um caso simples: imagine que você é um gerente de contas e queira consultar seus contratos *Em Progresso* simplesmente conectando ao seu app com seu endereço de email.

Primeiro, na seção Dados vamos definir um **filtro de pesquisa básico** para exibir apenas contratos *Em Progresso*. Então vamos aplicar um **filtro baseado em informação de usuário** que vai depender do email do gerente de contas.

## Baixe o Starter Project

Antes de começar, tenha certeza de baixar o **Starter Project** que incui um arquivo **4DforiOSQueries.4dbase** (um banco de dados demo com um projeto app móvel pronto-para-usar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">STARTER PROJECT</a>

  </p>
</div>

O banco de dados inclui um:

* **tabela CRM** com todos os dados que quisermos exibir no app gerado iOS
* **tabela AccountManager ** com informação básica sobre os administradores de contas (email e nome).

![CRM database](assets/en/restricted-queries/CRMDatabase.png)

:::tip NOTE Este projeto usa [modelos personalizados](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), [ícones personalizados](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) e [formatadores de dados](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html). :::

Você já está preparado para definir sua primeira pesquisa restrita!

Abra o projeto móvel clicando em Open > Mobile Project... e selecione o app CRM > **project.4dmobileapp**.