---
id: n-to-one-relations
title: N to one relations
sidebar_label: N to one relations
---
4D v17 R5 includes a new concept: deal with N to 1 relations<div class = "tips"> 

**NOTE**

In this tutorial we will use the link names between your table. Giving desriptive link names can make your project structure definition easier.</div> 

Let's get started by downloading the Starter Project:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/relations/Tasks.4dbase.zip">N TO ONE STARTER PROJECT</a>

  </p>
</div>

Here we want to get the category for each task display in the detail form of your generated app. For that, open the **StarteriOSProject** from **Open > Mobile Project...**

Then go right to your Structure section and select the **Task table**.

### Structure section

* You can notice the **TaskCategory link** underlined

* Clicking on it will display fields available through this link

* Select the **Name field**

![Select link from structure section](assets/relations/select-link-from-structure.png)

* This field is going to work as any other field for the rest of the app creation process

* You can then select an icon as well as formatters and define short long labels from the Labels and Icons section

![Related field from Labels and Icons section](assets/relations/related-field-from-labels-icons.png)

* Go to the the Forms section and drag the field in the Task Detail form

![Related field in Forms section](assets/relations/related-field-forms.png)

* Build and Run

* You should see your related field in your app detail form !