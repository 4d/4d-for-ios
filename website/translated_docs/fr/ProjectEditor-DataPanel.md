---
id: data
title: Données
---
This section allows you to:

* define the data to include in your app (**Current data file** or **Production server data file**),
* automatically **regenerate data** each time you build your app or generate it manually, and
* filter data to vizualize in your app depending on **general filter queries** or **user information**. 

![Data section](assets/project-editor/Data-tab-4D-for-iOS.png)

## Source des données

![Data section](assets/project-editor/Data-source-panel-4D-for-iOS.png)

Cette partie vous permet de définir vos **sources de données**. Vous pouvez choisir de lire les données à partir du **Fichier de données courant** ou bien du **Fichier de données du serveur de production**.

Pour sécuriser l'accès au serveur de production, un **fichier key. mobileapp** doit être généré depuis le serveur de production et communiqué au développeur. Ce fichier **key.mobileapp** est disponible dans le dossier MobileApps, qui contient également les données. Le développeur peut ensuite sélectionner ce fichier dans l’éditeur de projet pour accéder aux données du serveur de production.

Si vous choisissez d’obtenir des données à partir de votre serveur de production, l'**URL de production** doit être saisi depuis la **section Publication**.

Ici, vous pouvez également vérifier si le serveur est disponible et l’activer si nécessaire.<div class = "tips"> 

**NOTE**

* Il existe des astuces pour vous assurer que le serveur fonctionne correctement.
* Vous pouvez accéder directement à la partie Publication pour définir votre URL de production.
* Pour accéder aux données du serveur de production, un fichier key.mobileapp est requis pour sécuriser les échanges.</div> 

Vous pouvez également préciser si vous souhaitez **regénérer les données** à chaque génération.

Si vous cochez l'option **Ne pas regénérer les données à chaque génération**, vous pouvez gagner un temps considérable dans la création de votre application. Vous pourrez toujours générer vos données manuellement en cliquant sur le bouton **Regénérer maintenant**.

## Propriétés

![Data section](assets/project-editor/Properties-Panel-4D-for-iOS.png)

Dans cette partie, vous pouvez définir tous les filtres de chaque table, en vous basant sur des **filtres de recherche définis** ou sur les **paramètres utilisateur**.

### Les filtres de recherche

Vous pouvez définir des filtres par table en fonction des valeurs de champ :

* First, enter your query in the dedicated field by typing it directly in the query field. You can also compose your query using fields, comparators, and operators which are available just above the query field when it's in focus. This can be helpfull defining your query

* Then, you need to validate your query. This must be done each time you modify it (a query that has been edited and not validated appears in red in the project editor).

* Finally, check the **Embed data into the built application** option to embed the data into the application when it's built. Leave unchecked if you don't want the data embedded.

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu d'un filtre de recherche défini.<div class = "tips"> 

**EXEMPLE**

Dans le champ **Filtre de recherche**, entrez :

    FirstName = 'Lisa' & LastName = 'Hart'

This query allows you to display only the records that include "Lisa" as FirstName and "Hart" as LastName.</div> 

### Les filtres d'informations utilisateur

Vous pouvez établir des filtres en fonction des informations utilisateur que vous définissez dans la méthode base Sur authentification app mobile :

* As with query filters, you first need to define your query in the appropriate field.

* To specify that the query depends on user information, just add ":" and the `userinfo` object key.

* Then, validate your query. This must be done each time you modify it.

* Once your query filter is validated, a button appears to allow you to add information about users in the [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) method.

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu des informations utilisateur.<div class = "tips"> 

**EXAMPLE**

Dans le champ **Filtre de recherche**, entrez :

CityName = :city

Dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html), entrez :

    $response.userInfo:=New object("city";"Paris")

This query allows you to display only the records which include "Paris" as CityName.</div> <div class = "tips"> 

**NOTE**

Vous trouverez toutes les règles de syntaxe associées à la recherche dans la [documentation de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).</div>