---
id: manifest-listform-template
title: Manifest.json
---

The manifest file includes information about your list form template, such as the **Storyboard type** (list form or detail form), **name** and **number of fields per cell**.

    {
    //1
      "type": "listform",
    
    //2
      "name": "Custom List form",
    
    //3
      "fields": {
        "count": 3
      }
    }
    
    

For example, the manifest file for the above list form template includes the following information:

1. **Storyboard type:** listform
2. **Template Name:** Custom List form
3. **Field number:** Three fields in each cell (profile image, title, and subtitle)