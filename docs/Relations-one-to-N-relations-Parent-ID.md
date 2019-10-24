---
id: one-to-N-relations-Parent-id
title: One to Many - Parent ID
---

<div markdown="1" class = "objectives">

**OBJECTIVES**

We are now going to go a little bit further and **create a task for a specific employee**.

</div>

It is very easy to create an entity using **parent ID** !

Let's get started by downloading the Starter Project:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="../assets/en/relations/ParentIDStarterProject.zip">ONE TO MANY - STARTER PARENT ID</a>
</div>

## Create addProject action

* Open the project editor and go to the Action section.

* Add a addProject Action

![create addProject Method](assets/en/relations/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## On Mobile App Action method

The only thing you have to do is defining the **addProject** action in the **On Mobile App Action method** as follows :

```
: ($request.action="addProjects")		$o:=New object(\"dataClass";$context.dataClass;\"parent";$context.parent;\"entity";$context.entity;\"parameters";$parameters)

$result:=addProject ($o)

```

## addProject Method


Then enter thoses lines in your **addProject Method**:

```
C_OBJECT($0)C_OBJECT($1)C_OBJECT($entity;$in;$out)$in:=$1$out:=New object("success";False)If ($in.dataClass#Null)		$entity:=ds[$in.dataClass].new()  //Create a reference		For each ($key;$in.parameters)				$entity[$key]:=$in.parameters[$key]			End for each 		$primaryKey:=$in.parent.primaryKey   //Get parent primary key		$inverseRelationName:=$in.entity.relationName   //Get parent relation name		$parent:=ds[$in.parent.dataClass].get($in.parent.primaryKey)		$entity[$inverseRelationName]:=$parent		$status:=$entity.save()  //save the entity		$status:=$parent.save()  //save the parent		$out.success:=True  // notify App that action success		$out.dataSynchro:=True  // notify App to refresh the selection		$out.statusText:="Task added"		$out.close:=True	Else 		$out.errors:=New collection("No Selection")	End if $0:=$out

```

And that's it you can then add some task to your employees easily using the parent ID !

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="../assets/en/relations/ParentIDFinalProject.zip">ONE TO MANY - FINAL PARENT ID</a>
</div>