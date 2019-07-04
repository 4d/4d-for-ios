---
id: using-parameters
title: Utiliser des paramètres
---

<div class = "objectives"> 

**OBJECTIFS**

Définir des paramètres d'action pour modifier le contenu de votre application.</div> 

Dans le [tutoriel précédent](define-first-action.html), nous avons appris à exécuter du code 4D à partir d'une application iOS en définissant des actions à partir de la [section Actions](actions.html).

Dans ce tutoriel, nous irons encore plus loin et nous créerons :

* une action d'ajout pour **créer une nouvelle tâche**,
* une action d'édition qui vous permettra d'**éditer les tâches existantes** à partir de l'application iOS,
* une action de suppression pour **supprimer une entité**, et
* une action qui vous permettra d'**envoyer par e-mail un commentaire relatif à une tâche spécifique**.

Pour commencer, téléchargeons d'abord le **Projet Starter** , basé sur notre application iOS Tasks.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/actions/ActionParametersStarterProject.zip">PROJET STARTER</a>

  </p>
</div>

## ÉTAPE 1. Action d'ajout

Commençons par une tâche simple. Ouvrez le projet mobile Tasks et cliquez directement sur la **section Actions**.

![Action section](assets/en/actions/Actions-section.png)

Pour l'instant, il est assez vide... Voici ce que nous souhaitons faire : **créer une nouvelle tâche à partir de l'application iOS**.

Pour ce faire, nous allons créer une action à l'aide de l'action d'**ajout** :

* Cliquez sur la flèche qui se trouve dans le **bouton +**, en-dessous du tableau d'actions.
* Sélectionnez l'option **action d'ajout**.
* Sélectionnez la **table Task**. 

![Add action creation](assets/en/actions/Add-action-creation.png)

* **A new action** named *"addTasks"* with *"Add..."* as default label is displayed.
* All available **parameters** and their **properties** are shown in the **Actions Parameters** section.

![Add action parameters](assets/en/actions/Add-action-parameters.png)

At this point, all **Add action parameters** are created automatically and ready to use.

## STEP 2. Edit action

Now let's create an action that will allow you to **edit your app content**.

For this, we'll create an action using a preset **Edit** action:

* Click on the arrow in the **+ button** at the bottom of the Actions table.
* Select the **Edit action for** option.
* Select the Tasks table. 

![Edit action creation](assets/en/actions/Edit-action-creation.png)

At this point, you will see:

* **A new action** named *"editTasks"* with *"Edit..."* as the default label.
* All available action **parameters** and their **properties** are displayed in the **Actions parameters** section.

![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

Don't worry, we'll handle the 4D code for these actions later. :-)

## STEP 3. Delete action

The preset **Delete** action creation process is nearly the same as the Edit action:

* Click on the arrow in the **+ button** at the bottom of the Actions table.
* Select the **Delete action for** option.
* Select the Tasks table. 

![Delete action creation](assets/en/actions/Delete-action-creation.png)

At this point, you will see a **new action** named *"deleteTasks"* with *"Remove"* as the default label.

![Delete action](assets/en/actions/Delete-action-final.png)

You don't need to worry about parameters or properties for this type of action.

## STEP 4. Send a comment action

Now we want to **send a comment** to a **specific email** depending on a specific task. To do so, click on the + button and create a new action named **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Now let's create three parameters:

* Click on the + button and select **Title** in the Action Parameters list to include it in the email you're going to send.
* Create a **Comment** parameter and select Text area as the format property.
* Create an **email** parameter and select Email address as the format property.

Your Actions section should look like this:

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## STEP 5. Create the On Mobile App Action

As described in the [documentation](actions.html), click on the Create button to create the *On Mobile App Action* database method.

All of your actions will automatically be included in this database method.

The only thing you need to do is add a reference to your method(s) for the scenario(s) your want to handle.

Here's the final *On Mobile App Action* database method:

    C_OBJECT($0;$response)
    C_OBJECT($1;$request)
    
    C_OBJECT($o;$context;$request;$result;$parameters)
    
    $request:=$1  // Informations provided by mobile application
    
    $context:=$request.context
    $parameters:=$request.parameters
    
    Case of 
    
        : ($request.action="addTasks")
    
              // Insert here the code for the action "Add…"
    
            $o:=OB Copy($parameters)
            $o.dataClass:=$context.dataClass
            $o.ID:=$context.entity.primaryKey
    
            $result:=addAction ($o)
    
        : ($request.action="editTasks")
    
              // Insert here the code for the action "Edit…"
    
            $o:=OB Copy($parameters)
            $o.dataClass:=$context.dataClass
            $o.ID:=$context.entity.primaryKey
    
            $result:=editAction ($o)
    
    
        : ($request.action="deleteTasks")
    
              // Insert here the code for the action "Remove"
    
            $o:=New object(\
            "dataClass";$context.dataClass;\
            "ID";$context.entity.primaryKey)
    
            $result:=deleteAction ($o)
    
        : ($request.action="sendComment")
    
              // Insert here the code for the action "Send Comment"
    
            $o:=OB Copy($parameters)
            $o.dataClass:=$context.dataClass
            $o.ID:=$context.entity.primaryKey
    
    
            $result:=sendMail ($o)
    
        Else 
    
              // Unknown action
    
    End case 
    
    $0:=$result
    
    
    
    

## ÉTAPE 6. Créer toutes les méthodes nécessaires

### addAction

    <br />C_OBJECT($0)
    C_OBJECT($1)
    
    C_OBJECT($entity;$in;$out)
    
    $in:=$1
    
    $out:=New object("success";False)
    
    If ($in.dataClass#Null)
    
        $entity:=ds.Tasks.new()  //create a reference
    
        $entity.CompletePercentage:=$in.CompletePercentage
        $entity.StartDate:=$in.StartDate
        $entity.DueDate:=$in.DueDate
        $entity.Description:=$in.Description
        $entity.Title:=$in.Title
        $entity.Status:=$in.Status
        $entity.Priority:=$in.Priority
    
        $entity.save()  //save the entity
    
    
        $out.success:=True  // notify App that action success
        $out.dataSynchro:=True  // notify App to refresh the selection
        $out.statusText:="Task added"
    
    
    Else 
    
        $out.errors:=New collection("No Selection")
    
    End if 
    
    $0:=$out
    
    
    

### editAction

    <br />C_OBJECT($0)
    C_OBJECT($1)
    
    C_OBJECT($dataClass;$entity;$in;$out;$status;$selection;$emailToSend)
    
    $in:=$1
    
    $selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))
    
    If ($selection.length=1)
    
        $entity:=$selection[0]
    
        $entity.CompletePercentage:=$in.CompletePercentage
        $entity.StartDate:=$in.StartDate
        $entity.DueDate:=$in.DueDate
        $entity.Description:=$in.Description
        $entity.Title:=$in.Title
        $entity.Status:=$in.Status
        $entity.Priority:=$in.Priority
    
        $status:=$entity.save()
    
        $out:=New object
    
        If ($status.success)
    
            $out.success:=True  // notify App that action success
            $out.dataSynchro:=True  // notify App to refresh this entity
            $out.statusText:="Task edited"
    
        Else 
    
            $out:=$status  // return status to the App
    
        End if 
    
    Else 
    
        $out.success:=False  // notify App that action failed
    
    End if 
    
    $0:=$out
    
    
    

### deleteAction

    <br />C_OBJECT($0)
    C_OBJECT($1)
    
    C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)
    
    $in:=$1
    
    $selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))
    
    If ($selection.length=1)
    
        $entity:=$selection.drop()
    
        $out:=New object
    
        If ($entity.length=0)
    
            $out.success:=True  // notify App that action success
            $out.dataSynchro:=True  // notify App to refresh this entity
            $out.statusText:="Task deleted"
    
    
        Else 
    
            $out:=$status  // return status to the App
    
        End if 
    
    Else 
    
        $out.success:=False  // notify App that action failed
    
    End if 
    
    $0:=$out
    
    
    

### sendEmail

    <br />C_OBJECT($0;$out)
    C_OBJECT($1;$in)
    
    C_OBJECT($dataClass;$entity;$selection)
    
    $in:=$1
    
    $selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))
    
    If ($selection.length=1)
    
        $entity:=$selection[0]
    
        $taskTitle:=$in.Title
        $commentToSend:=$in.Comment
        $emailToSend:=$in.Email
    
        $out:=New object
    
    
        $server:=New object
        $server.host:="smtp.gmail.com"
        $server.port:=465
        $server.user:="test@mail.com" //To be replaced by your email
        $server.password:="yourPassword" //To be replaced by your password
    
        $transporter:=SMTP New transporter($server)
    
        $email:=New object
        $email.subject:="New comment about one of your task"
        $email.from:="yourEmail" //To be replaced by your email
        $email.to:=$emailToSend
        $email.htmlBody:="&lt;h1&gt;Comment from Tasks for iOS&lt;/h1&gt;"+"&lt;p&gt;&lt;b&gt;Task:&lt;/b&gt; "+$taskTitle+"&lt;/p&gt;&lt;p&gt;&lt;b&gt;Comment:&lt;/b&gt; "\
        +$commentToSend+"&lt;/p&gt;&lt;br&gt;&lt;p&gt;&lt;i&gt;Send from my 4D for iOS app&lt;/i&gt;&lt;/p&gt;"\
    
    
        $status:=$transporter.send($email)
        If ($status.success)
            $out.success:=True  // notify App that action success
            $out.statusText:="Mail sent"
    
        Else 
            $out.success:=False  // notify App that action success
            $out.statusText:="Mail not sent"
    
        End if 
    
    Else 
    
        $out.success:=False  // notify App that action failed
    
    End if 
    
    $0:=$out
    
    <div class = "tips"> 

**CONSEILS**

* N'oubliez pas d'ajouter vos propres valeurs pour l'action **sendEmail**.</div> 

## ÉTAPE 7. Génération de l’application

Il est temps de générer votre application !

Si vous cliquez sur la barre de navigation de l'action, vous pourrez **créer une nouvelle tâche**.

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
  <p>
    

<a class="button"
href="../assets/en/actions/ActionParametersFinalProject.zip">FINAL PROJECT</a>

  </p>
</div>