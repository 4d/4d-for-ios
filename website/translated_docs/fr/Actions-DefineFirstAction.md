---
id: define-first-action
title: Définir une première action
---

Dans ce tutoriel, nous allons travailler sur une **application Tasks iOS** et voir comment gérer des actions dans cette application.

Nous souhaitons essentiellement changer le **statut** et le **pourcentage d'achèvement** d'une tâche dans **Task app**.

Plus globalement, nous souhaitons **modifier le statut de toutes les tâches** et le définir, par exemple, sur "reporté" et "en cours".

Téléchargez le **projet Starter** et reportez-vous directement à la **section Actions**.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip">PROJET STARTER</a>
</div>

Comme nous l'avons vu dans la [documentation de la section Actions](actions.html#ios-app-side), vous pouvez définir l’action suir deux niveaux :

* Actions d'entité
* Actions de table

Concentrons-nous d’abord sur les actions d'entité !


## Actions d'entité

### ÉTAPE 1. Actions d'entité dans la section Actions

Dans cette section des Actions, vous pourrez définir le **nom**, les **icônes** et les **libellés** de vos actions, mais aussi les **tables** dans lesquelles vous souhaitez rendre l’action disponible ainsi que la **portée** des actions.

La section Actions est assez vide lorsque vous l’ouvrez pour la première fois. Cliquez sur le **bouton "+"** en bas à gauche pour ajouter votre première action !

![Create action](assets/en/actions/Create-action.png)

Définissons tout d’abord une action qui permettra de **changer le statut d'une tâche** sur « Complete » et le **pourcentage d’achèvement** à 100 %.

Pour définir cette action :

* Saisissez **taskDone** dans le champ **Noms**
* Sélectionnez l'**icône "Done"** à partir de la bibliothèque d'icônes
* Saisissez **Done** dans le champ **Libellés courts**
* Saisissez **Task Done** dans le champ **Libellés longs**
* Sélectionnez la table **Tasks** à partir de la liste proposée dans **Tables**
* Sélectionnez **Entité courante** à partir de la liste proposée dans **Portée**

![Done action definition](assets/en/actions/Done-action-definition.png)

### ÉTAPE 2. Modifier la méthode action

Votre action est maintenant définie dans l'éditeur de projet. Vous pouvez donc créer la méthode base [**Sur une action app mobile**](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html).

Pour ce faire, cliquez sur le **bouton Editer...** en bas à droite du tableau des actions et saisissez le code suivant dans la méthode base : **Sur une action app mobile** :

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($o;$context;$request;$result)

$request:=$1  // Informations provided by mobile application

$context:=$request.context

Case of

    : ($request.action="taskDone")

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "CompletePercentage";100)

        $result:=modifyStatus ($o)

    Else

          // Unknown request
        $result:=New object("success";False)

End case

$0:=$result  // Informations returned to mobile application

```

### ÉTAPE 3. Créer une méthode "modifyStatus"

Une fois votre méthode base modifiée, vous devez créer une méthode **modifyStatus** qui permettra de réaliser la tâche demandée :

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))

If ($selection.length=1)

    $entity:=$selection[0]

    $entity.CompletePercentage:=$in.CompletePercentage

    $entity.Status:=3

    $status:=$entity.save()

    $out:=New object

    If ($status.success)

        $out.success:=True  // notifier l'App que l'action est réussie
        $out.dataSynchro:=True  // notifier l'App d'actualiser cette entité

    Else

        $out:=$status  // retourner le statut vers l'App

    End if

Else

    $out.success:=False  // notifier l'App que l'action a échoué

End if

$0:=$out

```

Générez et exécutez votre application... et voilà ! Votre **action Done** est disponible lorsque vous faites coulisser une cellule vers la gauche dans le formulaire Liste, et lorsque vous cliquez sur le **bouton générique Actions** dans la barre de navigation du formulaire détaillé.

![Done action](assets/en/actions/Entity-action-Done.png)

## Actions de table

### ÉTAPE 1. Actions de table dans la section Actions

Imaginez maintenant que vous partez en vacances et que vous souhaitez **modifier le statut de vos tâches** et le définir sur "Reporté".

Nous allons définir cette action depuis la section Actions :

* Saisissez **postponeAll** dans le champ **Noms**
* Sélectionnez l'**icône "Postponed"** à partir de la bibliothèque d'icônes
* Saisissez **Postpone All** dans le champ **Libellés courts**
* Saisissez **Postpone All** dans le champ **Libellés longs**
* Sélectionnez la table **Tasks** à partir de la liste proposée dans **Tables**
* Sélectionnez **Table** à partir de la liste proposée dans **Portée**

![Postponed action definition](assets/en/actions/PostponedAll-action-definition.png)

### ÉTAPE 2. Modifier la méthode action

Cliquez sur le **bouton Créer...** en bas à droite du tableau des actions et saisissez le code suivant dans la méthode base : **Sur une action app mobile**  :

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($o;$context;$request;$result)

$request:=$1  // Informations provided by mobile application

$context:=$request.context

Case of

    : ($request.action="taskDone")

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "CompletePercentage";100)

        $result:=modifyStatus ($o)

    : ($request.action="postponeAll")

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "Status";4)

        $result:= postponeAll ($o)
    Else

          // Unknown request
        $result:=New object("success";False)

End case

$0:=$result  // Informations returned to mobile application

```


### ÉTAPE 3. Créer une méthode "postponeAll"

Tout comme vous avez créé la méthode **modifyStatus**, suivez les mêmes étapes et créez une nouvelle méthode **postponeAll** qui permettra de modifier le statut de tous les enregistrements :

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1

$out:=New object("success";False)

If ($in.dataClass#Null)

    For each ($entity;ds[$in.dataClass].all())

        $entity.Status:=$in.Status
        $entity.save()

    End for each

    $out.success:=True  // notifier l'App que l'action est réussie
    $out.dataSynchro:=True  // notifier l'App d'actualiser la sélection

Else

    $out.errors:=New collection("No Selection")

End if

$0:=$out

```

Générez et exécutez votre projet ! Vous trouverez un nouveau **bouton générique** dans la barre de navigation de votre formulaire Liste. Cliquez dessus pour déclencher l'action **Postpone All**.

![Final result Postponed Action](assets/en/actions/ListForm-table-action-tableview-tuto.png)

## Que faire ensuite ?

Félicitations ! Vous venez d'ajouter 2 actions à votre application iOS. Vous pouvez désormais ajouter toutes les actions nécessaires à votre application Tasks !

![Final result All Action](assets/en/actions/ListForm-entity-action-tableview.png)

Vous pouvez télécharger le **Projet Final** qui comprend diverses actions :

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip">PROJET FINAL</a>
</div>
