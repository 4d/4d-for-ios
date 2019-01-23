---
id: contact-app
title: Contact App
sidebar_label: Contact App
---
<div class = "objectives"> 

**OBJETIVOS**

* Create your first app with 4D for iOS</div> <div class = "prerequisites"> 

**PRÉ-REQUISITOS**

* Clique aqui em [](prerequisites.html), para ver o que você precisa para começar!</div> 

Este tutorial vai deixar você mergulhardireto em 4D para o desenvolvimento do iOS. Isso permitirá que você crie rapidamente e facilmente sua primeira aplicação.

*Cenário: Você é um gerente de negócios e quer consultar suas informações de contato em qualquer lugar.*

Vamos criar um app diretório de iPhone para procurar nomes de contato de uma lista e em seguida, exibir os detalhes de cada contato. Vamos chamá-lo "Contato".

## PASSO 1. Começando

Baixe nosso projeto de Starter, que contém um arquivo de banco de dados e o ícone de projeto, mas nenhum projeto móvel ainda.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactStarter.zip">STARTER PROJECT</a>

  </p>
</div>

## PASSO 2. Criando o projeto

Vamos começar com uma estrutura muito simples usando uma única tabela. Em 4D, vá para **New > Mobile project**.

Dê um nome a seu projeto e clique em **criar**.

![Project Creation](assets/contact-app/Project-creation-4D-for-iOS.png)

## PASSO 3. Abrir o Editor de projeto

Bem-vindo ao 4D para iOS! A tela de boas vindas exibe as fases principais de criação de app desta magnífica ferramenta. 🙂

![Welcome Screen](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

Clique **continuar**.

## PASSO 4. Seções - geral

Aqui, você vai configurar informações principais do seu aplicativo:

* **Organização:** digite o nome da sua empresa e o identificador da aplicação (ex. "Minha empresa" e com.Minhaempresa).
* **Produto:** digite o nome da sua aplicação. Vamos chamar este um "contato".
* **ID:** (Bundle ID) é gerado automaticamente como uma composição de seu identificador de organização e nome de produto.
* **Versão:** Deixe a versão como 1.0 e defina o copyright do app. É automaticamente recomendado usar os formatos oferecidos por 4D para iOS.
* **Icons:** Arraste e solte um ícone para seu app na área de ícone.
* **Desenvolvedor:** É automaticamente preenchido a partir do nome de usuário em seu computador. Copie/cole sua referência de time desenvolvedor (da sua conta de desenvolvedor) no campo Time. Também pode deixar o campo vazio para construir sua aplicação apenas no Simulador.

![General](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASSO 5. Seções - Estrutura

Aqui é onde vai definir um subconjunto de seus dados (as tabelas de banco de dados e campos) para expor os aparelhos móveis.

Em nosso exemplo, selecione **ID**, ** Nome**, **Sobrenome**, **Cargo**, **Empresa**, **Telefone**, **Notas** e **Foto**.<div class = "tips"> 

**NOTA**

* Recomendamos fortemente que publique sua chave primária para identificar cada registro em seu banco de dados.</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASSO 6. Sections - Icons & Labels

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:** * Define a short and a long label for your Contact table * Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

**Field Properties:** * Define a short and a long label for your selected fields. * Click on the icon field and select icons for each field. There are several options for field icons: * You can select an icon for each field, * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you * You can simply leave them empty to not display any field icons.

![Icons & Labels](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## STEP 7. Sections - Main Menu

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![Main Menu](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## STEP 8. Sections - Forms

We're almost done, but first we need to decide how the app's layout. There are both List and Details forms to choose from.

* Select a list form template to display your table as a list. For our Contact app, let’s use the **Profile** template.

![List form template](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, *i.e.*, Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![List form content](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form. * Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Drag and drop the content onto the appropriate places on the detail form template, *i.e.*, First Name, Last Name, and Photo.

![Detail form content](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## STEP 9. Build the app

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* Select a device to use as a Simulator by clicking on the device button.
* Click **Build and Run**.
* Wait a few seconds and …. voila! Your iOS app is alive!

![Build and Run](assets/contact-app/Build-the-app-simulator.png)

## STEP 10. Where to go from here?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">FINAL PROJECT</a>

  </p>
</div>