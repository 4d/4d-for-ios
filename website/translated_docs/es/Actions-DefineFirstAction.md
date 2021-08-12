---
id: define-first-action
title: Definir una primera acción
---

En este tutorial, vamos a trabajar en una aplicación **Tasks iOS** y veremos cómo lidiar con las acciones en esta aplicación.

Básicamente, lo que queremos hacer en una **aplicación Task** es cambiar el **estado** y el **porcentaje de finalización** de una tarea individualmente.

Más globalmente, queremos **cambiar el estado de todas las tareas** a pospuesto o en progreso, por ejemplo.

Descargue el **proyect Starter** y vaya directamente a la sección **Actions**.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip">PROYECTO STARTER</a>
</div>

Como hemos visto antes en la [documentación de la sección Actions](actions.html#ios-app-side), puede definir la acción para dos niveles:

* Acciones de entidad
* Acciones de tabla

Centrémonos primero en las acciones de entidad


## Acciones de entidad

### PASO 1. Acciones de entidad en la sección Actions

En esta sección Actions, podrá definir todas los **nombres**, los **iconos**, las **etiquetas** de sus acciones, así como también las **tablas** en las cuales desea que la acción esté disponible y el **alcance** de las acciones.

La sección Actions está bastante vacía cuando la abre por primera vez, así que haga clic en el botón **Más "+"** en la parte inferior izquierda para agregar su primera acción.

![Create action](assets/en/actions/Create-action.png)

Primero definamos una acción que **cambiará el estado de una tarea** a "Completa" y pondrá el **porcentaje de finalización** en 100%.

Para definir esta acción:

* Introduzca **taskDone** en el campo **Nombres**
* Seleccione el **icono "Done"** de la librería de iconos
* Introduzca **Done** en el campo **Etiquetas cortas**
* Introduzca **Task Done** en el campo **Etiquetas largas**
* Seleccione la tabla **Tasks** a partir de la lista propuesta en **Tables**
* Seleccione **Entidad actual** en la lista **Alcance**

![Done action definition](assets/en/actions/Done-action-definition.png)

### PASO 2. Crear y editar el método On Mobile App Action

Ahora que su acción está definida en el editor de proyectos, debe crear el método base[ **On Mobile App Action**](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App -Action-database-method.301-4286697.en.html).

Para hacerlo, haga clic en el **botón Crear** en la parte inferior derecha de la tabla de acciones e ingrese el siguiente código en el método base **On Mobile App Action**:

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

### PASO 3. Crear un método "modifyStatus"

Una vez que su método base ha sido editado, debe crear un método **modifyStatus** que hará el trabajo:

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

        $out.success:=True  // notificar la App que la acción es éxitosa
        $out.dataSynchro:=True  // notificar la App de actualizar esta entidad

    Else

        $out:=$status  // devolver el estado a la App

    End if

Else

    $out.success:=False  // notificar la App que la acción falló

End if

$0:=$outCompletePercentage:=$in.CompletePercentage

    $entity.Status:=3

    $status:=$entity.save()

    $out:=New object

    If ($status.success)

        $out.success:=True  // notificar la App que la acción es éxitosa
        $out.dataSynchro:=True  // notificar la App de actualizar esta entidad

    Else

        $out:=$status  // devolver el estado a la App

    End if

Else

    $out.success:=False  // notificar la App que la acción falló

End if

$0:=$out

```

Cree y ejecute su aplicación y ¡listo! Cree y ejecute su aplicación y ¡listo! Su **acción Done ** está disponible cuando desliza hacia la izquierda una celda en el formulario Lista, así como cuando hace clic en el **botón genérico Actions** en la barra de navegación del formulario detallado.

![Done action](assets/en/actions/Entity-action-Done.png)

## Acciones de tabla

### PASO 1. Acciones de tabla en la sección Actions

Ahora, imagine que se va de vacaciones y quiere **cambiar el estado de todas sus tareas** a "Pospuesto".

Definamos esta acción desde la sección Action:

* Introduzca **postponeAll** en el campo **Nombres**
* Seleccione el **icono "Postponed"** de la librería de iconos
* Introduzca **Postpone All** en el campo **Etiquetas cortas**
* Introduzca **Postpone All** en el campo **Etiquetas largas**
* Seleccione la tabla **Tasks** a partir de la lista propuesta en **Tables**
* Seleccione **Table** de la lista **Alcance**

![Postponed action definition](assets/en/actions/PostponedAll-action-definition.png)

### PASO 2. Modificar el método Action

Haga clic el **botón Editar** en la parte inferior derecha de la tabla action para completar el método base **On Mobile App Action**:

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


### PASO 3. Crear un método "postponeAll"

A medida que crea el método **modifyStatus**, siga el mismo proceso y cree un nuevo método **postponeAll** que modificará todo el estado del registro:

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

    $out.success:=True  // notificar la App que la acción es exitosa
    $out.dataSynchro:=True  // notificar la App refrescar la selección

Else

    $out.errors:=New collection("No Selection")

End if

$0:=$outStatus:=$in.Status
        $entity.save()

    End for each

    $out.success:=True  // notificar la App que la acción es exitosa
    $out.dataSynchro:=True  // notificar la App refrescar la selección

Else

    $out.errors:=New collection("No Selection")

End if

$0:=$out

```

¡Cree y ejecute su aplicación! Encontrará un nuevo **botón genérico** en la barra de navegación de su formulario Lista. Haga clic en él para activar la acción **Postpone All**.

![Final result Postponed Action](assets/en/actions/ListForm-table-action-tableview-tuto.png)

## ¿Qué hacer ahora?

¡Felicitaciones! ¡Felicitaciones! Acaba de agregar 2 acciones a su aplicación iOS. ¡Ahora puede agregar todas las acciones que necesita a su aplicación Tasks!

![Final result All Action](assets/en/actions/ListForm-entity-action-tableview.png)

Puede descargar el **Proyecto final** que incluye varias acciones:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip">PROYECTO FINAL</a>
</div>
