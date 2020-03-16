---
id: one-to-many-relations
title: １対Ｎリレーション
---

このレッスンでは，4D for iOSアプリで１対Ｎリレーションを使用する方法を学びます。

:::tip OBJECTIVES このレッスンでは，テーブル同士をリンクするリレーションの名前を使用します。 ストラクチャの設定を容易にするため，リレーションには意味のある名前を設定することが勧められています。 :::

素材プロジェクトをダウンロードしてください。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip">１対Ｎ素材プロジェクト</a>

  </p>
</div>

このレッスンでは，カラフルな**チェックリスト（Task）アプリ**を4D for iOSで作成します。

![アプリ完成画面](assets/en/relations/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

はじめに，データベースのストラクチャを確認しましょう。

![「ストラクチャ」セクションで１フィールドを選択する](assets/en/relations/Database-1-to-N-relations-4D-for-iOS.png)

従業員（**１**テーブル）からタスク（**Ｎ**テーブル）に対し，**tasks**という名前のリレーションが張られていることに注目してください。

「開く＞モバイルプロジェクト…」メニューを選択します。 *Time Keeper*プロジェクトを開いて「**ストラクチャ**」にページを切り替えます。

## Structure section

**tasks**リレーションが表示されているはずです。 これを公開しましょう！

以後，リレーションは，通常のフィールドと同じように扱うことができるようになります。

![「ストラクチャ」セクションの「リレーション」プロパティ](assets/en/relations/Structure-section-relations-4D-for-iOS.png)<div class = "tips"> 

**ヒント**

* リレーション名にマウスポインターを重ねると，テーブル名がヘルプTipsで表示されます。</div> 

## Labels & Icons section

「[ラベル＆アイコン](labels-and-icons.html)」セクションに１対Ｎリレーションが表示されています。

１対Ｎリレーションを追加すると，作成されたiOSアプリの画面にボタンが追加されることに留意してください。

「ラベル＆アイコン」セクションでは下記のものを設定します。

* ボタンタイトル
* ボタンアイコン
* 遷移した先の画面に表示される[タイトル](one-to-n-relations-title-definition.html)（たとえば，どの画面から移動してきたのかを示すために使用します）。

![Labels & Icons section Relations properties](assets/en/project-editor/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## フォームセクション

* 「フォーム」セクションにページを切り替えて，Employee TableのTask Detail画面に*tasks*リレーションをドラッグ＆ドロップします。

![「フォーム」セクションに表示された１フィールド](assets/en/relations/1-to-n-relations-forms-section.png)

## ビルドして実行

1. Employeeのリスト画面で適当な従業員をクリックします。 
2. 従業員の情報が詳細画面に**Relation**ボタンが表示されているはずです。
3. Relationボタンをクリックすると，選択されている従業員のタスクが表示されます。 

![「フォーム」セクションに表示された１フィールド](assets/en/relations/One-to-n-relations-task-ios-app.png)

これだけです！4D for iOSで１対Ｎリレーションが使用できるようになりました！

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip">完成プロジェクト</a>

  </p>
</div>