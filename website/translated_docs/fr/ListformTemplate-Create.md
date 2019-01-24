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

Ouvrez ensuite le fichier Contact.4dbase avec 4D. (Fichier>ouvrir>Projet mobile> **Appli demo Contacts**)

Enfin, dans la **Section Formulaire** de l'éditeur de projet, vous constaterez que votre modèle de formulaire Liste a été correctement ajouté à la liste des modèles de formulaire Liste disponibles !

![Forms section](assets/custom-listform/custom-listform-template.png)

Nous allons maintenant nous concentrer sur le contenu du dossier **Custom List form**.

## Contenu du modèle de formulaire Liste

Ce dossier contient : * Une icône **layoutIconx2.png** d'une résolution de 160x160px (elle apparait dans l'éditeur de projet lorsque vous sélectionnez votre modèle) * Un fichier **manifest.json** (comprend une description basique du modèle) * Un fichier **template.svg** (la représentation visuelle de votre modèle apparait lorsque vous définissez le contenu de votre formulaire Liste) * Un dossier "Sources" contenant un fichier **storyboard** (interface graphique) et un fichier **Swift** (code pour le formulaire)

A quoi correspondent ces fichiers ? Quelle est leur utilité ? Comment les personnaliser ?