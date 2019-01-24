---
id: manifest-detailform-template
title: Manifest.json
sidebar_label: Manifest.json
---
The manifest file includes information about your detail form template such as the: * Storyboard type (list form or detail form) * Name * Number of static fields * Icon properties

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
    
    

For example, the manifest file for the detail form template below includes the following information: 1. **Storyboard type:** detailform 2. **Template Name:** Custom Detail form 3. **Field number:** One static field and 0 for infinite duplicated fields (a header image, and duplicated fields) 4. **Icon properties:** Icon width and height