---
id: one-to-many-relations-title-definition
title: 1 vers N - Définition du titre
---

### Définir un titre pour vos vues de destination

Pour garder une trace de la vue que vous étiez en train de visualiser dans votre application, 4D for iOS vous permet de définir un Titre personnalisé.

Dans ce tutoriel nous utiliserons le projet suivant :

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/relations/OneToMany-TitleDefinition-TimeKeeper-StarterProject.zip">TITLE DEFINITION STARTER PROJECT</a>

  </p>
</div>

Cliquez sur Ouvrir menu > Projet mobile... et sélectionnez *Time Keeper* puis cliquez sur **la section Libellés & icônes**.

Ouvrez ensuite l'onglet Liens pour définir le titre du lien *tasks* et saisissez la ligne suivante dans **la colonnes Titles** : ```%Name% tasks```

![Labels & Icons relation title](assets/en/relations/labels-icons-title-definition.png)

Vous l'aurez deviné, il vous permet d'afficher **la valeur du nom de l'Employé** dans la vue de destination en fonction du formulaire détaillé Employee sur lequel vous étiez en train de travailler précédemment.

![Labels & Icons relation title](assets/en/relations/relations-title-definition.png)

Ceci est un excellent moyen de garder une trace de la vue précédente sur laquelle vous étiez !

Voyons maintenant comment créer et ajouter votre propre bouton Relation dans le prochain tutoriel !