---
id: xcode
title: Xcode
---

## What is Xcode?

Xcode is an IDE and a set of developer tools for macOS used to create iPad, iPod, iPhone, and Mac apps.

## Download

To download the lastest version of Xcode go to the App Store.

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">View in Mac App Store </a>
</div>

Registered developers can download preview releases and prior versions of the suite through the Apple Developer website.

🔗 https://developer.apple.com/download/more/
🔗 https://developer.apple.com/xcode/

## Version comparison table

| Xcode | Swift | iOS | 4D | macOS |
|---|---|---|---|---|
| 12.4 | 5.3.2| 14.4 | 18R6 beta | 10.15.4 |
| 12.2 | 5.3 | 14.2 | 18R5 & 18.3 | 10.15.4 |
| 12.0 | 5.3 | 14.0|18R4|10.15.4|
| 11.5 | 5.2.4 | 13.5|18R3|10.15.2|
| 11.4 | 5.2 | 13.4|18.2|10.15.2|
| 11.3.1 | 5.1.3 | 13.3| 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3| 18R2 | 10.14.4 |
| 11.2 | 5.1 | 13.2| 18 | 10.14.4 |
| 10.2.1 | 5.0 | 12.2 | 17R6 | 10.14.4 |
| 10.2 | 4.2.1 | 12.2 | 17R5 | 10.14.3 |
| 10.1 | 4.2.1 | 12 | 17R4 | 10.13.6 |
| 10.0 | 4.2 | 12 | 17R3 | 10.13.6 |
| 9.4| 4.1.2| 11.4 | 17R2 | 10.13.2 |
| 9.3.1| 4.1| 11.3 | 17R2 | 10.13.2 |


### Use 17R6 with macOS 10.14.3

4D 17R6 requires Swift5.0 runtime. (already installed with macOS 10.14.4)

 - Install `Swift 5 Runtime Support for Command Line Tools` from [More Downloads for Apple Developers](https://developer.apple.com/download/more/)


### Compatibility

Frameworks compiled with one version of Xcode could not be used with another version.

The current release of swift(5) has ABI stability but no Module Stability. This two condition are needed to ship pre-compiled libraries.

Please see the Swift blog for more details.
https://swift.org/blog/abi-stability-and-more/
