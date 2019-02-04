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

We highly recommend publishing your primary key in order to identify each record of your database</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASSO 6. Seções - Ícones & Etiquetas

Agora vamos definir algumas etiquetas e ícones para as tabelas e campos selecionados.

**Table Properties:**

* Define a short and a long label for your Contact table
* Click on the icon field. A biblioteca ícone vai aparecer e pode selecionar um ícone para ilustrar a tabela de Contatos. Pode também optar por manter o campo ícone vazio. 4D para iOS vai gerar um ícone padrão para você!

**Field Properties:**

* Define a short and a long label for your selected fields.
* Clique no campo ícone e ícones selecionados para cada campo. There are several options for field icons: 
    * You can select an icon for each field,
    * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you
    * You can simply leave them empty to not display any field icons. 

![Icons & Labels](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASSO 7. Seções - Menu principal

Em seguida defina a ordem das tabelas no menu principal do aplicativo.

* **Tabelas disponíveis:** Exibe as tabelas a serem usadas.
* **Tabelas selecionadas:** exibe itens de menu do seu aplicativo. Apesar de nosso exemplo tem apenas um item, você pode arrastar e soltar seus itens para reordená-los.

![Main Menu](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASSO 8. Seções - formulários

We're almost done, but first we need to decide on the app's layout. Existem formulários Lista e Detalhes para escolher.

* Selecione um modelo de formulário de lista para exibir sua tabela como uma lista. Para nosso aplicativo de contato, vamos usar o modelo de **perfil**.

![List form template](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

Neste ponto, a parte inferior da janela de configuração foi alterada a partir da seleção de modelo para definição de conteúdo.

* Arraste e solte os campos que você deseja que seja exibido para o modelo, * ou seja*, Sobrenome nos campos pesquisa e Título. Os campos de pesquisa e seção são opcionais, deixe o campo seção vazio no momento.

![List form content](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

E finalmente, definiremos o formulário detalhe.

* Selecione um modelo que seja mais adequado para seu aplicativo. Para nosso aplicativo de contato, vamos usar o modelo de **contato Visual**.

![Detail form template](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Arraste e solte o conteúdo para os locais apropriados no modelo de formulário de detalhe, *ou seja,*, primeiro nome, sobrenome e foto.

![Detail form content](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASSO 9. Construa o app

Agora a parte divertida! Agora vamos construir seu app e testar no Simulador para ver o resultado final!

* Clique na aba **Build**.
* Selecione um aparelho a usar como um Simulador clicando no botão do aparelho.
* Clique **Construir e Executar**.
* Espere alguns segundos e…. voila! Seu app iOS está pronto!

![Build and Run](assets/contact-app/Build-the-app-simulator.png)

## PASSO 10. O que fazer agora?

Nós cobrimos o básico da criação de apps nesse tutorial, e agora você pode criar apps simples sozinho. Mas espere - ainda há mais! No próximo tutorial você vai aprender a construir um app mais complexo. Clique em **Final Projeto** abaixo para baixar o app final Contato.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">PROJETO FINAL</a>

  </p>
</div>