---
id: creating-data-formatter
title: Create data formatter
sidebar_label: Create data formatter
---
<div class = "objectives"> 

**OBJETIVOS**

* Criar seus primeiros formatadores de dados</div> <div class = "prerequisites"> 

**PRÉ-REQUISITOS**

* Clique [aqui ](prerequisites.html), para ver o que você precisa para começar!</div> 

Neste tutorial, vamos guiá-lo através da criação de vários exemplos de formatador.

## Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* Pastas**integerToImage_Images** e **textToImage_Images** que contêm imagens (para usar mais tarde para formatadores que incluem imagens)
* Um arquivo de **Task Management.4dbase** (com um projeto de app móvel pronto para usar)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormatterStarterProject.zip">PROJETO PERSONALIZADO FORMATTER STARTER</a>

  </p>
</div>

Agora você já está pronto para criar seus primeiros formatadores!

## Crie a pasta formatadores

Primeiro, crie uma pasta .../Resources/Mobile/formatters no mesmo nível que os dados de Task Management.4dbase.

![Formatter folder](assets/custom-formatter/formatter-folder.png)

## Formatadores de inteiros

### Número inteiro para string

* Crie uma pasta ** integerToString **na pasta formatadores, que você acabou de criar.

* Em seguida, crie um arquivo **manifest.json ** na pasta **integerToString**.

![Formatter folder](assets/custom-formatter/formatter-folder-integertostring.png)

* Vamos olhar o conteúdo do arquivo de**manifest.json **:

    {
        // 1
        "name": "integerToString",
    
        // 2
       "type": ["integer"],
    
       // 3
       "binding": "localizedText",
    
       // 4
       "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
    }
    

1. **nome**: o nome do formatador
2. **tipo**: o tipo de formatador 4D você deseja usar
3. **binding**: pode ser **texto localizado** para cadeias de caracteres ou **imageNamed** para imagens
4. **choiceList**: valores mapeados

### Inteiro para imagem

* Crie uma pasta ** integerToString **na pasta **formatadores **, que você acabou de criar.

* Em seguida, crie um arquivo de**manifest.json ** na pasta **integerToString**.

![Formatter folder](assets/custom-formatter/formatter-folder-integertoimage.png)

* Em seguida, crie um arquivo de** Imagens** na pasta **ToImage**. Pode adicionar as imagens de **IntegerToImage_Images ** em StarterProject.zip para a nova pasta.
    
    ![Formatter images](assets/custom-formatter/formatter-images-integertoimage.png)

* Vamos olhar o conteúdo do arquivo de**manifest.json **:

    {
        // 1
        "name": "integerToImage",
    
        // 2
       "type": ["integer"],
    
        // 3
       "binding": "imageNamed",
    
        // 4 
       "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},
    
        // 5
       "assets": {
      "size": {
       "width": 40, "height": 40
            }
        }
    }
    

1. **nome**: o nome do formatador
2. **tipo**: o tipo de formatador 4D você deseja usar 
3. **binding**: pode ser **texto localizado** para strings de caracteres ou **imageNamed** para imagens
4. **choiceList**: valores mapeados
5. **assets**: ajusta o tamanho do display (largura e altura)

## Formatadores de Texto

### Texto para string

* Crie uma pasta ** textToString **na pasta formatadores, que você acabou de criar.

* Em seguida, crie um arquivo de**manifest.json ** na pasta **textToString**.

![Formatter folder](assets/custom-formatter/formatter-folder-texttostring.png)

* Vamos olhar o conteúdo do arquivo de**manifest.json **:

    {
        // 1
        "name": "integerToImage",
    
        // 2
       "type": ["text"],
    
       // 3
       "binding": "localizedText",
    
       // 4
       "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
    }
    

1. **nome**: o nome do formatador
2. **type**: o tipo de formatador 4D que você deseja usar
3. **binding**: pode ser **texto localizado** para strings de caracteres ou **imageNamed** para imagens
4. **choiceList**: valores mapeados

### Texto para Imagem

* Crie uma pasta ** textToImage **na pasta formatadores, que você acabou de criar.

* Em seguida, crie um arquivo de**manifest.json ** na pasta **integerToImage**.

![Formatter folder](assets/custom-formatter/formatter-folder-textToImage.png)

* Em seguida, crie um arquivo de** Imagens** na pasta **ToImage**. Pode adicionar as imagens de **textToImage_Images ** em StarterProject.zip para a nova pasta.

![Formatter images](assets/custom-formatter/formatter-images-textToImage.png)

Vamos olhar o conteúdo do arquivo de**manifest.json **:

    <br />{
        // 1
        "name": "textToImage",
    
        // 2
       "type": ["integer"],
    
       // 3
       "binding": "imageNamed",
    
       // 4
       "choiceList": ["image1.png","image2.png","image3.png"],
    
        // 5
       "assets": {
      "size": {
       "width": 40, "height": 40
            }
        }
    }
    
    

## Abrir projeto móvel

Abra o Task Management.4dbase com 4D e vá para Arquivo>abrir>Projeto Móvel.... para abrir **Tasks**

Agora, vá para a seção **Labels & Icons** no editor de projetos. Todos os formatadores estão disponíveis para os tipos de campo diferentes que você definir previamente nos arquivos manifest.json de diferentes formatadores:

* Selecione o formatador de**integerToString ** para o **campo Job**
* Selecione o formatador de** textToString** para o **campo Country**
* Select the **integerToImage** formatter for the **Task Status**
* Selecione o formatador de** textToImage** para o **campo Manager**

![Text formatter](assets/custom-formatter/formatters-icons-&-labels.png)

## Construa seu app 4D for iOS

Construa seu app 4D de iOS e você verá que o formatador de dados é bem aplicado dependendo do limite de crédito.

![Text formatter](assets/custom-formatter/formatters-final-result.png)

Clique em **FORMATADOR FINAL** abaixo para baixar a pasta de modelo concluído formatador.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormattersFinalProject.zip">FORMATADOR FINAL</a>

  </p>
</div>