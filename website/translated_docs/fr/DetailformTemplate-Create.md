---
id: creating-detailform-templates
title: Modèles de formulaires détaillés
sidebar_label: Modèles de formulaires détaillés
---
<div class = "objectives"> 

**OBJECTIFS**

* Créez votre premier modèle de formulaire Liste</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Dans ce didacticiel, nous vous guiderons dans la création d'un modèle de formulaire détaillé. Il affichera une **image header**, ainsi que **title and content fields** qui seront dupliqués dans l’application iOS générée.

![Custom template final result](assets/custom-detailform/custom-template-final-result.png)

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Starter Project**, qui comprend : * Un dossier **Custom Detail form** (dossier modèle de formulaire détaillé personnalisé) * Un fichier **Contact.4dbase** (base de données Contact de démonstration et un projet d’application mobile prêt à l’emploi)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-detailform/CustomDetailFormStarterProject.zip">PROJET STARTER - FORMAT DÉTAILLÉ PERSONNALISÉ</a>

  </p>
</div>

Vous êtes maintenant prêt à créer votre premier modèle de formulaire détaillé !

## Ajoutez un modèle de formulaire détaillé à votre projet mobile

Créez d'abord un dossier .../Resources/Mobile/form/detail à côté des données Contact.4dbase, où vous glisserez et déposerez le dossier **Custom Detail form**.

![Mobile folder custom template](assets/custom-detailform/mobile-folder-custom-template.png)

Ouvrez ensuite Contact.4dbase avec 4D. et allez dans Fichier > Ouvrir > Projet mobile... pour ouvrir **Contact Demo App**

Enfin, allez dans **Forms section** dans l’éditeur de projet. Vous verrez que le modèle de formulaire détaillé personnalisé a été correctement ajouté à la liste de modèles de formulaire détaillé !

![Forms section](assets/custom-detailform/custom-detailform-template.png)

Concentrons-nous maintenant sur le contenu du dossier **Custom Detail form**.

## Contenu du dossier Modèle de formulaire détaillé

* L'icône **a layoutIconx2.png** de taille 160x160px, qui sera affichée dans l'éditeur de projet lorsque vous sélectionnez votre modèle personnalisé
* Le fichier **a manifest.json**, qui comprend une description simple du modèle
* Le fichier **a template.svg** qui représentera votre modèle et qui s'affichera lorsque vous définissez le contenu de votre Formulaire Liste et où vous glisserez-déposerez vos champs
* Dossier Source qui inclut le fichier **storyboard** (interface graphique) et **swift** (code pour le formulaire)

Quels sont ces fichiers, à quoi servent-ils et comment les personnaliser ?