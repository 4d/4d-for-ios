---
id: define-first-action
title: Definir sua primeira ação
---

Neste tutorial vamos trabalhar em um app **Tasks iOS** e ver como lidar com ações nesta aplicação.

O que queremos fazer em um app **Task** é mudar o **status** e a **percentagem de finalização** de uma tarefa individual.

Mais geralmente, queremos **mudar o estado de todas as tarefas** para, por exemplo, postergado ou Em Progresso.

Baixe o **Starter project** e vá para a seção **Actions**.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip">PROJETO STARTER</a>
</div>

Como vimos antes em [documentação de Ações](actions.html#ios-app-side), é possível definir ações em dois níveis:

* Ações de entidade
* Ações de Tabela

Primeiro vamos ver ações de Entidade!


## Ações de entidade

### PASSO 1. Ações de entidade na seção Ação

Na seçãoActions, é possível definir todas as suas ações **nomes**, **ícones**, **etiquetas** de suas ações. Assim como as **tabelas** nas quais deseja  que a ação esteja disponível e o **alcance/ escopo** das ações.

A seção Ações começa bastante vazia quando  a abre pela primeira vez, então clique no botão **Plus "+"** na parte inferior esquerda para adicionar sua primeira ação!

![Create action](assets/en/actions/Create-action.png)

Primeiro, vamos definir uma ação que **mudará o estado de uma tarefa** a "Completa" e colocará a **porcentagem de finalização** em 100%.

Para definir essa ação:

* Introduza **taskDone** no campo**Nomes**
* Selecione o ícone **Done** na biblioteca de ícones
* Digite **Done** iem**Etiquetas Curtas**
* Introduza **Task Done** no campo **Etiquetas longas**
* Selecione a tabela **Tasks** da lista **Tabelas**
* Selecione **Registro atual** na lista **Alcance**

![Done action definition](assets/en/actions/Done-action-definition.png)

### PASSO 2. Criar e editar o método Action Database

Agora que sua ação está definida no editor de projetos, deve criar o método banco de dados[ **On Mobile App Action**](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App -Action-database-method.301-4286697.en.html).

Para fazer isso, clique no **botão Criar** na parte inferior direita da tabela de ações e ingresse o código abaixo no método banco de dados **On Mobile App Action**:

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($o;$context;$request;$result)

$request:=$1  // Informações fornecidas pela aplicação móvel

$context:=$request.context Case of

    : ($request.action="taskDone")

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "CompletePercentage";100)

        $result:=modifyStatus ($o)

    Else

          // Petição desconhecida
        $result:=New object("success";False) End case

$0:=$result  // Informações retornadas para a aplicação móvel

```

### PASSO 3. Criar um método  "modifyStatus"

Logo que seu método banco de dados tiver sido editado, deve criar um método **modifyStatus** que  fará o trabalho:

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID)) If ($selection.length=1)

    $entity:=$selection[0]

    $entity. CompletePercentage:=$in. CompletePercentage

    $entity. Status:=3

    $status:=$entity.save()

    $out:=New object

    If ($status.success)

        $out.success:=True  // notificar a App que a ação teve sucesso
        $out.dataSynchro:=True  // notificar a App para recarregar esta entidade

    Else

        $out:=$status  // retorna o estado do App

    End if Else

    $out.success:=False  // notifa o App que a ação fracassou

```

Crie e Execute seu app e pronto! Sua **ação Done ** está disponível quando deslizar uma célula para a esquerda no formulário Lista, ou quando clicar no  **botão genérico Actions** na barra de navegação do formulário detalhado.

![Done action](assets/en/actions/Entity-action-Done.png)

## Ações de Tabela

### PASSO 1. Ações de Tabela na seção Ações

Agora imagine que está de férias e quer **mudar o estado de todas as tarefas para ** "Depois".

Vamos definir esta ação a partir da seção Ações

* Digite **postponeAll** no campo **Nomes**
* Selecione o **ícone "Postponed"** da biblioteca de ícones
* Digite **Postpone All** no campo **Etiquetas curtas**
* Introduza **Postpone All** no campo **Etiquetas longas**
* Selecione a tabela **Tasks** da lista **Tabelas**
* Selecione **Table** da lista **Alcance**

![Postponed action definition](assets/en/actions/PostponedAll-action-definition.png)

### PASSO 2. Modificar o método Ação

Clique no **botão Editar** na parte inferior direita da  tabela ação para completar o método banco de dados **On Mobile App Action**:

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($o;$context;$request;$result)

$request:=$1  // Informações fornecida por aplicação móvel

$context:=$request.context Case of

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
        $result:=New object("success";False) End case

$0:=$result  // Informações retornadas para aplicação móvel

```


### PASSO 3. Criar um método "postponeAll"

A medida em cria o método **modifyStatus** siga o mesmo processo e crie um novo método **postponeAll** que vai modificar o estado de todos os registros:

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($entity;$in;$out)

$in:=$1

$out:=New object("success";False) If ($in.dataClass#Null)

    For each ($entity;ds[$in.dataClass].all())

        $entity. Status:=$in. Status
        $entity.save()

    End for each

    $out.success:=True  // notifique o App que a ação teve sucesso
    $out.dataSynchro:=True  // notifique o App para recarregar a seleção Else

    $out.errors:=New collection("No Selection") End if

$0:=$out

```

Criar e Executar seu app! Encontrará um novo **botão genérico** na barra de navegação de seu formulário Lista. Click nele para ativar a ação**Postpone All**.

![Final result Postponed Action](assets/en/actions/ListForm-table-action-tableview-tuto.png)

## O que fazer agora?

Parabéns! Acaba de agregar 2 ações a sua aplicação iOS. Agora pode agregar todas as ações que precisar à sua aplicação Tasks!

![Final result All Action](assets/en/actions/ListForm-entity-action-tableview.png)

Pode baixar o **Projeto final** que inclui várias ações:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip">PROJETO FINAL</a>
</div>
