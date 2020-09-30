---
id: faq
title: FAQ
---

## Pré-requisitos

<details>
<summary>
    **Do I need specific expertise to use 4D for iOS?**
</summary>

Com 4D for iOS, pode criar facilmente projetos móveis diretamente desde 4D, sem necessidade de experiência prévia na criação de aplicações iOS nativas!

O editor de projetos móveis foi criado para que seja possível usar 4D for iOS sem nenhum conhecimento específico no desenvolvimento de aplicações móveis.

</details>

<details>
<summary>
**Are there any prerequisites for 4D for iOS?**
</summary>

### Tabela de comparação de tabelas

| Xcode  | Swift | iOS  | 4D        | macOS   |
| ------ | ----- | ---- | --------- | ------- |
| 12.0   | 5.3   | 14.0 | 18R5 beta | 10.15.2 |
| 12.0   | 5.3   | 14.0 | 18R4      | 10.15.2 |
| 11.5   | 5.2.4 | 13.5 | 18R3      | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2      | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1      | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2      | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18        | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6      | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5      | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4      | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3      | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2      | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2      | 10.13.2 |

Caso precise de uma versão antiga de Xcode pode baixá-la aqui: https://developer.apple.com/download/more/

=> Only registered developers can download preview releases through the Apple Developer website.

Veja a lista de pré-requisitos  [aqui](prerequisites.html).

</details>


<details>
<summary>
**Can I use Windows to develop with 4D for iOS?**
</summary>

Não. Deve desenvolver em macOS, pois é preciso Xcode para compilar a aplicação final e executar o Simulador.

</details>


## Licença

<details>
<summary>
**Do I need a 4D Web Server to run 4D for iOS?**
</summary>

Não - 4D for iOS está incluído em 4D Server v17 R2 e superior.

</details>



<details>
<summary>
**Is there a test or evaluation license available?**
</summary>

Se já tiver uma licença 4D Developer Pro ou 4D Server para 4D v17 R2 ou posterior, já está incluido o 4D for iOS.

Se ainda não for um 4D Partner, ou não participa no programa 4D Manutenção, você tem que esperar por 4D V18.

</details>


<details>
<summary>
**What 4D license do I need to develop with 4D for iOS?**
</summary>

You need a 4D Developer Pro v17 R2 or newer (macOS) license to develop 4D for iOS apps.

</details>


<details>
<summary>
**What 4D license do I need to deploy apps created with 4D for iOS?**
</summary>

É preciso ter uma licença 4D Server (macOS ou Windows) v17 R2 ou mais nova, para implementar aplicações iOS.

Não é preciso licenças adicionais. Suas aplicações 4D for iOS compartilham as mesmas licenças que as de 4D Remote (cliente).

Clientes podem se conectar em Macs, PCs Windows ou iPhones, desde o número total de usuários simultâneos esteja coberto pela licença 4D Server.

</details>


<details>
<summary>
**I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?**
</summary>

You can use up to four mobile devices.

</details>


## Perguntas diversas

<details>
<summary>
**Can I modify and update data from my iOS app?**
</summary>

Yes, of course.

</details>

<details>
<summary>
**Where is my data actually stored?**
</summary>

Your data is stored locally on your iOS device. This allows you to access your data in offline mode.

</details>


<details>
<summary>
**Can I use related tables in 4D for iOS?**
</summary>

We know that you use a lot related tables for your business applications and we're working on accessing related tables for a future 4D for iOS release.

</details>


<details>
<summary>
**Can I use calculated fields in 4D for iOS?**
</summary>

You can create pre-calculated fields in 4D and publish them from the [Structure section](structure.html) of the 4D for iOS project editor.

</details>


<details>
<summary>
**Do I need to have images in my database?**
</summary>

Images are not mandatory, but we highly recommend that you use images to offer the best user experience.

4D for iOS offers a variety of [list form](list-form-templates.html) and [detail form](detail-form-templates.html) templates. With or without images, with charts...

</details>

<details>
<summary>
**Do I need to create an icon for my iOS app?**
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General](general.html) section of the project editor.

</details>


<details>
<summary>
**How can I test my app?**
</summary>

4D for iOS allows you to test your apps in the [Simulator](simulator.html). To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details>
<summary>
**Do I need to create special iOS templates to build my apps on an iPhone or iPad?**
</summary>

All of templates available in 4D for iOS are optimized for the iPhone. They also work well on iPads.

</details>



<details>
<summary>
     **Do I need an Apple Developer Account?**
</summary>

To test your app, you'll need to create at least a [free Apple Developer account](free-developer-account.html).

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (for an in-house deployment) or in the [Apple Developer Program](register-apple-developer-program-organization.html) (for an App Store deployment).

</details>

<details>
<summary>
**Can I customize my 4D for iOS app?**
</summary>

4D for iOS generates a real Xcode project that you can [open and modify](open-xcode.html) according to your needs.

</details>




