---
id: contact-app
title: Contatos do App
---

> **OBJETIVOS**
> 
> Criar sua primeira aplicação com 4D for iOS

> **PRÉ-REQUISITOS**
> 
> Clique [aqui](prerequisites.html) para ver o que precisa para começar!

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## PASSO 1. Começando
Download our Starter Project, which contains a database file and project icon, but no mobile project yet.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">PROJETO STARTER</a>
</div>

## PASSO 2. Criando o projeto

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## PASSO 3. Abrir o Editor de projeto

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## PASSO 4. Seções - geral

Here, you'll configure your app's primary information:

* **Organization:** Enter the name of your company and the application's identifier (ex. “My Company” and com.MyCompany).
* **Product:** Enter your app's name. Vamos chamar este um "contato".
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your app's copyright. É automaticamente recomendado usar os formatos oferecidos por 4D para iOS.
* **Icons:** Drag and drop an icon for your app into the icon area.
* **Developer:** This is automatically filled from the user name on your computer. Copie/cole sua referência de time desenvolvedor (da sua conta de desenvolvedor) no campo Time. Também pode deixar o campo vazio para construir sua aplicação apenas no Simulador.

![Geral](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASSO 5. Seções - Estrutura

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

> **NOTA **
> 
> Recomendamos publicar sua chave primária para identificar cada registro de seu banco de dados

![Estrutura](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASSO 6. Seções - Ícones & Etiquetas

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Define uma etiqueta curta e longa para suas tabelas de Contato
* Clique no campo ícone. A biblioteca ícone vai aparecer e pode selecionar um ícone para ilustrar a tabela de Contatos. Pode também optar por manter o campo ícone vazio. 4D para iOS vai gerar um ícone padrão para você!

**Field Properties:**

* Define uma etiqueta curta e longa para seus campos selecionados.
* Clique no campo ícone e ícones selecionados para cada campo. Há várias opções para campos ícones:
    * Pode selecionar um ícone para cada campo,
    * Se ao menos um ícone foi definido e outros campos foram deixados vazios, 4D for iOS vai gerar ícones padrão para você
    * Você pode simplesmente deixá-los vazio para não exibir quaisquer campos ícone.

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASSO 7. Seções - Menu principal

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Apesar de nosso exemplo tem apenas um item, você pode arrastar e soltar seus itens para reordená-los.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASSO 8. Seções - formulários

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Selecione um modelo de formulário de lista para exibir sua tabela como uma lista. For our Contact app, let’s use the **Profile** template.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, <i>i.e.</i>, Last Name into the search and Title fields. Os campos de pesquisa e seção são opcionais, deixe o campo seção vazio no momento.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)


* Drag and drop the content onto the appropriate places on the detail form template, <i>i.e.</i>, First Name, Last Name, and Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASSO 9. Construa o app

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* Selecione um aparelho a usar como um Simulador clicando no botão do aparelho.
* Click  **Build and Run**.
* Espere alguns segundos e…. voila! Seu app iOS está pronto!

![Compile e Execute](assets/en/contact-app/Build-the-app-simulator.png)

## PASSO 10. Que fazer agora?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Mas espere - há mais! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROJETO FINAL</a>
</div>
