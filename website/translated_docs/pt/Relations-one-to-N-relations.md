---
id: one-to-many-relations
title: Relações Um para Muitos
---

Este tutorial vai mostrar como é fácil incluir relações Um para Muitos em 4D for iOS.


> **NOTA **
> 
> Neste tutorial, vamos usar os nomes das relações entre suas tabelas.

> Dar nomes de relação bem descritivos ajuda a facilitar a definição de sua estrutura de projeto.


Vamos começar baixando o Projeto Starter:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip">PROJETO STARTER UM PARA MUITOS</a>
</div>

Neste tutorial, vamos construir um **Task app** colorido usando 4D for iOS.

![Task App Final result](assets/en/relations/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

Mas primeiro, vamos olhar a estrutura de nosso banco de dados:

![Select link from structure section](assets/en/relations/Database-1-to-N-relations-4D-for-iOS.png)

Como pode ver, há um link  One to Many chamado **tasks** que vamos usar em nosso iOS app para exibir as tasks/tarefas(**to Many**).dos funcionários'(**One**)

Agora vá direto para o menu Open > Mobile project... selecione *Time Keeper* e vá para a seção  **Structure**.

## Seção Estrutura

Pode ver a **relação de tasks/tarefas** que vimos antes... Publique!

Agora isso vai operar como qualquer outro campo pelo resto do processo de criação do app.

![Structure section Relations properties](assets/en/relations/Structure-section-relations-4D-for-iOS.png)

> **DICAS**
> 
> * Ao passar com o mouse por cima, uma sugestão mostra o nome da tabela fonte que origina a relação.


## Labels & Icons section

A relação Um para Muitos está agora disponível na seção [Etiquetas e ìcones](labels-and-icons.html).

É importante saber que incluindo uma relação Um para Muitos vai criar um botão no app iOS gerado.

Então, na seção Etiquetas & Icones você vai definir:

* um botão Etiqueta
* um botão ícone
* um [título](one-to-n-relations-title-definition.html) que vai ser exibido na vista destino (para indicar de onde vem, por exemplo).

![Labels & Icons section Relations properties](assets/en/project-editor/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## Seção Formulários

* Vá para a seção Formulários e solte a relação *tasks* no formulário detalhado Employee Task.

![Related field in Forms section](assets/en/relations/1-to-n-relations-forms-section.png)

## Compile e Execute

1. Do formulário Employee List, clique em um empregado.
2. Isso vai abrir o formulário detalhado employee/empregados, onde você verá um novo botão **Relation** !
3. Clique no botão Relation para exibir as tarefas dos funcionários

![Related field in Forms section](assets/en/relations/One-to-n-relations-task-ios-app.png)

E pronto, é assim que funciona as relações Um para Muito em 4D for iOS!

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip">PROJETO FINAL UM PARA MUITOS (1 PARA N)</a>
</div>
