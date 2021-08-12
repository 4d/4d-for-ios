---
id: contact-app
title: Aplicación Contacts
---


> **OBJETIVOS**
> 
> Cree su primera aplicación con 4D for iOS
> **REQUISITOS PREVIOS**
> 
> Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.

Este tutorial le permitirá lanzarse directamente en el desarrollo de 4D for iOS. Le permitirá rápida y fácilmente crear su primera aplicación.

*Escenario: usted es un director comercial y desea consultar su lista de contactos cuando no esté en su oficina.*

Vamos a crear una aplicación de directorio para iPhone para buscar los nombres de los contactos de una lista y luego ver los detalles de cada contacto. La llamamos "Contacto".

## PASO 1. Comencemos
Descargue nuestro proyecto Starter, que contiene un archivo de base de datos y el icono de proyecto, pero no todavía el proyecto móvil.

<div markdown="1" style="text-align: center; margin-top: 20px">

<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">PROYECTO STARTER</a>
</div>

## PASO 2. Creación del proyecto

Vamos a empezar con una estructura muy simple, utilizando una sola tabla. De 4D, ir a **Nuevo > Proyecto móvil**.

De un nombre a su proyecto y haga clic en **Crear**.

![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)

## PASO 3. Abrir el editor de proyectos

¡Bienvenido a 4D for iOS! La pantalla de bienvenida muestra las principales etapas de creación de aplicaciones de esta magnífica herramienta. 🙂

![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)

Haga clic en **Continue**.

## PASO 4. Secciones - General

Aquí, podrá configurar la información principal de la aplicación:

* **Organización:** escriba el nombre de su empresa y el identificador de aplicación (ej. “My Company” y com.MyCompany).
* **Producto:** introduzca el nombre de su aplicación. Llamémosla "Contact".
* **ID:** (Paquete ID) se genera automáticamente y se compone del identificador de su empresa y del nombre de su producto.
* **Versión:** deje la versión 1.0 y defina los derechos de autor de su aplicación. Es muy recomendable utilizar los formatos ofrecidos por 4D for iOS.
* **Iconos:** arrastre y suelte un icono para su aplicación en el área del icono.
* **Desarrollador:** esta sub sección se rellena automáticamente a partir del nombre de usuario en su ordenador. Copie/pegue la referencia de su equipo de desarrolladores (desde su cuenta desarrollador) en el campo Equipo. También puede dejar vacío para generar su aplicación únicamente en el simulador.

![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)

## PASO 5. Secciones - Estructura

Es en esta sección donde definirá un subconjunto de sus datos (tablas y campos de la base) para mostrar en dispositivos móviles.

Para nuestro ejemplo, seleccione **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** y **Photo**.

> **NOTA**
> 
> Recomendamos publicar su llave primaria para identificar cada registro de su base


![Estructura](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)

## PASO 6. Secciones - Iconos y etiquetas

Ahora es el momento de definir algunas etiquetas e iconos para los campos y tablas seleccionados.

**Propriedades de tabla:**

* Define una etiqueta corta y una larga para su tabla Contact
* Haga clic en el campo icono. La librería icono aparecerá y usted puede seleccionar un icono para ilustrar la tabla de contactos. También puede optar por dejar vacío el campo icon. 4D for iOS generará un icono predeterminado

**Propriedades de campo:**

* Define una etiqueta corta y una larga para sus campos seleccionados.
* Haga clic en el campo de icono y seleccione los iconos para cada campo. Hay varias opciones posibles:
    * Puede seleccionar un icono para cada campo,
    * Si al menos un icono se ha definido y otros campos se dejan vacíos, 4D for iOS generará los iconos predeterminados
    * Simplemente puede dejarlos vacíos para no mostrar ningún icono de campo.

![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)

## PASO 7. Secciones - menú principal

Lo siguiente es definir el orden de las tablas en el menú principal de la aplicación.

* **Tablas disponibles:** muestra las tablas a utilizar.
* **Tablas seleccionadas:** muestra los elementos de menú de su aplicación. Aunque nuestro ejemplo solo tiene un elemento, puede arrastrar y soltar los elementos para reordenarlos.

![Menú principal](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)

## PASO 8. Secciones - Formularios

Ya casi terminamos, pero primero tenemos que decidir el diseño de la aplicación. Hay formularios listados y formularios detallados para elegir.

* Seleccione un modelo de formulario listado para mostrar su tabla como una lista. Para nuestra aplicación Contact, utilicemos la plantilla **Profile**.

![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)

En este punto, la parte inferior de la ventana de configuración ha cambiado de selección de plantilla a definición del contenido.

* Arrastre y suelte los campos que desee mostrar en la plantilla, <i>es decir</i>, Last Name en los campos de título y búsqueda. Los campos Búsqueda y Sección son opcionales, por el momento, deje en blanco el campo Section.

![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)

Y por último, definimos el formulario detallado.

* Seleccione una plantilla que se adapte mejor a su aplicación. Para nuestra aplicación Contact, utilicemos la plantilla **Visual Contact**.

![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)


* Arrastre y suelte el contenido en los lugares adecuados en la plantilla de formulario detallado, <i>es decir</i>, Nombre, Apellido y foto.

![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)

## PASO 9. Creación de la aplicación

¡Ahora la parte divertida! Es hora de crear su aplicación y probarla en el simulador para ver el resultado final.

* Haga clic en la pestaña **Generar**.
* Seleccione un dispositivo a utilizar como Simulador haciendo clic en el botón dispositivo.
* Haga clic en  **Generar y ejecutar**.
* Espere unos segundos y …. ¡Listo! ¡Listo! ¡Su aplicación iOS está creada!

![Build and Run](assets/en/contact-app/Build-the-app-simulator.png)

## PASO 10. ¿Qué hacemos ahora?

Hemos cubierto la creación de una aplicación básica en este tutorial, y ahora debe poder crear aplicaciones simples por sí mismo. Espere, ¡Hay más! En el siguiente tutorial, aprenderá cómo crear una aplicación más compleja. Haga clic en el botón **Final Project** abajo para descargar la aplicación Contact final.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">PROYECTO FINAL</a>
</div>
