---
id: action-parameters
title: Utilizar parámetros de acción
---

<div class = "objectives">
**OBJECTIVES**
Define action parameters to edit the content of your app.</div>


In the [previous tutorial](define-first-action.html), we discovered how to execute 4D code from an iOS app by defining actions from the [Actions section](actions.html).

In this tutorial, we're going to go further and create:

* una acción de adición para **crear una nueva tarea**,
* una acción de edición que le permitirá **editar las tareas existentes** desde la aplicación iOS,
* una acción de eliminación para **eliminar una entidad**, y
* una acción que le permitirá **enviar un comentario por correo electrónico para una tarea específica**.

To begin, let's first download the **Starter Project** based on our existing Tasks iOS app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">PROYECTO STARTER</a>
  </p>
</div>

## PASO 1. Añadir acción

Let's begin simple. Open the Tasks mobile project and go directly to the **Actions section**.

![Action section](assets/en/actions/Actions-section.png)

It's quite empty for the moment... Here is what we want: **create a new task from the iOS app**.

For this, let's create an action using a preset **Add** action:

* Haga clic en la flecha en el **botón +**, en la parte inferior de la tabla Acciones.
* Seleccione la opción **acción de añadir**.
* Seleccione la **tabla Task**.

![Add action creation](assets/en/actions/Add-action-creation.png)

* Se muestra una **nueva acción** llamada *"addTasks"* con *"Add..."* como etiqueta predeterminada.
* Todos los **parámetros**disponibles y sus **propiedades** se muestran en la sección **Parámetros de las acciones**.

![Add action parameters](assets/en/actions/Add-action-parameters.png)

At this point, all **Add action parameters** are created automatically and ready to use.

## PASO 2. Editar acción

Now let's create an action that will allow you to **edit your app content**.

For this, we'll create an action using a preset **Edit** action:

* Haga clic en la flecha en el **botón +**, en la parte inferior de la tabla Acciones.
* Seleccione la opción **acción de edición**.
* Seleccione la tabla Tasks.

![Edit action creation](assets/en/actions/Edit-action-creation.png)

At this point, you will see:

* Se muestra **Una nueva acción** llamada *"editTasks"* con *"Add..."* como etiqueta predeterminada.
* Todos los **parámetros**disponibles y sus **propiedades** se muestran en la sección **Parámetros de las acciones**.


![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

Don't worry, we'll handle the 4D code for these actions later. :-)

## PASO 3. Acción de eliminación

The preset **Delete** action creation process is nearly the same as the Edit action:

* Haga clic en la flecha en el **botón +**, en la parte inferior de la tabla Acciones.
* Seleccione la opción **acción de eliminación**.
* Seleccione la tabla Tasks.

![Delete action creation](assets/en/actions/Delete-action-creation.png)

At this point, you will see a **new action** named *"deleteTasks"* with *"Remove"* as the default label.

![Acción de eliminación](assets/en/actions/Delete-action-final.png)

You don't need to worry about parameters or properties for this type of action.

## PASO 4. Acción de envío de comentario

Now we want to **send a comment** to a **specific email** depending on a specific task. To do so, click on the + button and create a new action named **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Now let's create three parameters:

* Haga clic en el botón + y seleccione **Title** en la lista de parámetros de las acciones, para incluirlo en el correo electrónico que va a enviar.
* Cree un parámetro **Comment** y seleccione el formato Área de texto.
* Cree un parámetro **email** y seleccione el formato Email address.

Your Actions section should look like this:

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## PASO 5. Creación del método base On Mobile App Action

As described in the [documentation](actions.html), click on the Create button to create the *On Mobile App Action* database method.

All of your actions will automatically be included in this database method.

The only thing you need to do is add a reference to your method(s) for the scenario(s) your want to handle.

Here's the final *On Mobile App Action* database method:

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request)

C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // Informations provided by mobile application

$context:=$request.context
$parameters:=$request.parameters

Case of 

    : ($request.action="addTasks")

          // Insert here the code for the action "Add…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // Insert here the code for the action "Edit…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Insert here the code for the action "Remove"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Insert here the code for the action "Send Comment"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // Unknown action

End case 

$0:=$result

```

## PASO 6. Creación de todos los métodos necesarios


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

    $entity.save()  //save the entity


    $out.success:=True  // notify App that action success
    $out.dataSynchro:=True  // notify App to refresh the selection
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
        $out.success:=True  // notify App that action success
        $out.statusText:="Mail sent"

    Else 
        $out.success:=False  // notify App that action failed
        $out.statusText:="Mail not sent"

    End if 

Else 

    $out.success:=False  // notify App that action failed

End if 

$0:=$out


```

Don't forget to add your own values for the **sendEmail** action.



## PASO 7. Creación de la aplicación


It's time to build your app!

Now, if you click on the Action button in the navigation bar, you'll be able to **create a new task**.

![Create new task](assets/en/actions/Action-parameters-addAction.png)

Holding and maintaining pressure on your new task cell in the List Form, will show that an **Edit...** action is available in the action list.

![Edit task](assets/en/actions/Action-parameters-editAction.png)

Send a comment using the **Send comment** action.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

And finally you can delete an entity using the **Delete...** action.

![Delete task](assets/en/actions/Action-parameters-deleteAction.png)

## PASO 8. ¿Qué hacemos ahora?

¡Felicidades! Your Tasks iOS app is now complete and you can now modify your app data direclty from your device and sychronize it with your server!

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ActionParameters/archive/0.0.1.zip">PROYECTO FINAL</a>
  </p>
</div>

