---
id: manifest-custom-listform-template
title: Manifest.json
sidebar_label: Manifest.json
---


The manifest file includes information about your custom list form template such as the:
* Storyboard type (list form or detail form)
* Name 
* Number of fields per cell


```
{
//1
  "type": "listform",

//2
  "name": "Custom list form",

//3
  "fields": {
    "count": 3
  }
}
```


For example, the manifest file for the list form template below includes the following information:
1. listform template
2.  **Custom list form**
3. three fields in each cell (a profile image, a title, and subtitle)
