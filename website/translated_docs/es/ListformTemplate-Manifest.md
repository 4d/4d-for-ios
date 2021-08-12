---
id: manifest-detailform-template
title: Manifest.json
---

El archivo manifest incluye información sobre la plantilla de formulario listado, como el **tipo de Storyboard** (formulario listado o formulario detallado), **el nombre** y **el número de campos por celda**.

```json
{
  "type": "listform",

  "name": "Custom List form",

  "fields": {
    "count": 3
  }
}

```

Por ejemplo, el archivo manifiest para la plantilla de formulario listado a continuación incluye la siguiente información:

1. **Tipo de Storyboard:** listform
2. **Nombre de la plantilla:** Custom List form
3. **Número de campos: ** tres campos en cada celda (imagen de perfil, título y subtítulo)
4. **Tag:** `"___LISTFORMTYPE___": "Table"` table display
