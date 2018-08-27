
# Text data formatter

## Define a localized formatter

### noOrYes.json

```json
{
	"name": "noOrYes",
	"bindingType" :"localized",
	"valueType" : "boolean",
	"choiceList": [ "No", "Yes"]
	}
}
```

### genderEmoji.json

```json
{
	"name": "genderEmoji",
	"bindingType " :"localized",
	"valueType" : ["boolean","real", "integer"],
	"choiceList": [ "👩", "👨", "🧑"],
	"choiceListComment": [ "female", "male", "neutral"]
}
```


## Strings files

An unique ".strings” file is generated in project.

The possible values are prefixed with formatter name.

### noOrYes

```strings
"noOrYes_0" = "No";
"noOrYes_1" = "Yes";
```

### genderEmoji

```strings
/* female */
"genderEmoji_0" = "👩";
/* male */
"genderEmoji_1" = "👨";
/* neutral */
"genderEmoji_2" = "🧑";
```

💡 For a boolean, 0 means `False` and 1 means `True`.

## Storyboard binding

In user defined runtime attributes on label.

### noOrYes

| Key path  |  Type |  Value |
|----------|:-------------:|------:|
| bindTo.record.field name |  String | localized,noOrYes |


### genderEmoji

| Key path  |  Type | Value |
|----------|:-------------:|------:|
| bindTo.record.field name |  String | localized,genderEmoji |
