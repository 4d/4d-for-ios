
## File and folder name

|Tags|Description|
|---|---|
|`___PRODUCT___`|Product name||`___TABLE___`|Name of the 4D table currently managed by template|

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
|`___DATE___`| File creation date. Using format defined by RFC 1123. `String(Current date;Date RFC 1123;Current time)`||`___FULLUSERNAME___`|The copyright information you defined in the project editor||`___PACKAGENAME___`|The name of your project as you defined in the project editor||`___COPYRIGHT___`|The copyright information you defined in the project editor|


## storyboard

|Tags|Description|
|---|---||`___PRODUCT___`|Product name, used to define the module of the used objects.|

### List form

|Tags|Description|
|---|---|
|`___SEARCHABLE_FIELD___`| ||`___SECTION_FIELD___`| |
|`___SHOW_SECTION___`| |
|`___SORT_FIELD___`| |						
#### Table definitions
|Tags|Description|
|---|---||`___TABLE_LABEL___`| ||`___TABLE_SHORT_LABEL___"`| |
|`___TABLE_ICON___"`| |

### Fields

#### Normal fields
|Tags|Description|
|---|---|
|`___FIELD___`|xxx||`___FIELD_LABEL___`|xxx||`___FIELD_SHORT_LABEL___`|xxx||`___FIELD_TYPE___`|xxx||`___FIELD_ICON___`|xxx||`___FIELD_LABEL_ALIGNMENT___`|xxx|

#### Positioned fields

N position of the fields

|Tags|Description|
|---|---|
|`___FIELD_N___`|xxx||`___FIELD_N_LABEL___`|xxx||`___FIELD_N_SHORT_LABEL___`|xxx||`___FIELD_N_TYPE___`|xxx||`___FIELD_N_ICON___`|xxx||`___FIELD_N_LABEL_ALIGNMENT___`|xxx|

### Storyboard ID

Each elements of storyboard have a specific xml id and each must be different.

When duplicating XML nodes, we need to inject different random id.

To do so an element, which can be duplicated, must defined its id as follow: 

`TAG-XX-NNN`
- with `XX` an identifier for the node with two letters
- with `NNN` an unique number by sub-nodes, on three digits