---
id: one-to-many-relations
title: Liens 1 vers N
---

Grâce à ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans 4D for iOS.<div class = "tips"> 

**NOTE**

Dans ce tutoriel, nous allons utiliser les noms des liens reliant vos tables. En attribuant des noms de liens descriptifs, vous simplifierez la structure de votre projet.</div> 

Commençons par télécharger le Projet Starter :

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/relations/OneToMany-TimeKeeper-StarterProject.zip">PROJET STARTER UN VERS N</a>

  </p>
</div>

Dans ce tutoriel, nous allons créer une **application Task** à l'aide de 4D for iOS.

![Task App Final result](assets/en/relations/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

Mais d'abord, jetons un œil à la structure de notre base :

![Select link from structure section](assets/en/relations/Database-1-to-N-relations-4D-for-iOS.png)

Vous remarquerez qu'il existe un lien 1 vers N nommé **tasks** qui utilisera une application iOS pour afficher les tâches (**vers N**) des employés (**1**).

Cliquez maintenant sur Ouvrir menu > Projet mobile... et sélectionnez *Time Keeper* puis cliquez sur la **section Structure**.

## Section Structure

Vous voyez ici le lien **tasks** que nous avons créé précédemment... Vous pouvez le publier !

Il aura le même fonctionnement que n’importe quel autre champ pour la suite de la création de l’application.

![Structure section Relations properties](assets/en/relations/Structure-section-relations-4D-for-iOS.png)<div class = "tips"> 

**ASTUCE**

* En survolant un élément, une astuce affiche le nom de la table source (qui est à l'origine) du lien.</div> 

## Section Libellés & icônes

Le lien 1 vers N est maintenant disponible dans la section [Libellés et icônes](labels-and-icons.html).

A noter qu'un bouton est créé dans l'application lorsque vous incluez un lien 1 vers N.

Dans la section Libellés & icônes, vous définirez :

* un libellé de bouton
* une icône de bouton
* un [titre](one-to-n-relations-title-definition.html) qui s'affichera dans la vue de destination (pour indiquer votre provenance).

![Labels & Icons section Relations properties](assets/en/project-editor/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## Section Formulaires

* Cliquez sur la section Formulaires et déposez le lien *tasks* dans le formulaire détaillé Employee Task.

![Related field in Forms section](assets/en/relations/1-to-n-relations-forms-section.png)

## Créer & exécuter

1. A partir du formulaire Lise Employee, cliquez sur un employé 
2. Cela permettra d'ouvrir le formulaire détaillé des employés, où vous devriez voir apparaître un nouveau **bouton Relation** !
3. Cliquez sur ce bouton Relation pour afficher les tâches de l'employé. 

![Related field in Forms section](assets/en/relations/One-to-n-relations-task-ios-app.png)

Et le tour est joué ! Voilà comment fonctionnent vos liens 1 vers N fonctionnent dans 4D for iOS !

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/relations/OneToMany-TimeKeeper-FinalProject.zip">PROJET FINAL UN VERS N</a>

  </p>
</div>