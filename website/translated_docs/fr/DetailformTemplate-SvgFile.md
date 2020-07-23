---
id: svg-file-detailform-template
title: Template.svg
sidebar_label: Template.svg
---

Le fichier template.svg est une simple représentation du modèle. Dans ce fichier svg, vous définirez des zones afin d'ajouter des champs à votre modèle de formulaire détaillé depuis l’éditeur de projet.

Voici une version finale :

![Fichier Template svg](assets/en/custom-detailform/detailform-template-svg-file.png)

Ce modèle possède un champ de numérotation dynamique, c'est-à-dire qu'il vous permettra d’ajouter une **image** et jusqu'à **8 champs**, selon vos besoins. Ainsi, lors de la création de votre formulaire détaillé dans la section Formulaires et lors du glisser-déposer d'un champ, un nouveau champ vide apparait en dessous du champ précédent pour vous permettre d'ajouter un nouveau champ :

![Fichier Template svg](assets/en/custom-detailform/detailform-dynamic-field-number.png)

Ouvrez le fichier template.svg avec l'éditeur de code de votre choix.

Concentrons-nous sur les différentes parties de votre fichier SVG et sur ce que vous aurez besoin de modifier.

## Titre
```xml
<title>Custom Detail form</title>
```

Ajoutez ici le titre de votre modèle.

## ios:values

```
ios:values="f1,f2,f3,f4,f5,f6,f7,f8,f9"
```

**f1,f2,f3,f4,f5,f6,f7,f8,f9 IDs** : en référence aux champs disponibles pouvant être affichés dans votre formulaire détaillé. Cela vous permettra de glisser-déposer autant de champs définis.

## Position, hauteur, largeur et type de la zone
Vous pouvez définir la position, la hauteur et la largeur de tous vos champs, comme nous l'avons fait dans le tutoriel [Custom list view](creating-listform.html).

### Propriétés de champs dupliqués

```
//1
<g id="f" visibility="hidden" ios:dy="35">

//2
<rect class="bg field" x="14" y="0" width="238" height="30"/>

//3
<textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>

//4
<rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>

//5
<use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Position de toute la zone Y
2. Position, hauteur et largeur de la zone d'arrière-plan
3. Définir la position de la zone de texte et la largeur
4. Définir la position du champ où vous glissez-déposez vos éléments, sa hauteur et sa largeur, ainsi que les types de champs acceptés (tous les types sont acceptés ici)
5. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

### Zone ImageField 

```
//1
<g transform="translate(0,60)">

//2
<rect class="bg field" x="15" y="0" width="236" height="65"/>

//3
<path class="picture" transform="translate(10 0) scale(6)"/>

//4
<textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>

//5
<rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>

//6
<use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Position de toute la zone Y
2. Position, hauteur et largeur de la zone d'arrière-plan
3. Icône affichant une image dans imageField (le champ image)
4. Définir la position de la zone de texte et la largeur
5. Définir la position du champ "droppable", sa hauteur et sa largeur, ainsi que les types de champs acceptés
6. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant


### Champ à dupliquer

```
//1
<g id="multivalued">

//2
<g transform="translate(0,140)">

//3
<rect class="bg field" x="14" y="0" width="238" height="30"/>

//4
<textArea id="f2.label" class="label" x="14" y="8" width="238">$4DEVAL(:C991("field[n]"))1</textArea>

//5
<rect id="f2" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]"/>

//6
<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
</g>
```

1. Identifiant "Multivaluated" pour le champ à dupliquer
2. Position de toute la zone Y
3. Position, hauteur et largeur de la zone d'arrière-plan
4. Définir la position de la zone de texte et la largeur
5. Définir la position du champ "droppable", sa hauteur et sa largeur, ainsi que les types de champs acceptés (tous les types sont acceptés ici)
6. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

Maintenant que vous avez une **icône**, la **description basique d'un modèle** dans le fichier manifest.json, ainsi que votre fichier **svg**, passons à la partie amusante avec Xcode !

<div markdown="1" class = "tips">
**NOTE**
Tous les types sont disponibles [ici](https://developer.4d.com/docs/en/Concepts/data-types.html).
</div>

<div markdown="1" class = "tips">
**ASTUCES**

* Pour faciliter la définition des types de champs, 4D for iOS vous permet d’inclure des types de champs avec des **valeurs positives** et d'en exclure avec des **valeurs négatives**. Par exemple, `ios: type = "- 3, -4"` vous permettra de glisser-déposer tous les champs sauf les images et les dates.

* Pour inclure tous les types de champs, entrez simplement `ios:type="all"`.
</div>
