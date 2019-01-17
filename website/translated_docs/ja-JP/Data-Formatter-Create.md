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

まず初めに、**スタータープロジェクト**をダウンロードして下さい。これには次のものが含まれています: * **integerToImage_Images**および**textToImage_Images** フォルダを格納しているimages フォルダ(後ほど画像を含むフォーマッターに対して使用します) * **Task Management.4dbase** ファイル(および既に使用可能なモバイルアプリプロジェクト)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormatterStarterProject.zip">カスタムフォーマッターのスタータープロジェクトはこちらから</a>

  </p>
</div>

これでフォーマッターを作成する準備が整いました！

## formatters フォルダを作成

まず、Task Management.4dbase のデータと同じ階層に .../Resources/Mobile/formatters フォルダを作成します。

![Formatter folder](assets/custom-formatter/formatter-folder.png)

## 整数用フォーマッター

### 整数から文字列へ

* 作成したformatters フォルダ内に**integerToString** フォルダを作成します。

* 次に、**integerToString** フォルダ内に**manifest.json** ファイルを作成します。

![Formatter folder](assets/custom-formatter/formatter-folder-integertostring.png)

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

![Formatter folder](assets/custom-formatter/formatter-folder-integertoimage.png)

* 次に、**integerToImage** フォルダ内に**Images** フォルダを作成します。 StarterProject.zip ファイル内の**integerToImage_Images** にある画像をここに追加することができます。
    
    ![Formatter images](assets/custom-formatter/formatter-images-integertoimage.png)

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

![Formatter folder](assets/custom-formatter/formatter-folder-texttostring.png)

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

![Formatter folder](assets/custom-formatter/formatter-folder-textToImage.png)

* 次に、**textToImage** フォルダ内に**Images** フォルダを作成します。 StarterProject.zip ファイル内の**textToImage_Images** にある画像をここに追加することができます。

![Formatter images](assets/custom-formatter/formatter-images-textToImage.png)

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

次に、プロジェクトエディター内の**ラベル & アイコンセクション** を開きます。 All of your formatters are available for the different field types you previously defined in the different formatter manifest.json files:

* Select the **integerToString** formatter for the **Job field**
* Select the **textToString** formatter for the **Country field**
* Select the **integerToImage** formatter for the **Task Status**
* Select the **textToImage** formatter for the **Manager**

![Text formatter](assets/custom-formatter/formatters-icons-&-labels.png)

## Build your 4D for iOS app

Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.

![Text formatter](assets/custom-formatter/formatters-final-result.png)

Click on **FORMATTER FINAL** below to download the completed formatter template folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormattersFinalProject.zip">FORMATTER FINAL</a>

  </p>
</div>