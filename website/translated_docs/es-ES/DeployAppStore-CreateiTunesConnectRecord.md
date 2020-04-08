---
id: deploy-app-store-app-store-connect
title: Crear una ficha en App Store
---

:::tip OBJECTIVES
* Create an App ID on your Developer Account
* Create your app in App Store Connect :::

:::important PREREQUISITES [Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html) :::

## PASO 1. Crear una identificación de aplicación

#### ¿Qué es un identificador de aplicación?

*An App ID is a two-part string used to identify one or more apps from a single development team. The string consists of a Team ID and a Bundle ID, with a period (.) separating the two parts (ex: TeamID.BundleID).*

:::tip NOTE
* If you have chosen an Apple Developer Account as an individual, your account is available immediately and you can create your App ID.
* If you have chosen an Apple Developer Account as an organization, you must wait for Apple validation to create your App ID. :::

To create your App ID, go to your developer account and select [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle)

* Click the + sign next to *Register iOS App IDs* to add a new App ID.

* Defina el nombre y el Bundle ID de su aplicación.

![App ID](assets/en/deploy-app-store/Developer-account-App-ID.png)

* Defina los servicios de aplicación ("App Services") a incluir en su aplicación

![App Services](assets/en/deploy-app-store/App-Services-to-include.png)

* Confirm your App ID by clicking **Register**.

![Confirm App ID](assets/en/deploy-app-store/Confirm-App-ID.png)

## PASO 2. Inicie sesión en la App Store Connect

* Conéctese a su [cuenta App Store Connect](https://appstoreconnect.apple.com)
* Click on **My Apps**.

![App Store Connect](assets/en/deploy-app-store/App-Store-Connect-home-page.png)

## PASO 3. Cree una nueva aplicación iOS

Click the **+** sign in the top left corner to create a new iOS App.

![Cree una nueva aplicación iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Add the following information:

* **Platforms**: Select iOS.
* **Name**: The name of your app.
* **Primary language**: The main language for your app.
* **Bundle ID**: Select your App Bundle ID from the dropdown list.
* **SKU**: A unique ID for your app (this stays private and is not seen by users)
* **Limit User Access (optional)**: Allows you to limit access to your app to users with App Manager, Developer, Marketer, or Sales roles.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)

:::tip NOTE If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project. :::

## PASO 4. Información sobre la aplicación

From App Store Connect > App Information:

* Defina la "Privacy Policy URL" de su aplicación (opcional).
* Introduzca un subtítulo para su aplicación. Aparecerá debajo del nombre de su aplicación en la App Store en iOS 11.
* Seleccione una categoría primaria y secundaria (opcional) en la cual aparecerá su aplicación.

![Información sobre la aplicación](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## PASO 5. Precios y disponibilidad

This is where you define the price for your app.

:::tip TIPS You can define limited-time discounts by specifying start and end dates. :::

## PASO 6. Preparación para la inscripción

Add all of the assets for your app to appear in the App Store in **Version Information**:

:::tip TIPS You can generate all of your screenshots in Simulator (File > New Screen Shot). :::

![Preparación para la inscripción](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Añada las capturas de pantalla de su aplicación. Las capturas de pantalla para el iPhone 5.5 "Super Retina Display y iPad 12.9" Retina Display son obligatorias. Para más detalles, ver [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Scroll down and define the **Keywords** and complete the **Description** (this is what users will see in the App Store).
* You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a **Promotional Text** that will appear above your description on the App Store (for customers with devices running iOS 11 or later).
* Enter a **Support URL** that includes support information for your app. This URL will be visible on the App Store.
* **Marketing URL** is optional. Esto puede dirigir a los usuarios a un sitio web de marketing para su aplicación.

In the **iOS App section**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* In **General App Information** area, enter the Copyright, Version, and Trade Representative Contact Information for your app.
* El icono de su aplicación se incluye en el proyecto 4D for iOS generado.
* La calificación ("rating") es una propiedad requerida para los controles parentales de la App Store. Haga clic en Editar y seleccione la categoría de edad apropiada para su aplicación.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information.
* **Version Release**: Specifies an automatic or manual publication.
* Finally, click **Save**.
