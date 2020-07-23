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

From the **Object library**, drag and drop an  **Image View** into a cell. Vous pouvez rechercher une « Image View » dans la barre de recherche en bas de la bibliothèque d’objets.

![Add Image View storyboard](assets/en/custom-listform/add-imageview-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Définissez ensuite la valeur de X sur 8 et la valeur de Y sur 3.

![Image View position height and width](assets/en/custom-listform/imageview-position-height-width.png)

Next, add a constraint (Leading: 8) by clicking on the **Add New Constraints button** (at the bottom of the Interface Builder window). Ajoutez également des contraintes de largeur et hauteur, comme suit :

![Image View leading space width height](assets/en/custom-listform/imageview-leading-space-width-height.png)

Finally, click on the **Align button** (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.

![Image View align vertically](assets/en/custom-listform/imageview-align-vertically.png)

Votre vue d'image est maintenant bien placée !

![Image View final](assets/en/custom-listform/imageview-final.png)

Nous allons nous pencher maintenant sur les libellés de cellules.

## Ajouter des libellés de titre et de sous-titre

Let's begin by **adding a View**. Search for "View" in the **Object library** and drag it into the cell container.

![Add View Storyboard](assets/en/custom-listform/add-view-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Définissez ensuite la valeur de X sur 126 et la valeur de Y sur 10.

![View position height and width](assets/en/custom-listform/view-position-height-width.png)

For the Image View, add four constraints by clicking on the **Add New Constraints button** (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:

![View contraints Storyboard](assets/en/custom-listform/view-constraints-storyboard.png)

Glissez et déposez un libellé dans la "View" que vous venez d’ajouter à partir de la bibliothèque d’objets.

![Add label Storyboard](assets/en/custom-listform/add-label-storyboard.png)

From the **Size inspector panel**, set the Label View Width value to 269 and the Height value to 32. Définissez ensuite la valeur de X sur 8 et la valeur de Y sur 8.

**Duplicate the label** and in the **Size inspector panel**, set the X value to 8 and the Y value to 48.

![Duplicate the label](assets/en/custom-listform/duplicated-label-storyboard.png)

Select both labels add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:

![Labels contraints storyboard](assets/en/custom-listform/labels-contraints-storyboard.png)

With a label selected, double-click on the **Height constraint** to edit it.

![Label height constraint edition](assets/en/custom-listform/label-height-constraint-edition.png)

Change the relation from Equal to **Greater Than or Equal** so it can have a variable height (to handle multiline labels).

![Change relation label height constraint](assets/en/custom-listform/change-relation-label-height-constraint.png)

Répétez l’opération pour le deuxième libellé.

## Personnaliser le libellé

À partir de l’Attribute inspector (sur le côté droit de l’Interface Builder), vous pouvez personnaliser les couleurs de la police du libellé. Let's make the second label **Dark Grey Color** :

![Label color dark grey](assets/en/custom-listform/label-color-dark-grey.png)

Vous pouvez également sélectionner la couleur principale de votre application :

![Label color background color](assets/en/custom-listform/label-color-background-color.png)

À partir de l’Attribute inspector, vous pouvez également personnaliser la police. Select both labels and select Font > Custom > **Helvetica Neue**:

![Label font custom](assets/en/custom-listform/label-font-custom.png)

To complete the customizations, select both labels and **enter 0 for Lines** in the inspector window. Ainsi, le nombre de lignes peut être illimité.

![Label lines number](assets/en/custom-listform/label-lines-number.png)

<div markdown="1" class = "tips">
**NOTE**
The provided storyboard is optimized to have a **variable cell height** depending on the contents of each cell.
![Row height tableview cell](assets/en/custom-listform/row-height-tableview-cell.png)
</div>

## Comment entrer des données dans vos cellules

### Image View
Sélectionnez votre Vue Image, cliquez sur **Identity inspector** et allez dans User Defined Runtime Attributes. Cliquez sur le **bouton +** pour ajouter une ligne.

![User defined runtime attributes](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path**: Begin with bindTo to activate binding on the component. Enter `bindTo.record.___FIELD_1___`

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

You can change the **storyboard display labels** to have better visibility:

* Double-click the first label to edit it and enter `___FIELD_2_LABEL___`
* Double-click the second label to edit it and enter `___FIELD_3_LABEL___`

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

Dans ce tutoriel, nous avons couvert les aspects fondamentaux de la création de modèles de formulaires Liste. Vous êtes maintenant en mesure de créer vous-mêmes de simples modèles à l'aide des ressources du projet Starter. Mais ce n'est fini ! Dans le prochain tutoriel, vous apprendrez à créer des modèles de formulaires détaillés ! Click on **Final Project** below to download the completed template list folder.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip">MODÈLE FINAL DE FORMULAIRE LISTE PERSONNALISÉ</a>
</div>




