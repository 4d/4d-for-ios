---
id: multi-criteria-search
title: Recherche multicritères
sidebar_label: Recherche multicritères
---
<div class = "objectives"> 

**OBJECTIFS**

* Activer la recherche multicritères dans vos propres modèles</div> 

Cette fonctionnalité est activée par défaut dans tous les modèles générés par 4D for iOS.

## Fichier Template svg

* Pour activer cette fonctionnalité dans vos propres modèles, vous devez remplacer les lignes suivantes de votre fichier template.svg :

    <rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>
    
    

par :

    <rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>
    
    

Et voilà ! La classe est la seule chose que vous devez modifier pour activer la recherche multicritères.

## Éditeur de projet

Vous pouvez allez ensuite dans l’éditeur de projet et déposer plusieurs champs dans la zone de recherche du formulaire liste.

![Multi-criteria search in the project editor](assets/multi-criteria-search/multi-criteria-search-forms-section.png)

Cliquez sur le bouton "delete" du champ de recherche pour modifier la liste des champs associés.

Un menu s’affichera pour vous permettre de **retirez champs spécifiques** ou de **supprimer tous les champs**, selon les critères de recherche souhaités.

![Modify Multi-criteria search fields](assets/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

Félicitations ! Vous pouvez maintenant baser votre ou vos recherche(s) sur plusieurs champs dans votre application 4D for iOS !