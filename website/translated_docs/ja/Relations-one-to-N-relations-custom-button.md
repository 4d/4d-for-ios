---
id: one-to-many-relations-custom-button
title: １対Ｎカスタムボタン
---

これまですでに学んだように，4D for iOSでは，いろいろなものがカスタマイズできるようになっています。

テンプレートやフォーマッターだけでなく，リレーションボタンもカスタマイズできます。

しかも，その手順はとても簡単！ カスタムテンプレートにカスタムボタンをドラッグ＆ドロップするだけです。

素材プロジェクトをダウンロードしてください。下記のものは収録されています。

* データベースとモバイルプロジェクト
* 標準のリレーションボタン

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip">素材プロジェクト - カスタムボタン</a>

  </p>
</div>

## ボタンを追加する

まず，ボタン「button.xib」を4D for iOSで使用できるように，カスタムテンプレートに追加しましょう。

このボタンが使用できるようにするには： ```YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact``` 上記のフォルダーにファイルを置きます。

![カスタムボタンのパス](assets/en/relations/Relation-custom-button-path.png)

簡単ですね！

## ボタンの設定

Xcodeで「.xib」ファイルを開きます。

このように表示されるはずです。

![カスタムリレーションボタン](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS.png)

属性インスペクターでさまざまな項目の値を変更することができます。

* カラーとフォント
* ボタンのスタイル
* ボタンのサイズ

ボタンのカラーとラベルフォントを変えてみましょう！

### カラーとフォントのカスタマイズ

ボタンを選択し，属性インスペクターに新しいカラーとフォント名を入力します。

背景には，ライトモードとダークモードのそれぞれで最良のコントラストになるように「Label Color 」を選択しましょう。

フォントカラーは「System Background Color（システム背景色）」，フォント名は「Helvetica Neue Medium」に設定します。

ボタンのアイコンに「System Background Color Tint（色合い）」を適用することも忘れないようにしましょう。

![カスタムリレーションボタン](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)

シミュレーターでダークモードとライトモードそれぞれの結果を確かめます。

![カスタムリレーションのカラーとフォント](assets/en/relations/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)

### ボタンの角の丸み

今度はrelationButtonの角に丸みをつけてみましょう！

アイデンティティーインスペクターを開きます。

ボタンを選択して「User Defined Runtime Attributes」に下記の２行を記述します。

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

その他

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: 有効

![カスタムリレーションのカラーとフォント](assets/en/relations/Custom-relation-button-Xcode-round-corners.png)

これでカスタムテンプレートがプロジェクトエディターで使用できるようになりました！

下図のように表示が変化していれば成功です。

![カスタムリレーションのカラーとフォント](assets/en/relations/Custom-relation-button-round-corners.png)

### サイズと制約

カスタム詳細フォームのテンプレートと同じように，ボタンに**制約を追加**するのであれば，「xib」ファイルにXML**タグを追加**する必要もあることに留意してください。 タグを追加することにより，同一の詳細ビュー内で複数のリレーションを表示するためにこのボタンを使い回したとしても，ボタンが正しく機能するようになります。

そのことを踏まえ，ボタンに制約を設定してみましょう！

#### 制約を追加する

このチュートリアルでは，画面上でおおきく表示されるように，ボタンの高さに制約を追加する場合を考えます。

⒈ ビューを選択し，高さを123から40に変更します。

![ボタンビューの高さ](assets/en/relations/Button-view-height.png)

⒉ **Top Space Constraint**をダブルクリックし，値を8から0に変更します。

![上部余白の制約](assets/en/relations/Top-Space-constraint.png)

⒊ 同じように**Bottom Space Constraint**の値を8から0に変更します。

下図のようになっていれば成功です。

![カスタムボタンの制約](assets/en/relations/Custom-button-constraints.png)

⒋ 高さの制約「40」を追加します。

![ボタンの高さ制約](assets/en/relations/Button-height-constraint.png)

下図のようになっていれば成功です。

![コンテナ内で水平](assets/en/relations/Custom-relation-button-constraints.png)

プロジェクトエディターに対し，このビュー内の全要素が一緒に複製されるべきであることを示すため，それぞれの要素と制約にタグを追加します。

### タグを追加する

ストーリーボードの要素には，オブジェクトIDが存在します。 試しに，Field View 2を選択し，**アイデンティティインスペクター**に目を移してください。オブジェクトIDが表示されているはずです。

![オブジェクトID ストーリーボード](assets/en/relations/Custom-button-object-id-storyboard.png)

ひとつずつ変更するのは，なかなか面倒ですし，途中でミスをしてしまうかもしれません。 アイデンティティーインスペクターで操作するのは大変なので，ここはコードエディターでストーリーボードファイルを開き，効率的に作業を進めることにしましょう！

#### 高さの制約にタグを追加する

⒈ ストーリーボード内で要素のオブジェクトIDを選択してコピーします。

![水平制約オブジェクトのID](assets/en/relations/Horizontal-constraint-object-ID.png)

⒉ XMLファイル内でこのIDを検索し，**TAG-RL-007**（未使用のタグ）で置換します。

⒊ XMLファイルを保存します。

![水平制約のXMLファイル](assets/en/relations/Horizontal-constraint-xml-file.png)

⒋ ストーリーボードのウィンドウにフォーカスを移動し，制約が正しく更新されていることを確認します。

![水平制約オブジェクトのID更新](assets/en/relations/Horizontal-object-id-updated.png)

おつかれさまでした！ 表示したいリレーションが複数あったとしても，このボタンを複製して使用することができるようになりました。

## これからどうする？

このチュートリアルでは，カスタムリレーションボタンを作成する方法を習得しました。 カスタムボタンの完成プロジェクトは下記のリンクからダウンロードすることができます。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip">カスタムボタンの完成プロジェクト</a>

  </p>
</div>