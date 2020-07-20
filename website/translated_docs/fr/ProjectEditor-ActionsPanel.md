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

* **Names:** The action name to use in the [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) database method to trigger your 4D code.
* **Icons:** The icon to choose from your icon library. Vous pouvez également ajouter votre propre icône à l'aide de ce [tutoriel](using-icons.html).
* **Short and long Labels:** The labels for the actions to display in your app.
* **Table:** The table on which you want to apply the action.
* **Scope:** Where to use the action, an **entity** or a **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Ajoutez des paramètres à votre action

As of **4D v17R6**, you can add **action parameters** and **edit** data directly from your app.

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

Here are the different **Formats** you can select for a parameter:

<table>

<tr>
<th colspan="2"  style="text-align:center">TEXTE</th>
</tr><tr style="text-align:center">
<th>Le format</th><th>Description</th>
</tr><tr>
<td>Texte</td><td>Première lettre de la chaîne en majuscule</td>
</tr><tr>
<td>Adresse mail</td><td>Clavier iOS optimisé pour la saisie de l'e-mail</td>
</tr><tr>
<td>Numéro de téléphone</td><td>Clavier iOS pour la saisie des numéros de téléphone.</td>
</tr><tr>
<td>Compte</td><td>Clavier iOS optimisé pour la saisie du nom d'utilisateur</td>
</tr><tr>
<td>Mot de passe</td><td>Clavier optimisé pour la gestion des mots de passe</td>
</tr><tr>
<td>URL</td><td>Clavier iOS optimisé pour la saisie de l'URL</td>
</tr><tr>
<td>Code postal</td><td>Clavier iOS optimisé pour la saisie du code postal</td>
</tr><tr>
<td>Zone de texte</td><td>Inclut plusieurs lignes de texte dans un même champ</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NOMBRE</th>
</tr><tr style="text-align:center">
<th>Le format</th><th>Description</th>
</tr><tr>
<td>Number</td><td>Nombres avec décimales</td>
</tr><tr>
<td>Entier</td><td>Nombres sans décimales</td>
</tr><tr>
<td>Scientifique</td><td>Notation scientifique</td>
</tr><tr>
<td>Pourcentage</td><td>Notation en pourcentage</td>
</tr><tr>
<td>Nombre en lettres</td><td>Convertit les nombres en chaînes</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">DATE</th>
</tr><tr style="text-align:center">
<th>Le format</th><th>Description</th>
</tr><tr>
<td>Date</td><td>Nov 23, 1937</td>
</tr><tr>
<td>Date courte</td><td> 11/23/37</td>
</tr><tr>
<td>Date longue</td><td>November 23, 1937</td>
</tr><tr>
<td>Date complète</td><td>Tuesday, November 23, 1937</td>
</tr><tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">HEURE</th>
</tr><tr style="text-align:center">
<th>Le format</th><th>Description</th>
</tr><tr>
<td>Heure</td><td>3:30 PM</td>
</tr><tr>
<td>Durée</td><td>2 hours 30 minutes</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">BOOLÉEN</th>
</tr><tr style="text-align:center">
<th>Le format</th><th>Description</th>
</tr><tr>
<td>Boolean</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
</tr><tr>
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

* Modifier
* Action d'ajout
* Action de suppression

#### 1. Action d'ajout

4D for iOS makes the **Add actions** creation process very simple.

The only thing you need to do is select the **Add action for** option, accessible from the **+ button** at the bottom of the Actions table.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action. Et voilà !

This will **automatically create** all the parameters for you in the Project Editor.

For those kind of action, you will see that all **properties** are already filled in for your convenience at the right side of the parameter's list.


#### 2. Action d'édition

**Edit actions** creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)


#### 3. Action de suppression

**Delete action** creation follows the same process as the Edit action. La seule différence est que cette action vous permet de supprimer une entité.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

Ce type d'actions doit être utilisé avec précaution.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

Concernant les actions d'édition et d'ajout, vous êtes libres de modifier :

* parameters by adding or removing a parameter using the **+ and - buttons** at the bottom of the Action parameters list.
* les propriétés, en les définissant à votre convenance.

### Sur une action app mobile

La méthode base [Sur une action app mobile](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) vous permet d'appeler vos méthodes 4D.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.

<div markdown="1" class = "tips">
**NOTE**

* You can refresh the selection after executing an action using `$out.dataSynchro:=True`.
* You can notify the app user when action has been executed using `$out.statusText:="Message you want to display"`.
* You can also decide to force close the Edition form using `$out.close:=True`.
</div>

## Application iOS

Dans votre application iOS, des actions sont disponibles sous différentes formes dans vos formulaires Liste et vos formulaires détaillés, selon le modèle que vous sélectionnez dans la section Formulaires.

### Formulaires Liste en tableau

* **Entity action:** Swipe left on a cell to display the available actions in a List form. Un bouton « + » s’affiche si vous définissez plus de 3 actions par entité.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

<div markdown="1" class = "tips">
**ASTUCES**
Les actions s'afficheront dans le même ordre que celui qui a été défini dans la section Action.
</div>


### Formulaires Liste en collection

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulaires détaillés

De même que pour les actions de table dans les formulaires détailles, un bouton d'actions générique est disponible dans la barre de navigation pour afficher toutes vos actions d'entité dans une liste.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formulaires d'édition

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

Vous pourrez ainsi :

* éditer tous vos champs en les sélectionnant, et
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* Le type de clavier dépend du type de paramètre sélectionné dans la section Actions.
* Vous pouvez passer d'un champ à l'autre à l'aide des flèches situées en haut du clavier.
* Le clavier iOS peut être quitté via un simple clic en dehors du champ.
* L'utilisateur est informé lorsqu'une valeur n'est pas valide.
* La vue est portée sur des champs vides obligatoires lorsque l'utilisateur clique sur le bouton Done.

## Que faire ensuite ?

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.

* A final [tutorial](using-parameters.html) will guide you through the **action parameters definition**.
