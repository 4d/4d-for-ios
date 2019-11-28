---
id: action-custom-template
title: テンプレートにアクションを追加する
---

<div class = "objectives"> 

**レッスンの目標**

自作したテンプレートを改良してアクションに対応させましょう！</div> <div class = "prerequisites"> 

**用意するもの**

始めるために揃えておくべきものは[こちら](prerequisites.html)でチェックすることができます。</div> 

このレッスンでは，**カスタムテンプレートにアクションを追加する**方法を学ぶことができます。とても簡単です。

## ⒈ プロジェクトをダウンロードする

まず，素材プロジェクトをダウンロードしてください。下記のものが含まれています。

* リスト画面のカスタムテンプレートが２個（TasksList および TasksCollection）
* 詳細画面のカスタムテンプレートが１個（TasksDetail）
* データベース（Tasks.4dbase）

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">素材プロジェクト</a>

  </p>
</div>

## ⒉ 4D for iOS プロジェクトにカスタムテンプレートを追加する

テンプレートをインストールします。

* **TasksList** および **TasksCollection** テンプレートフォルダーは *Tasks.4dbase/Resources/Mobile/form/list* フォルダーにドロップします。 

![リスト画面のテンプレート](assets/en/actions/Listform-templates.png)

* **TasksDetail** テンプレートフォルダーは *Tasks.4dbase/Resources/Mobile/form/detail folder* フォルダーにドロップします。

![詳細画面のテンプレート](assets/en/actions/Detailform-template.png)

## ⒊ リスト画面にアクションを追加する

「[アクション](actions.html)」セクションのところで述べたように，アクションには，テーブルに対するものとエンティティに対するものがあります。

下記の場所にあるファイルを開いてください。 ```list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` これはストーリーボードファイルです。

### TasksList カスタムテンプレートにアクションを追加する

#### Ａ テーブルアクションタグを追加する

**List form Controller**を選択し，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```actions```
* Type: ```String```
* Value: ```___TABLE_ACTIONS___```

![テーブルアクションタグの追加](assets/en/actions/Add-table-tag-taskslist.png)

#### Ｂ エンティティアクションタグを追加する

Animatable Table View を選択し，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![エンティティアクションタグの追加](assets/en/actions/Add-entity-tag-taskslist.png)

これでカスタムテンプレートがアクション対応になりました！

TaskList カスタムテンプレートを「**フォーム**」セクションで選択し，下図のようにフィールドを追加することができます。

![「フォーム」セクション（Taskslist）](assets/en/actions/listform-taskslist-forms-section.png)

続けて TasksCollection カスタムテンプレートにもアクションを追加しましょう。

### TasksCollection カスタムテンプレートにアクションを追加する

下記の場所にあるファイルを開いてください。 ```list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` これはストーリーボードファイルです。

#### Ａ テーブルアクションタグを追加する

作業は TasksList カスタムテンプレートの場合によく似ています。

**List form Controller** を選択し，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```actions```
* Type: ```String```
* Value: ```___TABLE_ACTIONS___```

![リスト画面にテーブルアクションタグを追加](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### Ｂ エンティティアクションタグを追加する

エンティティアクションを表示する方法はリスト形式の TableView とグリッド形式の CollectionViews では異なります。後者はスワイプ操作に不向きです。

コレクションタイプ（グリッド形式）の場合，セルの**長押し**ジェスチャーに反応してアクションを表示すると良いでしょう。

collectionView のセルをを選択し，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![リスト画面にエンティティアクションタグを追加](assets/en/actions/Add-collection-entity-tag-taskslist.png)

タッチしたときに触覚フィードバックと拡大エフェクトが発生するように設定するため，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```touch.zoomScale```
* Type: ```Number```
* Value: ```0.96``` （ズーム率は好みに合わせて増減することができます）

TasksCollection カスタムテンプレートを「**フォーム**」セクションで選択し，下図のようにフィールドを追加することができます。

![「フォーム」セクション（TasksCollection）](assets/en/actions/listform-taskscollection-forms-section.png)

## ⒋ 詳細画面にアクションを追加する

詳細画面の場合，ナビゲーションバーに**…（ジェネリック）ボタン** ，あるいは**オリジナルのカスタムアクションボタン**を使用することができます。 どちらもタグを挿入するだけで追加できます。

ナビゲーションバーに追加される…ボタンのために Controller を選択し，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![詳細画面にエンティティアクションタグを追加](assets/en/actions/Detail-form-action-navigationBar.png)

このレッスンでは，ジェネリックボタンを使用します。 下記の場所にあるファイルを開いてください。 ```detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard``` これはストーリーボードファイルです。

右下のボタンを選択し，**User Defined Runtime Attributes**（Identity inspector）に下記のコードを入力します。

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![詳細画面にカスタムアクションボタンを追加](assets/en/actions/Detail-form-action-custom-action-Button.png)

画面に「はてなマーク」が表示されていることから明らかなように，このストーリーボードにはボタンの画像が不足しています。 必要なファイルは，テンプレートの **Resources** フォルダーに収録されています。 これらのファイルは，ビルドを実行すれば，プロジェクトにコピーされます。

**moreButton.imageset** は，右下に配置したいボタンの関連ファイルです。

![テンプレートの関連ファイル](assets/en/actions/Template-Ressources.png)

TasksDetail カスタムテンプレートを「**フォーム**」セクションで選択し，下図のようにフィールドを追加することができます。

![「フォーム」セクション（TasksDetail）](assets/en/actions/detailform-forms-section.png)

おつかれさまでした！完成したiOSアプリは，リスト画面と詳細画面が両方ともアクション対応になりました！

![テンプレートの関連ファイル](assets/en/actions/ListForm-entity-action-tableview.png)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">完成プロジェクト</a>

  </p>
</div>