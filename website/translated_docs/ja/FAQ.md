---
id: faq
title: FAQ
---

## はじめにお読みください

<details>
<summary>
    **Do I need specific expertise to use 4D for iOS?**
</summary>

4D for iOS を使用すれば，ネイティブ iOS アプリに関する専門的な知識がない方でも，4Dから簡単にモバイルプロジェクトが作成できます！

モバイルプロジェクトエディターは，モバイルアプリ開発について特に何も知らなくても，4D for iOSが使用できるように設計されているからです。

</details>

<details>
<summary>
**Are there any prerequisites for 4D for iOS?**
</summary>

### バージョン対応表

| Xcode  | Swift | iOS  | 4D        | macOS   |
| ------ | ----- | ---- | --------- | ------- |
| 12.0   | 5.3   | 14.0 | 18R5 beta | 10.15.2 |
| 12.0   | 5.3   | 14.0 | 18R4      | 10.15.2 |
| 11.5   | 5.2.4 | 13.5 | 18R3      | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2      | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1      | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2      | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18        | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6      | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5      | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4      | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3      | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2      | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2      | 10.13.2 |

過去バージョンの Xcode は，下記のサイトから入手することができます。 https://developer.apple.com/download/more/

=> Only registered developers can download preview releases through the Apple Developer website.

[こちら](prerequisites.html)の情報もご覧ください。

</details>


<details>
<summary>
**Can I use Windows to develop with 4D for iOS?**
</summary>

いいえ。 アプリケーションのコンパイルには Xcode，テストには iOS シミュレーターを使用するため，macOS 開発する必要があります。

</details>


## ライセンス

<details>
<summary>
**Do I need a 4D Web Server to run 4D for iOS?**
</summary>

いいえ。 4D Server v17 R2 以降であれば，4D for iOS  のサーバーにすることができます。

</details>



<details>
<summary>
**Is there a test or evaluation license available?**
</summary>

4D v17 R2 以降の 4D Developer Professional または 4D Server ライセンスがあれば，4D for iOS を使用することができます。

R バージョンが利用できる 4D のパートナープログラムに未加入，あるいはv17のライセンスに「メンテナンス」プログラムが付帯していない場合，4D v18 のライセンスで利用することができます。

</details>


<details>
<summary>
**What 4D license do I need to develop with 4D for iOS?**
</summary>

macOS プラットフォームの 4D Developer Pro v17 R2 以降です。

</details>


<details>
<summary>
**What 4D license do I need to deploy apps created with 4D for iOS?**
</summary>

4D for iOSアプリと同期するサーバーアプリは 4D Server（macOS または Windows）の v17 R2 以降のライセンスで運用することができます。

4D for iOS 専用のライセンスというものはありません。 4D for iOS アプリは 4D Remote（クライアント）の余剰同時接続ライセンスを消費します。

4D Server のライセンスが許す限り，Mac・Windows・iPhone デバイスから同時に接続することができます。

</details>


<details>
<summary>
**I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?**
</summary>

最大で 4 台のデバイスから接続できます。

</details>


## その他

<details>
<summary>
**Can I modify and update data from my iOS app?**
</summary>

はい。 もちろんです！

</details>

<details>
<summary>
**Where is my data actually stored?**
</summary>

データは iOS デバイスのローカルデータベースに保存されています。 したがって，オフラインモードでもデータベースにアクセスすることができます。

</details>


<details>
<summary>
**Can I use related tables in 4D for iOS?**
</summary>

はい。もちろんです！

</details>


<details>
<summary>
**Can I use calculated fields in 4D for iOS?**
</summary>

数式を公開することはできませんが，計算済みの値をフィールドに登録しておき，そのフィールドを 4D for iOS の「[ストラクチャ](structure.html)」セクションで公開することができます。

</details>


<details>
<summary>
**Do I need to have images in my database?**
</summary>

ピクチャフィールドは必須ではありませんが，最高のユーザーエクスペリエンスを実現するためには，画像を積極的に使用することが勧められています。

4D for iOS には，バラエティに富んだ[リスト画面](list-form-templates.html)および[詳細画面](detail-form-templates.html)のテンプレートが用意されています。 画像やグラフを含まない，シンプルなデザインもあります。

</details>

<details>
<summary>
**Do I need to create an icon for my iOS app?**
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

デスクトップ版アプリのアイコンがある場合，プロジェクトエディターの「[一般](general.html)」セクションのアイコンエリアにドラッグ＆ドロップするだけで，モバイル版アプリのアイコンが自動的に作成されます。

</details>


<details>
<summary>
**How can I test my app?**
</summary>

4D for iOS で作成したアプリは，[シミュレーター](simulator.html)で手早くテストすることができます。 To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details>
<summary>
**Do I need to create special iOS templates to build my apps on an iPhone or iPad?**
</summary>

4D for iOS に用意されているテンプレートは，すべて iPhone 用に最適化されています。 しかし，iPad でも使用することができます。

</details>



<details>
<summary>
     **Do I need an Apple Developer Account?**
</summary>

4D for iOS で作成したアプリをテストするためには，最低限でも無料の [Apple Developer アカウント](free-developer-account.html) が必要です。

4D for iOS で作成したアプリを配付するためには， [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) （インハウス配付）または [Apple Developer Program](register-apple-developer-program-organization.html) （App Store 配付）に加入することが必要です。

</details>

<details>
<summary>
**Can I customize my 4D for iOS app?**
</summary>

4D for iOS は，標準の Xcode プロジェクトを出力しますので，必要であれば，[ Xcode で開いて編集する](open-xcode.html) ことができます。

</details>




