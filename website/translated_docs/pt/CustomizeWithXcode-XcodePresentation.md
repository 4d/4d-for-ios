---
id: xcode-overview
title: Apresentação do Xcode
---

> **OBJETIVOS**
> 
> Garantir uma compreensão básica do funcionamento de Xcode.

Xcode mostra as diferentes áreas que vamos revisar:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Barra de ferramentas

* Os botões **Run** e **Stop** esetão à esquerda da barra de ferramentas. O botão **Run** permite criar, executar e lançar sua aplicação no simulador iOS selecionado.

![Compile e Execute](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* O menu dropdown ao lado do botão **Stop** indica os elementos que quiser executar e qual simulador se está utilizando.

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* No lado direito da barra de ferramentas, você encontrará botões para alterar a exibição.

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Área do editor

![Área do editor](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

Aqui é onde ocorre a codificação quando selecionar um arquivo Swift. Quando selecionar um arquivo Storyboard, a vista muda e aparece a Interface Builder.

## Área de interface Builder

![Área de interface Builder](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

Esta é uma interface gráfica que lhe permite criar um arquivo Storyboard ou XIB. Todas as suas cenas são acessíveis no lado esquerdo.

## Área Utilidade

A área de funcionalidades de Xcode tem dois painéis: o painel Inspector e o painel Library (biblioteca)

![Área Utilidade](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Painel Inspetor

Dentro da seção Propriedades, há seis diferentes abas do Inspector, como mostrado na ilustração a seguir:

![Painel Inspetor](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

Da esquerda para a direita, estas abas são:

* **File inspector (inspetor de arquivo)**: para ver e administrar os metadados de um arquivo, tais como o nome, o tipo e a rota de arquivo.

* **Quick Help (ajuda rápida)**: para ver detalhes sobre o que foi selecionado em um editor.

* **Identity inspector (inspetor de identidade)**: para a visualização dos metadados do objeto tais como a classe de um objeto, o tempo de execução de seus atributos, da etiqueta.

* **Attributes inspector (inspetor de atributos)**: para configurar os atributos específicos do objeto da interface selecionado. Por exemplo, alguns atributos de campo de texto incluem o alinhamento de texto e cor, tipo de borda e capacidade de edição.

* **Size inspector (inspetor de dimensões)**: para especificar as características tais como o tamanho e a posição de um objeto.

* **Connection inspector (inspetor de conexões)**: para ver os "outlets" de um objeto, estabelecer novas conexões e apagar as conexões existentes.

### Painel Biblioteca

Dentro da seção Propriedades, Library tem quatro diferentes abas, como mostrado na ilustração abaixo:

Da esquerda para a direita, estas abas são:

![Painel Biblioteca](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **File templates**: These templates are for the common types of files listed as choices in the New File menu.

* **Code snippets**: These are short pieces of source code for use in your application. Para usar um, arraste-o diretamente em seu arquivo de código fonte.

* **Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. Para adicionar um para a vista, arraste-o diretamente no storyboard no editor Interface Builder.

* **Media files**: This library contains all your graphics, icons, and sound files. Para usar um, arraste-o diretamente para seu storyboard no editor Interface Builder.

## Área Debug

This area displays the output and the state of various variables when running your app.

## Área navegação

Several tabs are included here, the most important of which are:

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project.

    - Erros em vermelho são problemas críticos que precisam ser corrigidos para construir sua aplicação.
    - Erros em amarelo são avisos sobre problemas que têm potencial de causar problemas mas não bloqueiam a compilação da aplicação.

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.
