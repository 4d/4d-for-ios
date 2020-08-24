---
id: debugging-from-xcode
title: Desde Xcode
---

Si tiene problemas durante el proceso de creación, puede abrir su proyecto generado con Xcode seleccionando la opción ** Abrir el producto con Xcode ** en el menú **Project**.

![Abra el proyecto con Xcode](assets/en/debugging/open-project-Xcode.png)

Desde aquí, puede ** lanzar su aplicación ** en el simulador haciendo clic en el **botón Generar** y obtener todos los historiales en la parte inferior del espacio de trabajo Xcode.

![Historiales Xcode](assets/en/debugging/Xcode-logs.png)

## Logger (registrador)

Un registrador es un objeto que le permite registrar y rastrear operaciones.

Para esto, utilizamos [XCGLogger](https://github.com/DaveWoodCom/XCGLogger).

Encontrará la definición de los parámetros del registrador en su archivo Xcode project/Settings/Settings.plist.

![Historiales Xcode](assets/en/debugging/settings-plist-xcode.png)


## Niveles

Puede filtrar y mostrar diferentes niveles de historiales en su consola agregando log.level en su archivo Settings.plist.

Para hacerlo, agregue una línea haciendo clic derecho en el archivo Settings.plist e ingrese:
* log.level como **Key**
* Número como **Type**
* 3 como **Value** (por ejemplo)

Los **valores disponibles** son:

* 0 para verbose
* 1 para la depuración
* 2 para info (valor por defecto)
* 3 para advertencia
* 4 para error
* 5 para severo

![Nivel del historial](assets/en/debugging/log-level.png)

Para este ejemplo, si define el **Valor** log.level en 3, obtendrá una **"advertencia, un error y un severo"** en su consola Xcode.

## Formato

Puede mostrar diferentes indicadores visuales en la consola Xcode para **resaltar diferentes tipos de historiales**.

Para hacerlo, solo abra su archivo project Xcode/Settings/Settings.plist.

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

