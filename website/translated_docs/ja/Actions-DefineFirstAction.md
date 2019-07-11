---
id: define-first-action
title: はじめてのアクション
---

このレッスンでは，タスクの**チェックリスト**アプリを例に，ユーザーのアクションを処理する方法を習得します。

**チェックリスト**アプリの基本的な目的は，各タスクの**ステータス**と**進み具合（パーセンテージ）**を更新することである，と定義できます。

さらに，全部のタスクを「延期」あるいは「進行中」といったステータスに**まとめて更新**できれば便利です。

ダウンロードした**素材プロジェクト**を開き，「**アクション**」セクションに移動してください。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/actions/TasksActionStarter.zip">素材プロジェクト</a>

  </p>
</div>

[アクションのドキュメント](actions.html#ios-app-side)で説明されていたように，アクションは下記いずれかのレベルに対して設定することができます。

* エンティティに対するアクション
* テーブルに対するアクション

まずはエンティティに対するアクションから始めましょう！

## エンティティアクション

### ⒈ 「アクション」セクションで設定すること

「アクション」画面では，アクションの**名前**・**アイコン**・**ラベル**およびアクションの対象となる**テーブル**と**スコープ**をまとめて設定することができます。

当然，何も設定されていないので，画面はまだ空です。最初のアクションを作成するために**追加ボタン** をクリックしましょう！

![アクションの追加](assets/en/actions/Create-action.png)

タスクの**ステータス** to "完了" に設定すると同時に**進み具合（パーセンテージ）**を100%に更新するアクションを作成しましょう。

下記のステップで実現することができます。

* **名前**フィールドに「**taskDone**」と入力します。
* アイコンライブラリから**完了アイコン**を選択します。
* **短いラベル**に「**完了**」と入力します。
* **長いラベル**に「**完了に設定する**」と入力します。
* **テーブル**のリストから**Tasks**テーブルを選択します。
* **スコープ**のリストから「**カレントレコード**」を選択します。

![完了アクションの設定](assets/en/actions/Done-action-definition.png)

### ⒉ データベースメソッドの作成と編集

プロジェクトエディターに必要な情報を入力しました。続けて[**On Mobile App Action**](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html)データベースメソッドを作成しましょう。

アクション画面の右下にある**作成ボタン**をクリックします。**On Mobile App Action**データベースメソッドに下記のコードを記述してください。

    <br />C_OBJECT($0)
    C_OBJECT($1)
    
    C_OBJECT($o;$context;$request;$result)
    
    $request:=$1  // モバイルアプリから送られた情報
    
    $context:=$request.context
    
    Case of
    
        : ($request.action="taskDone")
    
            $o:=New object(\
            "dataClass";$context.dataClass;\
            "ID";$context.entity.primaryKey;\
            "CompletePercentage";100)
    
            $result:=modifyStatus ($o)
    
        Else
    
              // Unknown request
            $result:=New object("success";False)
    
    End case
    
    $0:=$result  // モバイルアプリに返される情報
    
    

### ⒊ "modifyStatus" メソッドの作成

データベースメソッドに必要なコードを記述することに加え，実際の処理をするための **modifyStatus** プロジェクトメソッドを作成します。

    <br />C_OBJECT($0)
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
    
            $out.success:=True  // アクションの成功を通知
            $out.dataSynchro:=True  // セレクションの更新を要求
    
        Else
    
            $out:=$status  // モバイルアプリに返される情報
    
        End if
    
    Else
    
        $out.success:=False  // アクションの失敗を通知
    
    End if
    
    $0:=$out
    
    
    

アプリをビルドして実行しましょう！ **完了アクション**は，リスト画面のセルを左にスワイプ，あるいは詳細画面のナビゲーションバーに表示されている**「…」ボタン**をタップすると表示されます。

![完了アクション](assets/en/actions/Entity-action-Done.png)

## テーブルアクション

### ⒈ 「アクション」セクションで設定すること

Now, imagine that you are going on holidays and you want to **change all your tasks status** to "Postponed".

下記のステップで実現することができます。

* **名前**フィールドに「**postponeAll**」と入力します。
* アイコンライブラリから**延期アイコン**を選択します。
* **短いラベル**に「**すべて延期**」と入力します。
* **長いラベル**に「**すべてを延期に設定する**」と入力します。
* **テーブル**のリストから**Tasks**テーブルを選択します。
* **スコープ**のリストから**テーブル** を選択します。

![延期アクションの設定](assets/en/actions/PostponedAll-action-definition.png)

### ⒉ データベースメソッドの編集

アクション一覧の右下にある**編集**ボタンをクリックして**On Mobile App Action**データベースメソッドを開き，必要な処理をメソッドに追加します。

    <br />C_OBJECT($0)
    C_OBJECT($1)
    
    C_OBJECT($o;$context;$request;$result)
    
    $request:=$1  // モバイルアプリから送られた情報
    
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
    
              // Unknown request
            $result:=New object("success";False)
    
    End case
    
    $0:=$result  // モバイルアプリに返される情報
    
    
    

### ⒊ "postponeAll" メソッドの作成

**modifyStatus** メソッドと同じ要領で, タスクのステータスを一括設定する**postponeAll** プロジェクトメソッドを作成します。

    <br />C_OBJECT($0)
    C_OBJECT($1)
    
    C_OBJECT($entity;$in;$out)
    
    $in:=$1
    
    $out:=New object("success";False)
    
    If ($in.dataClass#Null)
    
        For each ($entity;ds[$in.dataClass].all())
    
            $entity.Status:=$in.Status
            $entity.save()
    
        End for each
    
        $out.success:=True  // アクションの成功を通知
        $out.dataSynchro:=True  // セレクションの更新を要求
    
    Else
    
        $out.errors:=New collection("No Selection")
    
    End if
    
    $0:=$out
    
    

アプリをビルドして実行しましょう！ リスト画面のナビゲーションバーに新しい**「…」ボタン**が表示されていることに注目してください。 ボタンをタップして**すべて延期**アクションを実行しましょう。

![延期アクション（完成）](assets/en/actions/ListForm-table-action-tableview-tuto.png)

## これからどうする？

おつかれさまでした！ iOSアプリに２種類のアクションが追加できました。この調子で必要なすべてのアクションを開発することができますね！

![まとめて設定アクション（完成）](assets/en/actions/ListForm-entity-action-tableview.png)

すべてのアクションが設定された**完成プロジェクト**は下記からダウンロードすることができます。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/actions/TasksActionFinal.zip">完成プロジェクト</a>

  </p>
</div>