---
id: prerequisites
title: Conditions préalables
---
## Configuration logicielle requise

* 4D Developer Pro v17 R2 64 bits (développement)
* 4D Server v17 R2 64 bits (déploiement) 
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac (facultatif). 

Apple configurator 2 nécessite **macOS 10.14** ou une version plus récente. Installez ce logiciel si vous souhaitez installer votre application automatiquement sur votre appareil.

## Tableau de comparaison des versions

| Xcode | Swift | iOS      | 4D   |
| ----- | ----- | -------- | ---- |
| 10.2  | 5     | iOS 12.2 | 17R5 |
| 10.1  | 4.2.1 | iOS 12   | 17R4 |
| 10.0  | 4.2   | iOS 12   | 17R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17R2 |

## Configuration matérielle requise

* 8 Go de RAM (Minimum recommandé)

## Configuration 4D

* Dans les propriétés de la base de 4D, affichez la page de compatibilité et cochez la case **Utiliser la notation objet pour accéder aux propriétés des objets (Unicode nécessaire).**

![Use object notation](assets/fr/prerequisites/Use-object-notation.png)

* Les ports HTTP et HTTPS doivent être correctement configurés. Le port HTTPS est obligatoire pour le déploiement de 4D for iOS.

![Web Configuration](assets/fr/prerequisites/Web-Configuration.png)

* Votre serveur Web doit être lancé. Il est accessible depuis le menu Exécution :

![Start web server](assets/fr/prerequisites/Start-web-server.png)