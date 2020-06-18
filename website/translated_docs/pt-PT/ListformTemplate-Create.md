---
id: creating-listform-templates
title: List form templates
---

<div class = "objectives"> 

**OBJECTIVES**

Create your first list form template.</div> <div class = "prerequisites"> 

**PREREQUISITES**

Clique [aqui](prerequisites.html) para ver o que precisa para começar!</div> 

In this tutorial, we'll cover nearly all aspects of creating a list form template such as: creating a list form with a **searchBar** and a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Baixe o Starter Project

Before we begin, be sure to download the **Starter Project** which includes:

* Uma pasta **formulário Lista** 
* Um arquivo **Contact.4dbase** (um banco de dados demo com um projeto de app móvel pronto para usar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/archive/513e9d4c378ac52a2a4bf84c7a96a132aecfb1c0.zip">LISTFORM STARTER PROJECT</a>

  </p>
</div>

You are now ready to create your first list form template!

## Adicione um modelo de formulário lista para seu projeto móvel

The first thing you'll need to do is create a *Contact.4dbase/Resources/Mobile/form/list* folder. Then drag and drop your **list form** folder into it.

![Mobile folder list form template](assets/en/custom-listform/mobile-folder-custom-template.png)

Next, open the Contact.4dbase file with 4D. (File > open > Mobile Project > **Contact Demo App**)

Finally, in the **Forms section** of the project editor, you'll see that your list form template has been successfully added to the list of available list form templates!

![Seção Formulários](assets/en/custom-listform/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## Conteúdos do modelo formulário lista

In this folder, you'll find:

* Um ícone** layoutIconx2.png** de 160x160px : será exibido no editor de projeto quando selecionar seu modelo
* Um arquivo**manifest.json** : inclui uma descrição básica do modelo
* Um arquivo**template.svg** : a representação visual de seu modelo que é mostrada quando definir o conteúdo de seu formulário lista.
* Pasta Source : inclui os arquivos **storyboard** (interface gráfica) e **Swift** (código para o formulário)

What are these files? What are they used for? How can you customize them?