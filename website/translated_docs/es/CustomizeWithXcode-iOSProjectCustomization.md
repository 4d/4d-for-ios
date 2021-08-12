---
id: customize-your-ios-app
title: Personalizar su aplicación 4D for iOS
---

Hagamos algunas modificaciones al storyboard... de simple a complejo.

![Resultado final](assets/en/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## PASO 1. Modificación simple de etiqueta

Comenzaremos por modificar la fuente y el color de una etiqueta:

* Abra el archivo *ContactDetailsForm.storyboard* desde la pestaña Navigation.
* Haga clic en la etiqueta de Nombre (también puede seleccionarla en el generador de interfaces o en el panel izquierdo).
* Seleccione el panel Attributes inspector (Inspector de atributos) en el área Utility (área de funcionalidades).

![Attributes inspector](assets/en/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Cambie la fuente de Helvetica Neue Bold a Futura Bold.

![Attributes inspector font](assets/en/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* También puede cambiar el color de la fuente desde el mismo panel.

![Attributes inspector color](assets/en/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## PASO 2. Cambiar la posición de la foto de perfil

Todas las plantillas de 4D for iOS tienen restricciones de uso para que los elementos de la aplicación se muestren correctamente en todos los dispositivos.

En el archivo *ContactDetailsForm.storyboard*, las etiquetas First Name, y Last Name están todas actualmente alineadas al centro.

Vamos a cambiarlo para que se vea así:

![Simulator result](assets/en/customize-with-xcode/Simlator-Final-Xcode-4D-for-iOS.png)

En primer lugar, alinee la imagen verticalmente y arrastre las etiquetas First Name y Last Name a la derecha de la imagen.

A continuación, seleccione la imagen y vaya al panel de atributos Size desde el área Utility. Cambiar el valor de X de 161.67 a 40.67 y el valor de Y de 28 a 79.

![Profil picture position](assets/en/customize-with-xcode/Profil-picture-position-Xcode-4D-for-iOS.png)

Como se puede ver, la posición ha cambiado pero Xcode muestra las líneas amarilla... ¿por qué? Estas líneas amarillas representan las restricciones que no son válidas.

## PASO 3. Actualizar las limitaciones de foto de perfil

Para alinear verticalmente la imagen al centro en el Superview (la visiualización contiene la imagen), tenemos que eliminar las restricciones existentes y añadir nuevas.

La imagen actualmente tiene las restricciones siguientes:

* Width Equals: un ancho de 78 píxeles.
* Height Equals: una alto de 78 píxeles.
* Align Center X: centra la imagen en un eje horizontal previamente definido.
* Top Space: un espacio entre la parte superior de la imagen hasta la parte superior de la vista.
* Bottom space: <First Name>el espacio anteriormente definido entre la etiqueta de nombre y la imagen.

![Profil picture constraints](assets/en/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Elimine todas las restricciones excepto Width y Height (se modificarán más tarde desde el inspector Size (de tamaño) en la sección Constraints (restricciones). El contorno de la imagen debe estar ahora en rojo porque faltan las restricciones.

Haga clic en el botón Align (en la parte inferior de la ventana Interface Builder) y marque la casilla **Vertically in Container**.

![Profil picture Align](assets/en/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

A continuación, haga clic en el botón **Add New Constraints** y añada una nueva restricción de espacio principal (la restricción de la izquierda).

![Profil picture new constraints](assets/en/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

En este punto, todas las restricciones de la foto de perfil deben ser azules.

¡Felicitaciones! ¡Felicitaciones! Su foto de perfil está ahora bien ubicada con las restricciones correctas.

> **RECOMENDACIONES**
> 
> * Para crear una restricción entre dos vistas, presione Ctrl y arrastre una de las vistas a la otra. Cuando suelte el botón del ratón, el Interface Builder muestra un menú con una lista de posibles restricciones.
> 
> * Puede eliminar las restricciones o seleccionarlas desde el inspector Size o desde el Interface Builder.

## PASO 4. Actualizar la posición y las restricciones de etiquetas

#### Ahora, vamos a trabajar en la etiqueta de nombre First Name.

Comenzaremos cambiando la posición y el ancho:

* Seleccione la etiqueta de nombre del Interface Builder.
* A continuación, cambie el ancho de 386 a 267 píxeles.
* Cambie el valor de X de 8 a 127 píxeles y el valor de Y de 28 a 79 píxeles.

![First Name Label position](assets/en/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modifique las restricciones restantes:

* Elimine las restricciones de leading space y de bottom space desde el inspector de tamaño Size.
* Añada una restricción de leading space haciendo clic en el botón **Add New Constraints** para colocar la etiqueta de nombre a la derecha de la foto de perfil.
* Presione la tecla Ctrl y arrastre la etiqueta de nombre a la foto de perfil. Seleccione la restricción superior en el menú para alinear ambos elementos en la parte superior.

![First Name Label top constraint](assets/en/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Por último, vamos a trabajar en la etiqueta de nombre Last Name.

Cambie la posición y el ancho:

* Seleccione la etiqueta Last Name del Interface Builder.
* Cambie el valor 386 píxeles de ancho por 267 píxeles.
* Cambie el valor de X de 8 a 127 y el valor de Y de 144.33 a 118.33.

![Last Name Label position](assets/en/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modifique las restricciones restantes:

* Elimine las restricciones de leading space desde el inspector de tamaño Size.
* Agregar limitaciones de espacio principal y de espacio superior haciendo clic en el botón de agregar nuevas restricciones.

![Last Name Label constraint](assets/en/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Ahora sus dos etiquetas de nombre son reposicionadas.

¡Vamos a ver los resultados en el simulador!

![Simulator result](assets/en/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. No es exactamente lo que queríamos...

* Seleccione las etiquetas de First Name y Last Name y cambie la alineación del centro a la izquierda en el inspector de atributos.

![Labels Alignment](assets/en/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* A continuación, seleccione la imagen de perfil y haga doble clic en la restricción de leading space.
* Cambie el valor 40.67 píxeles de la constante por 80 píxeles.

![Constraints adjustments](assets/en/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

¡Mucho mejor! Ahora todas las restricciones están funcionando y las etiquetas no están rompiendo otras restricciones.

Como puede ver, ¡Personalizar su aplicación es muy simple!
