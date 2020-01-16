---
id: filter-query-introduction
title: クエリフィルター
---

<div class = "objectives"> 

**レッスンの目標**

作成したiOSアプリに簡単なフィルターおよびログイン情報に基づくフィルターを設定し，特定の情報だけが画面に表示されるようにしましょう！</div> <div class = "prerequisites"> 

**用意するもの**

始めるために揃えておくべきものは[こちら](prerequisites.html)でチェックすることができます。</div> 

このレッスンでは，**クエリフィルター**（制限付きクエリ）の用法を具体的な例で考えます。想定しているユーザーは，営業担当者であり，アプリを開いてログインすれば，自分が担当している顧客で商談のステータスが*進行中*の案件だけが表示されるようにすることが目標です。

はじめに，*進行中*の商談だけが表示されるよう，「データ」セクションで**基本的なクエリフィルター**を設定します。 その後，営業担当者のメールアドレスも条件に含まれるよう，**ユーザー情報に基づくクエリフィルター**を設定します。

## プロジェクトをダウンロードする

はじめに， **素材プロジェクト**をダウンロードします。**4DforiOSQueries.4dbase**サンプルデータベースには，すぐに使えるモバイルアプリプロジェクトが含まれています。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">素材プロジェクト</a>

  </p>
</div>

データベースに含まれているもの

* **CRM**テーブル: iOSアプリに表示させたいデータが登録されています。
* **AccountManager**テーブル: 営業担当者たちの基本情報（氏名やメールアドレス）が登録されています。

![CRM（顧客管理）データベース](assets/en/restricted-queries/CRMDatabase.png)<div class = "tips"> 

**注記**

このプロジェクトでは，[カスタムテンプレート](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html)・[カスタムアイコン](https://4d.github.io/4d-for-ios/docs/en/using-icons.html)・[カスタムデータフォーマッター](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html)も使用されています。</div> 

早速，はじめてのクエリフィルターを設定することに取り掛かりましょう！

開く > モバイルプロジェクト…メニューを選択して，モバイルプロジェクトを開きましょう。 CRMアプリケーションの**project.4dmobileapp**ファイルを選択してください。