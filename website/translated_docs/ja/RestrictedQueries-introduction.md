---
id: filter-query-introduction
title: クエリフィルター
---

> **OBJECTIVES**
> 
> Defining basic and user information-based query filters to display filtered content in the generated iOS app.
> **PREREQUISITES**
> 
> はじめに[ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！


In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## ⒈ プロジェクトをダウンロードする

Before we begin, be sure to download the **Starter Project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">素材プロジェクト</a>
</div>

The database includes a:

* **CRM table** with all the data we want to display in the generated iOS app
* **AccountManager table** with basic information about the account managers (email and name).

![CRM（顧客管理）データベース](assets/en/restricted-queries/CRMDatabase.png)

> **注記**
> 
> This project uses [custom templates](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), [custom icons](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) and custom [data formatters](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html).

You're now ready to define your first restricted query!

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
