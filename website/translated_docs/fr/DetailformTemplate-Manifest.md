---
id: manifest-detailform-template
title: Manifest.json
sidebar_label: Manifest.json
---
Le fichier manifest contient des informations sur votre modèle de formulaire détaillé, telles que : * le type de Storyboard (formulaire Liste ou formulaire détaillé) * le nom * le nombre de champs par cellule * les propriétés des icônes

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
    
    

Par exemple, le fichier manifest du modèle de formulaire détaillé ci-dessous inclut les informations suivantes : 1. **type de Storyboard :** detailform 2. **Nom du modèle :** Custom Detail form 3. **Nombre de champs :** un champ statique et 0 pour les champs dupliqués infinis (une image d'en-tête et des champs dupliqués) 4. **Propriétés d'icônes :** largeur et hauteur de l'icône