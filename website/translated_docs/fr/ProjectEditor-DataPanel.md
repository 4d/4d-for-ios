---
id: data
title: Données
---

Cette section vous permet :

* de définir les données que vous souhaitez intégrer dans votre application (**Fichier de données courant** ou **Fichier de données du serveur de production**),
* d'effectuer une **regénération automatique des données** à chaque génération de votre application ou d'effectuer une génération manuelle, et
* filter the data to vizualize in your app depending on the **general filter queries** or the **user information**.

![Data section](assets/fr/project-editor/Data-tab-4D-for-iOS.png)

## Source des données

![Data section](assets/fr/project-editor/Data-source-panel-4D-for-iOS.png)

Cette partie vous permet de définir vos **sources de données**. Vous pouvez lire les données à partir du **Fichier de données courant** ou bien à partir du **Fichier de données du serveur de production**.

Pour sécuriser l'accès au serveur de production, un **fichier key. mobileapp** doit être généré depuis le serveur de production et communiqué au développeur. This **key.mobileapp** file is available next to the data, in the MobileApps folder. Then, the developer can select it from the project editor to access to the production server data.

Si vous choisissez d’obtenir des données à partir de votre serveur de production, l'**URL de production** doit être saisi dans la **section Publication**.

Here, you can also check if the server is available and choose to activate it, if necessary.

> **NOTE**
> 
> * Tips are available to help you ensure that the server works correctly.
> * Vous pouvez accéder directement à la section Publication pour définir votre URL de production.
> * Pour accéder aux données du serveur de production, un fichier key. mobileapp est requis pour sécuriser les échanges.

You can define if you want to **include images** and or to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time to build your app. You can always generate your data manually by clicking on the **Regenerate Now button**.


## Propriétés

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table, based on **defined filter queries** or on **user parameters**.

### Les filtres de recherche

Vous pouvez définir des filtres par table, en fonction des valeurs de champ :

* Tout d’abord, effectuez votre recherche dans le champ consacré en la saisissant directement dans le champ de recherche". Vous pouvez également affiner votre recherche à l'aide des onglets Champs, Comparateurs et Opérateurs, situés juste au-dessus du filtre de recherche (qui apparaissent à la suite d'un clic dans le champ Filtre de recherche).

* Vous devez ensuite valider votre recherche. La validation doit être effectuée chaque fois que vous modifiez le filtre de recherche (une recherche modifiée et non validée apparaîtra en rouge dans l’éditeur de projet).

* Finally, check the **Embed data into the built application** option to embed the data into the application once it's built. Laissez cette case non cochée si vous ne souhaitez pas intégrer les données.

When a query filter is valid, a funnel icon appears, indicating that the defined filter is based on a defined filter query.

> **EXEMPLE** 
> 
> Dans le champ **Filtre de recherche**, entrez :
> 
> `FirstName = 'Lisa' & LastName = 'Hart'`
> 
> Cette recherche vous permet d'afficher uniquement les enregistrements où figurent respectivement "Lisa" et "Hart" dans les champs FirstName et LastName.


### Les filtres d'informations utilisateur

You can define filters depending on the user information that you define in the Mobile App Authentication method:

* Comme pour les filtres de recherche, vous devez avant tout définir votre recherche dans le champ approprié.

* Pour préciser que la recherche est basée sur les informations utilisateur, ajoutez simplement ":" et la clé objet `userinfo`.

* Validez ensuite votre recherche. La validation doit être effectuée chaque fois que vous modifiez le filtre de recherche.

* Une fois que votre filtre de recherche est validé, un bouton apparaît pour vous permettre d’ajouter des informations sur les utilisateurs dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu des informations utilisateur.

> **EXEMPLE**
> 
> Dans le champ **Filtre de recherche**, entrez :
> 
> CityName = :city
> 
> Dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html), entrez :
> 
> `$response.userInfo:=New object("city";"Paris")`
> 
> Cette recherche vous permet d’afficher uniquement les enregistrements de la catégorie recherchée "CityName" dans lesquels figure « Paris ».


> **NOTE**
> 
> Vous trouverez toutes les règles de syntaxe associées à la recherche dans la [documentation de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).


