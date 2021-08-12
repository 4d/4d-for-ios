---
id: creating-listform-templates
title: Modèles de formulaires Liste
---

> **OBJECTIFS**
> 
> Créer son tout premier modèle de formulaire Liste.

> **CONDITIONS PRÉALABLES**
> 
> Cliquez [ici](prerequisites.html) pour pouvoir commencer !

Dans ce tutoriel, nous couvrirons quasiment tous les aspects de la création d’un modèle de formulaire Liste, tels que : la création d'un formulaire Liste avec une **barre de recherche** et une table affichant une **image**, un **titre** et un **sous-titre** pour chaque cellule.

![List form template final result](assets/custom-listform/custom-template-final-result.png)

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Un dossier **List form**
* Un fichier **Contact.4dbase** (base de démo avec un projet d'application mobile prêt à l'emploi)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip">PROJET STARTER LISTFORM</a>
</div>

Vous êtes maintenant prêts à créer votre premier modèle de formulaire Liste !

## Ajoutez un modèle de formulaire Liste à votre projet mobile

Créez d'abord un dossier *Contact.4dbase/Resources/Mobile/form/list*. Puis, faites-y glisser-déposer votre dossier **list form**.

![Mobile folder list form template](assets/custom-listform/mobile-folder-custom-template.png)

Ouvrez ensuite le fichier Contact.4dbase avec 4D. (Fichier>Ouvrir>Projet mobile> **Appli demo Contacts**)

Enfin, dans la **Section Formulaire** de l'éditeur de projet, vous constaterez que votre modèle de formulaire Liste a été correctement ajouté à la liste des modèles de formulaire Liste disponibles !

![Section Formulaires](assets/en/custom-listform/custom-listform-template.png)

Nous allons maintenant nous concentrer sur le contenu du dossier **Custom List form**.

## Contenu du modèle de formulaire Liste

Dans ce dossier, vous trouverez :

* **Une icône layoutIconx2.png** d'une taille de 160x160px : elle s'affichera dans l'éditeur de projet lorsque vous sélectionnez votre modèle
* **Un fichier manifest.json** : il contient une brève description du modèle
* **Un fichier template.svg** : la représentation visuelle de votre modèle qui s'affiche lorsque vous définissez votre liste à partir du contenu du formulaire.
* Un dossier Source : inclut le **storyboard** (interface graphique) et fichier **Swift** (code pour le formulaire)

À quoi correspondent ces fichiers ? Quelle est leur utilité ? Comment les personnaliser ?
