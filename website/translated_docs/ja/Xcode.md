---
id: xcode
title: Xcode
---

## Xcodeとは？

Xcodeは，macOS上で動く統合開発環境および付随する開発者ツールで構成されており，iPad，iPod，iPhone，Mac用のアプリを作成することができます。

## ダウンロード

最新版のXcodeは，App Storeからダウンロードすることができます。

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">Mac App Storeで開く </a>
</div>

デベロッパー登録をすれば，Apple DeveloperのサイトからXcodeのプレビュー版や以前のリリースをダウンロードすることができます。

🔗 https://developer.apple.com/download/more/ 🔗 https://developer.apple.com/xcode/

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


### 互換性

特定のXcodeバージョンでコンパイルされたフレームワークを別バージョンで使用することはできません。

Swiftの現行バージョン（５）で，ABI Stability が実現しましたが，Module Stability は達成されていません。 コンパイル済みのライブラリを配付するためには，両方の Stability が必要です。

詳細はSwiftの公式ブログをご覧ください。 https://swift.org/blog/abi-stability-and-more/
