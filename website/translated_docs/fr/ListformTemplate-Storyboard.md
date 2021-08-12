---
id: storyboard-listform-template
title: Storyboard
---

Il est temps de créer l'interface iOS de vote formulaire Liste avec Xcode !

Voici le résultat que nous souhaitons obtenir :

![Storyboard custom listform](assets/en/custom-listform/storyboard-custom-listform.png)

Pour chaque cellule, nous allons ajouter :

* Une photo de profil
* Titre
* Un sous-titre

## Ouvrir le fichier storyboard avec Xcode

Dans un premier temps, ouvrez votre fichier storyboard dans Xcode.

![Empty storyboard custom template](assets/en/custom-listform/empty-storyboard-custom-template.png)

Il est assez vide, nous allons donc y ajouter du contenu !

## Ajouter une "Image View"

À partir de l'**Object library** (la bibliothèque d'objets), glissez-déposez une **Image View** (une vue d'image) dans une cellule. Vous pouvez rechercher une « Image View » dans la barre de recherche en bas de la bibliothèque d’objets.

![Add Image View storyboard](assets/en/custom-listform/add-imageview-storyboard.png)

À partir du **Size inspector** (sur le côté droit de l’Interface Builder), définissez la largeur de la vue de l’image à 110 et la valeur de sa hauteur à 110. Définissez ensuite la valeur de X sur 8 et la valeur de Y sur 3.

![Image View position height and width](assets/en/custom-listform/imageview-position-height-width.png)

Puis, ajoutez une contrainte (Leading : 8) en cliquant sur **Add New Constraints** (en bas de l’Interface Builder). Ajoutez également des contraintes de largeur et hauteur, comme suit :

![Image View leading space width height](assets/en/custom-listform/imageview-leading-space-width-height.png)

Enfin, cliquez sur le bouton **Align** (dans la partie inférieure de l'nterface Builder) et cochez la case "Vertically in Container".

![Image View align vertically](assets/en/custom-listform/imageview-align-vertically.png)

Votre vue d'image est maintenant bien placée !

![Image View final](assets/en/custom-listform/imageview-final.png)

Nous allons nous pencher maintenant sur les libellés de cellules.

## Ajouter des libellés de titre et de sous-titre

Nous allons commencer par **ajouter une vue**. Vous pouvez rechercher le terme « View » dans la **bibliothèque d'objets** et faire glisser la vue vers la cellule.

![Add View Storyboard](assets/en/custom-listform/add-view-storyboard.png)

À partir du **Size inspector** (sur le côté droit de l’Interface Builder), définissez la largeur de la vue de l’image sur 277 et la valeur de sa hauteur sur 94. Définissez ensuite la valeur de X sur 126 et la valeur de Y sur 10.

![View position height and width](assets/en/custom-listform/view-position-height-width.png)

Concernant la vue d'image, ajoutez quatre contraintes en cliquant sur le bouton **Add New Constraints** (Trailing: 11, Leading: 8, Top: 11 et Bottom: 10.67) pour la positionner correctement, comme suit :

![View contraints Storyboard](assets/en/custom-listform/view-constraints-storyboard.png)

Glissez et déposez un libellé dans la "View" que vous venez d’ajouter à partir de la bibliothèque d’objets.

![Add label Storyboard](assets/en/custom-listform/add-label-storyboard.png)

À partir du **Size inspector**, définissez la largeur du libellé View sur 269 et sa hauteur sur 32. Définissez ensuite la valeur de X sur 8 et la valeur de Y sur 8.

**Dupliquez le libellé** et, dans le **Size inspector**, définissez la valeur de X sur 8 et la valeur de Y sur 48.

![Duplicate the label](assets/en/custom-listform/duplicated-label-storyboard.png)

Sélectionnez les deux libellés et ajoutez quatre contraintes en cliquant sur le bouton **Add New Constraints** (Trailing: 0, Leading: 8, Top: 8 et Bottom: Multiple) comme suit :

![Labels contraints storyboard](assets/en/custom-listform/labels-contraints-storyboard.png)

Sélectionnez un libellé et double-cliquez sur **Height constraint** pour le modifier.

![Label height constraint edition](assets/en/custom-listform/label-height-constraint-edition.png)

Remplacez la relation "Equal" par **Greater Than or Equal** afin que sa hauteur soit variable (pour gérer des libellés multilignes).

![Change relation label height constraint](assets/en/custom-listform/change-relation-label-height-constraint.png)

Répétez l’opération pour le deuxième libellé.

## Personnaliser le libellé

À partir de l’Attribute inspector (sur le côté droit de l’Interface Builder), vous pouvez personnaliser les couleurs de la police du libellé. Appliquons la couleur **Dark Grey Color** au deuxième libellé :

![Label color dark grey](assets/en/custom-listform/label-color-dark-grey.png)

Vous pouvez également sélectionner la couleur principale de votre application :

![Label color background color](assets/en/custom-listform/label-color-background-color.png)

À partir de l’Attribute inspector, vous pouvez également personnaliser la police. Sélectionnez les deux libellés et sélectionnez Font > Custom > **Helvetica Neue** :

![Label font custom](assets/en/custom-listform/label-font-custom.png)

Pour finaliser les personnalisations, sélectionnez les deux libellés et, dans la fenêtre Inspector, **entrez la valeur 0 dans Lines**. Ainsi, le nombre de lignes peut être illimité.

![Label lines number](assets/en/custom-listform/label-lines-number.png)

> **NOTE**
> 
> Le Storyboard qui vous a été fourni est optimisé pour que la **hauteur de cellule soit variable** en fonction du contenu de chaque cellule.
> 
> ![Row height tableview cell](assets/en/custom-listform/row-height-tableview-cell.png)

## Comment entrer des données dans vos cellules

### Image View
Sélectionnez votre Vue Image, cliquez sur **Identity inspector** et allez dans User Defined Runtime Attributes. Cliquez sur le **bouton +** pour ajouter une ligne.

![User defined runtime attributes](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path **: commencez par bindTo pour activer la liaison sur le composant. Enter `bindTo.record.___FIELD_1___`

* **Type**: Always `String`

* **Value**: The attribute name. Enter `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](assets/en/custom-listform/identity-inspector-storyboard.png)

### Libellés

Sélectionnez le premier libellé et ajoutez une ligne dans la zone "Defined Runtime Attributes" :

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Type**: `String`

* **Value**: `___FIELD_2_BINDING_TYPE___`

![Field 2 Binding](assets/en/custom-listform/field-2-binding.png)

Sélectionnez le deuxième libellé et ajoutez une ligne dans la zone "Defined Runtime Attributes" :

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Type**: `String`

* **Value**: `___FIELD_3_BINDING_TYPE___`

![Field 3 Binding](assets/en/custom-listform/field-3-binding.png)

Pour avoir une meilleure visibilité, vous avez la possibilité de modifier les **libellés du storyboard** :

* Double-cliquez sur le premier libellé pour le modifier et saisissez `___FIELD_2_LABEL___`
* Double-cliquez sur le deuxième libellé pour le modifier et saisissez `___FIELD_3_LABEL___`

![Storyboard label display names](assets/en/custom-listform/storyboard-label-display-name.png)

Ouvrez votre éditeur de projet, sélectionnez votre modèle de formulaire Liste depuis la section Formulaires, puis cliquez sur Créer & exécuter.

Voici le résultat du simulateur :

![Simulator result](assets/en/custom-listform/simulator-result.png)

## Personnaliser l'application

La dernière étape consiste à ajouter un bord arrondi à la vue d'image pour améliorer la conception.

Sélectionnez votre Vue Image et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

et

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![ImageView corner Radius](assets/en/custom-listform/imageview-corner-radius.png)

Vous pouvez désormais créer votre projet depuis l'éditeur de projet !

![Custom template final result](assets/custom-listform/custom-template-final-result.png)

## Que faire ensuite ?

Dans ce tutoriel, nous avons couvert les aspects fondamentaux de la création de modèles de formulaires Liste. Vous êtes maintenant en mesure de créer vous-mêmes de simples modèles à l'aide des ressources du projet Starter. Mais ce n'est fini ! Dans le prochain tutoriel, vous apprendrez à créer des modèles de formulaires détaillés ! Cliquez sur le **Projet final** ci-dessous pour télécharger le dossier contenant la liste complète de modèles.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip">MODÈLE FINAL DE FORMULAIRE LISTE PERSONNALISÉ</a>
</div>




