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

Tras la validación de su cuenta por parte de Apple, abra Xcode y añada su cuenta de Apple Enterprise Developer en Preferences > Accounts.

Xcode instalará automáticamente los elementos de provisión y certificados necesarios.

## PASO 2. Obtenga su Team ID

* Inicie sesión en su cuenta de desarrollador Apple. Encuentre su Team ID en Membership.

![Obtenga su Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## PASO 3. Configure 4D for iOS

* Lance 4D for iOS

* En la pestaña SECTIONS:

    * General: introduzca su Team ID.

    ![Enterprise-Team-ID](assets/en/deploy-in-house/Enterprise-Team-ID.png)

    * Publicación: ingrese su URL de producción (HTTPS es obligatorio para el despliegue).

* En la pestaña BUILD:
    * Crear y ejecutar: cree su proyecto.

## PASO 4. Abra su proyecto con Xcode

* Desde la pestaña BUILD del editor de proyectos de 4D for iOS, haga clic en Proyecto > Abrir el proyecto con Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASO 5. Archive su proyecto desde Xcode

* Desde Xcode, vaya al menú del simulador y seleccione **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Luego desde el menú, haga clic en Product y seleccione **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## PASO 6. Exporte su proyecto

* Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear

* Haga clic en **Export**.

![Exporte su proyecto](assets/en/deploy-in-house/Organizer-window-archive.png)

## PASO 7. Seleccione su método de distribución

* Seleccione **Enterprise** y haga clic en **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## PASO 8. Seleccione las opciones de distribución de su empresa

* Puede dejar todas las casillas de selección marcadas.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* Puede elegir dejar que Xcode genere un archivo manifest.plist por usted o generarlo manualmente.

* Haga clic en **Next**.

#### ¿Qué es un manifiesto?

El manifiesto es una lista de propiedades basada en XML y debe contener:

* **URL**: URL que apunta al archivo .ipa.
* **display-image**: URL que apunta a un icono PNG de 57 x 57 px (72 x 72 px para iPad) utilizado durante la descarga y la instalación.
* **full-size-image**: URL que apunta a una imagen PNG de 512 x 512 px que representa la aplicación iTunes.
* **bundle-identifier**: la cadena de identificación de su aplicación. Puedes obtenerlo desde el archivo .plist de su aplicación.
* **bundle-version**: la cadena de la versión actual del paquete de su aplicación. Puedes obtenerlo desde el archivo .plist de su aplicación.
* **title**: el nombre de su aplicación.

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
</plist>Contact.ipa</string>
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

* Haga clic en **Next**.


## PASO 10. Vuelva a firmar su aplicación

* Deje que Xcode administre la opción **Automatically manage signing**.

![Vuelva a firmar su aplicación](assets/en/deploy-in-house/Re-sign-your-application.png)

* Haga clic en **Next**.

## PASO 11. Verifique el contenido de su aplicación .ipa

* Aquí puede verificar que su identificador de aplicación sea correcto, así como también su Team ID.

![Verifique el contenido de su aplicación .ipa](assets/en/deploy-in-house/Review-ipa-content.png)

* Haga clic en **Export** y seleccione dónde guardar la carpeta de su aplicación en su computador.
