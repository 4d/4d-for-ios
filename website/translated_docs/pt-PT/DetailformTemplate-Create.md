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
* A **Contact.4dbase** file (Contact demo database with a ready to use mobile app project)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-detailform/CustomDetailFormStarterProject.zip">CUSTOM DETAIL FORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first detail form template !

## Add a detail form template to your mobile project

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Then open the Contact.4dbase with 4D. and go to File > open > Mobile Project... to open the **Contact Demo App**

Finally go to the **Forms section** in the project editor. You will see that the Custom Detail form template has been successfully added to the Detail form template list !

![Forms section](assets/en/custom-detailform/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## Detail form template folder content

* **a layoutIconx2.png** icon in 160x160px that will be displayed in the project editor when you select your custom template among others
* **a manifest.json** file that includes a basic description of the template
* **a template.svg** file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields
* Source folder that includes the **storyboard** (graphical interface) and **swift** file (code for the form)

What are those files, what it is used for and how to customize it ?