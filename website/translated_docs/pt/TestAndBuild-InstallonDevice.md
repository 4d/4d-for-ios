---
id: install-device
title: Instalar em seu dispositivo iOS
---

<div markdown="1" class = "objectives">
**OBJETIVOS**
Instalar uma aplicação 4D for iOS em um aparelho conectado
</div>

<div markdown="1" class = "prerequisites">
**PRÉ-REQUISITOS**

* Programa Apple Developer
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado em seu Mac para automatizar a instalação de app (opcional).
</div>

<div markdown="1" class = "tips">
**NOTA **
Apple configurator 2 requires **macOS 10.14** or later.
</div>

Dependendo de seus objetivos e preferências, pode escolher se inscrever em um desses programas:

* [Free Apple Developer Program](free-developer-account.html): Apenas para teste
* [Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html): Para lançamento na App Store
* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html): Para lançar seu app in-house

Vamos ao processo....

## PASSO 1. Criação de uma conta

* **Apple ID**: Create your Apple ID. Se aina não tiver uma, clique em [here](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## PASSO 2. Configuração Xcode

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID. ![Developer Account](assets/en/test-build/Developer-Account-4D-for-iOS.png)

## PASSO 3. Obtenha uma ID de Time

* Se estiver usando [Free Apple Developer Program](free-developer-account.html) vá para [o passo 4](#step-4-team-id-for-free-account).
* Se estiver usando um [Apple Developer Program para organizações](register-apple-developer-program-organization.html), [individual](register-apple-developer-program-individual.html) ou um [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html) vá para [o passo 5](#step-5-team-id-for-paid-subscription-account).

## PASSO 4. Team ID para a conta gratuita

### Deixe que Xcode gere seu perfil provisório e certificado

* Abra seu projeto atual da aba BUILD

![Build tab](assets/en/test-build/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here](free-developer-account.html) from the Team dropdown list.

![Account-Selection](assets/en/test-build/account-Selection-Free-Account.png)

* Conecte seu aparelho para seu computador e selecione-o do menu superior em Xcode.

![Selecione seu aparelho](assets/en/test-build/select-device-Free-Account.png)

* Xcode gera automaticamente os perfis e certificados que precisa para construir seu app.

### Construa seu projeto no Xcode usando sua Conta Gratuita

* Aperte o botão Build and Run de Xcode!

![Compile e Execute](assets/en/test-build/Build-Run-Free-Account.png)

## PASSO 5. Team ID para contas pagas

* **Team ID**: Go to Developer Account > Membership and get your Team ID. ![Developer Account membership](assets/en/test-build/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID. ![General section](assets/en/test-build/Team-ID-General-Section-4D-for-iOS.png)

* Vá para o Passo 6 para rodar seu projeto no aparelho.

## PASSO 6. Instalação

### Instale automaticamente com Apple Configurator 2

* Quando seu app estiver pronto, abra a aba BUILD.
* Conecte seu aparelho para seu computador com um cabo USB.
* From the BUILD tab, click on **Install**.

![Install button](assets/en/test-build/Install-button-build-tab-4D-for-iOS.png)

* O app está sendo instalado em seu aparelho!

### Instale manualmente usando Xcode

* Quando seu app estiver pronto, abra a aba BUILD.
* Conecte seu aparelho para seu computador com um cabo USB.
* From the BUILD tab, click on **Install**.

![Manual installation](assets/en/test-build/Manual-installation-4D-for-iOS.png)

* Um arquivo de seu projeto foi criado

![Archive creation](assets/en/test-build/Archive-creation.png)

* Revela o arquivo gerado em Finder

![Reveal archive in Finder](assets/en/test-build/Reveal-archive-in-Finder.png)

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](assets/en/test-build/Devices-and-Simulators-4D-for-iOS.png)

* O app está sendo instalado em seu aparelho!





