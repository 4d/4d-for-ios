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
* Pour ces types de filtres de recherche, vous pouvez choisir d’intégrer des données à l’application ou de charger les données après la connexion, en cochant la case **Embed data into the built application**.
* La taille sera calculée lors de la première génération pour visualiser la **taille de vos données**.</div> 

Si vous générez votre application et que vous tapez « michelle.simpson@mail.com » comme étant l’e-mail de connexion, vous verrez que tous les contrats *In Progress* s’affichent dans le simulateur !

![iOS app with basic query](assets/restricted-queries/restrited-queries-basic-query.png)

Cela ne correspond pas tout à fait à ce que nous avions prévu ! A présent, nous souhaitons visualiser uniquement les contrats *In Progress* de chaque chargé de clientèle. Finalisons donc notre recherche !