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

> **NOTA**
> 
> * El simulador funciona localmente (127.0.0.1 o localhost).
> * Si se define la URL de producción, se aceptan HTTP y HTTPS. De lo contrario, se utiliza la dirección IP.
> * Si tanto HTTP como HTTPS están activados, se utiliza HTTP.


## Autenticación

* **Usuario autorizado:** Marque la opción **Se requiere iniciar sesión** para mostrar un formulario de inicio de sesión cuando se inicie la aplicación.

* **Invitado:** deje la opción **Se requiere iniciar sesión** sin marcar. No aparecerá ningún formulario de inicio de sesión cuando se inicie la aplicación.

## Método de autenticación

### Método base On Mobile App Authentication

* **Desarrollo**: el método de autenticación le permite utilizar la aplicación localmente.
* **Despliegue**: debe crear/editar el método base de datos [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) para autorizar emails o dispositivos específicos, incluso en modo invitado.

Hay una plantilla disponible para obtener toda la información necesaria sobre la sesión, así como la información del usuario (dirección de correo electrónico, información de la aplicación, dispositivo, ID del equipo, etc.)

¡Puedes personalizar este método de acuerdo a sus necesidades!

### Gestión de la sesión

Cuando un usuario abre la aplicación por primera vez, se crea un archivo de sesión y se almacena junto al archivo de datos actual en la carpeta MobileApps.

Los archivos de sesión están organizados y agrupados por carpeta de aplicación. Los TeamID y Bundle ID de la aplicación se concatenan para crear los nombres de las carpetas de la aplicación.

Este es un ejemplo de un archivo de sesión generado para 4D for iOS:

```json
{
"application":{
  "id":"com.contactApp.{
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

Si desea la posibilidad de validar manualmente el primer inicio de sesión para cada sesión usuario, debe cambiar el estado por defecto "aceptado" a "pendiente" añadiendo `$response.verify:=True` al método base [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).


### Componente Mobile Session Management

Las sesiones pueden ser gestionadas por el componente **MOBILE SESSION MANAGEMENT**:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d/Mobile-Session-Management/releases/latest">Componente MOBILE SESSION MANAGEMENT</a>
</div>

* Descargue y descomprima el archivo zip
* Vaya al archivo Generar / Componentes y obtenga el archivo MOBILE SESSION MANAGEMENT.4dbase
* Cree una carpeta **Componentes** junto a la base de datos 4D, que contendrá los datos de la aplicación.
* Coloque el componente **MOBILE SESSION MANAGEMENT** en la carpeta **Componentes** recién creada.
* Reinicie 4D.
* Haga clic en el botón Ejecutar de la barra de herramientas
* En el explorador de métodos 4D, seleccione el método **MOBILE SESSION MANAGEMENT** y haga clic en el botón **Ejecutar**.
* La ventana de aplicaciones aparecerá mostrando todas sus aplicaciones:

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Haga clic derecho en una sesión para mostrar el archivo sesión en el Finder o elimínelo.
* Puede cambiar y definir el estado de la sesión para cada dispositivo: aceptado o pendiente

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* El botón **Push** actualizará la sesión en la memoria.
* El botón **Refresh** actualiza la lista de sesiones.

## Cómo se ve en un dispositivo

### Pantalla de configuración

Una pantalla de configuración está disponible en la barra de pestañas. También puede encontrarlo en la pestaña "More" si es necesario (*es decir*, su aplicación tiene más de cuatro tablas).

Los parámetros le permiten:

* Consulte su URL remota y su estado
* Cerrar sesión (si está conectado como usuario autorizado)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


### Redefinir la URL remota

Puede actualizar fácilmente su url remota desde la configuración del iPhone:

* Abra la configuración de su iPhone
* Seleccione la aplicación para la cual desea que se actualice la URL remota
* Active la opción "Reinicializar la dirección del servidor"

![Redefinir la URL remota](assets/en/project-editor/Reset-remote-url.png)

* Luego reinicie su aplicación para restablecer la dirección del servidor
* Y finalmente defina la nueva URL remota

![Actualizar la URL remota](assets/en/project-editor/Update-remote-url.png)