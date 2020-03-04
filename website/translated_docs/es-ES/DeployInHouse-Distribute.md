---
id: deploy-in-house-distribution
title: Distribuir una aplicación interna
---

:::tip OBJECTIVES Upload your app to a secured server. :::

## PASO 1. Suba su aplicación

Upload your app files to a secured server:

* recursos (imagen de visualización e imagen de tamaño completo)
* archivo manifest.plist
* archivo .ipa

You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.).

:::tip NOTE Your asset and ipa URLs must match the URLs defined in your manifest.plist file. :::

## PASO 2. Cree el enlace de instalación

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

    itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist
    
    

This link can be used when sending emails, embedded in an html page, or even within a QR code.

Here is a simple example:

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*The QR Code used for this documentation is not active.*

## PASO 3. Instale su aplicación en iOS

* Instale la aplicación haciendo clic en el enlace o escaneando un código QR

![Scan and install](assets/en/deploy-in-house/Scan-and-install.png)

* Cuando abre por primera vez una aplicación empresarial que instaló manualmente, se mostrará una notificación que indica que el desarrollador de la aplicación no es de confianza en su dispositivo.

* Ignore este mensaje y haga clic en **Cancel**.

* En Reglas > General > Gestión de perfiles; Gestión de dispositivo, en el encabezado "Enterprise App", se lista el perfil del desarrollador.

![Untrust developer](assets/en/deploy-in-house/Untrust-developer.png)

* Introduzca el nombre del perfil del desarrollador para que sea reconocido como confiable.

![Trust-confirmation](assets/en/deploy-in-house/Trust-confirmation.png)

* Luego puede ir a su aplicación y abrirla.

¡Felicidades! you can now distribute your first app in-house!