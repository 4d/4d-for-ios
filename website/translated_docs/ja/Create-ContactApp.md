---
id: contact-app
title: はじめてのアプリ
---

:::tip OBJECTIVES Create your first app with 4D for iOS :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## ⒈ データベースを用意する

Download our Starter Project, which contains a database file and project icon, but no mobile project yet.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">素材プロジェクト</a>

  </p>
</div>

## ⒉ プロジェクトの作成

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## ⒊ プロジェクトエディター

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## ⒋ 一般

Here, you'll configure your app's primary information:

* **組織:** 開発者（あなた）の会社名とアプリの識別子を英数字で入力してください。（例: “My Company” および com.MyCompany）。
* **プロダクト:** アプリの名前を英数字で入力してください。 ここでは "Contact" と名付けましょう。
* **ID:**バンドル識別子は，組織の識別子とプロダクトの名前に基づいて自動的に決定されます。
* **バージョン:** ここでは 1.0 にしておいてください。コピーライト情報は，編集しても構いません。 テキストのフォーマットは，なるべく4D for iOSのものを踏襲するようにしてください。
* **アイコン:** 素材プロジェクトに収録されている画像ファイル（ContactIcon.png）をエリアにドラッグ＆ドロップします。
* **デベロッパー:** Macのログインアカウント名が自動的に入力されているはずです。 部署名は，Appleデベロッパーアカウントの「部署」に表示されているものをコピー＆ペーストします。 実機ではなく，シミュレーター向けにビルドするだけであれば，空欄のままでも構いません。

![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ⒌ ストラクチャー

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

:::tip NOTE We highly recommend publishing your primary key in order to identify each record of your database :::

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ⒍ ラベル＆アイコン

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Contactテーブルに短いラベルと長いラベルを設定します。
* アイコン（はてなマーク）をクリックします。 表示されるアイコン群の中からContacts（顧客情報）を連想させるような画像を探してアイコンに設定します。 あるいは，空欄のままにすることもできます。 その場合，4D for iOSが自動的にアイコンを生成します。便利ですね！

**Field Properties:**

* 選択したフィールドに短いラベルと長いラベルを設定します。
* アイコン（はてまマーク）をクリックし，各フィールドのアイコンを設定します。 フィールドの場合，いくつかの方法があります。 
    * 各フィールドにそれぞれ画像を選択して設定する
    * 少なくとも１個のフィールドに画像が設定され，他は空欄のままだった場合，未設定のフィールドには4D for iOSが自動的にアイコンを生成します。
    * すべて空欄のままにした場合，フィールドのアイコンは表示されません。 

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ⒎ メインメニュー

Next up is defining the order of the tables in the app's main menu.

* **利用可能テーブル:** iOSアプリからアクセスできるテーブルが表示されています。
* **選択されたテーブル:** アプリのメインメニューに追加されたテーブルが表示されています。 ここでは１個しかテーブルがありませんが，順序はドラッグ＆ドロップで変更できるようになっています。

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ⒏ フォーム

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* レコードをリスト形式で表示するために，listビューのテンプレートを選択します。 ここでは，**Profile**テンプレートを使用しましょう。

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* フィールドをテンプレートの対応するプレビューエリアに，*つまり*，LastNameは「検索に使用するフィールド」と「タイトル」にドラッグ＆ドロップします。 「検索に使用するフィールド」および「セクションとして使用するフィールド」の使用は任意です。Photoは「ピクチャー」，FirstNameは「サブタイトル」に設定し，「セクションとして使用するフィールド」は未設定のままにしておきましょう。

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* アプリのコンセプトにふさわしいデザインを選ぶようにしてください。ここでは， **Visual Contact**テンプレートを使用しましょう。

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* フィールドをテンプレートの対応するプレビューエリアに，*つまり*，Photoは「ピクチャー」，FirstNameは「フィールド1」，LastNameは「フィールド2」にドラッグ＆ドロップします。

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ⒐ ビルド

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* 画面を**ビルド**タブに切り替えます。
* 機種名のアイコンをクリックして，シミュレーターで起動するiOSデバイスのモデルを選びます。
* **ビルドして実行**をクリックします。
* そのまま待っていると… やりました！ iOSアプリの完成です！

![ビルドして実行](assets/en/contact-app/Build-the-app-simulator.png)

## ⒑ これからどうする？

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. しかし，知るべきことは，これだけではありません！ In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">完成プロジェクト</a>

  </p>
</div>