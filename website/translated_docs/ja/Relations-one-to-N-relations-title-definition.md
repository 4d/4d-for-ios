---
id: one-to-many-relations-title-definition
title: １対Ｎタイトルの設定
---

### 移動先の画面にタイトルを設定する

アプリが表示している画面にどの画面から移動したのかがすぐにわかるように，4D for iOSでは画面のタイトルをカスタマイズすることができます。

このレッスンでは，下記のプロジェクトを使用します。

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip">タイトル素材プロジェクト</a>
</div>

Now go straight to Open menu > Mobile project... select *Time Keeper* and go to the **Labels & Icons section**.

From here, open the relation tab to define the *tasks* relation title and enter the following line in the **Titles column**: `%Name% tasks`

![「ラベル＆アイコン」リレーションのタイトル](assets/en/relations/labels-icons-title-definition.png)

As you may have guessed, it will allow you to display **Employee's Name value** on the destination view depending on the Employee detail form you were on previously.

![「ラベル＆アイコン」リレーションのタイトル](assets/en/relations/relations-title-definition.png)

どの画面から移動してきたのかが一目でわかりますね！

次のレッスンでは「Relation」ボタンを自分で作成してカスタマイズする方法を学びます。
