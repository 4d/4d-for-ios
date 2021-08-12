---
id: creating-detailform-templates
title: Modelos de formulário detalhado
---

> **OBJETIVOS**
> 
> Criar seu primeiro modelo de formulário listado.

> **PRÉ-REQUISITOS**
> 
> Clique [aqui](prerequisites.html) para ver o que precisa para começar!

Neste tutorial, vamos guiá-lo através da criação de um modelo de formulário detalhado. Se mostrará um **cabeçalho de imagem **, assim como **os campos de título e conteúdo** que se duplicarão na aplicação iOS gerada.

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* Uma pasta **Custom Detail form** (pasta modelo de formulário detalhado)
* Um archivo **Contact.4dbase** (base de demonstração Contact com um projeto de aplicação móvel pronto para utilizar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/releases/latest/download/tutorial-CustomDetailFormStarter.zip">PROJETO STARTER - FORMATO DETALHADO PERSONALIZADO</a>
</div>

Agora está pronto para criar o seu primeiro modelo de formulário detalhado!

## Adicione um modelo de formulário detalhado a seu projeto móvel

Primeiro, crie uma pasta *Contact.4dbase/Resources/Mobile/form/detail* e arraste e solte a pasta **Custom Detail form** nela.

![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)

Depois abra Contact.4dbase com 4D. e vá a File > open > Mobile Project... para abrir a aplicação **Contact Demo App**

Finalmente vá para **seção Formulários** no editor de projetos. Verá que o modelo de formulário detalhado personalizado foi adicionado com sucesso à lista de modelos!

![Seção Formulários](assets/en/custom-detailform/custom-detailform-template.png)

Agora vamos focar na pasta de conteúdo **Custom Detail form** folder content.

## A pasta de modelos de formulário detalhado e seu conteúdo

* Um ícone **a layoutIconx2.png** de 160x160px que se mostrará no editor del projeto quando selecione seu modelo personalizado entre outras
* Um arquivo ** manifest.json** que inclui uma descripção básica do modelo
* Um arquivo **a template.svg** que será a representação de seu modelo que se mostrará quando defina o conteúdo de seu formulário listado e onde arrastará e soltará seus campos
* Pasta Source que inclui os arquivos **storyboard** (interface gráfica) e **swift** (código para o formulário)
* **android folder** that includes the layout.xml file (graphical interface) in app > src > main > res > layout folder

O que são estes arquivos, para que servem e como podem ser personalizados?