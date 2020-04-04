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

The first step is including the button.xib button into your custom template so that 4D for iOS can use it.

To use the button, you just need to drop it in the ```YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact``` folder.

![カスタムボタンのパス](assets/en/relations/Relation-custom-button-path.png)

The first step is done!

## Modify the button

Open the .xib file with Xcode.

It should look like this:

![カスタムリレーションボタン](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS.png)

And from the attribute inspector, you can change for example:

* colors and fonts
* the button style
* the button size...

Let's change the button color and the button label font!

### Custom colors and fonts

Select the button and change the color and font from the attribute inspector.

For the background, let's select the Label Color to have the best contrast in Light and Dark mode.

For the font color let's put a System background color with a helvetica Neue Medium font.

Finally, don't forget to select the System background color Tint to apply this color to the button icon.

![カスタムリレーションボタン](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)

You should get this result in your Simulator in Dark and in Light mode:

![カスタムリレーションのカラーとフォント](assets/en/relations/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)

### Button round corners

Let's add some round corners to the relationButton!

To do so, open the Identity Inspector.

Select your Button and add the two following lines in the User Defined Runtime Attributes:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

and

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: Check the box

![カスタムリレーションのカラーとフォント](assets/en/relations/Custom-relation-button-Xcode-round-corners.png)

これでカスタムテンプレートがプロジェクトエディターで使用できるようになりました！

The result should look like this:

![カスタムリレーションのカラーとフォント](assets/en/relations/Custom-relation-button-round-corners.png)

### Size and constraints

Keep in mind that if you **add constraints** into your button, you will also have to modifiy the xib xml file to **add some TAGS** as for custom Detail form templates. This allows the button to be well duplicated when several relations are available in the same detail view.

How convenient, since we plan on adding a few constraints!

#### Add constraints

For this tutorial, we are just going to add a button height because we want it to look bigger on the screen.

Step 1. First select the view and change the height from 123 to 40

![ボタンビューの高さ](assets/en/relations/Button-view-height.png)

Step 2. Double click on the **Top Space Constraint** and change it from 8 to 0

![上部余白の制約](assets/en/relations/Top-Space-constraint.png)

Step 3. Do the same thing with **Bottom Space Constraint** and change it from 8 to 0

You should get this:

![カスタムボタンの制約](assets/en/relations/Custom-button-constraints.png)

Step 4. Add a height constraint of 40

![ボタンの高さ制約](assets/en/relations/Button-height-constraint.png)

You should get this:

![コンテナ内で水平](assets/en/relations/Custom-relation-button-constraints.png)

In order to indicate in the project editor that all of the elements included in this view will be duplicated, we need to add a TAG to each element and constraint.

### Add TAGS

Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the **Identity inspector**, you'll see its Object ID:

![オブジェクトID ストーリーボード](assets/en/relations/Custom-button-object-id-storyboard.png)

The process is a little bit tricky... So let's begin by opening the storyboard file with your favorite code editor!

#### Add a tag to the height constraint

Step 1. Select it from the Storyboard to get the Object ID

![水平制約オブジェクトのID](assets/en/relations/Horizontal-constraint-object-ID.png)

Step 2. Search for this ID in the xml file and put **TAG-RL-007** instead (a Tag that is not already used).

Step 3. Save the xml file

![水平制約のXMLファイル](assets/en/relations/Horizontal-constraint-xml-file.png)

Step 4. Focus on the Storyboard to check if the constraint has been updated correctly

![水平制約オブジェクトのID更新](assets/en/relations/Horizontal-object-id-updated.png)

And that's it! Your button is now fully duplicable if you have more that one relation button to display...

## これからどうする？

In this tutorial, we've covered the basics for creating custom relation buttons. Click on Final Project below to download the custom relation button.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip">カスタムボタンの完成プロジェクト</a>

  </p>
</div>