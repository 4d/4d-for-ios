---
id: creating-listform-templates
title: Modèles de formulaire Liste
sidebar_label: Modèles de formulaire Liste
---
<div class = "objectives"> 

**OBJECTIFS**

* Créer son premier modèle de formulaire Liste</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Dans ce tutoriel, nous couvrirons quasiment tous les aspects de la création d’un modèle de formulaire Liste tel que : la création d'un formulaire Liste avec une **barre de recherche** et une table affichant une **image**, un **titre** et un **sous-titre** pour chaque cellule.

![List form template final result](assets/custom-listform/custom-template-final-result.png)

## Téléchargez le projet Starter

Avant de commencer, assurez-vous d'avoir téléchargé le **Projet Starter **, qui comprend : * Un dossier **List form (formulaire Liste)** * Un fichier **Contact.4dbase** (une base de données de démonstration et un projet d’application mobile prêt à l’emploi)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-listform/CustomListFormStarterProject.zip">PROJET STARTER LISTFORM</a>

  </p>
</div>

Vous êtes maintenant prêt à créer votre premier modèle de formulaire Liste !

## Ajoutez un modèle de formulaire Liste à votre projet mobile

Avant toute chose, vous devrez créer un dossier .../Resources/Mobile/form/list à côté du fichier Contact.4dbase. Ensuite, faites-y glisser et déposer votre dossier **list form**.

![Mobile folder list form template](assets/custom-listform/mobile-folder-custom-template.png)

Ouvrez ensuite le fichier Contact.4dbase avec 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![Forms section](assets/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## List form template content

In this folder, you'll find: * **a layoutIconx2.png** icon in 160x160px (it'll be displayed in the project editor when you select your template) * **a manifest.json file** (includes a basic description of the template) * **a template.svg file** (the visual representation of your template displayed when you define your list form content) * Source folder including the **storyboard** (graphical interface) and **Swift** file (code for the form)

What are these files? What are they used for? How can you customize them?