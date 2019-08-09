---
id: storyboard-detailform-template
title: Storyboard
---

Agora é o momento de criar sua interface iOS de formulário detalhado com Xcode!

Este é o resultado que queremos ter:

![Storyboard custom detailform](assets/en/custom-detailform/storyboard-custom-detailform.png)

Para cada célula amos adicionar:

* Foto de perfil no cabeçalho 
* Um campo a duplicar

## Abrindo o arquivo storyboard com Xcode

Primeiro, abra o arquivo storyboard em Xcode.

![Empty storyboard custom template](assets/en/custom-detailform/empty-storyboard-custom-detailform-template.png)

Está vazio, então vamos adicionar algum conteúdo!

## Adicione um "Scroll view"

para que nosso formulário detalhado seja rolável, o primeiro passo é arrastar e soltar um "Scroll View" da **Biblioteca de Objetos**.

![Add Scroll View Storyboard](assets/en/custom-detailform/add-scrollview-storyboard.png)

Desde o **painel de tamanho** (do lado direito da janela de Interface Builder), defina o valor de Scroll View em 359 para largura e 667 para altura. Depois estabeleça o valor X para 8 e valor Y para 0.

![Scroll View position height and width](assets/en/custom-detailform/scrollview-position-height-width.png)

Depois, adicione quatro restrições clicando no botão **Add New Constraints** (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) como mostrado abaixo:

![Scrollview Constraints](assets/en/custom-detailform/scrollview-constraints.png)

## Adicionar uma "Vertical Stack View"

Arraste e solte uma "Vertical Stack View" desde a **biblioteca de objetos** à "Scroll view". Desde o **Size inspector** (do lado direito do Interface Builder), defina o valor de largura em 359 e o valor de altura em 202. Finalmente, estabeleça o valor X para 0, e o valor Y para 8.

![Add stackview Storyboard](assets/en/custom-detailform/add-vertical-stackview-storyboard.png)

Já que a largura e altura do "Stack View" estão definidas pelos elementos dentro dele, vamos configurar o tamanho e restrições depois. 

## Adicione vistas para o Stack Views

Arraste e solte uma vista da **biblioteca de objetos** para o Stack View que acabou de agregar ao storyboard. Vamos chamar de **Field View 1**.

![Add Field View 1](assets/en/custom-detailform/add-view1-storyboard.png)

Depois arraste e largue outra vista da **Biblioteca de objetos** diretamente no Document Outline no mesmo nível que Field View 1 (para integrá-la na Stack View) e chamá-la **Field View 2**.

![Add Field View 2](assets/en/custom-detailform/add-view2-storyboard.png)

Para agregar espaço entre as vistas, selecione seu Stack View e defina o valor de espaçamento em 8 (no Attributes Inspector).

![Stackview spacing](assets/en/custom-detailform/stackview-spacing.png)

Selecione **Field View 1** e **Field View 2** e defina, no **Size inspector** (à direita do Interface Builder), o valor de largura em 359 e de altura em 97.

![views position height and width](assets/en/custom-detailform/views-position-height-width-storyboard.png)

Selecione **Field View 1** e adicione três restrições clicando no botão **Add New Constraints button** (Trailing: 0, Leading: 0 e Top: 0):

![Field Views constraints](assets/en/custom-detailform/fieldView-1-Field-View-2-constraints.png)

Para que o "Stock View" tenha a mesma largura que o Scroll View, precisa adicionar uma restrição:

Pressione Ctrl e arraste a Stack View para o Scroll View. Quando soltar o botão do mouse, a Interface Builder mostra um menu com uma lista de possíveis restrições. Selecione "Equal Width".

![Stack View Equal Width](assets/en/custom-detailform/stackview-equal-width-scrollview.png)

Depois, agregue quatro restrições com a Stack View clicando em **Add New Constraints** (Trailing: 0, Leading: 0, Top: 8, e Bottom: 0) como mostrado abaixo :

![Stackview constraints](assets/en/custom-detailform/stackview-constraints.png)

Isto é o que verá quando agregar restrições:

![Stackview final constraints](assets/en/custom-detailform/stackview-constraints-final.png)

Agora que tem duas vistas em seu Stack View e tiver definido restrições, vamos nos concentrar em Field View 1.

## Adicione uma Image View ao Field View 1.

A partir da **Object library**, arraste e solte uma **Image View** em Field View 1.

![Add Image View storyboard](assets/en/custom-detailform/add-imageview-storyboard.png)

Desde o **Size inspector** (do lado direito do Interface Builder), defina o valor da largura do Image View em 359 e sua altura em 97. Depois estabeleça o valor X para 0 e o valor y para 0.

![Image View position height and width](assets/en/custom-detailform/imageview-position-height-width.png)

Agora adicione quatro restrições clicando no botão **Add New Constraints** (Trailing:0, Leading:0, Top:0, e Bottom:0) como mostrado abaixo:

![Image View constraints](assets/en/custom-detailform/imageview-constraints.png)

No **Size inspector** mude o valor**Default** do Tamanho Intrínseco por um **Placeholder**.

![Intrinsic size Image View](assets/en/custom-detailform/intrinsic-size-imageview.png)

## Adicione Etiquetas para Field View 3

### Etiqueta de Título

Na **Biblioteca de Objetos**, arraste e solte uma **Etiqueta** em Field View 2 e estabeleça o valor de Largura para 343 e a Altura para 22. Depois estabeleça o valor de X para 8 e Y para 8

![Add label](assets/en/custom-detailform/add-label1-storyboard.png)

Dê um duplo clique na etiqueta e coloque o nome "```___FIELD_LABEL___```". Depois no **attribute inspector** selecione a fonte como **Helvetica Neue Light 18.0** e a cor **BackgroundColor**:

![Title label font and color](assets/en/custom-detailform/title-label-font-and-color.png)

### Etiqueta de conteúdo

Duplique a etiqueta Título e defina a largura de etiqueta duplicada em 339 e o valor de altura em 44. Depois defina o valor X como 12 e o valor de Y como 37.

![Add label](assets/en/custom-detailform/add-label2-storyboard.png)

Dê duplo clique na etiqueta e chame-a "```<___FIELD_LABEL___>```". Depois, no **attribute inspector**, selecione a fonte **Helvetica Neue Light 20.0** e a cor **Back Color**:

![Content label font and color](assets/en/custom-detailform/content-label-font-and-color.png)

Selecione as etiquetas Conteúdo e Título e adicione quatro restrições clicando em **Add New Constraints button** (trailing 8, Leading: Multiple, Top: Multiple, e Bottom: Multiple) como mostrado abaixo:

![Title and Content labels constraints](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)

Terminamos os elementos gráficos! Todas as suas restrições estão bem definidas :)

## Como entrar os dados em suas células

### Image View

Seleciona sua Image View e vá para **identity Inspector**User Defined Runtime Attributes. Clique no ** botão+** para adicionar uma linha.

![User defined runtime attributes](assets/en/custom-detailform/user-defined-runtime-attributes.png)

* **Key Path**: Comece com bindTo para ativar a associação ao componente. Enter ```bindTo.record.___FIELD_1___```

* **Type**: Sempre ```String```

* **Value**: nome do atributo. Enter ```___FIELD_1_BINDING_TYPE___```

![Identity inspector storyboard](assets/en/custom-detailform/identity-inspector-storyboard.png)

### Etiquetas

Para a **primeira etiqueta**, vamos agregar várias linhas principalmente para mostrar ícones:

![Label1 User Defined Runtime Attributes](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)

Também deve configurar a Classe em ```IconLabel``` e marque a caixa de seleção**Inherit Module From Target** como mostrado abaixo:

![Label1 Custom Class](assets/en/custom-detailform/label1-custom-class.png)

Selecione a** segunda etiqueta** e adicione uma linha na área Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD___```

* **Type**: ```String```

* **Value**: ```___FIELD_BINDING_TYPE___```

![Label2 User Defined Runtime Attributes](assets/en/custom-detailform/label2-user-defined-runtime-attributes.png)

## Adicionar TAGS às células a duplicar.

Field View 2 inclui elementos que serão duplicados para que possa ter tantos campos quantos definir no editor de projeto.

Cada elemento de storyboard tem um identificador de objeto. Por exemplo, se selecionar Field View 2 e for a** identity Inspector**, verá seus identificadores de objetos:

![Object ID Storyboard](assets/en/custom-detailform/object-id-storyboard.png)

Para indicar ao editor de projeto que todos os elementos incluídos na vista serão duplicados, precisamos adicionar uma TAG a cada elemento e restrição.

O processo é um pouco complicado.... Vamos começar abrindo o arquivo Storyboard com seu editor de código favorito

### Field View 2

* Selecione **Field View 2** e obtenha seus identificadores de objeto do Identity Inspector (no lado direito da janela de Interface Builder). Em nosso projeto, Field View 2 ID é: **SiX-3H-lNB**.

* Pesquise por esta ID no código xml do storyboard e substitua com **TAG-FD-001** toda vez que aparecer. Como pode ver, este ID de objeto é mencionado várias vezes, por isso precisa ser cuidadoso.

![Storyboard xml](assets/en/custom-detailform/storyboard-xml.png)

Salve o arquivo xml storyboard. Como pode ver, o ID de objeto de Field View 2 mudou no seu storyboard em Xcode:

![Field View 2 Object ID](assets/en/custom-detailform/field-view-2-object-id.png)

### Primeira etiqueta

* Agora, obtenha a ID de objeto ** primeira etiqueta ** de Identity Inspector e a substitua por ** TAG-FD-002 ** cada vez que apareça no código xml do storyboard.

![Label 1 Object ID](assets/en/custom-detailform/label1-object-id.png)

Pronto com a primeira etiqueta.

### Segunda etiqueta

* Next, get the **second label** Oject ID from the Identity Inspector and replace it with **TAG-FD-003** each time it appears in the storyboard xml code.

![Label 2 Object ID](assets/en/custom-detailform/label2-object-id.png)

Voilà!

### Constraints

Both labels have constraints that we need to tag, too:

![Tag constraints](assets/en/custom-detailform/duplicated-constraints.png)

Just like View Field 2 and label, get all **7 Constraints** Object IDs from the Identity Inspector and replace them with: **TAG-FD-004**, **TAG-FD-005**, **TAG-FD-006**, **TAG-FD-007**, **TAG-FD-008**, **TAG-FD-009** and **TAG-FD-010**.

Go to your project editor and select your detail template from the Forms section, then click on Build.

![Custom detail template forms](assets/en/custom-detailform/custom-detail-template-forms.png)

Not bad for a first attempt! :)

![iPhone Demo](assets/en/custom-detailform/iphone-demo.png)

Field View 2 is well duplicated! Let's see if we can make this app a bit more interesting!

### Customize your app

We're going to add a corner radius to the Image View, as well as Field View 2.

Select your Image View and add the two following lines in the User Defined Runtime Attributes:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

and

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: Check the box

![iPhone Demo](assets/en/custom-detailform/imageview-corner-radius.png)

Next, select Field View 2 and add the following:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

![iPhone Demo](assets/en/custom-detailform/fieldview2-corner-radius.png)

You can now build your project from the project editor!

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Where to go from here?

In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter Project resources. Click on **Final Project** below to download the completed template folder.

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/en/custom-detailform/CustomDetailFormFinalTemplate.zip">CUSTOM DETAILFORM FINAL TEMPLATE</a>

  </p>
</div>