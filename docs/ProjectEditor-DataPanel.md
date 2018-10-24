---
id: data
title: Data
sidebar_label: Data
---

This section allows you to:
* define which data you want to include in your app (**Current data file** or **Production server data file**)
* **regenerate data** automatically each time you build your app or generate it manually
* filter data that you want to vizualise in your app depending on **general filter queries** or **user's informations** 

![Data section](assets/project-editor/Data-tab-4D-for-iOS.png)


## Data source panel

![Data section](assets/project-editor/Data-source-panel-4D-for-iOS.png)


This panel allows you to define your **data source**. Then you can choose to get data from the **Current data file** or getting data from a **Production server**.

To secure the production server access, a **key file** needs to be generated from the production server and physically communicated to the developer. Then the developer can select this key file from the project editor in order to access to the production server data.

The **Production URL** needs to be filled from the **Publishing section** if you choose to get data from your production server. 

Here you can also check if the server is available and activate it if it's off.

<div markdown="1" class = "tips">

**NOTE**

* Tips are there to help you and tell you what is missing for the server to work correctly.
* You can access directly to Publishing panel to define your production url.
* Then to access the production server data, a key file is required for the communications to be secured.

</div>


In this panel you can also define if you want to **Regenerate data systematically** at each build of not. 

When the **Do not regenerate data at each build** option is checked, this will enable you to save a considerable amount of time when you build your app. And you can still Generate manually your data clicking on the **Regenerate button**.


## Properties panel

![Data section](assets/project-editor/Properties-Panel-4D-for-iOS.png)

In this Properties panel, you will be able to define all the filter you want for each table based on **defined filter queries** or based on **user's parameters**.

### Filtering with query filters

Here you can define filters per table depending on field values:

* First enter your query in the dedicated field typing it directly in the query field. You can also compose your query using fields, comparators and orperators that are available just above the query field when it is focused. That can be helpfull defining your query

* You have to validate your query each time you modify it (a query that have been edited and not validated is in red in the project editor)

* Check the Embed data into the built application to embed data into the built application or leave it unckecked if not.

When a query filter is valid an funnel icon appears to indicate that the defined filter is based on a defined filter query.

<div markdown="1" class = "tips">

**EXAMPLE** 

FirstName = 'David' & LastName = 'Azancot'

*This query allows you to display only the records that includes David as FirstName and Azancot as LastName*

</div>


### Filtering with user's information filters

Here you will be able to define filters you want depending on user informations you define in the Mobile App Authentication method:

* As for query filters you have to first define your query in the dedicated field

* To specify that the this query depends on user informations just add ":" before the critera you want to define as a filter

* As for query filster, you have to validate your query each time you modify it

* Once it is validated a buttons appears to allow you to adding information about users in the Mobile App Authentication method.


When a query filter is valid an user icon appears to indicate that the defined filter is based on user's informations



<div markdown="1" class = "tips">

**EXAMPLE:** 

CityName = :'Paris'

*This query allows you to display only the records which include Paris as CityName*

</div>


