---
id: manifest-listform-template
title: Manifest.json
---
Le fichier manifest contient des informations sur votre modèle de formulaire Liste, telles que le **type de Storyboard** (formulaire liste ou formulaire détaillé), **le nom** et **le nombre de champs par cellule**.

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

1. **type (de Storyboard) :** listform
2. **Nom du modèle :** Custom List form
3. **Nombre de champs :** Trois champs par cellule (photo de profil, titre et sous-titre)