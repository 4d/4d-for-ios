---
id: xcode
title: Xcode
---

## What is Xcode?

Xcode is an IDE and a set of developer tools for macOS used to create iPad, iPod, iPhone, and Mac apps.

## Download

To download the lastest version of Xcode go to the App Store.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">View in Mac App Store </a>

  </p>
</div>

Registered developers can download preview releases and prior versions of the suite through the Apple Developer website.

🔗 https://developer.apple.com/download/more/ 🔗 https://developer.apple.com/xcode/

## Version comparison table

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
    ABI: Application Binary Interface, a contract between pieces of binary code defined by the compiler.
  </p>
  
  <p>
    🔗 https://en.wikipedia.org/wiki/Application_binary_interface
  </p>
</div>