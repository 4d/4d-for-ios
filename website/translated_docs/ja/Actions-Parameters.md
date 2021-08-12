---
id: action-parameters
title: アクションパラメーターを使用する
---

> **OBJECTIVES**
> 
> Define action parameters to edit the content of your app.


In the [previous tutorial](define-first-action.html), we discovered how to execute 4D code from an iOS app by defining actions from the [Actions section](actions.html).

In this tutorial, we're going to go further and create:

* 新規タスクを**追加**する
* 既存タスクを**編集**する
* 既存タスクを**削除**する
* 特定のタスクに関連したメッセージを**メールで送信**する

To begin, let's first download the **Starter Project** based on our existing Tasks iOS app.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">素材プロジェクト</a>
</div>

## ⒈ ⒈ Add action

Let's begin simple. Open the Tasks mobile project and go directly to the **Actions section**.

![Action section](assets/en/actions/Actions-section.png)

It's quite empty for the moment... Here is what we want: **create a new task from the iOS app**.

For this, let's create an action using a preset **Add** action:

* アクションリストの下側にある**＋ボタン**の三角部分をクリックします。
* **レコード追加**オプションを選択します。
* **Task**テーブルを選択します。

![Add action creation](assets/en/actions/Add-action-creation.png)

* *"addTasks"* という名称で*"Add..."* というデフォルトのラベルタイトルが設定された**新規アクション**が表示されます。
* 追加アクションに必要な**パラメーター**および**プロパティ**が**アクション引数**エリアに表示されます。

![Add action parameters](assets/en/actions/Add-action-parameters.png)

At this point, all **Add action parameters** are created automatically and ready to use.

## ⒉ ⒉ Edit action

Now let's create an action that will allow you to **edit your app content**.

For this, we'll create an action using a preset **Edit** action:

* アクションリストの下側にある**＋ボタン**の三角部分をクリックします。
* **レコード編集**オプションを選択します。
* Taskテーブルを選択します。

![Edit action creation](assets/en/actions/Edit-action-creation.png)

At this point, you will see:

* *"editTasks"* という名称で*"Edit..."* というデフォルトのラベルタイトルが設定された**新規アクション**が表示されています。
* 編集アクションに必要な**パラメーター**および**プロパティ**が**アクション引数**エリアに表示されています。


![Edit action parameters](assets/en/actions/Edit-action-parameters.png)

Don't worry, we'll handle the 4D code for these actions later. :-)

## ⒊ ⒊ Delete action

The preset **Delete** action creation process is nearly the same as the Edit action:

* アクションリストの下側にある**＋ボタン**の三角部分をクリックします。
* **レコード削除**オプションを選択します。
* Taskテーブルを選択します。

![Delete action creation](assets/en/actions/Delete-action-creation.png)

At this point, you will see a **new action** named *"deleteTasks"* with *"Remove"* as the default label.

![⒊ Delete action](assets/en/actions/Delete-action-final.png)

You don't need to worry about parameters or properties for this type of action.

## ⒋ ⒋ コメント送信アクション

Now we want to **send a comment** to a **specific email** depending on a specific task. To do so, click on the + button and create a new action named **sendComment**.

![Delete action creation](assets/en/actions/Send-comment-action-creation.png)

Now let's create three parameters:

* ＋ボタンの三角部分をクリックし，アクションパラメーターのリストから**Title**を選択します。 送信するメールにタスク名を含めるためです。
* ＋ボタンをクリックし，**Comment**パラメーターを作成します。 フォーマットは「テキスト」です。
* 同じ要領で**email**パラメーターを追加し，フォーマットは「メールアドレス」に設定します。

Your Actions section should look like this:

![Send comment action creation](assets/en/actions/Send-comment-action-definition.png)

## ⒌ On Mobile App Action メソッド

As described in the [documentation](actions.html), click on the Create button to create the *On Mobile App Action* database method.

All of your actions will automatically be included in this database method.

The only thing you need to do is add a reference to your method(s) for the scenario(s) your want to handle.

Here's the final *On Mobile App Action* database method:

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request)

C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // Informations provided by mobile application

$context:=$request.context
$parameters:=$request.parameters

Case of 

    : ($request.action="addTasks")

          // Insert here the code for the action "Add…

        "

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // Insert here the code for the action "Edit…

        "

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // Insert here the code for the action "Remove"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // Insert here the code for the action "Send Comment"

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // Unknown action

End case 

$0:=$result

```

## ⒍ アクションメソッドを作成する


### addAction

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1

$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds.C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1

$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds.Tasks.new()  //create a reference

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $entity.save()  //save the entity


    $out.success:=True  // notify App that action success
    $out.dataSynchro:=True  // notify App to refresh the selection
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

        $out.success:=True  // アクションが成功したことをアプリに通知
        $out.dataSynchro:=True  // エンティティのリロードを要求
        $out.statusText:="Task edited"

    Else 

        $out:=$status  // ステータスをアプリに通知

    End if 

Else 

    $out.success:=False  // アクションが失敗したことをアプリに通知

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

        $out.success:=True  // アクションが成功したことをアプリに通知
        $out.dataSynchro:=True  // エンティティのリロードを要求
        $out.statusText:="Task deleted"

    Else 

        $out:=$status  // ステータスをアプリに通知

    End if 

Else 

    $out.success:=False  // アクションが失敗したことをアプリに通知

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
        $out.success:=True  // アクションが成功したことをアプリに通知
        $out.statusText:="Mail sent"

    Else 
        $out.success:=False  // アクションが失敗したことをアプリに通知
        $out.statusText:="Mail not sent"

    End if 

Else 

    $out.success:=False  // アクションが失敗したことをアプリに通知

End if 

$0:=$out


```

Don't forget to add your own values for the **sendEmail** action.



## ⒎ ⒎ アプリをビルドする


It's time to build your app!

Now, if you click on the Action button in the navigation bar, you'll be able to **create a new task**.

![Create new task](assets/en/actions/Action-parameters-addAction.png)

Holding and maintaining pressure on your new task cell in the List Form, will show that an **Edit...** action is available in the action list.

![Edit task](assets/en/actions/Action-parameters-editAction.png)

Send a comment using the **Send comment** action.

![メッセージを送信する](assets/en/actions/Action-parameters-sendComment.png)

And finally you can delete an entity using the **Delete...** action.

![Delete task](assets/en/actions/Action-parameters-deleteAction.png)

## ⒏ これからどうする？

おつかれさまでした！ Your Tasks iOS app is now complete and you can now modify your app data direclty from your device and sychronize it with your server!

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip">完成プロジェクト</a>
</div>

