---
id: define-first-action
title: Defining your first action
---
In this tutorial, we are going to work on a **Tasks iOS app** and see how to deal with actions in this app.

Basically what we want to do in a **Task app** is changing the **status** and the **percentage of completion** of a task individually.

More globally, we want to **change all tasks status** to postponed or in Progress for example.

Download the **Starter project** and go right to the **Actions section**.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/actions/TasksActionStarter.zip">STARTER PROJECT</a>

  </p>
</div>

As we've seen before in the [Action section documentation](actions.html#ios-app-side), you can define action for two levels:

* Entity actions
* Table actions

Let's focus first on Entity actions

## Entity actions

### STEP 1. Entity action in Action section

In this Actions section, you will be able to define all your actions **names**, **icons**, **labels**, the **table** you want the action to be available in and the **scope** you want actions to be applied on.

The action section is quite empty when you open it for the first time, so click the **Plus button** at the bottom left to add your first action!

![Create action](assets/en/actions/Create-action.png)

Let's define first an action that will **change a task status** to "Complete" and put the **percentage of completion** to 100%.

To define this action:

* Enter **Done** in **Names field**
* Select the **Done icon** from the icon library
* Enter **Done** in **Short Labels**
* Enter **Task Done** in **Long Labels**
* Select the **Tasks** table from **Tables** list
* Select **Current record** from **Scope** list

![Done action definition](assets/en/actions/Done-action-definition.png)

### STEP 2. Create and edit the Action method

Now that your action is defined in the Project Editor, you have to create the [**On Mobile App Action**]() database Method.

Do to so, click on **Create button** at the bottom right of the action table and enter the following code in the **On Mobile App Action** database method:

    C_OBJECT($Obj_result;$Obj_in;$Obj_;$Obj_param)
    
    $Obj_in:=$1
    
    $Obj_param:=$Obj_in.parameters
    
    Case of 
    
    : ($Obj_in.action="Done")
        $Obj_:=New object(\
        "dataClass";$Obj_param.dataClass;\
        "ID";$Obj_param.entity.primaryKey;\
        "CompletePercentage";100)
    
        $Obj_result:=ModifyStatus ($Obj_)
    
        Else 
    
    End case 
    
    $0:=$Obj_result
    
    

### STEP 3. Create a "Modify Status" Method

Once your database method has been edited, you have to create a **Modify Status Method** that will make the job :

    C_OBJECT($Obj_in;$Obj_out;$selection;$record;$status)
    
    $Obj_in:=$1
    
    $Obj_out:=New object("success";False)
    
    $Obj_dataClass:=ds[$Obj_in.dataClass]
    
    $selection:=$Obj_dataClass.query("ID="+String($Obj_in.ID))
    
    $record:=$selection.first()
    
    $record.CompletePercentage:=$Obj_in.CompletePercentage
    
    Case of 
    
        : ($Obj_in.CompletePercentage=100)
            $record.Status:=3
    
        : ($Obj_in.CompletePercentage=0)
            $record.Status:=1
    
        Else 
    
    End case 
    
    $status:=$record.save()
    
    If ($status.success)
    
        $Obj_out.success:=True
    
        $Obj_out.dataSynchro:=True
    
    Else 
    
        $Obj_out:=$status
    
    End if 
    
    $0:=$Obj_out
    
    

Build and Run you app and voila! Your **Done action** is available when you swipe left a cell in Listform as well as when you click on the **generic action button** in the navigation bar of the Detail form.

![Done action](assets/en/actions/Entity-action-Done.png)

## Table actions

### STEP 1. Table action in Action section

Now, imagine that you are going on hollidays and you want to **change all your tasks status** to "Postponed".

Let's define this action from the Action section:

* Enter **Postponed All** in **Names field**
* Select the **Postponed icon** from the icon library
* Enter **Postponed All** in **Short Labels**
* Enter **Postponed All** in **Long Labels**
* Select the **Tasks** table from **Tables** list
* Select **Table** from **Scope** list

![Postponed action definition](assets/en/actions/PostponedAll-action-definition.png)

### STEP 2. Edit the Action method

Clic on **Edit button** at the bottom right of the action table to complete the **On Mobile App Action** database method :

    C_OBJECT($Obj_result;$Obj_in;$Obj_;$Obj_param)
    
    $Obj_in:=$1
    
    $Obj_param:=$Obj_in.parameters
    
    Case of 
    
        : ($Obj_in.action="Done")
            $Obj_:=New object(\
            "dataClass";$Obj_param.dataClass;\
            "ID";$Obj_param.entity.primaryKey;\
            "CompletePercentage";100)
    
            $Obj_result:=ModifyStatus ($Obj_)
    
        : ($Obj_in.action="PostponedAll")
            $Obj_:=New object(\
            "dataClass";$Obj_param.dataClass)
    
            $Obj_result:=PostponedAll ($Obj_)
            $Obj_result.dataSynchro:=True
    
        Else 
    
    End case 
    $0:=$Obj_result
    
    

### STEP 3. Create a "Postponed All" Method

As you create the **Modify status** method, follow the same process and create a new **PostponedAll** method that will modify all record status:

    C_OBJECT($Obj_in;$Obj_out;$selection;$record;$status)
    
    $Obj_in:=$1
    
    $Obj_out:=New object("success";False)
    
    If ($1.dataClass#Null)
    
        For each ($entity;ds[$1.dataClass].all())
    
            $entity.Status:=4
            $entity.save()
    
        End for each 
    
    Else 
    
        $Obj_out.errors:=New collection("No Selection")
    
    End if 
    
    $0:=$Obj_out
    
    

Build and Run your app! You will find a new **generic button** in the navigation bar of your Lisform. Clic on it to access to the **Postponed All action**.

![Final result Postponed Action](assets/en/actions/ListForm-table-action-tableview.png)

## Where to Go From Here?

Congratulations! You've just added 2 actions to your iOS app. You are now able to add all actions you need to your Tasks app!

![Final result All Action](assets/en/actions/ListForm-entity-action-tableview.png)

You can download the **Final project** that includes various actions:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/actions/TasksActionFinal.zip">FINAL PROJECT</a>

  </p>
</div>