---
id: manifest-listform-template
title: Manifest.json
sidebar_label: Manifest.json
---
The manifest file includes information about your list form template, such as the:

* Storyboard type (list form or detail form)
* Name 
* Number of fields per cell

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
    

Par exemple, le fichier manifest du modèle de formulaire Liste ci-dessous inclut les informations suivantes :

1. **type (de Storyboard) :** listform
2. **Nom du modèle :** Custom List form
3. **Nombre de champs :** Trois champs par cellule (photo de profil, titre et sous-titre)