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

*Note que exclusivamente para o método `open()`, esse é o comportamento padrão. Como resultado, se não especificar o valor booleano `dataSynchro` seu valor por padrão será `true`.*

```4d

$pushNotification:=MobileAppServer.$pushNotification:=MobileAppServer.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

Entretanto pode escolher não forçar uma sincronização de dados, para prevenir `dataSynchro`:

```4D 

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="Este é o título" 
$notification.body:="Este é o conteúdo desta notificação" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```
### Sincronização de dados com uma notificação simples

Também pode se pedir uma sincronização para uma notificação simples, sem abrir um registro específico. Por exemplo, algumas novas entradas foram adicionadas. Pode informar então a seu usuário e atualizar os dados sem manipulação do seu lado.

Aqui está um exemplo de código que pode usar com outros métodos, desde que preencha o objeto `userInfo` com o valor `dataSynchro`.

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="Este é o título" 
$notification.body:="Aqui está o conteúdo da notificação" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```
![Data synchronization animation](assets/en/push-notification/pushandSynchro.gif)

## Windows Configuration

Windows users need to download the [last CURL version](https://curl.se/download.html) to work on the variables of the environment of their machine. Ou podem inserir curl.exe na pasta Resources do banco de dados produção.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8 and 4DBASE/MobileApps/ID.BundleID/manifest.json files from your Design database to your production database.

## Que fazer agora?

O componente que maneja e facilita o processo também está disponível [aqui](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para que possa adaptar as notificações push a suas próprias necessidades. Pode usar e escolher quais os aspectos mais relevantes para sua aplicação. Todas as contribuições são bem vindas a este projeto, seja através de comentários, relatórios de erros ou ainda melhor: "pull requests".


