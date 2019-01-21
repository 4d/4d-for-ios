---
id: user-information-query
title: Filtre de recherche utilisateur
sidebar_label: Filtre de recherche utilisateur
---
Nous allons maintenant filtrer le contenu de notre application en fonction de l'adresse e-mail de connexion du chargé de clientèle (information utilisateur) :

* Accédez à la **section "Données"**. 
* Faites un clic droit dans le champ **Filtre de recherche** pour faire apparaitre les **boutons Field, Comparators et Operators**.
* Cliquez sur le bouton **Operators** et sélectionnez **AND**.
* Now define the user information you want to get from the database method, **:email** .

    Status = 'In Progress' & manager.Email = :email 
    

* Remember to validate the query by clicking on the **Validate** button. If not, you won't be able to build your app.

![User information query](assets/restricted-queries/user-information-query.png)

The query will filter data depending on the **In Progress** status AND the **Account manager's email address** (accessible from the AccountManager table thanks to the *Many-to-One* relation on the manager's name).<div class = "tips"> 

**NOTE**

* A **user icon** is displayed on the right of each table when a user information filter is applied to it.
* As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window.</div> 

Add the following line in the database method:

    $response.userInfo:=New object("email";$request.email)
    

This will allow retrieving the manager's login email address and displaying data depending on that criteria.

![User information query](assets/restricted-queries/database-method-user-information-query.png)

Now if you build your app and enter "michelle.simpson@mail.com" as login email, you'll find all of Michelle Simpson's *"In progress"* contracts.

![Final result](assets/restricted-queries/restricted-queries-final-result.png)