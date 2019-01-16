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

## Télécharger le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend : * Un dossier **Custom Detail form** (dossier contenant un modèle de formulaire détaillé personnalisé) * Un fichier **Contact.4dbase** (base de données Contact de démonstration et un projet d’application mobile prêt à l’emploi)

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

* Une icône **layoutIconx2.png** d'une résolution de 160x160px, qui sera affichée dans l'éditeur de projet lorsque vous sélectionnerez votre modèle personnalisé
* Un fichier **manifest.json**, qui comprend une description simple du modèle
* Un fichier **template.svg** qui représentera votre modèle, qui s'affichera lorsque vous définirez le contenu de votre Formulaire Liste, et où vous glisserez-déposerez vos champs
* Un dossier "Sources" qui inclut les fichiers **storyboard** (interface graphique) et **swift** (code pour le formulaire)

A quoi correspondent ces fichiers, à quoi servent-ils et comment les personnaliser ?