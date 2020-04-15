---
id: user-information-query
title: Filtre de recherche utilisateur
---

Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du chargé de clientèle (information utilisateur) :

* Accédez à la **section "Données"**. 
* Faites un clic droit dans le champ **Filtre de recherche** pour faire apparaître les **boutons Champs, Comparateurs et Opérateurs**.
* Cliquez sur le bouton **Operators** et sélectionnez **AND**.
* Définissez maintenant les informations utilisateur (**: email**) que vous souhaitez obtenir à partir de la méthode de base de données.
* Souvenez-vous de valider la recherche en cliquant sur le bouton **Valider**. Sinon, vous ne pourrez plus créer votre application.

![User information query](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

La recherche permettra de filtrer les données en fonction du statut **In Progress** ET de **l'e-mail du chargé de clientèle** (accessible depuis la table AccountManager grâce au lien *N vers 1* qui figure dans le nom du chargé de clientèle).<div class = "tips"> 

**NOTE**

* A **user icon** is displayed on the right of each table when a user information filter is applied to it.
* As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window.</div> 

Add the following line in the database method:

```4d
$response.userInfo:=New object("email";$request.email)
```

This will allow retrieving the manager's login email address and displaying data depending on that criteria.

![Filtre de recherche utilisateur](assets/en/restricted-queries/database-method-user-information-query.png)

Now if you build your app and enter "michelle.simpson@mail.com" as login email, you'll find all of Michelle Simpson's *"In progress"* contracts.

![Final result](assets/en/restricted-queries/restricted-queries-final-result.png)