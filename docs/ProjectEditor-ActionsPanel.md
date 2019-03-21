---
id: actions
title: Actions
---

This section allows you to define actions names, icons and context for each table.

## Project editor Side

* **Names:** Add a new actions clicking on Plus button.
* **Icons:** Select an icon for your action from your icon library. You can also add your following this [tutorial](using-icons.html).
* **Table:** Select the table to apply the action on.
* **Scope:** Select if you want to apply the action on the Listform (list or for a specfific cell) or Detail form.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

A new database method [On Mobile App Action](www.google.fr) is available to call your all your Actions.

## iOS app Side

In your iOS app, your action will be available in different ways in your Listforms and Detailforms depending on the template you select in the form section. 

### Table List forms

* **Entity actions for cell:** swipe left on a cell to display available actions in a List form. A more button will be displayed if you defined more that 3 actions.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** a generic actions button is available in the navigation bar to display a list of table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

### Collection List forms

* **Entity action for cell:** depending on the template, actions will be displayed clicking on a button or maintaing the clic on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** A button is available to display action sheet.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)


### Detail forms

* A generic actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform.png)

A [tutorial](actions-getting-started.html) is available to guide you through the action definition process.

Another [tutorial](action-custom-template.html) will guide you through the TAG integration for custom templates.
