---
id: svg-file-detailform-template
title: Template.svg
sidebar_label: Template.svg
---

O arquivo template.svg é uma representação básica de modelo. No arquivo svg precisa definir áreas para poder adicionar campos em seu modelo de formulário detalhado desde o editor de projeto.

Aqui está a versão terminada:

![Arquivo template svg](assets/en/custom-detailform/detailform-template-svg-file.png)

This template has dynamic field numbering, meaning that this template will allow you to add an **image** and you can put **up to 8 fields** depending on your needs. Quando construir seu formulário detalhado na seção Formulários e arrastar e soltar um campo, um novo campo vazio aparece abaixo do campo anterior para adicionar um novo campo:

![Arquivo template svg](assets/en/custom-detailform/detailform-dynamic-field-number.png)

Abra o arquivo template.svg com seu editor de código favorito.

Vamos focar nas diferentes partes de seu arquivo SVG e o que vai precisar para editar.

## Título
```xml
<title>Custom Detail form</title>
```

Adicione o título para seu modelo aqui.

## ios:values

```
ios:values="f1,f2,f3,f4,f5,f6,f7,f8,f9"
```

**f1,f2,f3,f4,f5,f6,f7,f8,f9 IDs**: Refer to avaiblable fields to be displayed in your detail form. Isso permite que arraste e solte quantos campos queira definir.

## Posição, altura, largura e tipo da área
You can define position, height, and width for all of your fields like  we did for the [Custom list view tutorial](creating-listform.html).

### Propriedades de campo duplicadas

```
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
```

1. Posição Y toda a área
2. Posição fundo, altura e largura da Área
3. Define a posição e largura área texto.
4. Define a posição do campo, altura e largura, assim como os tipos de campos aceitos (neste exemplo são aceitos todos os tipos)
5. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

### Área Image Field

```
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
```

1. Posição Y toda a área
2. Posição fundo, altura e largura da Área
3. Ícone para exibir uma imagem no ImageField
4. Define a posição e largura área texto.
5. Defina la posição do campo "soltável", sua altura e largura, assim como os tipos de campos aceitos
6. Define um botão cancelar que pode ser exibido para apagar o conteúdo atual


### Campo a duplicar

```
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
```

1. ID multivalor para o campo a duplicar
2. Posição Y toda a área
3. Posição fundo, altura e largura da Área
4. Define a posição e largura área texto.
5. Define a posição do campo, altura e largura, assim como os tipos de campos aceitos (neste exemplo são aceitos todos os tipos)
6. Define um botão cancelar que pode ser exibido para apagar o conteúdo atual

Now that you have an **icon**, a **basic template description** in the manifest.json file, and your **svg file**, let's move on to the fun part with Xcode!

<div markdown="1" class = "tips">
**NOTA **
All types are available [here](https://developer.4d.com/docs/en/Concepts/data-types.html).
</div>

<div markdown="1" class = "tips">
**TIP**

* To make field type definition easier, 4D for iOS allows you to include field types with **positive values** and also exclude field types with **negative values**. For example, `ios:type="-3,-4"` will allow you to drag and drop every field exept images and dates.

* To include all types, just type `ios:type="all"`.
</div>
