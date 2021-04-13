---
id: prerequisites
title: はじめにお読みください
---

## ソフトウェアのシステム要件

* 4D Developer Professional v17 R2 64ビット版（開発時）
* 4D Server v17 R2 64ビット版（運用時）
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) がMacにインストールされていること（必須ではありません）

Apple configurator 2 requires **macOS 10.14** or later. アプリをデバイスにインストールするプロセスを自動化することができます。

Xcode 10.2 requieres **macOS 10.14** or later.

## バージョン対応表

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

### 4D for iOS 17 R6 を macOS 10.14.3 で使用するには

4D for iOS 17 R6 の動作には Swift 5.0 ランタイムが必要です。 （macOS 10.14.4 はインストール済み）

 - `Swift 5 Runtime Support for Command Line Tools` を [More Downloads for Apple Developers](https://developer.apple.com/download/more/) から入手してください。

### 4D for iOS 17 R4 を Xcode 10.2 で使用するには

標準の 4D for iOS 17 R4 と Xcode 10.2 は，Apple Swift 言語の API Stability が合わないため，の組み合わせて使用することはできません。

Xcode 10.2 用の互換コンポーネントを単独でダウンロードすることができます。

`../4D.app/Contents/Resources/Internal User Components/`にインストールされている内部ユーザーコンポーネントの`4D Mobile App.4dbase`,を下記のものと入れ替えてください。

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## ハードウェアのシステム要件

* 8GB のメモリ（最低限）

## データベース設定

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![オブジェクト記法を使用する](assets/en/prerequisites/Use-object-notation.png)

* HTTP および HTTPS ポート番号は，適正に設定されている必要があります。 4D for iOS アプリの運用環境では，HTTPS が必須です。

![Web設定](assets/en/prerequisites/Web-Configuration.png)

* Webサーバーを実行してください。 実行メニューから起動することができます。

![Webサーバーを開始](assets/en/prerequisites/Start-web-server.png)
