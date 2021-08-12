---
id: one-to-many-relations-custom-button
title: 1 vers N - Bouton personnalisé
---

Tout comme pour les tutoriels précédents, 4D for iOS vous permet de créer librement plusieurs éléments personnalisés !

De même que les templates et formats personnalisés, vous pouvez créer des Boutons Relations personnalisés.

Et pour cela, rien de plus simple ! Il vous suffit de déposer votre bouton personnalisé dans votre template personnalisé.


Commençons par télécharger le Projet Starter, qui comprend :

* une base de données et son projet mobile
* un bouton Relation standard


<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip">STARTER BUTTON PERSONNALISE</a>
</div>

## Intégrer un bouton

La première étape consiste à intégrer un bouton .xib dans votre template personnalisé, afin qu'il soit intégré dans l'application.

To use the button, you just need to drop it in the `YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact` folder.

![Custom button path](assets/en/relations/Relation-custom-button-path.png)

La première étape est terminée !

## Modifier le bouton

Ouvrir le fichier .xib avec Xcode.

Il devrait ressembler à ceci :

![Custom relation button](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS.png)

Et dans l'inspecteur d'attributs, vous pouvez modifier par exemple :

* les couleurs et les polices
* le style de bouton
* la taille du bouton, etc.

Nous allons changer la couleur du bouton et la police du label du bouton !

### Couleurs et polices personnalisées

Sélectionnez le bouton et modifiez la couleur et la police depuis l'inspecteur des attributs.

Pour l'arrière-plan, choisissons Label Color pour obtenir le meilleur contraste aussi bien en Light mode qu'en Dark mode.

Pour la couleur de police, sélectionnez la System background color avec une police helvetica Neue Medium.

Enfin, n'oubliez pas de sélectionner la couleur System background color pour "Tint" et d'appliquer cette couleur à l'icône du bouton.

![Custom relation button](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)

Voici le résultat que vous devriez obtenir dans le Simulateur, en mode Dark et en mode Light :

![Custom relation color and font](assets/en/relations/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)

### Bords arrondis des boutons

Ajoutons des bords arrondis au "relationButton" !

Pour ce faire, ouvrez l'Identity Inspector.

Sélectionnez votre Bouton et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

et

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![Custom relation color and font](assets/en/relations/Custom-relation-button-Xcode-round-corners.png)

Vous pouvez désormais créer votre projet depuis l'éditeur de projet !

Il devrait ressembler à ceci :

![Custom relation color and font](assets/en/relations/Custom-relation-button-round-corners.png)

### Taille et contraintes

A noter que si vous **ajoutez des contraintes** à votre bouton, vous devrez également modifier le fichier xib xml pour **ajouter des TAGS** comme pour les templates de formulaires détaillés personnalisés. Cela permet de dupliquer correctement le bouton lorsque plusieurs liens sont disponibles dans la même vue détaillée.

C'est très pratique, puisque nous prévoyons d'ajouter quelques contraintes !

#### Ajouter des contraintes

Pour ce tutoriel, nous allons simplement ajouter une hauteur de bouton car nous souhaitons qu’il soit plus grand à l’écran.

Etape 1. Sélectionnez d’abord la vue et remplacez la hauteur (123) par 40

![Button view height](assets/en/relations/Button-view-height.png)

Etape 2. Double-cliquez sur **Top Space Constraint** et remplacez sa valeur (8) par 0

![Top Space constraint](assets/en/relations/Top-Space-constraint.png)

Étape 3. Faites la même chose avec **Bottom Space Constraint** et remplacez sa valeur (8) par 0

Vous devriez obtenir ceci :

![Custom  button constraints](assets/en/relations/Custom-button-constraints.png)

Etape 4. Ajoutez une contrainte de hauteur de 40

![Button height constraint](assets/en/relations/Button-height-constraint.png)

Vous devriez obtenir ceci :

![Horizontal in container](assets/en/relations/Custom-relation-button-constraints.png)

Pour informer l'éditeur de projet que tous les éléments compris dans cette vue seront dupliqués, nous devons ajouter un TAG à chaque élément et à chaque contrainte.


### Ajouter des TAGS

Chaque élément du storyboard possède un identifiant d'objet. For example, if you select Field View 2 and go to the **Identity inspector**, you'll see its Object ID:

![Object ID Storyboard](assets/en/relations/Custom-button-object-id-storyboard.png)

Le processus est un peu délicat... Nous allons donc commencer par ouvrir le fichier storyboard avec l'éditeur de code de votre choix !

#### Ajouter un tag à la contrainte de hauteur

Etape 1. Sélectionnez-le à partir du Storyboard pour lire l'identifiant de l'objet

![Horizontal constraint object ID](assets/en/relations/Horizontal-constraint-object-ID.png)

Etape 2. Recherchez cet ID dans le fichier xml et remplacez-le par **TAG-RL-007** (un Tag qui n'est pas déjà utilisé).

Étape 3. Enregistrez le fichier xml

![Horizontal constraint xml file](assets/en/relations/Horizontal-constraint-xml-file.png)

Etape 4. Concentrez-vous sur le Storyboard pour vérifier si la contrainte a été mise à jour correctement

![Horizontal object ID updated](assets/en/relations/Horizontal-object-id-updated.png)

Et voilà ! Votre bouton est maintenant entièrement duplicable si vous avez plus d'un bouton de lien à afficher ...

## Que faire ensuite ?

Dans ce tutoriel, nous avons couvert les aspects fondamentaux de la création de boutons Relation. Cliquez sur le Projet final ci-dessous pour télécharger le bouton de liens personnalisé.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip">BOUTON PERSONNALISE FINAL</a>
</div>
