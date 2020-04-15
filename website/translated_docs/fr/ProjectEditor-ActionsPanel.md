---
id: actions
title: Actions
---

Cette section vous permet :

* de créer des actions permettant d'exécuter du code 4D à partir de votre application iOS.
* de définir et d'ajouter des paramètres à vos actions.

## Éditeur de projet

### Créez votre application

Vous pouvez créer de nouvelles actions en cliquant sur le bouton +, situé en-dessous du tableau d'Actions. Une nouvelle ligne apparaîtra alors dans le tableau.

Vous définirez ensuite les éléments suivants :

* **Noms :** Définissez le nom de l'action à utiliser dans la méthode base [Sur une action app mobile](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) pour lancer votre code 4D.
* **Icônes :** Sélectionnez une icône pour votre action à partir de la librairie d'icônes. Vous pouvez également ajouter votre propre icône à l'aide de ce [tutoriel](using-icons.html).
* **Libellés long et court :** Définissez les libellés correspondant aux actions que vous souhaitez afficher dans votre application.
* **Table :** Sélectionnez la table à laquelle vous souhaitez appliquer une action.
* **Portée :** Choisissez d'appliquer l'action à une **entité** ou à une **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Ajoutez des paramètres à votre action

Tout comme dans **4D v17R6**, vous pouvez ajouter des **paramètres d'action** et **éditer** des données directement à partir de votre application.

Pour chaque paramètre, vous pouvez éditer les propriétés suivantes :

* Le nom
* Le libellé long
* Le libellé court
* Le format
* Les contraintes (définir des valeurs minimales ou maximales)
* Le placeholder
* La définition d'un champ obligatoire
* La valeur par défaut

![Action parameters](assets/en/project-editor/Actions-parameters-4D-for-iOS.png)

Vous êtes libres de choisir l'ordre des paramètres à l'aide du glisser-déposer.

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
    
<td>Adresse mail</td><td>Clavier iOS optimisé pour la saisie de l'e-mail</td>
  </tr>
  
  <tr>
    
<td>Numéro de téléphone</td><td>Clavier iOS pour la saisie des numéros de téléphone.</td>
  </tr>
  
  <tr>
    
<td>Compte</td><td>Clavier iOS optimisé pour la saisie du nom d'utilisateur</td>
  </tr>
  
  <tr>
    
<td>Mot de passe</td><td>Clavier optimisé pour la gestion des mots de passe</td>
  </tr>
  
  <tr>
    
<td>URL</td><td>Clavier iOS optimisé pour la saisie de l'URL</td>
  </tr>
  
  <tr>
    
<td>Code postal</td><td>Clavier iOS optimisé pour la saisie du code postal</td>
  </tr>
  
  <tr>
    
<td>Zone de texte</td><td>Inclut plusieurs lignes de texte dans un même champ</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NOMBRE</th>
</tr>  
  <tr style="text-align:center">
    
<th>Format</th><th>Description</th>
  </tr>
  
  <tr>
    
<td>Nombre</td><td>Nombres avec décimales</td>
  </tr>
  
  <tr>
    
<td>Entier</td><td>Nombres sans décimales</td>
  </tr>
  
  <tr>
    
<td>Scientifique</td><td>Notation scientifique</td>
  </tr>
  
  <tr>
    
<td>Pourcentage</td><td>Notation en pourcentage</td>
  </tr>
  
  <tr>
    
<td>Nombre en lettres</td><td>Convertit les nombres en chaînes</td>
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
    
<td>Date longue</td><td>November 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Date complète</td><td>Tuesday, November 23, 1937</td>
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
    
<td>Heure</td><td>3:30 PM</td>
  </tr>
  
  <tr>
    
<td>Durée</td><td>2 hours 30 minutes</td>
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
<td colspan="2">Les paramètres d'image seront disponibles dans une prochaine version</td>
</tr>

</table>

### Actions prédéfinies

4D for iOS comprend trois actions (prédéfinies) pour gérer le contenu de votre application :

* Action d'édition 
* Action d'ajout 
* Action de suppression 

#### 1. Action d'ajout

4D for iOS simplifie au maximum la création des **actions d'ajout**.

Vous n'avez qu'à sélectionner l'option **Action d'ajout pour**, accessible à partir du **bouton +**, situé en-dessous de la table Actions.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Puis, **sélectionnez la table** que vous souhaitez associer à l'action d'ajout. Et voilà !

Cela **créera automatiquement** tous les paramètres dans l'éditeur de projets et vous permettra de modifier chaque valeur d'un champ. 

Pour ce genre d'actions, vous constaterez que toutes les **propriétés** sont déjà saisies à des fins pratiques, à droite de la liste de paramètres.

#### 2. Action d'édition

La création des **actions d'édition** suit le même principe que les actions d'ajout, à l'exception du fait que vous ne serez pas en mesure de définir des valeurs par défaut à partir de la section Actions.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)

#### 3. Action de suppression

La création des **actions de suppression** suit le même principe que les actions d'édition. La seule différence est que cette action vous permet de supprimer une entité.

Pour créer une action de suppression, sélectionnez l'option **Action de suppression pour**, accessible à partir du **bouton +** en-dessous de la table Actions.

Ce type d'actions doit être utilisé avec précaution.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

Concernant les actions d'édition et d'ajout, vous êtes libres de modifier :

* les paramètres, en ajoutant ou en supprimant un paramètre à l'aide des **boutons + et -** situés en-dessous de la liste de paramètres des actions.
* les propriétés, en les définissant à votre convenance. 

### Sur une action app mobile

La méthode base [Sur une action app mobile](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) vous permet d'appeler vos méthodes 4D.

Après avoir créé l'ensemble de vos actions, cliquez sur le bouton Créer, situé sous le tableau des Actions, pour générer automatiquement un bloc de code *Case of* qui inclut tous vos noms d'actions dans la méthode *Sur une action app mobile*.<div class = "tips"> 

**NOTE**

* You can refresh the selection after executing an action using ```$out.dataSynchro:=True```.
* You can notify the app user when action has been executed using ```$out.statusText:="Message you want to display"```.
* You can also decide to force close the Edition form using ```$out.close:=True```.</div> 

## Application iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Formulaires Liste en tableau

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)<div class = "tips"> 

**TIPS**

Actions will be displayed in the same order as defined in the Action section.</div> 

### Formulaires Liste en collection

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulaires détaillés

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formulaires d'édition

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous field using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## Que faire ensuite ?

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.

* A final [tutorial](using-parameters.html) will guide you through the **action parameters definition**.