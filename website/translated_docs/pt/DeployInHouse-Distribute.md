---
id: deploy-in-house-distribution
title: Distribua seu app in-House
---

> **OBJETIVOS**
> 
> Suba sua aplicação para um servidor seguro.


## PASSO 1. Suba sua aplicação

Upload your app files to a secured server:

* Recursos (exibir imagem e imagem em tamanho real)
* Arquivo manifest.plist
* arquivo .ipa

You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.).

> **NOTA **
> 
> Seu recurso e suas URLs ipa devem coincidir com as URLs definidas em seu arquivo manifest.plist.

## PASSO 2. Crie o link da instalação

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

```
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

This link can be used when sending emails, embedded in an html page, or even within a QR code.

Here is a simple example:

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*The QR Code used for this documentation is not active.*

## PASSO 3. Instale a sua aplicação em iOS

* Instale o app clicando no link ou escaneando o Código QR

![Scan and install](assets/en/deploy-in-house/Scan-and-install.png)

* Quando abrir pela primeira vez um app empresarial que instalou manualmente, uma notificação será exibida que indica que o desenvolvedor da aplicação não é de confiança em seu dispositivo.

* Ignore this message and click **Cancel**.

* In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.

![Untrust developer](assets/en/deploy-in-house/Untrust-developer.png)

* Introduza o nome do perfil do desenvolvedor para seja reconhecido como confiável.

![Trust-confirmation](assets/en/deploy-in-house/Trust-confirmation.png)

* Depois pode ir à sua aplicação e abri-la.

Congratulations ... you can now distribute your first app in-house!
