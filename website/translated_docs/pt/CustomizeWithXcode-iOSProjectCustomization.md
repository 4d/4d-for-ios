---
id: customize-your-ios-app
title: Personalizar seu app 4D for iOS
---

Let's do some storyboard modification ... from simple to complex.

![Final result](assets/en/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## PASSO 1. Modificação de etiqueta simples

Vamos começar modificando a fonte e cor de uma etiqueta:

* Open the *ContactDetailsForm.storyboard* file from the Navigation tab.
* Clique na etiqueta do primeiro nome (você pode também selecionar o construtor de interfaces no painel esquerdo).
* Selecione o painel Inspetor de atributos da área de utilitário.

![Attributes inspector](assets/en/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Altere a fonte da Helvetica Neue bold para Futura bold.

![Attributes inspector font](assets/en/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* Você também pode alterar a cor da fonte no mesmo painel.

![Attributes inspector color](assets/en/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## PASSO 2. Mudar a posição de imagem de perfil

Todos os modelos 4D for iOS usam restrições para alementos do aplicativo para serem bem exibidos em todos os aparelhos.

In the *ContactDetailsForm.storyboard* file, the picture, First Name, and Last Name labels are all currently center aligned.

Vamos mudá-lo para aparecer assim:

![Simulator result](assets/en/customize-with-xcode/Simlator-Final-Xcode-4D-for-iOS.png)

Primeiro, alinhe verticalmente as imagens e arraste as etiquetas nome e sobrenome para a direita da imagem.

Em seguida, selecione a imagem e vá para o painel de atributos de tamanho da área de Utility. Altere o valor de X de 161.67 a 40.67 e o valor de Y de 28 a 79.

![Profil picture position](assets/en/customize-with-xcode/Profil-picture-position-Xcode-4D-for-iOS.png)

Como você pode ver, a posição foi alterada, mas o Xcode está exibindo linhas amarelas... por quê? Estas linhas amarelas representam restrições que não são mais válidas.

## PASSO 3. Atualizar as restrições de imagens de perfil

Para alinhar verticalmente a imagem no centro no Superview (a visão que a contém), precisamos eliminar as restrições existentes e adicionar novas.

A imagem possui atualmente as seguintes restrições:

* Width Equals: uma largura de 78 pixels.
* Heigh Equals: Uma altura fixa de 78 pixels.
* Align Center x: centra a imagem em um eixo horizontal definido anteriormente.
* Top Space: Uma quantia fixa de espaço da parte superior da imagem até o topo da vista.
* Bottom space to <First Name>: O espaço anteriormente definido entre a etiqueta Nome e a Imagem.

![Profil picture constraints](assets/en/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Apague todas as restrições exceto Width e Height (você vai modificá-las depois na seção Restrições no Size Inspector). O outline de imagem deve estar agora em vermelho, porque as restrições estão faltando.

Click on the Align button (at the bottom of the Interface Builder window) and check the **Vertically in Container** checkbox.

![Profil picture Align](assets/en/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Next, click on the **Add New Constraints** button and add a leading space constraint (the left constraint).

![Profil picture new constraints](assets/en/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

Nesse ponto, todas as restrições de imagem de perfil devem estar em azul.

Parabéns! Sua foto do perfil está agora bem posicionada com as restrições corretas.

<div markdown="1" class = "tips">
**DICAS**

* To create a constraint between two views, press Ctrl and drag one of the views to the other. Quando soltar o botão do mouse, a Interface Builder mostra um menu com uma lista de possíveis restrições.

* You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.
</div>

## PASSO 4. Atualizar posições de etiqueta e restrições

#### Agora, vamos trabalhar na etiqueta Nome.

We'll begin by changing the position and width:

* Select the First Name label from the Interface Builder.
* Next, change the Width from 386 to 267 pixels.
* Change the X value from 8 to 127 pixels and the Y value from 28 to 79 pixels.

![First Name Label position](assets/en/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints:

* Delete the leading and the bottom space constraints from the Size inspector.
* Add a leading space constraint by clicking on the **Add New Constraints** button to position the First Name label to the right of the Profile picture.
* Press Ctrl and drag the First Name label to the Profile picture. Select the top constraint in the menu to top align both elements.

![First Name Label top constraint](assets/en/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finalmente, vamos trabalhar na etiqueta do sobrenome.

Change the position and width:

* Select the Last Name label from the Interface Builder.
* Change the width from 386 to 267 pixels.
* Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.

![Last Name Label position](assets/en/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints:

* Delete the leading space constraints from the Size inspector.
* Add a leading space and top space constraints by clicking on the Add New Constraints button.

![Last Name Label constraint](assets/en/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Both of your name labels are now repostioned.

Let's see the results in the Simulator !

![Simulator result](assets/en/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. That's not exactly the result we wanted ...

* Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector.

![Labels Alignment](assets/en/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Next, select the Profile picture and double click on the leading space constraint.
* Change the Constant value from 40.67 to 80 pixels.

![Constraints adjustments](assets/en/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Much better! Now all constraints are working and the labels aren't breaking other constraints.

As you can see, customizing your app is very simple!
