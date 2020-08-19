---
id: user-information-query
title: Filtre de recherche - informations utilisateur
---

Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du chargé de clientèle (information utilisateur) :

* Accédez à la **section "Données"**.
* Faites un clic droit dans le champ **Filtre de recherche** pour faire apparaître les **boutons Champs, Comparateurs et Opérateurs**.
* Cliquez sur le bouton **Operators** et sélectionnez **AND**.
* Définissez maintenant les informations utilisateur (**: email**) que vous souhaitez obtenir à partir de la méthode de base de données.
* Souvenez-vous de valider la recherche en cliquant sur le bouton **Valider**. Sinon, vous ne pourrez plus créer votre application.

![Filtre de recherche - informations utilisateur](assets/en/restricted-queries/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

La recherche permettra de filtrer les données en fonction du statut **In Progress** ET de **l'e-mail du chargé de clientèle** (accessible depuis la table AccountManager grâce au lien *N vers 1* qui figure dans le nom du chargé de clientèle).

> **NOTE**
> 
> * Une **icône utilisateur** s’affiche à droite de chaque table lorsqu’un filtre d'informations utilisateur y est appliqué.
> * Dès qu’une recherche est basée sur les informations utilisateur et qu'elle est validée, vous devez modifier la **méthode d'authentification de l'application mobile**. Pour ce faire, faites un clic droit sur le bouton **Edit authentication method** pour ouvrir la fenêtre d’édition de la méthode de base de données.


Ajoutez la ligne suivante dans la méthode de base de données :

```4d
$response.userInfo:=New object("email";$request.email)
```

Cela permettra de récupérer l’adresse mail de connexion du chargé de clientèle et d'afficher les données selon ce critère.

![Filtre de recherche - informations utilisateur](assets/restricted-queries/database-method-user-information-query.png)

Ainsi, si vous générez votre application et que vous entrez « michelle.simpson@mail.com » en tant qu'e-mail de connexion, vous trouverez tous les contrats *"In progress"* de Michelle Simpson.

![Final result](assets/restricted-queries/restricted-queries-final-result.png)




