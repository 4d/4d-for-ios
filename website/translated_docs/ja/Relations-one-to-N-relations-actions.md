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
href="https://github.com/4d-for-ios/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip">１対Ｎとアクションの素材プロジェクト</a>
  </p>
</div>

## addProject アクションを作成する

* プロジェクトエディターを開いて「アクション」セクションに移動します。

* addProject アクションを追加します。

![addProject メソッドの作成](assets/en/relations/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## On Mobile App Action データベースメソッド

あとは下記のように**On Mobile App Action**データベースメソッド内で**addProject** アクションの動作を定義するだけです。

```4d
: ($request.action="addProjects")

$o:=New object(\
"dataClass";$context.dataClass;\
"parent";$context.parent;\
"entity";$context.entity;\
"parameters";$parameters)

$result:=addProject ($o)


```

## addProject プロジェクトメソッド


**addProject**メソッドには，下記のコードを入力します。

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //エンティティを作成

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //親エンティティのプライマリーキー

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //親エンティティのリレーション名

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //エンティティを保存

    $out.success:=True  //モバイルアプリにアクションの成功を通知

    $out.dataSynchro:=True  //モバイルアプリにセレクションのリフレッシュを要求

    $out.statusText:="Task added"

    $out.close:=True

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out

```

親エンティティを使用することにより，幾つでも担当者にタスクを追加することができるようになりました！

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip">１対Ｎとアクションの完成プロジェクト</a>
  </p>
</div>
