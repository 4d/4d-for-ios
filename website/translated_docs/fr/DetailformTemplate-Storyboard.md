---
id: storyboard-detailform-template
title: Storyboard
---

Il est temps de créer votre interface iOS de formulaire détaillé avec Xcode !

Voici le résultat que nous souhaitons obtenir :

![Storyboard custom detailform](assets/en/custom-detailform/storyboard-custom-detailform.png)

Pour chaque cellule, nous allons ajouter :

* Une photo de profil dans l'en-tête
* Un champ à dupliquer

## Ouvrir le fichier storyboard avec Xcode

Dans un premier temps, ouvrez votre fichier storyboard dans Xcode.

![Empty storyboard custom template](assets/en/custom-detailform/empty-storyboard-custom-detailform-template.png)

Il est assez vide, nous allons donc y ajouter du contenu !

## Ajouter une "Scroll View"

For our detail form to be scrollable, the first step is to drag and drop a "Scroll View" from the **Object library**.

![Add Scroll View Storyboard](assets/en/custom-detailform/add-scrollview-storyboard.png)


From the **Size inspector panel** (on the right side of the Interface Builder window), set the Scroll View Width value to 359 and the Height value to 667. Définissez ensuite la valeur de X sur 8 et la valeur de Y sur 0.

![Scroll View position height and width](assets/en/custom-detailform/scrollview-position-height-width.png)


Next, add four constraints by clicking on the **Add New Constraints button** (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) as shown below:

![Scrollview Constraints](assets/en/custom-detailform/scrollview-constraints.png)

## Ajouter une "Vertical Stack View"

Drag and drop a Vertical Stack View from the **Object library** in Scroll View. Then, from the **Size inspector panel** (on the right side of the Interface Builder window) set the Width value to 359 and the Height value to 202. Enfin, définissez la valeur de X sur 0 et la valeur de Y sur 8.

![Add stackview Storyboard](assets/en/custom-detailform/add-vertical-stackview-storyboard.png)

La hauteur et la largeur de la "Stack View" étant définies par les éléments qu'elle contient, nous allons configurer les dimensions et les contraintes plus tard.

## Ajouter des vues au Stack Views

Drag and drop a view from the **Object library** to the Stack View you've just added to your storyboard. Let's name it **Field View 1**.

![Add Field View 1](assets/en/custom-detailform/add-view1-storyboard.png)

Then drag and drop another view from the **Object library** directly into the Document Outline at the same level as Field View 1 (to include it in the Stack View) and name it **Field View 2**.

![Add Field View 2](assets/en/custom-detailform/add-view2-storyboard.png)


Pour ajouter des espaces entre les vues, sélectionnez votre "Stack View" et affectez-lui une valeur d’espacement de 8 (dans l’Attributes Inspector).

![Stackview spacing](assets/en/custom-detailform/stackview-spacing.png)

Select both **Field View 1** and **Field View 2** and in the **Size inspector panel** (on the right side of the Interface Builder window), set Width value to 359 and the Height value to 97.

![views position height and width](assets/en/custom-detailform/views-position-height-width-storyboard.png)

Select **Field View 1** add three constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 0, and Top: 0):

![Field Views constraints](assets/en/custom-detailform/fieldView-1-Field-View-2-constraints.png)

Pour que les "Stack View" et "Scroll View" soient de la même largeur, vous devez ajouter une contrainte :

Appuyez sur Ctrl et glissez la "Stack View" vers la "Scroll View". Lorsque vous relâchez le bouton de la souris, l’Interface Builder affiche un menu avec une liste de contraintes éventuelles. Sélectionnez "Equal Width" !

![Stack View Equal Width](assets/en/custom-detailform/stackview-equal-width-scrollview.png)

Next, with the Stack View selected add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 0, Top: 8, and Bottom: 0) as shown below:

![Stackview constraints](assets/en/custom-detailform/stackview-constraints.png)

Voilà ce qui s'affichera lorsque les contraintes auront été ajoutées :

![Stackview final constraints](assets/en/custom-detailform/stackview-constraints-final.png)

Maintenant que vous disposez de deux vues dans votre Stack View et que vous avez défini les contraintes, concentrons-nous sur Field View 1.

## Ajoutez une Image View au Field View 1

From the **Object library**, drag and drop an  **Image View** into Field View 1.

![Add Image View storyboard](assets/en/custom-detailform/add-imageview-storyboard.png)

In the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 359 and the Height value to 97. Définissez ensuite la valeur de X sur 0 et la valeur de Y sur 0.

![Image View position height and width](assets/en/custom-detailform/imageview-position-height-width.png)

Next, add four constraints by clicking on the **Add New Constraints button** (Trailing:0, Leading:0, Top:0, and Bottom:0) as shown below:

![Image View constraints](assets/en/custom-detailform/imageview-constraints.png)

In the **Size inspector panel** change the Intrinsic Size from **Default** to **Placeholder**.

![Intrinsic size Image View](assets/en/custom-detailform/intrinsic-size-imageview.png)

## Ajouter des libellés au Field View 2

### Libellé Titre

In the **Object library**, drag and drop a  **Label** into Field View 2 and set the Width value to 343 and the Height value to 22. Définissez ensuite la valeur de X sur 8 et la valeur de Y sur 8.

![Add label](assets/en/custom-detailform/add-label1-storyboard.png)

Double click on the label and name it "`___FIELD_LABEL___`". Then in the **attribute inspector** set the font to **Helvetica Neue Light 18.0** and the color to **BackgroundColor**:

![Title label font and color](assets/en/custom-detailform/title-label-font-and-color.png)

### Libellé Contenu

Dupliquez le libellé Titre et définissez la largeur du libellé dupliqué sur 339 et sa hauteur sur 44. Définissez ensuite la valeur de X sur 12 et la valeur de Y sur 37.

![Add label](assets/en/custom-detailform/add-label2-storyboard.png)

Double click on the label and name it "`<___FIELD_LABEL___>`". Then from the **attribute inspector** set the font to **Helvetica Neue Light 20.0** and the color to **Black Color**:

![Content label font and color](assets/en/custom-detailform/content-label-font-and-color.png)

Select the Content and Title labels and add four constraints by clicking on the **Add New Constraints button** (Trailing: 8, Leading: Multiple, Top: Multiple, and Bottom: Multiple) as shown below:

![Title and Content labels constraints](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)

La partie sur les éléments graphiques est terminée ! Toutes vos contraintes sont maintenant bien définies :)

## Comment entrer des données dans vos cellules

### Image View
Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![User defined runtime attributes](assets/en/custom-detailform/user-defined-runtime-attributes.png)

* **Key Path**: Start with bindTo to activate binding on the component. Enter `bindTo.record.___FIELD_1___`

* **Type**: Always `String`

* **Value**: The attribute name. Enter `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](assets/en/custom-detailform/identity-inspector-storyboard.png)

### Libellés

For the **first label** we are going to add several lines mainly to display icons:

![Label1 User Defined Runtime Attributes](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)

You also need to set the Class to `IconLabel` and check the **Inherit Module From Target** checkbox as we can see below:

![Label1 Custom Class](assets/en/custom-detailform/label1-custom-class.png)

Select the **second label** and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD___`

* **Type**: `String`

* **Value**: `___FIELD_BINDING_TYPE___`

![Label2 User Defined Runtime Attributes](assets/en/custom-detailform/label2-user-defined-runtime-attributes.png)

## Ajouter des TAGS aux cellules dupliquées

Field View 2 inclut des éléments qui seront dupliqués, pour vous permettre d'avoir autant de champs que d'éléments définis dans l’éditeur de projet.

Chaque élément du storyboard possède un identifiant d'objet. For example, if you select Field View 2 and go to the **Identity inspector**, you'll see its Object ID:

![Object ID Storyboard](assets/en/custom-detailform/object-id-storyboard.png)

Pour informer l'éditeur de projet que tous les éléments compris dans cette vue seront dupliqués, nous devons ajouter TAG à chaque élément et à chaque contrainte.

Le processus est un peu délicat... Nous allons commencer par ouvrir le fichier storyboard avec l'éditeur de code de votre choix !

### Field View 2

* Select **Field View 2** and get its Object ID from the Identity Inspector (on the right side of the Interface Builder window). In our project, Field View 2 ID is: **SiX-3H-lNB**.

* Search for this ID in the storyboard xml code and replace it with **TAG-FD-001** each time it appears. Soyez prudent, car, comme vous pouvez le voir, l'identifiant de cet objet est mentionné plusieurs fois !

![Storyboard xml](assets/en/custom-detailform/storyboard-xml.png)

Sauvegardez le fichier xml du storyboard. Comme vous pouvez le voir, l'identifiant d'objet de Field View 2 a été modifié dans le storyboard dans Xcode :

![Field View 2 Object ID](assets/en/custom-detailform/field-view-2-object-id.png)

### Premier libellé

* Now, get the **first label** Object ID from the Identity Inspector and replace it with **TAG-FD-002** each time it appears in the storyboard xml code.

![Label 1 Object ID](assets/en/custom-detailform/label1-object-id.png)

C'est terminé pour le premier libellé !

### Deuxième libellé

* Next, get the **second label** Oject ID from the Identity Inspector and replace it with **TAG-FD-003** each time it appears in the storyboard xml code.

![Label 2 Object ID](assets/en/custom-detailform/label2-object-id.png)

Et voilà !

### Contraintes

Les deux libellés contiennent des contraintes que nous devons également identifier :

![Tag constraints](assets/en/custom-detailform/duplicated-constraints.png)

Just like View Field 2 and label, get all **7 Constraints** Object IDs from the Identity Inspector and replace them with: **TAG-FD-004**, **TAG-FD-005**, **TAG-FD-006**, **TAG-FD-007**, **TAG-FD-008**, **TAG-FD-009** and **TAG-FD-010**.

Ouvrez votre éditeur de projet, sélectionnez votre modèle de formulaire détaillé depuis la section Formulaires, puis cliquez sur Créer & exécuter.

![Custom detail template forms](assets/en/custom-detailform/custom-detail-template-forms.png)

Ce n'est pas si mal pour un premier essai ! :)

![iPhone Demo](assets/en/custom-detailform/iphone-demo.png)

Field View 2 a bien été dupliqué ! Voyons comment rendre cette application un peu plus intéressante !

### Personnaliser l'application

Nous allons ajouter un bord arrondi à l'Image View et à Field View 2.

Sélectionnez votre Vue Image et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

et

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![iPhone Demo](assets/en/custom-detailform/imageview-corner-radius.png)

Sélectionnez ensuite Field View 2 et ajoutez ce qui suit :

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

![iPhone Demo](assets/en/custom-detailform/fieldview2-corner-radius.png)

Vous pouvez désormais créer votre projet depuis l'éditeur de projet !

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Que faire ensuite ?

Dans ce tutoriel, nous avons fait le tour des fondamentaux de la création de modèles de formulaires détaillés. Vous êtes maintenant en mesure de créer vous-même de simples modèles à l'aide des ressources du projet Starter. Click on **Final Project** below to download the completed template folder.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip">MODÈLE FINAL DE FORMULAIRE DÉTAILLÉ PERSONNALISÉ</a>
</div>




