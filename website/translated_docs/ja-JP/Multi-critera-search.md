---
id: multi-criteria-search
title: 複数条件検索
sidebar_label: Multi-criteria search
---
<div class = "objectives"> 

**目的**

* 自分のテンプレート内で不空条件検索を有効化すること</div> 

この機能は4D for iOSで生成されたテンプレートでは全てデフォルトで有効化されています。

## テンプレートのsvgファイル

* 自分のテンプレートにおいてこの機能を有効化するためには、以下の場所にあるtemplate.svg ファイル内の次の行を編集する必要があります

    <rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>
    
    

以下のように書き換えて下さい

    <rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>
    
    

以上です！ このクラスさえ書き換えれば複数条件検索が有効になります。

## プロジェクトエディター

次に、プロジェクトエディターにおいて複数のフィールドを検索エリアからリストへとドロップします。

![プロジェクトエディター内で複数条件検索](assets/multi-criteria-search/multi-criteria-search-forms-section.png)

検索フィールドの削除ボタンをクリックして関連づけられたフィールドのリストを編集します。

メニューが表示され、検索がどの条件に基づいているかに応じて、**特定のフィールドを削除する**か、あるいは**全てのフィールドを削除する**かを選択できます。

![複数条件検索フィールドを編集する](assets/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

これで完了です！ これで自分の4D for iOS アプリ内において複数のフィールドに基づいて検索ができるようになります。