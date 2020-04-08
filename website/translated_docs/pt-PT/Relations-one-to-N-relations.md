---
id: one-to-many-relations
title: Relações Um para Muitos
---

Este tutorial vai mostrar como é fácil incluir relações Um para Muitos em 4D for iOS.

:::tip OBJETIVOS Neste tutorial, usaremos a relação de nomes entre suas tabelas. Dar nomes de relação bem descritivos ajuda a facilitar a definição de sua estrutura de projeto. :::

Vamos começar baixando o Projeto Starter:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip">ONE TO MANY STARTER PROJECT</a>
  </p>
</div>

In this tutorial, we are going to build a colorful **Task app** using 4D for iOS.

![Task App Final result](assets/en/relations/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

Mas primeiro, vamos olhar a estrutura de nosso banco de dados:

![Select link from structure section](assets/en/relations/Database-1-to-N-relations-4D-for-iOS.png)

As you can see, there is a One to Many link named **tasks** that we will use in our iOS app to display the employees'(**One**) tasks(**to Many**).

Now, go straight to Open menu > Mobile project... to select *Time Keeper* and go to the **Structure section**.

## Structure section

You can see the **tasks relation** we have seen earlier... Publique!

Agora isso vai operar como qualquer outro campo pelo resto do processo de criação do app.

![Structure section Relations properties](assets/en/relations/Structure-section-relations-4D-for-iOS.png)<div class = "tips">
**DICAS**

* Quando passar o mouse over, uma dica exibe o nome de tabela originando a relação.</div>

## Labels & Icons section

A relação Um para Muitos está agora disponível na seção [Etiquetas e ìcones](labels-and-icons.html).

É importante saber que incluindo uma relação Um para Muitos vai criar um botão no app iOS gerado.

Então, na seção Etiquetas & Icones você vai definir:

* um botão Etiqueta
* um botão ícone
* um [título](one-to-n-relations-title-definition.html) que vai ser exibido na vista destino (para indicar de onde vem, por exemplo).

![Labels & Icons section Relations properties](assets/en/project-editor/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## Seção Formulários

* Go to the Forms section and drop the *tasks* relation on the Employee Task Detail form.

![Related field in Forms section](assets/en/relations/1-to-n-relations-forms-section.png)

## Criar e executar

1. Do formulário Employee List, clique em um empregado.
2. This will open the employee's detail form, where you should see a new **Relation button** !
3. Clique no botão Relation para exibir as tarefas dos funcionários

![Related field in Forms section](assets/en/relations/One-to-n-relations-task-ios-app.png)

E pronto, é assim que funciona as relações Um para Muito em 4D for iOS!

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip">ONE TO MANY FINAL PROJECT</a>
  </p>
</div>
