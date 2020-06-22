---
id: multi-criteria-search
title: 検索エリアに複数のフィールドを設定する
---


<div markdown="1" class = "objectives">
**OBJECTIVES**
Activate the multi-criteria search in your own templates.
</div>

This feature is activated by default in all 4D for iOS-generated templates.

## SVGファイルを編集する

To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:

```xml
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

to:

```xml
<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

There you go! The class is the only thing you need to modify for the multi-search criteria to be active.

## プロジェクトエディター

Next, you can go to the project editor and drop several fields into the list form search area.

![Multi-criteria search in the project editor](assets/en/multi-criteria-search/multi-criteria-search-forms-section.png)

Click on the search field's delete button to modifiy the associated field list.

A menu will appear to allow you to **remove specific fields** or **remove all fields**, depending on which criteria you want to base your search(es) on.

![Modify Multi-criteria search fields](assets/en/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

おつかれさまでした！ You can now base your search(es) on multiple fields in your 4D for iOS app!
