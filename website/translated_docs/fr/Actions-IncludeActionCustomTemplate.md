---
id: action-custom-template
title: Ajouter des actions aux modèles
---

> **OBJECTIFS**
> 
> Ajouter des actions aux modèles de formulaires Liste et formulaires détaillés personnalisés.

> **CONDITIONS PRÉALABLES**
> 
> Cliquez [ici](prerequisites.html) pour pouvoir commencer !

Dans ce tutoriel, nous verrons qu'il est très simple d'**ajouter des actions aux modèles personnalisés**.

## ÉTAPE 1. Téléchargez le projet Starter

Pour commencer, téléchargez le Projet Starter, qui comprend :

* 2 modèles de formulaires Liste personnalisés (TasksList et TasksCollection)
* 1 modèle de formulaire détaillé personnalisé (TasksDetail)
* un fichier Tasks.4dbase

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROJET STARTER</a>
</div>

## ÉTAPE 2. Ajouter des formats personnalisés au projet 4D for iOS

Tout d'abord, déposez :

* les dossiers des modèles **TasksList** et **TasksCollection** dans le dossier *Tasks.4dbase/Resources/Mobile/form/list*

![Modèles de formulaire liste](assets/en/actions/Listform-templates.png)

* les dossiers du modèle **TasksDetail** dans *Tasks.4dbase/Resources/Mobile/form/detail folder*

![Detailform template](assets/en/actions/Detailform-template.png)

## ÉTAPE 3. Ajouter des actions dans les formulaires Liste

Comme nous l'avons vu dans la [description de la section Actions](actions.html), deux types d'actions sont disponibles (actions de table et actions d'entité).

D'abord, ouvrons le fichier Storyboard `list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.`

### Ajouter des actions au modèle personnalisé TasksList

#### A. Ajouter un Tag d'action de table

Sélectionnez le **List form Controller** et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)


#### B. Ajouter un Tag d'action d'entité

Sélectionnez la vue Animatable Table et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

Votre modèle personnalisé est prêt à afficher les actions !

Vous pouvez sélectionner le modèle personnalisé TasksList depuis la **section Formulaires** et ajouter les champs suivants :

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Ajoutons maintenant les tags d'actions au modèle personnalisé TasksCollection

### Ajouter des actions au modèle personnalisé TasksCollection

Pour ce faire, ouvrez le fichier Storyboard `list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.`

#### A. Ajouter un Tag d'action de table

Le processus est quasiment identique à celui du modèle personnalisé TasksList.

Sélectionnez le **List form Controller** et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Ajouter un Tag d'action d'entité

Pour les entités, la façon d'afficher les actions est assez différent de TableView : le glissement des actions n'est pas réellement adapté à CollectionViews.

Ainsi, avec les vues de collection, la meilleure façon d'afficher les actions est d'**appuyer longtemps** sur les cellules que avec lesquelles vous souhaitez intéragir.

Pour ce faire, sélectionnez la cellule collectionView et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

Pour optimiser l'interaction, vous pouvez ajouter un effet scalaire avec un retour haptique qui ajoutera la ligne suivante dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `touch.zoomScale`
* Type: `Number`
* Value: `0,96` (adaptez le rapport d'échelle en fonction du résultat que vous souhaitez obtenir)

Vous pouvez sélectionner le modèle personnalisé TasksCollection depuis la **section Formulaires** et ajouter les champs suivants :

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)


## ÉTAPE 4. Ajouter des actions dans les formulaires détaillés

Dans les formulaires détaillés, vous pouvez utiliser le **bouton générique** dans la barre de navigation ou **créer simplement votre bouton d'action personnalisé**. Dans les deux cas, vous devez ajouter des tags.

Pour le bouton générique intégré à la barre de navigation, sélectionnez le Controller et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

Dans ce tutoriel, nous souhaitons créer notre propre bouton générique. Pour ce faire, ouvrez le fichier Storyboard `detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard`.

Ouvrez-le, sélectionnez le bouton situé en bas à droite et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

Comme vous pouvez le constater, certains boutons visuels sont manquants dans le fichier Storyboard. Vous pouvez les retrouver dans le modèle du **dossier Resources**. Ils seront inclus au projet durant la phase de génération.

Par exemple, pour le **moreButton.imageset** :

![Template ressources](assets/en/actions/Template-Ressources.png)

Vous pouvez sélectionner le modèle personnalisé TasksDetail depuis la **section Formulaires** et ajouter les champs suivants :

![TasksDetail Forms section](assets/en/actions/detailform-forms-section.png)

Félicitations, votre application iOS Tasks est maintenant terminée et inclut des actions dans les formulaires Liste et les formulaires détaillés !

![Template ressources](assets/en/actions/ListForm-entity-action-tableview.png)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROJET FINAL</a>
</div>

