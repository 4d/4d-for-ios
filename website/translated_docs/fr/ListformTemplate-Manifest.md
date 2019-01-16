---
id: manifest-listform-template
title: Manifest.json
sidebar_label: Manifest.json
---
Le fichier manifest contient des informations sur votre modèle de formulaire Liste, telles que : * le type Storyboard (formulaire Liste ou formulaire détaillé) * le nom * le nombre de champs par cellule

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
    

Par exemple, le fichier manifest du modèle de formulaire Liste ci-dessous inclut les informations suivantes : 1. **type de Storyboard :** listform 2. **Nom du modèle :** Custom List form 3. **Field number:** Three fields in each cell (profile image, title, and subtitle)