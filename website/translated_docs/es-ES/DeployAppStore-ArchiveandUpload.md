---
id: deploy-app-store-archive-and-upload
title: Archivar y descargar un proyecto
---

:::tip OBJECTIVES Archive and upload your project to App Store Connect. :::

## PASO 1. Configuración Xcode
* Si ha elegido una cuenta de desarrollador de Apple individual, su cuenta estará disponible de inmediato.
* Si ha elegido una Cuenta de desarrollador de Apple como organización, debe esperar la validación de Apple.
* When your account is accessible, add it to Xcode in Preferences > Accounts.
* Xcode instalará automáticamente los elementos de provisión y certificados necesarios.

## PASO 2. Obtenga su Team ID

* Inicie sesión en su cuenta de desarrollador Apple. Encuentre su ITeam ID en Membership.

![Obtenga su Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## PASO 3. Configuración 4D for iOS

* Lance 4D for iOS
* En la pestaña SECTIONS:

**General: Enter your Team ID**

![Team ID](assets/en/deploy-app-store/Team-ID.png)

**Publishing: Enter your production URL**

(HTTPS is mandatory for deployment).

![Publicación](assets/en/deploy-app-store/Publishing.png)

* En la pestaña BUILD:

**Build and Run: Build your Project**

![BuildTab](assets/en/deploy-app-store/BuildTab.png)

## PASO 4. Abra su proyecto con Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![Abra su proyecto con Xcode](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASO 5. Archive su proyecto desde Xcode

* From Xcode go to the simulator Menu and select **Generic iOS Device**.

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Archive su proyecto desde Xcode](assets/en/deploy-in-house/Archive-your-Project.png)

## PASO 6. Valide su proyecto

* Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear.

* Click on the **Validate** button to start the validation process.

![Valide su proyecto](assets/en/deploy-app-store/Organizer-Project-Validation.png)

* El primer paso es seleccionar las opciones de distribución de la App Store.

![App Store distribution options](assets/en/deploy-app-store/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by  checking the **Automatically manage signing** option.

![Re-sign your app](assets/en/deploy-app-store/Re-sign-your-App.png)

* Verifique el contenido de su aplicación.

![App review](assets/en/deploy-app-store/Review-App.png)

* Si su proyecto pasa el proceso de validación, debería ver este mensaje:

![Validation](assets/en/deploy-app-store/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Click **Done**. Esto le devolverá a la ventana del organizador.

## PASO 7. Subir a la App Store

Once the validation process has been completed, you're ready to add your app to the App Store.

* Click the **Upload to App Store** button.

![Subir a la App Store](assets/en/deploy-app-store/Upload-to-AppStore.png)

* Cuando su proyecto se haya subido con éxito, verá esta ventana:

![Upload successful](assets/en/deploy-app-store/upload-Successful.png)

## PASO 8. Seleccione la versión destinada a la App Store

* From App Store Connect > App Store > iOS App, select your app and click the **+** button that appears in the Build section

![Add build](assets/en/deploy-app-store/Add-build-app-store-connect.png)

* Select the build you want to submit and click **Done**.

![Build selection](assets/en/deploy-app-store/Select-build-app-store-connect.png)

* Finally, click on the **Submit for Review** button.

## PASO 9. Envíe para revisión

* El último paso para enviar su aplicación para revisión es responder algunas preguntas rápidas sobre su aplicación.

![Envíe para revisión](assets/en/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click **Submit**.

* El tiempo promedio de revisión de la App Store es de alrededor de dos días.
