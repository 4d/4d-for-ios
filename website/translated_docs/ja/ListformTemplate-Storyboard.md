---
id: storyboard-listform-template
title: ストーリーボード
---

iOSアプリのカスタムリスト画面をXcodeで作成しましょう！

完成イメージ

![カスタムリスト画面のストーリーボード](assets/en/custom-listform/storyboard-custom-listform.png)

セル内に表示されるフィールドのレイアウトをデザインしましょう。

* アイコン
* タイトル 
* サブタイトル

## ストーリーボードをXcodeで開く

storyboardファイル（拡張子は非表示かもしれません）をXcodeで開きます。

![ストーリーボード（空の状態）](assets/en/custom-listform/empty-storyboard-custom-template.png)

ほとんど白紙の状態です。早速，中身を追加しましょう！

## Image Viewを追加する

エディターを右のスクロールして第２画面（シーン）に移動し，**オブジェクトライブラリ**から**Image View**を探してセルにドラッグ＆ドロップします。 オブジェクトライブラリは，ツールバー上部にある丸の中に四角が収まったアイコンをクリックすると表示されます。ツールバーが表示されていない場合，command+option+Tで表示を切り替えてください。command+shift+Lで直接ライブラリを表示することもできます。

![Image Viewをストーリーボードに追加](assets/en/custom-listform/add-imageview-storyboard.png)

**Size inspector**（ウィンドウ右側パネルの定規アイコンをクリック）でImage ViewのWidth（幅）を110に，Height（高さ）も110に設定します。 また，X座標を8に，Y座標を3に設定します。

![Image Viewの位置とサイズ](assets/en/custom-listform/imageview-position-height-width.png)

**Add New Constraints**（ウィンドウ下にある線に挟まれた四角のアイコン）ボタンをクリックします。左側の余白（Leading）は8と表示されているので，ボタン（赤い線）をクリックして余白を有効にします。 WidthおよびHeightのチェックボックスをクリックし，幅と高さに固定値の制約を追加します。

![Image View前の余白](assets/en/custom-listform/imageview-leading-space-width-height.png)

**Align**（ウィンドウ下のある並んだ四角形のアイコン）ボタンをクリックして，Vertically in Container（縦中央揃え）のチェックボックスを有効にします。

![Image View垂直揃え](assets/en/custom-listform/imageview-align-vertically.png)

Image Viewのレイアウトがバッチリ決まりました！

![Image View（完成）](assets/en/custom-listform/imageview-final.png)

セル内に表示されるラベルのほうに目を向けましょう。

## タイトルおよびサブタイトルのラベル

まず**View**を追加しましょう。 **Object library**からView（View Controllerではありません）を探し，セルにドラッグ＆ドロップします。

![Viewをストーリーボードに追加](assets/en/custom-listform/add-view-storyboard.png)

**Size inspector**（ウィンドウ右側パネルの定規アイコンをクリック）でViewのWidth（幅）を277に，Height（高さ）は94に設定します。 また，X座標を126に，Y座標を10に設定します。

![Viewの位置とサイズ](assets/en/custom-listform/view-position-height-width.png)

**Add New Constraints**（ウィンドウ下にある線に挟まれた四角のアイコン）ボタンをクリックして余白を設定します。左側の余白（Leading）は11，右側の余白（Trailing）は11，上側の余白（Top）は10，下側の余白（Bottom）は11.67と表示されているので，それぞれのボタン（赤い線）をクリックして余白を有効にします。

![Viewの制約](assets/en/custom-listform/view-constraints-storyboard.png)

Viewの上にObject LibraryからLabelをドラッグ＆ドロップします。

![ラベルをストーリーボードに追加](assets/en/custom-listform/add-label-storyboard.png)

**Size inspector**（ウィンドウ右側パネルの定規アイコンをクリック）でViewのWidth（幅）を269に，Height（高さ）は32に設定します。 また，X座標を8に，Y座標も8に設定します。

ラベルを**複製**（command+D）し，**Size inspector**でX座標を8に，Y座標は48に設定します。

![ラベルのコピー](assets/en/custom-listform/duplicated-label-storyboard.png)

両方のラベルを選択し，**Add New Constraints**（ウィンドウ下にある線に挟まれた四角のアイコン）ボタンをクリックします。左側の余白（Leading）は8，右側の余白（Trailing）は0，上側の余白（Top）は8，下側の余白（Bottom）はMultipleと表示されているので，それぞれ有効にします。Heightのチェックボックスをクリックし，高さ固定の制約を追加します。

![ラベル位置の制約](assets/en/custom-listform/labels-contraints-storyboard.png)

一方のラベルだけを選択し，制約を編集するためにウィンドウ右側パネルに表示されている**Height**をダブルクリックします。

![ラベル高さの制約](assets/en/custom-listform/label-height-constraint-edition.png)

RelationをEqualから**Greater Than or Equal**に変更します。垂直方向に伸びるようにすることで，複数行のラベルに対応することが狙いです。

![ラベル高さの制約をカスタマイズ](assets/en/custom-listform/change-relation-label-height-constraint.png)

他方のラベルに対しても同じことをします。

## ラベルのカスタマイズ

ラベルのフォントカラーは， Attribute inspector（ウィンドウ右側パネルのルーラーアイコンをクリック）でカスタマイズすることができます。 低い位置のラベルを**Dark Gray Color**に設定しましょう。

![ラベルカラーのカスタマイズ](assets/en/custom-listform/label-color-dark-grey.png)

表示される色見本の中からBackground Colorを選択すれば，アプリの支配的なカラーに設定することができます。

![ラベル背景カラーのカスタマイズ](assets/en/custom-listform/label-color-background-color.png)

同じ要領で，フォントもカスタマイズすることができます。 両方のラベルを選択し， FontをクリックしてCustomを選択します。そうすれば，**Helvetica Neue**のようなフォント名が設定できるようになります。

![ラベルフォントのカスタマイズ](assets/en/custom-listform/label-font-custom.png)

仕上げに，両方のラベルが選択された状態で属性インスペクターで**Lines**を1から0に変更します。 これでラベルに表示できる行数が無制限となります。

![ラベル行数](assets/en/custom-listform/label-lines-number.png)<div class = "tips"> 

**注記**

The provided storyboard is optimized to have a **variable cell height** depending on the contents of each cell.

![Row height tableview cell](assets/en/custom-listform/row-height-tableview-cell.png)</div> 

## セルにデータが表示されるようにする

### Image View

Image Viewを選択し，**Identity inspector**（ウィンドウ右側パネルの身分証明書アイコンをクリック）のUser Defined Runtime Attributesにアクセスします。 行を追加するために**＋**ボタンをクリックします。

![ユーザー定義のランタイム属性](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path: **BindToから始まるコードでコンポーネントの結合を有効にします。 下記のように入力します。 ```bindTo.record.___FIELD_1___```

* **Type**: 常に文字列です。 ```String```

* **Value**属性名です。 下記のように入力します。 ```___FIELD_1_BINDING_TYPE___```

![Identity inspector](assets/en/custom-listform/identity-inspector-storyboard.png)

### ラベル

Select the first label and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD_2___```

* **Type**: ```String```

* **Value**: ```___FIELD_2_BINDING_TYPE___```

![Field 2 Binding](assets/en/custom-listform/field-2-binding.png)

Select the second label and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD_3___```

* **Type**: ```String```

* **Value**: ```___FIELD_3_BINDING_TYPE___```

![Field 3 Binding](assets/en/custom-listform/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility:

* 高い位置のラベルを選択し，下記のように入力します。 ```___FIELD_2_LABEL___```
* 低い位置のラベルを選択し，下記のように入力します。 ```___FIELD_3_LABEL___```

![Storyboard label display names](assets/en/custom-listform/storyboard-label-display-name.png)

Go to your project editor, select your list form template from the Forms section, then select Build and Run.

Here is the simulator result :

![Simulator result](assets/en/custom-listform/simulator-result.png)

## さらにカスタマイズする

The last step is adding a corner radius to the Image View to have a better design.

Image Viewを選択し，User Defined Runtime Attributesにユーザー定義属性を入力します。

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

その他

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: チェックします。

![ImageView corner Radius](assets/en/custom-listform/imageview-corner-radius.png)

これでカスタムテンプレートがプロジェクトエディターで使用できるようになりました！

![カスタムテンプレート（完成）](assets/en/custom-listform/custom-template-final-result.png)

## これからどうする？

In this tutorial, we've covered the basics for creating list form templates. You are now able to create simple templates on your own using the Starter Project ressources. しかし，知るべきことは，これだけではありません！ In the next tutorial, you’ll learn how to build detail form templates! Click on **Final Project** below to download the completed template list folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip">CUSTOM LISTFORM FINAL TEMPLATE</a>

  </p>
</div>