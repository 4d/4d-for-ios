---
id: deep-linking
title: Deep Linking
---

> **OBJETIVOS**
> 
> Compartilhar o conteúdo da aplicação iOS utilizando Deep Linking.

> **PRÉ-REQUISITOS**
> 
> An Apple Developer account.

4D v18 R5 includes a new feature! You're now able to share a content that you're currently viewing with all your collegues. But how does it work?

![Animação Deep Link](assets/en/deeplinking/4d-for-ios-deeplinking.gif)

Há duas maneiras de implementar "deep linking" em IOS: **"URL scheme"** e **"Universal Links"**. While URL schemes are a well-known method for deep linking, Universal links are the new means for Apple to easily connect your webpage and your app under the same link.

Here's a comparision between the two options available in the project editor:

## URL Scheme

| PROS                                | CONS                                    |
| ----------------------------------- | --------------------------------------- |
| Fácil de implementar                | Sempre requer permissão                 |
| Não precisa de um backend adicional | Doesn't work if the app isn't installed |
|                                     | Doesn't work under Android              |

## Universal links

| PROS                                    | CONS                                     |
| --------------------------------------- | ---------------------------------------- |
| Não requer permissão                    | Se necessita um backend estático com SSL |
| Não abre o navegador                    | Mais complexo de implementar             |
| Compatível com Android                  |                                          |
| Fallback URL if the app isn't installed |                                          |

# URL ESQUEMA PERSONALIZADO

## UMA ABORDAGEM VELHA MAIS EFICIENTE

No nível mais simples, os esquemas de URL permitem aos usuários abrir uma aplicação desde outras aplicações.

But the true power of URL schemes is in the ability to perform specific actions when opening your app.

## ESQUEMA DE URL PERSONALIZADO NO EDITOR DO PROJETO

É muito simples incluir um esquema URL a sua aplicação 4D for iOS:

1. Selecione  a ação predefinida **Share** da seção **Action** e selecione o alcance:
    *   entidade - para compartilhar o conteúdo de um formulário detalhado
    *   tabela - para compartilhar um formulário lista
2. Active a propriedade **Deep Linking** na seção **Publishing** do editor de projetos.
3. A informação do esquema URL é preenchido automaticamente com o nome da aplicação definida previamente na seção **General**. Entretanto, ainda pode ser editado:

![Editor de projeto deep linking](assets/en/deeplinking/deep-linking-project-editor-publishing-section.png)

4. Preencha seu método **On Mobile App Action**
5. Criação da aplicação
6. E isso é tudo!

You're now able to share the content that you're currently viewing (whether it's a list or detail form) with everyone else!

Aqui um exemplo do método **On Mobile App Action**:

```4d

var $1 : Object  // Informação subministrada pela aplicação móvel
var $0 : Object  // Informação devolvida à aplicação móvel

var $action : Object
$action:=MobileAppServer.Action.new($1)

Case of 

    : ($1.action="shareContact")

        $0:=$action.shareContext()

    Else 

        $0:=New object("success"; False;"statusText"; "Enviar ação desconhecida ao servidor")

End case 

```

## UTILIZANDO ESQUEMAS DE URL EM SEU APP 4D FOR iOS

1. Click on the **Action** button to display all your currently available actions
2. Selecione a ação **Share** que foi previamente definida no editor de projetos
3. A new view appears, allowing you to share content
4. Selecione o método de intercâmbio que quiser utilizar
5. Envie!

# UNIVERSAL LINKS

## UM ENFOQUE MAIS MODERNO

Os Universal links oferecem vários benefícios chave que não estão disponíveis com os esquemas de URL personalizados. More specifically, universal links are:

* **Unique**: Diferente de schemes personalizados de  URL , links universais não podem ser reclamadas por outros apps porque usam links padrão  HTTP ou HTTPS para seu website.

* **Secure**: quando os usuários instalam sua aplicação, iOS verifica que seu site web permita que sua aplicação abra URLs em seu nome. Only you can create and upload the file granting this permission to your web server, to make sure the association of your website with your app is secure.

* **Flexible**: os links universais funcionam mesmo quando sua aplicação não estiver instalada. Neste caso, ao pressionar um link a seu site web se abre o conteúdo em Safari.

* **Simple**: uma única URL funciona tanto para seu site web quanto para sua aplicação.

* **Private**: Other apps can communicate with your app with no need to know if your app is installed.

## UNIVERSAL LINKS NO EDITOR DE PROJETOS

Para incluir os links universais em sua aplicação, o processo é bastante similar ao processo dos esquemas URL:

1. Selecione  a ação predefinida **Share** da seção **Action** e selecione o alcance:
    *   entidad - para compartilhar um conteúdo de um formulário detalhado
    *   tabela - para compartilhar um formulário lista
2. Ativar a funcionalidade **Deep Linking** na seção **Publishing** no editor de projetos
3. Introduza a URL de seu site web no campo **Universal links**
4. Preencha seu método **On Mobile App Action**
5. Criação da aplicação
6. Ativar os links universais do método **On Web Connection**.

Here's an example of the **On Web Connection** method:

```4d

Var $1; $2; $3; $4; $5; $6 : Text
Var $handler : Object

$handler:=MobileAppServer.WebHandler.new()
Case of
    : ($handler.handle($1; $2; $3; $4; $5; $6))
        // Gerenciado pelo código móvel por padrão
    Else
        // Seu código web
End case

```


# NOTIFICAÇÃO PUSH

One of the great things about Deep Linking is that it is completely compatible with [push notifications](push-notification.html). Isso significa que pode enviar links Deep a seus usuários e levá-los diretamente à página correta.

As you can see, this feature opens a large range of possibilities to use 4D for iOS with minimal effort.

Deep linking is an essential feature in today’s apps, especially since users consume content faster and faster. Esta funcionalidade leva diretamente ao lugar desejado. So we would strongly recommend you to use it in your 4D for iOS apps.

A documentação está [aqui](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/18R4/Documentation/Classes/PushNotification.md) para ajudar a gerenciar suas notificações push e  Deep linking.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/manifest.json file from your Design database to your production database.  




