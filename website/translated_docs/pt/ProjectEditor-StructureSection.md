---
id: structure
title: Estrutura
---

Esta seção mostra todas as tabelas e os campos expostos por 4D Mobile Service.

![Seção Estrutura](assets/en/project-editor/Structure-section-4D-for-iOS.png)

Aqui pode definir um subconjunto de sua estrutura física para replicar os aparelhos móveis ao selecionar tabelas e campos específicas. Veja que:

* tabelas serão adicionadas automaticamente para as abas de seu app.
* campos estarão disponíveis depois quando for o momento de definir seus formulários lista e detalhados.

## Relações Muitos para Um

* 4D 17R5 lhe permite visualizar as relações da tabela na aplicação gerada e publicá-las desde a seção Estrutura. Depois quando forem publicados os campos relacionados, podem ser utilizados como qualquer outro campo no processo de [criação de uma aplicação](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Para lhe ajudar a definir sua estrutura de app, múltiplos filtros e motores de pesquisa estão disponíveis para facilitar a seleção de suas tabelas e campos.

> **DICAS**
> 
> You can publish a selection of fields by pressing the spacebar rather than selecting them one by one.


## Relações Um para Muitos

### Lidar com as relações Um para Muitos a partir do editor de projeto

Now, in recent versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you have to do is:

* publicar ao menos um campo para a tabela alvo (Muitos)

* publicar a relação da tabela fonte (Um)

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Then, when your related fields are published, they can be used like any other field. So you will be able to:

* Definir propriedades de relações na seção [Etiquetas e Ìcones](labels-and-icons.html#relations-properties) .

* Solte a relação Um para Muitos em um formulário detalhado da Seção Formulários para criar um link entre um formulário detalhado e uma tabela relacionada.

### O que será criado no projeto gerado?

Basically a Relation button will be created in detail forms to go straight to the related view.

[Tutorials](one-to-many-relations.html) are available to help you use One to Many relation in your 4D for iOS project.



## Recarga incremental

### Autorizar modificações de estrutura

In 4D 17R5, the 4D for iOS reload becomes incremental. This means that only new, modified or deleted data from the database will be updated. This is a great optimisation in terms of loading time!

To do so, 4D for iOS needs to make structure optimizations and create:

* A `__DeletedRecords` table to store deleted records
* and `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

All you need to do is enabling 4D for iOS to make the necessary structure adjustments for an optimised mobile data update.

Once authorized, 4D for iOS will do all the work for you, and you will fully benefit from all the advantages of incrememental data reload.

> **NOTA **
> 
> These optimizations are required for both local and server databases.


### "Puxar" para refrescar!

iOS app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can now reset your app data and find information about your app.

> **NOTA **
> 
> As soon as the admin performs an important maintenance operation, he shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction
