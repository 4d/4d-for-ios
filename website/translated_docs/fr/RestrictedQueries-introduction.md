---
id: filter-query-introduction
title: Recherche restreinte
---

<div markdown="1" class = "objectives">
**OBJECTIFS**
Définir des filtres de recherche fondés sur des informations utilisateur ou des informations basiques pour afficher un contenu filtré dans l’application iOS générée.
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
Cliquez [ici](prerequisites.html) pour pouvoir commencer !
</div>

In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## Téléchargez le projet Starter

Before we begin, be sure to download the **Starter Project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">PROJET STARTER</a>
</div>

La base de données contient :

* **CRM table** with all the data we want to display in the generated iOS app
* **AccountManager table** with basic information about the account managers (email and name).

![CRM database](assets/en/restricted-queries/CRMDatabase.png)

<div markdown="1" class = "tips">
**NOTE**
Ce projet utilise des [modèles personnalisés](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), des [icônes personnalisées](https://4d.github.io/4d-for-ios/docs/en/using-icons.html) et des [formats de données personnalisés](https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html).
</div>

Vous êtes maintenant prêt à définir votre première requête limitée !

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
