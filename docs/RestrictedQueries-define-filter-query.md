---
id: define-filter-query
title: Define a filter query
sidebar_label: Define a filter query
---

For the moment, if you build the Starter Project app and enter "michelle.simpson@mail.com" as the login email (one of the account managers), you'll see **all manager contracts and statuses** (*Closed* and *In Progress*).

![iOS app without queries](assets/restricted-queries/ios-app-without-queries.png)

As we discussed earlier, we want the account managers to access their *In Progress* contracts by logging into their mobile app with their email. To do this:

* Go to the **Data section**
* Right-click in the **Filter query** field to make the **Field, Comparators and Operators buttons** appear.
* Click on the **Fields** button and select **Status**.
* Click on the **Comparators** button and select **Equal to**.
* Because you want to display *open* contracts, enter **In progress**.

```
Status = 'In Progress'
```

* Remember to validate your query by clicking on the **Validate** button, otherwise you won't be able to build your app.

You should have this result:

![CRM database](assets/restricted-queries/filterquery.png)

<div markdown="1" class = "tips">

**NOTE**

* A **filter** icon is displayed at the right of each table when a basic filter is applied to it.
* For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the **Embed data into the built application** checkbox.
* Size will be calculated at the first build for you to visualize the **size of your data**.

</div>

If you build your app and enter "michelle.simpson@mail.com" as the login email, you'll see that all contracts *In Progress* are displayed in the Simulator!

![iOS app with basic query](assets/restricted-queries/restrited-queries-basic-query.png)

Not exactly what we expected! What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query!


