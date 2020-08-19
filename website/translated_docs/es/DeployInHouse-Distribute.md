---
id: deploy-in-house-distribution
title: Distribuir una aplicación interna
---

> **OBJETIVOS**
> 
> Subir su aplicación a un servidor seguro.


## PASO 1. Suba su aplicación

Suba su aplicación a un servidor seguro:

* recursos (imagen de visualización e imagen de tamaño completo)
* archivo manifest.plist
* archivo .ipa

Puede utilizar cualquier servicio de almacenamiento en la nube para distribuir su aplicación siempre que esté protegida (Dropbox, Google Drive, etc.).

> **NOTA**
> 
> Su recurso y sus URL ipa deben coincidir con las URL definidas en su archivo manifest.plist.

## PASO 2. Cree el enlace de instalación

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

```
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

Este enlace se puede utilizar al enviar correos electrónicos, anidados en una página html o incluso dentro de un código QR.

Aquí un ejemplo simple:

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*El código QR utilizado para esta documentación no está activo.*

## PASO 3. Instale su aplicación en iOS

* Instale la aplicación haciendo clic en el enlace o escaneando un código QR

![Scan and install](assets/en/deploy-in-house/Scan-and-install.png)

* Cuando abre por primera vez una aplicación empresarial que instaló manualmente, se mostrará una notificación que indica que el desarrollador de la aplicación no es de confianza en su dispositivo.

* Ignore this message and click **Cancel**.

* In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.

![Untrust developer](assets/en/deploy-in-house/Untrust-developer.png)

* Introduzca el nombre del perfil del desarrollador para que sea reconocido como confiable.

![Trust-confirmation](assets/en/deploy-in-house/Trust-confirmation.png)

* Luego puede ir a su aplicación y abrirla.

Congratulations ... you can now distribute your first app in-house!
