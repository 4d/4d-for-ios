---
id: deploy-in-house-distribution
title: Distribua seu app in-House
---

> **OBJETIVOS**
> 
> Suba sua aplicação para um servidor seguro.


## PASSO 1. Suba sua aplicação

Suba sua aplicação a um servidor seguro:

* Recursos (exibir imagem e imagem em tamanho real)
* Arquivo manifest.plist
* arquivo .ipa

Pode usar qualquer serviço de armazenamento na nuvem para distribuir seu app logo que estiver protegida (Dropbox, Google Drive, etc).

> **NOTA **
> 
> Seu recurso e suas URLs ipa devem coincidir com as URLs definidas em seu arquivo manifest.plist.

## PASSO 2. Crie o link da instalação

Crie um link**ITMS Serices** (iTunes Music Store) com a direção web completa de seu arquivo manifest como parâmetro:

```
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

Esse link pode ser usado para enviar correios eletrônicos, aninhados em uma página HTML ou mesmo um código QR.

Aqui um exemplo simples:

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*O Código QR usado para esta documentação não está ativo.*

## PASSO 3. Instale a sua aplicação em iOS

* Instale o app clicando no link ou escaneando o Código QR

![Scan and install](assets/en/deploy-in-house/Scan-and-install.png)

* Quando abrir pela primeira vez um app empresarial que instalou manualmente, uma notificação será exibida que indica que o desenvolvedor da aplicação não é de confiança em seu dispositivo.

* Ignore essa mensagem e clique **Cancel**.

* Em Configurações > Geral > Gestão de perfis & Gestão de dispositivo, no cabeçalho "Enterprise App", se lista o perfil do desenvolvedor.

![Untrust developer](assets/en/deploy-in-house/Untrust-developer.png)

* Introduza o nome do perfil do desenvolvedor para seja reconhecido como confiável.

![Trust-confirmation](assets/en/deploy-in-house/Trust-confirmation.png)

* Depois pode ir à sua aplicação e abri-la.

Parabéns, já pode distribuir sua primeira aplicação interna!
