---
id: structure
title: Structure
---
Cette section affiche tous les champs et les tables de votre base de données.

![Structure section](assets/fr/project-editor/Structure-section-4D-for-iOS.png)

Vous pouvez définir ici un sous-ensemble de votre structure pour le reproduire dans les appareils mobiles en sélectionnant des champs et des tables spécifiques. 

* les tables sélectionnées seront automatiquement ajoutées aux onglets de votre application.
* les champs sélectionnés seront disponibles plus tard, lorsque vous définirez vos formulaires Liste et vos formulaires détaillés.

## N to 1 relations

* 4D v17 R5 vous permet de visualiser les liens entre les tables et de sélectionner les champs liés en cliquant sur un lien. Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs, tout au long de la [création d’une application](n-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

To help you define your app's structure, multiple filters and a search engine are available to make it easy to select your tables and field.<div class = "tips"> 

**CONSEILS**

Vous pouvez publier une sélection de champs en appuyant sur la barre d’espace, plutôt que de sélectionner les champs un par un.</div> 

## Incremental reload

### Enable structure adjustments

In 4D 17R5, the 4D for iOS reload becomes incremental. This means that only new, modified or deleted data from the database will be updated. This is a great optimisation in terms of loading time!

To do so, 4D for iOS needs to make structure optimizations and create:

* Une table ```__DeletedRecords``` pour stocker les enregistrements supprimés
* and ```__GlobalStamp``` fields to store modification stamps for each published table in your mobile application

All you need to do is enabling 4D for iOS to make the necessary structure adjustments for an optimised mobile data update.

Once authorized, 4D for iOS will do all the work for you, and you will fully benefit from all the advantages of incrememental data reload.

### Pull to refresh!

iOS app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can now reset your app data and find information about your app.