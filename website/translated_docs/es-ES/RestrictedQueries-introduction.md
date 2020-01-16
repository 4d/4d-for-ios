---
id: filter-query-introduction
title: Búsquedas limitadas
---

<div class = "objectives"> 

**OBJETIVOS**

Definir los filtros de búsqueda basados en información usuario o básica para mostrar contenido filtrado en la aplicación iOS generada.</div> <div class = "prerequisites"> 

**PRERREQUISITOS**

Haga clic [aquí](prerequisites.html) para ver lo que necesita para empezar.</div> 

En este tutorial, cubriremos **búsquedas restringidas** con un caso de uso simple: imagine que es un administrador de cuentas y desea consultar sus contratos *In Progress* simplemente conectándose a su aplicación con su dirección de correo electrónico.

Primero, desde la sección Datos definiremos un **filtro de búsqueda básico** para mostrar solo los contratos *En curso*. Luego, vamos a aplicar un **filtro basado en información del usuario** que dependerá del correo electrónico del administrador de la cuenta.

## Descargue el proyecto Starter

Antes de comenzar, asegúrese de descargar el **Proyecto Starter** que incluye un archivo **4DforiOSQueries.4dbase** (una base de datos de demostración y un proyecto de aplicación móvil listo para usar)

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">PROYECTO STARTER</a>

  </p>
</div>

La base de datos incluye:

* **La tabla CRM** con todos los datos que queremos mostrar en la aplicación iOS generada
* **La tabla AccountManager** con información básica sobre los administradores de cuentas (correo electrónico y nombre).

![CRM database](assets/en/restricted-queries/CRMDatabase.png)<div class = "tips"> 

**NOTA**

Este proyecto utiliza [plantillas personalizadas](https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html), <a href = "https://4d.github.io/4d-for-ios/docs/en/using-icons.html ">iconos personalizados</a> y [formatos de datos personalizados](https://4d.github.io/4d -for-ios/docs/es/creating-data-formatter.html).</div> 

¡Ahora está listo para definir su primera búsqueda limitada!

Abra el proyecto móvil haciendo clic en Abrir > Proyecto móvil... y seleccione CRM app > **project.4dmobileapp**.