---
id: svg-file-listform-template
title: Template.svg
sidebar_label: Template.svg
---
Le fichier template.svg est une représentation visuelle basique d’un modèle. Dans ce fichier, vous définirez des zones afin d'ajouter des champs à votre modèle de formulaire Liste depuis l’éditeur de projet.

Voici une version finale :

![Template svg file](assets/custom-listform/template-svg-file.png)

Ouvrez le fichier template.svg avec l'éditeur de code de votre choix.

Concentrons-nous sur les différentes parties de votre fichier SVG et sur ce que vous aurez besoin de modifier.

## Titre

    <title>Custom List form</title>
    

Ajoutez ici le titre de votre modèle.

## ios:values

    <text id="cookery" ios:values="search,section,f1,f2,f3"/>
    

Inclut les identifiants qui définissent les zones de votre formulaire : - **search ID** : en référence à la zone de champ recherche. Cela vous permettra de glisser et déposer un champ comme étant le critère de recherche dans votre formulaire Liste (facultatif). - **section ID** : en référence à la zone du champ section. Cela vous permettra de glisser et déposer un champ comme étant le critère de tri dans votre formulaire Liste (facultatif). - **f1, f2 et f3** : en référence aux champs à afficher dans chaque cellule de votre formulaire Liste. Cela vous permettra de glisser et déposer les champs à faire apparaitre dans les cellules de votre formulaire Liste.

## Area position, height, width and type

You can define the position, height and width for: * Searchfield * Sectionfield * Other general fields that will be displayed in each table cell

### SearchableField area:

    //1
    <g transform="translate(0,60)”>
    
    //2
    <rect class="bg field" x="14" y="12" width="238" height="30”/> 
    
    //3
    <path class="magnifyingGlass" transform="translate(20,8) scale(1)”/>
    
    //4
    <textArea id="search.label" class="label" x="14" y="8" width="238">$4DEVAL(:C991("fieldToUseForSearch"))</textArea>
    
    //5
    <rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type=“0,1,2,4,8,9,11,25,35"  ios:bind="searchableField”/> 
    
    //6
    <use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden”/> //6
    </g>
    

1. Entire area Y position
2. Area background position, height, and width
3. Icon to display a magnifying glass icon into the searchable field
4. Define the text area position and width 
5. Define the droppable field position, height, and width, as well as accepted **field types**
6. Define a cancel button that will be displayed to delete the current content

The searchable field is optional.<div class = "tips"> 

**NOTE**

* All Field and Variable Types are available [here](http://doc.4d.com/4Dv17/4D/17/Field-and-Variable-Types.302-3729410.en.html)</div> 

<

div markdown="1" class = "tips">

**TIP**

* To make field type definition easier, 4D for iOS allows you to include field types with **positive values** and also exclude field types with **negative values**. For example, ```ios:type="-3,-4"``` will allow you to drag and drop every field exept images and dates.

* To include all types, just type ```ios:type="all"```.

</div>

### SectionField area:

    //1
    <rect class="bg field" x="10" y="110" width="246" height="30”/>
    
    //2 
    <textArea id="section.label" class="label" x="10" y="118" width="246">$4DEVAL(:C991("fieldToUseAsSection"))</textArea>
    
    //3
    <rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField”/>
    
    //4
    <use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>
    

1. Area background position, height and width
2. Define the text area position and width 
3. Define the droppable field position, height and width as well as accepted **field types**
4. Define a cancel button that will be displayed to delete the current content

The section field is optional.

### ImageField area:

    //1
    <g transform="translate(0,162)">
    
    //2
    <rect class="bg field" x="14" y="0" width="60" height="65"/>
    
    //3
    <path class="picture" transform="translate(-60 0) scale(5)"/>
    
    //4
    <textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>
    
    //5
    <rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>
    
    //6
    <use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>
    </g>
    

1. Entire area Y position
2. Area background position, height and width
3. Icon to display an image in the imageField
4. Define the text area position and width 
5. Define the droppable field position, height and width as well as accepted **field types**
6. Define a cancel button that will be displayed to delete the current content

### Title Field area:

    //1
    <g transform="translate(0,162)”>
    
    //2
    <rect class="bg field" x="84" y="0" width="168" height="30”/>
    
    //3
    <textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>
    
    //4
    <rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]”/>
    
    //5
    <use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
    </g>
    

1. Entire area Y position
2. Area background position, height and width
3. Define the text area position and width 
4. Define the droppable field position, height and width as well as accepted **field types**
5. Define a cancel button that will be displayed to delete the current content

### Subtitle Field area:

    //1
    <g transform="translate(0,198)”>
    
    //2
    <rect class="bg field" x="84" y="0" width="168" height="30”/>
    
    //3
    <textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>
    
    //4
    <rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]”/>
    
    //5
    <use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
    </g>
    

1. Entire area Y position
2. Area background position, height and width
3. Define the text area position and width 
4. Define the droppable field position, height and width as well as accepted **field types**
5. Define a cancel button that will be displayed to delete the current content

Now that you have an **icon**, a **basic template description** in the manifest.json file, and your **svg file** ... let's move on to the fun part with Xcode!