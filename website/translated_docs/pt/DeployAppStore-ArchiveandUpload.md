---
id: deploy-app-store-archive-and-upload
title: Arquive e atualize seu Projeto
---

> **OBJETIVOS**
> 
> Archive and upload your project to App Store Connect.

## PASSO 1. Configuração Xcode
* Se escolher uma Conta de Desenvolvedor Apple como um indivíduo, sua conta está disponível imediatamente.
* Se escolher uma Conta Desenvolvedor Apple como uma organização, tem que esperar pela validação Apple.
* When your account is accessible, add it to Xcode in Preferences > Accounts.
* Xcode vai instalar automaticamente o provisionamento e certificados necessários.

## PASSO 2. Obtenha uma ID de Time

* Registre-se na sua Conta de Desenvolvedor Apple. Lá pode achar sua ID de membro de um Time.

![Obtenha uma ID de Time](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## PASSO 3. 4D for iOS configuration

* Abra 4D for iOS
* Na aba SECTIONS:

**General: Enter your Team ID**

![Team ID](assets/en/deploy-app-store/Team-ID.png)

**Publishing: Enter your production URL**

(HTTPS is mandatory for deployment).

![Publishing](assets/en/deploy-app-store/Publishing.png)

* Na aba BUILD:

**Build and Run: Build your Project**

![BuildTab](assets/en/deploy-app-store/BuildTab.png)

## PASSO 4. Abra seu projeto com Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![Abra seu projeto com Xcode](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASSO 5. Arquive seu projeto com Xcode

* From Xcode go to the simulator Menu and select **Generic iOS Device**.

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Arquive seu projeto com Xcode](assets/en/deploy-in-house/Archive-your-Project.png)

## PASSO 6. Valide seu projeto

* No final do processo de arquivo, aparece a janela do Organizador com o arquivo que acaba de criar.

* Click on the **Validate** button to start the validation process.

![Valide seu projeto](assets/en/deploy-app-store/Organizer-Project-Validation.png)

* O primeiro passo é selecionar as opções de distribuição do App Store.

![App Store distribution options](assets/en/deploy-app-store/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by  checking the **Automatically manage signing** option.

![Re-sign your app](assets/en/deploy-app-store/Re-sign-your-App.png)

* Verifique o conteúdo de sua aplicação.

![App review](assets/en/deploy-app-store/Review-App.png)

* Se seu projeto passar o processo de validação, vai ver esta mensagem:

![Validation](assets/en/deploy-app-store/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Click **Done**. Isso vai lhe devolver para a janela de Organizador.

## PASSO 7. Suba para a App Store

Once the validation process has been completed, you're ready to add your app to the App Store.

* Click the **Upload to App Store** button.

![Suba para a App Store](assets/en/deploy-app-store/Upload-to-AppStore.png)

* Quando seu projeto tiver sido atualizado com sucesso, verá esta janela:

![Upload successful](assets/en/deploy-app-store/upload-Successful.png)

## PASSO 8. Selecione a versão destinada à App Store

* From App Store Connect > App Store > iOS App, select your app and click the **+** button that appears in the Build section

![Add build](assets/en/deploy-app-store/Add-build-app-store-connect.png)

* Select the build you want to submit and click **Done**.

![Build selection](assets/en/deploy-app-store/Select-build-app-store-connect.png)

* Finally, click on the **Submit for Review** button.

## PASSO 9. Envie para Revisão

* O passo final para enviar sua aplicação para revisão é responder algumas perguntas rápidas sobre sua aplicação.

![Envie para Revisão](assets/en/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click **Submit**.

* O tempo médio de revisão da App Store é de apenas dois dias!
