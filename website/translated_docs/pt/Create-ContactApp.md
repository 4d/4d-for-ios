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

Este tutorial lhe permitirá que se jogue diretamente no desenvolvimento de 4D for iOS. Premite que crie de forma fácil e rápida sua primeira aplicação.

*Cenário: Imagine que você é um diretor comercial e queira consultar sua lista de contatos fora do escritório.*

Vamos criar uma aplicação de diretório para iPhone para pesquisar os nomes dos contatos de uma lista e depois ver os detalhes de cada contato. Vamos chamar de "Contato".

## PASSO 1. Começando
Baixe nosso projeto Starter, que contém um arquivo de banco de dados e o ícone de projeto, mas ainda não contém o  projeto móvel.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">PROJETO STARTER</a>
</div>

## PASSO 2. Criando o projeto

Vamos começar com uma estrutura muito simples, utilizando uma única tabela. De 4D, ir a **Novo > Projeto móvel**.

Dê um nome a seu projeto e clique em **Criar**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## PASSO 3. Abrir o Editor de projeto

Bem vindo a 4D for iOS! A tela de Boas vindas exibe as principais etapas de criação de aplicações dessa ferramenta. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Clique em **Continue**.

## PASSO 4. Seções - geral

Aqui, poderá configurar a informação principal da aplicação:

* **Organização:** escreva o nome de sua empresa e o identificador de aplicação (ex. “My Company” e com.MyCompany).
* **Produto:** introduza o nome de sua aplicação. Vamos chamar este um "contato".
* **ID:** (Pacote ID) é gerado automaticamente e é composto  do identificador de sua empresa e do nome de seu produto.
* **Versão:** deixe a versão 1.0 e defina os direitos de autor de sua aplicação. É automaticamente recomendado usar os formatos oferecidos por 4D para iOS.
* **Icones:** arraste e solte um ícone para sua aplicação na área do ícone.
* **Desenvolvedor:** esta sub seção é preenchida automaticamente a partir do nome de usuário em seu computador. Copie/cole sua referência de time desenvolvedor (da sua conta de desenvolvedor) no campo Time. Também pode deixar o campo vazio para construir sua aplicação apenas no Simulador.

![Geral](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASSO 5. Seções - Estrutura

Nesta seção é onde se definirá um subconjunto de seus dados (tabelas e campos do banco de dados) para mostrar em dispositivos móveis.

Para nosso exemplo, selecione **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** e **Photo**.

> **NOTA **
> 
> Recomendamos publicar sua chave primária para identificar cada registro de seu banco de dados

![Estrutura](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASSO 6. Seções - Ícones & Etiquetas

Agora é o momento de definir algumas etiquetas e ícones para os campos e tabelas selecionados.

**Propriedades de tabela:**

* Define uma etiqueta curta e longa para suas tabelas de Contato
* Clique no campo ícone. A biblioteca ícone vai aparecer e pode selecionar um ícone para ilustrar a tabela de Contatos. Pode também optar por manter o campo ícone vazio. 4D para iOS vai gerar um ícone padrão para você!

**Propriedades de campo:**

* Define uma etiqueta curta e longa para seus campos selecionados.
* Clique no campo ícone e ícones selecionados para cada campo. Há várias opções para campos ícones:
    * Pode selecionar um ícone para cada campo,
    * Se ao menos um ícone foi definido e outros campos foram deixados vazios, 4D for iOS vai gerar ícones padrão para você
    * Você pode simplesmente deixá-los vazio para não exibir quaisquer campos ícone.

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASSO 7. Seções - Menu principal

AGora é definir a ordem das tabelas no menu principal da aplicação.

* **Tabelas disponíveis:** mostra as tabelas a utilizar.
* **Tabelas selecionadas:** exibe os elementos de menu de sua aplicação. Apesar de nosso exemplo tem apenas um item, você pode arrastar e soltar seus itens para reordená-los.

![Menu principal](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASSO 8. Seções - formulários

Já estamos quase terminando mas primeiro precisamos decidir no layout da aplicação Já estamos quase terminando mas primeiro precisamos decidir no layout da aplicação Pode escolher entre formulários lista e formulários detalhados.

* Selecione um modelo de formulário de lista para exibir sua tabela como uma lista. Para nossa aplilcação Contact, vamos usar o modelo **Profile**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

Nesse ponto, a parte inferior da janela de configuração mudou de seleção de modelos a definição do conteúdo.

* Arraste e solte os campos que quiser mostrar no modelo, <i>ou seja</i>, Last Name nos campos de título e pesquisa. Os campos de pesquisa e seção são opcionais, deixe o campo seção vazio no momento.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

E por último, definimos o formulário detalhado.

* Selecione uma modelo que se adapte melhor a sua aplicação. Para nossa aplicação Contact, utilizaremos o modelo **Visual Contact**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)


* Arraste e solte o conteúdo nos lugares adequados no modelo de formulário detalhado, <i>ou seja</i>, Nome, Sobrenome e foto.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASSO 9. Construa o app

Agora a parte divertida! É hora de criar sua aplicação e testá-lo no simulador para ver o resultado final.

* Clique na aba **Gerar**.
* Selecione um aparelho a usar como um Simulador clicando no botão do aparelho.
* Clique em  **Gerar e executar**.
* Espere alguns segundos e…. voila! Seu app iOS está pronto!

![Compile e Execute](assets/en/contact-app/Build-the-app-simulator.png)

## PASSO 10. Que fazer agora?

Cobrimos a criação básica de aplicações neste tutorial, e agora você pode criar aplicações simples sozinho. Mas espere - há mais! No próximo tutorial, vai aprender como gerar uma aplicação ainda mais complexa. Clique no botão **Final Project** abaixo para descarregar a aplicação Contact final.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROJETO FINAL</a>
</div>
