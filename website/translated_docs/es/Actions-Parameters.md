---
id: action-parameters
title: Utilizar parámetros de acción
---

> **OBJETIVOS**
> 
> Definir parámetros de acción para editar el contenido de su aplicación.

En el [tutorial anterior](define-first-action.html), descubrimos cómo ejecutar código 4D desde una aplicación iOS definiendo acciones en la [sección Actions](actions.html).

En este tutorial, iremos más allá y crearemos:

* una acción de adición para **crear una nueva tarea**,
* una acción de edición que le permitirá **editar las tareas existentes** desde la aplicación iOS,
* una acción de eliminación para **eliminar una entidad**, y
* una acción que le permitirá **enviar un comentario por correo electrónico para una tarea específica**.

Para comenzar, primero descarguemos el **Proyecto Starter** basado en nuestra aplicación iOS Tasks.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">PROYECTO STARTER</a>
</div>

## PASO 1. Acción de añadir

Comencemos por una tarea simple. Abra el proyecto móvil Tasks y vaya directamente a la **sección Actions**.

![Action section](assets/en/actions/Actions-section.png)

Está bastante vacío por el momento... Esto es lo que queremos: **crear una nueva tarea desde la aplicación iOS**.

Para esto, creemos una acción utilizando una acción preestablecida **Agregar**:

* Haga clic en la flecha en el **botón +**, en la parte inferior de la tabla Acciones.
* Seleccione la opción **acción de añadir**.
* Seleccione la **tabla Task**.

![Add action creation](assets/en/actions/Add-action-creation.png)

* Se muestra una **nueva acción** llamada *"addTasks"* con *"Add..."* como etiqueta predeterminada.
* Todos los **parámetros**disponibles y sus **propiedades** se muestran en la sección **Parámetros de las acciones**.

![Add action parameters](assets/en/actions/Add-action-parameters.png)

En este punto, todos los **parámetros de las acciones de adición** se crean automáticamente y están listos para usar.

## PASO 2. Acción de edición

Ahora creemos una acción que le permitirá **editar el contenido de su aplicación**.

Para esto, creemos una acción utilizando una acción preestablecida de **edición**:

* Haga clic en la flecha en el **botón +**, en la parte inferior de la tabla Acciones.
* Seleccione la opción **acción de edición**.
* Seleccione la tabla Tasks.

![Edit action creation](assets/en/actions/Edit-action-creation.png)

En este punto verá:

* Se muestra **Una nueva acción** llamada *"editTasks"* con *"Add..."* como etiqueta predeterminada.
* Todos los **parámetros**disponibles y sus **propiedades** se muestran en la sección **Parámetros de las acciones**.


![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

No se preocupe, manejaremos el código 4D para estas acciones más adelante. :-)

## PASO 3. Acción de eliminación

El proceso de creación de la acción predefinido **Eliminar** es casi el mismo que la acción Editar:

* Haga clic en la flecha en el **botón +**, en la parte inferior de la tabla Acciones.
* Seleccione la opción **acción de eliminación**.
* Seleccione la tabla Tasks.

![Delete action creation](assets/en/actions/Delete-action-creation.png)

En este punto, verá una **nueva acción** llamada *"deleteTasks"* con *"Remove"* como la etiqueta predeterminada.

![Acción de eliminación](assets/en/actions/Delete-action-final.png)

No necesita preocuparse por los parámetros o propiedades de este tipo de acción.

## PASO 4. Acción de envío de comentario

Ahora queremos **enviar un comentario** a un **correo electrónico específico** dependiendo de una tarea específica. Para hacerlo, haga clic en el botón + y cree una nueva acción llamada **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Ahora creemos tres parámetros:

* Haga clic en el botón + y seleccione **Title** en la lista de parámetros de las acciones, para incluirlo en el correo electrónico que va a enviar.
* Cree un parámetro **Comment** y seleccione el formato Área de texto.
* Cree un parámetro **email** y seleccione el formato Email address.

Su sección Actions debería verse así:

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## PASO 5. Creación del método base On Mobile App Action

Como se describe en la [documentación](actions.html), haga clic en el botón Crear para crear el método base *On Mobile App Action*.

Todas sus acciones se incluirán automáticamente en el método base.

Lo único que debe hacer es agregar una referencia a su(s) método(s) para el (los) escenario(s) que desea manejar.

Aquí el método base *On Mobile App Action* final:

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request)

C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // Información ofrecida por la aplicación móvil

$context:=$request.context
$parameters:=$request.parameters

Case of 

    : ($request.action="addTasks")

          // Insertar aquí el código para la acción "Add…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // Insertar aquí el código para la acción "Edit…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Insertar aquí el código para la acción "Remove"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Insertar aquí el código para la acción "Send Comment"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // Acción desconocida
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

    $entity.save()  //guardar la entidad


    $out.success:=True  // notificar la App que la acción es exitosa
    $out.dataSynchro:=True  // notificar la App para refrescar la selección
    $out.statusText:="Task added"

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$outTasks.new()  //create a reference

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $entity.save()  //guardar la entidad


    $out.success:=True  // notificar la App que la acción es exitosa
    $out.dataSynchro:=True  // notificar la App para refrescar la selección
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

        $out.success:=True  // notificar la App que la acción es exitosa
        $out.dataSynchro:=True  // notificar la App para refrescar esta entidad
        $out.statusText:="Task edited"

    Else 

        $out:=$status  // devolver estado a la App

    End if 

Else 

    $out.success:=False  // notificar la App que la acción falló

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

        $out.success:=True  // notificar a la App que la acción es exitosa
        $out.dataSynchro:=True  // notificar a la App refrescar esta entidad
        $out.statusText:="Task deleted"

    Else 

        $out:=$status  // devolver estado a la App

    End if 

Else 

    $out.success:=False  // notificar a la App que la acción falló

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
        $out.success:=True  // notificar a la App que la acción fue exitosa
        $out.statusText:="Mail sent"

    Else 
        $out.success:=False  // notificar a la App que la acción falló
        $out.statusText:="Mail not sent"

    End if 

Else 

    $out.success:=False  // notificar a la App que la acción falló

End if 

$0:=$out


```

No olvide agregar sus propios valores para la acción **sendEmail**.



## PASO 7. Creación de la aplicación


¡Es hora de generar su aplicación!

Ahora, si hace clic en el botón Action de la barra de navegación, podrá **crear una nueva tarea**.

![Create new task](assets/en/actions/Action-parameters-addAction.png)

Si mantiene la presión sobre su nueva celda de tareas en el Formulario Lista, se mostrará una acción **Editar...** en la lista de acciones.

![Edit task](assets/en/actions/Action-parameters-editAction.png)

Envíe un comentario utilizando la acción **Send comment**.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

Y finalmente puede eliminar una entidad utilizando la acción **Eliminar... **.

![Delete task](assets/en/actions/Action-parameters-deleteAction.png)

## PASO 8. ¿Qué hacemos ahora?

¡Felicitaciones! ¡Felicitaciones! Su aplicación iOS Tasks ahora está completa y ahora puede modificar los datos de su aplicación directamente desde su dispositivo y sincronizarlos con su servidor.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip">PROYECTO FINAL</a>
</div>

