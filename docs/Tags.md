
# Tags

Tags are used to inject useful information during the project creation process.

Projects files, storyboards and swift code files are managed by this process.


## File and folder name

|Tags|Description|
|---|---|
|`___PRODUCT___`|Product name|
|`___TABLE___`|Name of the 4D table currently managed by template|

## .swift file header

In any swift file you could find in header basic information after the file name as follow:

```swift
//  ___PACKAGENAME___
//
//  Created by ___FULLUSERNAME___ on ___DATE___
//  ___COPYRIGHT___
```

|Tags|Description|
|---|---|
|`___DATE___`| File creation date. Using format defined by RFC 1123. `String(Current date;Date RFC 1123;Current time)`|
|`___FULLUSERNAME___`|The copyright information you defined in the project editor|
|`___PACKAGENAME___`|The name of your project as you defined in the project editor|
|`___COPYRIGHT___`|The copyright information you defined in the project editor|


## storyboard

|Tags|Description|
|---|---|
|`___PRODUCT___`|Product name, used to define the module of the used objects.|

### List form

|Tags|Description|
|---|---|
|`___SEARCHABLE_FIELD___`| Field name used to search data in list form. (optional) |
|`___SECTION_FIELD___`| Field name used to categorize record using sections. (optional)|
|`___SHOW_SECTION___`| Show or not a section index.  |
|`___SORT_FIELD___`| Field name used to sort displayed data. |
			
			
### Table definitions

Information defined in Structure panel.

|Tags|Description|
|---|---|
|`___TABLE_LABEL___`| Label of the table|
|`___TABLE_SHORT_LABEL___"`| A shorted label for the table|
|`___TABLE_ICON___"`| Icon name if any |

### Fields

Fields are displayed on ListForm and DetailsForm

#### Positioned fields

N position of the fields, as defined when assigning fields to form.

|Tags|Description|
|---|---|
|`___FIELD_N___`|swift name of the field (no space, start with lowercase character) |
|`___FIELD_N_LABEL___`|Label of the field|
|`___FIELD_N_SHORT_LABEL___`|A shorted label for the field|
|`___FIELD_N_TYPE___`|ype used to bind data into iOS graphical component|
|`___FIELD_N_ICON___`|Icon name if any|
|`___FIELD_N_LABEL_ALIGNMENT___`|If there is icon label could be left aligned, else could be centered|

#### Duplicated fields

Storyboard XML  node element could be duplicated to have finally an "infinite" number of fields.
In this case there is no position in tag and XML.

|Tags|Description|
|---|---|
|`___FIELD___`|swift name of the field (no space, start with lowercase character) |
|`___FIELD_LABEL___`|Label of the field |
|`___FIELD_SHORT_LABEL___`|A shorted label for the field|
|`___FIELD_TYPE___`|Type used to bind data into iOS graphical component|
|`___FIELD_ICON___`|Icon name if any|
|`___FIELD_LABEL_ALIGNMENT___`|If there is icon label could be left aligned, else could be centered|

##### Storyboard ID

Each elements of storyboard have a specific xml id and each must be different.
When duplicating XML nodes, we need to inject different random id to prevend duplicate id.

To do so an element, which can be duplicated, must defined its id as follow: 

`TAG-XX-NNN`
- with `XX` an identifier for the node with two letters
- with `NNN` an unique number by sub-nodes, on three digits

The `NNN` numbers used by nodes must be consecutive and start by 1.

:warning: Xcode do not allow to edit directly this id.
* You could only visualize it in "Identity Inspector", Document, Object ID
* To edit it you must use your preferred text or xml editor.
