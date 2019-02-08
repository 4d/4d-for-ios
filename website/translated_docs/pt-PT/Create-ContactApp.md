---
id: contact-app
title: Contact App
---
<div class = "objectives"> 

**OBJETIVOS**

Create your first app with 4D for iOS</div> <div class = "prerequisites"> 

**PRÉ-REQUISITOS**

Click [here](prerequisites.html) to see what you'll need to get started!</div> 

Este tutorial vai deixar você mergulhardireto em 4D para o desenvolvimento do iOS. Isso permitirá que você crie rapidamente e facilmente sua primeira aplicação.

*Cenário: Você é um gerente de negócios e quer consultar suas informações de contato em qualquer lugar.*

Vamos criar um app diretório de iPhone para procurar nomes de contato de uma lista e em seguida, exibir os detalhes de cada contato. Vamos chamá-lo "Contato".

## PASSO 1. Começando

Baixe nosso projeto de Starter, que contém um arquivo de banco de dados e o ícone de projeto, mas nenhum projeto móvel ainda.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/contact-app/ContactStarter.zip">STARTER PROJECT</a>

  </p>
</div>

## PASSO 2. Criando o projeto

Vamos começar com uma estrutura muito simples usando uma única tabela. Em 4D, vá para **New > Mobile project**.

Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## PASSO 3. Abrir o Editor de projeto

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## PASSO 4. Seções - geral

Here, you'll configure your app's primary information:

* **Organização:** digite o nome da sua empresa e o identificador da aplicação (ex. "Minha empresa" e com.Minhaempresa).
* **Produto:** digite o nome da sua aplicação. Vamos chamar este um "contato".
* **ID:** (Bundle ID) é gerado automaticamente como uma composição de seu identificador de organização e nome de produto.
* **Versão:** Deixe a versão como 1.0 e defina o copyright do app. É automaticamente recomendado usar os formatos oferecidos por 4D para iOS.
* **Icons:** Arraste e solte um ícone para seu app na área de ícone.
* **Desenvolvedor:** É automaticamente preenchido a partir do nome de usuário em seu computador. Copie/cole sua referência de time desenvolvedor (da sua conta de desenvolvedor) no campo Time. Também pode deixar o campo vazio para construir sua aplicação apenas no Simulador.

![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASSO 5. Seções - Estrutura

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.<div class = "tips"> 

**NOTA**

We highly recommend publishing your primary key in order to identify each record of your database</div> 

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASSO 6. Seções - Ícones & Etiquetas

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Define a short and a long label for your Contact table
* Click on the icon field. A biblioteca ícone vai aparecer e pode selecionar um ícone para ilustrar a tabela de Contatos. Pode também optar por manter o campo ícone vazio. 4D para iOS vai gerar um ícone padrão para você!

**Field Properties:**

* Define a short and a long label for your selected fields.
* Clique no campo ícone e ícones selecionados para cada campo. There are several options for field icons: 
    * You can select an icon for each field,
    * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you
    * You can simply leave them empty to not display any field icons. 

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

![Build and Run](assets/en/contact-app/Build-the-app-simulator.png)

## PASSO 10. O que fazer agora?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/contact-app/ContactFinal.zip">PROJETO FINAL</a>

  </p>
</div>