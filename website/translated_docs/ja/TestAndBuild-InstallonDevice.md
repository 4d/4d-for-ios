---
id: install-device
title: iOSデバイスにインストールする
---
<div class = "objectives"> 

**やりたいこと**

Macにケーブルで接続されたデバイスに4D for iOSアプリをインストールする</div> <div class = "prerequisites"> 

**用意するもの**

* Apple Developer Programの有効なメンバーシップ
* アプリのインストールを自動化するための[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344)がMacにインストールされていること（必須ではありません）</div> <div class = "tips"> 

**注記**

Apple configurator 2の動作要件は**macOS 10.14**以降です。</div> 

Apple Developer Programのメンバーシップは，好みと必要に応じ，下記のどれかを選びます。

* [無料のApple Developer Program](free-developer-account.html): 配付せずにテストだけできれば良い場合
* [組織](register-apple-developer-program-organization.html)または[個人向けのApple Developer Program](register-apple-developer-program-individual.html): App Store経由で配付したい場合
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): インハウスで，つまりApp Storeを経由せずに配付したい場合

おおまかな流れは以下の通りです。

## ⒈ アカウントを作成する

* **Apple ID**: Apple IDを作成します。 まだアカウントを持っていない場合，[ここ](https://appleid.apple.com/account#!&page=create)をクリックしてください。

* **デベロッパーアカウント**: App Store経由の配付が目的であれば，Apple Developer Program（ 組織または個人向け），インハウス配付が目的であれば，Apple Developer Enterprise Programにサインアップします。

## ⒉ Xcodeの設定

* **デベロッパーアカウント**: Xcodeを起動し，アプリケーションメニュー ＞ Preferences ＞ Accountsを選択してApple IDを入力します。 ![デベロッパーアカウント](assets/en/test-build/Developer-Account-4D-for-iOS.png) 

## ⒊ Team IDを取得する

* [無料のApple Developer Program](free-developer-account.html)を使用しているのであれば [⒋](#step-4-team-id-for-free-account)に進みます。
* [組織](register-apple-developer-program-organization.html)または[個人向けのApple Developer Program](register-apple-developer-program-individual.html)または[Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) のアカウントを使用しているのであれば[⒌](#step-5-team-id-for-paid-subscription-account)に進みます。

## ⒋ 無料アカウントのTeam ID

### Provisioning Profileおよび証明書は，Xcodeが自動的に生成します。

* プロジェクトエディターの画面を「ビルド」タブに切り替えて，「プロジェクトをXcodeで開く…」メニューを選択します。

![「ビルド」タブ](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* **Automatically manage signing**オプションがチェックされていることを確認してください。Teamドロップダウンリストをクリックし，[ここ](free-developer-account.html)で追加したアカウントを選択します。

![アカウントの選択](assets/en/test-build/account-Selection-Free-Account.png)

* iOSデバイスをUSBケーブルでコンピューターに接続し，XcodeのメニューバーにあるSchemeのメニュー（図を参照）をクリックして，接続中のデバイスを選択します。

![デバイスの選択](assets/en/test-build/select-device-Free-Account.png)

* Xcodeは，アプリをビルドするために必要なProvisioning Profileと証明書を自動的に生成します。

### 無料のアカウントを使用してXcodeでプロジェクトをビルドする

* あとは，Xcodeの実行ボタン（図を参照）をクリックするだけです！

![ビルドして実行](assets/en/test-build/Build-Run-Free-Account.png)

## ⒌ 有償アカウントのTeam ID

* **Team ID**: Apple Developerにログインします。MembershipページにTeam IDが表示されているはずです。 ![デベロッパーアカウントのメンバーシップ](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: プロジェクトエディターの画面を「セクション」タブに切り替えて，「一般」ページの「部署名」にTeam IDを入力します。 ![General画面](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* ⒍に進んでプロジェクトのアプリをデバイスにインストールします。

## ⒍ インストール

### Apple Configurator 2で自動的にインストールする

* アプリが出来がったら，プロジェクトエディターの画面を「ビルド」タブに切り替えます。
* iOSデバイスをUSBケーブルでコンピューターに接続します。
* 「ビルド」タブの**インストール**ボタンをクリックします。

![Installボタン](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* デバイス上にアプリのインストールが開始するはずです！

### Xcodeでインストールする

* アプリが出来がったら，プロジェクトエディターの画面を「ビルド」タブに切り替えます。
* iOSデバイスをUSBケーブルでコンピューターに接続します。
* 「ビルド」タブの**インストール**ボタンをクリックします。

![マニュアル操作でインストール](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* プロジェクトのアーカイブが作成されます。

![アーカイブの作成](assets/en/test-build/Archive-creation.png)

* アーカイブの作成に成功してダイアログが表示されたら「OK」をクリックし，アーカイブの場所をFinderで開きます。

![アーカイブをFinderに表示](assets/en/test-build/Reveal-archive-in-Finder.png)

* Xcodeを起動し，アプリケーションメニュー ＞ Window ＞ Devices and Simulatorを選択して，生成されたipaファイルをInstalled Appsセクションにドラッグ＆ドロップします。

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* デバイス上にアプリのインストールが開始するはずです！