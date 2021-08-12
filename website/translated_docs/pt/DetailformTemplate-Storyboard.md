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

Para que nosso formulário detalhado seja rolável, o primeiro passo é arrastar e soltar um "Scroll View" da **Biblioteca de Objetos**.

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

Arraste e solte uma vista da  **biblioteca de objetos** para o Stack View que acabou de agregar ao storyboard. Vamos chamar de **Field View 1**.

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

Depois, agregue quatro restrições com a Stack View  clicando em **Add New Constraints** (Trailing: 0, Leading: 0, Top: 8, e Bottom: 0) como mostrado abaixo :

![Stackview constraints](assets/en/custom-detailform/stackview-constraints.png)

Isto é o que verá quando agregar restrições:

![Stackview final constraints](assets/en/custom-detailform/stackview-constraints-final.png)

Agora que tem duas vistas em seu Stack View e tiver definido restrições, vamos nos concentrar em Field View 1.

## Adicione uma Image View ao Field View 1.

A partir da **Object library**, arraste e solte uma **Image View** em Field View 1.

![Add Image View storyboard](assets/en/custom-detailform/add-imageview-storyboard.png)

Desde o **Size inspector** (do lado direito do Interface Builder), defina o valor da largura do Image View em 359 e sua altura em 97. Depois estabeleça o valor X para 0 e o valor y para 0.

![Image View position height and width](assets/en/custom-detailform/imageview-position-height-width.png)

Agora adicione quatro restrições clicando no botão  **Add New Constraints** (Trailing:0, Leading:0, Top:0, e Bottom:0) como mostrado abaixo:

![Image View constraints](assets/en/custom-detailform/imageview-constraints.png)

No **Size inspector** mude o valor**Default** do Tamanho Intrínseco por um **Placeholder**.

![Intrinsic size Image View](assets/en/custom-detailform/intrinsic-size-imageview.png)

## Adicione Etiquetas para Field View 2

### Etiqueta de Título

Na **Biblioteca de Objetos**, arraste e solte uma  **Etiqueta** em Field View 2 e estabeleça o valor de Largura para 343 e a Altura para 22. Agora defina o valor X para 8 e Y para 8.

![Add label](assets/en/custom-detailform/add-label1-storyboard.png)

Dê duplo clique na etiqueta e coloque o nome "`___FIELD_LABEL___`". Depois no **attribute inspector** selecione a fonte como **Helvetica Neue Light 18.0** e a cor **BackgroundColor**:

![Title label font and color](assets/en/custom-detailform/title-label-font-and-color.png)

### Etiqueta de conteúdo

Duplique a etiqueta Título e defina a largura  de etiqueta duplicada em 339 e o valor de altura em 44. Depois defina o valor X como 12 e o valor de Y como 37.

![Add label](assets/en/custom-detailform/add-label2-storyboard.png)

Dê duplo clique na etiqueta e coloque o nome "`<___FIELD_LABEL___>`". Depois, no **attribute inspector**, selecione a fonte **Helvetica Neue Light 20.0** e a cor **Back Color**:

![Content label font and color](assets/en/custom-detailform/content-label-font-and-color.png)

Selecione as etiquetas Conteúdo e Título e adicione quatro restrições clicando em **Add New Constraints button** (trailing 8, Leading: Multiple, Top: Multiple, e Bottom: Multiple) como mostrado abaixo:

![Title and Content labels constraints](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)

Terminamos os elementos gráficos! Todas as suas restrições estão bem definidas :)

## Como obter dados em suas células

### Image View
Selecione sua Image View e vá para **Identity inspector** > User Defined Runtime Attributes. Clique no ** botão+** para adicionar uma linha.

![User defined runtime attributes](assets/en/custom-detailform/user-defined-runtime-attributes.png)

* **Key Path**: comece com bindTo para ativar a união do componente. Introduza `bindTo.record.___FIELD_1___`

* **Type**: siempre `String`

* **Value**: nome do atributo. Introduza `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](assets/en/custom-detailform/identity-inspector-storyboard.png)

### Etiquetas

Para a **primeira etiqueta**, vamos agregar várias linhas principalmente para mostrar ícones:

![Label1 User Defined Runtime Attributes](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)

Também é preciso definir a Classe como `IconLabel` e verificar as caixas de seleção **Inherit Module From Target** como podemos ver a continuação:

![Label1 Custom Class](assets/en/custom-detailform/label1-custom-class.png)

Selecione a** segunda etiqueta** e adicione uma linha na área Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD___`

* **Type**: siempre `String`

* **Valor**: `___FIELD_BINDING_TYPE___`

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

* Depois, obtenha a  ID do objeto da **segunda etiqueta** do Identity Inspector e substitua-a com **TAG-FD-003** toda vez que aparecer no código xml do storyboard.

![Label 2 Object ID](assets/en/custom-detailform/label2-object-id.png)

Pronto!

### Restrições

Ambas as etiquetas têm restrições que também necessitamos identificar:

![Tag constraints](assets/en/custom-detailform/duplicated-constraints.png)

Do mesmo jeito que com View Field 2 e etiquetas, obtenha todas as ID de Objeto de  **7 Constraints** do  Identity Inspector e substitua-as com: **TAG-FD-004**, **TAG-FD-005**, **TAG-FD-006**, **TAG-FD-007**, **TAG-FD-008**, **TAG-FD-009** e **TAG-FD-010**.

Vá para o editor de projeto e selecione o modelo detalhado na seção Formulários, e clique em Criar.

![Custom detail template forms](assets/en/custom-detailform/custom-detail-template-forms.png)

Não está mal para a primeira tentativa! :)

![iPhone Demo](assets/en/custom-detailform/iphone-demo.png)

Field View 2 foi duplicado Field View 2 foi duplicado Vamos ver se podemos tornar o app um pouco mais interessante!

### Personalize seu app

Vamos adicionar uma borda arredondada à Imagem View, assim como um Field View 2.

Selecione seu Image View e adicione as duas linhas abaixo noa área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

e

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: selecione a caixa de opção

![iPhone Demo](assets/en/custom-detailform/imageview-corner-radius.png)

Agora selecione Field View 2 e adicione o abaixo:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

![iPhone Demo](assets/en/custom-detailform/fieldview2-corner-radius.png)

Agora pode construir seu projeto no editor de projetos!

![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)

## Que fazer agora?

Neste tutorial cobrimos os conceitos básicos para criar seu modelo de formulário detalhado. Agora pode criar modelos simples usando os recursos do Starter Project. Clique em **Final Project** abaixo para baixar a lista completa de modelos.

<div markdown="1" style="text-align: center; margin-top: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailForm/archive/c1be487dcbb83e5812c5fd8dd5e7422a79956c48.zip">MODELO FINAL DE FORMULÁRIO DETALHADO PERSONALIZADO</a>
</div>




