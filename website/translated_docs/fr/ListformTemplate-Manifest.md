---
id: manifest-listform-template
title: Manifest.json
---

Le fichier manifest contient des informations sur votre modèle de formulaire Liste, telles que le **type de Storyboard** (formulaire liste ou formulaire détaillé), **le nom** et **le nombre de champs par cellule**.

```json
{
  "type": "listform",

  "name": "Custom List form",

  "fields": {
    "count": 3
  }
}

```

Par exemple, le fichier manifest du modèle de formulaire Liste ci-dessous inclut les informations suivantes :

1. **type (de Storyboard) :** listform
2. **Nom du modèle :** Custom List form
3. **Nombre de champs :** Trois champs par cellule (photo de profil, titre et sous-titre)
4. **Tag:** `"___LISTFORMTYPE___": "Table"` table display
