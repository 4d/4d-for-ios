---
id: filter-query-introduction
title: Recherche restreinte
---

> **OBJECTIFS**
> 
> Définir des filtres de recherche fondés sur des informations utilisateur ou des informations basiques pour afficher un contenu filtré dans l’application iOS générée.
> **CONDITIONS PRÉALABLES**
> 
> Cliquez [ici](prerequisites.html) pour pouvoir commencer !


Dans ce tutoriel, nous allons aborder le thème des **requêtes limitées** avec un exemple simple : vous êtes un chargé de clientèle et vous souhaitez consulter vos contrats *en cours* en vous connectant simplement à votre application avec votre adresse mail.

Tout d’abord, depuis la section Données, nous allons définir un **filtre de recherche basique** pour afficher uniquement les contrats qui sont *en cours*. Nous allons ensuite appliquer un **filtre basé sur les informations de l’utilisateur** et qui dépendra de l'e-mail du chargé de clientèle.

## Téléchargez le projet Starter

Avant de commencer, assurez-vous d'avoir téléchargé le **Projet Starter**, qui comprend un fichier **4DforiOSQueries.4dbase** (une base de données de démonstration et un projet d’application mobile prêt à l’emploi).

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">PROJET STARTER</a>
</div>

La base de données contient :

* **La table CRM** qui comprend l'ensemble des données que nous souhaitons afficher dans l'application iOS générée
* **La table AccountManager** qui comprend les informations de base sur les chargés de clientèle (nom et e-mail).

![CRM database](assets/en/restricted-queries/CRMDatabase.png)

> **NOTE**
> 
> Ce projet utilise des [modèles personnalisés](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), des [icônes personnalisées](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) et des [formats de données personnalisés](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html).

Vous êtes maintenant prêt à définir votre première requête limitée !

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
