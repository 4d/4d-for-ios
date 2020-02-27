---
id: creating-data-formatter
title: Créer le format de données
---

:::tip OBJECTIVES Create your first data formatters.

:::

:::important PREREQUISITES Click [here](prerequisites.html) to see what you'll need to get started! :::

In this tutorial, we'll guide you through the creation of various formatter examples.

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Les dossiers **integerToImage_Images** et **textToImage_Images**, qui contiennent des images (à utiliser ultérieurement pour les formats contenant des images)
* Un fichier **Task Management.4dbase** (accompagné d'une application de projet mobile prêt à l'emploi)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">CUSTOM FORMATTER STARTER PROJECT</a>

  </p>
</div>

You're now ready to create your first formatters!

## Créez le dossier formatters

First, create a *Task Management.4dbase/Resources/Mobile/formatters* folder.

![Formatter folder](assets/en/custom-formatter/formatter-folder.png)

## Formats des entiers

### Nombre entier vers chaîne

* Créez un dossier **integerToString** dans le dossier Formats que vous venez de créer.
* Créez ensuite un fichier **manifest.json** dans le dossier **integerToString**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)

Regardons le contenu du fichier **manifest.json** :

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

* Créez un fichier **manifest.json** dans le dossier **integerToImage**.

![Formatter folder](assets/en/custom-formatter/formatter-folder-integertoimage.png)

* Créez ensuite un dossier **Images** dans le dossier **integerToImage**. Vous pouvez ajouter les images de **integerToImage_Images** (dans StarterProject.zip) dans ce nouveau dossier.

![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)

Regardons le contenu du fichier **manifest.json** :

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

Regardons le contenu du fichier **manifest.json** :

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

Regardons le contenu du fichier **manifest.json** :

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

## Ouvrez un projet mobile

Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**

Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you previously defined in the different formatter manifest.json files:

* Sélectionnez le format **integerToString** pour **Job field**
* Sélectionnez le format **textToString** pour **Country field**
* Sélectionnez le format **integerToImage** pour **Task Status**
* Sélectionnez le format **textToImage** pour **Manager**

![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)

## Générez votre application 4D for iOS

Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.

![Text formatter](assets/en/custom-formatter/formatters-final-result.png)

Click on **FORMATTER FINAL** below to download the completed formatter template folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">FORMATTER FINAL</a>

  </p>
</div>