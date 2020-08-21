---
id: storyboard-listform-template
title: Storyboard
---

Agora é a hora de criar sua interface iOS de formulário lista com Xcode!

Aqui está o resultado que queremos atingir:

![Storyboard custom listform](assets/en/custom-listform/storyboard-custom-listform.png)

Para cada célula, vamos adicionar:

* Imagem de perfil
* Título
* Subtítulo

## Abrir o arquivo storyboard com Xcode

Primeiro, abra seu arquivo storyboard em Xcode.

![Empty storyboard custom template](assets/en/custom-listform/empty-storyboard-custom-template.png)

Está vazio, então vamos adicionar conteúdo!

## Adicione uma "Image View"

From the **Object library**, drag and drop an  **Image View** into a cell. Pode pesquisar uma "Image View" na barra de pesquisas na parte inferior da biblioteca de Objetos

![Add Image View storyboard](assets/en/custom-listform/add-imageview-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Depois defina o valor X como 8 e o valor Y para 3.

![Image View position height and width](assets/en/custom-listform/imageview-position-height-width.png)

Next, add a constraint (Leading: 8) by clicking on the **Add New Constraints button** (at the bottom of the Interface Builder window). Adicione as restrições de largura e altura, como mostrado:

![Image View leading space width height](assets/en/custom-listform/imageview-leading-space-width-height.png)

Finally, click on the **Align button** (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.

![Image View align vertically](assets/en/custom-listform/imageview-align-vertically.png)

Sua Image View agora está bem posicionada!

![Image View final](assets/en/custom-listform/imageview-final.png)

Agora vamos trabalhar nas etiquetas de células.

## Adicione etiquetas de título e subtítulo

Let's begin by **adding a View**. Search for "View" in the **Object library** and drag it into the cell container.

![Add View Storyboard](assets/en/custom-listform/add-view-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Estabeleça X para 126 e Y para 10.

![View position height and width](assets/en/custom-listform/view-position-height-width.png)

For the Image View, add four constraints by clicking on the **Add New Constraints button** (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:

![View contraints Storyboard](assets/en/custom-listform/view-constraints-storyboard.png)

Arraste e solte uma etiqueta na Vista que acaba de agregar desde a Biblioteca de Objetos.

![Add label Storyboard](assets/en/custom-listform/add-label-storyboard.png)

From the **Size inspector panel**, set the Label View Width value to 269 and the Height value to 32. Agora defina o valor X para 8 e Y para 8.

**Duplicate the label** and in the **Size inspector panel**, set the X value to 8 and the Y value to 48.

![Duplicate the label](assets/en/custom-listform/duplicated-label-storyboard.png)

Select both labels add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:

![Duplicate the label](assets/en/custom-listform/labels-contraints-storyboard.png)

With a label selected, double-click on the **Height constraint** to edit it.

![Label height constraint edition](assets/en/custom-listform/label-height-constraint-edition.png)

Change the relation from Equal to **Greater Than or Equal** so it can have a variable height (to handle multiline labels).

![Change relation label height constraint](assets/en/custom-listform/change-relation-label-height-constraint.png)

Repita o processo para a segunda etiqueta.

## Personalizar a etiqueta

Desde o Inspetor de atributos (do lado direito da janela Interface Builder), é possível personalizar as cores de fonte de sua etiqueta. Let's make the second label **Dark Grey Color** :

![Label color dark grey](assets/en/custom-listform/label-color-dark-grey.png)

Também pode selecionar a cor dominante para seu app:

![Label color background color](assets/en/custom-listform/label-color-background-color.png)

Do inspetor de atributos, também pode personalizar a fonte. Select both labels and select Font > Custom > **Helvetica Neue**:

![Label font custom](assets/en/custom-listform/label-font-custom.png)

To complete the customizations, select both labels and **enter 0 for Lines** in the inspector window. Isso permite que o número de linhas seja ilimitado.

![Label lines number](assets/en/custom-listform/label-lines-number.png)

> **NOTA **
> 
> The provided storyboard is optimized to have a **variable cell height** depending on the contents of each cell.
> 
> ![Row height tableview cell](assets/en/custom-listform/row-height-tableview-cell.png)


## Como obter dados em suas células

### Image View
Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![User defined runtime attributes](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path**: Begin with bindTo to activate binding on the component. Enter `bindTo.record.___FIELD_1___`

* **Type**: Always `String`

* **Value**: The attribute name. Enter `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](assets/en/custom-listform/identity-inspector-storyboard.png)

### Etiquetas

Select the first label and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Type**: `String`

* **Value**: `___FIELD_2_BINDING_TYPE___`

![Field 2 Binding](assets/en/custom-listform/field-2-binding.png)

Select the second label and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Type**: `String`

* **Value**: `___FIELD_3_BINDING_TYPE___`

![Field 3 Binding](assets/en/custom-listform/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility:

* Double-click the first label to edit it and enter `___FIELD_2_LABEL___`
* Double-click the second label to edit it and enter `___FIELD_3_LABEL___`

![Storyboard label display names](assets/en/custom-listform/storyboard-label-display-name.png)

Go to your project editor, select your list form template from the Forms section, then select Build and Run.

Here is the simulator result :

![Simulator result](assets/en/custom-listform/simulator-result.png)

## Personalize seu app

The last step is adding a corner radius to the Image View to have a better design.

Selecione seu Image View e adicione as duas linhas abaixo noa área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

and

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![ImageView corner Radius](assets/en/custom-listform/imageview-corner-radius.png)

Agora pode construir seu projeto no editor de projetos!

![Custom template final result](assets/en/custom-listform/custom-template-final-result.png)

## Que fazer agora?

In this tutorial, we've covered the basics for creating list form templates. You are now able to create simple templates on your own using the Starter Project ressources. Mas espere - há mais! In the next tutorial, you’ll learn how to build detail form templates! Click on **Final Project** below to download the completed template list folder.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip">CUSTOM LISTFORM FINAL TEMPLATE</a>
</div>




