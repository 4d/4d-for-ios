---
id: xcode-overview
title: Xcode ガイド
---

:::tip OBJECTIVES Xcode の基本的な操作を習得しましょう！ :::

Xcode の各部の名称と役割に慣れ親しみましょう。

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## ツールバー

* **Run** and **Stop** buttons are located on the left side of the toolbar. Pressing the **Run** button will build, run, and launch your application in the selected iOS Simulator.

![ビルドして実行](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* The dropdown menu next to the **Stop** button indicates which build target you want to run and which Simulator is being used.

![ツールバー「ターゲット」](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* ツールバーの右側には，表示形式を切り替えるためのボタンがあります。

![ツールバー「ビュー」ボタン](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## エディターエリア

![エディターエリア](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

選択した Swift ファイルをコーディングするエリアです。 Storyboard ファイルが選択された場合，インターフェースビルダーに表示が切り替わります。

## インターフェースビルダー

![インターフェースビルダー](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

Storyboard または XIB ファイルを開いて編集するためのグラフィカル・ユーザー・インタフェースです。 ファイル内の各シーンは，左側のリストで切り替えます。

## ユーティリティーエリア

Xcode のユーティリティエリアは，「インスペクター」および「ライブラリ」ペイン（枠）で構成されています。

![ユーティリティーエリア](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### インスペクターペイン

プロパティセクションには，６個のインスペクタータブがあります。

![インスペクターペイン](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

各タブの役割は，左から右に向かって下記のとおりです。

* **File inspector**: For viewing and managing file metadata, such as a filename, type, and path.

* **Quick Help**: For viewing details about what has been selected in an editor.

* **Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

* **Attributes inspector**: For configuring the attributes specific to the selected interface object. たとえば，テキストフィールドには，文字の整列・フォントカラー・ボーダータイプ・入力の可否といった属性があります。

* **Size inspector**: For specifying characteristics such as the size and position of an interface object.

* **Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### ライブラリペイン

プロパティセクションには，４個のライブラリタブがあります。

各タブの役割は，左から右に向かって下記のとおりです。

![ライブラリペイン](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates**: These templates are for the common types of files listed as choices in the New File menu.

* **Code snippets**: These are short pieces of source code for use in your application. 直接，ソースコードにドラッグ＆ドロップすることができます。

* **Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. 直接，インターフェースビルダーに表示されているストーリーボードにドラッグ＆ドロップすることができます。

* **Media files**: This library contains all your graphics, icons, and sound files. 直接，インターフェースビルダーに表示されているストーリーボードにドラッグ＆ドロップすることができます。

## デバッグエリア

アプリの実行中にさまざまな変数の出力値や状態は，このエリアに表示されます。

## ナビゲーションエリア

いくつものタブが存在しますが，特に重要なのは，下記のタブです。

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly.

![「ナビゲーション」タブ](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project.

![「サーチナビゲーター」タブ](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.

    - 赤のメッセージは，無視できない問題であり，アプリをビルドするためには，解消する必要があることを示しています。
    - 黄のメッセージは，警告であり，不具合を引き起こす可能性があるものの，アプリのビルドを阻止するものではない問題を示しています。

問題や警告をクリックすると，プロジェクト内の発生箇所にジャンプすることができます。

![「イシューナビゲーター」タブ](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

次に「プロジェクト」ナビゲーションタブに切り替えて，4D for iOS アプリを構成するファイル群に注目しましょう。
