---
id: manifest-custom-detailform-template
title: Manifest.json
sidebar_label: Manifest.json
---


The manifest file includes information about your custom detail form template such as the:
* Storyboard type (list form or detail form)
* Name 
* Number of static fields
* Icons properties



```
{
//1
  "type": "detailform",

//2
  "name": "Custom Detail form",

//3
  "fields": {
    "count": 1
       },

//4
  "assets": {
    "size": {
      "width": 16,
      "height": 16
    }
  }
}

```


For example, the manifest file for the list form template below includes the following information:
1. detailform template
2. **Custom detail form**
3. One static field and 0 for infinite duplicated fields (a profile image, and duplicated fields)
4. Icon size definition

