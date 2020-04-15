---
id: xcode-overview
title: Xcode ガイド
---

<div class = "objectives"> 

**OBJECTIVES**

Ensure a basic understanding of working with Xcode.</div> 

Xcode displays various areas that we're going to review:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## ツールバー

* ツールバーの左側には，**実行** および **停止** ボタンがあります。 **実行** ボタンは，アプリをビルドして，指定したiOS シミュレーターで起動するために使用します。

![ビルドして実行](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* **停止** ボタンの隣にあるドロップダウンメニューは，ビルドと実行のターゲットプラットフォームおよびシミュレーターの種類を選択するために使用します。

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* ツールバーの右側には，表示形式を切り替えるためのボタンがあります。

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## エディターエリア

![エディターエリア](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

This is where the coding happens when a Swift file is selected. When a Storyboard file is selected, the view changes and the Interface Builder appears.

## インターフェースビルダー

![インターフェースビルダー](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side.

## ユーティリティーエリア

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![ユーティリティーエリア](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### インスペクターペイン

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![インスペクターペイン](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

* **ファイルインスペクター**: ファイル名・タイプ・パスなど，ファイルのメタデータを管理するために使用します。

* **クイックヘルプ**: エディターで選択されているものに関する情報が表示されます。

* **アイデンティティーインスペクター**: オブジェクトのクラス・ランタイム属性・ラベルなど，オブジェクトのメタデータが表示されます。

* **属性インスペクター**: 選択されているインターフェースオブジェクトに固有の属性を設定するために使用します。 たとえば，テキストフィールドには，文字の整列・フォントカラー・ボーダータイプ・入力の可否といった属性があります。

* **サイズインスペクター**: インターフェースオブジェクトのサイズや位置を設定するために使用します。

* **コネクションインスペクター**: インターフェースオブジェクトのアウトレットやアクションを表示し，コネクションを作成または削除するために使用します。

### ライブラリペイン

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![ライブラリペイン](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **ファイルテンプレート**: 新規ファイルメニューで作成できる代表的なファイルタイプのテンプレートです。

* **コードスニペット**: アプリケーション内で使用できるソースコードの例題です。 直接，ソースコードにドラッグ＆ドロップすることができます。

* **オブジェクト**: このライブラリには，ユーザーインターフェースの部品となるようなインターフェースオブジェクトが収録されています。 直接，インターフェースビルダーに表示されているストーリーボードにドラッグ＆ドロップすることができます。

* **メディアファイル**: このライブラリには，画像・アイコン・音声ファイルが収録されています。 直接，インターフェースビルダーに表示されているストーリーボードにドラッグ＆ドロップすることができます。

## デバッグエリア

This area displays the output and the state of various variables when running your app.

## ナビゲーションエリア

Several tabs are included here, the most important of which are:

* **ナビゲーションタブ**: アプリケーションが正しく動作するために必要なファイルがリストアップされており，アクセスできるようになっています。

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **サーチナビゲータータブ**: プロジェクト内のファイルを検索するために使用します。

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **イシューナビゲータータブ**: iOSプロジェクト内で発生したエラーは，ここに出力されます。
    
    * 赤のメッセージは，無視できない問題であり，アプリをビルドするためには，解消する必要があることを示しています。 
    * 黄のメッセージは，警告であり，不具合を引き起こす可能性があるものの，アプリのビルドを阻止するものではない問題を示しています。 

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.