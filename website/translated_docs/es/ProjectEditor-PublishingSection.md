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

Active y defina sus puertos HTTPS y/o HTTP, si aún no lo ha hecho. You can do this by clicking on the **Edit** button.

La activación del puerto HTTPS requiere que la instalación del certificado funcione correctamente. Puede crear los certificados de prueba con 4D.

<div markdown="1" class = "tips">
**NOTA**

* El simulador funciona localmente (127.0.0.1 o localhost).
* Si se define la URL de producción, se aceptan HTTP y HTTPS. De lo contrario, se utiliza la dirección IP.
* Si tanto HTTP como HTTPS están activados, se utiliza HTTP.
</div>

## Autenticación

* **Authorized User:** Check the **Login required** option to display a login form when the app starts.

* **Guest:** Leave the **Login required** option unchecked. No aparecerá ningún formulario de inicio de sesión cuando se inicie la aplicación.

## Método de autenticación

### Método base On Mobile App Authentication

* **Development**: The authentication method allows you to use the app locally.
* **Deployment**: You must create/edit the [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method to authorize specific emails or devices, even in Guest mode.

Hay una plantilla disponible para obtener toda la información necesaria sobre la sesión, así como la información del usuario (dirección de correo electrónico, información de la aplicación, dispositivo, ID del equipo, etc.)

¡Puedes personalizar este método de acuerdo a sus necesidades!

### Gestión de la sesión

Cuando un usuario abre la aplicación por primera vez, se crea un archivo de sesión y se almacena junto al archivo de datos actual en la carpeta MobileApps.

Los archivos de sesión están organizados y agrupados por carpeta de aplicación. Los TeamID y Bundle ID de la aplicación se concatenan para crear los nombres de las carpetas de la aplicación.

Este es un ejemplo de un archivo de sesión generado para 4D for iOS:

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
* La ventana de aplicaciones aparecerá mostrando todas sus aplicaciones:

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Haga clic derecho en una sesión para mostrar el archivo sesión en el Finder o elimínelo.
* Puede cambiar y definir el estado de la sesión para cada dispositivo: aceptado o pendiente

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* The **Push** button will update the session in memory.
* The **Refresh** button updates the session list.

## Cómo se ve en un dispositivo

Una pantalla de configuración está disponible en la barra de pestañas. You can also find it from the More tab if necessary (*i.e.*, your app has more than four tables).

Los parámetros le permiten:

* Recargar datos
* Defini su URL de servidor
* Cerrar sesión (si está conectado como usuario autorizado)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


