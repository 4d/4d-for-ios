---
id: manifest-detailform-template
title: Manifest.json
---

O arquivo manifest inclui informação sobre o modelo de formulário lista, como o**tipo de Storyboard** (formulário lista ou formulário detalhado), **nome** e **número de campos por célula**.

```json
{
  "type": "listform",

  "name": "Custom List form",

  "fields": {
    "count": 3
  }
}

```

Por exemplo, o arquivo manifest para o modelo de formulário lista a seguir inclui as informações abaixo:

1. **Tipo Storyboard:** listform
2. **Nome de modelo:** Custom List form
3. **Número de campos:** Três campos em cada célula (imagem de perfil, título e subtítulo)
4. **Tag:** `"___LISTFORMTYPE___": "Table"` table display
