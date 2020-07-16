---
id: n-to-one-relations
title: Relation N vers 1
sidebar_label: Relation N vers 1
---
4 D v17 R5 comprend un nouveau concept : la relation N vers 1<div class = "tips"> 

**NOTE**

Dans ce tutoriel, nous allons utiliser les noms des liens reliant vos tables. En attribuant des noms de lien descriptifs, vous simplifierez la structure de votre projet.</div> 

Commençons par télécharger le Projet Starter :

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/relations/Tasks.4dbase.zip">PROJET STARTER N VERS UN</a>

  </p>
</div>

Nous souhaitons afficher ici la catégorie de chaque tâche dans le formulaire détaillé de votre application. Pour ce faire, ouvrez le **StarteriOSProject** à partir de **Ouvrir > Projet mobile.**

Accédez directement à la section Structure, puis sélectionnez la **table Tasks**.

### Section Structure

* Vous pouvez constater que le **lien TaskCategory** est souligné

* En cliquant dessus, vous afficherez les champs disponibles

* Sélectionnez le **champ Name**

![Select link from structure section](assets/relations/select-link-from-structure.png)

* Ce champ aura le même fonctionnement que n’importe quel autre champ pour la suite du processus de création de l’application

* Vous pouvez ensuite sélectionner des formats et une icône et définir, dans la section Libellés et icônes, quelques libellés longs et courts 

![Related field from Labels and Icons section](assets/relations/related-field-from-labels-icons.png)

* Cliquez sur la section Formulaires et faites glisser le champ dans le formulaire détaillé Tasks

![Related field in Forms section](assets/relations/related-field-forms.png)

* Sous l'onglet Génération, cliquez sur Créer & exécuter

* Votre champ lié devrait apparaitre dans le formulaire détaillé de votre application !