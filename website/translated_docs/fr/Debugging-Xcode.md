---
id: debugging-from-xcode
title: Depuis Xcode
---

If you encounter any issue during the build process, you can open your project with Xcode by selecting the **Open the product with Xcode** option from the **Project** Menu.

![Ouvrez votre projet avec Xcode](assets/en/debugging/open-project-Xcode.png)

From here, you can **launch your application** in the Simulator by clicking on the **Build button** and get all the logs at the bottom of the Xcode work space.

![Journaux Xcode](assets/en/debugging/Xcode-logs.png)

## Enregistreur

Un enregistreur est un objet qui vous permettra d'enregistrer et de tracer.

Pour ce faire, nous utilisons [XCGLogger](https://github.com/DaveWoodCom/XCGLogger).

Vous trouverez la définition des paramètres de l'enregistreur dans votre projet Xcode/Settings/Settings.plist.

![Journaux Xcode](assets/en/debugging/settings-plist-xcode.png)


## Niveaux

Vous pouvez filtrer et afficher différents niveaux de journalisation dans votre console en ajoutant log.level dans votre fichier Settings.plist.

Pour cela, ajoutez une ligne en faisant un clic droit dans le fichier Settings.plist et entrez :
* log.level comme clé
* Nombre comme type
* 3 comme valeur (par exemple)

Les **valeurs disponibles** sont les suivantes :

* 0 pour verbose
* 1 pour le débogage
* 2 pour info (valeur par défaut)
* 3 avertissement
* 4 erreur
* 5 sévère

![Niveau du journal](assets/en/debugging/log-level.png)

Donc, pour cet exemple, si vous définissez la valeur log.level sur 3, vous obtiendrez un **avertissement, une erreur et un sévère** dans votre console Xcode.

## Le format

Vous pouvez afficher différents indicateurs visuels dans la console Xcode pour **mettre en évidence différents types de journaux**.

Pour ce faire, il vous suffit d'ouvrir votre projet Xcode/Settings/Settings.plist

![Format du journal](assets/en/debugging/log-format.png)

### Émoticônes

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

