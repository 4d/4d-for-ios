---
id: manifest-detailform-template
title: Manifest.json
---

The manifest file includes information about your detail form template such as the **Storyboard type** (list form or detail form), **name**, **number of static fields** and **Icon properties**.


```json
{
  "type": "detailform",

  "name": "Custom Detail form",

  "fields": {
    "count": 1
  },

  "assets": {
    "size": {
      "width": 16,
      "height": 16
    }
  }
}

```

Por ejemplo, el archivo manifiest para la plantilla de formulario detallado a continuación incluye la siguiente información:

1. **Storyboard type:** detailform
2. **Template Name:** Custom Detail form
3. **Field number:** One static field (and 0 for infinite duplicated fields (a header image, and duplicated fields))
4. **Icon properties:** Icon width and height
