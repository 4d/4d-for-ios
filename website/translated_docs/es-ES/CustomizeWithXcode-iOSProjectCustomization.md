---
id: customize-your-ios-app
title: Personalizar su aplicación 4D for iOS
sidebar_label: Personalizar su aplicación 4D for iOS
---
Vamos a hacer alguna modificación al Storyboard... de simples a complejos.

![Final result](assets/customize-with-xcode/Simlator-Before-After-Xcode-4D-for-iOS.png)

## PASO 1. Modificación simple de etiqueta

Comenzaremos por modificar la fuente y el color de una etiqueta:

* Abra el archivo *ContactDetailsForm.storyboard* desde la pestaña Navigation. 
* Haga clic en la etiqueta de Nombre (también puede seleccionarla en el generador de interfaces o en el panel izquierdo).
* Seleccione el panel Attributes inspector (Inspector de atributos) en el área Utility (área de funcionalidades).

![Attributes inspector](assets/customize-with-xcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Cambie la fuente de Helvetica Neue Bold a Futura Bold. 

![Attributes inspector font](assets/customize-with-xcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* También puede cambiar el color de la fuente desde el mismo panel.

![Attributes inspector color](assets/customize-with-xcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## PASO 2. Cambiar la posición de la foto de perfil

Todas las plantillas de 4D for iOS tienen restricciones de uso para que los elementos de la aplicación se muestren correctamente en todos los dispositivos.

En el archivo *ContactDetailsForm.storyboard*, las etiquetas First Name, y Last Name están todas actualmente alineadas al centro.

Vamos a cambiarlo para que se vea así:

![Simulator result](assets/customize-with-xcode/Simlator-Final-Xcode-4D-for-iOS.png)

En primer lugar, alinee la imagen verticalmente y arrastre las etiquetas First Name y Last Name a la derecha de la imagen.

A continuación, seleccione la imagen y vaya al panel de atributos Size desde el área Utility. Cambiar el valor de X de 161.67 a 40.67 y el valor de Y de 28 a 79.

![Profil picture position](assets/customize-with-xcode/Profil-picture-position-Xcode-4D-for-iOS.png)

As you can see, the position has changed but Xcode is displaying yellow lines...why? Thse yellow lines represent contraints which are no longer valid.

## PASO 3. Update profile picture constraints

To vertically align the picture in the center in the Superview (the view which contains it), we need to delete the existing constraints and add new ones.

The image currently has the following constraints: * Width Equals: A fixed width of 78 pixels. * Height Equals: A fixed height of 78 pixels. * Align Center X: Centers the image on a previously defined horizontal axis. * Top Space: A fixed amount of space from the top of the image to the top of the view. * Bottom space to <first name>: The previously defined space between the First Name label and the image.

![Profil picture constraints](assets/customize-with-xcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Delete all of the constraints except Width and Height (you'll modify these later from the Size inspector in the Constraints section). The picture outline should be now in red because the constraints are missing.

Click on the Align button (at the bottom of the Interface Builder window) and check the **Vertically in Container** checkbox.

![Profil picture Align](assets/customize-with-xcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Next, click on the **Add New Constraints** button and add a leading space constraint (the left constraint).

![Profil picture new constraints](assets/customize-with-xcode/Profil-picture-new-constraints-4D-for-iOS.png)

At this point, all the profile picture constraints should be blue.

Congratulations! Your profile picture is now well postioned with the correct constraints.<div class = "tips"> 

**TIPS**

* To create a constraint between two views, press Ctrl and drag one of the views to the other. When you release the mouse button, the Interface Builder displays a menu with a list of possible constraints.

* You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.</div> 

## PASO 4. Update label positions and constraints

#### Now, let's work on the First Name label.

We'll begin by changing the position and width: * Select the First Name label from the Interface Builder. * Next, change the Width from 386 to 267 pixels. * Change the X value from 8 to 127 pixels and the Y value from 28 to 79 pixels.

![First Name Label position](assets/customize-with-xcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints: * Delete the leading and the bottom space constraints from the Size inspector. * Add a leading space constraint by clicking on the **Add New Constraints** button to position the First Name label to the right of the Profile picture. * Press Ctrl and drag the First Name label to the Profile picture. Select the top constraint in the menu to top align both elements.

![First Name Label top constraint](assets/customize-with-xcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finally, we'll work on the Last Name label.

Change the position and width: * Select the Last Name label from the Interface Builder. * Change the width from 386 to 267 pixels. * Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.

![Last Name Label position](assets/customize-with-xcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints: * Delete the leading space constraints from the Size inspector. * Add a leading space and top constraints by clicking on the Add New Constraints button.

![Last Name Label constraint](assets/customize-with-xcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Both of your name labels are now repostioned.

Let's see the results in the Simulator !

![Simulator result](assets/customize-with-xcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. That's not exactly the result we wanted ...

* Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector. ![Labels Alignment](assets/customize-with-xcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Next, select the Profile picture and double click on the leading space constraint.

* Change the Constant value from 40.67 to 80 pixels.

![Constraints adjustments](assets/customize-with-xcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Much better! Now all constraints are working and the labels aren't breaking other constraints.

As you can see, customizing your app is very simple!