---
id: multi-criteria-search
title: Multi-criteria search
sidebar_label: Multi-criteria search
---


<div markdown="1" class = "objectives">

**OBJECTIVES**

* Acticating the multi-criteria search in your existing templates
</div>


To activate the multi-criteria search you have to change the class of your search bar in your template svg file :


## Template svg file


* To activate this feature on your existing templates, you have to modify the following class 

```
class="droppable field optional"
```

Into

```
class="droppable field optional multi-criteria"
```

## Project editor

You can then go to the project editor and drop several fields into the list form search area.

![Multi-criteria search in the project editor](assets/multi-criteria-search/multi-criteria-search-forms-section.png)

Click on the search field delete button to modifiy the associated field list. A menu will appear to allow you **remove specific fields** or **remove all fields** depending on which criteria you want to base your search on.

![Modify Multi-criteria search fields](assets/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)

Congratulation! You can now base your search on several fields in you iOS app !
