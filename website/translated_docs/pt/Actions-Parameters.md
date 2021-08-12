---
id: action-parameters
title: Usar parâmetros de ação
---

> **OBJETIVOS**
> 
> Define parâmetros ação para editar o conteúdo de sua aplicação.

No [tutorial anterior](define-first-action.html), mostramos como executar código 4D desde um app iOS ao definir ações na seção [Actions ](actions.html).

Neste tutorial vamos nos aprofundar mais e criar:

* uma ação de adição para **criar uma nova tarefa**,
* uma ação de edição que lhe permitirá **editar as tarefas existentes** desde a aplicação iOS,
* uma ação de eliminação para **eliminar uma entidade**, e
* uma ação que lhe permitirá **enviar um comentário por correio eletrônico para uma tarefa específica**.

Para começar, primeiro descarregamos  **Projeto Starter** baseado em nossa aplicação iOS Tasks.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">PROJETO STARTER</a>
</div>

## PASSO 1. Ação de Adicionar

Comecemos por uma tarefa simples. Abra o projeto móvel Tasks e vá diretamente a **seção Actions**.

![Action section](assets/en/actions/Actions-section.png)

Está bastante vazio por enquanto... Issoé o que queremos: **criar uma nova tarefa desde a aplicação iOS**.

Para isto, criamos uma ação utilizando uma ação preestabelecida **Agregar**:

* Clique na flecha no **botão +**, na parte inferior da tabela Ações.
* Selecione a opção **ação de adicionar**.
* Seleccione a **tabela Task**.

![Add action creation](assets/en/actions/Add-action-creation.png)

* É mostrada uma **nova ação** chamada *"addTasks"* com *"Add..."* como etiqueta predeterminada.
* Todos os **parâmetros**disponíveis e suas **propriedades** são mostrados na seção **Parâmetros das ações**.

![Add action parameters](assets/en/actions/Add-action-parameters.png)

Neste ponto, todos os **parâmetros das ações de adição** são criados automaticamente e estão prontos para serem usados.

## PASSO 2. Ação Editar

Agora criamos uma ação que lhe permitirá **editar o conteúdo de sua aplicação**.

Para isso, criamos uma ação utilizando uma ação preestabelecida de **edição**:

* Clique na flecha no **botão +**, na parte inferior da tabela Ações.
* Selecione a opção **ação de edição**.
* Selecione a tabela Tasks.

![Edit action creation](assets/en/actions/Edit-action-creation.png)

Neste ponto verá:

* É mostrada **uma nova ação** chamada *"editTasks"* com*"Add..."* como etiqueta predeterminada.
* Todos os **parâmetros**disponíveis e suas **propriedades** são mostradas na seção **Parâmetros das ações**.


![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

No se preocupe, manejaremos o código 4D para estas ações mais adiante. :-)

## PASSO 3. Ação de eliminação

O processo de criação da ação predefinida **Eliminar** é quase o mesmo da ação Editar:

* Clique na flecha no **botão +**, na parte inferior da tabela Ações.
* Selecione a opção **ação de eliminação**.
* Selecione a tabela Tasks.

![Delete action creation](assets/en/actions/Delete-action-creation.png)

Neste ponto, verá uma **nova ação** chamada *"deleteTasks"* com *"Remove"* como a etiqueta predeterminada.

![Ação de eliminação](assets/en/actions/Delete-action-final.png)

Não necessita preocupar-se pelos parâmetros ou propriedades deste tipo de ação.

## PASSO 4. Ação de envio de comentário

Agora queremos **enviar um comentário** a um **correio eletrônico específico** dependendo de uma tarefa específica. Para fazer isso, clique no botão+ e crie uma nova ação chamada **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Agora vamos criar três parâmetros:

* Clique no botão + e selecione **Title** na lista de parâmetros das ações, para incluí-lo no correio eletrônico que vai enviar.
* Cria um parâmetro **Comment** e seleciona o formato Área de texto.
* Crie um parâmetro **email** e selecione o formato Email address.

Sua seção Actions deveria parecer com isto:

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## PASSO 5. Criação de On Mobile App Action

Como é descrito em [documentação](actions.html), clique no botão Criar para criar o método banco *On Mobile App Action*.

Todas suas ações se incluirão automaticamente no método banco.

O único que deve fazer é agregar uma referência a seus métodos para os cenários que quiser manejar.

Aqui o método banco de dados *On Mobile App Action* final:

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request) C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // Informação oferecida pela aplicação móvel

$context:=$request.context
$parameters:=$request.parameters

        Case of 

    : ($request.action="addTasks")

          // Inserir aqui o código para a ação "Add…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // Inserir aqui o código para a ação "Edit…"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Inserir aqui o código para a ação "Remove"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Inserir aqui o código para a ação "Send Comment"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // Ação desconhecida

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Inserir aqui o código para a ação "Remove"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Inserir aqui o código para a ação "Send Comment"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // Ação desconhecida
End case 

$0:=$result

```

## PASSO 6. Criação de todos os métodos necessários


### addAction

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($entity;$in;$out)

$in:=$1

$out:=New object("success";False) If ($in.dataClass#Null)

    $entity:=ds.Tasks.new()  //cria uma referência

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $entity.save()  //salva a entidade


    $out.success:=True  // notifica o App que a ação teve sucesso
    $out.dataSynchro:=True  // notificar o App para refrescar a seleção
    $out.statusText:="Task added" Else 

    $out.errors:=New collection("No Selection") End if 

$0:=$out


```

### editAction

```4d
C_OBJECT($0)
C_OBJECT($1) C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID)) If ($selection.length=1)

    $entity:=$selection[0]

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $status:=$entity.save()

    $out:=New object

    If ($status.success)

        $out.success:=True  // notificar o App que a ação teve sucesso
        $out.dataSynchro:=True  // notificar o App para refrescar esta entidade
        $out.statusText:="Task edited"

    Else 

        $out:=$status  // devolver o estado do App

    End if Else 

    $out.success:=False  // notificar o App que a ação falhou End if 

$0:=$out


```

### deleteAction

```4d

C_OBJECT($0)
C_OBJECT($1) C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID)) If ($selection.length=1)

    $entity:=$selection.drop()

    $out:=New object

    If ($entity.length=0)

        $out.success:=True  // notificar o App que a ação teve sucesso
        $out.dataSynchro:=True  // notificar o App para refrescar esta entidade
        $out.statusText:="Task deleted"

    Else 

        $out:=$status  // devolver estado do App

    End if Else 

    $out.success:=False  // notificar o App que a ação falhou End if 

$0:=$out


```

### sendEmail


```4d
C_OBJECT($0;$out)
C_OBJECT($1;$in) C_OBJECT($dataClass;$entity;$selection)

$in:=$1

$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID)) If ($selection.length=1)

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
        $out.success:=True  // notificar o App que a ação teve sucesso
        $out.statusText:="Mail sent"

    Else 
        $out.success:=False  // notificar o App que a ação falhou
        $out.statusText:="Mail not sent"

    End if Else 

    $out.success:=False  // notificar o App que a ção falhou


```

Não esqueça de agregar seus próprios valores para a ação **sendEmail**.



## PASSO 7. Criação da aplicação


É hora de gerar sua aplicação!

Agora, se clicar no botão Ação da barra de navegação, poderá **criar uma nova tarefa**.

![Create new task](assets/en/actions/Action-parameters-addAction.png)

Se manter a pressão sobre sua nova célula de tarefas no Formulário Lista, se mostrará uma ação **Editar...** na lista de ações.

![Edit task](assets/en/actions/Action-parameters-editAction.png)

Envie um comentário utilizando a ação **Send comment**.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

e finalmente pode eliminar uma entidade utilizando a ação **Eliminar... **.

![Delete task](assets/en/actions/Action-parameters-deleteAction.png)

## PASSO 8. Que fazer agora?

Parabéns! Sua aplicação iOS Tasks agora está completa e agora pode modificar os dados de sua aplicação diretamente desde seu dispositivo e sincronizá-los com seu servidor.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip">PROJETO FINAL</a>
</div>

