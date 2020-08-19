---
id: manifest-detailform-template
title: Manifest.json
---

O arquivo manifest inclui informação sobre o modelo de formulário detalhado tais como:

* **tipo Storyboard:** formulário lista ou formulário detalhe
* **nome**
* **renderer:** número da versão
* **hOffset:** o offset (desclocamento) vertical do primeiro campo que vai ser duplicado
* **número de campos estáticos **
* **Propriedades do Icone:** largura e altura


```json
{
  "type": "detailform",

  "name": "Custom Detail form",
  "renderer": 2,  
  "hOffset": 91, 
  "fields": {
    "count": 1, 
    "max": 0
 },

  "assets": {
    "size": {
      "width": 16,
      "height": 16
    }
  }
}

```

Por exemplo, o arquivo manifesto para o formulário detalhado abaixo inclui as informações seguintes:

1. **Storyboard type:** detailform
2. **Template Name:** Custom Detail form
3. **Version:** 2
4. **hOffset:** the first field that is going to be duplicated is at 91 pixels from the top
5. **Field number:** One static field (and 0 for infinite duplicated fields (a header image, and duplicated fields))
6. **Icon properties:** Icon width and height
