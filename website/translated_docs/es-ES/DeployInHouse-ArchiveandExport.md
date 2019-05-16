---
id: deploy-in-house-archive-and-export
title: Archivar y exportar un proyecto
---

<div class = "objectives"> 

**OBJETIVOS**

* Archivar y exportar un proyecto 4D for iOS
* Generar archivos .ipa y manifest</div> <div class = "prerequisites"> 

**PRERREQUISITOS**

* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html)
* Un servidor Web seguro
* Un icono de resolución 57 x 57 px
* Un icono de resolución 512 x 512 px</div> 

## PASO 1. Configuración Xcode

Tras la validación de su cuenta por parte de Apple, abra Xcode y agregue su cuenta de Apple Enterprise Developer en Preferences > Accounts.

Xcode instalará automáticamente los elementos de provisión y certificados necesarios.

## PASO 2. Obtenga su Team ID

* Inicie sesión en su cuenta de desarrollador Apple. Encuentre su Team ID en Membership.

![Get your Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## PASO 3. Configuración 4D for iOS

* Lance 4D for iOS

* En la pestaña SECTIONS:
    
    * General: introduzca su Team ID.
    
    ![Enterprise-Team-ID](assets/en/deploy-in-house/Enterprise-Team-ID.png)
    
    * Publicación: ingrese su URL de producción (HTTPS es obligatorio para el despliegue).

* En la pestaña BUILD:
    
    * Crear y ejecutar: cree su proyecto.

## PASO 4. Abra su proyecto con Xcode

* Desde la pestaña BUILD del editor de proyectos, haga clic en Proyecto> Abrir el proyecto con Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASO 5. Archive su proyecto desde Xcode

* Desde Xcode, vaya al menú del simulador y seleccione **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Luego desde el menú, haga clic en Product y seleccione **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## PASO 6. Exporte su proyecto

* Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear

* Haga clic en **Export**.

![Export your project](assets/en/deploy-in-house/Organizer-window-archive.png)

## PASO 7. Seleccione su método de distribución

* Seleccione **Enterprise** y haga clic en **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## PASO 8. Seleccione las opciones de distribución de su empresa

* Puede dejar todas las casillas de selección marcadas.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* You can choose to let Xcode generate a manifest.plist file for you or generate it manually.

* Click **Next**.

#### What is a manifest?

The manifest is an XML-based property list and should contain:

* **URL** : URL pointing to the .ipa file.
* **display-image**: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* **full-size-image**: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* **bundle-identifier**: Your app identifier string. You can get it from your app's .plist file.
* **bundle-version**: Your app's current bundle version string. You can get it from your app's .plist file.
* **title**: Your app's name.

Here is an example of a manifest.plist file :

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
    

## PASO 9. Distribution manifest information

* We recommand letting Xcode do the job of entering your app URL as well as the icons URLs. You will, of course, have the option to change those URLs later.

![Distribution manifest information](assets/en/deploy-in-house/Distribution-manifest-information.png)

* Click **Next**. 

## PASO 10. Re-sign your application

* Let Xcode manage the **Automatically manage signing** option.

![Re-sign your application](assets/en/deploy-in-house/Re-sign-your-application.png)

* Click **Next**.

## STEP 11. Review your app.ipa content

* Here you can verify that your application identifier is correct as well as your Team ID.

![Review your app.ipa content](assets/en/deploy-in-house/Review-ipa-content.png)

* Click on **Export** and select where to save your app folder on your computer.