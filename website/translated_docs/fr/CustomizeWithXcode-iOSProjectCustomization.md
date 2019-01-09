---
id: customize-your-ios-app
title: Personnalisez votre application 4D for iOS
sidebar_label: Personnalisez votre application 4D for iOS
---
Nous allons apporter quelques modifications au Storyboard... du plus simple au plus complexe.

![Final result](assets/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## ÉTAPE 1. Modification simple du libellé

Nous allons commencer par modifier la police et la couleur du libellé :

* Ouvrez le fichier *ContactDetailsForm.storyboard* à partir de l’onglet Navigation. 
* Cliquez sur le libellé First Name (vous pouvez également le sélectionner depuis le générateur d’interface ou le volet de gauche).
* Sélectionnez le volet Inspecteur d'attributs dans la zone Utility.

![Attributes inspector](assets/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Remplacez la police Helvetica Neue Bold par Futura Bold. 

![Attributes inspector font](assets/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* Vous pouvez également modifier la couleur de la police dans le même volet.

![Attributes inspector color](assets/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## ÉTAPE 2. Modification de l'emplacement de la photo de profil

Tous les modèles de 4D for iOS présentent des contraintes d’utilisation pour les éléments de l’application afin d'être affichés correctement sur tous les appareils.

Dans le fichier *ContactDetailsForm.storyboard*, les libellés Photo, First Name et Last Name les sont actuellement centrés.

Nous allons faire en sorte de les faire apparaitre comme suit :

![Simulator result](assets/customize-with-xcode/Simlator-Final-Xcode-4D-for-iOS.png)

Tout d’abord, alignez l’image verticalement et faites glisser les libellés First Name et Last Name à droite de l’image.

Sélectionnez ensuite l’image et accédez au volet attributs de taille depuis la zone Utility. Remplacez la valeur 161.67 de X par 40,67 et la valeur 28 de Y par 79.

![Profil picture position](assets/customize-with-xcode/Profil-picture-position-Xcode-4D-for-iOS.png)

Comme vous pouvez le voir, l'emplacement a changé mais le Xcode affiche des lignes jaunes. Pourquoi ? Ces lignes jaunes représentent des contraintes qui ne sont plus valides.

## ÉTAPE 3. Mise à jour des contraintes de la photo de profil

Pour aligner verticalement l’image au centre dans le Superview (l’affichage qui contient l'image), nous devons supprimer les contraintes existantes et ajouter de nouvelles contraintes.

L’image présente actuellement les contraintes suivantes : * Width Equals : une largeur fixe de 78 pixels. * Height Equals : une hauteur fixe de 78 pixels. * Align Center X : centre l’image sur un axe horizontal défini précédemment. * Top Space : une quantité d’espace fixe entre le haut de l’image et le haut de la vue. * Bottom space to <first name>: l’espace défini précédemment entre le libellé First Name et l’image.

![Profil picture constraints](assets/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Supprimez toutes les contraintes à l'exception de Width et Height (vous devrez les modifier plus tard à partir de l’inspecteur de taille dans la section des contraintes). Le contour de l’image devrait maintenant être en rouge parce que les contraintes ne sont pas renseignées.

Cliquez sur le bouton Align (dans la partie inférieure de la fenêtre Interface Builder) et cochez la case **Vertically in Container**.

![Profil picture Align](assets/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Cliquez ensuite sur le bouton **Add New Constraints** et ajoutez une contrainte d'espace (la contrainte de gauche).

![Profil picture new constraints](assets/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

À ce stade, toutes les contraintes de photo de profil doivent être en bleu.

Félicitations ! Votre photo de profil est maintenant bien placée, en prenant bien compte des contraintes.<div class = "tips"> 

**CONSEILS**

* Pour créer une contrainte entre deux vues, appuyez sur Ctrl et faites glisser une vue vers l’autre. Lorsque vous relâchez le bouton de la souris, l’Interface Builder affiche un menu avec une liste d'éventuelles contraintes.

* Vous pouvez supprimer des contraintes en les sélectionnant depuis l’inspecteur de taille ou bien depuis l’Interface Builder.</div> 

## ÉTAPE 4. Mise à jour de l'emplacement et des contraintes des libellés

#### Nous allons travailler maintenant sur le libellé First Name.

Nous allons commencer par changer la position et la largeur : * Sélectionnez le libellé First Name dans l’Interface Builder. * Ensuite, remplacez la largeur de 386 pixels par 267 pixels. * Remplacez la valeur 8 pixels de X par 40,67 pixels et la valeur 28 pixels de Y par 79 pixels.

![First Name Label position](assets/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modifiez les contraintes suivantes : * Supprimez les contraintes d'espace principal et d'espace inférieur dans l'inspecteur de taille. * Ajoutez une contrainte d'espace principal en cliquant sur le bouton **Add New Constraints** pour placer le libellé First Name à droite de la photo de profil. * Appuyez sur la touche Ctrl et faites glisser le libellé First Name vers la photo de profil. Sélectionnez la contrainte supérieure dans le menu pour aligner les deux éléments vers le haut.

![First Name Label top constraint](assets/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finally, we'll work on the Last Name label.

Change the position and width: * Select the Last Name label from the Interface Builder. * Change the width from 386 to 267 pixels. * Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.

![Last Name Label position](assets/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints: * Delete the leading space constraints from the Size inspector. * Add a leading space and top constraints by clicking on the Add New Constraints button.

![Last Name Label constraint](assets/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Both of your name labels are now repostioned.

Let's see the results in the Simulator !

![Simulator result](assets/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. That's not exactly the result we wanted ...

* Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector. ![Labels Alignment](assets/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Next, select the Profile picture and double click on the leading space constraint.

* Change the Constant value from 40.67 to 80 pixels.

![Constraints adjustments](assets/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Much better! Now all constraints are working and the labels aren't breaking other constraints.

As you can see, customizing your app is very simple!