---
id: deep-linking
title: Deep Linking
---

> **OBJETIVOS**
> 
> Compartilhar o conteúdo da aplicação iOS utilizando Deep Linking.

4D v18 R5 inclui uma nova e importante funcionalidade! Agora é possível compartilhar o conteúdo que está vendo com todos os seus colegas. Como isso funciona?

Aqui há uma ilustração que resume o "deep linking":

![Deep linking animation](assets/en/deeplinking/4d-for-ios-deeplinking.gif)

Há duas maneiras de implementar "deep linking" em IOS: **"URL scheme"** e **"Universal Links"**. Os "URL schemes" são um método bem conhecido de "deep linking"  e os "Universal links" são o novo método que Apple implementou para conectar facilmente sua página web e sua aplicação sob o mesmo link.

Aqui há uma comparação entre as duas opções que estão disponíveis no editor de projeto:

## URL Scheme

| PROS                                | CONS                                              |
| ----------------------------------- | ------------------------------------------------- |
| Fácil de implementar                | Sempre requer permissão                           |
| Não precisa de um backend adicional | Não funciona se a aplicação não estiver instalada |
|                                     | Não funciona em Android                           |

## Universal links

| PROS                                                 | CONS                                     |
| ---------------------------------------------------- | ---------------------------------------- |
| Não requer permissão                                 | Se necessita um backend estático com SSL |
| Não abre o navegador                                 | Mais complexo de implementar             |
| Compatível com Android                               |                                          |
| URL de fallback se a aplicação não estiver instalada |                                          |

# URL ESQUEMA PERSONALIZADO

## UMA ABORDAGEM VELHA MAIS EFICIENTE

No nível mais simples, os esquemas de URL permitem aos usuários abrir uma aplicação desde outras aplicações.

Mas o verdadeiro poder dos esquemas URL está na capacidade de realizar ações específicas a medida que se abre a aplicação.

## ESQUEMA DE URL PERSONALIZADO NO EDITOR DO PROJETO

É muito simples incluir um esquema URL a sua aplicação 4D for iOS:

1. Selecione  a ação predefinida **Share** da seção **Action** e selecione o alcance:
    *   entidade - para compartilhar o conteúdo de um formulário detalhado
    *   tabela - para compartilhar um formulário lista
2. Active a propriedade **Deep Linking** na seção **Publishing** do editor de projetos.
3. A informação do esquema URL é preenchido automaticamente com o nome da aplicação definida previamente na seção **General**. Entretanto, ainda pode ser editado:

![Deep linking Project editor](assets/en/deeplinking/deep-linking-project-editor-publishing-section.png)

4. Preencha seu método **On Mobile App Action**
5. Criação da aplicação
6. E é só isso!

Agora já pode compartilhar o conteúdo que estiver vendo. Com todos os seus colegas! (seja um formulário lista ou detalhado)

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

1. Clique no botão **Action** para mostrar todas as suas ações disponíveis atualmente
2. Selecione a ação **Share** que foi previamente definida no editor de projetos
3. Aparece uma nova vista que lhe permite começar a compartilhar o conteúdo
4. Selecione o método de intercâmbio que quiser utilizar
5. Envie!

# UNIVERSAL LINKS

## UM ENFOQUE MAIS MODERNO

Os Universal links oferecem vários benefícios chave que não estão disponíveis com os esquemas de URL personalizados. Específicamente, os links universais são:

* **Unique**: Diferente de schemes personalizados de  URL , links universais não podem ser reclamadas por outros apps porque usam links padrão  HTTP ou HTTPS para seu website.

* **Secure**: When users install your app, iOS verifies that your website allows your app to open URLs on its behalf. Only you can create and upload the file granting this permission to your web server, so the association of your website with your app is secure.

* **Flexible**: Universal links work even when your app is not installed. In this case, tapping a link to your website opens the content in Safari.

* **Simple**: A single URL works for both your website and your app.

* **Private**: Other apps can communicate with your app without needing to know if your app is installed.

## UNIVERSAL LINKS IN THE PROJECT EDITOR

To include Universal links into your app, the process is quite similiar to the URL Schemes process:

1. Selecione  a ação predefinida **Share** da seção **Action** e selecione o alcance:
    *   entity - to share a content from a detail form
    *   tabela - para compartilhar um formulário lista
2. Activate the **Deep Linking** feature in the **Publishing** section in the project editor
3. Enter your website URL in the **Universal links** field
4. Preencha seu método **On Mobile App Action**
5. Criação da aplicação
6. Trigger universal inks from the the **On Web Connection** method.

Here's an example of the **On Web Connection** method :

```4d

Var $1; $2; $3; $4; $5; $6 : Text
Var $handler : Object

$handler:=MobileAppServer.WebHandler.new()
Case of
    : ($handler.handle($1; $2; $3; $4; $5; $6))
        // Managed by default mobile code
    Else
        // Your web code
End case

```


# PUSH NOTIFICATION

A great thing about Deep Linking is that it is completely compatible with [push notifications](push-notification.html). This means that you can send Deep links to your users and lead them directly to the right page.

As you can see, this feature open a large range of possibilities for using 4D for iOS with minimal effort.

Deep linking is a crucial feature in today’s apps, especially as users consume content faster and faster. This feature brings them directly to the desired location. So I strongly recommend that you use it in your 4D for iOS apps.

The documentation is [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/18R4/Documentation/Classes/PushNotification.md) to help you manage your push notifications and Deep linking.




