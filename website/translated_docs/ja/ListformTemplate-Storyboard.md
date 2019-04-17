---
id: storyboard-listform-template
title: ストーリーボード
---
iOSアプリのカスタムリストフォームをXcodeで作成しましょう！

完成イメージ

![カスタムリストフォームのストーリーボード](assets/en/custom-listform/storyboard-custom-listform.png)

セル内に表示されるフィールドのレイアウトをデザインしましょう。

* アイコン
* タイトル 
* サブタイトル

## ストーリーボードをXcodeで開く

storyboardファイル（拡張子は非表示かもしれません）をXcodeで開きます。

![ストーリーボード（空の状態）](assets/en/custom-listform/empty-storyboard-custom-template.png)

ほとんど白紙の状態です。早速，中身を追加しましょう！

## Image Viewを追加する

**オブジェクトライブラリ**から**Image View**を探し，セルにドラッグ＆ドロップします。 オブジェクトライブラリは，ツールバー上部にある丸の中に四角が収まったアイコンをクリックすると表示されます。

![Image Viewをストーリーボードに追加](assets/en/custom-listform/add-imageview-storyboard.png)

**Size inspector**（ウィンドウ右側パネルの定規アイコンをクリック）でImage ViewのWidth（幅）を110に，Height（高さ）も110に設定します。 また，X座標を8に，Y座標を3に設定します。

![Image Viewの位置とサイズ](assets/en/custom-listform/imageview-position-height-width.png)

**Add New Constraints**（ウィンドウ下にある線に挟まれた四角のアイコン）ボタンをクリックして，左側の余白（Leading）を8に設定します。 WidthおよびHeightのチェックボックスをクリックし，幅と高さに固定値の制約を追加します。

![Image View前の余白](assets/en/custom-listform/imageview-leading-space-width-height.png)

**Align**（ウィンドウ下のある並んだ四角形のアイコン）ボタンをクリックして，Vertically in Container（縦中央揃え）のチェックボックスを有効にします。

![Image View垂直揃え](assets/en/custom-listform/imageview-align-vertically.png)

Image Viewのレイアウトがカスタマイズできました！

![Image View（完成）](assets/en/custom-listform/imageview-final.png)

セル内に表示されるラベルに目を移しましょう。

## タイトルおよびサブタイトルのラベル

まず**View**を追加しましょう。 **Object library**からViewを探し，セルにドラッグ＆ドロップします。

![Viewをストーリーボードに追加](assets/en/custom-listform/add-view-storyboard.png)

**Size inspector**（ウィンドウ右側パネルの定規アイコンをクリック）でViewのWidth（幅）を277に，Height（高さ）は94に設定します。 また，X座標を126に，Y座標を10に設定します。

![Viewの位置とサイズ](assets/en/custom-listform/view-position-height-width.png)

**Add New Constraints**（ウィンドウ下にある線に挟まれた四角のアイコン）ボタンをクリックして，左側の余白（Leading）を11に，右側の余白（Trailing）を11に，上側の余白（Top）を11に，下側の余白（Bottom）を10.67に設定します。図に示されているような位置に表示されるはずです。

![View位置の制約](assets/en/custom-listform/view-constraints-storyboard.png)

Viewの上にObject LibraryからLabelをドラッグ＆ドロップします。

![ラベルをストーリーボードに追加](assets/en/custom-listform/add-label-storyboard.png)

**Size inspector**（ウィンドウ右側パネルの定規アイコンをクリック）でViewのWidth（幅）を269に，Height（高さ）は32に設定します。 また，X座標を8に，Y座標も8に設定します。

ラベルを**複製**（command+D）し，**Size inspector**でX座標を8に，Y座標は48に設定します。

![ラベルのコピー](assets/en/custom-listform/duplicated-label-storyboard.png)

両方のラベルを選択し，**Add New Constraints**（ウィンドウ下にある線に挟まれた四角のアイコン）ボタンをクリックして，左側の余白（Leading）を8に，右側の余白（Trailing）を0に，上側の余白（Top）を8に設定します。下側の余白（Bottom）はMultipleのままにしておきます。

![ラベル位置の制約](assets/en/custom-listform/labels-contraints-storyboard.png)

一方のラベルだけを選択し，制約を編集するためにウィンドウ右側パネルに表示されている**Height**をダブルクリックします。

![ラベル高さの制約](assets/en/custom-listform/label-height-constraint-edition.png)

RelationをEqualから**Greater Than or Equal**に変更します。垂直方向に伸びるようにすることで，複数行のラベルに対応することが狙いです。

![ラベル高さの制約をカスタマイズ](assets/en/custom-listform/change-relation-label-height-constraint.png)

他方のラベルに対しても同じことをします。

## ラベルのカスタマイズ

ラベルのフォントカラーは，属性インスペクター（ウィンドウ右側のパネル）でカスタマイズすることができます。 低い位置のラベルを**Dark Gray Color**に設定しましょう。

![ラベルカラーのカスタマイズ](assets/en/custom-listform/label-color-dark-grey.png)

表示される色見本の中からBackground Colorを選択すれば，アプリの支配的なカラーに設定することができます。

![ラベル背景カラーのカスタマイズ](assets/en/custom-listform/label-color-background-color.png)

同じ要領で，フォントもカスタマイズすることができます。 両方のラベルを選択し， FontをクリックしてCustomを選択します。そうすれば，**Helvetica Neue**のようなフォント名が設定できるようになります。

![ラベルフォントのカスタマイズ](assets/en/custom-listform/label-font-custom.png)

仕上げに，両方のラベルが選択された状態で属性インスペクターで**Lines**を1から0に変更します。 これでラベルに表示できる行数が無制限となります。

![ラベル行数](assets/en/custom-listform/label-lines-number.png)<div class = "tips"> 

**注記**

このストーリーボードは，セルの内容に応じて**高さを可変に**なるよう，Animatable Table ViewのRow HeightとEstimateがAutomaticに設定されています。

![セルの高さ](assets/en/custom-listform/row-height-tableview-cell.png)</div> 

## セルにデータが表示されるようにする

### Image View

Image Viewを選択し，**Identity inspector**（ウィンドウ右側パネルの身分証明書アイコンをクリック）のUser Defined Runtime Attributesにアクセスします。 行を追加するために**＋**ボタンをクリックします。

![ユーザー定義のランタイム属性](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path: **BindToから始まるコードでコンポーネントの結合を有効にします。 下記のように入力します。 ```bindTo.record.___FIELD_1___```

* **Type**: 常に ```String```

* **Value**属性名です。 下記のように入力します。 ```___FIELD_1_BINDING_TYPE___```

![Identity inspector](assets/en/custom-listform/identity-inspector-storyboard.png)

### ラベル

高い位置のラベルを選択し，User Defined Runtime Attributesに行を追加します。

* **Key Path**: ```bindTo.record.___FIELD_2___```

* **Type**: ```String```

* **Value**: ```___FIELD_2_BINDING_TYPE___```

![Field 2のバインディング](assets/en/custom-listform/field-2-binding.png)

低い位置のラベルを選択し，User Defined Runtime Attributesで下記の１行を追加します。

* **Key Path**: ```bindTo.record.___FIELD_3___```

* **Type**: ```String```

* **Value**: ```___FIELD_3_BINDING_TYPE___```

![Field 3のバインディング](assets/en/custom-listform/field-3-binding.png)

直感的に理解できるように**ストーリーボードに表示されるラベル**を変更することができます。

* 高い位置のラベルを選択し，下記のように入力します。 ```___FIELD_2_LABEL___```
* 低い位置のラベルを選択し，下記のように入力します。 ```___FIELD_3_LABEL___```

![ラベル表示名](assets/en/custom-listform/storyboard-label-display-name.png)

4D for iOSのプロジェクトエディターを開き，リストフォームのカスタムテンプレートを選択した上で， アプリをビルドして実行します。

シミュレーターでうまく動けば，成功です。

![シミュレーター](assets/en/custom-listform/simulator-result.png)

## さらにカスタマイズする

Image Viewの角の丸みをカスタマイズして，デザインに個性を持たせましょう。

Image Viewを選択し，User Defined Runtime Attributesで下記の２行を追加します。

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

および

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: チェックします。

![Image View角の丸み](assets/en/custom-listform/imageview-corner-radius.png)

これでカスタムテンプレートがプロジェクトエディターで使用できるようになりました！

![カスタムテンプレート（完成）](assets/en/custom-listform/custom-template-final-result.png)

## これからどうする？

このレッスンでは，リストフォームのカスタムテンプレートを作成する方法を紹介しました。 素材プロジェクトから始めて，シンプルなカスタムテンプレートが簡単に自作できる，という手応えが得られたのではないでしょうか。 しかし，知るべきことは，これだけではありません！ 続くレッスンでは，詳細フォームのカスタムテンプレートを作成する方法が取り上げられます。お楽しみに！ 今回のまとめは**完成カスタムテンプレート（リストフォーム）**からダウンロードすることができます。

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-listform/CustomListFormFinalTemplate.zip">完成カスタムテンプレート（リストフォーム）</a>

  </p>
</div>