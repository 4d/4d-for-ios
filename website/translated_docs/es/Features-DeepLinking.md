---
id: deep-linking
title: Deep Linking
---

> **OBJETIVOS**
> 
> Compartir el contenido de la aplicación iOS utilizando Deep Linking.

> **REQUISITOS PREVIOS**
> 
> An Apple Developer account.

4D v18 R5 includes a new feature! You're now able to share a content that you're currently viewing with all your collegues. But how does it work?

![Animación Enlaces profundos](assets/en/deeplinking/4d-for-ios-deeplinking.gif)

Hay dos maneras de implementar "deep linking" en IOS: **"URL scheme"** y **"Universal Links"**. While URL schemes are a well-known method for deep linking, Universal links are the new means for Apple to easily connect your webpage and your app under the same link.

Here's a comparision between the two options available in the project editor:

## URL Scheme

| VENTAJAS                            | DESVENTAJAS                             |
| ----------------------------------- | --------------------------------------- |
| Fácil de implementar                | Siempre requiere permiso                |
| No se requiere un backend adicional | Doesn't work if the app isn't installed |
|                                     | Doesn't work under Android              |

## Universal links

| VENTAJAS                                | DESVENTAJAS                             |
| --------------------------------------- | --------------------------------------- |
| No requiere permiso                     | Se necesita un backend estático con SSL |
| No abre el navegador                    | Más complejo de implementar             |
| Compatible con Android                  |                                         |
| Fallback URL if the app isn't installed |                                         |

# URL ESQUEMA PERSONALIZADO

## AN OLD BUT EFFICIENT APPROACH

Al nivel más simple, los esquemas de URL permiten a los usuarios abrir una aplicación desde otras aplicaciones.

But the true power of URL schemes is in the ability to perform specific actions when opening your app.

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

You're now able to share the content that you're currently viewing (whether it's a list or detail form) with everyone else!

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

1. Click on the **Action** button to display all your currently available actions
2. Seleccione la acción **Share** que previamente definió en el editor de proyectos
3. A new view appears, allowing you to share content
4. Seleccione el método de intercambio que desea utilizar
5. ¡Envíelo!

# UNIVERSAL LINKS

## UN ENFOQUE MÁS MODERNO

Los Universal links ofrecen varios beneficios clave que no están disponibles con los esquemas de URL personalizados. More specifically, universal links are:

* **Unique**: a diferencia de los esquemas de URL personalizados, otras aplicaciones no pueden reclamar los enlaces universales porque utilizan enlaces HTTP o HTTPS estándar a su sitio web.

* **Secure**: cuando los usuarios instalan su aplicación, iOS verifica que su sitio web permita que su aplicación abra URLs en su nombre. Only you can create and upload the file granting this permission to your web server, to make sure the association of your website with your app is secure.

* **Flexible**: los enlaces universales funcionan incluso cuando su aplicación no está instalada. En este caso, al presionar un enlace a su sitio web se abre el contenido en Safari.

* **Simple**: una sola URL funciona tanto para su sitio web como para su aplicación.

* **Private**: Other apps can communicate with your app with no need to know if your app is installed.

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

Here's an example of the **On Web Connection** method:

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

One of the great things about Deep Linking is that it is completely compatible with [push notifications](push-notification.html). Esto significa que puede enviar enlaces Deep a sus usuarios y llevarlos directamente a la página correcta.

As you can see, this feature opens a large range of possibilities to use 4D for iOS with minimal effort.

Deep linking is an essential feature in today’s apps, especially since users consume content faster and faster. Esta funcionalidad los lleva directamente al lugar deseado. So we would strongly recommend you to use it in your 4D for iOS apps.

La documentación [está aquí](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/18R4/Documentation/Classes/PushNotification.md) para ayudarle a manejar sus notificaciones push y Deep linking.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/manifest.json file from your Design database to your production database.  




