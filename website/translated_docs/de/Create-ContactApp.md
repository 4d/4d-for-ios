---
id: contact-app
title: App Contact
---

<div class = "objectives"> 

**Zielsetzung**

Erstellen Sie Ihre erste App mit 4D for iOS</div> <div class = "prerequisites"> 

**Voraussetzungen**

Klicken Sie [hier](prerequisites.html), um zu sehen, was Sie zum Starten benötigen.</div> 

Mit dieser Anleitung können Sie direkt in die Entwicklung mit 4D for iOS einsteigen und schnell und einfach Ihre erste App erstellen.

*Szenario: Sie sind kaufmännischer Geschäftsführer und möchten Ihre Kontaktdaten unterwegs einsehen.*

Wir werden eine iPhone Verzeichnis-App erstellen, um nach Kontaktnamen aus einer Liste zu suchen und dann die Details der einzelnen Kontakte anzuzeigen. Wir nennen es "Contact".

## SCHRITT 1. Einsteigen

Laden Sie unser Starter-Projekt herunter, das eine Datei der Datenbank und ein Projekt-Icon enthält, aber noch kein mobiles Projekt.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">STARTER-PROJEKT</a>

  </p>
</div>

## SCHRITT 2. Projekt erstellen

Wir beginnen mit einer sehr einfachen Struktur mit einer einzigen Tabelle. Starten Sie 4D auf macOS und wählen in der Toolbar am oberen Rand **Neu > Mobiles Projekt**.

Geben Sie Ihrem Projekt einen Namen und klicken auf den Button **Create**.

![Projekt erstellen](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## SCHRITT 3. Den Projekt-Editor öffnen

Willkommen bei 4D for iOS! Der Willkommensdialog zeigt die wichtigsten Phasen zur App-Erstellung mit diesem großartigen Tool. 🙂

![Willkommensdialog](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Klicken Sie auf **Continue**.

## SCHRITT 4. Sections - General

Hier konfigurieren Sie die Grundinformationen zu Ihrer App:

* **Organization:** Geben Sie den Namen Ihrer Firma und die Kennung der Anwendung ein (z. B. “My Company” und "com.MyCompany").
* **Product:** Geben Sie den Namen Ihrer app. ein. Wir nennen sie "Contact".
* **ID:** (Bundle ID) Wird automatisch generiert, zusammengesetzt aus der Kennung Ihrer Firma und dem Produktnamen.
* **Version:** Lassen Sie die Version 1.0 und definieren das Copyright Ihrer App. Es wird dringend empfohlen, die von 4D for iOS zur Verfügung gestellten Formate zu verwenden.
* **Icons:** Ziehen Sie per Drag-and-Drop einen Icon für Ihre App in den Bereich Icons.
* **Developer:** Wird automatisch aus dem Benutzernamen auf Ihrem Computer ausgefüllt. Setzen Sie die Referenz des Entwicklerteams (aus Ihrem Developer Account) per Copy/Paste in das Feld Team ein. Sie können es auch leer lassen, um Ihre Anwendung nur auf dem Simulator zu erstellen.

![Allgemein](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## SCHRITT 5. Sections - Structure

Hier definieren Sie eine Teilmenge Ihrer Daten (die Tabellen und Felder der Datenbank) zur Bereitstellung auf mobilen Geräten.

Für unser Beispiel wählen Sie **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** und **Photo**.<div class = "tips"> 

**HINWEIS**

Wir empfehlen dringend, Ihre Primärschlüssel zu veröffentlichen, um jeden Datensatz der Datenbank zu identifizieren</div> 

![Struktur](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## SCHRITT 6. Sections - Labels & Icons

Jetzt ist es Zeit, einige Bezeichnungen und Icons für die ausgewählten Tabellen und Felder zu definieren.

**Tabelleneigenschaften:**

* Definieren Sie eine kurze und eine lange Bezeichnung für Ihre Tabelle Contact
* Klicken Sie auf das Icon für Feld. Die Icon-Bibliothek erscheint und Sie können ein Icon auswählen, um die Tabelle Contacts zu illustrieren. Sie können den Bereich Icons auch leer lassen. 4D for iOS generiert ein Standardsymbol für Sie!

**Feldeigenschaften:**

* Definieren Sie eine kurze und eine lange Bezeichnung für Ihre ausgewählten Felder.
* Klicken Sie in die Spalte Icon und wählen Icons für jedes Feld. Es gibt verschiedene Optionen für Feld-Icons: 
    * Sie können für jedes Feld ein Icon auswählen
    * Wurde mindestens ein Icon definiert und bleiben andere Felder leer, generiert 4D for iOS standardmäßige Icons für Sie
    * Sie können diese einfach leer lassen, um keine Feld-Icons anzuzeigen. 

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## SCHRITT 7. Sections - Main Menu

Als nächstes definieren wir die Reihenfolge der Tabellen im Hauptmenü der App.

* **Available Tables:** Zeigt die verfügbaren Tabellen.
* **Selected Tables:** Zeigt die Menüeinträge Ihrer App. Unser Beispiel hat nur ein Element. Bei mehreren Elementen können Sie diese per Drag-and-Drop anders anordnen.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## SCHRITT 8. Sections - Forms

Wir sind fast fertig, wir müssen nur noch das Layout für die App festlegen. Für Formulare gibt es Listen- und Detailansichten zur Auswahl.

* Wählen Sie eine Formularvorlage Liste, um Ihre Tabelle als Liste anzuzeigen. Für unsere App Contact verwenden wir die Vorlage **Profil**.

![Vorlage für Listenformular](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

An dieser Stelle hat sich der untere Teil des Konfigurationsfensters von Auswahl der Vorlagen zu Definition der Inhalte geändert.

* Ziehen Sie die gewünschten Felder per Drag-and-Drop auf die Vorlage, *z.B.* LastName in die Felder Search und Title. Die Felder Search und Section sind optional, lassen Sie das Feld Section vorerst leer.

![Inhalt des Listenformulars](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

Als Letztes definieren wir das Detailformular.

* Wählen Sie eine Vorlage, die für Ihre Anwendung am besten geeignet ist. Für unsere App Contact verwenden wir die Vorlage **Visual Contact**.

![Vorlage für Detailformular](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Ziehen Sie den Inhalt per Drag & Drop an die entsprechenden Stellen auf der Vorlage für Detailformular: *z.B.* First Name, Last Name und Photo.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## SCHRITT 9. Die App erstellen

Jetzt kommen wir zum Teil, der Spaß macht! Denn jetzt erstellen Sie Ihre App und testen im Simulator, um das Endergebnis zu sehen!

* Klicken Sie auf die Registerkarte **Build**.
* Wählen Sie ein Gerät aus, das als Simulator dienen soll. Dazu klicken Sie auf den Button **device**.
* Klicken Sie auf **Build and Run**.
* Warten Sie ein paar Sekunden und …. siehe da! Ihre iOS App ist live!

![Build and Run](assets/en/contact-app/Build-the-app-simulator.png)

## SCHRITT 10. Wie geht es weiter?

In diesem Tutorial haben wir die Grundlagen zum Erstellen von Apps behandelt. Sie sollten nun in der Lage sein, einfache Apps selbst zu erstellen. Aber halt - es gibt noch mehr! Im nächsten Tutorial erfahren Sie, wie Sie eine komplexere App erstellen können. Klicken Sie unten auf **Final Project**, um die fertige App Contact herunterzuladen.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">FINAL PROJECT</a>

  </p>
</div>