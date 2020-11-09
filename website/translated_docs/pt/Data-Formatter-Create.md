---
id: creating-data-formatter
title: Criar formato de dados
---

> **OBJETIVOS**
> 
> Criar seus primeiros formatos de dados.

> **PRÉ-REQUISITOS**
> 
> Clique [aqui](prerequisites.html) para ver o que precisa para começar!

Neste tutorial, vamos guiá-lo através da criação de vários exemplos de formatador.

## Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* Pastas**integerToImage_Images** e **textToImage_Images** que contêm imagens (para usar mais tarde para formatadores que incluem imagens)
* Um arquivo de **Task Management.4dbase** (com um projeto de app móvel pronto para usar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">PROJETO STARTER - FORMATO PERSONALIZADO</a>
</div>

Agora você já está pronto para criar seus primeiros formatadores!

## Crie a pasta formatadores

Primeiro, crie uma pasta *Task Management.4dbase/Resources/Mobile/formatters *.

![Formatter folder](assets/en/custom-formatter/formatter-folder.png)

## Formatadores de inteiros

### Número inteiro para string

* Crie uma pasta ** integerToString **na pasta formatadores, que você acabou de criar.
* Em seguida, crie um arquivo **manifest.json ** na pasta **integerToString**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)

Vamos olhar o conteúdo do arquivo de**manifest.json **:

```json
{
   "name": "integerToString",

   "type": ["integer"],

   "binding": "localizedText",

   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
}
```

1. **name**: the name of the formatter
2. **type**: the 4D format type you want to use
3. **binding**: can be **localized text** for strings or **imageNamed** for images
4. **choiceList**: mapped values

### Inteiro para imagem

* Create an **integerToImage** folder in the **formatters** folder you've created.

* Create a **manifest.json** file in the **integerToImage** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* Then create an **Images** folder in the **integerToImage** folder. You can add the images from the **integerToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)

Vamos olhar o conteúdo do arquivo de**manifest.json **:


```json
{
    "name": "integerToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},

   "assets": {
      "size": {
         "width": 40, "height": 40
      }
    }
}
```
1. **name**: the name of the formatter
2. **type** : the 4D format type you want to use
3. **binding**: can be **localized text** for strings or **imageNamed** for images
4. **choiceList**: mapped values
5. **assets**: adjust the display size (width and height)

## Formatadores de Texto

### Texto para string

* Create a **textToString** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToString** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)

Vamos olhar o conteúdo do arquivo de**manifest.json **:

```json
{
    "name": "textToString",

   "type": ["text"],

   "binding": "localizedText",

   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
}
```

1. **name**: the name of the formatter
2. **type**: the 4D format type you want to use
3. **binding**: can be **localized text** for strings or **imageNamed** for images
4. **choiceList**: mapped values

### Texto para Imagem

* Create a **textToImage** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToImage** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)

* Then create an **Images** folder in the **textToImage** folder. You can add the images from the **textToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)

Vamos olhar o conteúdo do arquivo de**manifest.json **:

```json
{
    "name": "textToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": ["image1.png","image2.png","image3.png"],

   "assets": {
  "size": {
   "width": 40, "height": 40
        }
    }
}

```

## Abrir projeto móvel

Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**

Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:

* Select the **integerToString** formatter for the **Job field**
* Select the **textToString** formatter for the **Country field**
* Select the **integerToImage** formatter for the **Task Status**
* Select the **textToImage** formatter for the **Manager**

![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)

## Construa seu app 4D for iOS

Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.

![Text formatter](assets/en/custom-formatter/formatters-final-result.png)

Click on **FORMATTER FINAL** below to download the completed formatter template folder.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">FORMATO FINAL</a>
</div>
