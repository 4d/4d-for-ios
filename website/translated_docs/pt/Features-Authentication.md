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

But let's figure out how this works, using our special component!


# Using the component

## A component to deal with email authentication

A toolbox component has been developed to help you manage several processes: the 4D Mobile App Server Component.

Let's see how to use it!

## On Mobile App Authentification

Call the Mobile **App Email Checker** method in the **On Mobile App Authentification database** method with the information provided by the mobile application:

```4d
C_OBJECT($0)
C_OBJECT($1)
$0:= Mobile App Email Checker ($1)

```

## Mobile App Active Session

Call the **Activate sessions** method in the **On Web Connection** database method with the Session ID parameter retrieved from the URL:

```4d
C_TEXT($1)
Case of 
: (Mobile App Active Session($1).success)
    //add log if you want
End case 

```

Its as simple as that! You will find more information about this component in the [documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md), especially about resources you may use, like html templates and settings that you may want to define.


# Without the component

We will see here a basic example without using the component.

To do so, here is the code you can use:

## On Mobile App Authentication


```4d
C_OBJECT($0;$1;$response;$request;$email;$status)

  // parameters settings come from the mobile app
$request:=$1

  // Create an email with an activation URL
$mail:=New object
$mail.from:="myapplication@gmail.com"
$mail.to:=$request.email  // email entered by the user on their smartphone
$mail.subject:="Login confirmation"
$mail.htmlBody:="<a href=\"https://myserverapplication/activation/"+$request.session.id \
+"\">Click Here to confirm your email.</a>\"<br>"

  // Send mail
$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")
$transporter:=SMTP New transporter($smtp)
$status:=$transporter.send($mail)

  // Configure response for 4D for iOS
$response:=New object

  // Declare that the current session is being verified
$response.verify:=True

  // Check if the email was successsfully sent
If ($status.success)
      //create a share object to contain our sessions, accessible from all processes
    If (Storage.pendingSessions=Null)
        Use (Storage)
            Storage.pendingSessions:=New shared object
        End use 
    End if 

    Use (Storage.pendingSessions)
          //Add a session to our session lists
        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id
    End use 

    $response.success:=True
    $response.statusText:="Please check your mail box"
Else 
      // Display an error message on the smatphone
    $response.statusText:="The mail is not sent please try again later"
    $response.success:=False
End if 

$0:=$response

```

## On Web connection

This method will allow you activate the session after clicking on the link in the confirmation email.

```4d
C_TEXT($1;$2;$3;$4;$5;$6)

C_TEXT($token;$session)
C_OBJECT($sessionFile;$sessionObject)

If ($1="/activation/@")
    $token:=Substring($1;13)
End if 


  //get session from ID received from URL
If (Storage.pendingSessions#Null)
    $session:=Storage.pendingSessions[$token]
End if 

If ($session#"")
      //get session folder
    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)
    $sessionObject:=JSON Parse($sessionFile.getText())
      //update status value
    $sessionObject.status:="accepted"
    $sessionFile.setText(JSON Stringify($sessionObject))
    Use (Storage.pendingSessions)
          //delete pending session
        OB REMOVE(Storage.pendingSessions;$token)
    End use 

    /*
        The MOBILE APP REFRESH SESSIONS command checks all mobile
        application session files located in the MobileApps folder of the server, 
        and updates existing session contents in memory for any edited files.
    */

    MOBILE APP REFRESH SESSIONS

    WEB SEND TEXT("You are successfully authenticated")
Else 
    WEB SEND TEXT("Invalid session")
End if 
```

And that's it !

## Que fazer agora?

We've covered basic email validation in this tutorial. You should now be able to easily access your 4D for iOS app !
