---
id: prerequisites
title: Conditions préalables
---

## Configuration logicielle requise

* 4D Developer Pro v17 R2 64 bits (développement)
* 4D Server v17 R2 64 bits (déploiement)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac (facultatif). Apple configurator 2 nécessite **macOS 10.14** ou une version plus récente. Installez ce logiciel si vous souhaitez installer votre application automatiquement sur votre appareil.

Xcode 10.2 requires **macOS 10.14** or later.

### Utilisation de 17R6 avec macOS 10.14.3

Xcode 10.2 nécessite **macOS 10.14** ou une version plus récente.

| 4D          | Swift | iOS  | Xcode                                                                                                         | macOS   |
| ----------- | ----- | ---- | ------------------------------------------------------------------------------------------------------------- | ------- |
| 19R2        | 5.4   | 14.6 | [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 11.0.1  |
| 19          | 5.4   | 14.6 | [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 11.0.1  |
| 18R6        | 5.3.2 | 14.4 | [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip) | 10.15.4 |
| 18R5 & 18.3 | 5.3   | 14.2 | [12.2](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.2/Xcode_12.2.xip) | 10.15.4 |

<details><summary>Version history</summary>

| 4D   | Swift | iOS  | Xcode  | macOS   |
| ---- | ----- | ---- | ------ | ------- |
| 18R4 | 5.3   | 14.0 | 12.0   | 10.15.4 |
| 18R3 | 5.2.4 | 13.5 | 11.5   | 10.15.2 |
| 18.2 | 5.2   | 13.4 | 11.4   | 10.15.2 |
| 18.1 | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18R2 | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18   | 5.1   | 13.2 | 11.2   | 10.14.4 |
| 17R6 | 5.0   | 12.2 | 10.2.1 | 10.14.4 |
| 17R5 | 4.2.1 | 12.2 | 10.2   | 10.14.3 |
| 17R4 | 4.2.1 | 12   | 10.1   | 10.13.6 |
| 17R3 | 4.2   | 12   | 10.0   | 10.13.6 |
| 17R2 | 4.1.2 | 11.4 | 9.4    | 10.13.2 |
| 17R2 | 4.1   | 11.3 | 9.3.1  | 10.13.2 |
</details>

En raison de l’instabilité de l'ABI dans le langage Swift d'Apple, vous ne pouvez pas utiliser la version standard 4D 17R4 avec Xcode 10.2.

### Android

Version table:

| 4D   | Android                                               | Windows           |
| ---- | ----------------------------------------------------- | ----------------- |
| 19R2 | [4.1.2](https://developer.android.com/studio/archive) | Windows 10 64-bit |
| 19   | [4.1.2](https://developer.android.com/studio/archive) | Windows 10 64-bit |

4D for Android requires the Android SDK, including Android Studio. If not installed, it will be automatically downloaded at the launch of the 4D mobile editor on Windows:

## Configuration matérielle requise

* 8 Go de RAM (Minimum recommandé)

## Configuration 4D

* Dans les propriétés de la base de 4D, affichez la page de compatibilité et cochez la case **Utiliser la notation objet pour accéder aux propriétés des objets (Unicode nécessaire).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Les ports HTTP et HTTPS doivent être correctement configurés. HTTPS est obligatoire pour le déploiement de 4D for iOS.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Votre serveur Web doit être lancé. Il est accessible depuis le menu Exécution :

![Start web server](assets/en/prerequisites/Start-web-server.png)
