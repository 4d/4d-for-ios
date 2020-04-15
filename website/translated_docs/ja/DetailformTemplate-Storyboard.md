---
id: storyboard-detailform-template
title: ストーリーボード
---

iOSアプリのカスタム詳細画面をXcodeで作成しましょう！

完成イメージ

![カスタム詳細画面のストーリーボード](assets/en/custom-detailform/storyboard-custom-detailform.png)

セル内に表示されるフィールドのレイアウトをデザインしましょう。

* プロフィールのヘッダー画像 
* 繰り返されるフィールド

## ストーリーボードをXcodeで開く

storyboardファイル（拡張子は非表示かもしれません）をXcodeで開きます。

![ストーリーボード（空の状態）](assets/en/custom-detailform/empty-storyboard-custom-detailform-template.png)

ほとんど白紙の状態です。早速，中身を追加しましょう！

## Scroll Viewを追加する

詳細フォームをスクロールできるようにするため，はじめに**オブジェクトライブラリ**から「Scroll View」をドラッグ＆ドロップします。 

![Scroll Viewをストーリーボードに追加](assets/en/custom-detailform/add-scrollview-storyboard.png)

インタフェースビルダーの右側にある**サイズインスペクターパネル**でScroll Viewの幅を 359 に，高さを 667 に設定します。 X 座標を 8 に，Y 座標を 0 に設定しましょう。

![Scroll Viewの位置とサイズ](assets/en/custom-detailform/scrollview-position-height-width.png)

**制約を追加**ボタンをクリックし，下図のように制約が「Trailing（前） 8・Leading（後） 8・Top（上）: 0 Bottom（下） 0」となるように設定します。

![Scroll Viewの制約](assets/en/custom-detailform/scrollview-constraints.png)

## Vertical Stack Viewを追加する

**オブジェクトライブラリ**から「Vertical Stack View」をドラッグし，Scroll Viewの上にドロップします。 インタフェースビルダーの右側にある**サイズインスペクターパネル**で幅を 359 に，高さを 202 に設定します。 X 座標を 0 に，Y 座標を 8 に設定しましょう。

![Stack Viewをストーリーボードに追加](assets/en/custom-detailform/add-vertical-stackview-storyboard.png)

Stack Viewの幅と高さは，内包しているオブジェクトによって決まるため，サイズの制約はもう少し後に設定します。

## Stack Viewに他のViewを追加する

**オブジェクトライブラリ**からビューをドラッグし，ストーリーボードに追加したばかりのStack Viewにドロップします。 ビューの名前を**Field View 1**に変更します。

![Field View 1を追加](assets/en/custom-detailform/add-view1-storyboard.png)

**オブジェクトライブラリ**から別のビューをドラッグし，今度は画面の左側にツリー表示されているドキュメントのアウトラインに直接ドロップしましょう。Stack Viewの内部に収まるよう，Field View 1と同じレベルに挿入してください。その後，ビューの名前を**Field View 2**に変更します。

![Field View 2の追加](assets/en/custom-detailform/add-view2-storyboard.png)

ビュー同士の間隔を空けるために，属性インスペクターで「spacing」の値を 8 に変更します。

![Stack Viewの余白](assets/en/custom-detailform/stackview-spacing.png)

**Field View 1**と**Field View 2**の両方を選択し，インタフェースビルダー画面の右側にある**サイズインスペクターパネル**で幅を 359 に，高さを 97 に設定します。

![Viewの位置とサイズ](assets/en/custom-detailform/views-position-height-width-storyboard.png)

**Field View 1**を選択し，**制約を追加**ボタンをクリックして「Trailing（前） 0・Leading（後） 0・Top（上）: 0 」となるように３個の制約を設定します。

![Viewの制約](assets/en/custom-detailform/fieldView-1-Field-View-2-constraints.png)

Stack ViewがScroll Viewと同じ幅になるよう，もう１個の制約を追加します。

Controlキーを押しながらStack Viewをドラッグし，Scroll Viewに重ね合わせます。 マウスボタンを離すと同時に，ここで設定できる制約の選択肢が表示されます。 「Equal Width」を選択してください。

![等幅のStack View](assets/en/custom-detailform/stackview-equal-width-scrollview.png)

「Stack View」が選択された状態のまま，<0>制約を追加</0>ボタンをクリックし，下図のように制約が「Trailing（前） 0・Leading（後） 0・Top（上）: 8 Bottom（下） 0」となるように設定します。

![Stack Viewの制約](assets/en/custom-detailform/stackview-constraints.png)

制約が設定されると，下図のように表示が変化するはずです。

![Stack Viewの最終的な制約](assets/en/custom-detailform/stackview-constraints-final.png)

Stack Viewに２個ビューを追加し，制約もきちんと設定できました。Field View 1の作業に移りましょう。

## Field View 1にImage Viewを追加する

**オブジェクトライブラリ**から**Image View**をドラッグし，Field View 1の上にドロップします。

![Image Viewをストーリーボードに追加](assets/en/custom-detailform/add-imageview-storyboard.png)

インタフェースビルダー画面の右側にある**サイズインスペクターパネル**でImage Viewの幅を 359 に，高さを 97 に設定します。 X 座標を 0 に，Y 座標を 0 に設定しましょう。

![Image Viewの位置とサイズ](assets/en/custom-detailform/imageview-position-height-width.png)

<0>制約を追加</0>ボタンをクリックし，下図のように制約が「Trailing（前） 0・Leading（後） 0・Top（上）: 8 Bottom（下） 0」となるように設定します。

![Image Viewの制約](assets/en/custom-detailform/imageview-constraints.png)

**サイズインスペクター**で「Intrinsic Size」を**Default**から**Placeholder**に変更します。

![自動サイズのImage View](assets/en/custom-detailform/intrinsic-size-imageview.png)

## Field View 2にラベルを追加する

### Title ラベル

**オブジェクトライブラリ**から**Label**をドラッグし，Field View 2にドロップします。幅を 343 に，高さを 22 に設定します。 また，X座標を8に，Y座標も8に設定します。

![ラベル追加](assets/en/custom-detailform/add-label1-storyboard.png)

ラベルをダブルクリックし下記のように名称を変更します。```___FIELD_LABEL___``` **属性インスペクター**でフォントを**Helvetica Neue Light 18.0**に，カラーを**BackgroundColor**に設定します。

![タイトルのラベルフォントと文字カラー](assets/en/custom-detailform/title-label-font-and-color.png)

### Content ラベル

Title ラベルを複製し，幅を 339 に，高さを 44 に変更します。 X座標を 12 に，Y座標は 37 に設定します。

![ラベル追加](assets/en/custom-detailform/add-label2-storyboard.png)

ラベルをダブルクリックし下記のように名称を変更します。```<___FIELD_LABEL___>``` **属性インスペクター**でフォントを**Helvetica Neue Light 20.0**に，カラーを**Black Color**に設定します。

![内容のラベルフォントと文字カラー](assets/en/custom-detailform/content-label-font-and-color.png)

<0>制約を追加</0>ボタンをクリックし，下図のように制約が「Trailing（前） 8・Leading（後） Multiple・Top（上）: Multiple Bottom（下） Multiple」となるように設定します。

![タイトルラベルと内容ラベルの制約 ](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)

外観に関する設定がひと段落しました！ 制約の設定はこれで完了です！

## セルにフィールドが表示されるようにセットアップする

### Image View

Image Viewを選択し，**Identity inspector**（ウィンドウ右側パネルの身分証明書アイコンをクリック）のUser Defined Runtime Attributesにアクセスします。 行を追加するために**＋**ボタンをクリックします。

![ユーザー定義のランタイム属性](assets/en/custom-detailform/user-defined-runtime-attributes.png)

* **Key Path: **「bindTo」から始めることにより，コンポーネントとのバインディングが有効なります。 下記の要領で設定します。 ```bindTo.record.___FIELD_1___```

* **Type: **固定値です。 ```String```

* **Value: **属性名を入力します。 下記の要領で設定します。 ```___FIELD_1_BINDING_TYPE___```

![Identity inspector](assets/en/custom-detailform/identity-inspector-storyboard.png)

### ラベル

**first label**は，アイコンが表示できるようにコードを記述しましょう。

![Label 1 のユーザー定義ランタイム属性 ](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)

下記のようにClassを設定します。 ```IconLabel``` **Inherit Module From Target**のチェックボックスは有効にしておきます。

![Label 1 カスタムクラス](assets/en/custom-detailform/label1-custom-class.png)

**second label**を選択し，Defined Runtime Attributesに行を追加して下記のように入力します。

* **Key Path: **: ```bindTo.record.___FIELD___```

* **Type: **: ```String```

* **Value: **: ```___FIELD_BINDING_TYPE___```

![Label 2 のユーザー定義ランタイム属性 ](assets/en/custom-detailform/label2-user-defined-runtime-attributes.png)

## 繰り返し使用されるセルにタグを設定する

プロジェクトエディターで複数のフィールドをフォームに追加した場合，Field View 2は何度も複製されることになります。

ストーリーモード内の要素には，固有のオブジェクトIDが割り振られています。 試しに，Field View 2を選択し，**アイデンティティインスペクター**に目を移してください。オブジェクトIDが表示されているはずです。

![オブジェクトID ストーリーボード](assets/en/custom-detailform/object-id-storyboard.png)

プロジェクトエディターに対し，このビューに含まれる要素はまとmて複製されるべきグループに属していることを知らせるため，要素とタグのそれぞれにタグを設定することが必要です。

ひとつずつ変更するのは，なかなか面倒ですし，途中でミスをしてしまうかもしれません。 ここはストーリーボードファイルを使い慣れたコードエディターで開いて作業を進めることにしましょう！

### Field View 2

* **Field View 2**を選択し，アイデンティーインスペクター（インタフェースビルダー画面の右側）からオブジェクトIDをコピーします。 このプロジェクトの場合，Field View 2のオブジェクトIDは**SiX-3H-lNB**となっています。

* ストーリーボードXMLファイル内でこのIDを検索し，すべての出現箇所で**TAG-FD-001**に置換します。 オブジェクトIDは，何度か出現するので，見落とさないように気をつけましょう！

![ストーリーボード xml](assets/en/custom-detailform/storyboard-xml.png)

ストーリーボードXMLファイルを保存します。 Xcodeに表示されるField View 2のオブジェクトIDが変化していることに注目してください。

![Field View 2 のオブジェクトID](assets/en/custom-detailform/field-view-2-object-id.png)

### First label

* **first label**のオブジェクトIDをアイデンティーインスペクターからコピーし，ストーリーボードXMLファイル内で**TAG-FD-002**に一括置換します。

![Label 1 のオブジェクトID](assets/en/custom-detailform/label1-object-id.png)

これで一丁あがり，ですね！

### Second label

* 今度は**second label**のオブジェクトIDをアイデンティーインスペクターからコピーし，ストーリーボードXMLファイル内で**TAG-FD-003**に一括置換します。

![Label 2 のオブジェクトID](assets/en/custom-detailform/label2-object-id.png)

うまく置換できました！

### 制約にタグを設定する

どちらのラベルも制約があるので，タグを設定する必要があります。

![タグの制約](assets/en/custom-detailform/duplicated-constraints.png)

View Field 2とラベルに対して実行したのと同じ要領で，アイデンティーインスペクターから７個の**制約**のオブジェクトIDをコピーし，**TAG-FD-004**，**TAG-FD-005**，**TAG-FD-006**，**TAG-FD-007**，**TAG-FD-008**，**TAG-FD-009**，**TAG-FD-010**に変更します。

プロジェクトエディターの「フォーム」セクションで自作の詳細フォームのテンプレートを選択し，「ビルド」をクリックします。

![カスタム詳細画面テンプレート](assets/en/custom-detailform/custom-detail-template-forms.png)

カスタム詳細画面が作成できました！ :)

![iPhone画面](assets/en/custom-detailform/iphone-demo.png)

Field View 2をコピーすることができました。 しかし，アプリにもう少し彩りを添えることはできないでしょうか。

### アプリをカスタマイズする

Image ViewおよびField View 2に角の丸みを追加しましょう。

Image Viewを選択し，User Defined Runtime Attributesにユーザー定義属性を入力します。

* **Key Path: **: ```cornerRadius```

* **Type: **: ```Number```

* **Value: **: ```12```

その他

* **Key Path: **: ```layer.masksToBounds```

* **Type: **: ```Boolean```

* **Value**: 有効

![iPhone画面](assets/en/custom-detailform/imageview-corner-radius.png)

Field View 2を選択し，下記のように設定します。

* **Key Path: **: ```cornerRadius```

* **Type: **: ```Number```

* **Value: **: ```12```

![iPhone画面](assets/en/custom-detailform/fieldview2-corner-radius.png)

これでカスタムテンプレートがプロジェクトエディターで使用できるようになりました！

![カスタムテンプレート（完成）](assets/en/custom-detailform/custom-template-final-result.png)

## これからどうする？

このレッスンでは，詳細画面のカスタムテンプレートを作成する方法を紹介しました。 素材プロジェクトから始めて，シンプルなカスタムテンプレートが簡単に自作できる，という手応えが得られたのではないでしょうか。 今回のまとめは**カスタム詳細画面の完成テンプレート**からダウンロードすることができます。

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip">カスタム詳細画面の完成テンプレート</a>

  </p>
</div>