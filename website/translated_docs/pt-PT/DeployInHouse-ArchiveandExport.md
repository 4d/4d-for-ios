---
id: deploy-in-house-archive-and-export
title: Arquive e exporte seu Projeto
---

<div class = "objectives"> 

**OBJETIVOS**

* Arquive e exporte seu Projeto 4D for iOS
* Gere arquivos .ipa e manifest</div> <div class = "prerequisites"> 

**PRÉ-REQUISITOS**

* [Apple Enterprise Developer Program](register-apple-developer-enterprise-program.html)
* Um servidor Web seguro
* Um ícone de resolução 57 x 57 px
* Um ícone de resolução 512 x 512 px</div> 

## PASSO 1. Configuração Xcode

Depois da validação de sua conta por Apple, abra Xcode e agregue sua conta de Apple Enterprise Developer em Preferences > Accounts.

Xcode vai instalar automaticamente o provisionamento e certificados necessários.

## PASSO 2. Obtenha uma ID de Time

* Registre-se na sua Conta de Desenvolvedor Apple. Lá pode achar sua ID de membro de um Time.

![Get your Team ID](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## Passo 3. Configuração 4D for iOS

* Abra 4D for iOS

* Na aba SECTIONS:
    
    * Geral: Entre sua ID de Time.
    
    ![Enterprise-Team-ID](assets/en/deploy-in-house/Enterprise-Team-ID.png)
    
    * Publicación: ingrese sua URL de produção (HTTPS é obrigatório para o lançamento).

* Na aba BUILD:
    
    * Criar e Executar: Crie seu projeto.

## PASSO 4. Abra seu projeto com Xcode

* Da aba BUILD do Editor de Projeto de 4D for iOS, clique em Projeto>Abrir o Projeto com Xcode

![pen your project with Xcode ](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## PASSO 5. Arquive seu projeto com Xcode

* A partir de Xcode vá para o Menu simulador e selecione **Generic iOS Device**

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* A partir do menu, clique em Produto e selecione **Archive**

![Archive your Project](assets/en/deploy-in-house/Archive-your-Project.png)

## PASSO 6. Exporte seu projeto

* No final do processo de arquivo, aparece a janela do Organizador com o arquivo que acaba de criar

* Clique em **Export**.

![Export your project](assets/en/deploy-in-house/Organizer-window-archive.png)

## PASSO 7. Selecione seu método de distribuição

* Selecione **Enterprise** e clique em **Next**.

![Distribution Method](assets/en/deploy-in-house/Distribution-Method-selection.png)

## PASSO 8. Select your Enterprise distribution options

* You can leave all option boxes checked.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* You can choose to let Xcode generate a manifest.plist file for you or generate it manually.

* Click **Next**.

#### What is a manifest?

The manifest is an XML-based property list and should contain:

* **URL** : URL pointing to the .ipa file.
* **display-image**: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* **full-size-image**: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* **bundle-identifier**: Your app identifier string. You can get it from your app's .plist file.
* **bundle-version**: Your app's current bundle version string. You can get it from your app's .plist file.
* **title**: Your app's name.

Here is an example of a manifest.plist file :

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
    

## PASSO 9. Distribution manifest information

* We recommand letting Xcode do the job of entering your app URL as well as the icons URLs. You will, of course, have the option to change those URLs later.

![Distribution manifest information](assets/en/deploy-in-house/Distribution-manifest-information.png)

* Click **Next**. 

## PASSO 10. Re-sign your application

* Let Xcode manage the **Automatically manage signing** option.

![Re-sign your application](assets/en/deploy-in-house/Re-sign-your-application.png)

* Click **Next**.

## STEP 11. Review your app.ipa content

* Here you can verify that your application identifier is correct as well as your Team ID.

![Review your app.ipa content](assets/en/deploy-in-house/Review-ipa-content.png)

* Click on **Export** and select where to save your app folder on your computer.