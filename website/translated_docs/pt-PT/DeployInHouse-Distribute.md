---
id: deploy-in-house-distribution
title: Distribua seu app in-House
---

<div class = "objectives"> 

**OBJETIVOS**

Suba sua aplicação para um servidor seguro.</div> 

## PASSO 1. Suba sua aplicação

Suba seus arquivos de app para um servidor seguro:

* Recursos (exibir imagem e imagem em tamanho real)
* Arquivo manifest.plist
* arquivo .ipa

Pode usar qualquer serviço de armazenamento na nuvem para distribuir seu app logo que estiver protegida (Dropbox, Google Drive, etc).<div class = "tips"> 

**NOTA**

Seus recursos e URLs ipa devem coincidir com as URL definidas em seu arquivo manifest.plist.</div> 

## PASSO 2. Crie o link da instalação

Crie um link**ITMS Serices** (iTunes Music Store) com a direção web completa de seu arquivo manifest como parâmetro:

    itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist
    
    

Esse link pode ser usado para enviar correios eletrônicos, aninhados em uma página HTML ou mesmo um código QR.

Aqui um exemplo simples:

![Contact demo app install](assets/en/deploy-in-house/Contact-demo-app-install.png)

*O Código QR usado para esta documentação não está ativo.*

## PASSO 3. Instale a sua aplicação em iOS

* Instale o app clicando no link ou escaneando o Código QR

![Scan and install](assets/en/deploy-in-house/Scan-and-install.png)

* Quando abrir pela primeira vez um app empresarial que instalou manualmente, uma notificação será exibida que indica que o desenvolvedor da aplicação não é de confiança em seu dispositivo.

* Ignore essa mensagem e clique **Cancel**.

* Em Settings > General > Profiles ou Profiles & Device Management, no cabeçalho "Enterprise App", se lista o perfil do desenvolvedor.

![Untrust developer](assets/en/deploy-in-house/Untrust-developer.png)

* Introduza o nome do perfil do desenvolvedor para seja reconhecido como confiável.

![Trust-confirmation](assets/en/deploy-in-house/Trust-confirmation.png)

* Depois pode ir à sua aplicação e abri-la.

Parabéns ... já pode usar sua primeira aplicação interna!