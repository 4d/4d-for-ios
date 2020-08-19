---
id: debugging-from-xcode
title: Desde Xcode
---

If you have issues during the build process, you can open your generated project with Xcode by selecting the **Open the product with Xcode** option from the **Project** Menu.

![Abra el proyecto con Xcode](assets/en/debugging/open-project-Xcode.png)

From here, select **launch your application** in the Simulator by clicking on the **Build** button and get all of the logs at the bottom of the Xcode workspace.

![Xcode logs](assets/en/debugging/Xcode-logs.png)

## Logger (registrador)

A logger is an object that allows you to log and trace operations.

For this, we use the [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) framework.

You will find the logger settings definition in your Xcode project/Settings/Settings.plist file.

![Xcode logs](assets/en/debugging/settings-plist-xcode.png)


## Niveles

You can filter and display different log levels in your console by adding log.level to your Settings.plist file.

To do so, add a row by right clicking inside the Settings.plist file and enter:
* log.level as **Key**
* Number as **Type**
* 3 as **Value** (for example)

The **available values** are:

* 0 para verbose
* 1 para la depuración
* 2 para info (valor por defecto)
* 3 for warning
* 4 for error
* 5 for severe

![Log level](assets/en/debugging/log-level.png)

For this example, if you set the log.level **Value** to 3, you will get **"warning, error and sever"** in your Xcode console.

## Formato

Puede mostrar diferentes indicadores visuales en la consola Xcode para **resaltar diferentes tipos de historiales**.

To do so, just open your Xcode project/Settings/Settings.plist file.

![Log Format](assets/en/debugging/log-format.png)

### Emoticons

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

