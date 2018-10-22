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


## Integrated data source panel

This panel allows you to define your **data source**. Then you can choose to get data from the **Current data file** or getting data from a **Production server**.

To secure the access to the production server, a **key file** needs to be generated from the production server and physically communicated to the developer. Then the developer have to select this key file.

The production url needs to be filled from the **Publishing section** if you choose to get data from your production server. 



Here you can also check if the server is available and activate it if it's off.

<div markdown="1" class = "tips">

**NOTE**

* Tips are there to help you and tell you what is missing for the server to work correctly.
* You can access directly to Publishing panel to define your production url.
* Then to access the production server data, a key file is required for the communications to be secured.

</div>


In this panel you can also define if you want to **Regenerate data systematically** at each build of not. 

When the **Do not regenerate data at each build** option is checked, this will enable you to save a considerable amount of time when you build your app. And you can still Generate manually your data clicking on the **Regenerate button** when the Regenerate data.


## Properties panel

There you will be able to define all the filter you want for each table based on **defined filter queries** or based on **user's parameters**.

### Filtering with query filters

Here you can define filter per table defining depending on field values.

First click on the empty field to enter your first filter query


**Example:** FieldName = 'David'

This query allows you to display only the records which include Davd as FieldName

For all those query filters you can decide to embed data into your app or loading them after a first reload.



### Filtering with user information filters

There you have to define the user info you want in the Mobile App Authentication method in the Publishing section

When a filter query is defined a button appear to allow you add missing information in the On Mobile app Authentication method.

When your filter is define for a user, a user icons appear next to the table that have been 


<div markdown="1" class = "tips">

**NOTE**

You can access directly to your database method from this panel if your define user information based filter 
</div>

**Example:** CityName = :Paris

This query allows you to display only the records which include Paris as CityName

<div markdown="1" class = "tips">

**NOTE**

To help you identify your filers,
Icons are helping you identify if a basic query or user informations based filters are use for each table.


</div>