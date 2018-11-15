---
id: define-filter-query
title: Define a filter query
sidebar_label: Define a filter query
---

For now, if you build the app and enter "michelle.simpson@mail.com" as login email (which is one of the account manager), you will see **all manager contracts and status** (Closed and In Progress).

![iOS app without queries](assets/restricted-queries/ios-app-without-queries.png)

Like discussed earlier, we want the Account managers to access their in progress contracts logging into their mobile app with their email. To do so:

* Go to the **Data section**
* Right click in the **Filter query field** to make **Field, Comparators and Operators buttons** appear.
* Click on **Fields button** and select **Status**
* Click on the **Comparators button** and select **Equal to**
* And you want to display Opened contract so enter **In progress**

```
Status = 'In progress'
```

* Remember to validate your query clicking on the **Validate Button**. If not you will not be able to build your app.

You should have this result :

![CRM database](assets/restricted-queries/filterquery.png)

<div markdown="1" class = "tips">

**NOTE**

* A **filter icon** is displayed at the right of each table when a basic filter is applied to it
* For those kind of filter query, you can choose to embed data into the built application or load data after login checking the **Embed data into the built application** chekbox
* The size will be calculated at the first buid for you to visualize the **size of your data**

</div>

If you build your app, and enter "michelle.simpson@mail.com" as login email, you will se that all contacts in progress are displayed in the simulator!

![iOS app with basic query](assets/restricted-queries/restrited-queries-basic-query.png)

Not exactly what we expect! What we want now is each Account manager to visualize their in progress contracts so let's complete our query!


