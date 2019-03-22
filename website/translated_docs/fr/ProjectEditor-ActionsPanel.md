---
id: actions
title: Actions
---
Cette section vous permet de définir des noms d'actions, d'icônes et de contexte pour chaque table.

## Éditeur de projet

* **Names :** Ajouter une nouvelle action en cliquant sur le bouton Plus.
* **Icons :** Sélectionnez une icône pour votre action à partir de la librairie d'icônes. Vous pouvez également ajouter votre icône à l'aide de ce [tutoriel](using-icons.html).
* **Table:** Select the table you want to apply the action on.
* **Scope:** Select if you want to apply the action on an **entity** or on a **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

A new database method [On Mobile App Action](www.google.fr) is available to call your all your 4D methods.

## Application iOS

In your iOS app, actions are be available in different ways in your Listforms and Detailforms depending on the templates that you select in the form section.

### Formulaires Liste table

* **Entity action:** swipe left on a cell to display available actions in a List form. A more button is displayed if you define more that 3 actions for an entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions :** Un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions sur la table.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

### Formulaires de Liste collection

* **Entity action:** depending on the template, actions are displayed clicking on a generic button or maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** as for Table List forms, a generic actions button is available in the navigation bar to display a list of table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulaires détaillés

As for Table actions in List forms, a generic actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

## Where to Go From Here?

* We will see [later](action-custom-template.html#step-4-add-actions-in-detail-forms) how to include your own **custom action button** in detail forms.

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.