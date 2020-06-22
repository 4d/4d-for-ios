---
id: storyboard-detailform-template
title: Storyboard
---

Agora é o momento de criar sua interface iOS de formulário detalhado com Xcode!

Aqui está o resultado que queremos atingir:

![Storyboard custom detailform](assets/en/custom-detailform/storyboard-custom-detailform.png)

Para cada célula, vamos adicionar:

* Foto de perfil no cabeçalho
* Um campo a duplicar

## Abrir o arquivo storyboard com Xcode

Primeiro, abra seu arquivo storyboard em Xcode.

![Empty storyboard custom template](assets/en/custom-detailform/empty-storyboard-custom-detailform-template.png)

Está vazio, então vamos adicionar conteúdo!

## Adicione um "Scroll view"

For our detail form to be scrollable, the first step is to drag and drop a "Scroll View" from the **Object library**.

![Add Scroll View Storyboard](assets/en/custom-detailform/add-scrollview-storyboard.png)


From the **Size inspector panel** (on the right side of the Interface Builder window), set the Scroll View Width value to 359 and the Height value to 667. Depois estabeleça o valor X para 8 e valor Y para 0.

![Scroll View position height and width](assets/en/custom-detailform/scrollview-position-height-width.png)


Next, add four constraints by clicking on the **Add New Constraints button** (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) as shown below:

![Scrollview Constraints](assets/en/custom-detailform/scrollview-constraints.png)

## Adicionar uma "Vertical Stack View"

Drag and drop a Vertical Stack View from the **Object library** in Scroll View. Then, from the **Size inspector panel** (on the right side of the Interface Builder window) set the Width value to 359 and the Height value to 202. Finalmente, estabeleça o valor X para 0, e o valor Y para 8.

![Add stackview Storyboard](assets/en/custom-detailform/add-vertical-stackview-storyboard.png)

Já que a largura e altura do "Stack View" estão definidas pelos elementos dentro dele, vamos configurar o tamanho e restrições depois.

## Adicione vistas para o Stack Views

Drag and drop a view from the **Object library** to the Stack View you've just added to your storyboard. Let's name it **Field View 1**.

![Add Field View 1](assets/en/custom-detailform/add-view1-storyboard.png)

Then drag and drop another view from the **Object library** directly into the Document Outline at the same level as Field View 1 (to include it in the Stack View) and name it **Field View 2**.

![Add Field View 2](assets/en/custom-detailform/add-view2-storyboard.png)


Para agregar espaço entre as vistas, selecione seu Stack View e defina o valor de espaçamento em 8 (no Attributes Inspector).

![Stackview spacing](assets/en/custom-detailform/stackview-spacing.png)

Select both **Field View 1** and **Field View 2** and in the **Size inspector panel** (on the right side of the Interface Builder window), set Width value to 359 and the Height value to 97.

![views position height and width](assets/en/custom-detailform/views-position-height-width-storyboard.png)

Select **Field View 1** add three constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 0, and Top: 0):

![Field Views constraints](assets/en/custom-detailform/fieldView-1-Field-View-2-constraints.png)

Para que o "Stock View" tenha a mesma largura que o Scroll View, precisa adicionar uma restrição:

Pressione Ctrl e arraste a Stack View para o Scroll View. Quando soltar o botão do mouse, a Interface Builder mostra um menu com uma lista de possíveis restrições. Selecione "Equal Width".

![Stack View Equal Width](assets/en/custom-detailform/stackview-equal-width-scrollview.png)

Next, with the Stack View selected add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 0, Top: 8, and Bottom: 0) as shown below:

![Stackview constraints](assets/en/custom-detailform/stackview-constraints.png)

Isto é o que verá quando agregar restrições:

![Stackview final constraints](assets/en/custom-detailform/stackview-constraints-final.png)

Agora que tem duas vistas em seu Stack View e tiver definido restrições, vamos nos concentrar em Field View 1.

## Adicione uma Image View ao Field View 1.

From the **Object library**, drag and drop an  **Image View** into Field View 1.

![Add Image View storyboard](assets/en/custom-detailform/add-imageview-storyboard.png)

In the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 359 and the Height value to 97. Depois estabeleça o valor X para 0 e o valor y para 0.

![Image View position height and width](assets/en/custom-detailform/imageview-position-height-width.png)

Next, add four constraints by clicking on the **Add New Constraints button** (Trailing:0, Leading:0, Top:0, and Bottom:0) as shown below:

![Image View constraints](assets/en/custom-detailform/imageview-constraints.png)

In the **Size inspector panel** change the Intrinsic Size from **Default** to **Placeholder**.

![Intrinsic size Image View](assets/en/custom-detailform/intrinsic-size-imageview.png)

## Adicione Etiquetas para Field View 3

### Etiqueta de Título

In the **Object library**, drag and drop a  **Label** into Field View 2 and set the Width value to 343 and the Height value to 22. Agora defina o valor X para 8 e Y para 8.

![Add label](assets/en/custom-detailform/add-label1-storyboard.png)

Double click on the label and name it "`___FIELD_LABEL___`". Then in the **attribute inspector** set the font to **Helvetica Neue Light 18.0** and the color to **BackgroundColor**:

![Title label font and color](assets/en/custom-detailform/title-label-font-and-color.png)

### Etiqueta de conteúdo

Duplique a etiqueta Título e defina a largura  de etiqueta duplicada em 339 e o valor de altura em 44. Depois defina o valor X como 12 e o valor de Y como 37.

![Add label](assets/en/custom-detailform/add-label2-storyboard.png)

Double click on the label and name it "`<___FIELD_LABEL___>`". Then from the **attribute inspector** set the font to **Helvetica Neue Light 20.0** and the color to **Black Color**:

![Content label font and color](assets/en/custom-detailform/content-label-font-and-color.png)

Select the Content and Title labels and add four constraints by clicking on the **Add New Constraints button** (Trailing: 8, Leading: Multiple, Top: Multiple, and Bottom: Multiple) as shown below:

![Title and Content labels constraints](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)

Terminamos os elementos gráficos! Todas as suas restrições estão bem definidas :)

## Como obter dados em suas células

### Image View
Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![User defined runtime attributes](assets/en/custom-detailform/user-defined-runtime-attributes.png)

* **Key Path**: Start with bindTo to activate binding on the component. Enter `bindTo.record.___FIELD_1___`

* **Type**: Always `String`

* **Value**: The attribute name. Enter `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](assets/en/custom-detailform/identity-inspector-storyboard.png)

### Etiquetas

For the **first label** we are going to add several lines mainly to display icons:

![Label1 User Defined Runtime Attributes](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)

You also need to set the Class to `IconLabel` and check the **Inherit Module From Target** checkbox as we can see below:

![Label1 Custom Class](assets/en/custom-detailform/label1-custom-class.png)

Select the **second label** and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD___`

* **Type**: `String`

* **Value**: `___FIELD_BINDING_TYPE___`

![Label2 User Defined Runtime Attributes](assets/en/custom-detailform/label2-user-defined-runtime-attributes.png)

## Adicionar TAGS às células a duplicar.

Field View 2 inclui elementos que serão duplicados para que possa ter tantos campos quantos definir no editor de projeto.

Cada elemento de storyboard tem um identificador de objeto. For example, if you select Field View 2 and go to the **Identity inspector**, you'll see its Object ID:

![Object ID Storyboard](assets/en/custom-detailform/object-id-storyboard.png)

Para indicar ao editor de projeto que todos os elementos incluídos na vista serão duplicados, precisamos adicionar uma TAG a cada elemento e restrição.

O processo é um pouco complicado.... Vamos começar abrindo o arquivo Storyboard com seu editor de código favorito

### Field View 2

* Select **Field View 2** and get its Object ID from the Identity Inspector (on the right side of the Interface Builder window). In our project, Field View 2 ID is: **SiX-3H-lNB**.

* Search for this ID in the storyboard xml code and replace it with **TAG-FD-001** each time it appears. Como pode ver, este ID de objeto é mencionado várias vezes, por isso precisa ser cuidadoso.

![Storyboard xml](assets/en/custom-detailform/storyboard-xml.png)

Salve o arquivo xml storyboard. Como pode ver, o ID de objeto de Field View 2 mudou no seu storyboard em Xcode:

![Field View 2 Object ID](assets/en/custom-detailform/field-view-2-object-id.png)

### Primeira etiqueta

* Now, get the **first label** Object ID from the Identity Inspector and replace it with **TAG-FD-002** each time it appears in the storyboard xml code.

![Label 1 Object ID](assets/en/custom-detailform/label1-object-id.png)

Pronto com a primeira etiqueta.

### Segunda etiqueta

* Next, get the **second label** Oject ID from the Identity Inspector and replace it with **TAG-FD-003** each time it appears in the storyboard xml code.

![Label 2 Object ID](assets/en/custom-detailform/label2-object-id.png)

Pronto!

### Restrições

Ambas as etiquetas têm restrições que também necessitamos identificar:

![Tag constraints](assets/en/custom-detailform/duplicated-constraints.png)

Just like View Field 2 and label, get all **7 Constraints** Object IDs from the Identity Inspector and replace them with: **TAG-FD-004**, **TAG-FD-005**, **TAG-FD-006**, **TAG-FD-007**, **TAG-FD-008**, **TAG-FD-009** and **TAG-FD-010**.

Vá para o editor de projeto e selecione o modelo detalhado na seção Formulários, e clique em Criar.

![Custom detail template forms](assets/en/custom-detailform/custom-detail-template-forms.png)

Não está mal para a primeira tentativa! :)

![iPhone Demo](assets/en/custom-detailform/iphone-demo.png)

Field View 2 foi duplicado Vamos ver se podemos tornar o app um pouco mais interessante!

### Personalize seu app

Vamos adicionar uma borda arredondada à Imagem View, assim como um Field View 2.

Selecione seu Image View e adicione as duas linhas abaixo noa área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

and

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![iPhone Demo](assets/en/custom-detailform/imageview-corner-radius.png)

Agora selecione Field View 2 e adicione o abaixo:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

![iPhone Demo](assets/en/custom-detailform/fieldview2-corner-radius.png)

Agora pode construir seu projeto no editor de projetos!

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Que fazer agora?

Neste tutorial cobrimos os conceitos básicos para criar seu modelo de formulário detalhado. Agora pode criar modelos simples usando os recursos do Starter Project. Click on **Final Project** below to download the completed template folder.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-for-ios/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip">MODELO FINAL DE FORMULÁRIO DETALHADO PERSONALIZADO</a>
</div>




