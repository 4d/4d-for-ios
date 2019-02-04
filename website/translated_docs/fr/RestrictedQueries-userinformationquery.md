---
id: user-information-query
title: Filtre de recherche utilisateur
---
Nous allons maintenant filtrer le contenu de notre application en fonction de l'adresse mail de connexion du chargé de clientèle (information utilisateur) :

* Accédez à la **section "Données"**. 
* Faites un clic droit dans le champ **Filtre de recherche** pour faire apparaitre les **boutons Field, Comparators et Operators**.
* Cliquez sur le bouton **Operators** et sélectionnez **AND**.
* Now define the user information you want to get from the database method, **:email**.
* Remember to validate the query by clicking on the **Validate** button. If not, you won't be able to build your app.

![User information query](assets/restricted-queries/user-information-query.png)

    Status = 'In Progress' & manager.Email = :email 
    

La recherche filtrera les données en fonction du statut **In Progress** ET de **l'adresse e-mail du chargé de clientèle** (accessible depuis la table AccountManager grâce à la relation *Many-to-One* figurant dans le nom du chargé de clientèle).<div class = "tips"> 

**NOTE**

* Une **icône utilisateur** s’affiche à droite de chaque table lorsqu’un filtre d'informations utilisateur y est appliqué.
* Dès qu’une recherche est basée sur les informations utilisateur et est validée, vous devez modifier la **méthode d'authentification de l'application mobile**. Pour ce faire, faites un clic droit sur le bouton **Edit authentication method** pour ouvrir la fenêtre d’édition de la méthode de base de données.</div> 

Ajoutez la ligne suivante dans la méthode de base de données :

    $response.userInfo:=New object("email";$request.email)
    

Cela permettra de récupérer l’adresse mail de connexion du chargé de clientèle et d'afficher les données selon ce critère.

![User information query](assets/restricted-queries/database-method-user-information-query.png)

Maintenant, si vous générez votre application et que vous entrez « michelle.simpson@mail.com » en tant qu'e-mail de connexion, vous trouverez tous les contrats *"In progress"* de Michelle Simpson.

![Final result](assets/restricted-queries/restricted-queries-final-result.png)