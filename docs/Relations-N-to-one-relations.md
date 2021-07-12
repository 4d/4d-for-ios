---
id: many-to-one-relations
title: Many to One relations
---

4D v17 R5 includes a new concept: Many to One relations

> **NOTE**
>
> In this tutorial, we will use the relation names between your tables.
>
> Giving descriptive relation names can make your project structure definition easier.

Let's get started by downloading the Starter Project:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">MANY TO ONE STARTER PROJECT</a>
</div>

Here we want to display the category for each task in the detail form of your generated app. To do so, open the **StarteriOSProject** from **Open > Mobile Project...**

Then go right to your Structure section and select the **Task table**.

### Structure section

* You can notice that the **TaskCategory relation** is underlined

* Clicking on it will display available fields through this relation

* Select the **Name field**

![Select link from structure section](assets/en/relations/select-link-from-structure.png)

* This field will operate as any other field for the rest of the app creation process

* You can also filter your app content using related fields from the Data section. To do so enter ```TaskCategory.Name != 'Personal'``` in the Filter query field to exclude personal tasks.

 ![Related field from Data section](assets/en/relations/Related-field-from-Data-section.png)

* You can then select an **icon** as well as **formatters** and define **short and long labels** from the Labels and Icons section

![Related field from Labels and Icons section](assets/en/relations/related-field-from-labels-icons.png)

* Go to the Forms section and drag the field on the Task Detail form

![Related field in Forms section](assets/en/relations/related-field-forms.png)

* Build and Run

You should see your related field in your app detail form !

![Related field in Forms section](assets/en/relations/final-result-n-to-one-relations.png)


