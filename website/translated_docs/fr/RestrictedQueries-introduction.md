---
id: filter-query-introduction
title: Recherche limitée
---
<div class = "objectives"> 

**OBJECTIFS**

Defining basic and user information-based query filters to display filtered content in the generated iOS app.</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

Click [here](prerequisites.html) to see what you'll need to get started!</div> 

Dans ce tutoriel, nous allons couvrir des **requêtes limitées** avec un cas d’utilisation simple : imaginez que vous êtes un chargé de clientèle. Vous souhaitez consulter vos contrats *en cours* simplement en vous connectant à votre application avec votre adresse mail.

Tout d’abord, depuis la section Données, nous allons définir un **filtre de recherche basique** pour afficher uniquement les contrats qui sont *en cours*. Nous allons ensuite appliquer un **filtre basé sur les informations de l’utilisateur** et qui dépendra de l'e-mail du chargé de clientèle.

## Téléchargez le projet Starter

Before we begin, be sure to download the **Starter Project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/restricted-queries/4DforiOSQueries.4dbase.zip">PROJET STARTER</a>

  </p>
</div>

The database includes a: * **CRM table** with all the data we want to display in the generated iOS app * **AccountManager table** with basic information about the account managers (email and name).

![CRM database](assets/restricted-queries/CRMDatabase.png)<div class = "tips"> 

**NOTE**

This project uses [custom templates](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), [custom icons](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) and custom [data formatters](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html).</div> 

Vous êtes maintenant prêt à définir votre première recherche limitée !

Ouvrez le projet mobile en cliquant sur Ouvrir > Projet mobile... et sélectionnez CRM app > **project.4dmobileapp**.