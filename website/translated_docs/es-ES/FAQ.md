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
<strong>Tengo una aplicación con muchos datos, ¿puedo integrarla en mi dispositivo iOS?</strong>
</summary>

4D for iOs allows you to embed a maximum of 10,000 records in your app.

Por ahora, la mejor manera de tratar con grandes cantidades de datos es crear una tabla intermedia y filtrar los resultados que desea mostrar.

Las versiones futuras de 4D for iOS incluirán una forma de aplicar filtros para que solo se muestre la información requerida.

</details>

<details>
<summary>
<strong>¿Puedo modificar y actualizar los datos de mi aplicación iOS?</strong>
</summary>

Por ahora, 4D for iOS le permite crear aplicaciones de solo lectura.

Las versiones futuras le permitirán agregar y modificar sus registros directamente desde su aplicación iOS y sincronizar sus datos con el servidor.

</details>

<details>
<summary>
<strong>¿Puedo recargar únicamente los registros que han sido modificados?</strong>
</summary>

Cuando recarga datos, todos sus datos se descargan para reemplazar los datos existentes.

Se planea una sincronización incremental para una próxima versión.

</details>

<details>
<summary>
<strong>¿Dónde se almacenan realmente mis datos?</strong>
</summary>

Sus datos se almacenan localmente en su dispositivo iOS. Esto le permite acceder a sus datos en modo fuera de línea.

</details>

<details>
<summary>
<strong>¿Puedo utilizar tablas relacionadas en 4D for iOS?</strong>
</summary>

Sabemos que utiliza muchas tablas relacionadas para sus aplicaciones y estamos trabajando para acceder a las tablas relacionadas en una futura versión de 4D for iOS.

</details>

<details>
<summary>
<strong>¿Puedo utilizar campos calculados en 4D for iOS?</strong>
</summary>

Puede crear campos precalculados en 4D y publicarlos desde la [ Sección de estructura ](structure.html) del editor de proyectos de 4D for iOS.

</details>

<details>
<summary>
<strong>¿Necesito tener imágenes en mi base de datos?</strong>
</summary>

Las imágenes no son obligatorias, pero le recomendamos que las utilice para ofrecer la mejor experiencia de usuario.

4D for iOS ofrece una variedad de plantillas de [formularios listados ](list-form-templates.html) y [ formularios detallados](detail-form-templates.html). Con o sin imágenes, con gráficos...

</details>

<details>
<summary>
<strong>¿Necesito crear un ícono para mi aplicación iOS?</strong>
</summary>

Se recomienda tener un ícono para su aplicación 4D for iOS. Si no tiene uno, se mostrará el icono predeterminado (el logo 4D).

Si ya tiene un icono para su aplicación 4D, puede arrastrarlo y soltarlo directamente en el área de iconos en la sección [ General ](general.html) del editor del proyecto.

</details>

<details>
<summary>
<strong>¿Cómo puedo probar mi aplicación?</strong>
</summary>

4D for iOS le permite probar sus aplicaciones en el [ Simulador](simulator.html). Para probar su aplicación en su dispositivo iOS, necesita tener una ** cuenta de desarrollador de Apple de pago ** (install-device.html) (iPhone y iPad).

** Nota: ** para instalar su aplicación con una ** cuenta Apple de desarrollador gratuita**, puede abrir su proyecto iOS generado e instalar su aplicación con Xcode.

</details>

<details>
<summary>
<strong>¿Necesito crear plantillas especiales de iOS para crear mis aplicaciones en un iPhone o iPad?</strong>
</summary>

Todas las plantillas disponibles en 4D for iOS están optimizadas para iPhone. También funcionan bien en iPads.

</details>

<details>
<summary>
     <strong>¿Necesito una cuenta de desarrollador Apple?</strong>
</summary>

Para probar su aplicación, deberá crear al menos una [ cuenta gratuita de desarrollador Apple](free-developer-account.html).

Para desplegar una aplicación 4D for iOS, deberá inscribirse en el [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (para un despliegue interno) o en el [Apple Developer Program](register-apple-developer-program-organization.html) (para un despliegue en App Store).

</details>

<details>
<summary>
<strong>¿Puedo personalizar mi aplicación 4D for iOS?</strong>
</summary>

4D for iOS genera un proyecto Xcode real que puede [ abrir y modificar ](open-xcode.html) según sus necesidades.

</details>