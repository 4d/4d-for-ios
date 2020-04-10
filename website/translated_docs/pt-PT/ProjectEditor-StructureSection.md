---
id: structure
title: Estrutura
---

Esta seção mostra todas as tabelas e os campos expostos por 4D Mobile Service.

![Structure section](assets/en/project-editor/Structure-section-4D-for-iOS.png)

Aqui pode definir um subconjunto de sua estrutura física para replicar os aparelhos móveis ao selecionar tabelas e campos específicas. Veja que:

* tabelas serão adicionadas automaticamente para as abas de seu app.
* campos estarão disponíveis depois quando for o momento de definir seus formulários lista e detalhados.

## Relações Muitos para Um

* 4D 17R5 lhe permite visualizar as relações da tabela na aplicação gerada e publicá-las desde a seção Estrutura. Depois quando forem publicados os campos relacionados, podem ser utilizados como qualquer outro campo no processo de [criação de uma aplicação](many-to-one-relations.html).

![Publish related tables](assets/en/project-editor/Structure-section-N-to-1-relations-4D-for-iOS.png)

Para lhe ajudar a definir sua estrutura de app, múltiplos filtros e motores de pesquisa estão disponíveis para facilitar a seleção de suas tabelas e campos.

:::tip DICAS Pode publicar uma seleção de campos ao pressionar a barra de espaços ao invés de selecioná-los um por um. :::

## Relações Um para Muitos

### Lidar com as relações Um para Muitos a partir do editor de projeto

Now, in recent versions of 4D, you can deal with **One to Many relations** and display a list of related fields in a new page.

Tudo o que tem que fazer é:

* publicar ao menos um campo para a tabela alvo (Muitos)

* publicar a relação da tabela fonte (Um)

![Drop relation in detail form](assets/en/project-editor/Structure-1-to-N-relations-4D-for-iOS.png)

Depois quando seus campos relacionados forem publicados, podem ser usados como qualquer outro campo. Assim poderá:

* Definir propriedades de relações na seção [Etiquetas e Ìcones](labels-and-icons.html#relations-properties) .

* Solte a relação Um para Muitos em um formulário detalhado da Seção Formulários para criar um link entre um formulário detalhado e uma tabela relacionada.

### O que será criado no projeto gerado?

Basicamente um botão Relação será criado em formulários detalhados para ir direto à vista relacionada.

[Tutoriais](one-to-many-relations.html) estão disponíveis para ajudar a usar relações Um para Muitos em seu projeto 4D for iOS.



## Recarga incremental

### Autorizar modificações de estrutura

Em 4D 17R5, o reload (recarga) de 4D for iOS se torna incremental. Isso significa que apenas dados novos, modificados ou apagados do banco de dados serão atualizados. Essa é uma grande melhoria em tempos de carregamento!

Para fazer isso, 4D for iOS precisa de otimizações de estrutura e criar:

* A `__DeletedRecords` table to store deleted records
* and `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

Tudo que precisa fazer é autorizar que 4D for iOS faça as mudanças de estrutura necessárias para uma atualização de dados móveis otimizada.

Quando autorizado, 4D for iOS vai fazer todo o trabalho para você, e vai se beneficiar de todas as vantagens de recarga de dados incremental.


:::tip NOTA Essas otimizações são exigidas para bancos de dados locais e servidor. :::


### "Puxar" para refrescar!

do lado do app iOS, seus dados são atualizados a cada vez que lançar seu app e cada vez que seu app for para o primeiro plano.

Em uso normal, simplesmente deslizar para baixo em qualquer formulário lista vai refrescar seus dados.

Nas configurações de iPhone, agora pode resetar os dados de seu app e encontrar informações sobre seu app.

:::tip NOTA Logo que o admin realizar uma operação importante de manutenção, ele deve alertar os usuários do app 4D for iOS que uma recarga Total é exigida.: Recover by tag / Restoration / Compaction :::
