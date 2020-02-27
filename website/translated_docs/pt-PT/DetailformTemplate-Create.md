---
id: creating-detailform-templates
title: Modelos de formulário detalhado
---

:::tip OBJECTIVES Create your first list form template. :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

In this tutorial, we'll guide you through the creation of a detail form template. It will display an **image header**, as well as **title and content fields** that will be duplicated in the generated iOS app.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* Uma pasta **Custom Detail form** (pasta modelo de formulário detalhado)
* Un archivo **Contact.4dbase** (base de demostração Contact com um projeto de aplicação móvel pronto para utilizar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/archive/d6e32c547604bd32f56528b02310d083a844ffcc.zip">CUSTOM DETAIL FORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first detail form template !

## Adicione um modelo de formulário detalhado a seu projeto móvel

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Then open the Contact.4dbase with 4D. and go to File > open > Mobile Project... to open the **Contact Demo App**

Finally go to the **Forms section** in the project editor. You will see that the Custom Detail form template has been successfully added to the Detail form template list !

![Forms section](assets/en/custom-detailform/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## A pasta de modelos de formulário detalhado e seu conteúdo

* Um ícone **a layoutIconx2.png** de 160x160px que se mostrará no editor del projeto quando selecione seu modelo personalizado entre outras
* Um arquivo ** manifest.json** que inclui uma descripção básica do modelo
* Um arquivo **a template.svg** que será a representação de seu modelo que se mostrará quando defina o conteúdo de seu formulário listado e onde arrastará e soltará seus campos
* Pasta Source que inclui os arquivos **storyboard** (interface gráfica) e **swift** (código para o formulário)

What are those files, what it is used for and how to customize it ?