---
id: contact-app
title: はじめてのアプリ
---

:::tip OBJECTIVES 4D for iOS でアプリを作成しましょう！ :::

:::important PREREQUISITES [ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！ :::

難しい前置きはありません。いますぐ，実際にアプリを開発しましょう。 このレッスンでは，とにかく短時間で，簡単に，はじめての4D for iOSアプリを開発することが目標です。

*場面：あなたは，ビジネス志向の経営者です。出先で顧客情報をチェックしたいと考えています。*

iPhone用のオリジナル手帳アプリを作成しましょう。リスト画面で顧客名を探し，個別の詳細を確認できるようなイメージです。 アプリ名は "Contact" です。

## ⒈ データベースを用意する
素材プロジェクトをダウンロードしてください。収録されているのは，データベースとアイコンだけであり，モバイルプロジェクトはありません。

<div style="text-align: center; margin-top: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">素材プロジェクト</a>
  </p>
</div>

## ⒉ プロジェクトの作成

テーブル１個だけのとてもシンプルなデザインから始めましょう。 From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![プロジェクト作成](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## ⒊ プロジェクトエディター

「4D for iOS 」のランディングページが表示されました！ アイコンと説明文は，アプリが完成するまでの過程を説明したものです。 意欲が高まるのではないでしょうか🙂

![ランディングページ](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## ⒋ 一般

この画面では，アプリの基本的な情報を入力します。

* **Organization:** Enter the name of your company and the application's identifier (ex. “My Company” および com.MyCompany）。
* **Product:** Enter your app's name. ここでは "Contact" と名付けましょう。
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your app's copyright. テキストのフォーマットは，なるべく4D for iOSのものを踏襲するようにしてください。
* **Icons:** Drag and drop an icon for your app into the icon area.
* **Developer:** This is automatically filled from the user name on your computer. 部署名は，Appleデベロッパーアカウントの「部署」に表示されているものをコピー＆ペーストします。 実機ではなく，シミュレーター向けにビルドするだけであれば，空欄のままでも構いません。

![一般](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## ⒌ ストラクチャー

iOSアプリからアクセスできるデータベースのサブセット（具体的にはテーブルやフィールド）を決めます。

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

:::tip 注記 レコードが間違いなく特定できるようにするため，プライマリーキー（ここではIDフィールド）を含めることが強く勧められています。 :::

![ストラクチャ](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## ⒍ ラベル＆アイコン

選択したテーブルとフィールドに合ったラベルとアイコンを設定しましょう。

**テーブルプロパティ**

* Contactテーブルに短いラベルと長いラベルを設定します。
* アイコン（はてなマーク）をクリックします。 表示されるアイコン群の中からContacts（顧客情報）を連想させるような画像を探してアイコンに設定します。 あるいは，空欄のままにすることもできます。 その場合，4D for iOSが自動的にアイコンを生成します。便利ですね！

**フィールドプロパティ**

* 選択したフィールドに短いラベルと長いラベルを設定します。
* アイコン（はてまマーク）をクリックし，各フィールドのアイコンを設定します。 フィールドの場合，いくつかの方法があります。
    * 各フィールドにそれぞれ画像を選択して設定する
    * 少なくとも１個のフィールドに画像が設定され，他は空欄のままだった場合，未設定のフィールドには4D for iOSが自動的にアイコンを生成します。
    * すべて空欄のままにした場合，フィールドのアイコンは表示されません。

![ラベル＆アイコン](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## ⒎ メインメニュー

アプリのメインメニュー（画面下部のタブバー）にテーブルが表示される順序を決めましょう。

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. ここでは１個しかテーブルがありませんが，順序はドラッグ＆ドロップで変更できるようになっています。

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## ⒏ フォーム

あともう少しです！アプリの外観を決めるために，デザインを選びましょう。 リストフォームと詳細フォーム，それぞれのサンプルが用意されています。

* レコードをリスト形式で表示するために，listビューのテンプレートを選択します。 For our Contact app, let’s use the **Profile** template.

![リストフォームのテンプレート](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

テンプレートを選択すると，設定画面の下半分がテンプレートのリストからデザイン画面に切り替わります。

* Drag and drop the fields you want displayed onto the template, <i>i.e.</i>, Last Name into the search and Title fields. 「検索に使用するフィールド」および「セクションとして使用するフィールド」の使用は任意です。Photoは「ピクチャー」，FirstNameは「サブタイトル」に設定し，「セクションとして使用するフィールド」は未設定のままにしておきましょう。

![リストフォーム](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

あとは詳細フォームを決めるだけです。

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![詳細フォームのテンプレート](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)


* Drag and drop the content onto the appropriate places on the detail form template, <i>i.e.</i>, First Name, Last Name, and Photo.

![詳細フォーム](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## ⒐ ビルド

おつかれさまでした！ デザインしたアプリをビルドして，シミュレーターで動かしてみましょう！

* Click the **Build** tab.
* 機種名のアイコンをクリックして，シミュレーターで起動するiOSデバイスのモデルを選びます。
* Click  **Build and Run**.
* そのまま待っていると… やりました！ iOSアプリの完成です！

![ビルドして実行](assets/en/contact-app/Build-the-app-simulator.png)

## ⒑ これからどうする？

このレッスンでは，アプリの基本的な作り方を紹介しました。ほんとうに手軽に作れる，という手応えが得られたのではないでしょうか。 しかし，知るべきことは，これだけではありません！ In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">完成プロジェクト</a>
  </p>
</div>
