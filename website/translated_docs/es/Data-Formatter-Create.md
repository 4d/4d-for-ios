---
id: creating-data-formatter
title: Crear un formato de datos
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Crear sus primeros formatos de datos.
</div>

<div markdown="1" class = "prerequisites">
**REQUISITOS PREVIOS**
Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.
</div>

En este tutorial, lo guiaremos a través de la creación de varios ejemplos de formatos.

## Descargue el proyecto Starter

To begin, download the **Starter Project**, which includes:

* **integerToImage_Images** and **textToImage_Images** folders that contain images (to use later for formatters that include images)
* A **Task Management.4dbase** file (with a ready to use mobile app project)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">PROYECTO STARTER - FORMATO PERSONALIZADO</a>
</div>

¡Ahora está listo para crear a sus primeros formatos!

## Crear la carpeta Formats

First, create a *Task Management.4dbase/Resources/Mobile/formatters* folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder.png)

## Formatos de enteros

### Número entero a cadena

* Create an **integerToString** folder in the formatters folder you've just created.
* Then create a **manifest.json** file in the **integerToString** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)

Let's look at the contents of the **manifest.json** file:

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

### Entero a imagen

* Create an **integerToImage** folder in the **formatters** folder you've created.

* Create a **manifest.json** file in the **integerToImage** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* Then create an **Images** folder in the **integerToImage** folder. You can add the images from the **integerToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)

Let's look at the contents of the **manifest.json** file:


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

## Formatos texto

### Texto a cadena

* Create a **textToString** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToString** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)

Let's look at the contents of the **manifest.json** file:

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

### Texto a imagen

* Create a **textToImage** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToImage** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)

* Then create an **Images** folder in the **textToImage** folder. You can add the images from the **textToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)

Let's look at the contents of the **manifest.json** file:

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

## Abrir un proyecto móvil

Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**

Next, go to the **Labels & Icons section** in the project editor. Todos los formatos están disponibles para los diferentes tipos de campos definidos previamente en los diferentes archivos de formato manifest.json:

* Select the **integerToString** formatter for the **Job field**
* Select the **textToString** formatter for the **Country field**
* Select the **integerToImage** formatter for the **Task Status**
* Select the **textToImage** formatter for the **Manager**

![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)

## Genere su aplicación 4D for iOS

Genere su aplicación 4D for iOS y verá que su formateador de datos se aplica correctamente en función del "crédito límite".

![Text formatter](assets/en/custom-formatter/formatters-final-result.png)

Click on **FORMATTER FINAL** below to download the completed formatter template folder.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">FORMAT FINAL</a>
</div>
