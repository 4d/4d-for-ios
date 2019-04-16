---
id: xcode
title: Xcode
---
## Xcodeとは？

Xcodeは，macOS上で動く統合開発環境および付随する開発者ツールで構成されており，iPad，iPod，iPhone，Mac用のアプリを作成することができます。

## ダウンロード

最新版のXcodeは，App Storeからダウンロードすることができます。

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">Mac App Storeで開く </a>

  </p>
</div>

デベロッパー登録をすれば，Apple DeveloperのサイトからXcodeのプレビュー版や以前のリリースをダウンロードすることができます。

🔗 https://developer.apple.com/download/more/ 🔗 https://developer.apple.com/xcode/

## バージョン対応表

| Xcode | Swift | iOS      | 4D   |
| ----- | ----- | -------- | ---- |
| 10.0  | 4.2   | iOS 12   | 17R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17R2 |

### バージョン間の互換性

Xcodeでコンパイルされたフレームワークを別バージョンのXcodeで開くことはできません。

良いニュースです。Swift 5のリリースでは，ABI安定化に重点が置かれることになりました。

https://swift.org/abi-stability/

ABI安定化により，バイナリ形式でフレームワークを配付するための道が開かれます。

<div class="tips">
  <p>
    ABI: Application Binary Interfaceの略で，コンパイラーによって定義された，バイナリコード間の約束事のこと。
  </p>
  
  <p>
    🔗 https://ja.wikipedia.org/wiki/Application_Binary_Interface
  </p>
</div>