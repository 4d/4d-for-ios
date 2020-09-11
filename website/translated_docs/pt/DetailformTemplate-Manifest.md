---
id: manifest-detailform-template
title: Manifest.json
---

O arquivo manifest inclui informação sobre seu modelo de formulário detalhe tal como  **tipo Storyboard ** (formulário ou formulário detalhe), **nome**, **número de campos estáticos** e **propriedades Icone**.


```json
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

```

Por exemplo, o arquivo manifesto para o formulário detalhado abaixo inclui as informações seguintes:

1. **Storyboard type:** detailform
2. **Template Name:** Custom Detail form
3. **Número de Campos:** Um campo estático (e 0 para um número infinito de campos duplicados  (uma imagem de cabeçalho e os campos duplicados))
4. **Propriedades do ìcone:** Largura e altura do ícone
