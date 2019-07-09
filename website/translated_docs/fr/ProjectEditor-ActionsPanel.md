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

You are free to change the order fo parameters using drag and drop.

Here are the different **Formats** you can select for a parameter:

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
    
<td>Numéro de téléphone</td><td>clavier iOS pour la saisie des numéros de téléphone.</td>
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

4D for iOS includes three preset (predefined) actions to manage your app content:

* Action d'édition 
* Action d'ajout 
* Action de suppression 

#### 1. Action d'ajout

4D for iOS makes the **Add actions** creation process very simple.

The only thing you need to do is select the **Add action for** option, accessible from the **+ button** at the bottom of the Actions table.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action. And this is it!

This will **automatically create** all the parameters for you in the Project Editor. In the generated app, this will allow you to edit each field value.

For those kind of action, you will see that all **properties** are already filled in for your convenience at the right side of the parameter's list.

#### 2. Action d'édition

**Edit actions** creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)

#### 3. Action de suppression

**Delete action** creation follows the same process as the Edit action. The only difference is that this action allows you to remove an entity.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

This type of action should be used with caution.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

For Edit and Add actions you are free to modify the:

* les paramètres, en ajoutant ou en supprimant un paramètre à l'aide des **boutons + et -** situés en-dessous de la liste de paramètres des actions.
* les propriétés, en les définissant à votre convenance. 

### Sur une action app mobile

The [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) database method is available to call all of your 4D methods.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.<div class = "tips"> 

**TIPS**

Note that you have to notify App to refresh the selection after executing an action using ```dataSynchro:=True```</div> 

## Application iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Formulaires Liste en tableau

* **Action d'entité :** Faites glisser une cellule vers la gauche pour afficher les actions disponibles dans un formulaire Liste. Un bouton « + » s’affiche si vous définissez plus de 3 actions par entité.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Action de table :** Un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)<div class = "tips"> 

**TIPS**

Actions will be display in the same order as defined in the Action section.</div> 

### Formulaires Liste en collection

* **Action d'entité :** Selon le modèle sélectionné, les actions s'affichent en cliquant sur un bouton générique ou en maintenant le clic sur une cellule.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Action de table :** De même que pour les formulaires Liste en tableau, un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulaires détaillés

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formulaires d'édition

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

From here, you can:

* éditer tous vos champs en les sélectionnant, et
* valider ou annuler les modifications que vous aurez apportées à l'aide des boutons **Done** ou **Cancel** (dans la barre de navigation).

For your convenience, the Edition form includes a few **special features**:

* Le type de clavier dépend du type de paramètre sélectionné dans la section Action.
* Vous pouvez passer d'un champ à l'autre à l'aide des flèches situées en haut du clavier.
* Le clavier iOS peut être quitté via un simple clic en dehors du champ.
* L'utilisateur est informé lorsqu'une valeur n'est pas valide.
* La vue est portée sur des champs vides obligatoires lorsque l'utilisateur clique sur le bouton Done.

## Que faire ensuite ?

* Un [tutoriel](actions-getting-started.html) est disponible pour vous guider tout au long du **processus de définition d'une action**.

* Un autre [tutoriel](action-custom-template.html) vous guidera pour intégrer des **TAG d'action** dans des modèles personnalisés.

* Un [tutoriel](using-parameters.html) final vous guidera tout au long du processus de **définition des paramètres d'une action**.