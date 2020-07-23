---
id: creating-detailform-templates
title: Modèles de formulaires détaillés
---

<div markdown="1" class = "objectives">
**OBJECTIFS**
Créer son tout premier modèle de formulaire Liste.
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
Cliquez [ici](prerequisites.html) pour pouvoir commencer !
</div>

Dans ce tutoriel, nous vous guiderons dans la création d'un modèle de formulaire détaillé. It will display an **image header**, as well as **title and content fields** that will be duplicated in the generated iOS app.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Téléchargez le projet Starter

To begin, download the **Starter Project**, which includes:

* A **Custom Detail form** folder (custom Detail form template folder)
* A **Contact.4dbase** file (Contact demo database with a ready to use mobile app project)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/archive/d6e32c547604bd32f56528b02310d083a844ffcc.zip">PROJET STARTER - FORMAT DÉTAILLÉ PERSONNALISÉ</a>
</div>

Vous êtes maintenant prêts à créer votre premier modèle de formulaire détaillé !

## Ajoutez un modèle de formulaire détaillé à votre projet mobile

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Ouvrez ensuite Contact.4dbase avec 4D,. and go to File > open > Mobile Project... to open the **Contact Demo App**

Finally go to the **Forms section** in the project editor. Vous verrez que le modèle de formulaire détaillé personnalisé a été correctement ajouté à la liste de modèles !

![Section Formulaires](assets/en/custom-detailform/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## Le dossier du modèle de formulaire détaillé et son contenu

* **a layoutIconx2.png** icon in 160x160px that will be displayed in the project editor when you select your custom template among others
* **a manifest.json** file that includes a basic description of the template
* **a template.svg** file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields
* Source folder that includes the **storyboard** (graphical interface) and **swift** file (code for the form)

À quoi correspondent ces fichiers, à quoi servent-ils et comment les personnaliser ?