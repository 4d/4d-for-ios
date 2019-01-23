---
id: prerequisites
title: Conditions préalables
sidebar_label: Conditions préalables
---
## Configuration logicielle requise

* 4D Developer Pro v17 R2 64 bits (développement)
* 4D Server v17 R2 64 bits (déploiement) 
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac (facultatif). 

Apple configurator 2 nécessite **macOS 10.14** ou une version plus récente. Installez ce logiciel si vous souhaitez automatiser l’installation de l’application sur votre appareil.

## Tableau de comparaison de version

| Xcode | Swift | iOS      | 4D    |
| ----- | ----- | -------- | ----- |
| 10.1  | 4.2.1 | iOS 12   | 17 R4 |
| 10.0  | 4.2   | iOS 12   | 17 R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17 R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17 R2 |

## Configuration logicielle requise

* 8 Go de RAM (Minimum recommandé)

## Configuration

* Dans les propriétés de la base de 4D, affichez la page de compatibilité et cochez la case **Utiliser la notation objet pour accéder aux propriétés des objets (Unicode nécessaire).**

![Utiliser la notation objet](assets/prerequisites/Use-object-notation.png)

* Les ports HTTP et HTTPS doivent être correctement configurés. HTTPS est obligatoire pour le déploiement de 4D for iOS.

![Configuration Web](assets/prerequisites/Web-Configuration.png)

* Votre serveur Web doit être lancé. Il est accessible depuis le menu Exécution :

![Lancer le serveur Web](assets/prerequisites/Start-web-server.png)