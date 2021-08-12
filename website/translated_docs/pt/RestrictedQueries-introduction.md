---
id: filter-query-introduction
title: Pesquisas limitadas
---

> **OBJETIVOS**
> 
> Definir os filtros de pesquisa baseados em informações do usuário ou informações básicas para exibir conteúdo no app gerado iOS.


> **PRÉ-REQUISITOS**
> 
> Clique [aqui](prerequisites.html) para ver o que precisa para começar!


Neste tutorial, vamos falar sobre**pesquisas limitadas ** com um exemplo simples: imagine que você é um gerente de conta e quer consultar seus contratos *Em Progresso* simplesmente com a conexão de seu app com seu endereço de mail.

Primeiro, a partir da seção Dados, vamos definir um **filtro de pesquisa básico** para exibir apenas contratos *Em Progresso*. Depois vamos aplicar um **filtro baseado na informação de usuário** que depende do email do gerente de conta.

## Baixe o Starter Project

Antes de começar, tenha certeza de baixar o **Starter Project** que inclui um arquivo **4DforiOSQueries.4dbase** (um banco de dados demo com um projeto de app móvel pronto para usar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">PROJETO STARTER</a>
</div>

Este banco de dados inclui:

* **tabela CRM** com todos os dados que quisermos exibir no app gerado  iOS
* **tabela AccountManager ** com informação básica sobre os administradores de contas (email e nome).

![CRM database](assets/en/restricted-queries/CRMDatabase.png)

> **NOTA **
> 
> Este projeto usa [modelos personalizados ](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), [ícones personalizados](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) e  [formatadores de dados](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html) personalizados.

Estamos prontos para definir nossa primeira pesquisa limitada!

Abra o projeto móvel cliando em Open > Mobile Project... e selecione o app CRM  > **project.4dmobileapp**.
