---
id: autenticação
title: Autenticação com email
---

> **OBJETIVOS**
> 
> Integre a confirmação por correio eletrônico para autenticar aos usuários da aplicação móvel


> **PRÉ-REQUISITOS**
> 
> The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) component that allows email authentication is integrated in 4D mono and 4D server v18 R4.


Ensure that your customers and clients feel comfortable logging into their apps with email authentication!

It provides a way to verify that an email comes from whom it claims to be from and will allow you to block harmful or fraudulent uses of email.

How it works:

### 1. Ativar o formulário de login

Integrate a login form into your app from the project editor, in the Publishing section.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Ingresse seu endereço de correio eletrônico

An email address is required when the app is launched. When a user enters their email and clicks on the **Login** button, the **On Mobile app Authentication** method is called and the user's session status is updated to a "pending" status. A validation email is then sent to the user's email address.

### 3. Revise seu correio

When the validation email is received, the user only needs to click on the validation link. This will call the **On Web Connection database** method and update the user's session status from "pending" to "accepted".

### 4. Volta a sua aplicação

Once validation is completed, the user can reopen their app and click on the **Login** button. The **On Mobile App Authentication** method is called again, but this time the user's session status is "accepted", so access is granted!

Simple, right?

To make the validation process simple and secure, 4D for iOS handles:

![Autenticação](assets/en/authentication/4D-for-iOS-email-auth.png)

But let's use our special component to see how this works!


# Utilização do componente

## Um componente para gerar a autenticação dos correios eletrônicos

Um componente de caixa de ferramentas foi desenvolvido para ajudar a gerenciar vários processos: o componente 4D Mobile App Server.

Vamos ver como usá-lo!

## On Mobile App Authentification

Call the **Mobile App Email Checker** method in the **On Mobile App Authentification** database method with the information provided by the mobile application:

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Call the **Activate sessions** method in the **On Web Connection** database method with the **Session ID** parameter retrieved from the URL:

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //adicione um histórico se quiser
End case 

```

É simples assim! You will find more in-depth information about this component in the [component documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially for resources you may use, like HTML templates and settings that you may want to define.


# Sem o componente

Let's take a look at a basic example without using the component.

Para fazer isso, aqui está o código que pode usar:

## On Mobile App Authentication


```4d
C_OBJECT($0;$1;$response;$request;$email;$status)

  // as propriedades dos parâmetros provém da aplicação móvel
$request:=$1

  // Criar um email com uma URL de ativação
$mail:=New object
$mail.from:="myapplication@gmail.com"
$mail.to:=$request.email  // email introduzido pelo usuário em seu telefone inteligente
$mail.subject:="Login confirmation"
$mail.htmlBody:="<a href=\"https://myserverapplication/activation/"+$request.session.id \
+"\">Clique aqui para confirmar seu email.</a>\"<br>"

  // Enviar correio
$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")
$transporter:=SMTP New transporter($smtp)
$status:=$transporter.send($mail)

  // Configurar resposta para 4D for iOS
$response:=New object

  // Declarar que a sessão atual está sendo verificada
$response.verify:=True

  // Verificar se o email foi enviado exitosamente
If ($status.success)
      //criar um objeto compartido para nossas sessões, acessível desde todos os processos
    If (Storage.pendingSessions=Null)
        Use (Storage)
            Storage.pendingSessions:=New shared object
        End use 
    End if 

    Use (Storage.pendingSessions)
          //Adicionar uma sessão a nossa lista de sessões
        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id
    End use 

    $response.success:=True
    $response.statusText:="Por favor verifique sua caixa de mensagens"
Else 
      // Mostrar uma mensagem de erro no telefone inteligente
    $response.statusText:="O email não foi enviado, por favor tente mais tarde"
    $response.success:=False
End if 

$0:=$response

```

## On Web connection

Este método lhe permitirá ativar a sessão depois de clicar no link do correio eletrônico de confirmação.

```4d
C_TEXT($1;$2;$3;$4;$5;$6)

C_TEXT($token;$session)
C_OBJECT($sessionFile;$sessionObject)

If ($1="/activation/@")
    $token:=Substring($1;13)
End if 


  //ler a sessão desde a ID recebida da URL
If (Storage.pendingSessions#Null)
    $session:=Storage.pendingSessions[$token]
End if 

If ($session#"")
      //obter pasta de sessão
    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)
    $sessionObject:=JSON Parse($sessionFile.getText())
      //atualizar valor de estado
    $sessionObject.status:="accepted"
    $sessionFile.setText(JSON Stringify($sessionObject))
    Use (Storage.pendingSessions)
          //eliminar sessão pendente
        OB REMOVE(Storage.pendingSessions;$token)
    End use 

    /*
        O comando MOBILE APP REFRESH SESSIONS verifica todos os
         arquivos de sessão da aplicação localizadoas na pasta MobileApps do servidor,
         e atualiza o conteúdo da sessão existente na memória para qualquer arquivo editado.
    */

    MOBILE APP REFRESH SESSIONS

    WEB SEND TEXT("You are successfully authenticated")
Else 
    WEB SEND TEXT("Invalid session")
End if 
```

E é isso!

## Que fazer agora?

Cobrimos a validação básica de correio eletrônico neste tutorial. You should now be able to easily access your 4D for iOS app!
