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

A partir da **Object library**(biblioteca de objetos), arraste e solte uma **Image View** (vista de imagem) em uma célula. Pode pesquisar uma "Image View" na barra de pesquisas na parte inferior da biblioteca de Objetos

![Add Image View storyboard](assets/en/custom-listform/add-imageview-storyboard.png)

A partir do **Size inspector panel** (do lado direito da janela Interface Builder), defina a largura da Imagem View para 110 e a Altura para 110. Depois defina o valor X como 8 e o valor Y para 3.

![Image View position height and width](assets/en/custom-listform/imageview-position-height-width.png)

Agora, adicione uma restrição (Leading: 8) clicando no botão **Add New Constraints** (na parte inferior da janela Interface Builder). Adicione as restrições de largura e altura, como mostrado:

![Image View leading space width height](assets/en/custom-listform/imageview-leading-space-width-height.png)

Clique no botão **Align** (na parte inferior do Interface Builder) e marque a opção "Vertically in Container".

![Image View align vertically](assets/en/custom-listform/imageview-align-vertically.png)

Sua Image View agora está bem posicionada!

![Image View final](assets/en/custom-listform/imageview-final.png)

Agora vamos trabalhar nas etiquetas de células.

## Adicione etiquetas de título e subtítulo

Vamos começar **adicionando uma View**. Pesquise por "View" na **Biblioteca de objetos** e arraste a Vista ao cell container.

![Add View Storyboard](assets/en/custom-listform/add-view-storyboard.png)

A partir do painel**Size inspector** (no lado direito do Interface Builder), estabeleça o valor da Largura para 277 e altura para 94. Estabeleça X para 126 e Y para 10.

![View position height and width](assets/en/custom-listform/view-position-height-width.png)

Na Image View, adicione quatro restrições clicando no botão **Add New Constraints** (Trailing: 11, Leading: 8, Top: 11 e Bottom: 10.67) para posicioná-la corretamente como mostrado abaixo:

![View contraints Storyboard](assets/en/custom-listform/view-constraints-storyboard.png)

Arraste e solte uma etiqueta na Vista que acaba de agregar desde a Biblioteca de Objetos.

![Add label Storyboard](assets/en/custom-listform/add-label-storyboard.png)

Desde o painel **Size inspector**, defina o valor de largura de etiqueta para 269 e a Largura em 32. Agora defina o valor X para 8 e Y para 8.

**Duplique a etiqueta** e no painel **Size inspector**, defina o valor X para 8 e o valor Y para 48.

![Duplicate the label](assets/en/custom-listform/duplicated-label-storyboard.png)

Selecion ambas as etiquetas e adicione quatro restrições clicando no botão **Add New Constraints** (Trailing: 0, Leading: 8, Top: 8, e Bottom: Multiple) como mostrado:

![Labels contraints storyboard](assets/en/custom-listform/labels-contraints-storyboard.png)

Com a etiqueta selecionada, dê um duplo-clique em **Height constraint** para começar a edição.

![Label height constraint edition](assets/en/custom-listform/label-height-constraint-edition.png)

Mude a relação de Equal para **Greater Than or Equal** para que tenha uma altura variável (para manejar etiquetas multilinhas).

![Change relation label height constraint](assets/en/custom-listform/change-relation-label-height-constraint.png)

Repita o processo para a segunda etiqueta.

## Personalizar a etiqueta

Desde o Inspetor de atributos (do lado direito da janela Interface Builder), é possível personalizar as cores de fonte de sua etiqueta. Vamos fazer a segunda etiqueta com a cor **Dark Grey Color** :

![Label color dark grey](assets/en/custom-listform/label-color-dark-grey.png)

Também pode selecionar a cor dominante para seu app:

![Label color background color](assets/en/custom-listform/label-color-background-color.png)

Do inspetor de atributos, também pode personalizar a fonte. Selecione ambas as etiquetas e selecione Font > Custom > **Helvetica Neue**

![Label font custom](assets/en/custom-listform/label-font-custom.png)

Para completar a personalização, selecione ambas as etiquetas e **ingresse o valor 0 em Lines** na janela do Inspetor. Isso permite que o número de linhas seja ilimitado.

![Label lines number](assets/en/custom-listform/label-lines-number.png)<div class = "tips"> 

**NOTA**

O storyboard é otimizado para ter uma **altura de célula variável** dependendo dos conteúdos de cada célula.

![Row height tableview cell](assets/en/custom-listform/row-height-tableview-cell.png)</div> 

## Como obter dados em suas células

### Image View

Selecione seu Image View e vá ao **Identity inspector** > User Defined Runtime Attributes. Clique o **botão +** para adicionar uma linha.

![User defined runtime attributes](assets/en/custom-listform/user-defined-runtime-attributes.png)

* **Key Path**: comece com bindTo para ativar a associação ao componente. Enter ```bindTo.record.___FIELD_1___```

* **Type**: Always ```String```

* **Value**: The attribute name. Enter ```___FIELD_1_BINDING_TYPE___```

![Identity inspector storyboard](assets/en/custom-listform/identity-inspector-storyboard.png)

### Labels

Select the first label and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD_2___```

* **Type**: ```String```

* **Value**: ```___FIELD_2_BINDING_TYPE___```

![Field 2 Binding](assets/en/custom-listform/field-2-binding.png)

Select the second label and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD_3___```

* **Type**: ```String```

* **Value**: ```___FIELD_3_BINDING_TYPE___```

![Field 3 Binding](assets/en/custom-listform/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility:

* Double-click the first label to edit it and enter ```___FIELD_2_LABEL___```
* Double-click the second label to edit it and enter ```___FIELD_3_LABEL___```

![Storyboard label display names](assets/en/custom-listform/storyboard-label-display-name.png)

Go to your project editor, select your list form template from the Forms section, then select Build and Run.

Here is the simulator result :

![Simulator result](assets/en/custom-listform/simulator-result.png)

## Customize your app

The last step is adding a corner radius to the Image View to have a better design.

Select your Image View and add the two following lines in the User Defined Runtime Attributes:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

and

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: Check the box

![ImageView corner Radius](assets/en/custom-listform/imageview-corner-radius.png)

You can now build your project from the project editor!

![Custom template final result](assets/en/custom-listform/custom-template-final-result.png)

## Where to go from here?

In this tutorial, we've covered the basics for creating list form templates. You are now able to create simple templates on your own using the Starter Project ressources. But wait - there’s more! In the next tutorial, you’ll learn how to build detail form templates! Click on **Final Project** below to download the completed template list folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-listform/CustomListFormFinalTemplate.zip">CUSTOM LISTFORM FINAL TEMPLATE</a>

  </p>
</div>