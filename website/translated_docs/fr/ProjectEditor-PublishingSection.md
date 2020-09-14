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

L'activation du port HTTPS nécessite une installation certifiée pour fonctionner correctement. Vous pouvez créer des certificats d'essai avec 4D.

> **NOTE**
> 
> * Le simulateur fonctionne localement (127.0.0.1 ou localhost).
> * Si l’URL de production est défini, HTTP et HTTPS sont acceptés. Dans le cas contraire, c'est l'adresse IP qui est utilisée.
> * Si HTTP et HTTPS sont tous les deux activés, c'est HTTP qui est utilisé.


## Authentification

* **Utilisateur autorisé :** Cochez l'option **Connexion requise** pour afficher l'écran de connexion au démarrage de l'application.

* **Invité :** Laissez l'option **Connexion requise** décochée. pour qu'aucun écran de connexion ne s’affiche au démarrage de l'application.

## Méthode d’authentification

### Méthode base Sur authentification app mobile

* **Développement** : la méthode d’authentification vous permet d’utiliser l’application localement.
* **Déploiement** : vous devez créer/modifier la méthode base de données [*Sur authentification app mobile *](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) pour autoriser des e-mails ou des appareils spécifiques, y compris en mode invité.

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

Si vous souhaitez pouvoir valider manuellement la première connexion pour chaque session utilisateur, vous devez changer le statut par défaut "accepté" en "en attente" en ajoutant `$response.verify:=True` à la méthode base [*On Mobile App Authentication*](https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).


### Composant Mobile Session Management

Les sessions peuvent être gérées par le composant **MOBILE SESSION MANAGEMENT** :

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d/Mobile-Session-Management/releases/latest">Composant MOBILE SESSION MANAGEMENT</a>
</div>

* Téléchargez et dézippez le fichier zip
* Cliquez sur Générer puis sur le fichier Components et obtenez le fichier MOBILE SESSION MANAGEMENT.4dbase
* Créez un dossier **Composants** qui contiendra les données de l'application, au même emplacement que la base de données 4D.
* Placez le composant **MOBILE SESSION MANAGEMENT** dans le dossier **Composants** nouvellement créé.
* Redémarrez 4D.
* Cliquez sur le bouton Exécuter à partir de la barre d'outils
* Dans l’explorateur de méthodes 4D, sélectionnez la méthode **MOBILE SESSION MANAGEMENT** et cliquez sur le bouton **Execute**.
* La fenêtre d'applications apparaîtra et affichera toutes vos applications :

![Mobile App Session Management](assets/en/session-management/Mobile-App-Session-Management.png)

* Faites un clic droit sur la session pour afficher le fichier session dans le Finder ou bien supprimez-le.
* Vous pouvez modifier et définir le statut de la session pour chaque appareil : "accepted" ou "pending"

![Mobile App Session selection](assets/en/session-management/Mobile-App-Session-Management-selected.png)

* Le bouton **Push** met à jour la session dans la mémoire.
* Le bouton **Refresh** met à jour la liste de sessions.

## Aperçu sur l'appareil

### Ecran de paramètres

Un écran de paramètres est disponible dans la barre d’onglets. Vous pouvez également le trouver sous l’onglet "More" si nécessaire (à savoir, votre application contient plus de quatre tables).

Les paramètres vous permettent :

* Consultez votre URL distant ainsi que son statut
* de vous déconnecter (si vous étiez connecté en tant qu'utilisateur autorisé)

![Login & Settings screen](assets/en/project-editor/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


### Redéfinir l'url distant

Vous pouvez mettre à jour facilement votre URL distant à partir des Paramètres de l'iPhone :

* Accédez aux paramètres de votre iPhone
* Sélectionnez l'application pour laquelle vous souhaitez que l'URL distante soit mise à jour
* Activez l'option "Réinitialiser l'adresse du serveur"

![Redéfinir l'url distant](assets/en/project-editor/Reset-remote-url.png)

* Puis redémarrez votre application pour réinitialiser l'adresse du serveur
* Enfin, définissez la nouvelle URL distante

![Update remote url](assets/en/project-editor/Update-remote-url.png)