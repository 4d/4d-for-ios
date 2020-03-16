---
id: creating-listform-templates
title: リストフォームのテンプレート
---

:::tip OBJECTIVES Create your first list form template. :::

:::important PREREQUISITES [ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！ :::

このレッスンでは，リストフォーム用のカスタムテンプレートを作成するために必要なスキルを身につけることができます。これには，フォームに**検索窓**を追加すること，**画像**フィールドを表示すること，各行のセルに**タイトル**と**サブタイトル**を表示することが含まれます。

![リストフォームテンプレート（完成）](assets/en/custom-listform/custom-template-final-result.png)

## プロジェクトをダウンロードする

**素材プロジェクト**をダウンロードしてください。下記のものが収録されています。

* **Custom List form**フォルダー 
* **Contact.4dbase**ファイル（データベースとプロジェクトのセット）

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">素材プロジェクト</a>

  </p>
</div>

これでフォーマッターを作成する準備が整いました！

## プロジェクトにリストフォームのテンプレートを追加する

はじめに*Contact.4dbase/Resources/Mobile/form/list*フォルダーを作成します。 その中に**list form**フォルダーをドラッグ＆ドロップします。

![Mobileフォルダーに収録されているリストフォームのテンプレート](assets/en/custom-listform/mobile-folder-custom-template.png)

Contact.4dbaseファイルを4Dで開きます。 （ファイル ＞ 開く ＞ モバイルプロジェクト… ＞ **Contact Demo App**）

追加したテンプレートがプロジェクトエディターの**フォーム**セクションに表示されていれば成功です！

![フォームセクション](assets/en/custom-listform/custom-listform-template.png)

**Custom List form**フォルダーの中に注目しましょう。

## テンプレートの構造

フォルダーの中は，下記のようになっています。

* **layoutIconx2.png**: 160x160pxサイズのアイコンファイルです。プロジェクトエディターに表示されます。
* **manifest.json**: テンプレートの基本的な説明が記述されています。
* **template.svg**: リストフォームのレイアウトを決定する画面に表示されるテンプレートのプレビューです。
* Sources: **storynoard**（グラフィカルインターフェース）および**swift**（フォームをコントロールするコード） ファイルが収録されています。

ファイルの内容が気になりますね！ それぞれどのような働きをするのでしょうか？ どうやってカスタマイズするのでしょうか？