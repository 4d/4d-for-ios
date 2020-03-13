---
id: prerequisites
title: はじめにお読みください
---

## ソフトウェアのシステム要件

* 4D Developer Professional v17 R2 64ビット版（開発時）
* 4D Server v17 R2 64ビット版（運用時） 
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) がMacにインストールされていること（必須ではありません） 

Apple configurator 2 を使用するためには **macOS 10.14** 以降が必要です。 アプリをデバイスにインストールするプロセスを自動化することができます。

Xcode 10.2 を使用するためには **macOS 10.14** 以降が必要です。

## バージョン対応表

| Xcode  | Swift | iOS      | 4D   | macOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18R2 | 10.14.4 |
| 11.2   | 5.1   | iOS 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

### Using 17R6 with macOS 10.14.3

4D for iOS 17 R6 の動作には Swift 5.0 ランタイムが必要です。 （macOS 10.14.4 はインストール済み）

* `Swift 5 Runtime Support for Command Line Tools` を [More Downloads for Apple Developers](https://developer.apple.com/download/more/) から入手してください。

### Using 17R4 with Xcode 10.2

Due to apple swift language abi instability, you can not use the standard 4D 17R4 with Xcode 10.2.

Fortunately we provide an alternative component compatible with Xcode 10.2.

You can replace the internal user component `4D Mobile App.4dbase`, that you can find into `../4D.app/Contents/Resources/Internal User Components/`, by the provided one:

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## ハードウェアのシステム要件

* 8GB of RAM (Minimum recommended)

## データベース設定

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Your HTTP and HTTPS ports must be well-configured. HTTPS is mandatory for 4D for iOS deployment.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Your Web Server must be started. It's available from the Run menu:

![Start web server](assets/en/prerequisites/Start-web-server.png)