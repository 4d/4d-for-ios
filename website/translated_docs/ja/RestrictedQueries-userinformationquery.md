---
id: user-information-query
title: ユーザー情報に基づくクエリ
---

ユーザーのログインメールアドレス（ユーザー情報）に基づき，アプリに表示されるデータがフィルターされるようにしましょう。

* 「**データ**」セクションに移動します。 
* **クエリをフィルター**フィールドをクリックします。**フィールド・比較演算子・演算子ボタン**が表示されるはずです。
* **演算子**ボタンをクリックし，**AND**を選択します。
* **:email**，つまりデータベースメソッドの中で参照したいユーザー情報を入力します。
* **検証**ボタンをクリックし，フィルターを確定してください。 これを忘れてしまうと，アプリがビルドできません。

![ユーザー情報に基づくクエリ](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

このクエリフィルターを通過することができるのは，ステータスが**&apos;In Progress&apos;**であり，かつ，**営業担当者のメールアドレス**（*Ｎ対１リレーション*により，AccountManagerテーブルから取得）が合致するデータだけです。

:::tip NOTE * A **user icon** is displayed on the right of each table when a user information filter is applied to it. * As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window. :::

データベースメソッドに下記のコードを入力します。

```4d
$response.userInfo:=New object("email";$request.email)
```

This will allow retrieving the manager's login email address and displaying data depending on that criteria.

![ユーザー情報に基づくクエリ](assets/en/restricted-queries/database-method-user-information-query.png)

アプリをビルドし，メールアドレスに "michelle.simpson@mail.com" と入力してログインしてみてください。Michelle Simpsonさんの*"In progress（進行中）"*の商談だけが表示されます。

![Final result](assets/en/restricted-queries/restricted-queries-final-result.png)