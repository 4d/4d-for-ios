---
id: many-to-one-relations
title: Many to One relations
---

4D v17 R5 includes a new concept: Many to One relations<div class = "tips"> 

**注記**

このレッスンでは，テーブル同士をリンクするリレーションの名前を使用します。 ストラクチャの設定を容易にするため，リレーションには意味のある名前を設定することが勧められています。</div> 

素材プロジェクトをダウンロードしてください。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/relations/Tasks.4dbase.zip">MANY TO ONE STARTER PROJECT</a>

  </p>
</div>

ここでは，タスクと一緒にカテゴリをアプリの詳細画面に表示したいと考えています。まず，**開く > モバイルプロジェクト…**から**StarteriOSProject**プロジェクトを開きます。

「ストラクチャ」セクションに移動し，**Task**テーブルを選択します。

### 「ストラクチャ」セクション

* **TaskCategory**リレーションに下線が表示されていることに注目してください。

* リレーション名をクリックすると，リンク先のフィールドが表示されます。

* **Name**フィールドを選択します。

![「ストラクチャ」セクションで１フィールドを選択する](assets/en/relations/select-link-from-structure.png)

* 以降の画面では，リレートの１フィールドを他のフィールドと同じように扱うことができます。

* リレートの１フィールドは，「データ」セクションのクエリフィルターでも使用することができます。 たとえば，下記のように入力することができます。 ```TaskCategory.Name != 'Personal'``` 上記のようにクエリフィルターを設定すれば，個人的なタスクが除外されます。
    
    ![「ラベル＆アイコン」セクションに表示された１フィールド](assets/en/relations/Related-field-from-Data-section.png)

* 「ラベル＆アイコン」セクションでは，**アイコン**・**フォーマッター**・**短いラベル**・**長いラベル**を設定することができます。

![「ラベル＆アイコン」セクションに表示された１フィールド](assets/en/relations/related-field-from-labels-icons.png)

* Go to the Forms section and drag the field on the Task Detail form

![「フォーム」セクションに表示された１フィールド](assets/en/relations/related-field-forms.png)

* ビルドして実行

アプリの詳細画面にリレート先の１フィールドが表示されました！

![「フォーム」セクションに表示された１フィールド](assets/en/relations/final-result-n-to-one-relations.png)