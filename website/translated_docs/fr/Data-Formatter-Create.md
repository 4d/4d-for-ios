---
id: creating-data-formatter
title: Créer le format de données
---
<div class = "objectives"> 

**OBJECTIFS**

Create your first data formatters.</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

Click [here](prerequisites.html) to see what you'll need to get started!</div> 

Dans ce didacticiel, nous vous guiderons dans la création de divers exemples de formats.

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Les dossiers **integerToImage_Images** et **textToImage_Images**, qui contiennent des images (à utiliser ultérieurement pour les formats contenant des images)
* Un fichier **Task Management.4dbase** (accompagné d'une application de projet mobile prêt à l'emploi)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormatterStarterProject.zip">PROJET STARTER - FORMAT PERSONNALISÉ</a>

  </p>
</div>

Vous êtes maintenant prêt à créer vos premiers formats !

## Créer le dossier Formats

Premièrement, créez un dossier .../Resources/Mobile/Formats au même niveau que les données Task Management.4dbase.

![Formatter folder](assets/custom-formatter/formatter-folder.png)

## Formats des entiers

### Nombre entier vers chaîne

* Create an **integerToString** folder in the formatters folder you've just created.
* Then create a **manifest.json** file in the **integerToString** folder.

![Formatter folder](assets/custom-formatter/formatter-folder-integertostring.png)

Let's look at the contents of the **manifest.json** file:

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
    

1. **name** : le nom du format
2. **type** : le type de format 4D que vous souhaitez utiliser
3. **binding** : soit **localized text** pour les chaînes soit **imageNamed** pour les images
4. **choiceList** : valeurs mappées

### Nombre entier vers image

* Create an **integerToImage** folder in the **formatters** folder you've created.

* Create a **manifest.json** file in the **integerToImage** folder.

![Formatter folder](assets/custom-formatter/formatter-folder-integertoimage.png)

* Then create an **Images** folder in the **integerToImage** folder. You can add the images from the **integerToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/custom-formatter/formatter-images-integertoimage.png)

Let's look at the contents of the **manifest.json** file:

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
    

1. **name** : le nom du format
2. **type** : le type de format 4D que vous souhaitez utiliser 
3. **binding** : soit **localized text** pour les chaînes soit **imageNamed** pour les images
4. **choiceList** : valeurs mappées
5. **assets** : ajuster la taille d'affichage (largeur et hauteur)

## Formats texte

### Texte vers chaîne

* Create a **textToString** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **textToString** folder.

![Formatter folder](assets/custom-formatter/formatter-folder-texttostring.png)

Let's look at the contents of the **manifest.json** file:

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
    

1. **name** : le nom du format
2. **type** : le type de format 4D que vous souhaitez utiliser
3. **binding** : soit **localized text** pour les chaînes soit **imageNamed** pour les images
4. **choiceList** : valeurs mappées

### Texte vers image

* Create a **textToImage** folder in the formatters folder you've just created.

* Create a **manifest.json** file in the **integerToImage** folder.

![Formatter folder](assets/custom-formatter/formatter-folder-textToImage.png)

* Then create an **Images** folder in the **textToImage** folder. You can add the images from the **textToImage_Images** in the StarterProject.zip to this new folder.

![Formatter images](assets/custom-formatter/formatter-images-textToImage.png)

Let's look at the contents of the **manifest.json** file:

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
    
    

## Ouvrir un projet mobile

Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**

Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you previously defined in the different formatter manifest.json files:

* Select the **integerToString** formatter for the **Job field**
* Select the **textToString** formatter for the **Country field**
* Select the **integerToImage** formatter for the **Task Status**
* Select the **textToImage** formatter for the **Manager**

![Text formatter](assets/custom-formatter/formatters-icons-&-labels.png)

## Créer votre application 4D for iOS

Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.

![Text formatter](assets/custom-formatter/formatters-final-result.png)

Click on **FORMATTER FINAL** below to download the completed formatter template folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormattersFinalProject.zip">FORMAT FINAL</a>

  </p>
</div>