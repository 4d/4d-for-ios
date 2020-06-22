---
id: customize-your-ios-app
title: Personnaliser une application 4D for iOS
---

Let's do some storyboard modification ... from simple to complex.

![Final result](assets/en/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## ÉTAPE 1. Modification simple du libellé

Nous allons commencer par modifier la police et la couleur du libellé :

* Open the *ContactDetailsForm.storyboard* file from the Navigation tab.
* Cliquez sur le libellé First Name (vous pouvez également le sélectionner depuis l'Interface Builder ou le volet de gauche).
* Sélectionnez le volet Attributes inspector (Inspecteur d'attributs) dans Utility area (la zone de fonctionnalités).

![Attributes inspector](assets/en/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Remplacez la police Helvetica Neue Bold par Futura Bold.

![Attributes inspector font](assets/en/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* Vous pouvez également modifier la couleur de la police dans le même volet.

![Attributes inspector color](assets/en/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## ÉTAPE 2. Modification de la position de la photo de profil

Tous les modèles de 4D for iOS appliquent des contraintes aux éléments de l'application afin qu'ils s'affichent correctement sur tous les appareils.

In the *ContactDetailsForm.storyboard* file, the picture, First Name, and Last Name labels are all currently center aligned.

Nous allons apporter quelques modifications de façon à les afficher comme suit :

![Simulator result](assets/en/customize-with-xcode/Simlator-Final-Xcode-4D-for-iOS.png)

Tout d’abord, alignez l’image verticalement et faites glisser les libellés First Name et Last Name à droite de l’image.

Sélectionnez ensuite l’image et accédez au volet Size attributes (attributs des dimensions) depuis la Utility zone (la zone de fonctionnalités). Remplacez la valeur 161.67 de X par la valeur 40,67 et la valeur 28 de Y par la valeur 79.

![Profil picture position](assets/en/customize-with-xcode/Profil-picture-position-Xcode-4D-for-iOS.png)

Comme vous pouvez le voir, la position a changé mais Xcode affiche des lignes jaunes. Pourquoi ? Ces lignes jaunes représentent des contraintes qui ne sont plus valables.

## ÉTAPE 3. Mise à jour des contraintes de la photo de profil

Pour aligner verticalement l’image au centre, dans le Superview (l’affichage qui contient l'image), nous devons supprimer les contraintes (Constraints) existantes et en ajouter de nouvelles.

L’image présente actuellement les contraintes suivantes :

* Width Equals : une largeur de 78 pixels.
* Height Equals : une hauteur de 78 pixels.
* Align Center X : un centrage de l’image sur un axe horizontal défini précédemment.
* Top Space : un espace allant de la partie supérieure de l'image à la partie supérieure de la vue.
* Bottom space <First Name>: l’espace défini précédemment entre le libellé First Name et l’image.

![Profil picture constraints](assets/en/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Supprimez toutes les contraintes à l'exception de Width et Height (vous devrez les modifier plus tard à partir du Size inspector (l'inspecteur de dimensions) dans la section "Constraints" consacrée aux contraintes). Le contour de l’image devrait maintenant être en rouge car les contraintes ne sont pas renseignées.

Click on the Align button (at the bottom of the Interface Builder window) and check the **Vertically in Container** checkbox.

![Profil picture Align](assets/en/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Next, click on the **Add New Constraints** button and add a leading space constraint (the left constraint).

![Profil picture new constraints](assets/en/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

À ce stade, toutes les contraintes de photo de profil doivent être en bleu.

Félicitations ! Votre photo de profil est maintenant bien placée et respecte les contraintes définies.

<div markdown="1" class = "tips">
**ASTUCES**

* Pour créer une contrainte entre deux vues, appuyez sur Ctrl et faites glisser une vue vers l’autre. Lorsque vous relâchez le bouton de la souris, l’Interface Builder affiche un menu avec une liste de contraintes éventuelles.

* Vous pouvez supprimer des contraintes en les sélectionnant depuis le Size inspector (l’inspecteur de dimensions) ou bien depuis l’Interface Builder.
</div>

## ÉTAPE 4. Mise à jour de la position et des contraintes des libellés

#### Nous allons nous pencher sur le libellé First Name.

Nous allons commencer par modifier la position et la largeur :

* Sélectionnez le premier libellé First Name à partir de l'Interface Builder.
* Remplacez ensuite la valeur 386 pixels de la largeur par 267 pixels.
* Remplacez la valeur 8 pixels de X par 40,67 pixels et la valeur 28 pixels de Y par 79 pixels.

![First Name Label position](assets/en/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modifiez les contraintes restantes :

* Supprimez les contraintes de leading space et de bottom space à partir du Size inspector.
* Add a leading space constraint by clicking on the **Add New Constraints** button to position the First Name label to the right of the Profile picture.
* Appuyez sur la touche Ctrl et faites glisser le libellé First Name vers la photo de profil. Sélectionnez la contrainte supérieure dans le menu pour aligner les deux éléments vers le haut.

![First Name Label top constraint](assets/en/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Pour finir, concentrons-nous sur le libellé Last Name.

Modifiez l'emplacement et la largeur :

* Sélectionnez le premier libellé Last Name à partir de l'Interface Buider
* Remplacez la valeur 386 pixels de la largeur par 267 pixels.
* Remplacez la valeur 8 pixels de X par 127 pixels et la valeur 144.33 pixels de Y par 118.33 pixels.

![Last Name Label position](assets/en/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modifiez les contraintes restantes :

* Supprimez les contraintes de leading space à partir du Size inspector.
* Ajoutez des contraintes d'espace principal et d'espace supérieur en cliquant sur le bouton Add New Constraints.

![Last Name Label constraint](assets/en/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Vos deux libellés sont maintenant repositionnés.

Voyons les résultats dans le simulateur !

![Simulator result](assets/en/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hum... Cela ne correspond pas exactement à ce que nous souhaitions.

* Sélectionnez les libellés First Name et Last Name et remplacez l'alignement centré par un alignement à gauche dans l'Attributes inspector.

![Labels Alignment](assets/en/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Sélectionnez ensuite la photo de profil et double-cliquez sur la contrainte de leading space.
* Remplacez la valeur 40.67 pixels de la constante par la valeur 80 pixels.

![Constraints adjustments](assets/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

C'est beaucoup mieux ! Désormais, toutes les contraintes sont appliquées et les libellés sont conformes aux autres contraintes.

Comme vous avez pu le voir, la personnalisation de votre application est très simple !
