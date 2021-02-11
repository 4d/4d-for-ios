---
id: faq
title: FAQ
---

## Prerrequisitos

<details>
<summary>
    **¿Necesito experiencia específica para utilizar 4D for iOS?**
</summary>

Con 4D for iOS, puede crear fácilmente proyectos móviles directamente desde 4D, sin necesidad de experiencia previa en la creación de aplicaciones iOS nativas!

El editor de proyectos móviles se ha diseñado para que pueda utilizar 4D for iOS sin ningún conocimiento específico en el desarrollo de aplicaciones móviles.

</details>

<details>
<summary>
**¿Hay algún prerrequisito para la utilización de 4D for iOS?**
</summary>

### Tabla de comparación de versión

| Xcode  | Swift | iOS  | 4D          | iOS 13.0 |
| ------ | ----- | ---- | ----------- | -------- |
| 12.4   | 5.3.2 | 14.4 | 18R6 beta   | 10.15.4  |
| 12.2   | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4  |
| 12.0   | 5.3   | 14.0 | 18R4        | 10.15.4  |
| 11.5   | 5.2.4 | 13.5 | 18R3        | 10.15.2  |
| 11.4   | 5.2   | 13.4 | 18.2        | 10.15.2  |
| 11.3.1 | 5.1.3 | 13.3 | 18.1        | 10.14.4  |
| 11.3.1 | 5.1.3 | 13.3 | 18R2        | 10.14.4  |
| 11.2   | 5.1   | 13.2 | 18          | 10.14.4  |
| 10.2.1 | 5.0   | 12.2 | 17R6        | 10.14.4  |
| 10.2   | 4.2.1 | 12.2 | 17R5        | 10.14.3  |
| 10.1   | 4.2.1 | 12   | 17R4        | 10.13.6  |
| 10.0   | 4.2   | 12   | 17R3        | 10.13.6  |
| 9.4    | 4.1.2 | 11.4 | 17R2        | 10.13.2  |
| 9.3.1  | 4.1   | 11.3 | 17R2        | 10.13.2  |

En caso de que necesite una versión anterior de Xcode, puede descargarla aquí: https://developer.apple.com/download/more/

=> Solo los desarrolladores registrados pueden descargar versiones previas a través del sitio web de desarrolladores de Apple.

Vea la lista de requisitos previos [aquí](prerequisites.html).

</details>


<details>
<summary>
**¿Puedo utilizar Windows para desarrollar con 4D for iOS?**
</summary>

No. Debe desarrollar en macOS, ya que necesitamos XCode para compilar la aplicación final y para ejecutar el simulador.

</details>


## Licencia

<details>
<summary>
**¿Necesito un servidor web 4D para ejecutar 4D for iOS?**
</summary>

No, 4D for iOS está incluido en 4D Server v17 R2 y superiores.

</details>



<details>
<summary>
**¿Hay una licencia de prueba o evaluación disponible?**
</summary>

Si ya tiene una licencia 4D Developer Pro o 4D Server para 4D v17 R2 o posterior, se incluye 4D for iOS.

Si no es un Partner 4D o no participa en el programa de mantenimiento de 4D, debe esperar la salida de 4D v18.

</details>


<details>
<summary>
**¿Qué licencia 4D necesito para desarrollar con 4D for iOS?**
</summary>

Necesita una licencia 4D Developer Pro v17 R2 o superior (macOS) para desarrollar aplicaciones 4D for iOS.

</details>


<details>
<summary>
**¿Qué licencia 4D necesito para desplegar aplicaciones creadas con 4D for iOS?**
</summary>

Necesita una licencia 4D Server (macOS o Windows) v17 R2 o una más reciente para implementar aplicaciones 4D for iOS.

No se necesita licencia adicional. Sus aplicaciones 4D for iOS compartirán las mismas licencias que las de 4D Remote (cliente).

Los clientes pueden conectarse en PC Mac o Windows o iPhones, siempre que la licencia del 4D Server cubra la cantidad total de usuarios concurrentes.

</details>


<details>
<summary>
**Tengo un 4D Server y una expansión para dos clientes (en total, cuatro clientes), ¿Cuántos dispositivos móviles puedo utilizar?**
</summary>

Puede utilizar hasta cuatro dispositivos móviles.

</details>


## Diferentes preguntas

<details>
<summary>
**¿Puedo modificar y actualizar los datos de mi aplicación iOS?**
</summary>

Sí, claro.

</details>

<details>
<summary>
**¿Dónde se almacenan realmente mis datos?**
</summary>

Sus datos se almacenan localmente en su dispositivo iOS. Esto le permite acceder a sus datos en modo fuera de línea.

</details>


<details>
<summary>
**¿Puedo utilizar tablas relacionadas en 4D for iOS?**
</summary>

Sabemos que utiliza muchas tablas relacionadas para sus aplicaciones y estamos trabajando para acceder a las tablas relacionadas en una futura versión de 4D for iOS.

</details>


<details>
<summary>
**¿Puedo utilizar campos calculados en 4D for iOS?**
</summary>

Puede crear campos precalculados en 4D y publicarlos desde la [ Sección de estructura ](structure.html) del editor de proyectos de 4D for iOS.

</details>


<details>
<summary>
**¿Necesito tener imágenes en mi base de datos?**
</summary>

Las imágenes no son obligatorias, pero le recomendamos que las utilice para ofrecer la mejor experiencia de usuario.

4D for iOS ofrece una variedad de plantillas de [formularios listados ](list-form-templates.html) y [ formularios detallados](detail-form-templates.html). Con o sin imágenes, con gráficos...

</details>

<details>
<summary>
**¿Necesito crear un ícono para mi aplicación iOS?**
</summary>

Es muy recomendable tener un icono para su aplicación 4D for iOS. Si no tiene uno, se mostrará el icono por defecto (el logo 4D).

Si ya tiene un icono para su aplicación 4D, puede arrastrarlo y soltarlo directamente en el área de iconos en la sección [ General ](general.html) del editor del proyecto.

</details>


<details>
<summary>
**¿Cómo puedo probar mi aplicación?**
</summary>

4D for iOS le permite probar sus aplicaciones en el [ Simulador](simulator.html). Para probar su aplicación en su dispositivo iOS, necesita tener una ** cuenta de desarrollador de Apple de pago ** (install-device.html) (iPhone y iPad).

** Nota: ** para instalar su aplicación con una ** cuenta Apple de desarrollador gratuita**, puede abrir su proyecto iOS generado e instalar su aplicación con Xcode.

</details>


<details>
<summary>
**¿Necesito crear plantillas especiales de iOS para crear mis aplicaciones en un iPhone o iPad?**
</summary>

Todas las plantillas disponibles en 4D for iOS están optimizadas para iPhone. También funcionan bien en iPads.

</details>



<details>
<summary>
     **¿Necesito una cuenta de desarrollador Apple?**
</summary>

Para probar su aplicación, deberá crear al menos una [ cuenta gratuita de desarrollador Apple](free-developer-account.html).

Para desplegar una aplicación 4D for iOS, deberá inscribirse en el [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (para un despliegue interno) o en el [Apple Developer Program](register-apple-developer-program-organization.html) (para un despliegue en App Store).

</details>

<details>
<summary>
**¿Puedo personalizar mi aplicación 4D for iOS?**
</summary>

4D for iOS genera un proyecto Xcode real que puede [ abrir y modificar ](open-xcode.html) según sus necesidades.

</details>




