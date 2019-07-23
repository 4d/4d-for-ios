---
id: manifest-detailform-template
title: Manifest.json
---

O arquivo de manifesto inclui informações sobre seu modelo de formulário detalhado, tais como **tipo Storyboard** (formulário lista ou formulário detalhado), **nome**, **número de campos estáticos** e **Icone propriedades**.

    {
      "type": "detailform",
    
      "name": "Custom Detail form",
    
      "fields": {
        "count": 1
           },
    
      "assets": {
        "size": {
          "width": 16,
          "height": 16
        }
      }
    }
    
    

Por exemplo, o arquivo manifesto para o formulário detalhado abaixo inclui as informações seguintes:

1. **tipo Storyboard:** detailform
2. **Nome modelo:** formulário detalhado personalizado
3. **Número campo:** Um campo estático (e 0 para campos infinitamente duplicados (uma imagem cabeçalho e os campos duplicados))
4. **Propriedades Icone:** Icone largura e altura