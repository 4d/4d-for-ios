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

## Emplacement, hauteur, largeur et type de la zone

Vous pouvez définir l'emplacement, la hauteur et la largeur de : * Searchfield * Sectionfield * d'autres champs à afficher dans chaque cellule d'une table

### Zone SearchableField :

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
    

1. Emplacement de toute la zone Y
2. Emplacement, hauteur et largeur de la zone d'arrière-plan
3. Image affichant l'icône loupe dans le "searchable field" (champ de recherche)
4. Définir l'emplacement de la zone de texte et la largeur 
5. Définir l'emplacement du champ "droppable", la hauteur et la largeur, ainsi que les **types de champs** acceptés
6. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

Le "searchable field" (champ de recherche) est facultatif.<div class = "tips"> 

**NOTE**

* Tous les types de champ et de variables sont disponible [ici](http://doc.4d.com/4Dv17/4D/17/Field-and-Variable-Types.302-3729410.en.html)</div> 

<

div markdown="1" class = "tips">

**CONSEILS**

* Pour faciliter la définition des type de champs, 4D for iOS vous permet d’inclure des types de champs avec des **valeurs positives** et d'exclure des types de champs avec des **valeurs négatives**. Par exemple, ```ios:type="-3,-4"``` vous permettra de glisser-déposer chaque champ à l'exception des images et des dates.

* Pour inclure tous les types, il suffit de taper ```ios:type="all"```.

</div>

### Zone SectionField :

    //1
    <rect class="bg field" x="10" y="110" width="246" height="30”/>
    
    //2 
    <textArea id="section.label" class="label" x="10" y="118" width="246">$4DEVAL(:C991("fieldToUseAsSection"))</textArea>
    
    //3
    <rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField”/>
    
    //4
    <use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>
    

1. Emplacement, hauteur et largeur de la zone d'arrière-plan
2. Définir l'emplacement de la zone de texte et la largeur 
3. Définir l'emplacement du champ "droppable", sa hauteur et sa largeur, ainsi que les **types de champs** acceptés
4. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

Le "section field" (champ de section) est facultatif.

### Zone ImageField :

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
    

1. Emplacement de toute la zone Y
2. Emplacement, hauteur et largeur de la zone d'arrière-plan
3. Icône affichant une image dans imageField (le champ image)
4. Définir l'emplacement et la largeur de la zone de texte 
5. Définir l'emplacement du champ "droppable", sa hauteur et sa largeur, ainsi que les **types de champs** acceptés
6. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

### Zone Title Field :

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
    

1. Emplacement de toute la zone Y
2. Emplacement, hauteur et largeur de la zone d'arrière-plan
3. Définir l'emplacement et la largeur de la zone de texte 
4. Définir l'emplacement du champ "droppable", sa hauteur et sa largeur, ainsi que les **types de champs** acceptés
5. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

### Zone Subtitle Field :

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
    

1. Emplacement de toute la zone Y
2. Emplacement, hauteur et largeur de la zone d'arrière-plan
3. Définir l'emplacement et la largeur de la zone de texte 
4. Définir l'emplacement du champ "droppable", sa hauteur et sa largeur, ainsi que les **types de champs** acceptés
5. Définir un bouton "Annuler" qui s’affichera pour effacer le contenu courant

Now that you have an **icon**, a **basic template description** in the manifest.json file, and your **svg file** ... let's move on to the fun part with Xcode!