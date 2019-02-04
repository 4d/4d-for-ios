---
id: customize-your-ios-app
title: Personnaliser son application 4D for iOS
---
Nous allons apporter quelques modifications au Storyboard... de la plus simple à la plus complexe.

![Final result](assets/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## ÉTAPE 1. Modification simple du libellé

Nous allons commencer par modifier la police et la couleur du libellé :

* Ouvrez le fichier *ContactDetailsForm.storyboard* à partir de l’onglet Navigation. 
* Cliquez sur le libellé First Name (vous pouvez également le sélectionner depuis l'Interface Builder ou le volet de gauche).
* Sélectionnez le volet Attributes inspector (Inspecteur d'attributs) dans Utility area (la zone de fonctionnalités).

![Attributes inspector](assets/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Remplacez la police Helvetica Neue Bold par Futura Bold. 

![Attributes inspector font](assets/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* Vous pouvez également modifier la couleur de la police dans le même volet.

![Attributes inspector color](assets/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## ÉTAPE 2. Modification de l'emplacement de la photo de profil

All 4D for iOS templates use constraints for the app's elements to be well displayed on all devices.

Dans le fichier *ContactDetailsForm.storyboard*, les libellés Photo, First Name et Last Name sont actuellement centrés.

Nous allons apporter quelques modifications de façon à les afficher comme suit :

![Simulator result](assets/customize-with-xcode/Simlator-Final-Xcode-4D-for-iOS.png)

Tout d’abord, alignez l’image verticalement et faites glisser les libellés First Name et Last Name à droite de l’image.

Sélectionnez ensuite l’image et accédez au volet Size attributes (attributs des dimensions) depuis la Utility zone (la zone de fonctionnalités). Remplacez la valeur 161.67 de X par la valeur 40,67 et la valeur 28 de Y par la valeur 79.

![Profil picture position](assets/customize-with-xcode/Profil-picture-position-Xcode-4D-for-iOS.png)

Comme vous pouvez le voir, l'emplacement a changé mais Xcode affiche des lignes jaunes. Pourquoi ? These yellow lines represent constraints which are no longer valid.

## ÉTAPE 3. Mise à jour des restrictions de la photo de profil

Pour aligner verticalement l’image au centre, dans le Superview (l’affichage qui contient l'image), nous devons supprimer les contraintes (Constraints) existantes et en ajouter de nouvelles.

L’image présente actuellement les restrictions suivantes :

* Width Equals : une hauteur fixe de 78 pixels.
* Height Equals : une hauteur fixe de 78 pixels.
* Align Center X : un centrage de l’image sur un axe horizontal défini précédemment.
* Top Space : un espace fixe entre le haut de l’image et le haut de la vue.
* Bottom space <first name>: l’espace défini précédemment entre le libellé First Name et l’image.

![Profil picture constraints](assets/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Supprimez toutes les contraintes à l'exception de Width et Height (vous devrez les modifier plus tard à partir du Size inspector (l'inspecteur de dimensions) dans la section "Constraints" consacrée aux contraintes). Le contour de l’image devrait maintenant être en rouge car les contraintes ne sont pas renseignées.

Cliquez sur le bouton Align (dans la partie inférieure de la fenêtre Interface Builder) et cochez la case **Vertically in Container**.

![Profil picture Align](assets/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Cliquez ensuite sur le bouton **Add New Constraints** et ajoutez une contrainte de leading space (la contrainte de gauche).

![Profil picture new constraints](assets/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

À ce stade, toutes les contraintes de photo de profil doivent être en bleu.

Félicitations ! Your profile picture is now well positioned with the correct constraints.<div class = "tips"> 

**CONSEILS**

* Pour créer une contrainte entre deux vues, appuyez sur Ctrl et faites glisser une vue vers l’autre. Lorsque vous relâchez le bouton de la souris, l’Interface Builder affiche un menu avec une liste de contraintes éventuelles.

* Vous pouvez supprimer des contraintes en les sélectionnant depuis le Size inspector (l’inspecteur de dimensions) ou bien depuis l’Interface Builder.</div> 

## ÉTAPE 4. Mise à jour de la position et des contraintes des libellés

#### Nous allons nous pencher sur le libellé First Name.

Nous allons commencer par modifier l'emplacement et la largeur :

* Sélectionnez le premier libellé First Name à partir de l'Interface Buider
* Remplacez ensuite la valeur 386 pixels de la largeur par 267 pixels.
* Remplacez la valeur 8 pixels de X par 40,67 pixels et la valeur 28 pixels de Y par 79 pixels.

![First Name Label position](assets/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modifiez les restrictions restantes :

* Supprimez les restrictions de leading space et de bottom space à partir du Size inspector.
* Ajoutez une contrainte de leading space en cliquant sur le bouton **Add New Constraints** pour placer le libellé First Name à droite de la photo de profil.
* Appuyez sur la touche Ctrl et faites glisser le libellé First Name vers la photo de profil. Sélectionnez la contrainte supérieure dans le menu pour aligner les deux éléments vers le haut.

![First Name Label top constraint](assets/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Pour finir, nous allons traiter le libellé Last Name.

Modifiez l'emplacement et la largeur :

* Sélectionnez le premier libellé Last Name à partir de l'Interface Buider
* Remplacez la valeur 386 pixels de la largeur par 267 pixels.
* Remplacez la valeur 8 pixels de X par 127 pixels et la valeur 144.33 pixels de Y par 118.33 pixels.

![Last Name Label position](assets/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modifiez les restrictions restantes :

* Supprimez les restrictions de leading space à partir du Size inspector.
* Ajoutez des contraintes d'espace principal et d'espace supérieur en cliquant sur le bouton Add New Constraints. 

![Last Name Label constraint](assets/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Vos deux libellés de nom sont maintenant repositionnés.

Voyons les résultats dans le simulateur !

![Simulator result](assets/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hum... Cela ne correspond pas exactement à ce que nous souhaitions.

* Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector. 

![Labels Alignment](assets/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Next, select the Profile picture and double click on the leading space constraint.
* Change the Constant value from 40.67 to 80 pixels.

![Constraints adjustments](assets/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Much better! Now all constraints are working and the labels aren't breaking other constraints.

As you can see, customizing your app is very simple!