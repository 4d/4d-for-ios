---
id: action-custom-template
title: Ajouter des actions aux modèles
---

<div markdown="1" class = "objectives">
**OBJECTIFS**
Ajouter des actions aux modèles de formulaires Liste et formulaires détaillés personnalisés.
</div>

<div markdown="1" class = "prerequisites">
**CONDITIONS PRÉALABLES**
Cliquez [ici](prerequisites.html) pour pouvoir commencer !
</div>

In this tutorial, we are going to see how easy it can be to **add actions to custom templates**.

## ÉTAPE 1. Téléchargez le projet Starter

Pour commencer, téléchargez le Projet Starter, qui comprend :

* 2 modèles de formulaires Liste personnalisés (TasksList et TasksCollection)
* 1 modèle de formulaire détaillé personnalisé (TasksDetail)
* un fichier Tasks.4dbase

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROJET STARTER</a>
</div>

## ÉTAPE 2. Ajouter des formats personnalisés au projet 4D for iOS

Tout d'abord, déposez :

* **TasksList** and **TasksCollection** template folders in *Tasks.4dbase/Resources/Mobile/form/list* folder

![Modèles de formulaire liste](assets/en/actions/Listform-templates.png)

* **TasksDetail** template folders in *Tasks.4dbase/Resources/Mobile/form/detail folder*

![Detailform template](assets/en/actions/Detailform-template.png)

## ÉTAPE 3. Ajouter des actions dans les formulaires Liste

Comme nous l'avons vu dans la [description de la section Actions](actions.html), deux types d'actions sont disponibles (actions de table et actions d'entité).

Let's first open the `list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard` file.

### Ajouter des actions au modèle personnalisé TasksList

#### A. Ajouter un Tag d'action de table

Select the **List form Controller** and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)


#### B. Ajouter un Tag d'action d'entité

Select the Animatable Table View and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

Votre modèle personnalisé est prêt à afficher les actions !

You can select the TaskList custom template from the **Forms section** and add the following fields:

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Ajoutons maintenant les tags d'actions au modèle personnalisé TasksCollection

### Ajouter des actions au modèle personnalisé TasksCollection

To do so, open the `list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard` file.

#### A. Ajouter un Tag d'action de table

Le processus est quasiment identique à celui du modèle personnalisé TasksList.

Select the **List form Controller** and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Ajouter un Tag d'action d'entité

Pour les entités, la façon d'afficher les actions est assez différent de TableView : le glissement des actions n'est pas réellement adapté à CollectionViews.

So with collection views, the best way to display actions is to use a **long pressure** gesture on the cells you want to interact with.

For that, select the collectionView cell and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `touch.zoomScale`
* Type: `Number`
* Value: `0,96` (adapt the scale ratio depending on the result you want to get)

You can select the TasksCollection custom template from the **Forms section** and add the following fields:

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)


## ÉTAPE 4. Ajouter des actions dans les formulaires détaillés

In Detail forms, you can use the **generic button** in the navigation bar or **create easily your own custom action button**. Dans les deux cas, vous devez ajouter des tags.

For generic button embedded in the navigation bar, select the Controller and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

Dans ce tutoriel, nous souhaitons créer notre propre bouton générique. For that, open the `detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard` file.

Open it, select the button at bottom right and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

Comme vous pouvez le constater, certains boutons visuels sont manquants dans le fichier Storyboard. You can actually find those visuals in the  **Resources folder** template. Ils seront inclus au projet durant la phase de génération.

For example for the **moreButton.imageset**:

![Template ressources](assets/en/actions/Template-Ressources.png)

You can select the TasksDetail custom template from the **Forms section** and add the following fields:

![TasksDetail Forms section](assets/en/actions/detailform-forms-section.png)

Félicitations, votre application iOS Tasks est maintenant terminée et inclut des actions dans les formulaires Liste et les formulaires détaillés !

![Template ressources](assets/en/actions/ListForm-entity-action-tableview.png)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROJET FINAL</a>
</div>

