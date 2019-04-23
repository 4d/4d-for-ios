---
id: creating-listform-templates
title: リストフォームのテンプレート
---

<div class = "objectives"> 

**レッスンの目標**

オリジナルのリストフォームを作成しましょう！</div> <div class = "prerequisites"> 

**用意するもの**

始めるために揃えておくべきものは[こちら](prerequisites.html)でチェックすることができます。</div> 

このレッスンでは，リストフォーム用のカスタムテンプレートを作成するために必要なスキルを身につけることができます。これには，フォームに**検索窓**を追加すること，**画像**フィールドを表示すること，各行のセルに**タイトル**と**サブタイトル**を表示することが含まれます。

![リストフォームテンプレート（完成）](assets/en/custom-listform/custom-template-final-result.png)

## プロジェクトをダウンロードする

**素材プロジェクト**をダウンロードしてください。下記のものが収録されています。

* **Custom List form**フォルダー 
* **Contact.4dbase**ファイル（データベースとプロジェクトのセット）

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-listform/CustomListFormStarterProject.zip">素材プロジェクト</a>

  </p>
</div>

リストフォームのカスタムテンプレートを作成する用意ができました！

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