---
id: multi-criteria-search
title: 複数条件検索
sidebar_label: Multi-criteria search
---
<div class = "objectives"> 

**OBJECTIVES**

* Activate the multi-criteria search in your own templates</div> 

This feature is activated by default in all 4D for iOS-generated templates.

## Template svg file

* To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:

    <rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>
    
    

to:

    <rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>
    
    

There you go! The class is the only thing you need to modify for the multi-search criteria to be active.

## Project editor

Next, you can go to the project editor and drop several fields into the list form search area.

![Multi-criteria search in the project editor](assets/multi-criteria-search/multi-criteria-search-forms-section.png)

Click on the search field's delete button to modifiy the associated field list.

A menu will appear to allow you to **remove specific fields** or **remove all fields**, depending on which criteria you want to base your search(es) on.

![Modify Multi-criteria search fields](assets/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

Congratulations! You can now base your search(es) on multiple fields in your 4D for iOS app!