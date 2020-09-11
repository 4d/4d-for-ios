---
id: manifest-detailform-template
title: Manifest.json
---

The manifest file includes information about your detail form template such as the :

* **Storyboard type:** list form or detail form
* **name**
* **renderer:** version number
* **hOffset:** the vertical offset of the first field that is going to be duplicated
* **number of static fields**
* **Icon properties:** width and height


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

Por ejemplo, el archivo manifiest para la plantilla de formulario detallado a continuación incluye la siguiente información:

1. **Tipo de Storyboard:** detailform
2. **Nombre de la plantilla:** Custom Detail form
3. **Version:** 2
4. **hOffset:** the first field that is going to be duplicated is at 91 pixels from the top
5. **Número de campos:** 1 campo estático (y 0 para un infinito de campos duplicados (una imagen de encabezado y los campos duplicados))
6. **Propriedades del icono: **ancho y alto del icono
