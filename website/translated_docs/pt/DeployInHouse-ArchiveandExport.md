---
id: deploy-in-house-archive-and-export
title: Arquive e exporte seu Projeto
---

> **OBJETIVOS**
> 
> * Arquivar e exportar seu projeto 4D for iOS
> * Gerar .ipa e manifestar arquivos


> **PRÉ-REQUISITOS**
> 
> * [Programa Apple Enterprise Developer](register-apple-developer-enterprise-program.html)
> * Um servidor web seguro
> * Um ícone de resolução de 57 x 57 px
> * Um ícone de resolução 512 x 512 px


## PASSO 1. Configuração Xcode

Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts.

Xcode will automatically install required provisioning and certificates.

## PASSO 2. Obtenha uma ID de Time

* Registre-se na sua Conta de Desenvolvedor Apple. Lá pode achar sua ID de membro de um Time.

![Obtenha uma ID de Time](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## PASSO 3. 4D for iOS configuration

* Abra 4D for iOS

* Na aba SECTIONS:

    * Geral: Entre sua ID de Time.

    ![Enterprise-Team-ID](assets/en/deploy-in-house/Enterprise-Team-ID.png)

    * Publicación: ingrese sua URL de produção (HTTPS é obrigatório para o lançamento).

* Na aba BUILD:
    * Criar e Executar: Crie seu projeto.

## PASSO 4. Abra seu projeto com Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASSO 5. Arquive seu projeto com Xcode

* From Xcode, go to the simulator Menu and select **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## PASSO 6. Exporte seu projeto

* No final do processo de arquivo, aparece a janela do Organizador com o arquivo que acaba de criar

* Click **Export**.

![Exporte seu projeto](assets/en/deploy-in-house/Organizer-window-archive.png)

## PASSO 7. Selecione seu método de distribuição

* Select **Enterprise** and click **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## PASSO 8. Selecione as opções de distribuição de sua empresa

* Pode deixar todas as caixas de opção marcadas.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* Pode deixar que o Xcode gere um arquivo manifest.plist para você ou gerá-lo manualmente.

* Click **Next**.

#### O que é um manifesto?

The manifest is an XML-based property list and should contain:

* **URL** : URL pointing to the .ipa file.
* **display-image**: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* **full-size-image**: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* **bundle-identifier**: Your app identifier string. Pode obtê-lo desde o arquivo  .plist de seu app.
* **bundle-version**: Your app's current bundle version string. Pode obtê-lo desde o arquivo  .plist de seu app.
* **title**: Your app's name.

Here is an example of a manifest.plist file :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>https://...Contact.ipa</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>display-image</string>
                    <key>url</key>
                    <string>https://...Contact_icon_57.png</string>
                </dict>
                <dict>
                    <key>kind</key>
                    <string>full-size-image</string>
                    <key>url</key>
                    <string>https://...Contact_icon_512.png</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>com.contactApp.ContactDemoapp</string>
                <key>bundle-version</key>
                <string>1.0</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>Contact Demo app</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>
```


## PASSO 9. Informação sobre a distribuição do manifesto

* Recomendamos deixar que Xcode faça o trabalho de entrar sua URL de app assim como as URLs de ícones. Você pode mudar as URLs depois.

![Informação sobre a distribuição do manifesto](assets/en/deploy-in-house/Distribution-manifest-information.png)

* Click **Next**.


## PASSO 10. Volte a assinar sua aplicação

* Let Xcode manage the **Automatically manage signing** option.

![Volte a assinar sua aplicação](assets/en/deploy-in-house/Re-sign-your-application.png)

* Click **Next**.

## PASSO 11. Verifique o conteúdo do .ipa de sua aplicação

* Aqui pode verificar se o identificador de sua aplicação está correto, assim como a ID de Time.

![Verifique o conteúdo do .ipa de sua aplicação](assets/en/deploy-in-house/Review-ipa-content.png)

* Click on **Export** and select where to save your app folder on your computer.
