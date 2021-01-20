---
id: push-notification
title: Notificações Push
---

> **OBJETIVOS**
> 
> Integra as notificações push ao seus apps 4D for iOS

> **PRÉ-REQUISITOS**
> 
> O componente[4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server), que permite empurrar notificações (push), está integrado no 4D monousuário e no 4D Server.

## O que é uma notificação push?

Em um telefone móvel, uma notificação Push é uma mensagem de alerta, recebido através de uma aplicação, que pode abrir, eliminar, autorizar ou bloquear. Pode ser muito útil por exemplo para notificar aos usuários da aplicação que há uma nova versão disponível.

Mas o que acontece com a arquitetura de implementação, para poder integrar essa funcionalidade em uma aplicação móvel? E qual é o processo de uma notificação push, desde a criação até a visualização no telefone do usuário?

## Arquitetura técnica

Esses são os elementos diferentes necessários para criar, enviar e receber uma notificação push móvel:

![Processo de notificações Push](assets/en/push-notification/4D-for-ios-push-notification.png)

## Pré-requisitos

Para enviar notificações push, é necessário um arquivo de autenticação AuthKey_XXXYYY.p8 da Apple.

* Primeiro vá para a página da conta de desenvolvedor Apple, inicie a sessão, e selecione  Certificates, IDs & Profiles.

* Então poderá gerar seus certificados push e baixá-los

* Finalmente ative a funcionalidade da notificação Push e integre seu certificado em seu projeto 4D for iOS desde a seção Publishing.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Puede encontrar mais informação sobre este processo [aqui](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) na documentação de componente.

## Exemplo básico para gerenciar suas notificações push

Este é um exemplo para enviar uma notificação push a `test@4d.com`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

É simples assim!

## Empurrar notificações co sincronização de dados

Com uma notificação push, pode lançar uma sincronização para atualizar seus dados.

Por exemplo se sua aplicação tiver uma opção de acompanhamento de entrega, a informação de entrega será atualizada no banco de dados graças à notificação enviada ao cliente. Esta notificação, contendo uma petição para sincronizar os dados, vai permitir ao cliente modificar os dados no seu smartphone.

Para fazer isso no componente 4D Mobile App Server, precisa especificar se vai ou não forçar a sincronização de dados em suas notificações push/empurrar. Para isso, simplesmente forneça o valor booleano `dataSynchro` no objeto `userInfo`.

### Sincronização de dados com uma notificação e abertura de registro

Como padrão normal, uma notificação de abertura de registro automaticamente ativa a sincronização de dados.

Por exemplo, em um app Contact, se uma informação específica de contato (*ou seja.* um registro do contato, tal como endereço ou número de telefone) for modificado, o usuário recebe uma notificação que automaticamente abre o registro relevante e sincroniza os dados contidos no registro. Quando o usuário abrir a notificação, a informação de contato é totalmente atualizada.

Aqui um exemplo do comportamento normal,  uma petição `dataSynchro` com o método `open()`:

*Note that for `open()` method exclusively, this is the default behaviour. As a result, if you don't specify the `dataSynchro` boolean value, it is `true` by default.*

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

However, you can also choose not to force a data synchronization, by preventing `dataSynchro`:

```4D 

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```
### Data synchronization with a simple notification

You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part.

Here is a code example that you can also use with other methods, as long as you fill the `userInfo` object with `dataSynchro` value.

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```
![Data synchronization animation](assets/en/push-notification/pushandSynchro.gif)

## Que fazer agora?

O componente que maneja e facilita o processo também está disponível [aqui](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para que possa adaptar as notificações push a suas próprias necessidades. Pode usar e escolher quais os aspectos mais relevantes para sua aplicação. Todas as contribuições são bem vindas a este projeto, seja através de comentários, relatórios de erros ou ainda melhor: "pull requests".


