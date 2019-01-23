---
id: creating-data-formatter
title: カスタムのデータフォーマッター
sidebar_label: カスタムのデータフォーマッター
---
<div class = "objectives"> 

**目的**

* 最初のデータフォーマッターを作成すること</div> <div class = "prerequisites"> 

**必要条件**

* 始めるために必要なものについては[ここ](prerequisites.html)をクリックして下さい。</div> 

このチュートリアルでは、様々なフォーマッターの例を作成していくことを案内していきます。

## スタータープロジェクトをダウンロードする

To begin, download the **Starter Project**, which includes: * **integerToImage_Images** and **textToImage_Images** folders that contain images (to use later for formatters that include images) * A **Task Management.4dbase** file (with a ready to use mobile app project)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormatterStarterProject.zip">カスタムフォーマッターのスタータープロジェクトはこちらから</a>

  </p>
</div>

これでフォーマッターを作成する準備が整いました！

## formatters フォルダを作成

まず、Task Management.4dbase のデータと同じ階層に .../Resources/Mobile/formatters フォルダを作成します。

![Formatter フォルダ](assets/custom-formatter/formatter-folder.png)

## 整数用フォーマッター

### 整数から文字列へ

* 作成したformatters フォルダ内に**integerToString** フォルダを作成します。

* 次に、**integerToString** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダ](assets/custom-formatter/formatter-folder-integertostring.png)

* ここで**manifest.json** ファイルの中身を見てみましょう:

    {
        // 1
        "name": "integerToString",
    
        // 2
       "type": ["integer"],
    
       // 3
       "binding": "localizedText",
    
       // 4
       "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
    }
    

1. **name**: フォーマッターの名前
2. **type**: 使用したい4D フォーマット型
3. **binding**: 文字列なら**localized text** 、あるいは画像なら**imageNamed**
4. **choiceList**: マップされた値

### 整数から画像へ

* 作成した**formatters** フォルダ内に**integerToImage** フォルダを作成します。

* 次に、**integerToImage** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダ](assets/custom-formatter/formatter-folder-integertoimage.png)

* 次に、**integerToImage** フォルダ内に**Images** フォルダを作成します。 StarterProject.zip ファイル内の**integerToImage_Images** にある画像をここに追加することができます。
    
    ![フォーマッター画像](assets/custom-formatter/formatter-images-integertoimage.png)

* **manifest.json** ファイルの中身を見てみましょう:

    {
        // 1
        "name": "integerToImage",
    
        // 2
       "type": ["integer"],
    
        // 3
       "binding": "imageNamed",
    
        // 4 
       "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},
    
        // 5
       "assets": {
      "size": {
       "width": 40, "height": 40
            }
        }
    }
    

1. **name**: フォーマッターの名前
2. **type**: 使用したい4D フォーマット型 
3. **binding**: 文字列なら**localized text** 、あるいは画像なら**imageNamed**
4. **choiceList**: マップされた値
5. **assets**: ディスプレイサイズの調整(幅と高さ)

## テキストフォーマッター

### テキストから文字列へ

* 作成したformatters フォルダ内に**textToString** フォルダを作成します。

* 次に、**textToString** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダ](assets/custom-formatter/formatter-folder-texttostring.png)

* **manifest.json** ファイルの中身を見てみましょう:

    {
        // 1
        "name": "integerToImage",
    
        // 2
       "type": ["text"],
    
       // 3
       "binding": "localizedText",
    
       // 4
       "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
    }
    

1. **name**: フォーマッターの名前
2. **type**: 使用したい4D フォーマット型
3. **binding**: 文字列なら**localized text** 、あるいは画像なら**imageNamed**
4. **choiceList**: マップされた値

### テキストから画像へ

* 作成したformatters フォルダ内に**textToImage** フォルダを作成します。

* 次に、**textToImage** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter フォルダ](assets/custom-formatter/formatter-folder-textToImage.png)

* 次に、**textToImage** フォルダ内に**Images** フォルダを作成します。 StarterProject.zip ファイル内の**textToImage_Images** にある画像をここに追加することができます。

![フォーマッター画像](assets/custom-formatter/formatter-images-textToImage.png)

**manifest.json** ファイルの中身を見てみましょう:

    {
        // 1
        "name": "textToImage",
    
        // 2
       "type": ["integer"],
    
       // 3
       "binding": "imageNamed",
    
       // 4
       "choiceList": ["image1.png","image2.png","image3.png"],
    
        // 5
       "assets": {
      "size": {
       "width": 40, "height": 40
            }
        }
    }
    

## モバイルプロジェクトを開く

Task Management.4dbase を4D 開き、メニューから ファイル > 開く > モバイルプロジェクト... を選択し、 **Tasks** を開きます。

次に、プロジェクトエディター内の**ラベル & アイコンセクション** を開きます。 それぞれのmanifest.json ファイル内で事前に定義したフィールド型に対する全てのフォーマッターが利用可能です:

* **Job field** に対しては**integerToString** フォーマッターを選択します。
* **Country field** に対しては**textToString** フォーマッターを選択します。
* **Task Status** に対しては**integerToImage** フォーマッターを選択します。
* **Manager** に対しては**textToImage** フォーマッターを選択します。

![テキストフォーマッター](assets/custom-formatter/formatters-icons-&-labels.png)

## 自分の4D for iOS アプリをビルドする

4D for iOS アプリをビルドすると、クレジットの限度額に応じてデータフォーマッターが適切に適用されているのが分かります。

![テキストフォーマッター](assets/custom-formatter/formatters-final-result.png)

以下の**FORMATTER FINAL** をクリックして、完成されたフォーマッターテンプレートのフォルダをダウンロードして下さい。

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormattersFinalProject.zip">FORMATTER FINAL</a>

  </p>
</div>