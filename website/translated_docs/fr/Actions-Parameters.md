---
id: action-parameters
title: Utiliser des paramètres d'action
---

> **OBJECTIFS**
> 
> Définir des paramètres d'action pour modifier le contenu de votre application.

Dans le [tutoriel précédent](define-first-action.html), nous avons appris à exécuter du code 4D à partir d'une application iOS en définissant des actions dans la [section Actions](actions.html).

Dans ce tutoriel, nous irons encore plus loin et nous créerons :

* une action d'ajout pour **créer une nouvelle tâche**,
* une action d'édition qui vous permettra d'**éditer les tâches existantes** à partir de l'application iOS,
* une action de suppression pour **supprimer une entité**, et
* une action qui vous permettra d'**envoyer par e-mail un commentaire relatif à une tâche spécifique**.

Pour commencer, téléchargeons d'abord le **Projet Starter**, basé sur notre application iOS Tasks.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">PROJET STARTER</a>
</div>

## ÉTAPE 1. Action d'ajout

Commençons par une tâche simple. Ouvrez le projet mobile Tasks et cliquez directement sur la **section Actions**.

![Action section](assets/en/actions/Actions-section.png)

Pour l'instant, elle est assez vide... Voici ce que nous souhaitons faire : **créer une nouvelle tâche à partir de l'application iOS**.

Pour ce faire, nous allons créer une action à l'aide de l'action d'**ajout** :

* Cliquez sur la flèche qui se trouve dans le **bouton +**, situé en-dessous du tableau d'actions.
* Sélectionnez l'option **action d'ajout**.
* Sélectionnez la **table Task**.

![Add action creation](assets/en/actions/Add-action-creation.png)

* **Une nouvelle action** nommée *"addTasks"* est affichée avec, par défaut, le libellé *"Add..."*.
* Tous les **paramètres** disponibles ainsi que leurs **propriétés** se trouvent dans la section **Paramètres des actions**.

![Add action parameters](assets/en/actions/Add-action-parameters.png)

A ce stade, tous les **paramètres des actions d'ajout** sont créés automatiquement et sont prêts à l'emploi.

## ÉTAPE 2. Action d'édition

Créons maintenant une action qui vous permettra d'**éditer le contenu de votre application**.

Pour ce faire, nous allons créer une action à l'aide de l'action d'**édition** :

* Cliquez sur la flèche qui se trouve dans le **bouton +**, situé en-dessous du tableau d'actions.
* Sélectionnez l'option **action d'édition**.
* Sélectionnez la table Tasks.

![Edit action creation](assets/en/actions/Edit-action-creation.png)

Vous allez donc voir :

* **Une nouvelle action** nommée *"editTasks"* avec, par défaut, le libellé *"Edit..."*.
* Tous les **paramètres** d'action disponibles ainsi que leurs **propriétés** dans la section **Paramètres des actions**.


![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

Pas de panique, nous reviendrons sur le code 4D de ces actions un peu plus tard. :-)

## ÉTAPE 3. Action de suppression

Le processus de création de l'action prédéfinie de **suppression** est à peu près identique à l'action d'édition :

* Cliquez sur la flèche qui se trouve dans le **bouton +**, situé en-dessous du tableau d'actions.
* Sélectionnez l'option **action de suppression**.
* Sélectionnez la table Tasks.

![Delete action creation](assets/en/actions/Delete-action-creation.png)

Vous verrez apparaître une **nouvelle action** nommée *"deleteTasks"* avec, par défaut, le libellé *"Remove"*.

![Action de suppression](assets/en/actions/Delete-action-final.png)

Vous n'avez pas à vous préoccuper des paramètres ou des propritées pour ce type d'action.

## ÉTAPE 4. Action d'envoi de commentaire

Nous souhaitons maintenant **envoyer un commentaire** à une **adresse mail spécifique**, par rapport à une tâche spécifique. Pour ce faire, cliquez sur le bouton + et créez une nouvelle action que vous nommerez **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Nous allons créer trois paramètres :

* Cliquez sur le bouton + et sélectionnez **Title** dans la liste de paramètres des actions, pour l'inclure dans l'e-mail que vous allez envoyer.
* Créez un paramètre **Comment** et sélectionnez le format Zone de texte.
* Créez un paramètre **email** et sélectionnez le format Adresse mail.

Votre section Actions devrait ressembler à ceci :

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## ÉTAPE 5. Création de la méthode base Sur une action app mobile

Comme indiqué dans la [documentation](actions.html), cliquez sur le bouton Créer... pour créer la méthode base *Sur une action app mobile*.

Toutes vos actions seront comprises automatiquement dans la méthode base.

Il ne vous reste qu'à ajouter une référence à votre/vos méthode(s) pour le(s) scénario(s) que vous souhaitez gérer.

Voici la méthode base *Sur une action app mobile* finale :

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request)

C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // Informations fournies par l'application mobile

$context:=$request.context
$parameters:=$request.parameters

Case of 

    : ($request.action="addTasks")

          // Insérer ici le code pour l'action "Add…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // Insérer ici le code pour l'action "Edit…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Insérer ici le code pour l'action "Remove"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Insérer ici le code pour l'action "Send Comment"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // Action inconnue

End case 

$0:=$result

```

## ÉTAPE 6. Création de toutes les méthodes nécessaires


### addAction

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1

$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds.Tasks.new()  //créer une référence

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $entity.save()  //sauvegarder l'entité


    $out.success:=True  // notifier l'App que l'action est réussie
    $out.dataSynchro:=True  // notifier l'App d'actualiser la sélection
    $out.statusText:="Task added"

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out


```

### editAction

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))

If ($selection.length=1)

    $entity:=$selection[0]

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $status:=$entity.save()

    $out:=New object

    If ($status.success)

        $out.success:=True  // notifier l'application que l'action est réussie
        $out.dataSynchro:=True  // notifier l'application pour mettre à jour la sélection
        $out.statusText:="Task edited"

    Else 

        $out:=$status  // retourner le statut à l'application 

    End if 

Else 

    $out.success:=False  // notifier l'application que l'action a échoué

End if 

$0:=$out


```

### deleteAction

```4d

C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))

If ($selection.length=1)

    $entity:=$selection.drop()

    $out:=New object

    If ($entity.length=0)

        $out.success:=True  // notifier l'application que l'action est réussie
        $out.dataSynchro:=True  // notifier l'application pour mettre à jour cette entité
        $out.statusText:="Task deleted"

    Else 

        $out:=$status  // retourner le statut à l'application

    End if 

Else 

    $out.success:=False  // notifier l'application que l'action a échoué

End if 

$0:=$out


```

### sendEmail


```4d
C_OBJECT($0;$out)
C_OBJECT($1;$in)

C_OBJECT($dataClass;$entity;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))

If ($selection.length=1)

    $entity:=$selection[0]

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $out:=New object

    $server:=New object
    $server.host:="smtp.gmail.com"
    $server.port:=465
    $server.user:="test@mail.com"
    $server.password:="yourPassword"

    $transporter:=SMTP New transporter($server)

    $email:=New object
    $email.subject:="New comment about one of your task"
    $email.from:="yourEmail"
    $email.to:=$emailToSend
    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\
    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\

    $status:=$transporter.send($email)
    If ($status.success)
        $out.success:=True  // notifier l'application que l'action est réussie
        $out.statusText:="Mail sent"

    Else 
        $out.success:=False  // notifier l'application que l'action a échoué
        $out.statusText:="Mail not sent"

    End if 

Else 

    $out.success:=False  //notifier l'application que l'action a échoué
End if 

$0:=$out


```

N'oubliez pas d'ajouter vos propres valeurs pour l'action **sendEmail**.



## ÉTAPE 7. Génération de l’application


Il est temps de générer votre application !

Si vous cliquez sur le bouton Action de la barre de navigation, vous pourrez **créer une nouvelle tâche**.

![Create new task](assets/en/actions/Action-parameters-addAction.png)

Si vous maintenez votre pouce sur la nouvelle tâche du formulaire Liste, une action d'**édition** s'affichera dans la liste d'actions.

![Edit task](assets/en/actions/Action-parameters-editAction.png)

Envoyez un commentaire à l'aide de l'action **Send comment**.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

Enfin, vous pouvez supprimer une entité à l'aide de l'action de **suppression**.

![Delete task](assets/en/actions/Action-parameters-deleteAction.png)

## ÉTAPE 8. Que faire ensuite ?

Félicitations ! Votre application iOS Tasks est désormais complète. Vous pouvez dès à présent modifier les données de votre application directement sur votre appareil et les synchroniser avec votre serveur !

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip">PROJET FINAL</a>
</div>

