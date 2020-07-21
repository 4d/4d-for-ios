---
id: install-device
title: Instalación en su dispositivo iOS
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Install a 4D for iOS application on a connected device
</div>

<div markdown="1" class = "prerequisites">
**REQUISITOS PREVIOS**

* Apple Developer Program.
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate app installation (optional).
</div>

<div markdown="1" class = "tips">
**NOTA**
Apple configurator 2 requires **macOS 10.14** or later.
</div>

Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [Free Apple Developer Program](free-developer-account.html): para prueba únicamente
* [Apple Developer Program para las empresas](register-apple-developer-program-organization.html) o [para los particulares](register-apple-developer-program-individual.html): con el fin de desplegar en el App Store
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): para desplegar su aplicación internamente

Let's go through the process...

## PASO 1. Cree una cuenta

* **Apple ID**: Create your Apple ID. Si no tienen uno, haga clic [aquí](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## PASO 2. Configuración Xcode

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/en/test-build/Developer-Account-4D-for-iOS.png)

## PASO 3. Obtenga su Team ID

* Si está utilizando un [Apple Developer Program gratuito](free-developer-account.html) vaya al [paso 4](#step-4-team-id-for-free-account).
* Si está utilizando un [Apple Developer Program para empresas](register-apple-developer-program-organization.html), [ para particulares ](register-apple-developer-program-individual.html) o un [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) vaya al [paso 5](#step-5-team-id-for-paid-subscription-account).

## PASO 4. Team ID para una cuenta gratuita

### Deje que Xcode genere su perfil y certificado

* Abra su proyecto actual desde la pestaña BUILD.

![Build tab](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/en/test-build/account-Selection-Free-Account.png)

* Conecte su dispositivo a su ordenador y selecciónelo en el menú superior de Xcode.

![Seleccione su dispositivo](assets/en/test-build/select-device-Free-Account.png)

* Xcode genera automáticamente los perfiles y certificados de aprovisionamiento necesarios para crear su aplicación.

### Creación del proyecto con Xcode

* ¡Presione el botón Build and run Button en Xcode!

![Build and Run](assets/en/test-build/Build-Run-Free-Account.png)

## PASO 5. Team ID para una cuenta paga

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![Developer Account membership](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General section](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Vaya al PASO 6 para ejecutar su proyecto en su dispositivo.

## PASO 6. Instalación

### Instalación automática con Apple Configurator 2

* Cuando su aplicación esté lista, abra la pestaña CREAR.
* Conecte su dispositivo a su ordenador con un cable USB.
* From the BUILD tab, click on **Install**.

![Install button](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* ¡La aplicación se está instalando en su dispositivo!

### Instalación manual con Xcode

* Cuando su aplicación esté lista, abra la pestaña CREAR.
* Conecte su dispositivo a su ordenador con un cable USB.
* From the BUILD tab, click on **Install**.

![Manual installation](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* Se crea un archivo de su proyecto

![Archive creation](assets/en/test-build/Archive-creation.png)

* Indique el archivo generado en Finder

![Reveal archive in Finder](assets/en/test-build/Reveal-archive-in-Finder.png)

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* ¡La aplicación se está instalando en su dispositivo!





