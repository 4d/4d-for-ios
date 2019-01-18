---
id: data
title: Données
sidebar_label: Données
---
This section allows you to: * define the data to include in your app (**Current data file** or **Production server data file**), * automatically **regenerate data** each time you build your app or generate it manually, and * filter data to vizualize in your app depending on **general filter queries** or **user information**.

![Data section](assets/project-editor/Data-tab-4D-for-iOS.png)

## Data source panel

![Data section](assets/project-editor/Data-source-panel-4D-for-iOS.png)

This panel allows you to define your **data source**. You can choose to get data from the **Current data file** or from a **Production server**.

To secure access to the production server, a **key file** must be generated from the production server and physically communicated to the developer. This key file key.mobileapp is available next to data in the MobileApps folder. Then the developer can select this key file from the project editor to access to the production server data.

The **Production URL** must be entered from the **Publishing section** if you choose to get data from your production server.

Here, you can also check if the server is available and activate it if necessary.<div class = "tips"> 

**NOTE**

* Tips are available to help you ensure the server works correctly.
* You can directly access the Publishing panel to define your production URL.
* To access production server data, a key file is required for secure communications.</div> 

You can also define whether or not you want to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** option is checked, you can save a considerable amount of time building your app. You can always generate your data manually by clicking on the **Regenerate button**.

## Panneau des propriétés

![Data section](assets/project-editor/Properties-Panel-4D-for-iOS.png)

Dans ce panneau, vous pouvez définir tous les filtres de chaque table, en vous basant sur des **filtres de recherche définis** ou sur les **paramètres utilisateur** .

### Filtrer avec des filtres de recherche

Vous pouvez définir des filtres par table en fonction des valeurs de champ :

* Tout d’abord, effectuez votre recherche dans le champ consacré en la tapant directement dans le champ de recherche. Vous pouvez également composer votre requête de champs, de comparateurs et d'opérateurs qui sont disponibles juste au-dessus du champ de recherche lorsqu’elle est mise au point. Cela peut être utile pour définir votre recherche

* Vous devez ensuite valider votre recherche. Cela doit être fait chaque fois que vous y apportez des modifications (une recherche qui a été modifiée et non validée apparaît en rouge dans l’éditeur de projet).

* Enfin, vérifiez l'option **Intégrer les données dans l'application** pour intégrer les données dans l’application lors de sa création. Laissez-la non cochée si vous ne souhaitez pas intégrer les données.

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu d'un filtre de recherche défini.<div class = "tips"> 

**EXEMPLE **

Dans le champ **Filtre de recherche**, entrez :

    FirstName = 'Lisa' & LastName = 'Hart'

*Cette recherche vous permet d'afficher uniquement les enregistrements comprenant respectivement "Lisa" et "Hart" dans les catégories FirstName et LastName*</div> 

### Filtrer à l'aide d'informations utilisateur

Vous pouvez établir des filtres en fonction de l'information utilisateur que vous définissez dans la méthode Mobile App Authentication :

* Concernant les filtres de recherche, vous devez avant tout définir votre recherche dans le champ approprié.

* Pour préciser que la recherche dépend des informations utilisateur, ajoutez simplement ":" et la clé de l'objet `userinfo`.

* Validez ensuite votre recherche. Cela doit être effectué à chaque modification que vous y apportez.

* Une fois que votre filtre de requête est validée, un bouton apparaît pour vous permettre d’ajouter des informations sur les utilisateurs dans la méthode [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu des informations utilisateur.<div class = "tips"> 

**EXEMPLE :**

Dans le champ **Filtre de recherche**, entrez :

CityName = :city

Dans la méthode de base de données [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) , entrez :

    $response.userInfo:=New object("city";"Paris")

*Cette requête vous permet d’afficher uniquement les enregistrements incluant « Paris » dans la catégorie CityName recherchée*</div> <div class = "tips"> 

**NOTE :**

Vous trouverez toutes les règles de syntaxe de recherche dans la [documentation de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).</div>