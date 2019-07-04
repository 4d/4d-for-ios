---
id: actions
title: Actions
---

Cette section vous permet :

* de créer des actions permettant d'exécuter du code 4D à partir de votre application 4D.
* de définir et d'ajouter des paramètres à vos actions.

## Éditeur de projet

### Créez votre application

Vous pouvez créer de nouvelles actions en cliquant sur le bouton +, situé en-dessous du tableau d'Actions. Une nouvelle ligne apparaîtra alors dans le tableau.

Vous définirez ensuite les éléments suivants :

* **Noms:** Le nom de l'action à utiliser dans la méthode base [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) pour lancer votre code 4D.
* **Icônes :** Sélectionnez une icône pour votre action à partir de la librairie d'icônes. Vous pouvez également ajouter votre propre icône à l'aide de ce [tutoriel](using-icons.html).
* **Libellés long et court :** Les libellés correspondant aux actions que vous souhaitez afficher dans votre application.
* **Table :** Sélectionnez la table à laquelle vous souhaitez appliquer une action.
* **Portée :** Choisissez d'appliquer l'action à une **entité** ou à une **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Ajoutez des paramètres à votre action

Tout comme pour **4D v17R6**, vous pouvez ajouter des **paramètres d'action** et **éditer** des données directement à partir de votre application.

Pour chaque paramètre, vous pouvez éditer les propriétés suivantes :

* Le nom
* Le libellé long
* Le libellé court
* Le format
* Les contraintes (définir des valeurs minimales ou maximales)
* Le placeholder
* La définition d'un champ obligatoire
* Valeur par défaut

![Action parameters](assets/en/project-editor/Actions-parameters-4D-for-iOS.png)

Voici les différents **formats** que vous pouvez sélectionner en tant que paramètre :

<table>
  

<tr>
<th colspan="2"  style="text-align:center">TEXTE</th>
</tr>  
  <tr style="text-align:center">
    
<th>Format</th><th>Description</th>
  </tr>
  
  <tr>
    
<td>Texte</td><td>Première lettre de la chaîne en majuscule</td>
  </tr>
  
  <tr>
    
<td>Adresse mail</td><td>Optimized iOS keyboard for email entry</td>
  </tr>
  
  <tr>
    
<td>Numéro de téléphone</td><td>iOS keypad for entering telephone numbers.</td>
  </tr>
  
  <tr>
    
<td>Compte</td><td>Optimized iOS keyboard for username entry</td>
  </tr>
  
  <tr>
    
<td>Mot de passe</td><td>Keyboard handling and hiding passwords</td>
  </tr>
  
  <tr>
    
<td>URL</td><td>Optimized iOS keyboard for URL entry</td>
  </tr>
  
  <tr>
    
<td>Code postal</td><td>Optimized iOS keyboard for zip code entry</td>
  </tr>
  
  <tr>
    
<td>Zone de texte</td><td>Includes multiple lines of text in a single field</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NUMBER</th>
</tr>  
  <tr style="text-align:center">
    
<th>Format</th><th>Description</th>
  </tr>
  
  <tr>
    
<td>Number</td><td>Numbers with decimals</td>
  </tr>
  
  <tr>
    
<td>Integer</td><td>Numbers without decimals</td>
  </tr>
  
  <tr>
    
<td>Scientific</td><td>Scientific Notation</td>
  </tr>
  
  <tr>
    
<td>Percentage</td><td>Percent Notation</td>
  </tr>
  
  <tr>
    
<td>Spell Out</td><td>Convert numbers into strings</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">DATE</th>
</tr>  
  <tr style="text-align:center">
    
<th>Format</th><th>Description</th>
  </tr>
  
  <tr>
    
<td>Date</td><td>Nov 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Date courte</td><td>    11/23/37</td>
  </tr>
  
  <tr>
    
<td>Long Date</td><td>November 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Full Date</td><td>Tuesday, November 23, 1937</td>
  </tr>
  
  <tr>
    
<td colspan="2"></td>
  </tr>

<tr>
<th colspan="2" style="text-align:center">HEURE</th>
</tr>  
  <tr style="text-align:center">
    
<th>Format</th><th>Description</th>
  </tr>
  
  <tr>
    
<td>Time</td><td>3:30 PM</td>
  </tr>
  
  <tr>
    
<td>Duration</td><td>2 hours 30 minutes</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">BOOLÉEN</th>
</tr>  
  <tr style="text-align:center">
    
<th>Format</th><th>Description</th>
  </tr>
  
  <tr>
    
<td>Booléen</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
  </tr>
  
  <tr>
    
<td>Coche</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"></td>
  </tr>

<tr>
<td colspan="2"></td>
</tr>
<tr>
<th colspan="2" style="text-align:center">IMAGES</th>
</tr>
<tr>
<td colspan="2">Image parameters will be available in an upcoming release</td>
</tr>

</table>

### Actions pré-définies

4D for iOS includes three preset (predefined) actions to manage your app content:

* Edit 
* Add 
* Delete 

#### 1. Add action

4D for iOS makes the **Add actions** creation process very simple.

The only thing you need to do is select the **Add action for** option, accessible from the **+ button** at the bottom of the Actions table.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action. And this is it!

This will **automatically create** all the parameters for you in the Project Editor. In the generated app, this will allow you to edit each field value.

For those kind of action, you will see that all **properties** are already filled in for your convenience at the right side of the parameter's list.

#### 2. Edit action

**Edit actions** creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)

#### 3. Delete action

**Delete action** creation follows the same process as the Edit action. The only difference is that this action allows you to remove an entity.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

This type of action should be used with caution.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

For Edit and Add actions you are free to modify the:

* parameters by adding or removing a parameter using the **+ and - buttons** at the bottom of the Action parameters list.
* properties by defining them as you wish. 

### On Mobile App Action

The [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) database method is available to call all of your 4D methods.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.

## Application iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Table List forms

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

### Collection List forms

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Detail forms

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Edition forms

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous record using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## Where to go from here?

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.

* A final [tutorial](using-parameters.html) will guide you through the **action parameters definition**.