---
id: deploy-app-store-app-store-connect
title: Crear una ficha en App Store
---

<div class = "objectives"> 

**OBJECTIVES**

* Create an App ID on your Developer Account
* Create your app in App Store Connect</div> <div class = "prerequisites"> 

**PREREQUISITES**

[Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html)</div> 

## PASO 1. Crear una identificación de aplicación

#### ¿Qué es un identificador de aplicación?

*An App ID is a two-part string used to identify one or more apps from a single development team. The string consists of a Team ID and a Bundle ID, with a period (.) separating the two parts (ex: TeamID.BundleID).*<div class = "tips"> 

**NOTA**

* If you have chosen an Apple Developer Account as an individual, your account is available immediately and you can create your App ID.
* If you have chosen an Apple Developer Account as an organization, you must wait for Apple validation to create your App ID.</div> 

To create your App ID, go to your developer account and select [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle)

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

Click the **+** sign in the top left corner to create a new iOS App.

![Cree una nueva aplicación iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Add the following information:

* **Platforms**: seleccione iOS.
* **Name**: el nombre de su aplicación.
* **Primary language**: el idioma principal de su aplicación.
* **Bundle ID**: seleccione el Bundle ID de su aplicación de la lista desplegable.
* **SKU**: un identifiant unique pour votre application (un ID privé non visible par les utilisateurs) una identificador único para su aplicación (se mantiene privado y no es visible para los usuarios)
* **Limit User Access (opcional)**: le permite limitar el acceso a su aplicación a los usuarios con roles de administrador, desarrollador, comercial o ventas.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)<div class = "tips"> 

**NOTA**

If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project.</div> 

## PASO 4. Información sobre la aplicación

From App Store Connect > App Information:

* Defina la "Privacy Policy URL" de su aplicación (opcional).
* Introduzca un subtítulo para su aplicación. Aparecerá debajo del nombre de su aplicación en la App Store en iOS 11.
* Seleccione una categoría primaria y secundaria (opcional) en la cual aparecerá su aplicación.

![Información sobre la aplicación](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## PASO 5. Precios y disponibilidad

This is where you define the price for your app.<div class = "tips"> 

**TIPS**

You can define limited-time discounts by specifying start and end dates.</div> 

## PASO 6. Preparación para la inscripción

Add all of the assets for your app to appear in the App Store in **Version Information**:<div class = "tips"> 

**TIPS**

You can generate all of your screenshots in Simulator (File > New Screen Shot).</div> 

![Preparación para la inscripción](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Añada las capturas de pantalla de su aplicación. Las capturas de pantalla para el iPhone 5.5 "Super Retina Display y iPad 12.9" Retina Display son obligatorias. Para más detalles, ver [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Desplácese hacia abajo y defina las **Keywords** (palabras claves) y complete la **Description** (esto es lo que los usuarios verán en la App Store).

* Puede compartir actualizaciones de su aplicación, incluidas nuevas promociones, próximas funcionalidades o contenido, ofertas por tiempo limitado u otros eventos dentro de su aplicación. También agregue un **Promotional Text** que aparecerá arriba de su descripción en la App Store (para clientes con dispositivos que funcionan con iOS 11 o con versiones posteriores).
* Ingrese un **Support URL** que incluya información de soporte para su aplicación. Esta URL será visible en la App Store.
* **Marketing URL** es opcional. Esto puede dirigir a los usuarios a un sitio web de marketing para su aplicación. 

In the **iOS App section**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* En el área **General App Information**, ingrese los derechos de autor, la versión y la información de contacto del representante comercial de su aplicación.
* El icono de su aplicación se incluye en el proyecto 4D for iOS generado.
* La calificación ("rating") es una propiedad requerida para los controles parentales de la App Store. Haga clic en Editar y seleccione la categoría de edad apropiada para su aplicación.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: información de contacto y seguridad confidenciales. 
* **Version Release**: especifica una publicación automática o manual.
* Finalmente, haga clic en **Save**.