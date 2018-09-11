---
id: manifest-listform-template
title: Manifest.json
sidebar_label: Manifest.json
---


The manifest file includes information about your list form template, such as the:
* Storyboard type (list form or detail form)
* Name 
* Number of fields per cell


```
{
//1
  "type": "listform",

//2
  "name": "List form",

//3
  "fields": {
    "count": 3
  }
}
```


For example, the manifest file for the list form template below includes the following information:
1. List form template
2.  **List form**
3. Three fields in each cell (profile image, title, and subtitle)
