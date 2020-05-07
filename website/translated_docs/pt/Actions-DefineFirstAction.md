---
id: define-first-action
title: Definir sua primeira ação
---

Neste tutorial, vamos trabalhar em um app **Tasks iOS ** e ver como lidar com ações nesse app.

O que queremos fazer em um app **Task** é mudar o **status** e a **percentagem de conclusão** de uma tarefa individual.

Globalmente queremos **mudar todos os status de tarefas status** para, por exemplo, adiada ou Em Progresso.

Baixe o projeto **Starter project** e vá para **seção Ações**.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip">PROJETO STARTER</a>

  </p>
</div>

Como vimos antes em [documentação de Ações](actions.html#ios-app-side), é possível definir ações em dois níveis:

* Ações de entidade
* Ações de Tabela

Primeiro vamos ver ações de Entidade!

## Ações de entidade

### PASSO 1. Ações de entidade na seção Ação

Nesta seção de Ação, podemos definir todas as suas ações **nomes**, **ícones**, **etiquetas**, a **tabela** na qual quiser que a ação esteja disponível e o **escopo** que quiser que as ações sejam aplicadas.

Quando abrir a seção Ação pela primeira vez, ela estará bem vazia. Clique no botão **Plus** no canto inferior esquerdo para adicionar sua primeira ação!

![Create action](assets/en/actions/Create-action.png)

Vamos definir primeiro uma ação que vai **mudar o status de uma tarefa** para "Completo" e estabelecer a **porcentagem de conclusão** para 100%.

Para definir essa ação:

* Digite **taskDone** em **Names field**
* Selecione o ícone **Done** a partir da biblioteca ícone
* Digite**Done** em **Short Labels**
* Digite**Task Done** no campo **Etiquetas longas**
* Selecione a tabela **Tasks** a partir da lista **Tables**
* Selecione **Registro atual** da lista **Escopo**

![Done action definition](assets/en/actions/Done-action-definition.png)

### PASSO 2. Criar e editar o método Action Database

Agora que sua ação foi definida no Editor de Projeto, é preciso criar o método de banco de dados [**On Mobile App Action**](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html).

Para fazer isso, clique no botão **Criar** no canto direito inferior da tabela de ações e digite o código abaixo no método de banco de dados **On Mobile App Action**:

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($o;$context;$request;$result)

$request:=$1  // Informações fornecidas pela aplicação móvel

$context:=$request.context

Case of

    : ($request.action="taskDone")

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "CompletePercentage";100)

        $result:=modifyStatus ($o)

    Else

          // Petição desconhecida
        $result:=New object("success";False)

End case

$0:=$result  // Informações retornadas para a aplicação móvel

```

### PASSO 3. Criar um método "modifyStatus"

Quando seu método de banco de dados tiver sido editado, tem que criar um Método **modifyStatus** que vai fazer o trabalho :

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

        $out.success:=True  // notifique o App que a ação teve sucesso
        $out.dataSynchro:=True  // notifique App para refrescar esta entidade

    Else

        $out:=$status  // retorna o  status para o  App

    End if

Else

    $out.success:=False  // notifique o App que a ação fracassou

End if

$0:=$out

```

Crie e Execute seu app e pronto! Sua ação **Done** está disponível quando você deslizar para a esquerda uma célula em Listform, assim como quando clicar no botão **ação genérica** na barra de navegação do formulário Detalhado.

![Done action](assets/en/actions/Entity-action-Done.png)

## Ações de Tabela

### PASSO 1. Ações de Tabela na seção Ações

Agora imagine que vai sair de férias e quer **mudar todos os estados de tarefas para** "Adiado".

Vamos definir esta ação a partir da seção Ações

* Entre **postponeAll** no campo**Nomes **
* Selecione o ícone **Postponed** (adiado) a partir da biblioteca de ícones
* Digite**Postpone All** no campo **Etiquetas Curtas**
* Digite**Postpone All** no campo **Etiquetas Longas**
* Selecione a tabela **Tasks** a partir da lista **Tables**
* Selecione **Tabela** a partir da lista **Escopo**

![Postponed action definition](assets/en/actions/PostponedAll-action-definition.png)

### PASSO 2. Modificar o método Ação

Clique no botão **Editar** na parte inferior direita da tabela ação para completar o método de banco de dados **On Mobile App Action**:

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($o;$context;$request;$result)

$request:=$1  // Informações fornecida por aplicação móvel

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

          // Petição desconhecida
        $result:=New object("success";False)

End case

$0:=$result  // Informações retornadas para aplicação móvel

```

### PASSO 3. Criar um método "postponeAll"

A medida que cria o método **modifyStatus**, siga o mesmo processo e crie um novo método **postponeAll** que vai modificar os estados de todos os registros:

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

    $out.success:=True  // notificar o App que a ação teve sucesso
    $out.dataSynchro:=True  // notificar o App para renovar a seleção

Else

    $out.errors:=New collection("No Selection")

End if

$0:=$out

```

Criar e Executar seu app! Você vai achar um novo **botão genérico** na barra de navegação de seu formulário Lista. Clique nele para ativar a ação **Postpone All**

![Final result Postponed Action](assets/en/actions/ListForm-table-action-tableview-tuto.png)

## O que fazer agora?

Parabéns! Você adicionou duas ações para seu app iOS. Agora pode adicionar todas as ações que quiser para seu app Tasks!

![Final result All Action](assets/en/actions/ListForm-entity-action-tableview.png)

Pode baixar o **projeto Final** que inclui várias ações:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-Actions/releases/latest/download/tutorial-Actions.zip">PROJETO FINAL</a>

  </p>
</div>