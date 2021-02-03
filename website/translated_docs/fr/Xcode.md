---
id: xcode
title: Xcode
---

## Qu'est-ce que Xcode ?

Xcode est un environnement de développement intégré (IDE) et un ensemble d’outils de développement pour macOS qui permet de créer des applications Mac, iPod, iPhone et iPad.

## Téléchargement

Pour télécharger la dernière version de Xcode, rendez-vous dans l’App Store.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">Afficher dans Mac App Store </a>
</div>

Les développeurs enregistrés peuvent télécharger des aperçu des sorties ainsi que les versions antérieures de la suite 4D via le site Web d'Apple Developer.

🔗 https://developer.apple.com/download/more/ 🔗 https://developer.apple.com/xcode/

## Tableau de comparaison de version

| Xcode  | Swift | iOS  | 4D          | macOS   |
| ------ | ----- | ---- | ----------- | ------- |
| 12.4   | 5.3.2 | 14.4 | 18R6 beta   | 10.15.4 |
| 12.2   | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |
| 12.0   | 5.3   | 14.0 | 18R4        | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3        | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2        | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1        | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2        | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18          | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6        | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5        | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4        | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3        | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2        | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2        | 10.13.2 |


### Utilisation de 17R6 avec macOS 10.14.3

4d 17R6 requiert Swift5.0. (déjà installé sur macOS 10.14.4)

 - Installez `Swift 5 Runtime Support for Command Line Tools` à partir de [More Downloads for Apple Developers](https://developer.apple.com/download/more/)


### Compatibilité

Les structures compilées avec une version de Xcode peuvent être incompatibles avec une autre version.

Dans la version courante de swift(5), la stabilité de l'ABI est garantie, contrairement à la stabilité du Module. Ces deux conditions sont nécessaires pour livrer les bibliothèques pré-compilées.

Pour plus d'informations, veuillez consulter le blog de Swift. https://swift.org/blog/abi-stability-and-more/
