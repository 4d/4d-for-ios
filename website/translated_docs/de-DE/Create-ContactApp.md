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

Hier definieren Sie eine Teilmenge Ihrer Daten (die Tabellen und Felder der Datenbank) zur Bereitstellung auf mobilen Geräten.

Für unser Beispiel wählen Sie **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** und **Photo**.<div class = "tips"> 

**HINWEIS**

* Wir empfehlen dringend, Ihre Primärschlüssel zu veröffentlichen, um jeden Datensatz der Datenbank zu identifizieren.</div> 

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## SCHRITT 6. Sections - Labels & Icons

Jetzt ist es Zeit, einige Bezeichnungen und Icons für die ausgewählten Tabellen und Felder zu definieren.

**Table Properties:** * Definieren Sie eine kurze und eine lange Bezeichnung für Ihre Tabelle Contact * Klicken Sie in den Bereich Icons. Die Icon-Bibliothek erscheint und Sie können ein Icon auswählen, um die Tabelle Contacts zu illustrieren. Sie können den Bereich Icons auch leer lassen. 4D for iOS generiert ein Standardsymbol für Sie!

**Field Properties:** * Define a short and a long label for your selected fields. * Click on the icon field and select icons for each field. There are several options for field icons: * You can select an icon for each field, * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you * You can simply leave them empty to not display any field icons.

![Icons & Labels](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## SCHRITT 7. Sections - Main Menu

Als nächstes definieren wir die Reihenfolge der Tabellen im Hauptmenü der App.

* **Available Tables:** Zeigt die verfügbaren Tabellen.
* **Selected Tables:** Zeigt die Menüeinträge Ihrer App. Unser Beispiel hat nur ein Element. Bei mehreren Elementen können Sie diese per Drag-and-Drop anders anordnen.

![Main Menu](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## SCHRITT 8. Sections - Forms

Wir sind fast fertig, wir müssen noch das Layout für die App festlegen. Für Formulare gibt es Listen- und Detailansichten zur Auswahl.

* Wählen Sie eine Formularvorlage Liste, um Ihre Tabelle als Liste anzuzeigen. Für unsere App Contact verwenden wir die Vorlage **Profil**.

![List form template](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

An dieser Stelle hat sich der untere Teil des Konfigurationsfensters von der Auswahl der Vorlagen zur Definition der Inhalte geändert.

* Ziehen Sie die gewünschten Felder per Drag-and-Drop auf die Vorlage, *z.B.* LastName in die Felder Search und Title. Die Felder Search und Section sind optional, lassen Sie das Feld Section für den Moment leer.

![List form content](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

Und zu guter Letzt definieren wir das Detailformular. * Wählen Sie eine Vorlage, die für Ihre Anwendung am besten geeignet ist. Für unsere App Contact verwenden wir die Vorlage **Visual Contact**Vorlage.

![Detail form template](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Ziehen Sie den Inhalt per Drag & Drop an die entsprechenden Stellen auf der Detailformular-Vorlage: *z.B.*, First Name, Last Name und Photo.

![Detail form content](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## SCHRITT 9. Die App erstellen

Jetzt zum lustigen Teil! Es ist an der Zeit, Ihre App zu erstellen und sie im Simulator zu testen, um das Endergebnis zu sehen!

* Klicken Sie auf die Registerkarte **Build**.
* Wählen Sie ein Gerät aus, das als Simulator dienen soll. Dazu klicken Sie auf die Schaltfläche device.
* Klicken Sie auf **Build and Run**.
* Warten Sie ein paar Sekunden und …. siehe da! Ihre iOS App ist live!

![Build and Run](assets/contact-app/Build-the-app-simulator.png)

## STEP 10. Wie geht es weiter?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">FINAL PROJECT</a>

  </p>
</div>