---
id: action-parameters
title: Utiliser des paramètres d'action
---

<div class = "objectives">
**OBJECTIVES**
Define action parameters to edit the content of your app.</div>


In the [previous tutorial](define-first-action.html), we discovered how to execute 4D code from an iOS app by defining actions from the [Actions section](actions.html).

In this tutorial, we're going to go further and create:

* une action d'ajout pour **créer une nouvelle tâche**,
* une action d'édition qui vous permettra d'**éditer les tâches existantes** à partir de l'application iOS,
* une action de suppression pour **supprimer une entité**, et
* une action qui vous permettra d'**envoyer par e-mail un commentaire relatif à une tâche spécifique**.

To begin, let's first download the **Starter Project** based on our existing Tasks iOS app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">PROJET STARTER</a>
  </p>
</div>

## ÉTAPE 1. Action d'ajout

Let's begin simple. Open the Tasks mobile project and go directly to the **Actions section**.

![Action section](assets/en/actions/Actions-section.png)

It's quite empty for the moment... Here is what we want: **create a new task from the iOS app**.

For this, let's create an action using a preset **Add** action:

* Cliquez sur la flèche qui se trouve dans le **bouton +**, situé en-dessous du tableau d'actions.
* Sélectionnez l'option **action d'ajout**.
* Sélectionnez la **table Task**.

![Add action creation](assets/en/actions/Add-action-creation.png)

* **Une nouvelle action** nommée *"addTasks"* est affichée avec, par défaut, le libellé *"Add..."*.
* Tous les **paramètres** disponibles ainsi que leurs **propriétés** se trouvent dans la section **Paramètres des actions**.

![Add action parameters](assets/en/actions/Add-action-parameters.png)

At this point, all **Add action parameters** are created automatically and ready to use.

## ÉTAPE 2. Action d'édition

Now let's create an action that will allow you to **edit your app content**.

For this, we'll create an action using a preset **Edit** action:

* Cliquez sur la flèche qui se trouve dans le **bouton +**, situé en-dessous du tableau d'actions.
* Sélectionnez l'option **action d'édition**.
* Sélectionnez la table Tasks.

![Edit action creation](assets/en/actions/Edit-action-creation.png)

At this point, you will see:

* **Une nouvelle action** nommée *"editTasks"* avec, par défaut, le libellé *"Edit..."*.
* Tous les **paramètres** d'action disponibles ainsi que leurs **propriétés** dans la section **Paramètres des actions**.


![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

Don't worry, we'll handle the 4D code for these actions later. :-)

## ÉTAPE 3. Action de suppression

The preset **Delete** action creation process is nearly the same as the Edit action:

* Cliquez sur la flèche qui se trouve dans le **bouton +**, situé en-dessous du tableau d'actions.
* Sélectionnez l'option **action de suppression**.
* Sélectionnez la table Tasks.

![Delete action creation](assets/en/actions/Delete-action-creation.png)

At this point, you will see a **new action** named *"deleteTasks"* with *"Remove"* as the default label.

![Action de suppression](assets/en/actions/Delete-action-final.png)

You don't need to worry about parameters or properties for this type of action.

## ÉTAPE 4. Action d'envoi de commentaire

Now we want to **send a comment** to a **specific email** depending on a specific task. To do so, click on the + button and create a new action named **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Now let's create three parameters:

* Cliquez sur le bouton + et sélectionnez **Title** dans la liste de paramètres des actions, pour l'inclure dans l'e-mail que vous allez envoyer.
* Créez un paramètre **Comment** et sélectionnez le format Zone de texte.
* Créez un paramètre **email** et sélectionnez le format Adresse mail.

Your Actions section should look like this:

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## ÉTAPE 5. Création de la méthode base Sur une action app mobile

As described in the [documentation](actions.html), click on the Create button to create the *On Mobile App Action* database method.

All of your actions will automatically be included in this database method.

The only thing you need to do is add a reference to your method(s) for the scenario(s) your want to handle.

Here's the final *On Mobile App Action* database method:

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request)

C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // Informations fournies par l'application mobile

$context:=$request.context
$parameters:=$request.parameters

Case of 

    : ($request.action="addTasks")

          // Insérer ici le code de l'action d'ajout

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // Insérer ici le code de l'action d'édition

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Insérer ici le code de l'action de suppression

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Insérer ici le code de l'action d'envoi de commentaire

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

    $entity:=ds.Tasks.new()  //create a reference

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $entity.save()  //sauvegarder l'entité


    $out.success:=True  // notifier l'application que l'action est réussie
    $out.dataSynchro:=True  //notifier l'application pour mettre à jour la sélection
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

Don't forget to add your own values for the **sendEmail** action.



## ÉTAPE 7. Génération de l’application


It's time to build your app!

Now, if you click on the Action button in the navigation bar, you'll be able to **create a new task**.

![Create new task](assets/en/actions/Action-parameters-addAction.png)

Holding and maintaining pressure on your new task cell in the List Form, will show that an **Edit...** action is available in the action list.

![Edit task](assets/en/actions/Action-parameters-editAction.png)

Send a comment using the **Send comment** action.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

And finally you can delete an entity using the **Delete...** action.

![Delete task](assets/en/actions/Action-parameters-deleteAction.png)

## ÉTAPE 8. Que faire ensuite ?

Félicitations ! Your Tasks iOS app is now complete and you can now modify your app data direclty from your device and sychronize it with your server!

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ActionParameters/archive/0.0.1.zip">PROJET FINAL</a>
  </p>
</div>

