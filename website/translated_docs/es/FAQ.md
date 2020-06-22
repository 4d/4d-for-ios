---
id: faq
title: FAQ
---

## Prerrequisitos

<details>
<summary>
    **Do I need specific expertise to use 4D for iOS?**
</summary>

Con 4D for iOS, puede crear fácilmente proyectos móviles directamente desde 4D, sin necesidad de experiencia previa en la creación de aplicaciones iOS nativas!

El editor de proyectos móviles se ha diseñado para que pueda utilizar 4D for iOS sin ningún conocimiento específico en el desarrollo de aplicaciones móviles.

</details>

<details>
<summary>
**Are there any prerequisites for 4D for iOS?**
</summary>

### Tabla de comparación de versión

| Xcode  | Swift | iOS      | 4D   | iOS 13.0 |
| ------ | ----- | -------- | ---- | -------- |
| 11.4   | 5.2   | OS 13.4  | 18.2 | 10.15.2  |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18.1 | 10.14.4  |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18R2 | 10.14.4  |
| 11.2   | 5.1   | iOS 13.2 | 18   | 10.14.4  |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4  |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3  |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6  |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6  |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2  |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2  |

En caso de que necesite una versión anterior de Xcode, puede descargarla aquí: https://developer.apple.com/download/more/

=> Only registered developers can download preview releases through the Apple Developer website.

Vea la lista de requisitos previos [aquí](prerequisites.html).

</details>


<details>
<summary>
**Can I use Windows to develop with 4D for iOS?**
</summary>

No. Debe desarrollar en macOS, ya que necesitamos XCode para compilar la aplicación final y para ejecutar el simulador.

</details>


## Licencia

<details>
<summary>
**Do I need a 4D Web Server to run 4D for iOS?**
</summary>

No, 4D for iOS está incluido en 4D Server v17 R2 y superiores.

</details>



<details>
<summary>
**Is there a test or evaluation license available?**
</summary>

Si ya tiene una licencia 4D Developer Pro o 4D Server para 4D v17 R2 o posterior, se incluye 4D for iOS.

Si no es un Partner 4D o no participa en el programa de mantenimiento de 4D, debe esperar la salida de 4D v18.

</details>


<details>
<summary>
**What 4D license do I need to develop with 4D for iOS?**
</summary>

Necesita una licencia 4D Developer Pro v17 R2 o superior (macOS) para desarrollar aplicaciones 4D for iOS.

</details>


<details>
<summary>
**What 4D license do I need to deploy apps created with 4D for iOS?**
</summary>

Necesita una licencia 4D Server (macOS o Windows) v17 R2 o una más reciente para implementar aplicaciones 4D for iOS.

No se necesita licencia adicional. Sus aplicaciones 4D for iOS compartirán las mismas licencias que las de 4D Remote (cliente).

Los clientes pueden conectarse en PC Mac o Windows o iPhones, siempre que la licencia del 4D Server cubra la cantidad total de usuarios concurrentes.

</details>


<details>
<summary>
**I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?**
</summary>

Puede utilizar hasta cuatro dispositivos móviles.

</details>


## Diferentes preguntas

<details>
<summary>
**Can I modify and update data from my iOS app?**
</summary>

Sí, claro.

</details>

<details>
<summary>
**Where is my data actually stored?**
</summary>

Sus datos se almacenan localmente en su dispositivo iOS. Esto le permite acceder a sus datos en modo fuera de línea.

</details>


<details>
<summary>
**Can I use related tables in 4D for iOS?**
</summary>

Sabemos que utiliza muchas tablas relacionadas para sus aplicaciones y estamos trabajando para acceder a las tablas relacionadas en una futura versión de 4D for iOS.

</details>


<details>
<summary>
**Can I use calculated fields in 4D for iOS?**
</summary>

Puede crear campos precalculados en 4D y publicarlos desde la [ Sección de estructura ](structure.html) del editor de proyectos de 4D for iOS.

</details>


<details>
<summary>
**Do I need to have images in my database?**
</summary>

Las imágenes no son obligatorias, pero le recomendamos que las utilice para ofrecer la mejor experiencia de usuario.

4D for iOS ofrece una variedad de plantillas de [formularios listados ](list-form-templates.html) y [ formularios detallados](detail-form-templates.html). Con o sin imágenes, con gráficos...

</details>

<details>
<summary>
**Do I need to create an icon for my iOS app?**
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

Si ya tiene un icono para su aplicación 4D, puede arrastrarlo y soltarlo directamente en el área de iconos en la sección [ General ](general.html) del editor del proyecto.

</details>


<details>
<summary>
**How can I test my app?**
</summary>

4D for iOS le permite probar sus aplicaciones en el [ Simulador](simulator.html). To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details>
<summary>
**Do I need to create special iOS templates to build my apps on an iPhone or iPad?**
</summary>

Todas las plantillas disponibles en 4D for iOS están optimizadas para iPhone. También funcionan bien en iPads.

</details>



<details>
<summary>
     **Do I need an Apple Developer Account?**
</summary>

Para probar su aplicación, deberá crear al menos una [ cuenta gratuita de desarrollador Apple](free-developer-account.html).

Para desplegar una aplicación 4D for iOS, deberá inscribirse en el [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (para un despliegue interno) o en el [Apple Developer Program](register-apple-developer-program-organization.html) (para un despliegue en App Store).

</details>

<details>
<summary>
**Can I customize my 4D for iOS app?**
</summary>

4D for iOS genera un proyecto Xcode real que puede [ abrir y modificar ](open-xcode.html) según sus necesidades.

</details>




