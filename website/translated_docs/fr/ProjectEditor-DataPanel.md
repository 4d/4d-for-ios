---
id: data
title: Données
---

Cette section vous permet :

* de définir les données que vous souhaitez intégrer dans votre application (**Fichier de données courant** ou **Fichier de données du serveur de production**),
* d'effectuer une **regénération** automatique **des données** à chaque génération de votre application ou d'effectuer une génération manuelle, et
* de filtrer les données à faire figurer dans votre application en fonction des **filtres de recherche généraux** ou des **informations utilisateur**. 

![Data section](assets/fr/project-editor/Data-tab-4D-for-iOS.png)

## Source des données

![Data section](assets/fr/project-editor/Data-source-panel-4D-for-iOS.png)

Cette partie vous permet de définir vos **sources de données**. Vous pouvez lire les données à partir du **Fichier de données courant** ou bien à partir du **Fichier de données du serveur de production**.

Pour sécuriser l'accès au serveur de production, un **fichier key. mobileapp** doit être généré depuis le serveur de production et communiqué au développeur. Ce fichier **key.mobileapp** est disponible dans le dossier MobileApps (où se trouve également le fichier des données). Le développeur peut ensuite sélectionner ce fichier dans l’éditeur de projet pour accéder aux données du serveur de production.

Si vous choisissez d’obtenir des données à partir de votre serveur de production, l'**URL de production** doit être saisi dans la **section Publication**.

Dans la section Données, vous pouvez aussi vérifier la disponibilité du serveur et l’activer si nécessaire.

:::tip NOTE * Tips are available to help you ensure the server works correctly. * You can directly access the Publishing panel to define your production URL. * To access production server data, a key file is required for secure communications. :::

You can define if you want to **include images** and also whether or not you want to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time building your app. You can always generate your data manually by clicking on the **Regenerate Now button**.

## Propriétés

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table based on **defined filter queries** or based on **user parameters**.

### Les filtres de recherche

You can define filters per table which depend on field values:

* Tout d’abord, effectuez votre recherche dans le champ consacré en la saisissant directement dans le champ de recherche". Vous pouvez également affiner votre recherche à l'aide des onglets Champs, Comparateurs et Opérateurs, situés juste au-dessus du filtre de recherche (qui apparaissent à la suite d'un clic dans le champ Filtre de recherche). 

* Vous devez ensuite valider votre recherche. La validation doit être effectuée chaque fois que vous modifiez le filtre de recherche (une recherche modifiée et non validée apparaîtra en rouge dans l’éditeur de projet).

* Enfin, cochez l'option **Intégrer les données dans l'application** pour intégrer les données dans l’application lors de sa génération. Laissez cette case non cochée si vous ne souhaitez pas intégrer les données.

When a query filter is valid, a funnel icon appears indicating that the defined filter is based on a defined filter query.

:::tip EXAMPLE In the **Filter query** field enter:

    FirstName = 'Lisa' & LastName = 'Hart'

This query allows you to display only the records that include "Lisa" as FirstName and "Hart" as LastName. :::

### Les filtres d'informations utilisateur

You can define filters depending on user information which you define in the Mobile App Authentication method:

* Comme pour les filtres de recherche, vous devez avant tout définir votre recherche dans le champ approprié.

* Pour préciser que la recherche est basée sur les informations utilisateur, ajoutez simplement ":" et la clé objet `userinfo`.

* Validez ensuite votre recherche. La validation doit être effectuée chaque fois que vous modifiez le filtre de recherche.

* Une fois que votre filtre de recherche est validé, un bouton apparaît pour vous permettre d’ajouter des informations sur les utilisateurs dans la [méthode base Sur authentification app mobile](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

When a query filter is valid, a user icon appears to indicate that the defined filter is based on user information.

:::tip EXAMPLE In the **Filter query** field enter:

CityName = :city

In the [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method, enter:

    $response.userInfo:=New object("city";"Paris")

This query allows you to display only the records which include "Paris" as CityName. :::

:::tip NOTE You'll find all the rules about query syntax in the [4D documentation](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html). :::