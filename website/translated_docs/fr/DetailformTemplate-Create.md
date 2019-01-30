---
id: creating-detailform-templates
title: Modèles de formulaires détaillés
sidebar_label: Modèles de formulaires détaillés
---
<div class = "objectives"> 

**OBJECTIFS**

* Créer votre premier modèle de formulaire Liste</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Dans ce didacticiel, nous vous guiderons dans la création d'un modèle de formulaire détaillé. Il affichera un **en-tête d'image**, ainsi que **des champs titre et contenu** qui seront dupliqués dans l’application iOS qui sera générée.

![Custom template final result](assets/custom-detailform/custom-template-final-result.png)

## Téléchargez le projet Starter

To begin, download the **Starter Project**, which includes:

* A **Custom Detail form** folder (custom Detail form template folder)
* A **Contact.4dbase** file (Contact demo database with a ready to use mobile app project)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-detailform/CustomDetailFormStarterProject.zip">PROJET STARTER - FORMAT DÉTAILLÉ PERSONNALISÉ</a>

  </p>
</div>

Vous êtes maintenant prêt à créer votre premier modèle de formulaire détaillé !

## Ajouter un modèle de formulaire détaillé à votre projet mobile

Créez d'abord un dossier .../Resources/Mobile/form/detail à côté des données Contact.4dbase, où vous glisserez et déposerez le dossier **Custom Detail form**.

![Mobile folder custom template](assets/custom-detailform/mobile-folder-custom-template.png)

Ouvrez ensuite Contact.4dbase avec 4D, puis cliquez sur Fichier > Ouvrir > Projet mobile... pour ouvrir **Contact Demo App**

Enfin, cliquez sur la **section Formulaires** dans l’éditeur de projet. Vous verrez que le modèle de formulaire détaillé personnalisé a été correctement ajouté à la liste de modèles !

![Forms section](assets/custom-detailform/custom-detailform-template.png)

Concentrons-nous maintenant sur le contenu du dossier **Custom Detail form**.

## Le dossier du modèle de formulaire détaillé et son contenu

* **a layoutIconx2.png** icon in 160x160px that will be displayed in the project editor when you select your custom template among others
* **a manifest.json** file that includes a basic description of the template
* **a template.svg** file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields
* Source folder that includes the **storyboard** (graphical interface) and **swift** file (code for the form)

A quoi correspondent ces fichiers, à quoi servent-ils et comment les personnaliser ?