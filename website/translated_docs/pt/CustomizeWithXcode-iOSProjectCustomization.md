---
id: customize-your-ios-app
title: Personalizar seu app 4D for iOS
---

Vamos fazer modificações no storyboard... do simples ao complexo.

![Final result](assets/en/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## PASSO 1. Modificação de etiqueta simples

Vamos começar modificando a fonte e cor de uma etiqueta:

* Abra o arquivo *ContactDetailsForm.storyboard* desde a aba Navigation.
* Clique na etiqueta do primeiro nome (você pode também selecionar o construtor de interfaces no painel esquerdo).
* Selecione o painel Inspetor de atributos da área de utilitário.

![Attributes inspector](assets/en/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Altere a fonte da Helvetica Neue bold para Futura bold.

![Attributes inspector font](assets/en/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* Você também pode alterar a cor da fonte no mesmo painel.

![Attributes inspector color](assets/en/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## PASSO 2. Mudar a posição de imagem de perfil

Todos os modelos 4D for iOS usam restrições para alementos do aplicativo para serem bem exibidos em todos os aparelhos.

No arquivo *ContactDetailsForm.storyboard*, as etiquetas First Name, e Last Name estão todas alinhadas ao centro no momento.

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
* Bottom space: <First Name>: O espaço anteriormente definido entre a etiqueta Nome e a Imagem.

![Profil picture constraints](assets/en/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Apague todas as restrições exceto Width e Height (você vai modificá-las depois na seção Restrições no Size Inspector). O outline de imagem deve estar agora em vermelho, porque as restrições estão faltando.

Clique no botão Align (na parte inferior da janela Interface Builder) e marque a caixa de seleção **Vertically in Container**.

![Profil picture Align](assets/en/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Depois clique no botão **Add New Constraints** e adiciona uma nova restrição de distanciamento entre linhas (a restrição da esquerda).

![Profil picture new constraints](assets/en/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

Nesse ponto, todas as restrições de imagem de perfil devem estar em azul.

Parabéns! Sua foto do perfil está agora bem posicionada com as restrições corretas.

> **DICAS**
> 
> * Para criar uma restrição entre duas vistas, pressione Ctrl e arraste uma das vistas para a outra. Quando soltar o botão do mouse, a Interface Builder mostra um menu com uma lista de possíveis restrições.
> 
> * Pode apagar restrições selecionando-as do inspector Size ou desde o Interface Builder.

## PASSO 4. Atualizar posições de etiqueta e restrições

#### Agora, vamos trabalhar na etiqueta Nome.

Vamos começar mudando a posição e largura:

* Selecione a etiqueta First Name no Interface Builder.
* Depois mude a largura 386 a 267 píxels,
* Muda o valor de X de 8 a 127 píxels e o valor de Y de 28 a 79 píxels.

![First Name Label position](assets/en/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modifique as restrições restantes:

* Apague as restrições de leading space e de bottom space desde o inspetor de tamanho.
* Adicione uma restrição de leading space clicando no botão **Add New Constraints** para colocar a etiqueta de nome à direita da foto de perfil.
* Aperte a tecla Ctrl e arraste a etiqueta de nome à foto de perfil. Selecione a restrição superior no menu para alinhar ambos os elementos na parte superior.

![First Name Label top constraint](assets/en/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finalmente, vamos trabalhar na etiqueta do sobrenome.

Mude a posição e a largura:

* Selecione a etiqueta Last Name do Interface Builder.
* Mude a largura de 386  para 267 píxels.
* Mude o valor X de 8 para 127 píxels e o valor de Y de 144,33 para 118,33 píxels.

![Last Name Label position](assets/en/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modifique as restrições restantes:

* Apague as restrições de leading space do inspetor de Size.
* Adicione limitações de leading space e de espaço superior clicando no botão Adicionar novas restrições.

![Last Name Label constraint](assets/en/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Suas duas etiquetas estão resosicionadas.

Vamos ver o resultado no Simulador!

![Simulator result](assets/en/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. Não é exatamente o que queríamos...

* Selecione as etiquetas de First Name e Last Name e mude o alinhamento do centro para a esquerda no inspetor de atributos.

![Labels Alignment](assets/en/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Depois, selecione a imagem de perfil e dê duplo clique na restrição de leading space.
* Mude o valor 40,67 píxels da constante para 80 píxels.

![Constraints adjustments](assets/en/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Muito melhor! Agora todas as restrições estão funcionando e as etiquetas não estão rompendo outras restrições.

Como pode ver, personalizar seu app é bem simples!
