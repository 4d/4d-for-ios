---
id: debugging-from-xcode
title: Depuis Xcode
---

If you have issues during the build process, you can open your generated project with Xcode by selecting the **Open the product with Xcode** option from the **Project** Menu.

![Ouvrez votre projet avec Xcode](assets/en/debugging/open-project-Xcode.png)

From here, select **launch your application** in the Simulator by clicking on the **Build** button and get all of the logs at the bottom of the Xcode workspace.

![Journaux Xcode](assets/en/debugging/Xcode-logs.png)

## Enregistreur

A logger is an object that allows you to log and trace operations.

For this, we use the [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) framework.

You will find the logger settings definition in your Xcode project/Settings/Settings.plist file.

![Journaux Xcode](assets/en/debugging/settings-plist-xcode.png)


## Niveaux

You can filter and display different log levels in your console by adding log.level to your Settings.plist file.

To do so, add a row by right clicking inside the Settings.plist file and enter:
* log.level as **Key**
* Number as **Type**
* 3 as **Value** (for example)

The **available values** are:

* 0 pour verbose
* 1 pour le débogage
* 2 pour info (valeur par défaut)
* 3 for warning
* 4 for error
* 5 for severe

![Niveau du journal](assets/en/debugging/log-level.png)

For this example, if you set the log.level **Value** to 3, you will get **"warning, error and sever"** in your Xcode console.

## Le format

Vous pouvez afficher différents indicateurs visuels dans la console Xcode pour **mettre en évidence différents types de journaux**.

To do so, just open your Xcode project/Settings/Settings.plist file.

![Format du journal](assets/en/debugging/log-format.png)

### Emoticons

 * prefixes[.verbose] = "🗯"
 * prefixes[.debug] = "🔹"
 * prefixes[.info] = "ℹ️"
 * prefixes[.warning] = "⚠️"
 * prefixes[.error] = "‼️"
 * prefixes[.severe] = "💣"

### Cercles

* prefixes[.verbose] = "🔘"
* prefixes[.debug] = "🔵"
* prefixes[.info] = "⚪"
* prefixes[.warning] = "☢️"
* prefixes[.error] = "🔴"
* prefixes[.severe] = "⚫"

