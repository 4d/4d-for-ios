---
id: one-to-many-relations-title-definition
title: １対Ｎタイトルの設定
---

### 移動先の画面にタイトルを設定する

アプリが表示している画面にどの画面から移動したのかがすぐにわかるように，4D for iOSでは画面のタイトルをカスタマイズすることができます。

このレッスンでは，下記のプロジェクトを使用します。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip">タイトル素材プロジェクト</a>

  </p>
</div>

「開く＞モバイルプロジェクト…」を選択してください。 *Time Keeper*プロジェクトを開いて「**ラベル＆アイコン**」にページを切り替えます。

画面の下部を「リレーション」タブに切り替えて，*tasks*リレーションのタイトルを「**タイトル**」フィールドに入力します。 ```%Name% のタスク```

![「ラベル＆アイコン」リレーションのタイトル](assets/en/relations/labels-icons-title-definition.png)

もうお気づきですね！このように定義すれば，直前の詳細画面に表示されていた**従業員**レコードの氏名フィールドに応じ，表示される値が変化するようになります。

![「ラベル＆アイコン」リレーションのタイトル](assets/en/relations/relations-title-definition.png)

どの画面から移動してきたのかが一目でわかりますね！

次のレッスンでは「Relation」ボタンを自分で作成してカスタマイズする方法を学びます。