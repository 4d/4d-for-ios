---
id: filter-query-introduction
title: Introduction
sidebar_label: Introduction
---

<div markdown="1" class = "objectives">

**OBJECTIVES**

* Create basic and user's informatio based query filters in 4D for iOS
</div>

<div markdown="1" class = "prerequisites">

**PREREQUISITES**

* Click [here](prerequisites.html) to see what you'll need to get started!

</div>


In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you have account managers and you want them to be able to consult their in progress contracts by connecting with their email address.

First, from the Data section we are going to filter the app content to display only contracts in progress. The we are going to apply a **user's information based filter** depending on the Account manager email.


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

You are now ready to define your first restricted query!

Open the mobile project clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.