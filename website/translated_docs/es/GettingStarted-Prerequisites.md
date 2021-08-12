---
id: prerequisites
title: Prerrequisitos
---

## Requisitos de software

* 4D Developer Pro v17 R2 64 bits (Desarrollo)
* 4D Server v17 R2 64 bits (Despliegue)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado en su Mac (opcional). Apple configurator 2 necesita **macOS 10.14** o superior. Instale este software si desea automatizar la instalación de la aplicación en su dispositivo físico.

Xcode 10.2 requires **macOS 10.14** or later.

### Utilización de 17R6 con macOS 10.14.3

Xcode 10.2 requiere **macOS 10.14** o una versión más reciente.

| Xcode                                                                                                         | Swift | iOS  | 4D          | iOS 13.0 |
| ------------------------------------------------------------------------------------------------------------- | ----- | ---- | ----------- | -------- |
| [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 5.4   | 14.6 | 18R6 beta   | 11.0.1   |
| [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip) | 5.3.2 | 14.4 | 18R6        | 10.15.4  |
| [12.2](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.2/Xcode_12.2.xip) | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4  |

<details><summary>Version history</summary>

| Xcode  | Swift | iOS  | 4D   | iOS 13.0 |
| ------ | ----- | ---- | ---- | -------- |
| 12.0   | 5.3   | 14.0 | 18R4 | 10.15.4  |
| 11.5   | 5.2.4 | 13.5 | 18R3 | 10.15.2  |
| 11.4   | 5.2   | 13.4 | 18.2 | 10.15.2  |
| 11.3.1 | 5.1.3 | 13.3 | 18.1 | 10.14.4  |
| 11.3.1 | 5.1.3 | 13.3 | 18R2 | 10.14.4  |
| 11.2   | 5.1   | 13.2 | 18   | 10.14.4  |
| 10.2.1 | 5.0   | 12.2 | 17R6 | 10.14.4  |
| 10.2   | 4.2.1 | 12.2 | 17R5 | 10.14.3  |
| 10.1   | 4.2.1 | 12   | 17R4 | 10.13.6  |
| 10.0   | 4.2   | 12   | 17R3 | 10.13.6  |
| 9.4    | 4.1.2 | 11.4 | 17R2 | 10.13.2  |
| 9.3.1  | 4.1   | 11.3 | 17R2 | 10.13.2  |
</details>

Debido a la inestabilidad del lenguaje Apple Swift, no puede utilizar la versión estándar 4D 17R4 con Xcode 10.2.

| Android Studio                                        | 4D        | Windows           |
| ----------------------------------------------------- | --------- | ----------------- |
| [4.1.2](https://developer.android.com/studio/archive) | 18R6 beta | Windows 10 64-bit |

## Requisitos de software

* 8GB de RAM (mínimo recomendado)

## Configuración

* En las propiedades de la base 4D, visualice la página de compatibilidad y marque la casilla ** Utilizar la notación objeto para acceder a las propiedades de los objetos (se requiere Unicode).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Los puertos HTTP y HTTPS deben estar configurados correctamente. El puerto HTTPS es obligatorio para el despliegue de 4D for iOS.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Su servidor Web debe iniciarse. Está disponible en el menú Ejecutar:

![Start web server](assets/en/prerequisites/Start-web-server.png)
