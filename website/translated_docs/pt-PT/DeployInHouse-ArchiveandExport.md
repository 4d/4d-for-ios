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

## PASSO 8. Selecione as opções de distribuição de sua empresa

* Pode deixar todas as caixas de opção marcadas.

![Enterprise distribution options](assets/en/deploy-in-house/Enterprise-distribution-options.png)

* Pode deixar que o Xcode gere um arquivo manifest.plist para você ou gerá-lo manualmente.

* Clique **Next**.

#### O que é um manifesto?

O manifesto é uma lista de propriedades baseada em XML e deve conter:

* **URL** : URL que aponte ao arquivo .ipa.
* **display-image**: URL que aponte a um ícone 57 x 57 px (72 x 72 px para iPad) PNG usado durante o download e instalação.
* **full-size-image**: URL que aponte a uma imagem PNG de 512 x 512 px representando a aplicação iTunes.
* **bundle-identifier**: a string de identificação de seu app. Pode obtê-lo desde o arquivo .plist de seu app.
* **bundle-version**: A string da versão atual de seu pacote de aplicação. Pode obtê-lo do arquivo .plist de seu app.
* **title**: O nome de sua aplicação.

Aqui está um exemplo de um arquivo manifest.plist:

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

![Distribution manifest information](assets/en/deploy-in-house/Distribution-manifest-information.png)

* Clique **Next**.

## PASSO 10. Volte a assinar sua aplicação

* Deixe que Xcode administre a opção **Automatically manage signing**.

![Re-sign your application](assets/en/deploy-in-house/Re-sign-your-application.png)

* Clique **Next**.

## PASSO 11. Verifique o conteúdo do .ipa de sua aplicação

* Aqui pode verificar se o identificador de sua aplicação está correto, assim como a ID de Time.

![Review your app.ipa content](assets/en/deploy-in-house/Review-ipa-content.png)

* Clique em **Export** e selecione onde vai salvar a pasta de seu app no computador.