---
id: contact-app
title: Contact App
sidebar_label: Contact App
---
<div class = "objectives"> 

**OBJECTIVES**

* Create your first app with 4D for iOS</div> <div class = "prerequisites"> 

**PREREQUISITES**

* Click [here](prerequisites.html) to see what you'll need to get started!</div> 

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## ステップ 1 - 準備

スタータープロジェクトをダウンロードします。これにはデータベースファイルおよびプロジェクトのアイコンが含まれていますが、モバイル プロジェクトはまだ作成されていません。

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactStarter.zip">スターター プロジェクト</a>

  </p>
</div>

## ステップ 2 - プロジェクトの作成

テーブルを一つだけ含んだ、シンプルなストラクチャーから始めましょう。 4D の上部メニューから **新規 > モバイル プロジェクト**を選択します。

プロジェクトに名前を付け、 **作成** をクリックします。

![Project Creation](assets/contact-app/Project-creation-4D-for-iOS.png)

## ステップ 3 - プロジェクト エディターを開く

4D for iOS へようこそ! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

**Continue** をクリックします。

## ステップ 4 - Sections - General

Here, you'll configure your app's primary information:

* **Organization:** Enter the name of your company and the application's identifier (ex. “My Company” and com.MyCompany).
* **Product:** Enter your app's name. Let’s call this one "Contact".
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your app's copyright. It's highly recommended to use the formats provided by 4D for iOS.
* **Icons:** Drag and drop an icon for your app into the icon area.
* **Developer:** This is automatically filled from the user name on your computer. Copy/paste your developer team reference (from your developer account) into the Team field. You can also leave it empty to build your application on the Simulator only.

![General](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## STEP 5. Sections - Structure

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.<div class = "tips"> 

**NOTE**

* We highly recommend publishing your primary key in order to identify each record of your database.</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## STEP 6. Sections - Icons & Labels

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:** * Define a short and a long label for your Contact table * Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

**Field Properties:** * Define a short and a long label for your selected fields. * Click on the icon field and select icons for each field. There are several options for field icons: * You can select an icon for each field, * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you * You can simply leave them empty to not display any field icons.

![Icons & Labels](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## STEP 7. Sections - Main Menu

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![Main Menu](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## STEP 8. Sections - Forms

We're almost done, but first we need to decide how the app's layout. There are both List and Details forms to choose from.

* Select a list form template to display your table as a list. For our Contact app, let’s use the **Profile** template.

![List form template](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, *i.e.*, Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![List form content](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form. * Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Drag and drop the content onto the appropriate places on the detail form template, *i.e.*, First Name, Last Name, and Photo.

![Detail form content](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## STEP 9. Build the app

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* Select a device to use as a Simulator by clicking on the device button.
* Click **Build and Run**.
* Wait a few seconds and …. voila! Your iOS app is alive!

![Build and Run](assets/contact-app/Build-the-app-simulator.png)

## STEP 10. Where to go from here?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">FINAL PROJECT</a>

  </p>
</div>