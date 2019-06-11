---
id: prerequisites
title: Prerrequisitos
---

## Requisitos de software

* 4D Developer Pro v17 R2 64 bits (Desarrollo)
* 4D Server v17 R2 64 bits (Despliegue) 
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado en su Mac (opcional). 

Apple configurator 2 necesita **macOS 10.14** o superior. Instale este software si desea automatizar la instalación de la aplicación en su dispositivo físico.

Xcode 10.2 requiere **macOS 10.14** o una versión más reciente.

## Tabla de comparación de las versiones

| Xcode | Swift | iOS      | 4D   |
| ----- | ----- | -------- | ---- |
| 10.2  | 4.2.1 | iOS 12.2 | 17R5 |
| 10.1  | 4.2.1 | iOS 12   | 17R4 |
| 10.0  | 4.2   | iOS 12   | 17R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17R2 |

### Utilización de 17R4 con Xcode 10.2

Debido a la inestabilidad del lenguaje Apple Swift, no puede utilizar la versión estándar 4D 17R4 con Xcode 10.2.

Afortunadamente ofrecemos un componente alternativo compatible con Xcode 10.2.

Puede reemplazar el componente interno del usuarior `4D App.4dbase Mobile`, que se encuentra en`... /4D.app/contents/Resources/Internal User Components/`, ppor esto proponemos:

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## Requisitos de software

* 8GB de RAM (mínimo recomendado)

## Configuración

* En las propiedades de la base 4D, visualice la página de compatibilidad y marque la casilla ** Utilizar la notación de objetos para acceder a las propiedades de los objetos (se requiere Unicode).**

![Utilización de la notación objeto](assets/en/prerequisites/Use-object-notation.png)

* Los puertos HTTP y HTTPS deben estar configurados correctamente. El puerto HTTPS es obligatorio para el despliegue de 4D for iOS.

![Configuración Web](assets/en/prerequisites/Web-Configuration.png)

* Su servidor Web debe iniciarse. Está disponible en el menú Ejecutar:

![Inicio del servidor web](assets/en/prerequisites/Start-web-server.png)