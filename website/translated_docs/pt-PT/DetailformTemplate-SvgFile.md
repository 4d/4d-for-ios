---
id: svg-file-detailform-template
title: Template.svg
sidebar_label: Template.svg
---

O arquivo template.svg é uma representação básica de modelo. No arquivo svg precisa definir áreas para poder adicionar campos em seu modelo de formulário detalhado desde o editor de projeto.

Aqui está uma versão acabada:

![Template svg file](assets/en/custom-detailform/detailform-template-svg-file.png)

Este modelo tem uma numeração de campos dinâmica, o que significa que este modelo vai permitir que adicione uma **imagem** e pode agregar **até 8 campos** Quando construir seu formulário detalhado na seção Formulários e arrastar e soltar um campo, um novo campo vazio aparece abaixo do campo anterior para adicionar um novo campo:

![Template svg file](assets/en/custom-detailform/detailform-dynamic-field-number.png)

Abra o arquivo template.svg com seu editor favorito de código.

Vamos nos concentrar nas diferentes partes do arquivo SVG e o que precisa para editar.

## Título

    <title>Custom Detail form</title>
    

Agregue o título de seu modelo aqui.

## ios:values

    ios:values="f1,f2,f3,f4,f5,f6,f7,f8,f9"
    

**f1,f2,f3,f4,f5,f6,f7,f8,f9 IDs**: Consulte os campos disponíveis que serão mostrados no formulário detalhado. Isso permite que arraste e solte quantos campos queira definir.

## Posição, altura, largura e tipo da área

Pode definir posição, altura e largura para todos os campos como fizemos para o tutorial [Custom list view](creating-listform.html).

### Propriedades de campo duplicadas

    //1
    <g id="f" visibility="hidden" ios:dy="35">
    
    //2
    <rect class="bg field" x="14" y="0" width="238" height="30"/>
    
    //3
    <textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>
    
    //4
    <rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>
    
    //5
    <use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
    </g>
    

1. Posição de toda a área Y
2. Posição, altura e largura da área de fundo
3. Define a posição da área de texto e a largura 
4. Define a posição do campo, altura e largura, assim como os tipos de campos aceitos (neste exemplo são aceitos todos os tipos)
5. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

### Área Image Field

    //1
    <g transform="translate(0,60)">
    
    //2
    <rect class="bg field" x="15" y="0" width="236" height="65"/>
    
    //3
    <path class="picture" transform="translate(10 0) scale(6)"/>
    
    //4
    <textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>
    
    //5
    <rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>
    
    //6
    <use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>
    </g>
    

1. Posição de toda a área Y
2. Posição, altura e largura da área de fundo
3. Icone para mostrar uma imagem no imageField
4. Define a posição da área de texto e a largura 
5. Defina la posição do campo "soltável", sua altura e largura, assim como os tipos de campos aceitos 
6. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

### Campo a duplicar

    //1
    <g id="multivalued">
    
    //2
    <g transform="translate(0,140)">
    
    //3
    <rect class="bg field" x="14" y="0" width="238" height="30"/>
    
    //4
    <textArea id="f2.label" class="label" x="14" y="8" width="238">$4DEVAL(:C991("field[n]"))1</textArea>
    
    //5
    <rect id="f2" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]"/>
    
    //6
    <use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
    </g>
    </g>
    

1. ID multivalor para o campo a duplicar
2. Posição de toda a área Y
3. Posição, altura e largura da área de fundo
4. Define a posição da área de texto e a largura 
5. Define a posição do campo, altura e largura, assim como os tipos de campos aceitos (neste exemplo são aceitos todos os tipos)
6. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

Agora que tem um **ícone**, uma **descrição básica de modelo** no arquivo manifest.json e seu arquivo **svg**, vamos para a parte divertida com Xcode!<div class = "tips"> 

**NOTA**

Todos os tipos de campos e variáveis estão disponíveis em [aqui](http://doc.4d.com/4Dv17/4D/17/Field-and-Variable-Types.302-3729410.en.html).</div> <div class = "tips"> 

**DICAS**

* Para facilitar a definição dos tipos de campos, 4D for iOS lhe permite incluir tipos de campo com ** valores positivos ** e também exclui os tipos de campo com ** valores negativos **. Por exemplo, ```ios:type="-3,-4"``` permite que arraste e solte todo campo exceto as imagens e datas.

* Para incluir todos os tipos, apenas digite ```ios:type="all"```.</div>