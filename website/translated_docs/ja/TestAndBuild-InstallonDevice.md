---
id: install-device
title: iOSデバイスにインストールする
---

> **OBJECTIVES**
> 
> Install a 4D for iOS application on a connected device

> **PREREQUISITES**
> 
> * Apple Developer Program.
> * [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate app installation (optional).

> **注記**
> 
> Apple configurator 2 requires **macOS 10.14** or later.

Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [無料のApple Developer Program](free-developer-account.html): 配付せずにテストだけできれば良い場合
* [組織](register-apple-developer-program-organization.html)または[個人向けのApple Developer Program](register-apple-developer-program-individual.html): App Store経由で配付したい場合
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): インハウスで，つまりApp Storeを経由せずに配付したい場合

Let's go through the process...

## ⒈ ⒈ アカウントを作成する

* **Apple ID**: Create your Apple ID. まだアカウントを持っていない場合，[ここ](https://appleid.apple.com/account#!&page=create)をクリックしてください。

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## ⒉ ⒈ Xcodeの設定

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID. ![デベロッパーアカウント](assets/en/test-build/Developer-Account-4D-for-iOS.png)

## ⒊ ⒉ Team IDを取得する

* [無料のApple Developer Program](free-developer-account.html)を使用しているのであれば [⒋](#step-4-team-id-for-free-account)に進みます。
* [組織](register-apple-developer-program-organization.html)または[個人向けのApple Developer Program](register-apple-developer-program-individual.html)または[Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) のアカウントを使用しているのであれば[⒌](#step-5-team-id-for-paid-subscription-account)に進みます。

## ⒋ ⒋ 無料アカウントのTeam ID

### Provisioning Profileおよび証明書は，Xcodeが自動的に生成します。

* プロジェクトエディターの画面を「ビルド」タブに切り替えて，「プロジェクトをXcodeで開く…」メニューを選択します。

![Build tab](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/en/test-build/account-Selection-Free-Account.png)

* iOSデバイスをUSBケーブルでコンピューターに接続し，XcodeのメニューバーにあるSchemeのメニュー（図を参照）をクリックして，接続中のデバイスを選択します。

![デバイスを選択する](assets/en/test-build/select-device-Free-Account.png)

* Xcodeは，アプリをビルドするために必要なProvisioning Profileと証明書を自動的に生成します。

### 無料のアカウントを使用してXcodeでプロジェクトをビルドする

* あとは，Xcodeの実行ボタン（図を参照）をクリックするだけです！

![ビルドして実行](assets/en/test-build/Build-Run-Free-Account.png)

## ⒌ ⒌ 有償アカウントのTeam ID

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![デベロッパーアカウントのメンバーシップ](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General画面](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* ⒍に進んでプロジェクトのアプリをデバイスにインストールします。

## ⒍ ⒍ インストール

### Apple Configurator 2で自動的にインストールする

* アプリが出来がったら，プロジェクトエディターの画面を「ビルド」タブに切り替えます。
* iOSデバイスをUSBケーブルでコンピューターに接続します。
* From the BUILD tab, click on **Install**.

![Install button](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* デバイス上にアプリのインストールが開始するはずです！

### Xcodeでインストールする

* アプリが出来がったら，プロジェクトエディターの画面を「ビルド」タブに切り替えます。
* iOSデバイスをUSBケーブルでコンピューターに接続します。
* From the BUILD tab, click on **Install**.

![Manual installation](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* プロジェクトのアーカイブが作成されます。

![Archive creation](assets/en/test-build/Archive-creation.png)

* アーカイブの作成に成功してダイアログが表示されたら「OK」をクリックし，アーカイブの場所をFinderで開きます。

![Reveal archive in Finder](assets/en/test-build/Reveal-archive-in-Finder.png)

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* デバイス上にアプリのインストールが開始するはずです！





