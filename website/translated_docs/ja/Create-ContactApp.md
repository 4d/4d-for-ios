---
id: contact-app
title: はじめてのアプリ
---

> **OBJECTIVES**
> 
> Create your first app with 4D for iOS

> **PREREQUISITES**
> 
> はじめに[ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## ⒈ データベースを用意する
Download our Starter Project, which contains a database file and project icon, but no mobile project yet.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">素材プロジェクト</a>
</div>

## ⒉ ⒉ プロジェクトの作成

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## ⒊ ⒊ プロジェクトエディター

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![ランディングページ](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## ⒋ 一般

Here, you'll configure your app's primary information:

* **Organization:** Enter the name of your company and the application's identifier (ex.“My Company” and com.MyCompany).
* **Product:** Enter your app's name. ここでは "Contact" と名付けましょう。
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your app's copyright. テキストのフォーマットは，なるべく4D for iOSのものを踏襲するようにしてください。
* **Icons:** Drag and drop an icon for your app into the icon area.
* **Developer:** This is automatically filled from the user name on your computer. 部署名は，Appleデベロッパーアカウントの「部署」に表示されているものをコピー＆ペーストします。 実機ではなく，シミュレーター向けにビルドするだけであれば，空欄のままでも構いません。

![一般](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ⒌ ストラクチャー

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

> **注記**
> 
> We highly recommend publishing your primary key in order to identify each record of your database

![ストラクチャー](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ⒍ ラベル＆アイコン

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Contactテーブルに短いラベルと長いラベルを設定します。
* アイコン（はてなマーク）をクリックします。 表示されるアイコン群の中からContacts（顧客情報）を連想させるような画像を探してアイコンに設定します。 あるいは，空欄のままにすることもできます。 その場合，4D for iOSが自動的にアイコンを生成します。 便利ですね！

**Field Properties:**

* 選択したフィールドに短いラベルと長いラベルを設定します。
* アイコン（はてまマーク）をクリックし，各フィールドのアイコンを設定します。 フィールドの場合，いくつかの方法があります。
    * 各フィールドにそれぞれ画像を選択して設定する
    * 少なくとも１個のフィールドに画像が設定され，他は空欄のままだった場合，未設定のフィールドには4D for iOSが自動的にアイコンを生成します。
    * すべて空欄のままにした場合，フィールドのアイコンは表示されません。

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ⒎ メインメニュー

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. ここでは１個しかテーブルがありませんが，順序はドラッグ＆ドロップで変更できるようになっています。

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ⒏ フォーム

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* レコードをリスト形式で表示するために，listビューのテンプレートを選択します。 For our Contact app, let’s use the **Profile** template.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, <i>i.e.</i>, Last Name into the search and Title fields. 「検索に使用するフィールド」および「セクションとして使用するフィールド」の使用は任意です。

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)


* Drag and drop the content onto the appropriate places on the detail form template, <i>i.e.</i>, First Name, Last Name, and Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ⒐ ビルド

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* 機種名のアイコンをクリックして，シミュレーターで起動するiOSデバイスのモデルを選びます。
* Click  **Build and Run**.
* そのまま待っていると… やりました！ iOSアプリの完成です！

![ビルドして実行](assets/en/contact-app/Build-the-app-simulator.png)

## STEP 11. これからどうする？

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. しかし，知るべきことは，これだけではありません！ In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">完成プロジェクト</a>
</div>
