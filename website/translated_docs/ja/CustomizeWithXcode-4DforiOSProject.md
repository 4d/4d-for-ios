---
id: 4d-for-ios-project-organization
title: 4D for iOS プロジェクトの構成
---

「ナビゲーション」タブを選択し，Sources グループを開きます。

Structure および Forms というフォルダーがあります。 それぞれのフォルダーには，データベースストラクチャおよびフォームの定義ファイルが収められています。

* Launch screen - アプリの起動中に表示されます。
* Login screen - ユーザー認証が有効にされている場合に表示されます。
* Settings screen - リロードボタンとログアウトボタンが含まれます。
* All published tables - アプリのデータベースを管理するためのファイルです。

ファイル形式は Swift または Storyboard となっています。 それぞれのファイルは，下記のような特徴があります。

### Swift ファイル - 編集することにより，プログラムをカスタマイズすることができます。

![Swift ファイル](assets/en/customize-with-xcode/swift-file-Xcode-4D-for-iOS.png)

### Storyboard ファイル - 編集することにより，デザインをカスタマイズすることができます。

![Storyboard ファイル](assets/en/customize-with-xcode/storyboard-file-Xcode-4D-for-iOS.png)

例題で作成した "Contact" アプリの詳細画面を実際にカスタマイズしてみましょう！
