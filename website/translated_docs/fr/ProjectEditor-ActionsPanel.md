---
id: actions
title: Actions
---
Cette section vous permet de définir des noms et des icônes pour chaque action ainsi qu'une portée pour chaque table.

## Éditeur de projet

* **Noms :** Ajouter une nouvelle action en cliquant sur le bouton "+".
* **Icônes :** Sélectionnez une icône pour votre action à partir de la librairie d'icônes. Vous pouvez également ajouter votre propre icône à l'aide de ce [tutoriel](using-icons.html).
* **Table :** Sélectionnez la table à laquelle vous souhaitez appliquer une action.
* **Portée :** Choisissez d'appliquer l'action à une **entité** ou à une **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

Une nouvelle méthode base [Sur une action app mobile](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) est disponible pour appeler vos méthodes 4D.

## Application iOS

Dans votre application iOS, des actions sont disponibles sous différentes formes dans vos formulaires Liste et formulaires détaillés, selon le modèle que vous sélectionnez dans la section Formulaires.

### Formulaires Liste en tableau

* **Action d'entité pour les cellules :** faites glisser une cellule vers la gauche pour afficher les actions disponibles dans un formulaire Liste. Un bouton « + » s’affiche si vous définissez plus de 3 actions par entité.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Actions de table :** Un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

### Formulaires Liste en collection

* **Action d'entité pour les cellules :** selon le modèle sélectionné, les actions s'affichent en cliquant sur un bouton générique ou en maintenant le clic sur une cellule.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Actions de table :** De même que pour les formulaires Liste en tableau, un bouton d'actions générique est disponible dans la barre de navigation pour afficher une liste d'actions de table.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulaires détaillés

De même que pour les actions de table dans les formulaires détailles, un bouton d'actions générique est disponible dans la barre de navigation pour afficher toutes vos actions d'entité dans une liste.

![Entity Detailform](assets/en/actions/Detailform-final.png)

## Que faire ensuite ?

* Nous verrons [plus tard](action-custom-template.html#step-4-add-actions-in-detail-forms) comment inclure votre propre**bouton d'actions personnalisé** dans des formulaires détaillés.

* Un [tutoriel](actions-getting-started.html) est disponible pour vous guider tout au long du **processus de définition d'une action**.

* Un autre [tutoriel](action-custom-template.html) vous guidera pour intégrer des **TAG d'action** dans des modèles personnalisés.