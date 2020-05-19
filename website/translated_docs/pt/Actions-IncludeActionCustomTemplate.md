---
id: action-custom-template
title: Adicionar ações em modelos
---

<div class = "objectives"> 

**OBJETIVOS**

Adicionar ações para modelos de formulários de Lista e formulários detalhados.</div> <div class = "prerequisites"> 

**PRÉ-REQUISITOS**

Clique [aqui](prerequisites.html) para ver o que precisa para começar!</div> 

Neste tutorial, vamos ver como é fácil **adicionar ações para modelos personalizados**.

## PASSO 1. Baixe o Starter Project

Para começar baixe o Projeto Starter, que inclui:

* 2 modelos personalizados formulários Lista (TaskList e TasksCollection)
* 1 modelo personalizado Formulário Detalhado
* um arquivo Tasks.4dbase

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROJETO STARTER</a>

  </p>
</div>

## PASSO 2. Adicione modelos personalizados para Projeto 4D for iOS

Primeiro, solte:

* as pastas de modelos **TasksList** e **TasksCollection**na pasta*Tasks.4dbase/Resources/Mobile/form/list* 

![Listform templates](assets/en/actions/Listform-templates.png)

* as pastas de modelo**TasksDetail** na pasta *Tasks.4dbase/Resources/Mobile/form/detail*

![Detailform template](assets/en/actions/Detailform-template.png)

## PASSO 3. Adicione ações em formulários Lista

Como vimos antes na [descrição da seção Ações](actions.html), estão disponíveis dois tipos de ações (Ações Tabela e ações de Entidade).

Let's first open the ```list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` file.

### Add actions to TasksList custom template

#### A. Add Table action Tag

Select the **List form Controller** and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___TABLE_ACTIONS___```

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)

#### B. Add Entity action Tag

Select the Animatable Table View and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

Your custom template is ready to display actions!

You can select the TaskList custom template from the **Forms section** and add the following fields:

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Now let's add action tags to the TasksCollection custom template

### Add actions to TasksCollection custom template

To do so, open the ```list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` file.

#### A. Add Table action Tag

The process is quite as similar as TasksList custom template's process.

Select the **List form Controller** and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___TABLE_ACTIONS___```

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Add Entity action Tag

For entity, the way you display actions is quite different than TableView: swipe action are not really adapted to CollectionViews.

So with collection views, the best way to display actions is to use a **long pressure** gesture on the cells you want to interact with.

For that, select the collectionView cell and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```touch.zoomScale```
* Type: ```Number```
* Value: ```0,96``` (adapt the scale ratio depending on the result you want to get)

You can select the TasksCollection custom template from the **Forms section** and add the following fields:

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)

## PASSO 4. Add actions in Detail forms

In Detail forms, you can use the **generic button** in the navigation bar or **create easily your own custom action button**. In both cases, you have to add tags.

For generic button embedded in the navigation bar, select the Controller and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

In our tutorial, we want to build our own generic button. For that, open the ```detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard``` file.

Open it, select the button at bottom right and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

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
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROJETO FINAL</a>

  </p>
</div>