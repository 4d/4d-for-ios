---
id: deep-linking
title: Deep Linking
---

> **OBJETIVOS**
> 
> Compartir el contenido de la aplicación iOS utilizando Deep Linking.

> **REQUISITOS PREVIOS**
> 
> Cuenta Apple Developer

¡4D v18 R5 incluye una nueva y gran funcionalidad! Ahora puede compartir el contenido que está viendo con todos sus colegas. ¿Cómo funciona?

He aquí una ilustración que resume "deep linking":

![Animación Enlaces profundos](assets/en/deeplinking/4d-for-ios-deeplinking.gif)

Hay dos maneras de implementar "deep linking" en IOS: **"URL scheme"** y **"Universal Links"**. Mientras que los "URL schemes" son un método bien conocido del "deep linking", los "Universal links" son el nuevo método que Apple ha implementado para conectar fácilmente su página web y su aplicación bajo el mismo enlace.

Aquí hay una comparación entre las dos opciones disponibles en el editor de proyectos:

## URL Scheme

| VENTAJAS                            | DESVENTAJAS                                    |
| ----------------------------------- | ---------------------------------------------- |
| Fácil de implementar                | Siempre requiere permiso                       |
| No se requiere un backend adicional | No funciona si la aplicación no está instalada |
|                                     | No funciona en Android                         |

## Universal links

| VENTAJAS                                            | DESVENTAJAS                             |
| --------------------------------------------------- | --------------------------------------- |
| No requiere permiso                                 | Se necesita un backend estático con SSL |
| No abre el navegador                                | Más complejo de implementar             |
| Compatible con Android                              |                                         |
| URL de retroceso si la aplicación no está instalada |                                         |

# URL ESQUEMA PERSONALIZADO

## AN OLD BUT EFFICIENT APPROACH

Al nivel más simple, los esquemas de URL permiten a los usuarios abrir una aplicación desde otras aplicaciones.

Pero el verdadero poder de los esquemas URL está en la capacidad de realizar acciones específicas a medida que se abre la aplicación.

## ESQUEMA DE URL PERSONALIZADO EN EL EDITOR DEL PROYECTO

Es muy simple incluir un esquema URL a su aplicación 4D for iOS:

1. Seleccione la acción predefinida **Share** de la sección **Action** y seleccione el alcance:
    *   entidad - para compartir el contenido de un formulario detallado
    *   tabla - para compartir un formulario listado
2. Activar la funcionalidad **Deep Linking** en la sección **Publishing** del editor de proyectos
3. La información del esquema URL se llena automáticamente con el nombre de la aplicación que ha definido previamente en la sección **General**. Sin embargo, aún puede editarlo:

![Editor del Proyecto Enlace profundo](assets/en/deeplinking/deep-linking-project-editor-publishing-section.png)

4. Rellene su método **On Mobile App Action**
5. Creación de la aplicación
6. ¡Y listo!

Ahora puede compartir el contenido que está viendo ¡Con todos sus colegas! (ya sea un formulario listado o detallado)

Acá un ejemplo del método **On Mobile App Action**:

```4d

var $1 : Object  // Información suministrada por la aplicación móvil
var $0 : Object  // Información devuelta a la aplicación móvil

var $action : Object
$action:=MobileAppServer.Action.new($1)

Case of 

    : ($1.action="shareContact")

        $0:=$action.shareContext()

    Else 

        $0:=New object("success"; False;"statusText"; "Enviar acción desconocida al servidor")

End case 

```

## UTILIZANDO ESQUEMAS DE URL EN SU APP 4D FOR iOS

1. Haga clic en el botón **Action** para mostrar todas sus acciones disponibles actualmente
2. Seleccione la acción **Share** que previamente definió en el editor de proyectos
3. Aparece una nueva vista que le permite comenzar a compartir el contenido
4. Seleccione el método de intercambio que desea utilizar
5. ¡Envíelo!

# UNIVERSAL LINKS

## UN ENFOQUE MÁS MODERNO

Los Universal links ofrecen varios beneficios clave que no están disponibles con los esquemas de URL personalizados. Específicamente, los enlaces universales son:

* **Unique**: a diferencia de los esquemas de URL personalizados, otras aplicaciones no pueden reclamar los enlaces universales porque utilizan enlaces HTTP o HTTPS estándar a su sitio web.

* **Secure**: cuando los usuarios instalan su aplicación, iOS verifica que su sitio web permita que su aplicación abra URLs en su nombre. Sólo usted puede crear y subir el archivo que otorga este permiso a su servidor web, por lo que la asociación de su sitio web con su aplicación es segura.

* **Flexible**: los enlaces universales funcionan incluso cuando su aplicación no está instalada. En este caso, al presionar un enlace a su sitio web se abre el contenido en Safari.

* **Simple**: una sola URL funciona tanto para su sitio web como para su aplicación.

* **Private**: otras aplicaciones pueden comunicarse con su aplicación sin necesidad de saber si su aplicación está instalada.

## UNIVERSAL LINKS EN EL EDITOR DE PROYECTOS

Para incluir los enlaces universales en su aplicación, el proceso es bastante similar al proceso de los esquemas URL:

1. Seleccione la acción predefinida **Share** de la sección **Action** y seleccione el alcance:
    *   entidad - para compartir un contenido de un formulario detallado
    *   tabla - para compartir un formulario listado
2. Activar la funcionalidad **Deep Linking** en la sección **Publishing** en el editor de proyectos
3. Introduzca la URL de su sitio web en el campo **Universal links**
4. Rellene su método **On Mobile App Action**
5. Creación de la aplicación
6. Activar los enlaces universales del método **On Web Connection**.

Este es un ejemplo del método **On Web Connection** :

```4d

Var $1; $2; $3; $4; $5; $6 : Text
Var $handler : Object

$handler:=MobileAppServer.WebHandler.new()
Case of
    : ($handler.handle($1; $2; $3; $4; $5; $6))
        // Gestionado por el código móvil por defecto
    Else
        // Su código web
End case

```


# NOTIFICACIÓN PUSH

Algo genial sobre Deep Linking es que es completamente compatible con [notificaciones push](push-notification.html). Esto significa que puede enviar enlaces Deep a sus usuarios y llevarlos directamente a la página correcta.

Como puede ver, esta nueva funcionalidad abre un gran abanico de posibilidades utilizando 4D for iOS con un mínimo esfuerzo.

Deep linking es una funcionalidad crucial en las aplicaciones de hoy en día, especialmente ya que los usuarios consumen el contenido más y más rápidamente. Esta funcionalidad los lleva directamente al lugar deseado. Así que recomiendo que lo utilicen en sus aplicaciones 4D for iOS.

La documentación [está aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/18R4/Documentation/Classes/PushNotification.md) para ayudarle a manejar sus notificaciones push y Deep linking.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/manifest.json file from your Design database to your production database.  




