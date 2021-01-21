---
id: push-notification
title: Notificações Push
---

> **OBJETIVOS**
> 
> Integra as notificações push ao seus apps 4D for iOS

> **PRÉ-REQUISITOS**
> 
> O componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite enviar notificações push está integrado em 4D mono usuário e 4D server 18R4.

# O que é uma notificação push?

Em um telefone móvel, uma notificação Push é uma mensagem de alerta, recebido através de uma aplicação, que pode abrir, eliminar, autorizar ou bloquear. Pode ser muito útil por exemplo para notificar aos usuários da aplicação que há uma nova versão disponível.

Mas o que acontece com a arquitetura de implementação, para poder integrar essa funcionalidade em uma aplicação móvel? E qual é o processo de uma notificação push, desde a criação até a visualização no telefone do usuário?

# Arquitetura técnica

Esses são os elementos diferentes necessários para criar, enviar e receber uma notificação push móvel:

![Processo de notificações Push](assets/en/push-notification/4D-for-ios-push-notification.png)

# Pré-requisitos

Para enviar notificações push, é necessário um arquivo de autenticação AuthKey_XXXYYY.p8 da Apple.

* Primeiro vá para a página da conta de desenvolvedor Apple, inicie a sessão, e selecione  Certificates, IDs & Profiles.

* Então poderá gerar seus certificados push e baixá-los

* Finalmente ative a funcionalidade da notificação Push e integre seu certificado em seu projeto 4D for iOS desde a seção Publishing.

![Publishing section](assets/en/push-notification/push-notification-publishing-section.png)

Puede encontrar mais informação sobre este processo [aqui](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) na documentação de componente.

# Exemplo básico para gerenciar suas notificações push

Este é um exemplo para enviar uma notificação push a `test@4d.com`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

É simples assim!


## Que fazer agora?

O componente que maneja e facilita o processo também está disponível [aqui](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para que possa adaptar as notificações push a suas próprias necessidades. Pode usar e escolher quais os aspectos mais relevantes para sua aplicação. Todas as contribuições são bem vindas a este projeto, seja através de comentários, relatórios de erros ou ainda melhor: "pull requests".


