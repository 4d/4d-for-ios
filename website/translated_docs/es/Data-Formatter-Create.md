---
id: creating-data-formatter
title: Crear un formato de datos
---

> **OBJETIVOS**
> 
> Crear sus primeros formatos de datos.

> **REQUISITOS PREVIOS**
> 
> Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.

En este tutorial, lo guiaremos a través de la creación de varios ejemplos de formatos.

## Descargue el proyecto Starter

Para comenzar, descargue el **Starter Project**, que incluye:

* Las carpetas **integerToImage_Images** y **textToImage_Images**, que contienen las imágenes (a utilizar más adelante para los formatos que contienen imágenes)
* Un archivo **Task Management.4dbase** (con una aplicación de proyecto móvil lista para utilizar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">PROYECTO STARTER - FORMATO PERSONALIZADO</a>
</div>

¡Ahora está listo para crear a sus primeros formatos!

## Crear la carpeta Formats

Primero, cree una carpeta Task Management.4dbase/Resources/Mobile/formatters</em>.

![Formatter folder](assets/en/custom-formatter/formatter-folder.png)

## Formatos de enteros

### Número entero a cadena

* Cree una carpeta **integerToString** en la carpeta de Formats que acaba de crear.
* Cree un archivo </strong>manifest.json** en la carpeta **integerToString**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)

Veamos el contenido del archivo **manifest.json**:

```json
{
   "name": "integerToString",

   "type": ["integer"],

   "binding": "localizedText",

   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
}
```

1. **name**: el nombre del formato
2. **type**: tipo de formato 4D que desea utilizar
3. **binding**: puede ser **localized text** para las cadenas o **imageNamed** para las imágenes
4. **choiceList**: valores mapeados

### Entero a imagen

* Cree una carpeta **integerToImage** en la carpeta **formatters** que acaba de crear.

* Cree un archivo **manifest.json** en la carpeta **integerToImage**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* Cree un archivo **Images** en la carpeta **integerToImage**. Puede agregar las imágenes de **integerToImage_Images** (en StarterProject.zip) para esta nueva carpeta.

![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)

Veamos el contenido del archivo **manifest.json**:


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
1. **name**: el nombre del formato
2. **type**: el tipo de formato 4D que desea utilizar
3. **binding**: puede ser **localized text** para las cadenas o **imageNamed** para las imágenes
4. **choiceList**: valores mapeados
5. **assets**: ajustar el tamaño de visualización (ancho y alto)

## Formatos texto

### Texto a cadena

* Cree una carpeta **integerToString** en la carpeta Formats que acaba de crear.

* Create a **manifest.json** file in the **textToString** folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)

Veamos el contenido del archivo **manifest.json**:

```json
{
    "name": "textToString",

   "type": ["text"],

   "binding": "localizedText",

   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
}
```

1. **name**: el nombre del formato
2. **type**: tipo de formato 4D que desea utilizar
3. **binding**: puede ser **localized text** para las cadenas o **imageNamed** para las imágenes
4. **choiceList**: valores mapeados

### Texto a imagen

* Cree una carpeta **textToImage** en la carpeta Formats que acaba de crear.

* Cree un archivo **manifest.json** en la carpeta **textToImage**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)

* Luego cree un archivo **Images** en la carpeta **textToImage**. Puede agregar las imágenes de **textToImage_Images** (en StarterProject.zip) a esta nueva carpeta.

![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)

Veamos el contenido del archivo **manifest.json**:

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

Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom data formatters containing images. The pictures will be adapted depending on the phone's color mode.

### Tintable color

To optimize the color contrast of your black and white images on your app depending on the color mode (light or dark), you can set the images as follows, with the `"tintable": true` code line:

```json
{
   "name": "textToImage",
   "type": ["text"],
   "binding": "imageNamed",
   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},
   "assets": {
     "size": 54, 
     "tintable": true
     }
}
```
Here is the result in light mode and in dark mode:

<img src="assets/en/data-formatter/light-black-and-white.png" alt="drawing"  width="250" /> <img src="assets/en/data-formatter/dark-black-and-white.png" alt="drawing" width="250" />

### Optimized color pictures

To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with `_dark`, as follows:

<img src="assets/en/data-formatter/Architecture.jpg" alt="drawing" width="600" />

```json
{
   "name": "textToImage",
   "type": ["text"],
   "binding": "imageNamed",
   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},
   "assets": {
     "size": 54
   }
}
```
Here is the result in light mode and in dark mode:

<img src="assets/en/data-formatter/light-color.png" alt="drawing" width="250" /> <img src="assets/en/data-formatter/dark-color.png" alt="drawing" width="250" />

## Abrir un proyecto móvil

Abra Task Management.4dbase con 4D y vaya al Archivo > abrir > Mobile Project... para abrir **Tasks**

A continuación, vaya a la sección **Etiquetas e iconos** en el editor de proyectos. Todos los formatos están disponibles para los diferentes tipos de campos definidos previamente en los diferentes archivos de formato manifest.json:

* Seleccione el formato **integerToString** para **Job field**
* Seleccione el formato **textToString** para **Country field**
* Seleccione el formato **integerToImage** para **Task Status**
* Seleccione el formato **textToImage** para **Manager**

![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)

## Genere su aplicación 4D for iOS

Genere su aplicación 4D for iOS y verá que su formateador de datos se aplica correctamente en función del "crédito límite".

![Text formatter](assets/en/custom-formatter/formatters-final-result.png)

Haga clic en el botón **FORMAT FINAL** a continuación para descargar la carpeta final de modelos de formatos.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">FORMAT FINAL</a>
</div>
