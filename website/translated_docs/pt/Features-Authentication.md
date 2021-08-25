---
id: autenticação
title: Autenticação com email
---

> **OBJETIVOS**
> 
> Integre a confirmação por correio eletrônico para autenticar aos usuários da aplicação móvel

> **PRÉ-REQUISITOS**
> 
> O componente  [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server) que permite a autenticação por correio está integrado em 4D mono usuário e 4D server 18R4.

Deixe que seus clientes e clientes se sintam cômodos iniciando sessão em sua aplicação utilizando a autenticação de correio eletrônico!

Oferece uma forma de verificar que um correio eletrônico provém realmente da pessoa que diz ser e permite bloquear emails fraudulentos ou perigosos.

Em resumo, o princípio é o seguinte:

### 1. Ativar o formulário de login

Integre um formulário de conexão (login) em sua aplicação, desde o editor de projeto na seção Publicação.

![Email authentication activation](assets/en/authentication/email-authentication-publishing-section.png)


### 2. Ingresse seu endereço de correio eletrônico

Um email é necessário quando a aplicação for lançada. Quando um usuário ingressar seu correio eletrônico e clicar no botão Iniciar sessão, é chamada On Mobile app Authentication e o estado da sessão do usuário deve ser atualizada a um estado "pendente". Depois, é enviado um correio eletrônico de validação ao usuário.

### 3. Revise seu correio

Quando o correio eletrônico de validação estiver disponível, o usuário só deve clicar no link de validação. Isso chamará ao método de banco de dados On Web Connection e atualizará o estado da sessão de usuário de "pendente" a "aceito".

### 4. Volta a sua aplicação

Quando a validação estiver pronta, o usuário pode voltar a abrir sua aplicação e clicar no botão Iniciar sessão. On Mobile App Authentication é chamado de novo, mas dessa vez o estado da sessão de usuário é  "aceito", e assim é concedido acesso.

Bem simples, não?

Então, para fazer com que o processo de validação seja mais fácil e seguro, 4D for iOS o maneja

![Autenticação](assets/en/authentication/4D-for-iOS-email-auth.png)

Mas vamos descobrir como isso funciona usando nosso componente especial!


# Utilização do componente

## Um componente para gerar a autenticação dos correios eletrônicos

Um componente de caixa de ferramentas foi desenvolvido para ajudar a gerenciar vários processos: o componente 4D Mobile App Server.

Vamos ver como usá-lo!

## On Mobile App Authentification

Chame ao método **App Email Checker** no método **On Mobile App Authentification database** com a informação proporcionada pelo dispositivo móvel:

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Chame ao método **Activate sessions** no método de banco de dados **On Web Connection** com o parâmetro ID da sessão extraída da URL:

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //adicione um histórico se quiser End case 

```

É simples assim! Encontrará mais informação sobre este componente na [documentação](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especialmente sobre os recursos que pode utilizar, como os modelos html e a configuração que quiser definir.


# Sem o componente

Vamos ver aqui um exemplo básico sem usar o componente.

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

  // Verificar se o email foi enviado exitosamente If ($status.success)
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
    $response.statusText:="Por favor verifique sua caixa de mensagens" Else 
      // Mostrar uma mensagem de erro no telefone inteligente
    $response.statusText:="O email não foi enviado, por favor tente mais tarde"
    $response.success:=False End if 

$0:=$response

```

## On Web connection

Este método lhe permitirá ativar a sessão depois de clicar no link do correio eletrônico de confirmação.

```4d
C_TEXT($1;$2;$3;$4;$5;$6) C_TEXT($token;$session)
C_OBJECT($sessionFile;$sessionObject) If ($1="/activation/@")
    $token:=Substring($1;13)
End if 


  //ler a sessão desde a ID recebida da URL If (Storage.pendingSessions#Null)
    $session:=Storage.pendingSessions[$token]
End if If ($session#"")
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

Cobrimos a validação básica de correio eletrônico neste tutorial. Ahora pode acessar facilmente a sua aplicação 4D for iOS!
