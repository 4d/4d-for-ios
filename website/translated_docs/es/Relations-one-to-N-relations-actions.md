---
id: one-to-many-relations-actions
title: Uno a Muchos - Acciones
---

> **OBJETIVOS**
> 
> Ahora vamos a ir un poco más lejos y **crear una tarea para un empleado específico**.

¡Es muy fácil crear una entidad utilizando una **Entidad padre**!

Comencemos descargando el Proyecto Starter:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip">PROYECTO STARTER - UNO A MUCHOS & ACTIONS</a>
</div>

## Crear una acción addProject

* Abra el editor del proyecto y vaya a la sección Action.

* Añada una acción addProject

![create addProject Method](assets/en/relations/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## Método On Mobile App Action

Lo único que debe hacer es definir la acción **addProject** en el **método On Mobile App Action** de la siguiente manera:

```4d
: ($request.action="addProjects")

$o:=New object(\
"dataClass";$context.dataClass;\
"parent";$context.parent;\
"entity";$context.entity;\
"parameters";$parameters)

$result:=addProject ($o)


```

## Método addProject


Luego introduzca esas líneas de código en su **addProject Method**:

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //Crear una referencia

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //Get parent primary key

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //Obtener nombre de la relación padre

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //guardar la entidad

    $out.success:=True  // notificar App que la acción es exitosa

    $out.dataSynchro:=True  // notificar App para refrescar la selección

    $out.statusText:="Task added"

    $out.close:=True

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out

```

¡Y eso es todo, puede agregar alguna tarea a sus empleados fácilmente usando la entidad padre!

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip">PROYECTO FINAL - UNO A MUCHOS & ACTIONS</a>
</div>
