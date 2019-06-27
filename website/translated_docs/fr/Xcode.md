---
id: xcode
title: Xcode
---

## Qu'est-ce que Xcode ?

Xcode est un environnement de développement intégré (IDE) et un ensemble d’outils de développement pour macOS qui permet de créer des applications Mac, iPod, iPhone et iPad.

## Télécharger

Pour télécharger la dernière version de Xcode, rendez-vous dans l’App Store.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">Afficher dans Mac App Store </a>

  </p>
</div>

Les développeurs enregistrés peuvent télécharger des aperçu des sorties ainsi que les versions antérieures de la suite 4D via le site Web d'Apple Developer.

🔗 https://developer.apple.com/download/more/ 🔗 https://developer.apple.com/xcode/

## Tableau de comparaison de version

| Xcode  | Swift | iOS      | 4D   | MacOS   |
| ------ | ----- | -------- | ---- | ------- |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

### Use 17R6 with macOS 10.14.3

4D 17R6 requires Swift5.0 runtime. (already installed with macOS 10.14.4)

- Install `Swift 5 Runtime Support for Command Line Tools` from [More Downloads for Apple Developers](https://developer.apple.com/download/more/)

### Compatibility

Frameworks compiled with one version of Xcode could not be used with another version before the release of swift 5 (ie. 4D 17R6).

The current release of swift have ABI stability. This enables the distribution of frameworks in a binary format.

https://swift.org/abi-stability/

<div class="tips">
  <p>
    ABI : Application Binary Interface, un contrat qui lie les extraits de code binaire définis par le compilateur.
  </p>
  
  <p>
    🔗 https://en.wikipedia.org/wiki/Application_binary_interface
  </p>
</div>