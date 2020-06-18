---
id: creating-data-formatter
title: カスタムのデータフォーマッター
---
<div class = "objectives"> 

**目的**

Create your first data formatters.</div> <div class = "prerequisites"> 

**必要条件**

Click [here](prerequisites.html) to see what you'll need to get started!</div> 

このチュートリアルでは、様々なフォーマッターの例を作成していくことを案内していきます。

## スタータープロジェクトをダウンロードする

To begin, download the **Starter Project**, which includes:

* **integerToImage_Images** and **textToImage_Images** folders that contain images (to use later for formatters that include images)
* A **Task Management.4dbase** file (with a ready to use mobile app project)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-formatter/CustomFormatterStarterProject.zip">カスタムフォーマッターのスタータープロジェクトはこちらから</a>

  </p>
</div>

これでフォーマッターを作成する準備が整いました！

## formatters フォルダを作成

まず、Task Management.4dbase のデータと同じ階層に .../Resources/Mobile/formatters フォルダを作成します。

![Formatter フォルダ](assets/en/custom-formatter/formatter-folder.png)

## 整数用フォーマッター

### 整数から文字列へ

* Create an **integerToString** folder in the formatters folder you've just created.
* Then create a **manifest.json** file in the **integerToString** folder.

![Formatter フォルダ](assets/en/custom-formatter/formatter-folder-integertostring.png)

Let's look at the contents of the **manifest.json** file:

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

* Create an **integerToImage** folder in the **formatters** folder you've created.

* Create a **manifest.json** file in the **integerToImage** folder.

![Formatter フォルダ](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* Then create an **Images** folder in the **integerToImage** folder. You can add the images from the **integerToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)

Let's look at the contents of the **manifest.json** file:

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

* Create a **textToString** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToString** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)

Let's look at the contents of the **manifest.json** file:

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

* Create a **textToImage** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToImage** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)

* Then create an **Images** folder in the **textToImage** folder. You can add the images from the **textToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)

Let's look at the contents of the **manifest.json** file:

    <br />{
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

Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**

Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you previously defined in the different formatter manifest.json files:

* Select the **integerToString** formatter for the **Job field**
* Select the **textToString** formatter for the **Country field**
* Select the **integerToImage** formatter for the **Task Status**
* Select the **textToImage** formatter for the **Manager**

![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)

## 自分の4D for iOS アプリをビルドする

Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.

![Text formatter](assets/en/custom-formatter/formatters-final-result.png)

Click on **FORMATTER FINAL** below to download the completed formatter template folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-formatter/CustomFormattersFinalProject.zip">FORMATTER FINAL</a>

  </p>
</div>