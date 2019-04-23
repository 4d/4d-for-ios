---
id: manifest-listform-template
title: manifest.json
---
manifestファイルには， ストーリーボードの**タイプ**（リストフォームあるいは詳細フォーム）・**名称**・**セル毎のフィールド数**といった情報が記述されています。

    {
    //1
      "type": "listform",
    
    //2
      "name": "Custom List form",
    
    //3
      "fields": {
        "count": 3
      }
    }
    
    

上記のmanifestファイルを解読すると，下記のことがわかります。

1. **ストーリーボード**: タイプはlistformです。
2. **名称**: Custom List formというテンプレート名です。
3. **フィールド数**: 各行のセルには３個のフィールド（プロフィール画像・タイトル・サブタイトル）が表示されます。