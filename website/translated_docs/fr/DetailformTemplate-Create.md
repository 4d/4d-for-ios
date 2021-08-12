---
id: creating-detailform-templates
title: Modèles de formulaires détaillés
---

> **OBJECTIFS**
> 
> Créer son tout premier modèle de formulaire Liste.

> **CONDITIONS PRÉALABLES**
> 
> Cliquez [ici](prerequisites.html) pour pouvoir commencer !

Dans ce tutoriel, nous vous guiderons dans la création d'un modèle de formulaire détaillé. Ce modèle affichera un **en-tête d'image** et **des champs titre et contenu** qui seront dupliqués dans l’application iOS qui sera générée.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Un dossier **Custom Detail form** (dossier contenant le modèle personnalisé du formulaire détaillé)
* Un fichier **Contact.4dbase** (base de démonstration Contact avec un projet d'application mobile prêt à l'emploi)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/releases/latest/download/tutorial-CustomDetailFormStarter.zip">PROJET STARTER - FORMAT DÉTAILLÉ PERSONNALISÉ</a>
</div>

Vous êtes maintenant prêts à créer votre premier modèle de formulaire détaillé !

## Ajoutez un modèle de formulaire détaillé à votre projet mobile

Créez d'abord un dossier *Contact.4dbase/Resources/Mobile/form/detail* dans lequel vous glisserez et déposerez le **Custom Detail form**.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Ouvrez ensuite Contact.4dbase avec 4D,. and go to File > open > Mobile Project... to open the **Contact Demo App**

Enfin, cliquez sur la **section Formulaires** dans l’éditeur de projet. Vous verrez que le modèle de formulaire détaillé personnalisé a été correctement ajouté à la liste de modèles !

![Section Formulaires](assets/en/custom-detailform/custom-detailform-template.png)

Concentrons-nous maintenant sur le contenu du dossier **Custom Detail form**.

## Le dossier du modèle de formulaire détaillé et son contenu

* Une icône **layoutIconx2.png** d'une résolution de 160x160px, qui sera affichée dans l'éditeur de projet lorsque vous sélectionnerez votre modèle personnalisé
* Un fichier **manifest.json**, qui contient une description simple du modèle
* Un fichier **template.svg** qui représentera votre modèle, qui s'affichera lorsque vous définirez le contenu de votre Formulaire Liste, et où vous glisserez-déposerez vos champs
* Un dossier "Sources" qui inclut les fichiers **storyboard** (interface graphique) et **swift** (code pour le formulaire)
* **android folder** that includes the layout.xml file (graphical interface) in app > src > main > res > layout folder

À quoi correspondent ces fichiers, à quoi servent-ils et comment les personnaliser ?