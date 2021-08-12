---
id: deploy-app-store-app-store-connect
title: Crear una ficha en App Store
---

> **OBJETIVOS**
> 
> * Crear un identificador de aplicación en su cuenta desarrollador
> * Crear su aplicación en el App Store Connect

> **REQUISITOS PREVIOS**
> 
> [Apple Developer Program para las empresas](register-apple-developer-program-organization.html) o [particulares](register-apple-developer-program-individual.html)


## PASO 1. Crear una identificación de aplicación

#### ¿Qué es un identificador de aplicación?

*Un identificador de aplicación es una cadena compuesta de dos partes que se utiliza para identificar una o más aplicaciones de un solo equipo de desarrollo. La cadena consta de un Team ID y de un Bundle ID, con un punto (.) que separa las dos partes (por ejemplo, TeamID. BundleID).*

> **NOTA**
> 
> * Si ha elegido una cuenta de desarrollador Apple individual, su cuenta estará disponible de inmediato y puede crear su identificador de aplicación.
> * Si ha elegido una cuenta de desarrollador Apple como organización, debe esperar la validación de Apple para crear su identificador de aplicación.

Para crear su identificador de aplicación, seleccione [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle) desde su cuenta de desarrollador.

* Haga clic en el signo "+" junto a *Register iOS App IDs* para agregar un nuevo identificador de aplicación.

* Defina el nombre y el Bundle ID de su aplicación.

![App ID](assets/en/deploy-app-store/Developer-account-App-ID.png)

* Defina los servicios de aplicación ("App Services") a incluir en su aplicación

![App Services](assets/en/deploy-app-store/App-Services-to-include.png)

* Confirme su identificador de aplicación haciendo clic en **Register**.

![Confirm App ID](assets/en/deploy-app-store/Confirm-App-ID.png)

## PASO 2. Inicie sesión en la App Store Connect

* Conéctese a su [cuenta App Store Connect](https://appstoreconnect.apple.com)
* Haga clic en **My Apps**.

![App Store Connect](assets/en/deploy-app-store/App-Store-Connect-home-page.png)

## PASO 3. Cree una nueva aplicación iOS

Haga clic en el signo **"+"** en la esquina superior izquierda para crear una nueva aplicación iOS.

![Cree una nueva aplicación iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Agregue la siguiente información:

* **Platforms**: seleccione iOS.
* **Name**: el nombre de su aplicación.
* **Primary language**: el idioma principal de su aplicación.
* **Bundle ID**: seleccione el Bundle ID de su aplicación de la lista desplegable.
* **SKU**: un identificador único para su aplicación (se mantiene privado y no es visible para los usuarios)
* **Limit User Access (opcional)**: le permite limitar el acceso a su aplicación a los usuarios con roles de administrador, desarrollador, comercial o ventas.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)

> **NOTA**
> 
> Si su Bundle ID no está disponible, es posible que ya lo esté utilizando otra aplicación en la App Store. Tendrá que cambiar el suyo en su proyecto Xcode.

## PASO 4. Información sobre la aplicación

En App Store Connect > App Information:

* Defina la "Privacy Policy URL" de su aplicación (opcional).
* Introduzca un subtitulo para su aplicación. Aparecerá debajo del nombre de su aplicación en la App Store en iOS 11.
* Seleccione una categoría primaria y secundaria (opcional) en la cual aparecerá su aplicación.

![Información sobre la aplicación](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## PASO 5. Precios y disponibilidad

Aquí es donde se define el precio de su aplicación.

> **RECOMENDACIONES**
> 
> Puede definir descuentos por tiempo limitado especificando las fechas de inicio y de finalización.

## PASO 6. Preparación para la inscripción

En **Version Information**, agregue todos los recursos de su aplicación que desee incluir en la App Store:

> **RECOMENDACIONES**
> 
> Puede generar todas sus capturas de pantalla en el simulador (File > New Screen Shot).

![Preparación para la inscripción](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Añada las capturas de pantalla de su aplicación. Las capturas de pantalla para el iPhone 5.5 "Super Retina Display y iPad 12.9" Retina Display son obligatorias. Para más detalles, ver [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Desplácese hacia abajo y defina las **Keywords** (palabras claves) y complete la **Description** (esto es lo que los usuarios verán en la App Store).
* Puede compartir actualizaciones de su aplicación, incluidas nuevas promociones, próximas funcionalidades o contenido, ofertas por tiempo limitado u otros eventos dentro de su aplicación. También agregue un **Promotional Text** que aparecerá arriba de su descripción en la App Store (para clientes con dispositivos que funcionan con iOS 11 o con versiones posteriores).
* Ingrese un **Support URL** que incluya información de soporte para su aplicación. Esta URL estará visible en la App Store.
* **Marketing URL** es opcional. Esto puede dirigir a los usuarios a un sitio web de marketing para su aplicación.

En la sección **iOS App**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Localice las versiones de su producto en **Build**.

* En el área **General App Information**, ingrese los derechos de autor, la versión y la información de contacto del representante comercial de su aplicación.
* El icono de su aplicación se incluye en el proyecto 4D for iOS generado.
* La calificación ("rating") es una propiedad requerida para los controles parentales de la App Store. Haga clic en Editar y seleccione la categoría de edad apropiada para su aplicación.

Las secciones **App Review Information** y **Version Release** contienen información requerida por la App Store. La información suministrada aquí no será vista por los usuarios.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: información de contacto y seguridad confidenciales.
* **Version Release**: especifica una publicación automática o manual.
* Finalmente, haga clic en **Save**.
