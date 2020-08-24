---
id: many-to-one-relations
title: Relações Muitos para Um
---

4D v17 R5 inclui um novo conceito: as relações Muitos para Um (N a 1)

> **NOTA **
> 
> Neste tutorial, vamos usar os nomes das relações entre suas tabelas.

> Dar nomes de relação bem descritivos ajuda a facilitar a definição de sua estrutura de projeto.

Vamos começar baixando o Projeto Starter:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">PROJETO STARTER N para UM</a>
</div>

Here we want to display the category for each task in the detail form of your generated app. To do so, open the **StarteriOSProject** from **Open > Mobile Project...**

Then go right to your Structure section and select the **Task table**.

### Seção Estrutura

* You can notice that the **TaskCategory relation** is underlined

* Ao clicar nele, serão mostrados os campos disponíveis através dessa relação.

* Select the **Name field**

![Select link from structure section](assets/en/relations/select-link-from-structure.png)

* Este campo funcionará como qualquer outro campo durante o resto do processo de criação da aplicação

* Pode também filtrar seu conteúdo de app usando campos relacionados da seção Data. To do so enter `TaskCategory.Name != 'Personal'` in the Filter query field to exclude personal tasks.

 ![Related field from Data section](assets/en/relations/Related-field-from-Data-section.png)

* You can then select an **icon** as well as **formatters** and define **short and long labels** from the Labels and Icons section

![Related field from Labels and Icons section](assets/en/relations/related-field-from-labels-icons.png)

* Vá para a seção Formulários e arraste o campo no formulário detalhado Tasks

![Related field in Forms section](assets/en/relations/related-field-forms.png)

* Compile e Execute

Seu campo relacionado deve aparecer no formulário detalhado do app!

![Related field in Forms section](assets/en/relations/final-result-n-to-one-relations.png)


