---
id: publishing
title: Publication
---

C’est ici que vous pourrez définir ou créer votre application :

* Paramètres du serveur Web
* Mode d’authentification 
* Méthode d’authentification

![Publishing section](assets/fr/project-editor/Publishing-section-4D-for-iOS.png)

## Paramètres du serveur Web

Activez et définissez vos ports HTTPS et/ou HTTP si ce n'est pas déjà fait. Pour ce faire, cliquez sur le bouton **Éditer**.

L'activation du port HTTPS nécessite une installation certifiée pour fonctionner correctement. Vous pouvez créer des certificats d'essai avec 4D.<div class = "tips"> 

**NOTE**

* The Simulator works locally (127.0.0.1 or localhost).
* If the production URL is defined, both HTTP and HTTPS are accepted. Otherwise, the IP address is used.
* If both HTTP and HTTPS are activated, HTTP is used.</div> 

## Authentification

* **Utilisateur autorisé :** Cochez l'option **Connexion requise** pour afficher l'écran de connexion au démarrage de l'application.

* **Invité :** Laissez l'option **Connexion requise** décochée pour qu'aucun écran de connexion ne s’affiche au démarrage de l'application.

## Méthode d’authentification

### Méthode base Sur authentification app mobile

* **Développement** : la méthode d’authentification vous permet d’utiliser l’application localement. 
* **Déploiement** : vous devez créer/modifier la méthode base de données [*Sur authentification app mobile *](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) pour autoriser des e-mails ou des appareils spécifiques, y compris en mode invité.

A template is available to obtain all necessary information about the session, as well as user information (email address, app information, device, team ID, etc.)

You can customize this method according to your needs!

### Gestion de la session

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

### Composant Mobile Session Management

Sessions can be managed by the **MOBILE SESSION MANAGEMENT**:

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button"
href="../assets/en/session-management/MOBILE-SESSION-MANAGEMENT.zip">MOBILE SESSION MANAGEMENT component</a>

  </p>
</div>

* Créez un dossier **Composants** contenant les données de l’application au même emplacement que la base de données 4D. 
* Placez le composant **MOBILE SESSION MANAGEMENT** dans le dossier **Composants** nouvellement créé.
* Redémarrez 4D. 
* Dans l’explorateur de méthodes 4D, sélectionnez la méthode **MOBILE SESSION MANAGEMENT** et cliquez sur le bouton **Execute**. 
* La fenêtre d'applications apparaîtra et affichera toutes vos applications : 

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Faites un clic droit sur la session pour afficher le fichier session dans le Finder ou bien supprimez-le.
* Vous pouvez modifier et définir le statut de la session pour chaque appareil : "accepted" ou "pending"

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* Le bouton **Push** met à jour la session dans la mémoire.
* Le bouton **Refresh** met à jour la liste de sessions. 

## Aperçu sur l'appareil

A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (*i.e.*, your app has more than four tables).

Settings allows you to:

* de recharger des données
* de définir votre URL de serveur
* de vous déconnecter (si vous étiez connecté en tant qu'utilisateur autorisé)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)