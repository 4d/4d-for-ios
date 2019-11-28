---
id: one-to-many-relations-actions
title: Liens 1 vers N - Actions
---

<div class = "objectives">
**OBJECTIFS**
Nous allons maintenant aller un peu plus loin et **créer une tâche pour un employé spécifique**.</div>

Il est très facile de créer une entité avec une **Entité parente** !

Commençons par télécharger le Projet Starter :

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="../assets/en/relations/ParentIDStarterProject.zip">PROJET STARTER - 1 VERS N & ACTIONS</a>
  </p>
</div>

## Créer une action addProject

* Ouvrez l'éditeur de projet et cliquez sur la section Action.

* Ajoutez une action addProject

![create addProject Method](assets/en/relations/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## Sur une action app mobile

Il vous suffit de définir l'action **addProject** dans la **méthode Sur une action app mobile** comme suit :

```code4d
: ($request.action="addProjects")

$o:=New object(\
"dataClass";$context.dataClass;\
"parent";$context.parent;\
"entity";$context.entity;\
"parameters";$parameters)

$result:=addProject ($o)


```

## Méthode addProject


Puis saisissez ces lignes de code dans votre **Méthode addProject** :

```code4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //Créer une référence

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //Lire clé primaire parente 

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //Lire nom du lien parent

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //sauvegarder l'entité

    $out.success:=True  // notifier l'application que l'action est réussie

    $out.dataSynchro:=True  // notifier l'application pour mettre à jour la sélection

    $out.statusText:="Task added"

    $out.close:=True

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out

```

Et voilà ! Vous pouvez ajouter facilement quelques tâches à vos employés à l'aide de l'entité parente !

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="../assets/en/relations/ParentIDFinalProject.zip">PROJET FINAL - 1 VERS N & ACTIONS</a>
  </p>
</div>
