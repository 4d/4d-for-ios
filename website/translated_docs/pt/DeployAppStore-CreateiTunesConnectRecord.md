---
id: deploy-app-store-app-store-connect
title: Criar uma ficha em App Store
---

> **OBJETIVOS**
> 
> * Criar um identificador de aplicação em sua conta de desenvolvedor
> * Criar sua aplicação na App Store Connect


> **PRÉ-REQUISITOS**
> 
> [Apple Developer Program para empresas](register-apple-developer-program-organization.html) ou [particulares](register-apple-developer-program-individual.html)


## PASSO 1. Criar uma ID de aplicação

#### O que é uma identificação (ID) de aplicação?

*Uma ID de aplicação é uma string de duas partes usada para identificar um ou mais apps para um único time de desenvolvimento. Esta string consiste de uma ID de Time e uma ID Bundle, com um ponto(.) que separa as duas partes (exemplo: TimeID.BundleID).*

> **NOTA **
> 
> * Se escolher uma Conta Apple Developer como indivíduo, sua conta estará disponível imediatamente e pode criar sua App ID.
> * Se escolher uma conta Apple Developer como uma empresa, tem que esperar até a validação de Apple para criar sua App ID.


Para criar sua ID apple, vá para a conta Desenvolvedor e selecione [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle)

* Clique no símbolo + do lado de *Register iOS App IDs* para agregar um novo identificador de aplicação.

* Defina o nome e Bundle ID de sua aplicação.

![App ID](assets/en/deploy-app-store/Developer-account-App-ID.png)

* Defina os App Services para incluir à sua aplicação

![App Services](assets/en/deploy-app-store/App-Services-to-include.png)

* Confirme a identificação de aplicação clicando em **Register**.

![Confirm App ID](assets/en/deploy-app-store/Confirm-App-ID.png)

## PASSO 2. Inicie a sessão na App Store Connect

* Inicie a sessão na sua [Conta App Store Connect](https://appstoreconnect.apple.com)
* Clique em **My Apps**.

![App Store Connect](assets/en/deploy-app-store/App-Store-Connect-home-page.png)

## PASSO 3. Crie uma nova aplicação iOS

Clique no sinal **+** no canto esquerdo superior para criar uma nova aplicação iOS.

![Crie uma nova aplicação iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Agregue a informação abaixo:

* **Platforms**: Selecione iOS.
* **Name**: o nome da aplicação.
* **Primary language**: o idioma principal de sua aplicação.
* **Bundle ID**: Selecione a Bundle ID de sua apicação a partir da lista suspensa.
* **SKU**: Uma identidade única para sua aplicação (isso permanece privado e não pode ser visto pelos usuários)
* **Limit User Access (opcional)**: Permite que limite o acesso à sua aplicação para os usuários com funções de Administração, Desenvolvedor, Comercial ou Vendas.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)

> **NOTA **
> 
> Se seu Bundle ID não estiver disponível, pode ser que já esteja sendo usada por outro app na App Store. Terá que mudar a sua no projeto Xcode.

## PASSO 4. Informação sobre a aplicação

Em App Store Connect > App Information:

* Define a Privacy Policy URL de sua aplicação (opcional).
* Introduza uma legenda para seu app. Isso vai aparecer abaixo do nome de sua aplicação na App Store em iOS 11.
* Selecione uma categoria primária e secundária (opcional) na qual sua aplicação vai aparecer.

![Informação sobre a aplicação](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## PASSO 5. Preços e disponibilidade

Aqui você define o preço de sua aplicação.

> **DICAS**
> 
> Pode definir descontos por tempo limitado especificando as datas de começo e fim.

## PASSO 6. Prepare para a inscrição

Agregue todos os recursos de sua aplicação que quiser incluir na App Store em **Version Information**:

> **DICAS**
> 
> Pode gerar todas as suas capturas de tela no Simulator (File>New Screen Shot).

![Prepare para a inscrição](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Agregue suas capturas de tela. Capturas de tela para iPhone 5,5" Super Retina Display e iPad 12.9" Retina Display são obrigatórias. Para maiores detalhes, veja [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Role a tela para baixo e defina as palavras chaves **Keywords** e complete a **Description** (Isso é o que os usuários verão na App Store).
* Pode compartir atualizações de sua aplicação, incluídas novas promoções ou funcionalidades ou conteúdo, ofertas por tempo limitado, ou outros eventos dentro de sua aplicação adicionando um **Promotional Text** que aparece acima da sua descrição na App Store (para clientes com dispositivos com iOS 11 ou posterior).
* Ingresse um **Support URL** que inclua informação sobre compatibilidade para sua aplicação. Esta URL estará visível em App Store.
* **Marketing URL** é opcional. Isso pode dirigir aos usuários a um website de marketing para sua aplicação.

Na seção **iOS App**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Localize as versões de seu produto em **Build**.

* Na área **General App Information** ingresse os direitos de autor, a versão e informação de contato de sua aplicação.
* O ícone de sua aplicação é incluído no projeto gerado 4D para iOS.
* A classificação etária ou rating é uma propriedade usada para os controles parentais de App Store. Clique Edit e selecione a faixa etária apropriada para sua aplicação.

As seções **App Review Information** e **Version Release** incluem informações exigidas pela App Store. A informação oferecida aí não será vista pelos usuários.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Informações confidenciais de contato e de segurança.
* **Version Release**: especifica uma publicação automática ou manual.
* Finalmente, clique **Save**.
