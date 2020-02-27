---
id: creating-listform-templates
title: Modèles de formulaire Liste
---

:::tip OBJECTIVES Create your first list form template. :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

In this tutorial, we'll cover nearly all aspects of creating a list form template such as: creating a list form with a **searchBar** and a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Téléchargez le projet Starter

Before we begin, be sure to download the **Starter Project** which includes:

* Un dossier **List form** 
* Un fichier **Contact.4dbase** (base de démo avec un projet d'application mobile prêt à l'emploi)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">LISTFORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first list form template!

## Ajoutez un modèle de formulaire Liste à votre projet mobile

The first thing you'll need to do is create a *Contact.4dbase/Resources/Mobile/form/list* folder. Then drag and drop your **list form** folder into it.

![Mobile folder list form template](assets/en/custom-listform/mobile-folder-custom-template.png)

Next, open the Contact.4dbase file with 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![Section Formulaires](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## Contenu du modèle de formulaire Liste

In this folder, you'll find:

* **Une icône layoutIconx2.png** d'une taille de 160x160px : elle s'affichera dans l'éditeur de projet lorsque vous sélectionnez votre modèle
* **Un fichier manifest.json** : il contient une brève description du modèle
* **Un fichier template.svg** : la représentation visuelle de votre modèle qui s'affiche lorsque vous définissez votre liste à partir du contenu du formulaire.
* Un dossier Source : inclut le **storyboard** (interface graphique) et fichier **Swift** (code pour le formulaire)

What are these files? What are they used for? How can you customize them?