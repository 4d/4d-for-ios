---
id: creating-listform-templates
title: リストフォームのテンプレート
---

:::tip OBJECTIVES Create your first list form template. :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

In this tutorial, we'll cover nearly all aspects of creating a list form template such as: creating a list form with a **searchBar** and a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## プロジェクトをダウンロードする

Before we begin, be sure to download the **Starter Project** which includes:

* **Custom List form**フォルダー 
* **Contact.4dbase**ファイル（データベースとプロジェクトのセット）

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">LISTFORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first list form template!

## プロジェクトにリストフォームのテンプレートを追加する

The first thing you'll need to do is create a *Contact.4dbase/Resources/Mobile/form/list* folder. Then drag and drop your **list form** folder into it.

![Mobile folder list form template](assets/en/custom-listform/mobile-folder-custom-template.png)

Next, open the Contact.4dbase file with 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![フォームセクション](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## テンプレートの構造

In this folder, you'll find:

* **layoutIconx2.png**: 160x160pxサイズのアイコンファイルです。プロジェクトエディターに表示されます。
* **manifest.json**: テンプレートの基本的な説明が記述されています。
* **template.svg**: リストフォームのレイアウトを決定する画面に表示されるテンプレートのプレビューです。
* Sources: **storynoard**（グラフィカルインターフェース）および**swift**（フォームをコントロールするコード） ファイルが収録されています。

What are these files? What are they used for? How can you customize them?