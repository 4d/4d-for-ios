---
id: forms
title: Formulaires
---

La section Formulaires vous permet de sélectionner des modèles de formulaire Liste et de formulaires détaillés pour chaque table.

4D for iOS provides various templates with custom transition effects to build modern iOS applications.

Voici la répartition de cet écran, de haut en bas :

* **Les formulaires Liste et les formulaires détaillés :** permettent de basculer entre les formulaires Liste et les formulaires détaillés pour chaque table.
* **Les tables publiées :** affichent toutes les tables publiées dans la section Structure.
* **Les formulaires disponibles :** permettent de basculer entre la sélection du modèle et la définition du contenu.

![List form template selection](assets/fr/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## Les formulaires Liste

It's very simple, empty templates are used by default for an app's list and detail forms.

Sélectionnez un modèle pour votre première table. The content definition screen appears. Vous pouvez ensuite faire glisser et déposer les champs de la liste directement sur le modèle affiché sur la droite. La plupart des formulaires Liste comprennent des champs facultatifs Recherche et Section.

![List form content definition](assets/fr/project-editor/Forms-section-content-definition-4D-for-iOS.png)

About the Search field, a really nice Barcode search feature was added in the R6 version.

To activate it, just click on the magnifying glass and check the **Barcode Scanner** option!

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

This feature will allow:

* Filtering a list form by scanning a Barcode that contains a text value. This will fill the Search Bar and open the detail form if there is only one value left after filtering.
* Displaying specific list and detail forms by simply scanning a barcode which values are URL Schemes or Universal Links after [Deep linking](deep-linking) feature activation.

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Les formulaires détaillés

![Detail form template selection](assets/fr/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

As for the List Form definition, select a template and add your fields onto your detail form.

There are several ways to add your fields in Detail forms:

* You can drag and drop fields anywhere into the SVG view to add it and display it just after the last added field or between any other field that is already displayed.

* Double-cliquez sur un champ. It will be added to the list.

* Right-click on one of the fields that are available in the Fields table at the left: this will display a menu to add all missing fields to your Detail forms.

![Detail form content definition](assets/fr/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

You can add as many fields for most of the detail forms available.

And at any moment, you can reorder your field by selecting it and dropping it at any place in your detail form.

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

Then, the only thing you need to do is selecting the template that suits your needs and 4D for iOS will handle all the installation process to help you work faster and more efficiently.

You can now start working on the template, as it is ready-to-use!

> **ASTUCES**
> 
> La galerie est également disponible [en ligne](https://4d-for-ios.github.io/gallery/).


## Que faire ensuite ?

Next step: choose a template that suits your needs, and in case something is missing, a [tutorial](gallery-template-update.html) will help you making a **template update**.
