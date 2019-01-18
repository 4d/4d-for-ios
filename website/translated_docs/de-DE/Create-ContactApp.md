---
id: contact-app
title: Contact App
sidebar_label: Contact App
---
<div class = "objectives"> 

**Zielsetzung**

* Erstellen Sie Ihre erste App mit 4D for iOS</div> <div class = "prerequisites"> 

**Voraussetzungen**

* Klicken Sie [hier](prerequisites.html), um zu sehen, was Sie zum Starten benötigen.</div> 

Mit dieser Anleitung können Sie direkt in die Entwicklung mit 4D for iOS einsteigen und schnell und einfach Ihre erste App erstellen.

*Szenario: Sie sind kaufmännischer Geschäftsführer und möchten Ihre Kontaktdaten unterwegs einsehen.*

Wir werden eine iPhone Verzeichnis-App erstellen, um nach Kontaktnamen aus einer Liste zu suchen und dann die Details der einzelnen Kontakte anzuzeigen. Wir nennen es "Kontakt".

## SCHRITT 1. Einsteigen

Laden Sie unser Starter-Projekt herunter, das eine Datei der Datenbank und ein Projekt-Icon enthält, aber noch kein mobiles Projekt.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactStarter.zip">STARTER-PROJEKT</a>

  </p>
</div>

## SCHRITT 2. Projekt erstellen

Wir beginnen mit einer sehr einfachen Struktur mit einer einzigen Tabelle. Starten Sie 4D auf macOS und wählen in der Toolbar am oberen Rand**Neu > Mobiles Projekt**.

Geben Sie Ihrem Projekt einen Namen und klicken auf den Button **Create**.

![Project Creation](assets/contact-app/Project-creation-4D-for-iOS.png)

## SCHRITT 3. Den Projekt-Editor öffnen

Willkommen bei 4D for iOS! Der Willkommensdialog zeigt die wichtigsten Phasen zur App-Erstellung mit diesem großartigen Tool. 🙂

![Welcome Screen](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

Klicken Sie auf **Continue**.

## SCHRITT 4. Sections - General

Hier konfigurieren Sie die Grundinformationen zu Ihrer App:

* **Organization:** Geben Sie den Namen Ihrer Firma und die Kennung der Anwendung ein (z. B. “My Company” und "com.MyCompany").
* **Product:** Geben Sie den Namen Ihrer app. ein. Wir nennen sie "Contact".
* **ID:** (Bundle ID) Wird automatisch generiert, zusammengesetzt aus der Kennung Ihrer Firma und dem Produktnamen.
* **Version:** Lassen Sie die Version 1.0 und definieren das Copyright Ihrer App. Es wird dringend empfohlen, die von 4D for iOS zur Verfügung gestellten Formate zu verwenden.
* **Icons:** Ziehen Sie per Drag-and-Drop einen Icon für Ihre App in den Bereich Icons.
* **Developer:** Wird automatisch aus dem Benutzernamen auf Ihrem Computer ausgefüllt. Setzen Sie die Referenz des Entwicklerteams (aus Ihrem Developer Account) per Copy/Paste in das Feld Team ein. Sie können es auch leer lassen, um Ihre Anwendung nur auf dem Simulator zu erstellen.

![General](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## SCHRITT 5. Sections - Structure

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