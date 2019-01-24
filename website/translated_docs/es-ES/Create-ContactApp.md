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

![Project Creation](assets/contact-app/Project-creation-4D-for-iOS.png)

## PASO 3. Abrir el editor de proyectos

¡Bienvenido a 4D for iOS! La pantalla de bienvenida muestra las principales etapas de creación de aplicaciones de esta magnífica herramienta. 🙂

![Welcome Screen](assets/contact-app/Welcome-Screen-4D-for-iOS.png)

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

![Structure](assets/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASO 6. Secciones - Iconos y etiquetas

Ahora es el momento para definir algunas etiquetas e iconos para los campos y tablas seleccionados.

**Propiedades de las tablas:** * Defina una etiqueta corta y una etiqueta larga para su tabla Contact * Haga clic en el campo icon. La librería icono aparecerá y usted puede seleccionar un icono para ilustrar la tabla de contactos. También puede optar por dejar vacío el campo icon. 4D for iOS generará un icono predeterminado

**Propiedades de las tablas:** * Defina una etiqueta corta y una etiqueta larga para su tabla Contact * Haga clic en el campo icon. * Haga clic en el campo de icono y seleccione los iconos para cada campo. Hay varias opciones para los iconos de campo: * puede seleccionar un icono para cada campo, * si se ha definido al menos un icono y otros campos quedan vacíos, 4D for iOS va a generar los iconos por defecto * puede simplemente dejarlos vacíos para no mostrar los iconos de campo.

![Icons & Labels](assets/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASO 7. Secciones - menú principal

Lo siguiente es definir el orden de las tablas en el menú principal de la aplicación.

* **Tablas disponibles:** muestra las tablas a utilizar.
* **Tablas seleccionadas:** muestra los elementos de menú de su aplicación. Aunque nuestro ejemplo solo tiene un elemento, puede arrastrar y soltar los elementos para reordenarlos.

![Main Menu](assets/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASO 8. Secciones - Formularios

Ya casi terminamos, pero primero tenemos que decidir el diseño de la aplicación. Hay formularios listados y formularios detallados para elegir.

* Seleccione un modelo de formulario listado para mostrar su tabla como una lista. Para nuestra aplicación Contact, utilicemos la plantilla **Profile**.

![List form template](assets/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

En este punto, la parte inferior de la ventana de configuración ha cambiado de selección de plantilla a definición de contenido.

* Drag and drop the fields you want displayed onto the template, *i.e.*, Last Name into the search and Title fields. Los campos Búsqueda y Sección son opcionales, por el momento, deje en blanco el campo Section.

![List form content](assets/contact-app/ListformContent-form-section-4D-for-iOS.png)

Y por último, definimos el formulario detallado. * Seleccione una plantilla que sea la más adecuada para su aplicación. Para nuestra aplicación Contact, vamos a utilizar la plantilla **Visual Contact**.

![Detail form template](assets/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)

* Arrastre y suelte el contenido en los lugares adecuados en la plantilla de formulario detallado, *es decir*, Nombre, Apellido y foto.

![Detail form content](assets/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASO 9. Creación de la aplicación

¡Ahora la parte divertida! Es hora de crear su aplicación y probarla en el simulador para ver el resultado final.

* Haga clic en la pestaña**Generar**.
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