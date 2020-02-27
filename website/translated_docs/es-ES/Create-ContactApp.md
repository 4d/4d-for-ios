---
id: contact-app
title: Contact App
---

:::tip OBJECTIVES Create your first app with 4D for iOS :::

:::PRERREQUISITOS importante Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar. :::

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## PASO 1. Comencemos

Download our Starter Project, which contains a database file and project icon, but no mobile project yet.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">PROYECTO STARTER</a>

  </p>
</div>

## PASO 2. Creación del proyecto

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

De un nombre a su proyecto y haga clic en **Crear**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## PASO 3. Abrir el editor de proyectos

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Haga clic en **Continue**.

## PASO 4. Secciones - General

Here, you'll configure your app's primary information:

* **Organización:**Escriba el nombre de su empresa y el identificador de aplicación (ej. "Mi empresa" y com.MiEmpresa).
* **Producto:**introduzca el nombre de su aplicación. Llamémosla "Contact".
* **ID:** (Paquete ID) se genera automáticamente y se compone del identificador de su empresa y del nombre de su producto.
* **Versión:**deje la versión 1.0 y defina los derechos de autor de su aplicación. Es muy recomendable utilizar los formatos ofrecidos por 4D for iOS.
* **Iconos:**arrastre y suelte un icono para su aplicación en el área del icono.
* **Desarrollador:**esta sub sección se rellena automáticamente a partir del nombre de usuario en su ordenador. Copie/pegue la referencia de su equipo de desarrolladores (desde su cuenta desarrollador) en el campo Equipo. También puede dejar vacío para generar su aplicación únicamente en el simulador.

![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASO 5. Secciones - Estructura

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

:::tip NOTE We highly recommend publishing your primary key in order to identify each record of your database :::

![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASO 6. Secciones - Iconos y etiquetas

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Define una etiqueta corta y una larga para su tabla Contact
* Haga clic en el campo icono. La librería icono aparecerá y usted puede seleccionar un icono para ilustrar la tabla de contactos. También puede optar por dejar vacío el campo icon. 4D for iOS generará un icono predeterminado

**Field Properties:**

* Define una etiqueta corta y una larga para sus campos seleccionados.
* Haga clic en el campo de icono y seleccione los iconos para cada campo. Hay varias opciones posibles: 
    * Puede seleccionar un icono para cada campo,
    * Si al menos un icono se ha definido y otros campos se dejan vacíos, 4D for iOS generará los iconos predeterminados
    * Simplemente puede dejarlos vacíos para no mostrar ningún icono de campo. 

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASO 7. Secciones - menú principal

Next up is defining the order of the tables in the app's main menu.

* **Tablas disponibles:** muestra las tablas a utilizar.
* **Tablas seleccionadas:** muestra los elementos de menú de su aplicación. Aunque nuestro ejemplo solo tiene un elemento, puede arrastrar y soltar los elementos para reordenarlos.

![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASO 8. Secciones - Formularios

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Seleccione un modelo de formulario listado para mostrar su tabla como una lista. Para nuestra aplicación Contact, utilicemos la plantilla **Profile**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Arrastre y suelte los campos que desee mostrar en la plantilla, *es decir*, Last Name en los campos de título y búsqueda. Los campos Búsqueda y Sección son opcionales, por el momento, deje en blanco el campo Section.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Seleccione una plantilla que sea la más adecuada para su aplicación. Para nuestra aplicación Contact, vamos a utilizar la plantilla **Visual Contact**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Arrastre y suelte el contenido en los lugares adecuados en la plantilla de formulario detallado, *es decir*, Nombre, Apellido y foto.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASO 9. Creación de la aplicación

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Haga clic en la pestaña **Generar**.
* Seleccione un dispositivo a utilizar como Simulador haciendo clic en el botón dispositivo.
* Haga clic en **Generar y ejecutar**.
* Espere unos segundos y …. ¡Listo! ¡Su aplicación iOS está creada!

![Crear y ejecutar](assets/en/contact-app/Build-the-app-simulator.png)

## PASO 10. ¿Qué hacer ahora?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Espere, ¡Hay más! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROYECTO FINAL</a>

  </p>
</div>