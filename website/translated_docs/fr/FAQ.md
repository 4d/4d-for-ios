---
id: faq
title: FAQ
---
## Conditions préalables

<details>
<summary>
    <strong>Ai-je besoin d’avoir des connaissances spécialisées pour utiliser 4D for iOS ?</strong>
</summary>

Avec 4D for iOS, vous pouvez facilement créer de nouveaux projets mobile directement depuis 4D, sans avoir besoin d’aucune connaissance préalable dans la création d’applications iOS natives !

L'éditeur de projet mobile a été conçu de façon à ce que 4D for iOS soit utilisé sans aucune connaissance spécifique en développement d’applications mobile.

</details>

<details>
<summary>
<strong>Y a-t-il des conditions préalables à l'utilisation de 4D for iOS ?</strong>
</summary>

## Tableau de comparaison de version

| Xcode | Swift | iOS      | 4D    |
| ----- | ----- | -------- | ----- |
| 10.0  | 4.2   | iOS 12   | 17 R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17 R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17 R2 |

Dans le cas où vous avez besoin d'une version antérieure d'Xcode, vous pouvez la télécharger ici : https://developer.apple.com/download/more/

=> Seuls les développeurs inscrits peuvent télécharger des versions antérieures via le site web Apple Developer.

Veuillez consulter [ici](prerequisites.html) la liste des conditions préalables.

</details>

<details>
<summary>
<strong>Puis-je utiliser Windows pour développer avec 4D for iOS ?</strong>
</summary>

Non. You must develop on macOS, as we need XCode to compile the final application and to run the Simulator.

</details>

## Licence

<details>
<summary>
<strong>Ai-je besoin d'un Serveur Web 4D pour exécuter 4D for iOS ?</strong>
</summary>

Non – 4D for iOS est inclus dans 4D Server v17 R2 et dans les versions plus récentes.

</details>

<details>
<summary>
<strong>Existe-t-il une licence de test ou d’évaluation ?</strong>
</summary>

Si vous avez déjà une licence 4D Developer Pro ou 4D Server de 4D v17 R2 ou de versions plus récentes, 4D for iOS y est inclus.

Si vous n’êtes pas un partenaire 4D ou si vous ne participez pas au programme de maintenance de 4D, vous devez attendre la sortie de 4D v18.

</details>

<details>
<summary>
<strong>Quelle licence 4D dois-je utiliser pour développer des applications avec 4D for iOS ?</strong>
</summary>

Pour développer des applications 4D for iOS, vous avez besoin d’une licence 4D Developer Pro v17 R2 (macOS).

</details>

<details>
<summary>
<strong>Quelle licence 4D dois-je utiliser pour déployer les applications créées avec 4D for iOS ?</strong>
</summary>

Vous aurez besoin d’une licence 4D Server (macOS ou Windows) v17 R2 ou d'une licence plus récente pour déployer des applications 4D for iOS.

Aucune autre licence n'est nécessaire. Vos applications 4D for iOS partageront les mêmes licences que celles de 4D Remote (client).

Les clients peuvent se connecter sur des PC Mac, Windows ou sur des mobiles iPhone, tant que l'ensemble des utilisateurs simultanés sont couverts par la licence 4D Server.

Veuillez noter que vous n’êtes pas autorisé à installer votre application mobile sur un nombre d'appareils supérieur à celui des licences distantes (clientes) de 4D Server.

</details>

<details>
<summary>
<strong>I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?</strong>
</summary>

You can use up to four mobile devices.

</details>

## MISC

<details>
<summary>
<strong>I have an application with a lot of data, can I embed all of it on my iOS device?</strong>
</summary>

4D for iOs allows you to embed a maximum of 10,000 records in your app.

For now, the best way to deal with large amounts of data is to create an intermediate table and filter the results you want to display.

Future versions of 4D for iOS will include a way to apply filters so only the required information is displays.

</details>

<details>
<summary>
<strong>Can I modify and update data from my iOS app?</strong>
</summary>

For now, 4D for iOS allows you to build read-only apps.

Future versions will allow you to add and modify your records right from your iOS app and synchronize your data with the server.

</details>

<details>
<summary>
<strong>Can I reload only the records that have been modified?</strong>
</summary>

When you reload data, all your data is downloaded to replace the existing data.

Incremental synchronization is planned for a future release.

</details>

<details>
<summary>
<strong>Where is my data actually stored?</strong>
</summary>

Your data is stored locally on your iOS device. This allows you to access your data in offline mode.

</details>

<details>
<summary>
<strong>Can I use related tables in 4D for iOS?</strong>
</summary>

We know that you use a lot related tables for your business applications and we're working on accessing related tables for a future 4D for iOS release.

</details>

<details>
<summary>
<strong>Can I use calculated fields in 4D for iOS?</strong>
</summary>

You can create pre-calculated fields in 4D and publish them from the [Structure section](structure.html) of the 4D for iOS project editor.

</details>

<details>
<summary>
<strong>Do I need to have images in my database?</strong>
</summary>

Images are not mandatory, but we highly recommend that you use images to offer the best user experience.

4D for iOS offers a variety of [list form](list-form-templates.html) and [detail form](detail-form-templates.html) templates. With or without images, with charts...

</details>

<details>
<summary>
<strong>Do I need to create an icon for my iOS app?</strong>
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General](general.html) section of the project editor.

</details>

<details>
<summary>
<strong>How can I test my app?</strong>
</summary>

4D for iOS allows you to test your apps in the [Simulator](simulator.html). To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>

<details>
<summary>
<strong>Do I need to create special iOS templates to build my apps on an iPhone or iPad?</strong>
</summary>

All of templates available in 4D for iOS are optimized for the iPhone. They also work well on iPads.

</details>

<details>
<summary>
     <strong>Do I need an Apple Developer Account?</strong>
</summary>

To test your app, you'll need to create at least a [free Apple Developer account](free-developer-account.html).

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (for an in-house deployment) or in the [Apple Developer Program](register-apple-developer-program-organization.html) (for an App Store deployment).

</details>

<details>
<summary>
<strong>Can I customize my 4D for iOS app?</strong>
</summary>

4D for iOS generates a real Xcode project that you can [open and modify](open-xcode.html) according to your needs.

</details>