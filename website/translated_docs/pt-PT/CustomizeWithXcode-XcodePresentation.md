---
id: xcode-overview
title: Xcode Overview
---

<div class = "objectives"> 

**OBJETIVOS**

Garantir uma compreensão básica do trabalho com o Xcode.</div> 

Xcode exibe várias áreas que nós vamos rever:

![Xcode](assets/en/customize-with-xcode/Discover-Xcode-4D-for-iOS.png)

## Barra de ferramentas

* Botões **run** e **Stop** estão localizados no lado esquerdo da barra de ferramentas. Pressionando o botão **executar** vai construir, executar e lançar seu aplicativo no Simulador iOS selecionado.

![Build and Run](assets/en/customize-with-xcode/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* O menu suspenso ao lado do botão **Stop**indica qual destino de compilação você deseja executar e qual simulador está sendo usado.

![Toolbar Target](assets/en/customize-with-xcode/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* No lado direito da barra de ferramentas, você encontrará botões para alterar a exibição.

![Toolbar View buttons](assets/en/customize-with-xcode/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Área do editor

![Área do editor](assets/en/customize-with-xcode/Editor-Xcode-4D-for-iOS.png)

Aqui é onde a codificação acontece quando é selecionado um Swift File. Quando um arquivo de Storyboard for selecionado, aparecem as alterações de visão e o Interface Builder.

## Área de interface Builder

![Área de interface Builder](assets/en/customize-with-xcode/Interface-Builder-Xcode-4D-for-iOS.png)

Esta é uma interface gráfica que permite criar um arquivo XIB ou Storyboard. Todas suas cenas são acessíveis no lado esquerdo.

## Área Utilidade

A área de utilidade do Xcode tem dois painéis: o painel Inspetor e o painel Biblioteca.

![Área Utilidade](assets/en/customize-with-xcode/Utility-Xcode-4D-for-iOS.png)

### Painel Inspetor

Dentro da seção de propriedades, há seis diferentes abas de Inspetor, como mostrado na ilustração a seguir:

![Painel Inspetor](assets/en/customize-with-xcode/Xcode-Inspector-pane.png)

Da esquerda para a direita, estas abas são:

* **arquivo Inspetor**: para visualização e gerenciamento de arquivos de metadados, tais como nome de arquivo, tipo e caminho.

* **ajuda rápida**: para visualizar os detalhes sobre o que foi selecionado em um editor.

* **identidade Inspetor**: para a visualização de objetos metadados tais como classes, atributos de tempo de execução, etiquetas.

* **atributos Inspetor**: para configurar os atributos específicos para o objeto de Interface selecionado. Por exemplo, alguns atributos de campo de texto incluem o alinhamento de texto e cor, tipo de borda e capacidade de edição.

* **Inspetor de Tamanho**: para especificar características tais como o tamanho e a posição de um objeto de interface.

* **conexões Inspetor**: vista a outlets e ações para um objeto de interface, fazer novas conexões e excluir conexões existentes.

### Painel Biblioteca

Dentro da seção de propriedades, há quatro diferentes abas de Biblioteca, como mostrado na ilustração a seguir:

Da esquerda para a direita, estas abas são:

![Painel Biblioteca](assets/en/customize-with-xcode/Xcode-Library-pane.png)

* **arquivo modelos**: estes modelos são para os tipos comuns de arquivos listados como opções no menu Novo Arquivo.

* **Código snippets**: Estas são peças curtas de código-fonte para usar em seu aplicativo. Para usar um, arraste-o diretamente em seu arquivo de código fonte.

* **Objetos**: esta biblioteca contém os tipos de objetos de interface que você usaria para fazer sua interface de usuário. Para adicionar um para a vista, arraste-o diretamente no storyboard no editor Interface Builder.

* **Arquivos de Mídia**: Esta biblioteca contém todos os seus gráficos, ícones e arquivos de som. Para usar um, arraste-o diretamente para seu storyboard no editor Interface Builder.

## Área Debug

Esta área exibe o output e o estado de várias variáveis quando estiverem rodando seu app.

## Área navegação

Várias abas são incluídas aqui, as mais importantes são:

* **Aba Navegação**: Enumera e oferece acesso a todos os arquivos necessários para seu a plicativo funcionar propriamente.

![Navigation tab](assets/en/customize-with-xcode/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Aba de navegação Search**: Permite pesquisar todos os arquivos no projeto.

![Search navigator tab](assets/en/customize-with-xcode/Search-Navigator-Xcode-4D-for-iOS.png)

* **Aba de navegação Issue**: Exibe todos os erros em um projeto iOS.
    
    * Erros em vermelho são problemas críticos que precisam ser corrigidos para construir sua aplicação. 
    * Erros em amarelo são avisos sobre problemas que têm potencial de causar problemas mas não bloqueiam a compilação da aplicação. 

Pode clicar nos erros e avisos para visualizá-los no projeto.

![Issue Navigator](assets/en/customize-with-xcode/Issue-Navigator-Xcode-4D-for-iOS.png)

A seguir, vamos nos focalizar nos arquivos incluídos em seu app 4D for iOS da aba de navegação Projeto.