---
id: version-18.0-manifest-listform-template
title: Manifest.json
original_id: manifest-listform-template
---

The manifest file includes information about your list form template, such as the **Storyboard type** (list form or detail form), **name** and **number of fields per cell**.

```json
{
  "type": "listform",

  "name": "Custom List form",

  "fields": {
    "count": 3
  }
}

```

上記のmanifestファイルを解読すると，下記のことがわかります。

1. **Storyboard type:** listform
2. **Template Name:** Custom List form
3. **Field number:** Three fields in each cell (profile image, title, and subtitle)
