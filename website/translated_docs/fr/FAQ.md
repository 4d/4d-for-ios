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
<strong>Are there any prerequisites for 4D for iOS?</strong>
</summary>

4D for iOS in v17 R2 is designed and certified for Xcode 9.4.1.

The next release (4D v17 R3) will be certified for Xcode 10/Swift 4.2 (requiring macOS 10.13.6 or 10.14)

In case you already upgraded to Xcode 10, you can download Xcode 9.4.1 here: https://developer.apple.com/download/more/

Only registered developers can download preview releases through the Apple Developer website.

See the prerequisites list [here](prerequisites.html).

</details>

<details>
<summary>
<strong>Can I use Windows to develop with 4D for iOS?</strong>
</summary>

No. You must develop on macOS, as we need XCode to compile the final application and to run the Simulator.

</details>

## Licence

<details>
<summary>
<strong>Ai-je besoin d'un Web Server 4D pour exécuter 4D for iOS ?</strong>
</summary>

Non – 4D for iOS est inclus dans 4D Server v17 R2 et dans les versions plus récentes.

</details>

<details>
<summary>
<strong>Existe-t-il une licence de test ou d’évaluation ?</strong>
</summary>

Si vous avez déjà une licence 4D Developer Pro ou 4D Server de 4D v17 R2 ou de versions plus récentes, 4D for iOS est inclus.

Si vous n’êtes pas un partenaire 4D ou si vous ne participez pas au programme 4D Maintenance, vous devez attendre la sortie de 4D v18.

</details>

<details>
<summary>
<strong>Quelle licence 4D dois-je utiliser avec 4D for iOS ?</strong>
</summary>

Vous avez besoin d’une licence 4D Developer Pro v17 R2 (macOS) pour développer des applications 4D for iOS.

</details>

<details>
<summary>
<strong>Quelle licence 4D dois-je utiliser pour déployer des applications créées avec 4D for iOS ?</strong>
</summary>

Vous avez besoin d’une licence 4D Server (macOS ou Windows) v17 R2 ou d'une licence plus récente pour déployer des applications 4D for iOS.

There's no additional license needed. Your 4D for iOS apps will share the same licenses as those for 4D Remote (client).

Clients can connect on Macs, Windows PCs, or iPhones, as long as the total amount of concurrent users are covered by the 4D Server license.

Please note that you're not allowed to install your mobile app on more devices than the total amount of the 4D Server's remote (client) licenses.

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

4D for iOS allows you to test your apps in the [Simulator](simulator.html) and/or right on your iOS [device](install-device.html) (iPhone and iPad).

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

To test your app on an iOS device, you'll need to create at least a [free Apple Developer account](free-developer-account.html).

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (for an in-house deployment) or in the [Apple Developer Program](register-apple-developer-program-organization.html) (for an App Store deployment).

</details>

<details>
<summary>
<strong>Can I customize my 4D for iOS app?</strong>
</summary>

4D for iOS generates a real Xcode project that you can [open and modify](open-xcode.html) according to your needs.

</details>