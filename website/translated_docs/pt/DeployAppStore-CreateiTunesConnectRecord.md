---
id: deploy-app-store-app-store-connect
title: Criar uma ficha em App Store
---

<div markdown="1" class = "objectives">
**OBJETIVOS**

* Create an App ID on your Developer Account
* Create your app in App Store Connect
</div>

<div markdown="1" class = "prerequisites">
**PRÉ-REQUISITOS**
[Apple Developer Program for organization](register-apple-developer-program-organization.html) or [individual](register-apple-developer-program-individual.html)
</div>


## PASSO 1. Criar uma ID de aplicação

#### O que é uma identificação (ID) de aplicação?

*An App ID is a two-part string used to identify one or more apps from a single development team. The string consists of a Team ID and a Bundle ID, with a period (.) separating the two parts (ex: TeamID.BundleID).*

<div markdown="1" class = "tips">
**NOTA **

* If you have chosen an Apple Developer Account as an individual, your account is available immediately and you can create your App ID.
* If you have chosen an Apple Developer Account as an organization, you must wait for Apple validation to create your App ID.
</div>

To create your App ID, go to your developer account and select [Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle)

* Click the + sign next to *Register iOS App IDs* to add a new App ID.

* Defina o nome e Bundle ID de sua aplicação.

![App ID](assets/en/deploy-app-store/Developer-account-App-ID.png)

* Defina os App Services para incluir à sua aplicação

![App Services](assets/en/deploy-app-store/App-Services-to-include.png)

* Confirm your App ID by clicking **Register**.

![Confirm App ID](assets/en/deploy-app-store/Confirm-App-ID.png)

## PASSO 2. Inicie a sessão na App Store Connect

* Inicie a sessão na sua [Conta App Store Connect](https://appstoreconnect.apple.com)
* Click on **My Apps**.

![App Store Connect](assets/en/deploy-app-store/App-Store-Connect-home-page.png)

## PASSO 3. Crie uma nova aplicação iOS

Click the **+** sign in the top left corner to create a new iOS App.

![Crie uma nova aplicação iOS](assets/en/deploy-app-store/Create-new-iOS-App.png)

Add the following information:

* **Platforms**: Select iOS.
* **Name**: The name of your app.
* **Primary language**: The main language for your app.
* **Bundle ID**: Select your App Bundle ID from the dropdown list.
* **SKU**: A unique ID for your app (this stays private and is not seen by users)
* **Limit User Access (optional)**: Allows you to limit access to your app to users with App Manager, Developer, Marketer, or Sales roles.

![Change BundleID](assets/en/deploy-app-store/Change-BundleID-Xcode-Project.png)

<div markdown="1" class = "tips">
**NOTA **
If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project.
</div>

## PASSO 4. Informação sobre a aplicação

From App Store Connect > App Information:

* Define a Privacy Policy URL de sua aplicação (opcional).
* Enter a subtitle for your app. This will appear below your app's name throughout the App Store in iOS 11.
* Selecione uma categoria primária e secundária (opcional) na qual sua aplicação vai aparecer.

![Informação sobre a aplicação](assets/en/deploy-app-store/App-Store-Connect-app-information.png)

## PASSO 5. Preços e disponibilidade

This is where you define the price for your app.

<div markdown="1" class = "tips">
**DICAS**
You can define limited-time discounts by specifying start and end dates.
</div>

## PASSO 6. Prepare para a inscrição

Add all of the assets for your app to appear in the App Store in **Version Information**:

<div markdown="1" class = "tips">
**DICAS**
You can generate all of your screenshots in Simulator (File > New Screen Shot).
</div>

![Prepare para a inscrição](assets/en/deploy-app-store/Prepare-for-submission-screenshot-description.png)

* Agregue suas capturas de tela. Capturas de tela para iPhone 5,5" Super Retina Display e iPad 12.9" Retina Display são obrigatórias. Para maiores detalhes, veja [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Scroll down and define the **Keywords** and complete the **Description** (this is what users will see in the App Store).
* You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a **Promotional Text** that will appear above your description on the App Store (for customers with devices running iOS 11 or later).
* Enter a **Support URL** that includes support information for your app. This URL will be visible on the App Store.
* **Marketing URL** is optional. Isso pode dirigir aos usuários a um website de marketing para sua aplicação.

In the **iOS App section**:

![iOS App section](assets/en/deploy-app-store/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* In **General App Information** area, enter the Copyright, Version, and Trade Representative Contact Information for your app.
* O ícone de sua aplicação é incluído no projeto gerado 4D para iOS.
* A classificação etária ou rating é uma propriedade usada para os controles parentais de App Store. Clique Edit e selecione a faixa etária apropriada para sua aplicação.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](assets/en/deploy-app-store/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information.
* **Version Release**: Specifies an automatic or manual publication.
* Finally, click **Save**.
