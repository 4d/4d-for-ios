---
id: contact-app
title: Contact App
---

:::tip OBJECTIVES Create your first app with 4D for iOS :::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## PASSO 1. Começando

Download our Starter Project, which contains a database file and project icon, but no mobile project yet.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">STARTER PROJECT</a>

  </p>
</div>

## PASSO 2. Criando o projeto

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

Dê um nome a seu projeto e clique **Criar**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## PASSO 3. Abrir o Editor de projeto

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Clique **Continue**.

## PASSO 4. Seções - geral

Here, you'll configure your app's primary information:

* **Organização:** digite o nome da sua empresa e o identificador da aplicação (ex. "Minha empresa" e com.Minhaempresa).
* **Produto:** digite o nome da sua aplicação. Vamos chamar este um "contato".
* **ID:** (Bundle ID) é gerado automaticamente como uma composição de seu identificador de organização e nome de produto.
* **Versão:** Deixe a versão como 1.0 e defina o copyright do app. É automaticamente recomendado usar os formatos oferecidos por 4D para iOS.
* **Icons:** Arraste e solte um ícone para seu app na área de ícone.
* **Desenvolvedor:** É automaticamente preenchido a partir do nome de usuário em seu computador. Copie/cole sua referência de time desenvolvedor (da sua conta de desenvolvedor) no campo Time. Também pode deixar o campo vazio para construir sua aplicação apenas no Simulador.

![Geral](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASSO 5. Seções - Estrutura

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

:::tip NOTE We highly recommend publishing your primary key in order to identify each record of your database :::

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

* **Tabelas disponíveis:** Exibe as tabelas a serem usadas.
* **Tabelas selecionadas:** exibe itens de menu do seu aplicativo. Apesar de nosso exemplo tem apenas um item, você pode arrastar e soltar seus itens para reordená-los.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASSO 8. Seções - formulários

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Selecione um modelo de formulário de lista para exibir sua tabela como uma lista. Para nosso aplicativo de contato, vamos usar o modelo de **perfil**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Arraste e solte os campos que você deseja que seja exibido para o modelo, * ou seja*, Sobrenome nos campos pesquisa e Título. Os campos de pesquisa e seção são opcionais, deixe o campo seção vazio no momento.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Selecione um modelo que seja mais adequado para seu aplicativo. Para nosso aplicativo de contato, vamos usar o modelo de **contato Visual**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Arraste e solte o conteúdo para os locais apropriados no modelo de formulário de detalhe, *ou seja,*, primeiro nome, sobrenome e foto.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASSO 9. Construa o app

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Clique na aba **Build**.
* Selecione um aparelho a usar como um Simulador clicando no botão do aparelho.
* Clique **Construir e Executar**.
* Espere alguns segundos e…. voila! Seu app iOS está pronto!

![Criar e executar](assets/en/contact-app/Build-the-app-simulator.png)

## PASSO 10. O que fazer agora?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Mas espere - há mais! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROJETO FINAL</a>

  </p>
</div>