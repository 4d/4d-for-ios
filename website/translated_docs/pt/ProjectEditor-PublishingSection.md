---
id: publishing
title: Publicação
---

Aqui é onde se define ou cria sua aplicação:

* Parâmetros de servidor Web
* Modo de autenticação
* Método de autenticação

![Publishing section](assets/en/project-editor/Publishing-section-4D-for-iOS.png)

## Parâmetros de servidor Web

If you haven't done it yet, activate and define your HTTPS and/or HTTP ports by clicking on the **Edit** button.

Activating the HTTPS port requires a certificate installation to work properly. Note that you can create test certificates with 4D.

> **NOTA **
> 
> * O simulador funciona localmente (127,0,0,1 ou localhost).
> * Se a URL de produção for definida, tanto HTTP quanto HTTPS são aceitas. Senão, o endereço IP é usado.
> * Se tanto HTTP quanto HTTPS forem ativadas, HTTP é usada.


## Autenticação

* **Usuário autorizado:** Marque a opção **Se exige iniciar sessão** para mostrar um formulário de início de sessão quando se inicie a aplicação.

* **Invitado:** deixe a opção **Se exige iniciar sessão** sem marcar. Não aparecerá nenhum formulário de início de sessão quando se iniciar a aplicação.

## Método de autenticação

### Método base On Mobile App Authentication

* **Desenvolvimento**: O método de autenticação lhe permite utilizar la aplicação localmente.
* **Lançamento**: Deve criar/editar o método de banco de dados [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) para autorizar emails ou aparelhos, mesmo se em modo Guest.

Um modelo está disponível para obter todas as informações necessárias sobre a sessão, assim como a informação de usuário (endereço de email, informação de app, aparelho, ID de time, etc)

Pode personalizar esse método de acordo com suas necessidades!

### Gestão da sessão

Quando um usuário abrir o app pela primeira vez, um arquivo de sessão é criado e armazenado do lado do arquivo de dados atual na pasta MobileApps.

Os arquivos de sessão são organizados e agrupados pela pasta app O ID de time e ID bundle do app são concatenadas para criar os nomes de pasta do app

Aqui está um exemplo de um arquivo de sessão gerado para 4D for iOS

```json
{
"application":{
  "id":"com.contactApp.Contact",
  "name":"Contact",
  "version":"1.0.0"
},
"team":{
  "id":"UTT7VDX8W5"
},
"language":{
  "id":"en_US",
  "code":"en",
  "region":"US"
},
"email":"",
"device":{
  "description":"iPhone X",
  "version":"11.3",
  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",
  "simulator":true
},
"send":"link",
"session":{
  "id":"7023d9205074199d1c16fc00d24354e778137675",
  "ip":"::ffff:192.168.5.4"
},
"status":"accepted",
"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"
}

```

If you want to manually validate the first login for every user session, you need to change the "accepted" default status to "pending", by adding `$response.verify:=True` to the [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method.


### Componente Mobile Session Management

Sessões podem ser gerenciadas com **MOBILE SESSION MANAGEMENT**:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d/Mobile-Session-Management/releases/latest">Componente MOBILE SESSION MANAGEMENT</a>
</div>

* Descarregue e descomprima o arquivo zip
* Vá para o arquivo Gerar/Componentes e obtenha o arquivo MOBILE SESSION MANAGEMENT.4dbase
* Crie uma pasta **Componentes** junto ao banco de dados 4D com os dados da aplicação.
* Coloque o componente **MOBILE SESSION MANAGEMENT** na pasta **Componentes** recém criada.
* Reinicie 4D.
* Clique no botão Executar da barra de ferramentas
* No explorador de métodos 4D, selecione o método **MOBILE SESSION MANAGEMENT** e clique no botão **Executar**.
* The Apps window will appear, displaying all your apps:

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Right click on a session to reveal the session file in the Finder or to delete it.
* Pode mudar e definir o estado da sessão para cada dispositivo: aceito ou pendente

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* O botão **Push** atualizará a sessão na memória.
* O botão **Refresh** atualiza a lista de sessões.

## Como se vê em um dispositivo

### Tela de parâmetros

Uma tela Settings está disponível na barra de abas. You can also find it from the "More" tab, if necessary (*i.e.*, your app has more than four tables).

Settings permite:

* Consult your remote URL and its state
* Fechar a sessão (se estiver conectado como usuário autorizado)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


### Reset remote URL

You can easily update your remote URL from the iPhone Settings:

* Abra as Configurações do iPhone
* Select the app's remote URL to be updated
* Ative a opção "Reset server adress"

![Resetar a URL remota](assets/en/project-editor/Reset-remote-url.png)

* Then, restart your app to reset the server address
* And finally, define the new remote URL

![Update remote url](assets/en/project-editor/Update-remote-url.png)
