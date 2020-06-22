---
id: action-custom-template
title: Adicionar ações em modelos
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Adicionar ações para modelos de formulários de Lista e formulários detalhados.
</div>

<div markdown="1" class = "prerequisites">
**PRÉ-REQUISITOS**
Clique [aqui](prerequisites.html) para ver o que precisa para começar!
</div>

In this tutorial, we are going to see how easy it can be to **add actions to custom templates**.

## PASSO 1. Baixe o Starter Project

Para começar baixe o Projeto Starter, que inclui:

* 2 modelos personalizados formulários Lista (TaskList e TasksCollection)
* 1 modelo personalizado Formulário Detalhado
* um arquivo Tasks.4dbase

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">PROJETO STARTER</a>
</div>

## PASSO 2. Adicione modelos personalizados para Projeto 4D for iOS

Primeiro, solte:

* **TasksList** and **TasksCollection** template folders in *Tasks.4dbase/Resources/Mobile/form/list* folder

![Listform templates](assets/en/actions/Listform-templates.png)

* **TasksDetail** template folders in *Tasks.4dbase/Resources/Mobile/form/detail folder*

![Detailform template](assets/en/actions/Detailform-template.png)

## PASSO 3. Adicione ações em formulários Lista

Como vimos antes na [descrição da seção Ações](actions.html), estão disponíveis dois tipos de ações (Ações Tabela e ações de Entidade).

Let's first open the `list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard` file.

### Adicione ações para o modelo personalizado TasksList

#### A. Adicionar uma Tag de ação de tabela

Select the **List form Controller** and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)


#### B. Adicionar uma Tag de ação de Entidade

Select the Animatable Table View and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

Seu modelo personalizado está pronto para exibir as ações!

You can select the TaskList custom template from the **Forms section** and add the following fields:

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Agora vamos agregar as etiquetas de ação ao modelo personalizado TasksCollection

### Adicionar ações para o modelo personalizado TasksCollection

To do so, open the `list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard` file.

#### A. Adicionar uma Tag de ação de tabela

O processo é similar ao processo do modelo personalizado TasksList

Select the **List form Controller** and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Adicionar uma Tag de ação de Entidade

Para as entidades, a forma de mostrar as ações é bastante diferente de TableView: a ação de deslizar não está adaptada a CollectionViews.

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


## PASSO 4. Adicionar as ações nos formulários Detalhados

In Detail forms, you can use the **generic button** in the navigation bar or **create easily your own custom action button**. Em ambos os casos você tem que adicionar tags.

For generic button embedded in the navigation bar, select the Controller and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

Em nosso tutorial, queremos construir nosso próprio botão genérico. For that, open the `detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard` file.

Open it, select the button at bottom right and add this line in the **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

Como pode ver, alguns botões visuais estão faltando no arquivo Storyboard. You can actually find those visuals in the  **Resources folder** template. Serão incluídas no projeto durante o processo de build.

For example for the **moreButton.imageset**:

![Template ressources](assets/en/actions/Template-Ressources.png)

You can select the TasksDetail custom template from the **Forms section** and add the following fields:

![TasksDetail Forms section](assets/en/actions/detailform-forms-section.png)

Parabéns, sua aplicação iOS Tasks agora está completa e inclui ações nos formulários Lista e detalhados.

![Template ressources](assets/en/actions/ListForm-entity-action-tableview.png)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">PROJETO FINAL</a>
</div>

