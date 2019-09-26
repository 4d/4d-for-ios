---
id: structure
title: Structure
---

Cette section affiche tous les champs et les tables de votre base de données.

![Structure section](assets/fr/project-editor/Structure-section-4D-for-iOS.png)

Vous pouvez définir ici un sous-ensemble de votre structure pour le reproduire dans les appareils mobiles en sélectionnant des champs et des tables spécifiques. 

* les tables sélectionnées seront automatiquement ajoutées aux onglets de votre application.
* les champs sélectionnés seront disponibles plus tard, lorsque vous définirez vos formulaires Liste et vos formulaires détaillés.

## Many to One relations

* 4D v17R5 vous permet de visualiser les liens entre les tables dans l'application générée, en les publiant à partir de la section Structure. Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs, tout au long de la [création d’une application](n-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Pour vous aider à définir la structure de votre application, plusieurs filtres ainsi qu'un moteur de recherche sont disponibles pour sélectionner plus facilement vos tables et vos champs.<div class = "tips"> 

**CONSEILS**

Vous pouvez publier une sélection de champs en appuyant sur la barre d’espace, plutôt que de sélectionner les champs un par un.</div> 

## One to Many relations

### Deal with One to Many relations from the project editor

Now, in recent versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you have to do is:

* publishing at least one field of the target (Many) table

* publishing the relation from the source (One) table

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Then, when your related fields are published, they can be used like any other field. So you will be able to:

* Define relations properties in the [Labels and Icons](labels-and-icons.html#relations-properties) section.

* Drop the 1 to N relation in a Detail form from the Forms Section to create a link between a detail form and a related table.

### What will be created in the generated project ?

Basically a Relation button will be created in detail forms to go straight to the related view.

[Tutorials](one-to-n-relations.html) are available to help you use 1 to N relation in your 4D for iOS project.

## Rechargement incrémental

### Autoriser les modifications de la structure

Dans 4D v17 R5, le rechargement de 4D for iOS devient incrémental. Cela signifie que seules les données de la base qui sont nouvelles, modifiées ou supprimées seront actualisées. Il s'agit là d'une excellente optimisation en termes de temps de chargement !

Pour ce faire, 4D for iOS doit optimiser la structure et créer :

* Une table ```__DeletedRecords``` pour stocker les enregistrements supprimés, et
* Des champs ```__GlobalStamp``` fields to store modification stamps for each published table in your mobile application

Il vous suffit de permettre à 4D for iOS d'apporter les modifications nécessaires de la structure pour optimiser la mise à jour des données mobiles.

Une fois que l'accès lui est accordé, 4D for iOS effectuera toutes les tâches requises afin que vous profitiez pleinement des avantages du rechargement incrémental des données.<div class = "tips"> 

**NOTE**

Ces optimisations sont nécessaires pour les bases locales et les bases du serveur.</div> 

### Tirer pour rafraîchir !

Du côté d'iOS, vos données sont actualisées chaque fois que vous lancez votre application et chaque fois que votre application se met au premier plan, pour disposer de données continuellement mises à jour.

En utilisation normale, glissez simplement vers le bas n’importe quel formulaire Liste pour recharger vos données.

À partir des réglages de l’iPhone, vous pouvez désormais réinitialiser les données de votre application et trouver des informations concernant votre application.<div class = "tips"> 

**NOTE**

As soon as the admin performs an important maintenance operation, he shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction</div>