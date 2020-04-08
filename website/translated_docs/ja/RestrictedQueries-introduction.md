---
id: filter-query-introduction
title: クエリフィルター
---

:::tip OBJECTIVES 作成したiOSアプリに簡単なフィルターおよびログイン情報に基づくフィルターを設定し，特定の情報だけが画面に表示されるようにしましょう！ :::

:::important PREREQUISITES [ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！ :::

はじめに[ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！

</div>

In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## スタータープロジェクトをダウンロードする

Before we begin, be sure to download the **Starter Project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">素材プロジェクト</a>
  </p>
</div>

データベースに含まれているもの

* **CRM table** with all the data we want to display in the generated iOS app
* **AccountManager table** with basic information about the account managers (email and name).

![CRM（顧客管理）データベース](assets/en/restricted-queries/CRMDatabase.png)

:::tip NOTE このプロジェクトでは，[カスタムテンプレート](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html)・[カスタムアイコン](https://4d.github.io/4d-for-ios/docs/en/using-icons.html)・[カスタムデータフォーマッター](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html)も使用されています。 :::

早速，はじめてのクエリフィルターを設定することに取り掛かりましょう！

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
