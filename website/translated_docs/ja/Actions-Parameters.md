---
id: action-parameters
title: アクションパラメーターを使用する
---

<div class = "objectives">
**OBJECTIVES**
Define action parameters to edit the content of your app.</div>


ひとつ前の[レッスン](define-first-action.html)では， 「[アクション](actions.html)」セクションでアクションを定義することにより，iOSアプリ側から4Dメソッドを呼び出す方法を学びました。

このレッスンでは，下記のようなアクションを作成する方法を習得します。

* 新規タスクを**追加**する
* 既存タスクを**編集**する
* 既存タスクを**削除**する
* 特定のタスクに関連したメッセージを**メールで送信**する

**スタータープロジェクト**をダウンロードしてください。ここまでのレッスンで作成したチェックリストのアプリがベースになっています。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip">素材プロジェクト</a>
  </p>
</div>

## ⒈ Add action

まずひとつのアクションを追加するところから始めましょう。 モバイルアプリのプロジェクトを開き，**アクション**セクションに移動します。

![Action section](assets/en/actions/Actions-section.png)

この時点では，すべての項目が空です。 **iOS アプリで新規タスクを追加する**アクションを作成することに取り掛かりましょう。

プリセットの**レコード追加**アクションを使用して，新規アクションを作成します。

* アクションリストの下側にある**＋ボタン**の三角部分をクリックします。
* **レコード追加**オプションを選択します。
* **Task**テーブルを選択します。

![追加アクションの作成](assets/en/actions/Add-action-creation.png)

* *"addTasks"* という名称で*"Add..."* というデフォルトのラベルタイトルが設定された**新規アクション**が表示されます。
* 追加アクションに必要な**パラメーター**および**プロパティ**が**アクション引数**エリアに表示されます。

![追加アクションのパラメーター](assets/en/actions/Add-action-parameters.png)

追加アクションに必要な**パラメーター**は，すべて揃っているので，これで設定は完了です。

## ⒉ Edit action

今度は，**iOS アプリで既存タスクを編集する**アクションを作成してみましょう。

プリセットの**レコード編集**アクションを使用して，新規アクションを作成します。

* アクションリストの下側にある**＋ボタン**の三角部分をクリックします。
* **レコード編集**オプションを選択します。
* Taskテーブルを選択します。

![編集アクションの作成](assets/en/actions/Edit-action-creation.png)

この時点で，下記のようになっているはずです。

* *"editTasks"* という名称で*"Edit..."* というデフォルトのラベルタイトルが設定された**新規アクション**が表示されています。
* 編集アクションに必要な**パラメーター**および**プロパティ**が**アクション引数**エリアに表示されています。


![編集アクションのパラメーター](assets/en/actions/Edit-action-parameters.png)

アクションを実行するために必要なメソッドは，後から作成します。 今はプロジェクトエディターの作業に専念しましょう。

## ⒊ Delete action

プリセットの**レコード削除**アクションは，編集アクションとほとんど一緒です。

* アクションリストの下側にある**＋ボタン**の三角部分をクリックします。
* **レコード削除**オプションを選択します。
* Taskテーブルを選択します。

![追加アクションの作成](assets/en/actions/Delete-action-creation.png)

*"Remove"* という名称で*"deleteTasks"* というデフォルトのラベルタイトルが設定された**新規アクション**が表示されます。

![Delete action](assets/en/actions/Delete-action-final.png)

削除アクションは，パラメーターやプロパティが不要です。

## ⒋ コメント送信アクション

選択したタスクに対して入力されたコメントを**特定のアドレス**に**メール送信する**アクションを作成しましょう。 ＋ボタンをクリックし，**sendComment**という名称の新規アクションを作成します。

![追加アクションの作成](assets/en/actions/Send-comment-action-creation.png)

作成したアクションに対し，３個のパラメーター（引数）を定義します。

* ＋ボタンの三角部分をクリックし，アクションパラメーターのリストから**Title**を選択します。送信するメールにタスク名を含めるためです。
* ＋ボタンをクリックし，**Comment**パラメーターを作成します。フォーマットは「テキスト」です。
* 同じ要領で**email**パラメーターを追加し，フォーマットは「メールアドレス」に設定します。

アクションの定義は下図のようになっているはずです。

![送信アクションの作成](assets/en/actions/Send-comment-action-definition.png)

## ⒌ On Mobile App Action メソッド

*On Mobile App Action* データベースメソッドを作成するには，[documentation](actions.html) に述べられているように, 「作成」ボタンをクリックします。

プロジェクトエディターで定義したアクションの名称が自動的に挿入されています。

アクションに応じた処理を追加して，メソッドを完成させましょう。

*On Mobile App Action* データベースメソッドの内容は，下記のようになります。

```4d
C_OBJECT($0;$response)
C_OBJECT($1;$request)

C_OBJECT($o;$context;$request;$result;$parameters)

$request:=$1  // モバイルアプリから受け取った情報

$context:=$request.context
$parameters:=$request.parameters

Case of 

    : ($request.action="addTasks")

          // ここに "Add…" アクションのコードを記述

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "parameters";$parameters)

        $result:=addAction ($o)

    : ($request.action="editTasks")

          // ここに "Edit…" アクションのコードを記述

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)

        $result:=editAction ($o)


    : ($request.action="deleteTasks")

          // ここに "Remove" アクションのコードを記述

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey)

        $result:=deleteAction ($o)

    : ($request.action="sendComment")

          // ここに "Send Comment" アクションのコードを記述

        $o:=New object(\
        "dataClass";$context.dataClass;\
        "ID";$context.entity.primaryKey;\
        "parameters";$parameters)


        $result:=sendMail ($o)

    Else 

          // 未知のアクション

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

    $entity:=ds.Tasks.new()  //新規エンティティの参照を作成

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $entity.save()  //エンティティを保存


    $out.success:=True  // アクションが成功したことをアプリに通知
    $out.dataSynchro:=True  // エンティティセレクションのリロードを要求
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

**sendEmail** アクションで実行されるコードは，ご利用のメールサーバーに合わせて値を変更してください。



## ⒎ アプリをビルドする


あとは，アプリをビルドするだけです！

ナビゲーションバーのアクションボタンをクリックすると，**新規タスクを作成する**ことができます。

![タスクの追加](assets/en/actions/Action-parameters-addAction.png)

作成したタスクが表示されたセルをリスト画面上で長押しすると，アクションリストが表示され，**Edit...**アクションを選択することができます。

![タスクの編集](assets/en/actions/Action-parameters-editAction.png)

**Send comment**アクションでメッセージを送信することもできます。

![メッセージを送信する](assets/en/actions/Action-parameters-sendComment.png)

**Delete...**アクションでエンティティを削除することができます。

![タスクの削除](assets/en/actions/Action-parameters-deleteAction.png)

## ⒏ これからどうする？

Congratulations! これでチェックリストのiOSアプリが完成しました！デバイス上で直接データを変更することができ，更新した内容は，サーバーとシンクロさせることができます！

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p spaces-before="0">
    <a class="button"
href="https://github.com/4d-for-ios/tutorial-ActionParameters/archive/0.0.1.zip">完成プロジェクト</a>
  </p>
</div>

