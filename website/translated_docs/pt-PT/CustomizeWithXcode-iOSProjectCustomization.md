---
id: customize-your-ios-app
title: Customize your 4D for iOS App
---

Vamos fazer algumas modificações de storyboard... do simples ao complexo.

![Final result](assets/en/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## PASSO 1. Modificação de etiqueta simples

Vamos começar modificando a fonte e cor de uma etiqueta:

* Abra o arquivo *ContactDetailsForm.storyboard* da guia de navegação. 
* Clique na etiqueta do primeiro nome (você pode também selecionar o construtor de interfaces no painel esquerdo).
* Selecione o painel Inspetor de atributos da área de utilitário.

![Attributes inspector](assets/en/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Altere a fonte da Helvetica Neue bold para Futura bold. 

![Attributes inspector font](assets/en/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* Você também pode alterar a cor da fonte no mesmo painel.

![Attributes inspector color](assets/en/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## PASSO 2. Mudar a posição de imagem de perfil

Todos os modelos 4D for iOS usam restrições para alementos do aplicativo para serem bem exibidos em todos os aparelhos.

No arquivo *ContactDetailsForm.storyboard*, as etiquetas de imagem, nome e sobrenome são todos atualmente alinhados ao centro.

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
* Bottom space to <first name>: O espaço anteriormente definido entre a etiqueta Nome e a Imagem.

![Profil picture constraints](assets/en/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Apague todas as restrições exceto Width e Height (você vai modificá-las depois na seção Restrições no Size Inspector). O outline de imagem deve estar agora em vermelho, porque as restrições estão faltando.

Clique no botão Alinhar (no fundo da janela Interface) e marque a checkbox **Vertically in Container**.

![Profil picture Align](assets/en/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Depois clique no botão **Adicione Novas Restrições** e adicione uma restrição de espaço entre linhas impressas (restrição esquerda).

![Profil picture new constraints](assets/en/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

Nesse ponto, todas as restrições de imagem de perfil devem estar em azul.

Parabéns! Sua foto do perfil está agora bem posicionada com as restrições corretas.<div class = "tips"> 

**DICAS**

* Para criar uma restrição entre dois modos de exibição, pressione Ctrl e arraste uma das vistas para o outro. Quando você soltar o botão do mouse, a Interface Builder exibe um menu com uma lista de possíveis restrições.

* Você pode excluir as restrições, ou selecioná-las a partir do Inspetor de tamanho ou do Interface Builder.</div> 

## PASSO 4. Atualizar posições de etiqueta e restrições

#### Agora, vamos trabalhar na etiqueta Nome.

Começamos mudando a posição e largura:

* Selecione a etiqueta Nome do Interface Builder.
* Agora mude a Width (largura) de 386 a 267 pixels
* Mude o valor X de 8 a 127 e o valor Y de 28 a 79 pixels.

![First Name Label position](assets/en/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modifique o resto das restrições:

* Apague as restrições de espaço anterior e fundo do Size inspector.
* Adicione uma restrição de espaço anterior, clicando no botão de **adicionar novas restrições** para posicionar a etiqueta Nome à direita da foto do perfil.
* Pressione Ctrl e arraste a etiqueta de nome para a foto do perfil. Selecione a restrição superior no menu para alinhar com o topo os dois elementos.

![First Name Label top constraint](assets/en/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finalmente, vamos trabalhar na etiqueta do sobrenome.

Mude a posição e largura:

* Selecione a etiqueta Nome do Interface Builder.
* Altere a largura de 386 para 267 pixels.
* Altere o valor de X de 8 a 127 pixels e o valor de Y de 144.33 a 118.33 pixels.

![Last Name Label position](assets/en/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modifique o resto das restrições:

* Apague as restrições de espaço anterior e fundo do Size inspector.
* Adicione restrições de espaço à esquerda e superior clicando no botão de adicionar novas restrições. 

![Last Name Label constraint](assets/en/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Ambas as etiquetas de nome agora são reposicionadas.

Vamos ver os resultados no simulador!

![Simulator result](assets/en/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. Não é exatamente o resultado que queríamos...

* Selecione as etiquetas Nome e Sobrenome e mude o alinhamento do centro para a esquerda no Inspetor de atributos. 

![Labels Alignment](assets/en/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Em seguida, selecione a foto do perfil e clique duas vezes sobre a restrição de espaço anterior.
* Altere o valor da constante de 40.67 para 80 pixels.

![Constraints adjustments](assets/en/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Muito melhor! Agora todas as restrições estão funcionando e as etiquetas não estão quebrando outras restrições.

Como você pode ver, personalizar seu app é muito simples!