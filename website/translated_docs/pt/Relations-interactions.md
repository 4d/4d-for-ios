---
id: relations-interactions
title: Relation interactions
---

R6 permite que adicione interações em seus apps. Por exemplo pode publicar relações One to Many e Many to One a partir de uma relação[Many to one](many-to-one-relations.html) !

# Editor de Projeto

## Seção Estrutura

A partir da seção estrutura, pode publicar relações a partir de uma relação Many to One de forma simples. Isso permite exibir por exemplo relações Many to Many em seu app iOS

![Publish relations from Structure section](assets/en/relations/structure-section.gif)

## Labels & Icons section

Na seção Labels & Icons, pode personalizar sua etiqueta de botão relacões

### Obter o número de registros

Uma nova propriedade está disponível para exibir o número de registros que serão exibidos ao clicar em uma relação One to Many.

Para fazer isso apenas adicione %length% em sua etiqueta de relação longa ou curta para uma relação One to Many.

![length parameter](assets/en/relations/icons-labels-length-parameter-relation.png)

## Seção Formulários

### Adicione qualquer relação onde quer que queira

Qualquer tipo de relação pode ser jogada no formulário Lista e Detalhe para adicionar interações e criar apps mais dinâmicos do que nunca!

![Drop relations list and detail forms](assets/en/relations/drop-relation-list-detail-form.gif)

### Torne seus campos clicáveis

Na seção formulários, pode fazer com que seus campos fiquem clicáveis ao soltar relações em um campo em formulários Lista ou em formulários Detalhe.

![Clickable fields](assets/en/relations/clickable-fields-relation.gif)


# App Gerado

Essas melhorias permitem adicionar intereações em seu app:

* Mova-se de um formulário lista para outro formulário lista ao invés de abrir um formulário detalhe para poder acessar outro formulário lista.

Neste exemplo acessamos a lista de ordens a partir da lista Ordens clicando em uma relação ONe to Many a partir do formulário Lista Clientes

![Many to many relation](assets/en/relations/many-to-many-relations.gif)

* Exiba relações em seus formulários Lista para acessar os formulários Detalhe relacionados.

Nesse exemplo acessamos ao formulário detalhe Cliente, a lista Ordens e o formulário detalhe Ordens.

![Many to One relation](assets/en/relations/many-to-one-relations.gif)

* Torne seu campo clicável adicionando uma relação N to One e exibindo número de registros graças a  %length%.

Nesse exemplo o número de produto para cada relação ONe to Many no formulário lista Categoria é exibido.

![length for one to many](assets/en/relations/length-for-one-to-many.png)



