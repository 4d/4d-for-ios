
---
id: draft-form
title: Form templating
sidebar_label: Create a form template
---

🚧 Maybe create a page for list form, one for detail form

## Table form template?

🚧 Info a lié avec le reste de la doc si existe déjà

There is two types of table form, list and detail one.
* List form allow to display a list of record
* Detail form allow to show one record

You must create a folder under your `Resources` database folder 
`/mobile/form/`
 
## How to create a list form template?

To create a list form template you need to create a folder under your database folder inside `Resources/mobile/form/list/<template name>`

Name it as your template name.

Then you need to create a basic description file named manifest.json
XXX sample
```json
{
  "type": "listform",
  "name": "Your Template Name"
}

```

Then the template contains two mandatory files, the storyboard file (ListForm<TableName>.storyboard) and the code file (ListForm<TableName>.swift).
* First one contains the graphical interface description, the [storyboard](Storyboard)
* Then the second one is a swift file, which contains basic code for the form.

🚧 dans un tuto plutot parlé de copié collé un template existant qu’on file en lien car on n’a pas permis de faire simplement dans l’interface


### The storyboard file

The file must be under
`/mobile/form/list/YourTemplateName/Sources/Forms/Tables/___TABLE___/`
and named `___TABLE___ListForm.storyboard`

The [storyboard](Storyboard) contains a description of graphical interface for one row, one record (called a “ prototype cell” in iOS).

You define in this cell, the graphical components to display the records data, mainly `UILabel` and `UIImageView`.
You can learn more about it in [UIKit framework](UIKit) reference page.

Then you must assign [TAG](Tags) to bind records data to your graphical component.

🚧 explain user defined attribute and binding https://project.4d.com/projects/4d/wiki/IOS_Storyboards#Binding

### The swift code file

The file must be under `/mobile/form/list/YourTemplateName/Sources/Forms/Tables/___TABLE___/` and named `___TABLE___ListForm.swift`

This file contains code for the current table. You can here add custom code to change your list form by editing it.


```swift
import UIKit
import QMobileUI

/// Generated list form for ___TABLE___ table.
@IBDesignable
class ___TABLE___ListForm: ListForm___LISTFORMTYPE___ {

    // Do not edit name or override tableName
    public override var tableName: String {
        return "___TABLE___"
    }

    // MARK: Events
    override func onLoad() {
        // Do any additional setup after loading the view.
    }

    override func onWillAppear(_ animated: Bool) {
        // Called when the view is about to made visible. Default does nothing
    }

    override func onDidAppear(_ animated: Bool) {
        // Called when the view has been fully transitioned onto the screen. Default does nothing
    }

    override func onWillDisappear(_ animated: Bool) {
        // Called when the view is dismissed, covered or otherwise hidden. Default does nothing
    }

    override func onDidDisappear(_ animated: Bool) {
        // Called after the view was dismissed, covered or otherwise hidden. Default does nothing
    }

}
```



#### Type of list forms

There is two types, `ListFormTable` and `ListFormCollection`, derivated respectively from `UITableViewController` and `UICollectionViewController`, two iOS [UIKit](UIKit) widget to display list of data.

Why two?
* The first one `ListFormTable ` allow to display only vertical list, and in most case this is sufficient.
* The second one `ListFormCollection ` allow to have more fancy [layout](https://developer.apple.com/documentation/uikit/uicollectionviewlayout) (vertical scrolling, special animations, etc…)

🚧  add the next sentences in div
The swift code file above show a `___LISTFORMTYPE___` tag that you can replace by `Table` or `Collection` when know the type of list form.


### Add a custom image for the form selector

Put an image of size xxx named yyy under zzzz
🚧 

### Create the svg file
🚧 

## How to create a detail form template?

To create a detail form template you need to create a folder under your database folder inside `Resources/mobile/form/detail/<template name>`

### manifest json file

Basic file could be defined as follow.

```json
{
  "type": "detailform",
  "name": "Your Template Name"
}
```

### Type of detail form

`DetailFormBare` extends the iOS [UIKit](UIKit) basic controller `UIViewController`, a simple view where you can add any graphical widget.

If you need to use an `UITableViewController` you can use `DetailFormTable`, but this not recommended.

### The storyboard and fields

Same as list form you can choose to display a limited number of fields.

The fields are tagged from 1 to N, N is the total number of fields.

After adding your graphical widget, you must provide [TAG](Tags) like with list forms.


#### How to have an “infinite” number of fields?

🚧 Maybe create a specific page for this case

To not be limited by a predefined number of fields, the details form provide a mechanism to duplicate the last field widget as many times as you want.

But to do so you must follow a number of technical constrains.
* The last field must be placed in an iOS stack view (`UIStackView`)
* You must define [TAG](Tags) differently, without putting the index for the fields
* You must edit the storyboard file to change the ID and follow the rule described in [TAG Storyboard ID section](Tags). Each xml node id must be replaced or Xcode will not accept your storyboard when building the application.
* You must edit your svg file ,… 🚧 


### Other advanced information

🚧 asset, you can define in asset the size of the image generated for fields

```json
{
  "type": "detailform",
  "name": "Your Template Name”,
  "assets": {
    "size": {
      "width": 22,
      "height": 22
    }
  }
}
```
🚧 to optimise you can defined the number of fields in manifest
```json
{  
  "type": "detailform",
  "name": "Your Template Name”,
  "fields": {
    "count": 3
  }
}
```

🚧 …