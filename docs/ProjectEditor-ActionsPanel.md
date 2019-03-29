---
id: actions
title: Actions
---

This section allows you to define actions names, icons and scope for each table.

## Project editor Side

* **Names:** Add a new actions clicking on Plus button.
* **Icons:** Select an icon for your action from your icon library. You can also add yours following this [tutorial](using-icons.html).
* **Table:** Select the table you want to apply the action on.
* **Scope:** Select if you want to apply the action on an **entity** or on a **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

A new database method [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) is available to call your all your 4D methods.

## iOS app Side

In your iOS app, actions are be available in different ways in your Listforms and Detailforms depending on the templates that you select in the form section. 

### Table List forms

* **Entity action:** swipe left on a cell to display available actions in a List form. A more button is displayed if you define more that 3 actions for an entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** a generic actions button is available in the navigation bar to display a list of table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

### Collection List forms

* **Entity action:** depending on the template, actions are displayed clicking on a generic button or maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** as for Table List forms, a generic actions button is available in the navigation bar to display a list of table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)


### Detail forms

As for Table actions in List forms, a generic actions button is available in the navigation bar to display all your entity actions in a list. 

![Entity Detailform](assets/en/actions/Detailform-final.png)

## Where to Go From Here?

* We will see [later](action-custom-template.html#step-4-add-actions-in-detail-forms) how to include your own **custom action button** in detail forms.

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.
