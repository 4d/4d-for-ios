---
id: structure
title: Estrutura
---

This section displays all your database tables and fields exposed by 4D Mobile Service.

![Seção Estrutura](assets/en/project-editor/Structure-section-4D-for-iOS.png)

Aqui pode definir um subconjunto de sua estrutura física para replicar os aparelhos móveis ao selecionar tabelas e campos específicas. Veja que:

* tabelas serão adicionadas automaticamente para as abas de seu app.
* fields will be available later when you will need to define your list and detail forms.

## Relações Muitos para Um

* 4D 17R5 allows you to visualize table relations in the generated app by publishing them from the Structure section. Then, when your related fields are published, they can be used like any other field in the [app creation process](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

* 4D 18R6 adiciona a habilidade de publicar relações Many to One e One to Many de suas relações Many to One na seção Estrutura.

Isso significa que poderá exibir relações Many to Many em seu app e mover diretamente de um ofrmulário lista para outro formulário lista.


> **DICAS**
> 
> É possível publicar uma seleção de campos pressionando a barra de espaço ao invés de selecionar um por um.
> 
> To help you define your app's structure, multiple filters and a search engine are available to make the selection of your tables and field easier.


## Relações Um para Muitos

### Lidar com as relações Um para Muitos a partir do editor de projeto

In the latest versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

All you need to do is:

* Publishing at least one field of the target (Many) table

* Publishing the relation from the source (One) table

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Depois quando seus campos relacionados forem publicados, podem ser usados como qualquer outro campo. You will then be able to:

* Definir propriedades de relações na seção [Etiquetas e Ìcones](labels-and-icons.html#relations-properties) .

* Drop the One to Many relation in a Detail form from the Forms Section? to create a link between a detail form and a related table.

### O que será criado no projeto gerado?

Basically, a Relation button will be created in detail forms to go straight to the related view.

[Tutoriais](one-to-many-relations.html) estão disponíveis para ajudar a usar relações Um para Muitos em seu projeto 4D for iOS.



## Recarga incremental

### Autorizar modificações de estrutura

Em 4D 17R5, o reload (recarga) de 4D for iOS se torna incremental. Isso significa que apenas dados novos, modificados ou apagados do banco de dados serão atualizados. Essa é uma grande melhoria em tempos de carregamento!

Para fazer isso, 4D for iOS precisa de otimizações de estrutura e criar:

* Uma tabela  `__DeletedRecords` para armazenar registros apagados
* `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

Tudo que precisa fazer é autorizar que 4D for iOS faça as mudanças de estrutura necessárias para uma atualização de dados móveis otimizada.

Quando autorizado, 4D for iOS vai fazer todo o trabalho para você, e vai se beneficiar de todas as vantagens de recarga de dados incremental.

> **NOTA **
> 
> Essas otimizações são exigidas tanto para bancos de dadoos locais quanto servidor.


### "Puxar" para refrescar!

do lado do app iOS, seus dados são atualizados a cada vez que lançar seu app e cada vez que seu app for para o primeiro plano.

Em uso normal, simplesmente deslizar para baixo em qualquer formulário lista vai refrescar seus dados.

Nas configurações de iPhone, agora pode resetar os dados de seu app e encontrar informações sobre seu app.

> **NOTA **
> 
> As soon as the admin performs an important maintenance operation, they shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction
