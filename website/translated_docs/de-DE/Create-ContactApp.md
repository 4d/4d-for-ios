---
id: contact-app
title: Contact App
---
<div class = "objectives"> 

**Zielsetzung**

Create your first app with 4D for iOS</div> <div class = "prerequisites"> 

**Voraussetzungen**

Click [here](prerequisites.html) to see what you'll need to get started!</div> 

Mit dieser Anleitung können Sie direkt in die Entwicklung mit 4D for iOS einsteigen und schnell und einfach Ihre erste App erstellen.

*Szenario: Sie sind kaufmännischer Geschäftsführer und möchten Ihre Kontaktdaten unterwegs einsehen.*

Wir werden eine iPhone Verzeichnis-App erstellen, um nach Kontaktnamen aus einer Liste zu suchen und dann die Details der einzelnen Kontakte anzuzeigen. Wir nennen es "Contact".

## SCHRITT 1. Einsteigen

Laden Sie unser Starter-Projekt herunter, das eine Datei der Datenbank und ein Projekt-Icon enthält, aber noch kein mobiles Projekt.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/contact-app/ContactStarter.zip">STARTER-PROJEKT</a>

  </p>
</div>

## SCHRITT 2. Projekt erstellen

Wir beginnen mit einer sehr einfachen Struktur mit einer einzigen Tabelle. Starten Sie 4D auf macOS und wählen in der Toolbar am oberen Rand **Neu > Mobiles Projekt**.

Give your project a name and click **Create**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## SCHRITT 3. Den Projekt-Editor öffnen

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## SCHRITT 4. Sections - General

Here, you'll configure your app's primary information:

* **Organization:** Geben Sie den Namen Ihrer Firma und die Kennung der Anwendung ein (z. B. “My Company” und "com.MyCompany").
* **Product:** Geben Sie den Namen Ihrer app. ein. Wir nennen sie "Contact".
* **ID:** (Bundle ID) Wird automatisch generiert, zusammengesetzt aus der Kennung Ihrer Firma und dem Produktnamen.
* **Version:** Lassen Sie die Version 1.0 und definieren das Copyright Ihrer App. Es wird dringend empfohlen, die von 4D for iOS zur Verfügung gestellten Formate zu verwenden.
* **Icons:** Ziehen Sie per Drag-and-Drop einen Icon für Ihre App in den Bereich Icons.
* **Developer:** Wird automatisch aus dem Benutzernamen auf Ihrem Computer ausgefüllt. Setzen Sie die Referenz des Entwicklerteams (aus Ihrem Developer Account) per Copy/Paste in das Feld Team ein. Sie können es auch leer lassen, um Ihre Anwendung nur auf dem Simulator zu erstellen.

![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## SCHRITT 5. Sections - Structure

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.<div class = "tips"> 

**HINWEIS**

We highly recommend publishing your primary key in order to identify each record of your database</div> 

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## SCHRITT 6. Sections - Labels & Icons

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Define a short and a long label for your Contact table
* Click on the icon field. Die Icon-Bibliothek erscheint und Sie können ein Icon auswählen, um die Tabelle Contacts zu illustrieren. Sie können den Bereich Icons auch leer lassen. 4D for iOS generiert ein Standardsymbol für Sie!

**Field Properties:**

* Define a short and a long label for your selected fields.
* Klicken Sie in die Spalte Icon und wählen Icons für jedes Feld. There are several options for field icons: 
    * You can select an icon for each field,
    * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you
    * You can simply leave them empty to not display any field icons. 

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## SCHRITT 7. Sections - Main Menu

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Zeigt die verfügbaren Tabellen.
* **Selected Tables:** Zeigt die Menüeinträge Ihrer App. Unser Beispiel hat nur ein Element. Bei mehreren Elementen können Sie diese per Drag-and-Drop anders anordnen.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## SCHRITT 8. Sections - Forms

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Wählen Sie eine Formularvorlage Liste, um Ihre Tabelle als Liste anzuzeigen. Für unsere App Contact verwenden wir die Vorlage **Profil**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Ziehen Sie die gewünschten Felder per Drag-and-Drop auf die Vorlage, *z.B.* LastName in die Felder Search und Title. Die Felder Search und Section sind optional, lassen Sie das Feld Section für den Moment leer.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Wählen Sie eine Vorlage, die für Ihre Anwendung am besten geeignet ist. Für unsere App Contact verwenden wir die Vorlage **Visual Contact**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Ziehen Sie den Inhalt per Drag & Drop an die entsprechenden Stellen auf der Detailformular-Vorlage: *z.B.* First Name, Last Name und Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## SCHRITT 9. Die App erstellen

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Klicken Sie auf die Registerkarte **Build**.
* Wählen Sie ein Gerät aus, das als Simulator dienen soll. Dazu klicken Sie auf die Schaltfläche device.
* Klicken Sie auf **Build and Run**.
* Warten Sie ein paar Sekunden und …. siehe da! Ihre iOS App ist live!

![Build and Run](assets/en/contact-app/Build-the-app-simulator.png)

## SCHRITT 10. Wie geht es weiter?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/contact-app/ContactFinal.zip">FINAL PROJECT</a>

  </p>
</div>