---
id: one-to-many-relations-title-definition
title: 1 vers N - Titre
---

### Définir un titre pour vos vues de destination

Pour garder une trace de la vue que vous étiez en train de visualiser dans votre application, 4D for iOS vous permet de définir un Titre personnalisé.

Dans ce tutoriel nous utiliserons le projet suivant :

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip">PROJET STARTER DE DEFINITION DE TITRE</a>
</div>

Now go straight to Open menu > Mobile project... select *Time Keeper* and go to the **Labels & Icons section**.

Ouvrez ensuite l'onglet Liens pour définir le titre du lien *tasks* et saisissez la ligne suivante dans **la colonnes Titles** : `%Name% tasks`

![Labels & Icons relation title](assets/en/relations/labels-icons-title-definition.png)

As you may have guessed, it will allow you to display **Employee's Name value** on the destination view depending on the Employee detail form you were on previously.

![Labels & Icons relation title](assets/en/relations/relations-title-definition.png)

Ceci est un excellent moyen de garder une trace de la vue précédente sur laquelle vous étiez !

Voyons maintenant comment créer et ajouter votre propre bouton Relation dans le prochain tutoriel !
