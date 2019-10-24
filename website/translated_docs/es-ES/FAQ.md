---
id: faq
title: FAQ
---

## Prerrequisitos

<details>
<summary>
    <strong>¿Necesito experiencia específica para utilizar 4D for iOS?</strong>
</summary>

Con 4D for iOS, puede crear fácilmente proyectos móviles directamente desde 4D, sin necesidad de experiencia previa en la creación de aplicaciones iOS nativas!

El editor de proyectos móviles se ha diseñado para que pueda utilizar 4D for iOS sin ningún conocimiento específico en el desarrollo de aplicaciones móviles.

</details>

<details>
<summary>
<strong>¿Hay algún prerrequisito para la utilización de 4D for iOS?</strong>
</summary>

### Tabla de comparación de versión

| Xcode  | Swift | iOS      | 4D   | macOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11.1   | 5.1   | iOS 13.0 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

En caso de que necesite una versión anterior de Xcode, puede descargarla aquí: https://developer.apple.com/download/more/

=> Solo los desarrolladores registrados pueden descargar versiones previas a través del sitio web de desarrolladores de Apple.

Vea la lista de requisitos previos [aquí](prerequisites.html).

</details>

<details>
<summary>
<strong>¿Puedo utilizar Windows para desarrollar con 4D for iOS?</strong>
</summary>

No. Debe desarrollar en macOS, ya que necesitamos XCode para compilar la aplicación final y para ejecutar el simulador.

</details>

## Licencia

<details>
<summary>
<strong>¿Necesito un servidor web 4D para ejecutar 4D for iOS?</strong>
</summary>

No, 4D for iOS está incluido en 4D Server v17 R2 y superiores.

</details>

<details>
<summary>
<strong>¿Hay una licencia de prueba o evaluación disponible?</strong>
</summary>

Si ya tiene una licencia 4D Developer Pro o 4D Server para 4D v17 R2 o posterior, se incluye 4D for iOS.

Si no es un Partner 4D o no participa en el programa de mantenimiento de 4D, debe esperar la salida de 4D v18.

</details>

<details>
<summary>
<strong>¿Qué licencia 4D necesito para desarrollar con 4D for iOS?</strong>
</summary>

Necesita una licencia 4D Developer Pro v17 R2 (macOS) para desarrollar aplicaciones 4D for iOS.

</details>

<details>
<summary>
<strong>¿Qué licencia 4D necesito para desplegar aplicaciones creadas con 4D for iOS?</strong>
</summary>

Necesita una licencia 4D Server (macOS o Windows) v17 R2 o una más reciente para implementar aplicaciones 4D for iOS.

No se necesita licencia adicional. Sus aplicaciones 4D for iOS compartirán las mismas licencias que las de 4D Remote (cliente).

Los clientes pueden conectarse en PC Mac o Windows o iPhones, siempre que la licencia del 4D Server cubra la cantidad total de usuarios concurrentes.

Tenga en cuenta que no tiene permiso para instalar su aplicación móvil en más dispositivos que la cantidad total de licencias remotas (cliente) de 4D Server.

</details>

<details>
<summary>
<strong>Tengo un 4D Server y una expansión para dos clientes (en total, cuatro clientes), ¿Cuántos dispositivos móviles puedo utilizar?</strong>
</summary>

Puede utilizar hasta cuatro dispositivos móviles.

</details>

## Diferentes preguntas

<details>
<summary>
<strong>Can I modify and update data from my iOS app?</strong>
</summary>

For now, 4D for iOS allows you to build read-only apps.

Future versions will allow you to add and modify your records right from your iOS app and synchronize your data with the server.

</details>

<details>
<summary>
<strong>Where is my data actually stored?</strong>
</summary>

Your data is stored locally on your iOS device. This allows you to access your data in offline mode.

</details>

<details>
<summary>
<strong>Can I use related tables in 4D for iOS?</strong>
</summary>

We know that you use a lot related tables for your business applications and we're working on accessing related tables for a future 4D for iOS release.

</details>

<details>
<summary>
<strong>Can I use calculated fields in 4D for iOS?</strong>
</summary>

You can create pre-calculated fields in 4D and publish them from the [Structure section](structure.html) of the 4D for iOS project editor.

</details>

<details>
<summary>
<strong>Do I need to have images in my database?</strong>
</summary>

Images are not mandatory, but we highly recommend that you use images to offer the best user experience.

4D for iOS offers a variety of [list form](list-form-templates.html) and [detail form](detail-form-templates.html) templates. With or without images, with charts...

</details>

<details>
<summary>
<strong>Do I need to create an icon for my iOS app?</strong>
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General](general.html) section of the project editor.

</details>

<details>
<summary>
<strong>How can I test my app?</strong>
</summary>

4D for iOS allows you to test your apps in the [Simulator](simulator.html). To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>

<details>
<summary>
<strong>Do I need to create special iOS templates to build my apps on an iPhone or iPad?</strong>
</summary>

All of templates available in 4D for iOS are optimized for the iPhone. They also work well on iPads.

</details>

<details>
<summary>
     <strong>Do I need an Apple Developer Account?</strong>
</summary>

To test your app, you'll need to create at least a [free Apple Developer account](free-developer-account.html).

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (for an in-house deployment) or in the [Apple Developer Program](register-apple-developer-program-organization.html) (for an App Store deployment).

</details>

<details>
<summary>
<strong>Can I customize my 4D for iOS app?</strong>
</summary>

4D for iOS generates a real Xcode project that you can [open and modify](open-xcode.html) according to your needs.

</details>