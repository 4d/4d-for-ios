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

| Xcode | Swift | iOS      | 4D   |
| ----- | ----- | -------- | ---- |
| 10.2  | 4.2.1 | iOS 12.2 | 17R5 |
| 10.1  | 4.2.1 | iOS 12   | 17R4 |
| 10.0  | 4.2   | iOS 12   | 17R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17R2 |

### 17R4 と Xcode 10.2 の組み合わせについて

Swift言語のABI不安定性により，4D 17R4に統合されている4D for iOSは，Xcode 10.2に対応していません。

Xcode 10.2に対応しているバージョンの4D for iOSは，別途，ダウンロードすることができます。

`../4D.app/Contents/Resources/Internal User Components/` のコンポーネントをダウンロードした `4D Mobile App.4dbase` と入れ替えてください。

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## ハードウェアのシステム要件

* 8GB 以上のメモリ

## データベース設定

* v17以前に作成されたデータベースの場合，データベース設定ダイアログで「互換性」ページに移動し，**オブジェクトプロパティにアクセスするのにオブジェクト記法を使用（Unicode 必須）**が有効にされていることを確認してください。

![オブジェクト記法を有効にする](assets/en/prerequisites/Use-object-notation.png)

* HTTP および HTTPS の設定が有効であることを確認してください。 4D for iOSで開発したアプリをデバイスにインストールして使用するのであれば，HTTPS は必須です。

![Webサーバーのデータベース設定](assets/en/prerequisites/Web-Configuration.png)

* Webサーバーを開始してください。 実行メニューからサーバーを開始することができます。

![Webサーバーの開始](assets/en/prerequisites/Start-web-server.png)