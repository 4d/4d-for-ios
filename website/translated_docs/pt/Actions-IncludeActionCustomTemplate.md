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

Primeiro vamos abrir o arquivo ```list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` 

### Adicione ações para o modelo personalizado TasksList

#### A. Adicionar uma Tag de ação de tabela

Selecione o **List form Controller** e adicione esta linha em **User Defined Runtime Attributes** (Inspetor Identity):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___TABLE_ACTIONS___```

![Add table action tag](assets/en/actions/Add-table-tag-taskslist.png)

#### B. Adicionar uma Tag de ação de Entidade

Selecione a vista Animatable Table e adicione esta linha no **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add entity action tag](assets/en/actions/Add-entity-tag-taskslist.png)

Seu modelo personalizado está pronto para exibir as ações!

Pode selecionar o modelo personalizado TaskList a partir da seção **Formulários** e adicionar os campos abaixo:

![Taskslist Forms section](assets/en/actions/listform-taskslist-forms-section.png)

Agora vamos agregar as etiquetas de ação ao modelo personalizado TasksCollection

### Adicionar ações para o modelo personalizado TasksCollection

Para fazer isso abra o arquivo ```list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard``` 

#### A. Adicionar uma Tag de ação de tabela

O processo é similar ao processo do modelo personalizado TasksList

Selecione o **List form Controller** e adicione esta linha em **User Defined Runtime Attributes** (Inspetor Identity):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___TABLE_ACTIONS___```

![Add collection table action tag](assets/en/actions/Add-collection-table-tag-taskslist.png)

#### B. Adicionar uma Tag de ação de Entidade

Para as entidades, a forma de mostrar as ações é bastante diferente de TableView: a ação de deslizar não está adaptada a CollectionViews.

Então, com as vistas de coleção, a melhor maneira de exibir as ações é usar uma gesto de a **pressionar longo** nas células com as quais quiser interagir.

Para isso, selecione a célula collectionView e adicione esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add collection entity action tag](assets/en/actions/Add-collection-entity-tag-taskslist.png)

Para otimizar a interação pode adicionar um efeito escalar com um feedback háptico agregando a linha abaixo em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```touch.zoomScale```
* Type: ```Number```
* Value: ```0,96``` (adapte a relação de escala segundo o resultado que quiser obter)

Pode selecionar o modelo personalizado TasksCollection a partir da seção **Formulários** e adicione os campos abaixo:

![TasksCollection Forms section](assets/en/actions/listform-taskscollection-forms-section.png)

## PASSO 4. Adicionar as ações nos formulários Detalhados

Nos formulários Detalhados, pode usar o **botão genérico** na barra de navegação ou **criar facilmente seu próprio botão de ação personalizado**. Em ambos os casos você tem que adicionar tags.

Para um botão genérico embebido na barra de navegação, selecione o Controller e adicione esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add detailform entity action tag](assets/en/actions/Detail-form-action-navigationBar.png)

Em nosso tutorial, queremos construir nosso próprio botão genérico. Para isso abra o arquivo ```detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard``` 

Depois de abrí-lo, selecione o botão direito e adicone esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: ```actions```
* Type: ```String```
* Value: ```___ENTITY_ACTIONS___```

![Add detailform entity action tag custom action button](assets/en/actions/Detail-form-action-custom-action-Button.png)

Como pode ver, alguns botões visuais estão faltando no arquivo Storyboard. Pode encontrar estas imagens no modelo **Resources folder**. They will be included in the project during the build process.

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