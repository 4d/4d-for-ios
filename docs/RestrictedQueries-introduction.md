---
id: filter-query-introduction
title: Restricted queries
sidebar_label: Restricted queries
---

<div markdown="1" class = "objectives">

**OBJECTIVES**

* Defining basic and user's information based query filters to display filtered content in the generated iOS app
</div>

<div markdown="1" class = "prerequisites">

**PREREQUISITES**

* Click [here](prerequisites.html) to see what you'll need to get started!

</div>


In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you are an account managers and you want to consult your in progress contracts simply by connecting with your email address.

First, from the Data section we are going define a **basic filter query** to only display contracts in progress. Then we are going to apply a **user's information based filter** depending on the Account manager email.


## Download the Starter Project

Before we begin, be sure to download the **Starter Project** which includes:
* A **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)


<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="../assets/restricted-queries/4DforiOSQueries.zip">STARTER PROJECT</a>
</div>

The database includes :
* **CRM table** that with all data we want to display into the generated iOS app
* **AccountManager table** that includes basic Account manager informations (email and name)

![CRM database](assets/restricted-queries/CRMDatabase.png)

<div markdown="1" class = "tips">

**NOTE**

* This project use [custom templates](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), [custom icons](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) and custom [data formatters](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html).

</div>

You are now ready to define your first restricted query!

Open the mobile project clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.