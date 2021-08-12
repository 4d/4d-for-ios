---
id: creating-data-formatter
title: Créer un format de données
---

> **OBJECTIFS**
> 
> Créer vos premiers formats de données.

> **CONDITIONS PRÉALABLES**
> 
> Cliquez [ici](prerequisites.html) pour pouvoir commencer !

Dans ce tutoriel, nous vous guiderons dans la création de divers exemples de formats.

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Les dossiers **integerToImage_Images** et **textToImage_Images**, qui contiennent des images (à utiliser ultérieurement pour les formats contenant des images)
* Un fichier **Task Management.4dbase** (accompagné d'une application de projet mobile prêt à l'emploi)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">PROJET STARTER - FORMAT PERSONNALISÉ</a>
</div>

Vous êtes maintenant prêts à créer vos premiers formats !

## Créez le dossier formatters

Créez d'abord un dossuer *Task Management.4dbase/Resources/Mobile/formatters*.

![Formatter folder](assets/en/custom-formatter/formatter-folder.png)

## Formats des entiers

### Nombre entier vers chaîne

* Créez un dossier **integerToString** dans le dossier Formats que vous venez de créer.
* Créez ensuite un fichier **manifest.json** dans le dossier **integerToString**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)

Voici le contenu du fichier **manifest.json** :

```json
{
   "name": "integerToString",

   "type": ["integer"],

   "binding": "localizedText",

   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
}
```

1. **name** : le nom du format
2. **type** : le type de format 4D que vous souhaitez utiliser
3. **binding** : soit **localized text** pour les chaînes soit **imageNamed** pour les images
4. **choiceList** : valeurs mappées

### Nombre entier vers image

* Créez un dossier **integerToImage** dans le dossier **Formats** que vous venez de créer.

* Créez un fichier **manifest.json** dans le dossier **textToImage**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* Créez ensuite un dossier **Images** dans le dossier **integerToImage**. Vous pouvez ajouter les images de **integerToImage_Images** (dans StarterProject.zip) dans ce nouveau dossier.

![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)

Voici le contenu du fichier **manifest.json** :


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
1. **name** : le nom du format
2. **type** : le type de format 4D que vous souhaitez utiliser
3. **binding** : soit **localized text** pour les chaînes soit **imageNamed** pour les images
4. **choiceList** : valeurs mappées
5. **assets** : ajuster la taille d'affichage (largeur et hauteur)

## Formats texte

### Texte vers chaîne

* Créez un dossier **textToString** dans le dossier Formats que vous venez de créer.

* Créez un fichier **manifest.json** dans le dossier **textToString**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)

Voici le contenu du fichier **manifest.json** :

```json
{
    "name": "textToString",

   "type": ["text"],

   "binding": "localizedText",

   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
}
```

1. **name** : le nom du format
2. **type** : le type de format 4D que vous souhaitez utiliser
3. **binding** : soit **localized text** pour les chaînes soit **imageNamed** pour les images
4. **choiceList** : valeurs mappées

### Texte vers image

* Créez un dossier **textToImage** dans le dossier Formats que vous venez de créer.

* Créez un fichier **manifest.json** dans le dossier **textToImage**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)

* Créez ensuite un dossier **Images** dans le dossier **textToImage**. Vous pouvez ajouter les images de **textToImage_Images** (dans StarterProject.zip) dans ce nouveau dossier.

![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)

Voici le contenu du fichier **manifest.json** :

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
## Ouvrir un projet mobile

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

## Ouvrir un projet mobile

Ouvrez Task Management.4dbase et accédez au Fichier > ouvrir > Projet mobile...pour ouvrir **Tasks**

Accédez ensuite à la section **Libellés et icônes** dans l'éditeur de projet. Tous vos formats sont disponibles et sont applicables aux différents types de champs définis précédemment dans les fichiers de format manifest.json :

* Sélectionnez le format **integerToString** pour **Job field**
* Sélectionnez le format **textToString** pour **Country field**
* Sélectionnez le format **integerToImage** pour **Task Status**
* Sélectionnez le format **textToImage** pour **Manager**

![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)

## Générez votre application 4D for iOS

Générez votre application 4D for iOS. Vous constatez que vos formats de données s'appliquent correctement en fonction du "credit limit".

![Text formatter](assets/en/custom-formatter/formatters-final-result.png)

Cliquez sur le bouton **FORMAT FINAL** ci-dessous pour télécharger le dossier final des modèles de formats.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">FORMAT FINAL</a>
</div>
