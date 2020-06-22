---
id: multi-criteria-search
title: Recherche multicritères
---


<div markdown="1" class = "objectives">
**OBJECTIFS **
Activer la recherche multicritères dans vos propres modèles.
</div>

Cette fonctionnalité est activée par défaut dans tous les modèles générés par 4D for iOS.

## Fichier Template svg

Pour activer cette fonctionnalité dans vos propres modèles, vous devez remplacer les lignes suivantes de votre fichier template.svg :

```xml
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

par :

```xml
<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

Et voilà ! L'élément "class" est le seul que vous devez modifier pour activer la recherche multicritères.

## Éditeur de projet

Vous pouvez allez ensuite dans l’éditeur de projet et déposer plusieurs champs dans la zone de recherche du formulaire liste.

![Multi-criteria search in the project editor](assets/multi-criteria-search/multi-criteria-search-forms-section.png)

Cliquez sur la croix située à droite du champ de recherche pour supprimer le champ associé et modifier la liste de tous les champs associés.

A menu will appear to allow you to **remove specific fields** or **remove all fields**, depending on which criteria you want to base your search(es) on.

![Modify Multi-criteria search fields](assets/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

Félicitations ! Vos recherches peuvent maintenant être fondées sur plusieurs champs dans votre application 4D for iOS !
