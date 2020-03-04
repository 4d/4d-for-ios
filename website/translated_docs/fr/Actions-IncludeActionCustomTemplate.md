---
id: action-custom-template
title: Ajouter des actions aux modèles
---

:::tip OBJECTIF Ajouter des actions aux modèles de formulaires Liste et formulaires détaillés personnalisés. :::

:::important CONDITIONS PRÉALABLES Cliquez [ici](prerequisites.html) pour pouvoir commencer ! :::

Dans ce tutoriel, nous verrons qu'il est très simple d'**ajouter des actions aux modèles personnalisés**.

## ÉTAPE 1. Télécharger le projet Starter

Pour commencer, téléchargez le Projet Starter, qui comprend :

* 2 modèles de formulaires Liste personnalisés (TasksList et TasksCollection)
* 1 modèle de formulaire détaillé personnalisé (TasksDetail)
* un fichier Tasks.4dbase

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROJET STARTER</a>

  </p>
</div>

## ÉTAPE 2. Ajouter des formats personnalisés au projet 4D for iOS

Tout d'abord, déposez :

* les dossiers des modèles **TasksList** et **TasksCollection** dans le dossier *Tasks.4dbase/Resources/Mobile/form/list* 

![Listform templates](assets/en/actions/Listform-templates.png)

* les dossiers du modèle **TasksDetail** dans *Tasks.4dbase/Resources/Mobile/form/detail folder*

![Detailform template](assets/en/actions/Detailform-template.png)

## ÉTAPE 3. Ajouter des actions dans les formulaires Liste

Comme nous l'avons vu dans la [description de la section Actions](actions.html), deux types d'actions sont disponibles (actions de table et actions d'entité).

Ouvrons, dans un premier temps, le fichier ```list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` 

### Ajouter des actions au modèle personnalisé TasksList

#### A. Ajouter un Tag d'action de table

Sélectionnez le **List form Controller** et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path : ```actions```
* Type : ```String```
* Value : ```___TABLE_ACTIONS___```

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)

#### B. Ajouter un Tag d'action d'entité

Sélectionnez la vue Animatable Table et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path : ```actions```
* Type : ```String```
* Value : ```___ENTITY_ACTIONS___```

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

Votre modèle personnalisé est prêt à afficher les actions !

Vous pouvez sélectionner le modèle personnalisé TasksList depuis la **section Formulaires** et ajouter les champs suivants :

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Ajoutons maintenant les tags d'actions au modèle personnalisé TasksCollection

### Ajouter des actions au modèle personnalisé TasksCollection

Pour ce faire, ouvrez le fichier ```list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` 

#### A. Ajouter un Tag d'action de table

Le processus est quasiment identique à celui du modèle personnalisé TasksList.

Sélectionnez le **List form Controller** et ajoutez cette ligne dans le **User Defined Runtime Attributes** (Identity inspector) :

* Key Path : ```actions```
* Type : ```String```
* Value : ```___TABLE_ACTIONS___```

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Ajouter un Tag d'action d'entité

For entity, the way you display actions is quite different than TableView: swipe action are not really adapted to CollectionViews.

So with collection views, the best way to display actions is to use a **long pressure** gesture on the cells you want to interact with.

For that, select the collectionView cell and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path : ```actions```
* Type : ```String```
* Value : ```___ENTITY_ACTIONS___```

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path : ```touch.zoomScale```
* Type : ```Number```
* Value : ```0,96``` (adaptez le rapport d'échelle en fonction du résultat que vous souhaitez obtenir)

You can select the TasksCollection custom template from the **Forms section** and add the following fields:

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)

## ÉTAPE 4. Ajouter des actions dans les formulaires détaillés

In Detail forms, you can use the **generic button** in the navigation bar or **create easily your own custom action button**. In both cases, you have to add tags.

For generic button embedded in the navigation bar, select the Controller and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path : ```actions```
* Type : ```String```
* Value : ```___ENTITY_ACTIONS___```

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

In our tutorial, we want to build our own generic button. For that, open the ```detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard``` 

Open it, select the button at bottom right and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path : ```actions```
* Type : ```String```
* Value : ```___ENTITY_ACTIONS___```

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

As you can see, a few visual buttons are missing in the Storyboard file. You can actually find those visuals in the **Resources folder** template. They will be included in the project during the build process.

For example for the **moreButton.imageset**:

![Template ressources](assets/en/actions/Template-Ressources.png)

You can select the TasksDetail custom template from the **Forms section** and add the following fields:

![TasksDetail Forms section](assets/en/actions/detailform-forms-section.png)

Congratulations, your Tasks iOS app is now complete and includes actions in List form and Detail form !

![Template ressources](assets/en/actions/ListForm-entity-action-tableview.png)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROJET FINAL</a>

  </p>
</div>