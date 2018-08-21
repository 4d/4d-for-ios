
# Text data formatter

## Define a localized formatter

### yesOrNo.json

```json
{
	"name": "yesOrNo",
	"bindingType" :"localized",
	"valueType" : "boolean”,
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


### Strings files

An unique ".strings” file is generated in project.

The possible values are prefixed with formatter name.

### yesOrNo

```strings
"yesOrNo_0" = "No";
"yesOrNo_1" = "Yes";
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

:bulb: For a boolean, 0 means `False` and 1 means `True`.

### Storyboard binding

In user defined runtime attributes on label.

### yesOrNo

| Key path  |  Type |  Value |
|----------|:-------------:|------:|
| bindTo.record.field name,yesOrNo |  String | localized |


### genderEmoji

| Key path  |  Type | Value |
|----------|:-------------:|------:|
| bindTo.record.field name,genderEmoji |  String | localized |
