---
id: prerequisites
title: Prerrequisitos
---

## Requisitos de software

* 4D Developer Pro v17 R2 64 bits (Desarrollo)
* 4D Server v17 R2 64 bits (Despliegue)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado en su Mac (opcional).

Apple configurator 2 requires **macOS 10.14** or later. Instale este software si desea automatizar la instalación de la aplicación en su dispositivo físico.

Xcode 10.2 requieres **macOS 10.14** or later.

## Tabla de comparación de versión

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

### Utilización de 17R6 con macOS 10.14.3

4D 17R6 requiere Swift5.0 runtime. (ya instalado con macOS 10.14.4)

 - Instale `Swift 5 Runtime Support for Command Line Tools` desde [More Downloads for Apple Developers](https://developer.apple.com/download/more/)

### Utilización de 17R4 con Xcode 10.2

Debido a la inestabilidad del lenguaje Apple Swift, no puede utilizar la versión estándar 4D 17R4 con Xcode 10.2.

Afortunadamente ofrecemos un componente alternativo compatible con Xcode 10.2.

Puede reemplazar el componente interno del usuarior `4D App.4dbase Mobile`, que se encuentra en`... /4D.app/contents/Resources/Internal User Components/`, por esto proponemos:

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## Requisitos de software

* 8GB de RAM (mínimo recomendado)

## Configuración

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Los puertos HTTP y HTTPS deben estar configurados correctamente. El puerto HTTPS es obligatorio para el despliegue de 4D for iOS.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Su servidor Web debe iniciarse. Está disponible en el menú Ejecutar:

![Start web server](assets/en/prerequisites/Start-web-server.png)
