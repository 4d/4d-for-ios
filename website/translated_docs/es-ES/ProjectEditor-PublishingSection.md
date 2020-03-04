---
id: publishing
title: Publicación
---

Aquí es donde se define o crea su aplicación:

* Parámetros del servidor web
* Modo de autenticación 
* Método de autenticación

![Publishing section](assets/en/project-editor/Publishing-section-4D-for-iOS.png)

## Parámetros del servidor web

Active y defina sus puertos HTTPS y/o HTTP, si aún no lo ha hecho. Puede hacerlo haciendo clic en el botón **Editar**.

La activación del puerto HTTPS requiere que la instalación del certificado funcione correctamente. Puede crear los certificados de prueba con 4D.

:::tip NOTE * The Simulator works locally (127.0.0.1 or localhost). * If the production URL is defined, both HTTP and HTTPS are accepted. Otherwise, the IP address is used. * If both HTTP and HTTPS are activated, HTTP is used. :::

## Autenticación

* **Usuario autorizado:** Marque la opción **Se requiere iniciar sesión** para mostrar un formulario de inicio de sesión cuando se inicie la aplicación.

* **Invitado:** deje la opción **Se requiere iniciar sesión** sin marcar. No aparecerá ningún formulario de inicio de sesión cuando se inicie la aplicación.

## Método de autenticación

### Método base On Mobile App Authentication

* **Desarrollo**: el método de autenticación le permite utilizar la aplicación localmente. 
* **Despliegue**: debe crear/editar el método base de datos [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) para autorizar emails o dispositivos específicos, incluso en modo invitado.

A template is available to obtain all necessary information about the session, as well as user information (email address, app information, device, team ID, etc.)

You can customize this method according to your needs!

### Gestión de la sesión

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

If you want the ability to manually validate the first login for every user session, you must change the "accepted" default status to "pending" by adding ```$response.verify:=True``` to the [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method.

### Componente Mobile Session Management

Sessions can be managed by the **MOBILE SESSION MANAGEMENT**:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/session-management/MOBILE-SESSION-MANAGEMENT.zip">MOBILE SESSION MANAGEMENT component</a>

  </p>
</div>

* Cree una carpeta **Componentes** junto a la base de datos 4D con los datos de la aplicación. 
* Coloque el componente **MOBILE SESSION MANAGEMENT** en la carpeta **Componentes** recién creada.
* Reinicie 4D. 
* En el explorador de métodos 4D, seleccione el método **MOBILE SESSION MANAGEMENT** y haga clic en el botón **Ejecutar**. 
* La ventana de aplicaciones aparecerá mostrando todas sus aplicaciones: 

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Haga clic derecho en una sesión para mostrar el archivo sesión en el Finder o elimínelo.
* Puede cambiar y definir el estado de la sesión para cada dispositivo: aceptado o pendiente

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* El botón **Push** actualizará la sesión en la memoria.
* El botón **Refresh** actualiza la lista de sesiones. 

## Cómo se ve en un dispositivo

A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (*i.e.*, your app has more than four tables).

Settings allows you to:

* Recargar datos
* Defini su URL de servidor
* Cerrar sesión (si está conectado como usuario autorizado)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)