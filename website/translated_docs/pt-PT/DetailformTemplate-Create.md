---
id: creating-detailform-templates
title: Modelos de formulário detalhado
---

<div class = "objectives"> 

**OBJETIVOS**

Criar seu primeiro modelo de formulário listado.</div> <div class = "prerequisites"> 

**PRÉ-REQUISITOS**

Clique [aqui ](prerequisites.html), para ver o que você precisa para começar!</div> 

Neste tutorial, vamos guiá-lo através da criação de um modelo de formulário detalhado. Se mostrará um **cabeçalho de imagem **, assim como **os campos de título e conteúdo** que se duplicarão na aplicação iOS gerada.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* Uma pasta **Custom Detail form** (pasta modelo de formulário detalhado)
* Un archivo **Contact.4dbase** (base de demostração Contact com um projeto de aplicação móvel pronto para utilizar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-detailform/CustomDetailFormStarterProject.zip">PROJETO STARTER - FORMATO DETALHADO PERSONALIZADO</a>

  </p>
</div>

Agora está pronto para criar o seu primeiro modelo de formulário detalhado!

## Adicione um modelo de formulário detalhado a seu projeto móvel

Primeiro, crie uma pasta *Contact.4dbase/Resources/Mobile/form/detail* e arraste e solte a pasta **Custom Detail form** nela.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Depois abra Contact.4dbase com 4D. e vá para o Arquivo > Abrir > Projeto móvel... para abrir **Contact Demo App**

Finalmente vá para **seção Formulários** no editor de projetos. Verá que o modelo de formulário detalhado personalizado foi adicionado com sucesso à lista de modelos!

![Forms section](assets/en/custom-detailform/custom-detailform-template.png)

Agora vamos focar na pasta de conteúdo **Custom Detail form** folder content.

## A pasta de modelos de formulário detalhado e seu conteúdo

* Um ícone **a layoutIconx2.png** de 160x160px que se mostrará no editor del projeto quando selecione seu modelo personalizado entre outras
* Um arquivo ** manifest.json** que inclui uma descripção básica do modelo
* **a template.svg** file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields
* Source folder that includes the **storyboard** (graphical interface) and **swift** file (code for the form)

What are those files, what it is used for and how to customize it ?