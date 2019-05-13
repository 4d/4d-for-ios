---
id: creating-data-formatter
title: Crear el formato de datos
---

<div class = "objectives"> 

**OBJETIVOS**

Crear sus primeros formatos de datos.</div> <div class = "prerequisites"> 

**REQUISITOS PREVIOS**

Haga clic [aquí](prerequisites.html) para comenzar</div> 

En este tutorial, lo guiaremos a través de la creación de varios ejemplos de formatos.

## Descargar el proyecto Starter

Para comenzar, descargue el **Starter Project**, que incluye:

* Las carpetas **integerToImage_Images** y **textToImage_Images**, que contienen las imágenes (a utilizar más adelante para los formatos que contienen imágenes)
* Un archivo **Task Management.4dbase** (con una aplicación de proyecto móvil lista para utilizar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-formatter/CustomFormatterStarterProject.zip">PROYECTO STARTER - FORMATO PERSONALIZADO</a>

  </p>
</div>

¡Ahora está listo para crear a sus primeros formatos!

## Crear la carpeta Formats

Primero, cree una carpeta Task Management.4dbase/Resources/Mobile/formatters</em>.

![Formatter folder](assets/en/custom-formatter/formatter-folder.png)

## Formatos de enteros

### Número entero a cadena

* Cree una carpeta **integerToString** en la carpeta de Formats que acaba de crear.
* Cree un archivo </strong>manifest.json** en la carpeta **integerToString**.</li> </ul> 
    
    ![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)
    
    Veamos el contenido del archivo </strong>manifest.json**:</p> 
    
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
        
    
    1. **name**: el nombre del formato
    2. **type**: el tipo de formato 4D que desea utilizar 
    3. **binding**: puede ser **localized text** para las cadenas o **imageNamed** para las imágenes
    4. **choiceList**: valores mapeados
    5. **assets**: ajustar el tamaño de visualización (ancho y alto)
    
    ## Formatos texto
    
    ### Texto a cadena
    
    * Cree una carpeta **integerToString** en la carpeta Formats que acaba de crear.
    
    * Cree un archivo **manifest.json** en la carpeta **textToString**.
    
    ![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)
    
    Veamos el contenido del archivo **manifest.json**:
    
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
        
    
    1. **name**: el nombre del formato
    2. **type**: el tipo de formato 4D que desea utilizar
    3. **binding**: puede ser **localized text** para las cadenas o **imageNamed** para las imágenes
    4. **choiceList**: valores mapeados
    
    ### Texto a imagen
    
    * Cree una carpeta **textToImage** en la carpeta Formats que acaba de crear.
    
    * Cree un archivo **manifest.json** en la carpeta **textToImage**.
    
    ![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)
    
    * Luego cree un archivo **Images** en la carpeta **textToImage**. Puede agregar las imágenes de **textToImage_Images** (en StarterProject.zip) a esta nueva carpeta.
    
    ![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)
    
    Veamos el contenido del archivo **manifest.json**:
    
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
        
        
    
    ## Abrir un proyecto móvil
    
    Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**
    
    Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you previously defined in the different formatter manifest.json files:
    
    * Select the **integerToString** formatter for the **Job field**
    * Select the **textToString** formatter for the **Country field**
    * Select the **integerToImage** formatter for the **Task Status**
    * Select the **textToImage** formatter for the **Manager**
    
    ![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)
    
    ## Build your 4D for iOS app
    
    Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.
    
    ![Text formatter](assets/en/custom-formatter/formatters-final-result.png)
    
    Click on **FORMATTER FINAL** below to download the completed formatter template folder.
    
    <div style="text-align: center; margin-top: 20px">
      <p>
        

<a class="button"
href="../assets/en/custom-formatter/CustomFormattersFinalProject.zip">FORMATTER FINAL</a>

      </p>
    </div>