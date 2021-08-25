---
id: forms
title: Formulaires
---

La section Formulaires vous permet de sélectionner des modèles de formulaire Liste et de formulaires détaillés pour chaque table.

4D for iOS fournit différents modèles avec des effets de transitions personnalisés pour générer des applications iOS modernes.

Voici la répartition de cet écran, de haut en bas :

* **Les formulaires Liste et les formulaires détaillés :** permettent de basculer entre les formulaires Liste et les formulaires détaillés pour chaque table.
* **Les tables publiées :** affichent toutes les tables publiées dans la section Structure.
* **Les formulaires disponibles :** permettent de basculer entre la sélection du modèle et la définition du contenu.

![List form template selection](assets/fr/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## Les formulaires Liste

Des modèles simples et vierges sont utilisés par défaut pour les formulaires Liste et les formulaires détaillés d'une application.

Sélectionnez un modèle pour votre première table. Sélectionnez un modèle pour votre première table. Vous pouvez ensuite faire glisser et déposer les champs de la liste directement sur le modèle affiché sur la droite. La plupart des formulaires Liste comprennent des champs facultatifs Recherche et Section.

![List form content definition](assets/fr/project-editor/Forms-section-content-definition-4D-for-iOS.png)

About the Search field, R6 version add a really nice feature with the Barcode search feature.

To activate it, just click on the magnifying glass and check the **Barcode Scanner** option !

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

This feature will allow two things :

* Filtering a list form scanning a Barcode that contains a text value. This will fill the Search Bar and open the detail form if there is only one value left after filtering.
* Displaying specific list and detail forms just by scanning a barcode whose values are URL Schemes or Universal Links after [Deep linking](deep-linking) feature activation.

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Les formulaires détaillés

![Detail form template selection](assets/fr/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

Tout comme pour le formulaire Liste, sélectionnez un modèle et ajoutez vos champs sur votre formulaire détaillé.

Il existe plusieurs façons d'ajouter vos champs dans les formulaires détaillés :

* Vous pouvez faire glisser et déposer des champs n'importe où dans la vue SVG pour les ajouter et les afficher juste après le dernier champ ajouté ou entre tout autre champ déjà affiché.

* Double-cliquez sur un champ. Votre champ sera ajouté à la fin de la liste.

* Faites un clic droit sur l'un des champs disponibles dans le tableau Champs à gauche : cela affichera un menu qui vous permettra d'ajouter tous les champs manquants à vos formulaires détaillés.

![Detail form content definition](assets/fr/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

Vous pouvez ajouter autant de champs que possible pour la plupart des formulaires détaillés disponibles.

Et à tout moment, vous pouvez réorganiser votre champ en le sélectionnant et le déposer à n'importe quel endroit de votre formulaire détaillé.

> **ASTUCES**
> 
> * Vous souhaitez modifier le modèle de votre formulaire Liste ou de votre formulaire détaillé ? 
> 
> * Lorsque vous modifiez les modèles, les types de champs sont automatiquement reconnus, sauvegardés et placés dans les zones appropriées (selon les modèles et les types de champs).


## Galerie

Vous avez probablement remarqué que, lorsque vous souhaitez sélectionner un modèle dans la section Formulaires, une icône "Plus" est disponible pour les formulaires liste et les formulaires détaillés depuis 4D v18 R3.

![More template button](assets/en/project-editor/Forms-more-button.png)

Cliquez simplement sur cette icône pour afficher la liste entière.

![Template picker more button](assets/en/project-editor/Forms-template-gallery.png)

Ensuite, la seule chose à faire est de sélectionner le modèle qui correspond à vos besoins. 4D for iOS se chargera de tout le processus d'installation pour vous aider à travailler plus rapidement et plus efficacement.

Vous pouvez donc commencer directement à travailler sur le modèle, puisqu'il est prêt à l'emploi.

> **ASTUCES**
> 
> La galerie est également disponible [en ligne](https://4d-for-ios.github.io/gallery/).


## Que faire ensuite ?

La prochaine étape consiste à choisir un template qui répond à vos besoins, mais dans le cas où un élément serait manquant, un [tutoriel](gallery-template-update.html) vous aidera à effectuer une **mise à jour de template**.
