---
id: prerequisites
title: はじめにお読みください
---

## ソフトウェアのシステム要件

* 4D Developer Professional v17 R2 64ビット版（開発時）
* 4D Server v17 R2 64ビット版（運用時）
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) がMacにインストールされていること（必須ではありません） Apple configurator 2 requires **macOS 10.14** or later. アプリをデバイスにインストールするプロセスを自動化することができます。

Xcode 10.2 requires **macOS 10.14** or later.

### 4D for iOS 17 R6 を macOS 10.14.3 で使用するには

Xcode 10.2 requieres **macOS 10.14** or later.

| Xcode                                                                                                         | Swift | iOS  | 4D          | macOS   |
| ------------------------------------------------------------------------------------------------------------- | ----- | ---- | ----------- | ------- |
| [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 5.4   | 14.6 | 18R6 beta   | 11.0.1  |
| [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip) | 5.3.2 | 14.4 | 18R6        | 10.15.4 |
| [12.2](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.2/Xcode_12.2.xip) | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |

<details><summary>Version history</summary>

| Xcode  | Swift | iOS  | 4D   | macOS   |
| ------ | ----- | ---- | ---- | ------- |
| 12.0   | 5.3   | 14.0 | 18R4 | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3 | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2 | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2 | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2 | 10.13.2 |
</details>

標準の 4D for iOS 17 R4 と Xcode 10.2 は，Apple Swift 言語の API Stability が合わないため，の組み合わせて使用することはできません。

| Android Studio                                        | 4D        | Windows           |
| ----------------------------------------------------- | --------- | ----------------- |
| [4.1.2](https://developer.android.com/studio/archive) | 18R6 beta | Windows 10 64-bit |

## ハードウェアのシステム要件

* 8GB のメモリ（最低限）

## データベース設定

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![オブジェクト記法を使用する](assets/en/prerequisites/Use-object-notation.png)

* HTTP および HTTPS ポート番号は，適正に設定されている必要があります。 4D for iOS アプリの運用環境では，HTTPS が必須です。

![Web設定](assets/en/prerequisites/Web-Configuration.png)

* Webサーバーを実行してください。 実行メニューから起動することができます。

![Webサーバーを開始](assets/en/prerequisites/Start-web-server.png)
