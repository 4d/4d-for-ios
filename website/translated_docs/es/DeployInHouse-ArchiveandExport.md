---
id: deploy-in-house-archive-and-export
title: Archivar y exportar un proyecto
---

> **OBJETIVOS**
> 
> * Archivar y exportar un proyecto 4D for iOS
> * Generar archivos .ipa y manifest


> **REQUISITOS PREVIOS**
> 
> * [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html)
> * Un servidor Web seguro
> * Un icono de resolución 57 x 57 px
> * Un icono de resolución 512 x 512 px


## PASO 1. Configuración Xcode

Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts.

Xcode instalará automáticamente los elementos de provisión y certificados necesarios.

## PASO 2. Obtenga su Team ID

* Inicie sesión en su cuenta de desarrollador Apple. Encuentre su Team ID en Membership.

![Obtenga su Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## PASO 3. 4D for iOS configuration

* Lance 4D for iOS

* En la pestaña SECTIONS:

    * General: introduzca su Team ID.

    ![Enterprise-Team-ID](assets/en/deploy-in-house/Enterprise-Team-ID.png)

    * Publicación: ingrese su URL de producción (HTTPS es obligatorio para el despliegue).

* En la pestaña BUILD:
    * Crear y ejecutar: cree su proyecto.

## PASO 4. Abra su proyecto con Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASO 5. Archive su proyecto desde Xcode

* From Xcode, go to the simulator Menu and select **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## PASO 6. Exporte su proyecto

* Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear

* Click **Export**.

![Exporte su proyecto](assets/en/deploy-in-house/Organizer-window-archive.png)

## PASO 7. Seleccione su método de distribución

* Select **Enterprise** and click **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## PASO 8. Seleccione las opciones de distribución de su empresa

* Puede dejar todas las casillas de selección marcadas.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* Puede elegir dejar que Xcode genere un archivo manifest.plist por usted o generarlo manualmente.

* Click **Next**.

#### ¿Qué es un manifiesto?

El manifiesto es una lista de propiedades basada en XML y debe contener:

* **URL** : URL pointing to the .ipa file.
* **display-image**: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* **full-size-image**: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* **bundle-identifier**: Your app identifier string. Puedes obtenerlo desde el archivo .plist de su aplicación.
* **bundle-version**: Your app's current bundle version string. Puedes obtenerlo desde el archivo .plist de su aplicación.
* **title**: Your app's name.

Aquí hay un ejemplo de archivo manifest.plist:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>https://...Contact.ipa</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>display-image</string>
                    <key>url</key>
                    <string>https://...Contact_icon_57.png</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>full-size-image</string>
                    <key>url</key>
                    <string>https://...Contact_icon_512.png</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>com.contactApp.ContactDemoapp</string>
                <key>bundle-version</key>
                <string>1.0</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>Contact Demo app</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>
```


## PASO 9. Información del manifiesto de distribución

* Recomendamos dejar que Xcode haga el trabajo de ingresar la URL de su aplicación, así como también los URL de los iconos. Por supuesto, tendrá la opción de cambiar los URL más adelante.

![Información del manifiesto de distribución](assets/en/deploy-in-house/Distribution-manifest-information.png)

* Click **Next**.


## PASO 10. Vuelva a firmar su aplicación

* Let Xcode manage the **Automatically manage signing** option.

![Vuelva a firmar su aplicación](assets/en/deploy-in-house/Re-sign-your-application.png)

* Click **Next**.

## PASO 11. Verifique el contenido de su aplicación .ipa

* Aquí puede verificar que su identificador de aplicación sea correcto, así como también su Team ID.

![Verifique el contenido de su aplicación .ipa](assets/en/deploy-in-house/Review-ipa-content.png)

* Click on **Export** and select where to save your app folder on your computer.
