---
id: manifest-detailform-template
title: Manifest.json
---

El archivo de manifiesto incluye información sobre la plantilla de formulario detallado, como el **tipo de Storyboard** (formulario listado o formulario detallado), **el nombre**, **el número de campos estáticos** y **las propiedades del icono**.


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

Por ejemplo, el archivo manifiest para la plantilla de formulario detallado a continuación incluye la siguiente información:

1. **Storyboard type:** detailform
2. **Template Name:** Custom Detail form
3. **Número de campos:** 1 campo estático (y 0 para un infinito de campos duplicados (una imagen de encabezado y los campos duplicados))
4. **Propriedades del icono: **ancho y alto del icono
