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
</tr><tr>
<td>Barcode</td><td>Extract barcode associated value. Supported formats : EAN8, EAN13, Code 39, Code 93, Code 128, QR Code, UPC, PDF417</td>
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
<td>Signature</td><td>Allow to sign with the finger</td>
</tr>

</table>

## Actions prédéfinies

4D for iOS comprend trois actions (prédéfinies) pour gérer le contenu de votre application :

* Modifier
* Action d'ajout
* Action de suppression
* Share
* Sort

4D for iOS simplifie au maximum la création des **actions d'ajout**.

* les paramètres, en ajoutant ou en supprimant un paramètre à l'aide des **boutons + et -** situés en-dessous de la liste de paramètres des actions.
* les propriétés, en les définissant à votre convenance.


### Action d'ajout

4D for iOS simplifie au maximum la création des **actions d'ajout**.

Vous n'avez qu'à sélectionner l'option **Action d'ajout pour**, accessible à partir du **bouton +**, situé en-dessous de la table Actions.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Puis, **sélectionnez la table** que vous souhaitez associer à l'action d'ajout.

Cela **créera automatiquement** tous les paramètres dans l'éditeur de projets et vous permettra de modifier chaque valeur d'un champ.

Pour ce genre d'actions, vous constaterez que toutes les **propriétés** sont déjà saisies à des fins pratiques, à droite de la liste de paramètres.


### Action d'édition

La création des **actions d'édition** suit le même principe que les actions d'ajout, à l'exception du fait que vous ne serez pas en mesure de définir des valeurs par défaut à partir de la section Actions.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)


### Action de suppression

La création des **actions de suppression** suit le même principe que les actions d'édition. La seule différence est que cette action vous permet de supprimer une entité.

Pour créer une action de suppression, sélectionnez l'option **Action de suppression pour**, accessible à partir du **bouton +** en-dessous de la table Actions.

Ce type d'actions doit être utilisé avec précaution.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)



### Formulaires Liste en tableau

Puis, **sélectionnez la table** que vous souhaitez associer à l'action d'ajout. Et voilà ! You just need to select the scope:

- A des fins pratiques, le formulaire d'édition inclut quelques **fonctionnalités spécifiques** :
- Pour créer une action de suppression, sélectionnez l'option **Action de suppression pour**, accessible à partir du **bouton +** en-dessous de la table Actions.

Après avoir créé l'ensemble de vos actions, cliquez sur le bouton Créer, situé sous le tableau des Actions, pour générer automatiquement un bloc de code *Case of* qui inclut tous vos noms d'actions dans la méthode *Sur une action app mobile*.

### Formulaires Liste en collection

Pour ce genre d'actions, vous constaterez que toutes les **propriétés** sont déjà saisies à des fins pratiques, à droite de la liste de paramètres.

- **Action de table :** Un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.
- allow your mobile users to choose a list sort order

When you create a sort action for a table, you need to select the first field on which the sort will be done:

<img src="../assets/en/actions/sortSelect.png" width="50%" />

The field is added to the Sort Criteria list. An ascending sort order is set by default, but you can change it using the **Sort order** menu.

You can sort entities in more than one field. Each field you sort is referred to as a sort level. For example, the results of a two-level ascending sort of the `lastName` and `firstName` fields would produce a list such as this:

```
Aardvark, Anthony
Aardvark, Artemis
Aardvark, Arthur
...
Zygote, Elena
Zymosian, Elmer
```

To add one or more sort level(s) in the Sort Criteria list, select the **+** button under the list and configure each level:

![sort](assets/en/actions/step2Ascending.png)


#### Sort order menu on the mobile app

When you define more than one sort action for a table, mobile users automatically benefit from a **sort** menu. It contains all the predefined sort actions:

![sort](assets/en/actions/Sort-4D-for-iOS.gif)


> When only one sort action is defined for a table, the **sort** menu is not displayed on the mobile app side.


### Sur une action app mobile

La méthode base [Sur une action app mobile](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) vous permet d'appeler vos méthodes 4D.

Après avoir créé l'ensemble de vos actions, cliquez sur le bouton Créer, situé sous le tableau des Actions, pour générer automatiquement un bloc de code *Case of* qui inclut tous vos noms d'actions dans la méthode *Sur une action app mobile*.


> * Vous pouvez rafraîchir la sélection après avoir exécuté une action en utilisant `$out.dataSynchro:=True`.
> * Vous pouvez notifier l'utilisateur de l'application lorsqu'une action a été exécutée à l'aide de `$out.statusText:="Message you want to display"`.
> * Vous pouvez également forcer la fermeture du formulaire d'Edition à l'aide de `$out.close:=True`.



## Offline mode actions

The user of an iOS app can draft, store and queue action requests, even if he’s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list.

Pending tasks can be visualized and opened from:

•   *The Settings screen*

It displays a summary and a history of all pending and completed tasks.

![Action section](assets/en/project-editor/screen1)

•   *The List & Detail forms*

They display all the tasks related to the table or to the entity that you are currently viewing.

![Action section](assets/en/project-editor/screen2)

> **Notes**
> 
> * The "Share" predefined action is only executable online.
> * Actions are editable while pending, but they can no longer be modified once they switch to the "Completed" mode.

### Formulaires d'édition

Due to your server business logic, some tasks could be rejected. For mobile users, it is then possible to edit and to retry sending the relevant pending tasks. To do so, you can display a status text describing, in the "Complete" actions history, the reason of the failure. For example, you can reject an action sent by a mobile user to the server and inform him that the operation has failed. In that case, you can set the `success` value to `False` and provide a message in `statusText`, as follows:

 ```4d
 $response:=New object("success"; False; "statusText"; "Operation failed"))
 ```
 You can even add some errors by action parameters for the `alphaField` parameter, for example:

  ```4d
$response.errors:=New collection(New object("parameter"; "alphaField"; "message"; "Alpha field must contains a valide value")
  ```

## Application iOS

Dans votre application iOS, des actions sont disponibles sous différentes formes dans vos formulaires Liste et vos formulaires détaillés, selon le modèle que vous sélectionnez dans la section Formulaires.

### Formulaires Liste en tableau

* **Action d'entité :** Faites glisser une cellule vers la gauche pour afficher les actions disponibles dans un formulaire Liste. Un bouton « + » s’affiche si vous définissez plus de 3 actions par entité.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Action de table :** Un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

> **ASTUCES**
> 
> Les actions s'afficheront dans le même ordre que celui qui a été défini dans la section Action.


### Formulaires Liste en collection

* **Action d'entité :** Selon le modèle sélectionné, les actions s'affichent en cliquant sur un bouton générique ou en maintenant le clic sur une cellule.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Action de table :** De même que pour les formulaires Liste en tableau, un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulaires détaillés

De même que pour les actions de table dans les formulaires détailles, un bouton d'actions générique est disponible dans la barre de navigation pour afficher toutes vos actions d'entité dans une liste.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formulaires d'édition

Si vous avez créé une action d'ajout ou d'édition, un **formulaire d'édition** apparaît dès que vous sélectionnez l'action à partir de la liste d'actions.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

Vous pourrez ainsi :

* éditer tous vos champs en les sélectionnant, et
* valider ou annuler les modifications que vous aurez apportées à l'aide des boutons **Done** ou **Cancel** (dans la barre de navigation).

A des fins pratiques, le formulaire d'édition inclut quelques **fonctionnalités spécifiques** :

* Le type de clavier dépend du type de paramètre sélectionné dans la section Actions.
* Vous pouvez passer d'un champ à l'autre à l'aide des flèches situées en haut du clavier.
* Le clavier iOS peut être quitté via un simple clic en dehors du champ.
* L'utilisateur est informé lorsqu'une valeur n'est pas valide.
* La vue est portée sur des champs vides obligatoires lorsque l'utilisateur clique sur le bouton Done.

## Que faire ensuite ?

* Un [tutoriel](actions-getting-started.html) est disponible pour vous guider tout au long du **processus de définition d'une action**.

* Un autre [tutoriel](action-custom-template.html) vous guidera pour intégrer des **TAG d'action** dans des modèles personnalisés.

* A final [tutorial](action-parameters.html) will guide you through the **action parameters definition**.
