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

Activez et définissez vos ports HTTPS et/ou HTTP si ce n'est pas déjà fait. You can do this by clicking on the **Edit** button.

L'activation du port HTTPS nécessite une installation certifiée pour fonctionner correctement. Vous pouvez créer des certificats d'essai avec 4D.

<div markdown="1" class = "tips">
**NOTE**

* Le simulateur fonctionne localement (127.0.0.1 ou localhost).
* Si l’URL de production est défini, HTTP et HTTPS sont acceptés. Dans le cas contraire, c'est l'adresse IP qui est utilisée.
* Si HTTP et HTTPS sont tous les deux activés, c'est HTTP qui est utilisé.
</div>

## Authentification

* **Authorized User:** Check the **Login required** option to display a login form when the app starts.

* **Guest:** Leave the **Login required** option unchecked. pour qu'aucun écran de connexion ne s’affiche au démarrage de l'application.

## Méthode d’authentification

### Méthode base Sur authentification app mobile

* **Development**: The authentication method allows you to use the app locally.
* **Deployment**: You must create/edit the [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) database method to authorize specific emails or devices, even in Guest mode.

Un modèle permet d'obtenir toutes les informations nécessaires sur la session et les informations utilisateur (adresse e-mail, informations sur l'application, l'appareil, le team ID, etc.).

Vous pouvez personnaliser cette méthode selon vos besoins !

### Gestion de la session

Lorsqu'un utilisateur ouvre l'application pour la première fois, un fichier session est créé et stocké avec le fichier de données courant dans le dossier MobileApps.

Les fichiers de session sont organisés et groupés par dossier d'application. Les Team ID et Bundle ID de l'application sont concaténés pour créer des noms de dossiers d'application.

Voici un exemple de fichier de session généré par 4D for iOS :

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


### Composant Mobile Session Management

Sessions can be managed by the **MOBILE SESSION MANAGEMENT**:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="../assets/session-management/MOBILE-SESSION-MANAGEMENT.zip">Composant MOBILE SESSION MANAGEMENT</a>
</div>

* Create a **Components** folder next to the 4D database with the app's data.
* Place the **MOBILE SESSION MANAGEMENT** component in the newly created **Components** folder.
* Redémarrez 4D.
* In the 4D Methods Explorer, select the **MOBILE SESSION MANAGEMENT** method and click on the **Execute** button.
* La fenêtre d'applications apparaîtra et affichera toutes vos applications :

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Faites un clic droit sur la session pour afficher le fichier session dans le Finder ou bien supprimez-le.
* Vous pouvez modifier et définir le statut de la session pour chaque appareil : "accepted" ou "pending"

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* The **Push** button will update the session in memory.
* The **Refresh** button updates the session list.

## Aperçu sur l'appareil

Un écran de paramètres est disponible dans la barre d’onglets. You can also find it from the More tab if necessary (*i.e.*, your app has more than four tables).

Les paramètres vous permettent :

* de recharger des données
* de définir votre URL de serveur
* de vous déconnecter (si vous étiez connecté en tant qu'utilisateur autorisé)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


