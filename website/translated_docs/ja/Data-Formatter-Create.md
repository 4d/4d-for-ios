---
id: creating-data-formatter
title: カスタムのデータフォーマッター
---

<div class = "objectives"> 

**目的**

最初のデータフォーマッターを作成すること</div> <div class = "prerequisites"> 

**必要条件**

始めるために必要なものについては[ここ](prerequisites.html)をクリックして下さい。</div> 

このチュートリアルでは、様々なフォーマッターの例を作成していくことを案内していきます。

## スタータープロジェクトをダウンロードする

まず最初に**スタータープロジェクト**をダウンロードしてください。これには以下のものが含まれます:

* **integerToImage_Images** および **textToImage_Images** フォルダとそれに格納される画像(あとで画像を含むフォーマッターで使用します)
* **Task Management.4dbase** ファイル(およびすぐに使用できるモバイルアプリプロジェクト)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">カスタムフォーマッターのスタータープロジェクトはこちらから</a>

  </p>
</div>

これでフォーマッターを作成する準備が整いました！

## formatters フォルダを作成

まず*Task Management.4dbase/Resources/Mobile/formatters* フォルダを作成します。

![Formatter フォルダー](assets/en/custom-formatter/formatter-folder.png)

## 整数用フォーマッター

### 整数から文字列へ

* 作成したformatters フォルダ内に**integerToString** フォルダを作成します。
* 次に、**integerToString** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダー](assets/en/custom-formatter/formatter-folder-integertostring.png)

**manifest.json** ファイルの中身を見てみましょう:

```json
{
   "name": "integerToString",

   "type": ["integer"],

   "binding": "localizedText",

   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
}
```

1. **name**: フォーマッターの名前
2. **type**: 使用したい4D フォーマット型
3. **binding**: 文字列なら**localized text** 、あるいは画像なら**imageNamed**
4. **choiceList**: マップされた値

### 整数から画像へ

* 作成した**formatters** フォルダ内に**integerToImage** フォルダを作成します。

* **integerToImage** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダー](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* 次に、**integerToImage** フォルダ内に**Images** フォルダを作成します。 StarterProject.zip ファイル内の**integerToImage_Images** にある画像をここに追加することができます。

![フォーマッターで使用する画像](assets/en/custom-formatter/formatter-images-integertoimage.png)

**manifest.json** ファイルの中身を見てみましょう:

```json
{
    "name": "integerToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},

   "assets": {
      "size": {
         "width": 40, "height": 40
      }
    }
}
```

1. **name**: フォーマッターの名前
2. **type**: 使用したい4D フォーマット型
3. **binding**: 文字列なら**localized text** 、あるいは画像なら**imageNamed**
4. **choiceList**: マップされた値
5. **assets**: ディスプレイサイズの調整(幅と高さ)

## テキストフォーマッター

### テキストから文字列へ

* 作成したformatters フォルダ内に**textToString** フォルダを作成します。

* 次に、**textToString** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダー](assets/en/custom-formatter/formatter-folder-texttostring.png)

**manifest.json** ファイルの中身を見てみましょう:

```json
{
    "name": "textToString",

   "type": ["text"],

   "binding": "localizedText",

   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
}
```

1. **name**: フォーマッターの名前
2. **type**: 使用したい4D フォーマット型
3. **binding**: 文字列なら**localized text** 、あるいは画像なら**imageNamed**
4. **choiceList**: マップされた値

### テキストから画像へ

* 作成したformatters フォルダ内に**textToImage** フォルダを作成します。

* 次に、**textToImage** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダー](assets/en/custom-formatter/formatter-folder-textToImage.png)

* 次に、**textToImage** フォルダ内に**Images** フォルダを作成します。 StarterProject.zip ファイル内の**textToImage_Images** にある画像をここに追加することができます。

![フォーマッターで使用する画像](assets/en/custom-formatter/formatter-images-textToImage.png)

**manifest.json** ファイルの中身を見てみましょう:

```json
{
    "name": "textToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": ["image1.png","image2.png","image3.png"],

   "assets": {
  "size": {
   "width": 40, "height": 40
        }
    }
}

```

## モバイルプロジェクトを開く

Task Management.4dbase を4D 開き、メニューから ファイル > 開く > モバイルプロジェクト... を選択し、 **Tasks** を開きます。

次に、プロジェクトエディター内の**ラベル & アイコンセクション** を開きます。 それぞれのmanifest.json ファイル内で事前に定義した異なるフィールド型に対する全てのフォーマッターが利用可能です:

* **Job field** に対しては**integerToString** フォーマッターを選択します。
* **Country field** に対しては**textToString** フォーマッターを選択します。
* **Task Status** に対しては**integerToImage** フォーマッターを選択します。
* **Manager** に対しては**textToImage** フォーマッターを選択します。

![文字列を使用したフォーマッター](assets/en/custom-formatter/formatters-icons-&-labels.png)

## 自分の4D for iOS アプリをビルドする

4D for iOS アプリをビルドすると、クレジットの限度額に応じてデータフォーマッターが適切に適用されているのが分かります。

![文字列を使用したフォーマッター](assets/en/custom-formatter/formatters-final-result.png)

以下の**FORMATTER FINAL** をクリックして、完成されたフォーマッターテンプレートのフォルダをダウンロードして下さい。

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">完成プロジェクト</a>

  </p>
</div>