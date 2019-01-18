---
id: publishing
title: Publication
sidebar_label: Publication
---
C’est ici que votre application est définie et créée : * Paramètres du serveur Web * Mode d'authentification * Méthode d’authentification

![Publishing section](assets/project-editor/Publishing-section-4D-for-iOS.png)

## Paramètres du serveur Web<div class = "tips"> 

**NOTE**

* Le simulateur fonctionne localement (127.0.0.1 ou localhost).
* Si l’URL de production est défini, HTTP et HTTPS sont acceptés. Dans le cas contraire, c'est l'adresse IP qui est utilisée.
* Si HTTP et HTTPS sont tous les deux activés, c'est HTTP qui est utilisé.</div> 

* Activez et définissez vos ports HTTPS et/ou HTTP si ce n'est pas déjà fait. Pour ce faire, cliquez sur le bouton **Éditer**.

* L'activation du port HTTPS nécessite une installation certifiée pour fonctionner correctement. Vous pouvez créer des certificats d'essai avec 4D.

## Authentification

**Authorized User:** Check the **Requires an email to connect** option to display a login form when the app starts.

**Guest:** Leave the **Requires an email to connect** option unchecked. No login form will appear when the app starts.

## Authentication Method

### On Mobile App Authentication Database Method

* **Development**: The authentication method allows you to use the app locally. 
* **Deployment**: You must create/edit the *On Mobile App Authentication* database method to authorize specific emails or devices, even when in Guest mode.

A template is available which will: * Grant access (*i.e.*, email to specific domains) * Obtain all necessary information about the session, as well as user information (email address, app information, device, team ID, etc.)

You can customize this method according to your needs!

### Session Management

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

### Mobile Session Management Component

Sessions can be managed by the **MOBILE SESSION MANAGEMENT**:

<div style="text-align: center; margin-top: 20px">
  <p>
    

<a class="button"
href="../assets/session-management/MOBILE-SESSION-MANAGEMENT.zip">Composant de GESTION DE SESSION MOBILE</a>

  </p>
</div>

* Créer un dossier **Components**à côté de la base de données 4D avec les données de l’application. 
* Place the **MOBILE SESSION MANAGEMENT** component in the newly created **Components** folder.
* Restart 4D. 
* In the 4D Methods Explorer, select the **MOBILE SESSION MANAGEMENT** method and click on the **Execute** button. 
* The Apps window will appear displaying all of your apps: 

![Mobile App Session Management](assets/session-management/Mobile-App-Session-Management.png)

* Right click on a session to reveal the session file in the Finder or delete it.
* You can change and define the session status for each device: accepted or pending

![Mobile App Session selection](assets/session-management/Mobile-App-Session-Management-selected.png)

* The **Push** button will update the session in memory.
* The **Refresh** button updates the session list. 

## Aperçu sur l'appareil

Un écran de paramètres est disponible dans la barre d’onglets. Vous pouvez également le trouver sous l’onglet "More" si nécessaire (à savoir, votre application contient plus de quatre tables).

Les paramètres vous permettent de : * Recharger des données * Définir votre URL de serveur * Vous déconnecter (si vous êtes connecté en tant qu’utilisateur autorisé)

![Login & Settings screen](assets/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)