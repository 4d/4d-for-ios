---
id: structure
title: Structure
---

Cette section affiche tous les champs et les tables de votre base de données.

![Section Structure](assets/fr/project-editor/Structure-section-4D-for-iOS.png)

Vous pouvez définir ici un sous-ensemble de votre structure pour le reproduire dans les appareils mobiles en sélectionnant des champs et des tables spécifiques.

* les tables sélectionnées seront automatiquement ajoutées aux onglets de votre application.
* les champs sélectionnés seront disponibles plus tard, lorsque vous définirez vos formulaires Liste et vos formulaires détaillés.

## Liens N vers 1

* 4D v17R5 vous permet de visualiser les liens entre les tables dans l'application générée, en les publiant à partir de la section Structure. Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs, tout au long de la [création d’une application](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

* 4D 18R6 add the ability to publish Many to One and One to Many relations from your Many to One relations in the Structure section.

This means that you will be able to display Many to Many relations in your app and move directly from a List form to another List form.


> **ASTUCES**
> 
> Vous pouvez publier une sélection de champs en appuyant sur la barre d’espace, plutôt que de sélectionner les champs un par un.
> 
> Pour vous aider à définir la structure de votre application, plusieurs filtres ainsi qu'un moteur de recherche sont disponibles pour sélectionner plus facilement vos tables et vos champs.


## Liens 1 vers N

### Les liens 1 vers N dans l'éditeur de projet

Dans les dernières versions de 4D, il vous est possible de gérer des **liens 1 vers N** et d'afficher une liste de champs liés dans une nouvelle page.

Il vous suffit de :

* publier au moins un champ de la table cible (N)

* publier le lien depuis la table source (1)

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs. Vous pourrez ainsi :

* Définir les propriétés de liens dans la section [Libellés et icônes](labels-and-icons.html#relations-properties).

* Déposer le lien 1 vers N dans le formulaire détaillé depuis la section Formulaires pour créer un lien entre un formulaire détaillé et une table liée.

### Qu'est-ce qui sera créé dans le projet généré ?

Un bouton Lien sera créé dans les formulaires détaillés, pour vous permettre d'accéder directement à la vue liée.

Des [tutoriels](one-to-many-relations.html) sont à votre disposition pour vous aider à utiliser les liens 1 vers N dans votre projet 4D for iOS.



## Rechargement incrémental

### Autoriser les modifications de la structure

Dans 4D v17 R5, le rechargement de 4D for iOS devient incrémental. Cela signifie que seules les données de la base qui sont nouvelles, modifiées ou supprimées seront actualisées. Il s'agit là d'une excellente optimisation en termes de temps de chargement !

Pour ce faire, 4D for iOS doit optimiser la structure et créer :

* A `__DeletedRecords` table to store deleted records
* and `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

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
> Dès que l'administrateur effectue une importante opération de maintenance, il/elle devra signaler aux utilisateurs de 4D for iOS qu'un rechargement complet est requis : Recover by tag / Restoration / Compaction
