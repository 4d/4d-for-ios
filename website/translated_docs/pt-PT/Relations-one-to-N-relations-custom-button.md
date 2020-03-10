---
id: one-to-many-relations-custom-button
title: Um para Muitos - botão personalizado
---

Como vimos em tutoriais anteriores, 4D for iOS lhe dá a liberdade de criar várias coisas personalizadas!

Em relação a modelos e formatadores personalizados, pode criar Botões de Relação personalizados.

Para fazer isso, nada é mais simples! Só precisa soltar seu botão personalizado em seu modelo personalizado.

Vamos começar baixando o Starter Project que inclui:

* um banco de dados com seu projeto móvel
* um botão Relação padrão

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip">BOTÂO STARTER PERSONALIZADO</a>

  </p>
</div>

## Integrar um botão

O primeiro passo é incluir o botão.xib em seu modelo personalizado para que 4D for IOS possa usá-lo.

Para usar o botão, só precisa soltá-lo na pasta ```YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact``` 

![Custom button path](assets/en/relations/Relation-custom-button-path.png)

O primeiro passo está pronto!

## Modificar o botão

Abra o arquivo .xib com Xcode.

Deve ter um aspecto como este:

![Custom relation button](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS.png)

E a partir do inspetor de atributos, pode mudar por exemplo:

* cores e fontes
* o estilo do botão
* o tamanho do botão, etc

Vamos mudar a cor do botão e a fonte da sua etiqueta!

### Cores e fontes personalizadas.

Selecione o botão e mude a cor e fonte a partir do inspetor de atributos.

Para o fundo, selecione Label Color para ter o melhor contraste em modos Light e Dark.

Para a cor de fonte, selecione System background color com uma fonte helvética Neue Medium.

Finalmente, não se esqueça de selecionar "tint" em System background color para aplicar essa cor no ícone de botão.

![Custom relation button](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)

Deve obter esse resultado em seu Simulador em modo Dark e Light:

![Custom relation color and font](assets/en/relations/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)

### Cantos arredondados de botões

Vamos adicionar alguns cantos arredondados para relationButton!

Para fazer isso abra o Identity Inspector.

Selecione seu Botão e adicione as duas linhas abaixo na área User Defined Runtime Attributes:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number```

* **Value**: ```12```

and

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean```

* **Value**: Selecione a opção

![Custom relation color and font](assets/en/relations/Custom-relation-button-Xcode-round-corners.png)

Agora pode construir seu projeto no editor de projetos!

O resultado deve parecer com isto:

![Custom relation color and font](assets/en/relations/Custom-relation-button-round-corners.png)

### Tamanho e restrições

lembre que se você **adicionar restrições** no seu botão, também terá que modificar o arquivo xib xml para **agregar algumas TAGS** como para os formulários detalhados personalizados. Isso permite que o botão seja duplicado quando várias relações estiverem disponíveis na mesma vista detalhada.

O que é conveniente porque vamos adicionar algumas restrições!

#### Adicionar restrições

Para este tutorial vamos adicionar uma altura de botão porque queremos que fique maior na tela.

Pásso 1. Primeiro selecione a vista e mude a altura de 123 a 40

![Button view height](assets/en/relations/Button-view-height.png)

Passo 2. Double click on the **Top Space Constraint** and change it from 8 to 0

![Top Space constraint](assets/en/relations/Top-Space-constraint.png)

Step 3. Do the same thing with **Bottom Space Constraint** and change it from 8 to 0

You should get this:

![Custom  button constraints](assets/en/relations/Custom-button-constraints.png)

Step 4. Add a height constraint of 40

![Button height constraint](assets/en/relations/Button-height-constraint.png)

You should get this:

![Horizontal in container](assets/en/relations/Custom-relation-button-constraints.png)

In order to indicate in the project editor that all of the elements included in this view will be duplicated, we need to add a TAG to each element and constraint.

### Add TAGS

Each storyboard element has an Object ID. Por exemplo, se selecionar Field View 2 e for a** identity Inspector**, verá seus identificadores de objetos:

![Object ID Storyboard](assets/en/relations/Custom-button-object-id-storyboard.png)

O processo é um pouco complicado.... So let's begin by opening the storyboard file with your favorite code editor!

#### Add a tag to the height constraint

Pásso 1. Select it from the Storyboard to get the Object ID

![Horizontal constraint object ID](assets/en/relations/Horizontal-constraint-object-ID.png)

Passo 2. Search for this ID in the xml file and put **TAG-RL-007** instead (a Tag that is not already used).

Step 3. Save the xml file

![Horizontal constraint xml file](assets/en/relations/Horizontal-constraint-xml-file.png)

Step 4. Focus on the Storyboard to check if the constraint has been updated correctly

![Horizontal object ID updated](assets/en/relations/Horizontal-object-id-updated.png)

And that's it! Your button is now fully duplicable if you have more that one relation button to display...

## O que fazer agora?

In this tutorial, we've covered the basics for creating custom relation buttons. Click on Final Project below to download the custom relation button.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip">FINAL CUSTOM BUTTON</a>

  </p>
</div>