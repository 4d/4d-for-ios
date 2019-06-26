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

    Status = 'In Progress' & manager.Email = :email 
    

このクエリフィルターを通過することができるのは，ステータスが**&apos;In Progress&apos;**であり，かつ，**営業担当者のメールアドレス**（*Ｎ対１リレーション*により，AccountManagerテーブルから取得）が合致するデータだけです。<div class = "tips"> 

**注記**

* ユーザー情報に基づくクエリが設定されているテーブルの横には**ユーザーアイコン**が表示されます。
* ユーザー情報に基づくクエリフィルターを入力して確定したのであれば，**On Mobile app Authentication**データベースメソッドを編集しなければなりません。 **認証メソッドを編集**ボタンをクリックすれば，メソッドエディターのウィンドウが開きます。</div> 

データベースメソッドに下記のコードを追加します。

    $response.userInfo:=New object("email";$request.email)
    

表示できるデータを判定するための条件として，営業担当者のログインメールアドレスが参照できるようになります。

![ユーザー情報に基づくクエリ](assets/en/restricted-queries/database-method-user-information-query.png)

再びアプリをビルドして実行しましょう。メールアドレス "michelle.simpson@mail.com" を入力してログインすると，今度はMichelle Simpsonが担当している*進行中*の商談だけがシミュレーターに表示されます。

![最終結果](assets/en/restricted-queries/restricted-queries-final-result.png)