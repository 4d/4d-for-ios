---
id: creating-listform-templates
title: リストフォームのテンプレート
---

<div class = "objectives">
**OBJECTIVES**
Create your first list form template.</div> <div class = "prerequisites">
**PREREQUISITES**
はじめに[ここ](prerequisites.html)をクリックして，すべての条件が揃っていることを確かめましょう！</div>

In this tutorial, we'll cover nearly all aspects of creating a list form template such as: creating a list form with a **searchBar** and a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![リストフォームテンプレート（完成）](assets/en/custom-listform/custom-template-final-result.png)

## スタータープロジェクトをダウンロードする

Before we begin, be sure to download the **Starter Project** which includes:

* A **List form** folder
* A **Contact.4dbase** file (a demo database with a ready-to-use mobile app project)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">素材プロジェクト</a>
  </p>
</div>

これでフォーマッターを作成する準備が整いました！

## プロジェクトにリストフォームのテンプレートを追加する

The first thing you'll need to do is create a *Contact.4dbase/Resources/Mobile/form/list* folder. Then drag and drop your **list form** folder into it.

![Mobileフォルダーに収録されているリストフォームのテンプレート](assets/en/custom-listform/mobile-folder-custom-template.png)

Contact.4dbaseファイルを4Dで開きます。 (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![フォームセクション](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## テンプレートの構造

フォルダーの中は，下記のようになっています。

* **a layoutIconx2.png** icon in 160x160px : it'll be displayed in the project editor when you select your template
* **a manifest.json file** : includes a basic description of the template
* **a template.svg file** : the visual representation of your template displayed when you define your list form content.
* Source folder : including the **storyboard** (graphical interface) and **Swift** file (code for the form)

ファイルの内容が気になりますね！ それぞれどのような働きをするのでしょうか？ どうやってカスタマイズするのでしょうか？
