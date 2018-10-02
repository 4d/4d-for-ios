---
id: multi-criteria-search
title: Multi-criteria search
sidebar_label: Multi-criteria search
---


<div markdown="1" class = "objectives">

**OBJECTIVES**

* Activating the multi-criteria search in your existing templates
</div>

This feature is activated by default in all 4D for iOS templates.


## Template svg file

* To activate this feature on your existing templates, you have to modify the following lines in your template.svg file:

```
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

Into

```
<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

As you can notice, the class is the only thing you have to change for the multi search criteria to be active.

## Project editor

You can then go to the project editor and drop several fields into the list form Search area.

![Multi-criteria search in the project editor](assets/multi-criteria-search/multi-criteria-search-forms-section.png)

Click on the search field delete button to modifiy the associated field list. 

A menu will appear to allow you **remove specific fields** or **remove all fields** depending on which criteria you want to base your search on.

![Modify Multi-criteria search fields](assets/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

Congratulation! You can now base your search on several fields in you iOS app !
