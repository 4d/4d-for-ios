---
id: multi-criteria-search
title: 検索エリアに複数のフィールドを設定する
---

:::tip OBJECTIVES 自作テンプレートを発展させて複数フィールドのクエリが実行できるようにしましょう！ :::

4D for iOSに収録されているテンプレートの検索エリアは，すでに複数フィールドのクエリをサポートしています。

## テンプレートSVGファイル

自分で作成したテンプレートを複数フィールドの検索に対応させるためには，template.svgファイルを下記のように書き換えてください。

```xml
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

変更後

```xml
<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

これだけです！ 検索エリアにクラス名を追加すれば，複数のフィールドをサポートすることができます。

## プロジェクトエディター

プロジェクトエディターを開き，ドラッグ＆ドロップ操作でリスト画面の検索エリアに複数のフィールドを追加します。

![複数フィールドに対応した検索エリア](assets/en/multi-criteria-search/multi-criteria-search-forms-section.png)

設定フィールドを変更するには，検索エリアの削除ボタンをクリックします。

A menu will appear to allow you to **remove specific fields** or **remove all fields**, depending on which criteria you want to base your search(es) on.

![検索エリアのフィールドリストを変更する](assets/en/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

Congratulations! 複数のフィールドを検索する4D for iOSアプリが作成できるようになりました！
