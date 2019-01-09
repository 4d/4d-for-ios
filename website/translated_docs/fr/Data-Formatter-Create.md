---
id: creating-data-formatter
title: Créer le formateur de données
sidebar_label: Créer le formateur de données
---
<div class = "objectives"> 

**OBJECTIFS**

* Créer vos premiers formats de données</div> <div class = "prerequisites"> 

**CONDITIONS PRÉALABLES**

* Cliquez [ici](prerequisites.html) pour commencer !</div> 

Dans ce didacticiel, nous vous guiderons dans la création de divers exemples de formats.

## Téléchargez le projet Starter

Pour commencer, télécharger le **Projet Prise en main**, qui comprend : * Un dossier d’images contenant les dossiers **integerToImage_Images** et **textToImage_Images** (à utiliser ultérieurement pour les formats qui incluent des images) * Un fichier **Task Management.4dbase** (avec un projet d’application mobile prêt à l’emploi)

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/custom-formatter/CustomFormatterStarterProject.zip">PROJET STARTER - FORMAT PERSONNALISÉ</a>

  </p>
</div>

Vous êtes maintenant prêt à créer vos premiers formats !

## Créez le fichier formats

Premièrement, créez un dossier .../Resources/Mobile/formatters au même niveau que les données Task Management.4dbase.

![Formatter folder](assets/custom-formatter/formatter-folder.png)

## Formats entiers

### Nombre entier vers chaîne

* Créez un dossier **integerToString** dans le dossier de formats que vous venez de créer.

* Créez ensuite un fichier **manifest.json** dans le dossier </strong> integerToString **.</p></li> </ul> 
    
    ![Formatter folder](assets/custom-formatter/formatter-folder-integertostring.png)
    
    * Regardons le contenu du fichier **manifest.json** :
    
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
        
    
    1. **name**: le nom du format
    2. **type**: le type de format 4D que vous souhaitez utiliser
    3. **binding** : peut être **localized text** pour les chaînes ou **imageNamed** pour les images
    4. **choiceList**: valeurs mappées
    
    ### Nombre entier vers image
    
    * Créez un dossier **integerToString** dans le dossier **formatters** que vous venez de créer.
    
    * Créez un fichier **manifest.json** dans le dossier **integerToImage**.
    
    ![Formatter folder](assets/custom-formatter/formatter-folder-integertoimage.png)
    
    * Créez ensuite un dossier **Images** dans le dossier **integerToImage**. Vous pouvez ajouter les images depuis **integerToImage_Images** du StarterProject.zip vers ce nouveau dossier.
        
        ![Formatter images](assets/custom-formatter/formatter-images-integertoimage.png)
    
    * Regardons le contenu du fichier **manifest.json** :
    
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
        
    
    1. **name**: le nom du format
    2. **type**: le type de format 4D que vous souhaitez utiliser 
    3. **binding** : peut être **localized text** pour les chaînes ou **imageNamed** pour les images
    4. **choiceList**: valeurs mappées
    5. **assets**: ajuster la taille d'affichage (largeur et hauteur)
    
    ## Text formatters
    
    ### Texte vers chaîne
    
    * Créez un dossier **integerToString** dans le dossier de formats que vous venez de créer.
    
    * Create a **manifest.json** file in the **textToString** folder.
    
    ![Formatter folder](assets/custom-formatter/formatter-folder-texttostring.png)
    
    * Let's look at the contents of the **manifest.json** file:
    
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
        
    
    1. **name**: the name of the formatter
    2. **type**: the 4D format type you want to use
    3. **binding**: can be **localized text** for strings or **imageNamed** for images
    4. **choiceList**: mapped values
    
    ### Text to image
    
    * Create a **textToImage** folder in the formatters folder you've just created.
    
    * Create a **manifest.json** file in the **integerToImage** folder.
    
    ![Formatter folder](assets/custom-formatter/formatter-folder-textToImage.png)
    
    * Then create an **Images** folder in the **textToImage** folder. You can add the images from the **textToImage_Images** in the StarterProject.zip to this new folder.
    
    ![Formatter images](assets/custom-formatter/formatter-images-textToImage.png)
    
    Let's look at the contents of the **manifest.json** file:
    
        {
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
        
    
    ## Open mobile project
    
    Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**
    
    Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you previously defined in the different formatter manifest.json files:
    
    * Select the **integerToString** formatter for the **Job field**
    * Select the **textToString** formatter for the **Country field**
    * Select the **integerToImage** formatter for the **Task Status**
    * Select the **textToImage** formatter for the **Manager**
    
    ![Text formatter](assets/custom-formatter/formatters-icons-&-labels.png)
    
    ## Build your 4D for iOS app
    
    Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.
    
    ![Text formatter](assets/custom-formatter/formatters-final-result.png)
    
    Click on **FORMATTER FINAL** below to download the completed formatter template folder.
    
    <div style="text-align: center; margin-top: 20px">
      <p>
        

<a class="button"
href="../assets/custom-formatter/CustomFormattersFinalProject.zip">FORMATTER FINAL</a>

      </p>
    </div>