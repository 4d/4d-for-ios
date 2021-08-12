---
id: many-to-one-relations
title: Ｎ対１リレーション
---

4D v17 R5以降，Ｎ対１リレーションがサポートされるようになりました。

> **注記**
> 
> In this tutorial, we will use the relation names between your tables.
> 
> ストラクチャの設定を容易にするため，リレーションには意味のある名前を設定することが勧められています。

素材プロジェクトをダウンロードしてください。

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">MANY TO ONE STARTER PROJECT</a>
</div>

Here we want to display the category for each task in the detail form of your generated app. To do so, open the **StarteriOSProject** from **Open > Mobile Project...**

Then go right to your Structure section and select the **Task table**.

### 「ストラクチャ」セクション

* You can notice that the **TaskCategory relation** is underlined

* リレーション名をクリックすると，リンク先のフィールドが表示されます。

* Select the **Name field**

![「ストラクチャ」セクションで１フィールドを選択する](assets/en/relations/select-link-from-structure.png)

* 以降の画面では，リレートの１フィールドを他のフィールドと同じように扱うことができます。

* リレートの１フィールドは，「データ」セクションのクエリフィルターでも使用することができます。 To do so enter `TaskCategory.Name != 'Personal'` in the Filter query field to exclude personal tasks.

 ![「ラベル＆アイコン」セクションに表示された１フィールド](assets/en/relations/Related-field-from-Data-section.png)

* You can then select an **icon** as well as **formatters** and define **short and long labels** from the Labels and Icons section

![「ラベル＆アイコン」セクションに表示された１フィールド](assets/en/relations/related-field-from-labels-icons.png)

* 「フォーム」セクションでは，詳細フォームに１フィールドをドラッグ＆ドロップします。

![「フォーム」セクションに表示された１フィールド](assets/en/relations/related-field-forms.png)

* ビルドして実行

アプリの詳細画面にリレート先の１フィールドが表示されました！

![「フォーム」セクションに表示された１フィールド](assets/en/relations/final-result-n-to-one-relations.png)


