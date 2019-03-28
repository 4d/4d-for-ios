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

* 4D v17 R5 vous permet de visualiser les liens entre les tables et de sélectionner les champs liés en cliquant sur un lien. Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs, tout au long de la [création d’une application](n-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Pour vous aider à définir la structure de votre application, plusieurs filtres ainsi qu'un moteur de recherche sont disponibles pour sélectionner plus facilement vos tables et vos champs.<div class = "tips"> 

**CONSEILS**

Vous pouvez publier une sélection de champs en appuyant sur la barre d’espace, plutôt que de sélectionner les champs un par un.</div> 

## Rechargement incrémentiel

### Autoriser les modifications de la structure

Dans 4D v17 R5, le rechargement de 4D for iOS devient incrémentiel. Cela signifie que seules les données de la base qui sont nouvelles, modifiées ou supprimées seront actualisées. Il s'agit là d'une excellente optimisation en termes de temps de chargement !

Pour ce faire, 4D for iOS doit optimiser la structure et créer :

* Une table ```__DeletedRecords``` pour stocker les enregistrements supprimés
* et des champs ```__GlobalStamp``` pour stocker les modifications pour chaque table publiée dans votre application mobile

Il vous suffit de permettre à 4D for iOS d'apporter les modifications nécessaires de la structure pour optimiser la mise à jour des données mobiles.

Une fois que l'accès lui est accordé, 4D for iOS effectuera toutes les tâches nécessaires, et vous profiterez pleinement des avantages du rechargement des données incrémentielles.

### Tirer pour rafraîchir !

Du côté d'iOS, vos données sont mises à jour chaque fois que vous lancez votre application et chaque fois que votre application se met au premier plan, pour disposer de données continuellement mises à jour.

En utilisation normale, glissez simplement vers le bas n’importe quel formulaire liste pour recharger vos données.

À partir des réglages de l’iPhone, vous pouvez désormais réinitialiser les données de votre application et trouver des informations sur votre application.<div class = "tips"> 

**NOTE**

Dès que l'administrateur effectue une importante opération de maintenance, il/elle devra signaler aux utilisateurs de 4D for iOS qu'un rechargement complet est requis : Recover by tag / Restoration / Compaction</div>