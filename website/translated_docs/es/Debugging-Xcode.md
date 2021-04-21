---
id: debugging-from-xcode
title: Desde Xcode
---

Si tiene algún problema durante el proceso de creación, puede abrir su proyecto generado con Xcode seleccionando la opción ** Abrir el producto con Xcode ** en el menú **Project**.

![Abra el proyecto con Xcode](assets/en/debugging/open-project-Xcode.png)

Desde aquí puede ** lanzar su aplicación ** en el simulador haciendo clic en el **botón Generar** y obtener todos los historiales en la parte inferior del espacio de trabajo Xcode.

![Historiales Xcode](assets/en/debugging/Xcode-logs.png)

## Logger (registrador)

Un registrador es un objeto que le permitirá registrar y rastrear.

Para eso utilizamos [XCGLogger](https://github.com/DaveWoodCom/XCGLogger).

Encontrará la definición de los parámetros del registrador en su proyecto Xcode/Settings/Settings.plist.

![Historiales Xcode](assets/en/debugging/settings-plist-xcode.png)


## Niveles

Puede filtrar y mostrar diferentes niveles de registro en su consola agregando log.level en su archivo Settings.plist.

Para hacerlo, agregue una línea haciendo clic derecho en el archivo Settings.plist e ingrese:
* log.level como llave
* Número como tipo
* 3 como valor (por ejemplo)

Los **valores disponibles** son los siguientes:

* 0 para verbose
* 1 para la depuración
* 2 para info (valor por defecto)
* 3 advertencia
* 4 error
* 5 severo

![Nivel del historial](assets/en/debugging/log-level.png)

Entonces, para este ejemplo, si define el valor log.level Value en 3, obtendrá una **advertencia, un error y un severo ** en su consola Xcode.

## Formato

Puede mostrar diferentes indicadores visuales en la consola Xcode para **resaltar diferentes tipos de historiales**.

Para hacerlo, solo tiene que abrir su proyecto Xcode/Settings/Settings.plist

![Formato del historial](assets/en/debugging/log-format.png)

### Emoticones

 * prefixes[.verbose] = "🗯"
 * prefixes[.debug] = "🔹"
 * prefixes[.info] = "ℹ️"
 * prefixes[.warning] = "⚠️"
 * prefixes[.error] = "‼️"
 * prefixes[.severe] = "💣"

### Círculos

* prefixes[.verbose] = "🔘"
* prefixes[.debug] = "🔵"
* prefixes[.info] = "⚪"
* prefixes[.warning] = "☢️"
* prefixes[.error] = "🔴"
* prefixes[.severe] = "⚫"

