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

Ative e defina seus portos HTTPS ou HTTP, se ainda não o tiver feito. You can do this by clicking on the **Edit** button.

A ativação de porto HTTPS requer que a instalação de certificado funcione corretamente. Pode criar certificados de teste com 4D.

> **NOTA **
> 
> * O simulador funciona localmente (127,0,0,1 ou localhost).
> * Se a URL de produção for definida, tanto HTTP quanto HTTPS são aceitas. Senão, o endereço IP é usado.
> * Se tanto HTTP quanto HTTPS forem ativadas, HTTP é usada.


## Autenticação

* **Authorized User:** Check the **Login required** option to display a login form when the app starts.

* **Guest:** Leave the **Login required** option unchecked. Não aparecerá nenhum formulário de início de sessão quando se iniciar a aplicação.

## Método de autenticação

### Método base On Mobile App Authentication

* **Development**: The authentication method allows you to use the app locally.
* **Deployment**: You must create/edit the [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method to authorize specific emails or devices, even in Guest mode.

A template is available to obtain all necessary information about the session, as well as user information (email address, app information, device, team ID, etc.)

You can customize this method according to your needs!

### Gestão da sessão

When a user opens the app for the first time, a session file is created and stored next to the current data file in the MobileApps folder.

The session files are organized and grouped by app folder. The Team ID and app bundle ID are concatenated to create the app folder names.

Here is an example of a 4D for iOS-generated session file:

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

If you want the ability to manually validate the first login for every user session, you must change the "accepted" default status to "pending" by adding `$response.verify:=True` to the [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method.


### Componente Mobile Session Management

Sessions can be managed by the **MOBILE SESSION MANAGEMENT**:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="../assets/en/session-management/MOBILE-SESSION-MANAGEMENT.zip">Componente MOBILE SESSION MANAGEMENT</a>
</div>

* Create a **Components** folder next to the 4D database with the app's data.
* Place the **MOBILE SESSION MANAGEMENT** component in the newly created **Components** folder.
* Reinicie 4D.
* In the 4D Methods Explorer, select the **MOBILE SESSION MANAGEMENT** method and click on the **Execute** button.
* A janela de aplicações aparecerá mostrando todas suas aplicações:

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Dê um clique direito em uma sessão para mostrar o arquivo sessão no Finder ou elimine-o.
* Pode mudar e definir o estado da sessão para cada dispositivo: aceito ou pendente

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* The **Push** button will update the session in memory.
* The **Refresh** button updates the session list.

## Como se vê em um dispositivo

A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (*i.e.*, your app has more than four tables).

Settings allows you to:

* Recarregar dados
* Definir seu servidor URL
* Fechar a sessão (se estiver conectado como usuário autorizado)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


