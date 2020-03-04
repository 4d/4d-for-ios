---
id: creating-detailform-templates
title: Modèles de formulaires détaillés
---

:::tip OBJECTIVES Create your first list form template. :::

:::CONDITIONS PRÉALABLES Cliquez [ici](prerequisites.html) pour pouvoir commencer ! :::

In this tutorial, we'll guide you through the creation of a detail form template. It will display an **image header**, as well as **title and content fields** that will be duplicated in the generated iOS app.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Un dossier **Custom Detail form** (dossier contenant le modèle personnalisé du formulaire détaillé)
* Un fichier **Contact.4dbase** (base de démonstration Contact avec un projet d'application mobile prêt à l'emploi)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/archive/d6e32c547604bd32f56528b02310d083a844ffcc.zip">CUSTOM DETAIL FORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first detail form template !

## Ajoutez un modèle de formulaire détaillé à votre projet mobile

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Then open the Contact.4dbase with 4D. and go to File > open > Mobile Project... to open the **Contact Demo App**

Finally go to the **Forms section** in the project editor. You will see that the Custom Detail form template has been successfully added to the Detail form template list !

![Section Formulaires](assets/en/custom-detailform/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## Le dossier du modèle de formulaire détaillé et son contenu

* Une icône **layoutIconx2.png** d'une résolution de 160x160px, qui sera affichée dans l'éditeur de projet lorsque vous sélectionnerez votre modèle personnalisé.
* Un fichier **manifest.json**, qui contient une description simple du modèle.
* Un fichier **template.svg** qui représentera votre modèle, qui s'affichera lorsque vous définirez le contenu de votre Formulaire Liste, et où vous glisserez-déposerez vos champs.
* Un dossier "Sources" qui inclut les fichiers **storyboard** (interface graphique) et **swift** (code pour le formulaire).

What are those files, what it is used for and how to customize it ?