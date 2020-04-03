---
id: one-to-many-relations-actions
title: １対Ｎとアクション
---

:::tip OBJECTIVES 今度は， **特定の担当者（１レコード）のためにタスク（Ｎレコード）を作成する**場合を考えましょう。 :::

**親エンティティ**さえきちんと特定できていれば，子エンティティを作成するのは少しも難しいことはではありません！

素材プロジェクトをダウンロードしてください。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip">スタータープロジェクト - １対Ｎとアクション</a>
  </p>
</div>

## addProject アクションを作成する

* Open the project editor and go to the Action section.

* addProject アクションを追加します。

![create addProject Method](assets/en/relations/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## On Mobile App Action method

The only thing you have to do is defining the **addProject** action in the **On Mobile App Action method** as follows :

```4d
: ($request.action="addProjects")

$o:=New object(\
"dataClass";$context.dataClass;\
"parent";$context.parent;\
"entity";$context.entity;\
"parameters";$parameters)

$result:=addProject ($o)


```

## addProject Method


Then enter thoses lines in your **addProject Method**:

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //Create a reference

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //Get parent primary key

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //Get parent relation name

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //save the entity

    $out.success:=True  // notify App that action success

    $out.dataSynchro:=True  // notify App to refresh the selection

    $out.statusText:="Task added"

    $out.close:=True

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out

```

And that's it you can then add some task to your employees easily using the parent Entity !

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip">FINAL PROJECT - ONE TO MANY & ACTIONS</a>
  </p>
</div>
