---
id: filter-query-introduction
title: Restricted queries
sidebar_label: Restricted queries
---
<div class = "objectives"> 

**OBJECTIFS**

* Définir des filtres de recherche fondés sur des informations de base et sur l’utilisateur pour afficher le contenu filtré dans l’application iOS générée</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Dans ce tutoriel, nous allons couvrir des **requêtes limitées** avec un cas d’utilisation simple : imaginez que vous êtes un chargé de clientèle. Vous souhaitez consulter vos contrats *en cours* simplement en vous connectant à votre application avec votre adresse mail.

Tout d’abord, depuis la section Données, nous allons définir un **filtre de recherche basique** pour afficher uniquement les contrats qui sont *en cours*. Nous allons ensuite appliquer un **filtre basé sur les informations de l’utilisateur** et qui dépendra de l'e-mail du chargé de clientèle.

## Téléchargez le projet Starter

Avant de commencer, assurez-vous d'avoir téléchargé le **Projet Starter **, qui comprend : * Un fichier **4DforiOSQueries.4dbase** (une base de données de démonstration et un projet d’application mobile prêt à l’emploi)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/restricted-queries/4DforiOSQueries.4dbase.zip">PROJET STARTER</a>

  </p>
</div>

La base de données comprend : * Une **table CRM** avec l'ensemble des données que nous souhaitons afficher dans l’application iOS générée, et * Une **table AccountManager** contenant des informations de base sur les chargés de clientèle (nom et e-mail).

![CRM database](assets/restricted-queries/CRMDatabase.png)<div class = "tips"> 

**NOTE**

* Ce projet utilise des [custom templates](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), des [custom icons](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) et des [data formatters](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html).</div> 

Vous êtes maintenant prêt à définir votre première recherche limitée !

Ouvrez le projet mobile en cliquant sur Ouvrir > Projet mobile... et sélectionnez CRM app > **project.4dmobileapp**.