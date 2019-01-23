---
id: data
title: Données
sidebar_label: Données
---
Cette section vous permet : * de définir les données à inclure dans votre application (**Fichier de données courant** ou **Fichier de données du serveur de production**), * de **regénérer automatiquement les données** à chaque génération (manuelle ou pas) de votre application, et * de filtrer des données à visualiser dans votre application selon les **filtres de recherche** ou les **informations utilisateur**.

![Data section](assets/project-editor/Data-tab-4D-for-iOS.png)

## Source des données

![Data section](assets/project-editor/Data-source-panel-4D-for-iOS.png)

Ce panneau vous permet de définir vos **sources de données**. Vous pouvez choisir de lire les données à partir du **Fichier de données courant** ou bien du **Fichier de données du serveur de production**.

Pour sécuriser l'accès au serveur de production, un **fichier key.mobileapp** doit être généré depuis le serveur de production et communiqué physiquement au développeur. This **key.mobileapp** file is available next to data in the MobileApps folder. Then the developer can select it from the project editor to access to the production server data.

L'**URL de production** doit être saisi depuis la **section Publication** si vous choisissez d’obtenir des données à partir de votre serveur de production.

Ici, vous pouvez également vérifier si le serveur est disponible et l’activer si nécessaire.<div class = "tips"> 

**NOTE**

* Il existe des astuces pour vous assurer que le serveur fonctionne correctement.
* Vous pouvez accéder directement au panneau Publication pour définir votre URL de production.
* Pour accéder aux données du serveur de production, un fichier key.mobileapp est requis pour sécuriser les échanges.</div> 

Vous pouvez également définir si vous souhaitez **Regénérer les données** à chaque génération.

Lorsque l'option **Ne pas regénérer les données à chaque génération** est cochée, vous pouvez gagner un temps considérable lors de la création de votre application. Vous pouvez toujours générer vos données manuellement en cliquant sur le bouton **Regénérer maintenant**.

## Propriétés

![Data section](assets/project-editor/Properties-Panel-4D-for-iOS.png)

Dans ce panneau, vous pouvez définir tous les filtres de chaque table, en vous basant sur des **filtres de recherche définis** ou sur les **paramètres utilisateur**.

### Les filtres de recherche

Vous pouvez définir des filtres par table en fonction des valeurs de champ :

* Tout d’abord, effectuez votre recherche dans le champ consacré en la tapant directement dans le champ de recherche. Vous pouvez également composer votre recherche de Champs, de Comparateurs et d'Opérateurs qui sont disponibles juste au-dessus du champ de recherche lorsqu’elle est mise au point. Cela peut être utile pour affiner votre recherche

* Vous devez ensuite valider votre recherche. Cela doit être fait chaque fois que vous y apportez des modifications (une recherche qui a été modifiée et non validée apparaît en rouge dans l’éditeur de projet).

* Enfin, vérifiez l'option **Intégrer les données dans l'application** pour intégrer les données dans l’application lors de sa création. Laissez-la non cochée si vous ne souhaitez pas intégrer les données.

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu d'un filtre de recherche défini.<div class = "tips"> 

**EXEMPLE **

Dans le champ **Filtre de recherche**, entrez :

    FirstName = 'Lisa' & LastName = 'Hart'

*Cette recherche vous permet d'afficher uniquement les enregistrements comprenant respectivement "Lisa" et "Hart" dans les catégories FirstName et LastName*</div> 

### Filtrer à l'aide d'informations utilisateur

Vous pouvez établir des filtres en fonction des informations utilisateur que vous définissez dans la méthode Mobile App Authentication :

* Concernant les filtres de recherche, vous devez avant tout définir votre recherche dans le champ approprié.

* Pour préciser que la recherche dépend des informations utilisateur, ajoutez simplement ":" ainsi que la clé objet `userinfo`.

* Validez ensuite votre recherche. Cela doit être effectué à chaque modification que vous y apportez.

* Une fois que votre filtre de recherche est validé, un bouton apparaît pour vous permettre d’ajouter des informations sur les utilisateurs dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Lorsqu’un filtre de recherche est valide, une icône d’utilisateur s’affiche pour indiquer que le filtre défini est issu des informations utilisateur.<div class = "tips"> 

**EXEMPLE :**

Dans le champ **Filtre de recherche**, entrez :

CityName = :city

Dans la [Méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html), entrez :

    $response.userInfo:=New object("city";"Paris")

*Cette recherche vous permet d’afficher uniquement les enregistrements de la catégorie recherchée "CityName" dans lesquels figure « Paris »*</div> <div class = "tips"> 

**NOTE :**

Vous trouverez toutes les règles de syntaxe associées à la recherche dans la [documentation de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).</div>