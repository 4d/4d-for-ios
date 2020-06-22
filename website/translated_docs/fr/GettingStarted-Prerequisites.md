---
id: prerequisites
title: Conditions préalables
---

## Configuration logicielle requise

* 4D Developer Pro v17 R2 64 bits (développement)
* 4D Server v17 R2 64 bits (déploiement)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac (facultatif).

Apple configurator 2 requires **macOS 10.14** or later. Installez ce logiciel si vous souhaitez installer votre application automatiquement sur votre appareil.

Xcode 10.2 requieres **macOS 10.14** or later.

## Tableau de comparaison de version

| Xcode  | Swift | iOS      | 4D   | macOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11.4   | 5.2   | OS 13.4  | 18.2 | 10.15.2 |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18R2 | 10.14.4 |
| 11.2   | 5.1   | iOS 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

### Utilisation de 17R6 avec macOS 10.14.3

4d 17R6 requiert Swift5.0. (déjà installé sur macOS 10.14.4)

 - Installez `Swift 5 Runtime Support for Command Line Tools` à partir de [More Downloads for Apple Developers](https://developer.apple.com/download/more/)

### Utilisation de 17R4 avec Xcode 10.2

En raison de l’instabilité de l'ABI dans le langage Swift d'Apple, vous ne pouvez pas utiliser la version standard 4D 17R4 avec Xcode 10.2.

Heureusement, nous vous proposons un composant de substitution compatible avec Xcode 10.2.

Vous pouvez remplacer le composant interne de l’utilisateur `4D App.4dbase Mobile`, qui se trouve dans `... /4D.app/Contents/Resources/Internal User Components/`, par celui que nous vous proposons :

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## Configuration matérielle requise

* 8 Go de RAM (Minimum recommandé)

## Configuration 4D

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Les ports HTTP et HTTPS doivent être correctement configurés. HTTPS est obligatoire pour le déploiement de 4D for iOS.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Votre serveur Web doit être lancé. Il est accessible depuis le menu Exécution :

![Start web server](assets/en/prerequisites/Start-web-server.png)
