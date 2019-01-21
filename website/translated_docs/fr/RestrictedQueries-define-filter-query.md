---
id: define-filter-query
title: Définir un filtre de recherche
sidebar_label: Définir un filtre de recherche
---
Pour le moment, si vous générez l'application du projet Starter et que vous entrez « michelle.simpson@mail.com » comme e-mail de connexion (l'un des chargés de clientèle), vous pourrez visualiser **tous les contrats et statuts des chargés de clientèle** (*Closed* and *In Progress*).

![iOS app without queries](assets/restricted-queries/ios-app-without-queries.png)

Comme indiqué précédemment, nous souhaiterions que les chargés de clientèle puissent consulter leurs contrats de *en cours* en se connectant à leur application mobile via leur e-mail. Pour ce faire :

* Accédez à la **section "Données"**
* Faites un clic droit dans le champ **filtre de recherche** pour faire apparaitre les **boutons Field, Comparators et Operators**.
* Cliquez sur le bouton **Champs**et sélectionnez **Status**.
* Cliquez sur le bouton **Comparators** et sélectionnez **Equal to**.
* Si vous souhaitez afficher les contrats *ouverts*, tapez **In progress**.

    Status = 'In Progress'
    

* N’oubliez pas de valider votre recherche en cliquant sur le bouton **Validate**, sinon vous ne serez pas en mesure de créer votre application.

Vous devriez avoir ce résultat :

![CRM database](assets/restricted-queries/filterquery.png)<div class = "tips"> 

**NOTE**

* Une icône de **filtre** s’affiche à droite de chaque table lorsqu’un filtre de base y est appliqué.
* For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the **Embed data into the built application** checkbox.
* Size will be calculated at the first build for you to visualize the **size of your data**.</div> 

If you build your app and enter "michelle.simpson@mail.com" as the login email, you'll see that all contacts *In Progress* are displayed in the Simulator!

![iOS app with basic query](assets/restricted-queries/restrited-queries-basic-query.png)

Not exactly what we expected! What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query!