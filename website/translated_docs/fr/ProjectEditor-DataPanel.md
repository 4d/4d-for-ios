---
id: data
title: Données
---

Cette section vous permet :

* define the data to include in your app (**Current data file** or **Production server data file**),
* automatically **regenerate data** each time you build your app or generate it manually, and
* filter data to vizualize in your app depending on **general filter queries** or **user information**.

![Data section](assets/fr/project-editor/Data-tab-4D-for-iOS.png)

## Source des données

![Data section](assets/fr/project-editor/Data-source-panel-4D-for-iOS.png)

This panel allows you to define your **data source**. You can choose to get data from the **Current data file** or from a **Production server**.

To secure access to the production server, a **key file** must be generated from the production server and physically communicated to the developer. This **key.mobileapp** file is available next to data in the MobileApps folder. Le développeur peut ensuite sélectionner ce fichier dans l’éditeur de projet pour accéder aux données du serveur de production.

The **Production URL** must be entered from the **Publishing section** if you choose to get data from your production server.

Dans la section Données, vous pouvez aussi vérifier la disponibilité du serveur et l’activer si nécessaire.

<div markdown="1" class = "tips">
**NOTE**

* Plusieurs conseils sont fournis pour s'assurer que le serveur fonctionne correctement.
* Vous pouvez accéder directement à la section Publication pour définir votre URL de production.
* Pour accéder aux données du serveur de production, un fichier key. mobileapp est requis pour sécuriser les échanges.
</div>

You can define if you want to **include images** and also whether or not you want to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time building your app. You can always generate your data manually by clicking on the **Regenerate Now button**.


## Propriétés

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table based on **defined filter queries** or based on **user parameters**.

### Les filtres de recherche

Vous pouvez définir des filtres par table, en fonction des valeurs de champ :

* Tout d’abord, effectuez votre recherche dans le champ consacré en la saisissant directement dans le champ de recherche". Vous pouvez également affiner votre recherche à l'aide des onglets Champs, Comparateurs et Opérateurs, situés juste au-dessus du filtre de recherche (qui apparaissent à la suite d'un clic dans le champ Filtre de recherche).

* Vous devez ensuite valider votre recherche. La validation doit être effectuée chaque fois que vous modifiez le filtre de recherche (une recherche modifiée et non validée apparaîtra en rouge dans l’éditeur de projet).

* Finally, check the **Embed data into the built application** option to embed the data into the application when it's built. Laissez cette case non cochée si vous ne souhaitez pas intégrer les données.

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre indiqué est issu d'un filtre de recherche défini.

<div markdown="1" class = "tips">
**EXEMPLE**
In the **Filter query** field enter:
`FirstName = 'Lisa' & LastName = 'Hart'`
Cette recherche vous permet d'afficher uniquement les enregistrements où figurent respectivement "Lisa" et "Hart" dans les champs FirstName et LastName.
</div>


### Les filtres d'informations utilisateur

Vous pouvez créer des filtres en fonction des informations utilisateur définies dans la méthode base Sur authentification app mobile :

* Comme pour les filtres de recherche, vous devez avant tout définir votre recherche dans le champ approprié.

* Pour préciser que la recherche est basée sur les informations utilisateur, ajoutez simplement ":" et la clé objet `userinfo`.

* Validez ensuite votre recherche. La validation doit être effectuée chaque fois que vous modifiez le filtre de recherche.

* Une fois que votre filtre de recherche est validé, un bouton apparaît pour vous permettre d’ajouter des informations sur les utilisateurs dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu des informations utilisateur.

<div markdown="1" class = "tips">
**EXEMPLE**
In the **Filter query** field enter:
CityName = :city
Dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html), entrez :
`$response.userInfo:=New object("city";"Paris")`
Cette recherche vous permet d’afficher uniquement les enregistrements de la catégorie recherchée "CityName" dans lesquels figure « Paris ».
</div>

<div markdown="1" class = "tips">
**NOTE**
Vous trouverez toutes les règles de syntaxe associées à la recherche dans la [documentation de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).
</div>


