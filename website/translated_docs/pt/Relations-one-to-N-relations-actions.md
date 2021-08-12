---
id: one-to-many-relations-actions
title: Relações Um para Muitos - Ações
---

> **OBJETIVOS**
> 
> Vamos agora  **criar uma tarefa para um funcionário específico**.

É fácil criar uma entidade usando **parent Entity** !

Vamos começar baixando o Projeto Starter:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip">STARTER PROJECT -  UM PARA MUITOS & AÇÕES</a>
</div>

## Criar ação addProject

* Abra o editor de projeto e vá para a seção Ação.

* Adicione uma Ação addProject

![create addProject Method](assets/en/relations/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## Método On Mobile App Action

A única coisa que precisa fazer é definir a ação **addProject** no método **On Mobile App Action** como abaixo :

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


Agora entre estas linhas em seu método **addProject**:

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False) If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //Cria uma referência

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //Obtém a chave primária pai

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //Obtém o nome de relação pai

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //salva a entidade

    $out.success:=True  // notififca o App que a ação teve sucesso

    $out.dataSynchro:=True  // notifica o App para refrescar a seleção

    $out.statusText:="Task added"

    $out.close:=True Else 

    $out.errors:=New collection("No Selection") End if 

$0:=$out

```

E isso é tudo, agora pode adicionar uma tarefa para seus funcionários facilmente usando a Entity pai!

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip">PROJETO FINAL- UM PARA MUITOS & AÇÕES</a>
</div>
