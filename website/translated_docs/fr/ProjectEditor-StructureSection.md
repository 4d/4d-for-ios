---
id: structure
title: Structure
---

This section displays all your database tables and fields exposed by 4D Mobile Service.

![Section Structure](assets/fr/project-editor/Structure-section-4D-for-iOS.png)

Vous pouvez définir ici un sous-ensemble de votre structure pour le reproduire dans les appareils mobiles en sélectionnant des champs et des tables spécifiques.

* les tables sélectionnées seront automatiquement ajoutées aux onglets de votre application.
* fields will be available later when you will need to define your list and detail forms.

## Liens N vers 1

* 4D 17R5 allows you to visualize table relations in the generated app by publishing them from the Structure section. Then, when your related fields are published, they can be used like any other field in the [app creation process](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

* 4D 18R6 add the ability to publish Many to One and One to Many relations from your Many to One relations in the Structure section.

This means that you will be able to display Many to Many relations in your app and move directly from a List form to another List form.


> **ASTUCES**
> 
> Vous pouvez publier une sélection de champs en appuyant sur la barre d’espace, plutôt que de sélectionner les champs un par un.
> 
> To help you define your app's structure, multiple filters and a search engine are available to make the selection of your tables and field easier.


## Liens 1 vers N

### Les liens 1 vers N dans l'éditeur de projet

In the latest versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you need to do is:

* Publishing at least one field of the target (Many) table

* Publishing the relation from the source (One) table

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs. You will then be able to:

* Définir les propriétés de liens dans la section [Libellés et icônes](labels-and-icons.html#relations-properties).

* Drop the One to Many relation in a Detail form from the Forms Section? to create a link between a detail form and a related table.

### Qu'est-ce qui sera créé dans le projet généré ?

Basically, a Relation button will be created in detail forms to go straight to the related view.

Des [tutoriels](one-to-many-relations.html) sont à votre disposition pour vous aider à utiliser les liens 1 vers N dans votre projet 4D for iOS.



## Rechargement incrémental

### Autoriser les modifications de la structure

Dans 4D v17 R5, le rechargement de 4D for iOS devient incrémental. Cela signifie que seules les données de la base qui sont nouvelles, modifiées ou supprimées seront actualisées. Il s'agit là d'une excellente optimisation en termes de temps de chargement !

Pour ce faire, 4D for iOS doit optimiser la structure et créer :

* A `__DeletedRecords` table to store deleted records
* `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

Il vous suffit de permettre à 4D for iOS d'apporter les modifications nécessaires de la structure pour optimiser la mise à jour des données mobiles.

Une fois que l'accès lui est accordé, 4D for iOS effectuera toutes les tâches requises afin que vous profitiez pleinement des avantages du rechargement incrémental des données.

> **NOTE**
> 
> Ces optimisations sont nécessaires pour les bases locales et les bases du serveur.


### Tirer pour rafraîchir !

Du côté d'iOS, vos données sont actualisées chaque fois que vous lancez votre application et chaque fois que votre application se met au premier plan, pour disposer de données continuellement mises à jour.

En utilisation normale, glissez simplement vers le bas n’importe quel formulaire Liste pour recharger vos données.

À partir des réglages de l’iPhone, vous pouvez désormais réinitialiser les données de votre application et trouver des informations concernant votre application.

> **NOTE**
> 
> As soon as the admin performs an important maintenance operation, they shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction
