---
id: contact-app
title: Contact App
sidebar_label: Contact App
---
<div class = "objectives"> 

**OBJETIVOS**

* Cree su primera aplicación con 4D for iOS</div> <div class = "prerequisites"> 

**PRERREQUISITOS**

* Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar</div> 

Este tutorial le permitirá lanzarse directamente en el desarrollo de 4D for iOS. Le permitirá rápida y fácilmente crear su primera aplicación.

*Escenario: usted es un director comercial y desea consultar su lista de contactos cuando no esté en su oficina.*

Vamos a crear una aplicación de directorio para iPhone para buscar los nombres de los contactos de una lista y luego ver los detalles de cada contacto. La llamamos "Contacto".

## PASO 1. Comencemos

Descargue nuestro proyecto Starter, que contiene un archivo de base de datos y el icono de proyecto, pero no todavía el proyecto móvil.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactStarter.zip">PROYECTO STARTER</a>

  </p>
</div>

## PASO 2. Creación del proyecto

Vamos a empezar con una estructura muy simple, utilizando una sola tabla. De 4D, ir a **Nuevo > Proyecto móvil**.

De un nombre a su proyecto y haga clic en **Crear**.

![Creación de un proyecto](assets/contact-app/Project-creation-4D-for-iOS.png)

## PASO 3. Abrir el editor de proyectos

¡Bienvenido a 4D for iOS! La pantalla de bienvenida muestra las principales etapas de creación de aplicaciones de esta magnífica herramienta. 🙂

![Pantalla de bienvenida](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

Haga clic en **Continuar**.

## PASO 4. Secciones - General

Aquí, podrá configurar la información principal de la aplicación:

* **Organización:**Escriba el nombre de su empresa y el identificador de aplicación (ej. "Mi empresa" y com.MiEmpresa).
* **Producto:**introduzca el nombre de su aplicación. Llamémosla "Contact".
* **ID:** (Paquete ID) se genera automáticamente y se compone del identificador de su empresa y del nombre de su producto.
* **Versión:**deje la versión 1.0 y defina los derechos de autor de su aplicación. Es muy recomendable utilizar los formatos ofrecidos por 4D for iOS.
* **Iconos:**arrastre y suelte un icono para su aplicación en el área del icono.
* **Desarrollador:**esta sub sección se rellena automáticamente a partir del nombre de usuario en su ordenador. Copie/pegue la referencia de su equipo de desarrolladores (desde su cuenta desarrollador) en el campo Equipo. También puede dejar vacío para generar su aplicación únicamente en el simulador.

![General](assets/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASO 5. Secciones - Estructura

Es en esta sección que define un subconjunto de sus datos (tablas y campos de la base) para mostrar en dispositivos móviles.

Para nuestro ejemplo, seleccione **ID**, **Nombre** **Apellido**, **Cargo**, **Empresa**, **Teléfono**, **Notas** y **Foto**.<div class = "tips"> 

**NOTA**

* Recomendamos publicar su llave primaria para identificar cada registro de su base.</div> 

![Estructura](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASO 6. Secciones - Iconos y etiquetas

Ahora es el momento para definir algunas etiquetas e iconos para los campos y tablas seleccionados.

**Table Properties:**

* Define a short and a long label for your Contact table
* Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

**Field Properties:**

* Define a short and a long label for your selected fields.
* Click on the icon field and select icons for each field. There are several options for field icons: 
    * You can select an icon for each field,
    * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you
    * You can simply leave them empty to not display any field icons. 

![Iconos y Etiquetas](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASO 7. Secciones - menú principal

Lo siguiente es definir el orden de las tablas en el menú principal de la aplicación.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![Menú principal](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASO 8. Secciones - Formularios

Ya casi terminamos, pero primero tenemos que decidir el diseño de la aplicación. Hay formularios listados y formularios detallados para elegir.

* Select a list form template to display your table as a list. For our Contact app, let’s use the **Profile** template.

![Plantilla de formulario listado](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

En este punto, la parte inferior de la ventana de configuración ha cambiado de selección de plantilla a definición de contenido.

* Drag and drop the fields you want displayed onto the template, *i.e.*, Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![Contenido del formulario listado](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

And finally, we'll define the detail form.

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Plantilla de formulario listado](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Drag and drop the content onto the appropriate places on the detail form template, *i.e.*, First Name, Last Name, and Photo.

![Contenido del formulario detallado](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASO 9. Creación de la aplicación

¡Ahora la parte divertida! Es hora de crear su aplicación y probarla en el simulador para ver el resultado final.

* Click the **Build** tab.
* Select a device to use as a Simulator by clicking on the device button.
* Click **Build and Run**.
* Wait a few seconds and …. voila! Your iOS app is alive!

![Crear y ejecutar](assets/contact-app/Build-the-app-simulator.png)

## PASO 10. ¿Qué hacer ahora?

Hemos cubierto la creación básica de la aplicación de este tutorial, y ahora debe poder crear aplicaciones simples por sí mismo. Espere, ¡Hay más! En el siguiente tutorial, aprenderá cómo crear una aplicación aún más compleja. Haga clic en **Final Project** a continuación para descargar la aplicación Contact final.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/contact-app/ContactFinal.zip">PROYECTO FINAL</a>

  </p>
</div>