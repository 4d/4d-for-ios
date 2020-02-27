---
id: structure
title: Structure
---

Cette section affiche tous les champs et les tables de votre base de données.

![Structure section](assets/fr/project-editor/Structure-section-4D-for-iOS.png)

Vous pouvez définir ici un sous-ensemble de votre structure pour le reproduire dans les appareils mobiles en sélectionnant des champs et des tables spécifiques. 

* les tables sélectionnées seront automatiquement ajoutées aux onglets de votre application.
* les champs sélectionnés seront disponibles plus tard, lorsque vous définirez vos formulaires Liste et vos formulaires détaillés.

## Liens N vers 1

* 4D v17R5 vous permet de visualiser les liens entre les tables dans l'application générée, en les publiant à partir de la section Structure. Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs, tout au long de la [création d’une application](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Pour vous aider à définir la structure de votre application, plusieurs filtres ainsi qu'un moteur de recherche sont disponibles pour sélectionner plus facilement vos tables et vos champs.

:::tip TIPS You can publish a selection of fields by pressing the spacebar rather than selecting them one by one. :::

## Liens 1 vers N

### Les liens 1 vers N dans l'éditeur de projet

Now, in recent versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you have to do is:

* publier au moins un champ de la table cible (N)

* publier le lien depuis la table source (1)

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Then, when your related fields are published, they can be used like any other field. So you will be able to:

* Définir les propriétés de liens dans la section [Libellés et icônes](labels-and-icons.html#relations-properties).

* Déposer le lien 1 vers N dans le formulaire détaillé depuis la section Formulaires pour créer un lien entre un formulaire détaillé et une table liée.

### Qu'est-ce qui sera créé dans le projet généré ?

Basically a Relation button will be created in detail forms to go straight to the related view.

[Tutorials](one-to-many-relations.html) are available to help you use One to Many relation in your 4D for iOS project.

## Rechargement incrémental

### Autoriser les modifications de la structure

In 4D 17R5, the 4D for iOS reload becomes incremental. This means that only new, modified or deleted data from the database will be updated. This is a great optimisation in terms of loading time!

To do so, 4D for iOS needs to make structure optimizations and create:

* Une table ```__DeletedRecords``` pour stocker les enregistrements supprimés, et
* Des champs ```__GlobalStamp``` pour stocker les modifications pour chaque table publiée dans votre application mobile

All you need to do is enabling 4D for iOS to make the necessary structure adjustments for an optimised mobile data update.

Once authorized, 4D for iOS will do all the work for you, and you will fully benefit from all the advantages of incrememental data reload.

:::tip NOTE These optimizations are required for both local and server databases. :::

### Tirer pour rafraîchir !

iOS app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can now reset your app data and find information about your app.

:::tip NOTE As soon as the admin performs an important maintenance operation, he shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction :::