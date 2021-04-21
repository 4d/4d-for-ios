---
id: install-device
title: Instalación en su dispositivo iOS
---

> **OBJETIVOS**
> 
> Instale una aplicación 4D for iOS en un dispositivo conectado


> **REQUISITOS PREVIOS**
> 
> * Apple Developer Program.
> * [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado en su Mac para automatizar la instalación de la aplicación (opcional).


> **NOTA**
> 
> Apple configurator 2 necesita **macOS 10.14** o superior.


Dependiendo de sus objetivos y de sus preferencias, puede optar por inscribirse en uno de los siguientes programas:

* [Free Apple Developer Program](free-developer-account.html): para prueba únicamente
* [Apple Developer Program para las empresas](register-apple-developer-program-organization.html) o [para los particulares](register-apple-developer-program-individual.html): con el fin de desplegar en el App Store
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): para desplegar su aplicación internamente

Veamos el proceso...

## PASO 1. Cree una cuenta

* **Identificador Apple**: cree su identificador Apple. Si no tienen uno, haga clic [aquí](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: elija un Apple Developer Program (para empresas o individuos) para desplegar en la App Store o el Apple Developer Enterprise Program (para despliegue interno).

## PASO 2. Configuración Xcode

* **Developer Account**: En Xcode > Preferences > Accounts, añada su Apple ID. ![Developer Account](assets/en/test-build/Developer-Account-4D-for-iOS.png)

## PASO 3. Obtenga su Team ID

* Si está utilizando un [Apple Developer Program gratuito](free-developer-account.html) vaya al [paso 4](#step-4-team-id-for-free-account).
* Si está utilizando un [Apple Developer Program para empresas](register-apple-developer-program-organization.html), [ para particulares ](register-apple-developer-program-individual.html) o un [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) vaya al [paso 5](#step-5-team-id-for-paid-subscription-account).

## PASO 4. Team ID para una cuenta gratuita

### Deje que Xcode genere su perfil y certificado

* Abra su proyecto actual desde la pestaña BUILD.

![Build tab](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verifique que la opción **Automatically manage signing** esté marcada y seleccione la cuenta que agregó [aquí](free-developer-account.html) en la lista desplegable "Team".

![Account-Selection](assets/en/test-build/account-Selection-Free-Account.png)

* Conecte su dispositivo a su ordenador y selecciónelo en el menú superior de Xcode.

![Seleccione su dispositivo](assets/en/test-build/select-device-Free-Account.png)

* Xcode genera automáticamente los perfiles y certificados de aprovisionamiento necesarios para crear su aplicación.

### Creación del proyecto con Xcode

* ¡Presione el botón Build and run Button en Xcode!

![Build and Run](assets/en/test-build/Build-Run-Free-Account.png)

## PASO 5. Team ID para una cuenta paga

* **Team ID**: Haga clic en Developer Account > Membership y obtenga su Team ID. ![Developer Account membership](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Lance 4D for iOS en Sections > General e introduzca su Team ID. ![General section](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Vaya al PASO 6 para ejecutar su proyecto en su dispositivo.

## PASO 6. Instalación

### Instalación automática con Apple Configurator 2

* Cuando su aplicación esté lista, abra la pestaña CREAR.
* Conecte su dispositivo a su ordenador con un cable USB.
* Desde la pestaña CREAR, haga clic en **Instalador**.

![Install button](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* ¡La aplicación se está instalando en su dispositivo!

### Instalación manual con Xcode

* Cuando su aplicación esté lista, abra la pestaña CREAR.
* Conecte su dispositivo a su ordenador con un cable USB.
* Desde la pestaña CREAR, haga clic en **Instalador**.

![Manual installation](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* Se crea un archivo de su proyecto

![Archive creation](assets/en/test-build/Archive-creation.png)

* Indique el archivo generado en Finder

![Reveal archive in Finder](assets/en/test-build/Reveal-archive-in-Finder.png)

* Abra Xcode y vaya a Menu > Window > Devices and Simulator y arrastre y suelte el archivo ipa generado en la sección Installed Apps.

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* ¡La aplicación se está instalando en su dispositivo!





