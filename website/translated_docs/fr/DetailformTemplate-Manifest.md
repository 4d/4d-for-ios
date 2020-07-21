---
id: manifest-detailform-template
title: Manifest.json
---

Le fichier manifest contient les informations relatives à votre modèle de formulaire détaillé, telles que :

* **Type de storyboard :** formulaire liste ou formulaire détaillé
* **Nom**
* **Rendu :** numéro de version
* **Décalage :** le décalage vertical du premier champ qui va être dupliqué
* **Nombre de champs statiques**
* **Propriétés de l'icône :** largeur et hauteur


```json
{
  "type": "detailform",

  "name": "Custom Detail form",
  "renderer": 2,  
  "hOffset": 91, 
  "fields": {
    "count": 1, 
    "max": 0
 },

  "assets": {
    "size": {
      "width": 16,
      "height": 16
    }
  }
}

```

Par exemple, le fichier manifest du modèle de formulaire détaillé ci-dessous inclut les informations suivantes :

1. **Storyboard type:** detailform
2. **Template Name:** Custom Detail form
3. **Version :** 2
4. **Décalage :** le premier champ qui va être dupliqué est de 91 pixels en partant du haut
5. **Field number:** One static field (and 0 for infinite duplicated fields (a header image, and duplicated fields))
6. **Icon properties:** Icon width and height
