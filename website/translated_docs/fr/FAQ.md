---
id: faq
title: FAQ
---

## Conditions préalables

<details>
<summary>
    **Do I need specific expertise to use 4D for iOS?**
</summary>

Avec 4D for iOS, vous pouvez facilement créer de nouveaux projets mobiles directement depuis 4D, sans qu'une connaissance préalable dans la création d’applications iOS natives soit nécessaire !

L'éditeur de projet mobile a été conçu de façon à ce que 4D for iOS soit utilisé sans aucune connaissance spécifique en développement d’applications mobiles.

</details>

<details>
<summary>
**Are there any prerequisites for 4D for iOS?**
</summary>

### Tableau de comparaison de version

| Xcode  | Swift | iOS      | 4D   | macOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11.4   | 5.2   | OS 13.4  | 18.2 | 10.15.2 |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | iOS 13.3 | 18R2 | 10.14.4 |
| 11.2   | 5.1   | iOS 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

Si vous souhaitez une version antérieure de Xcode, vous pouvez la télécharger ici : https://developer.apple.com/download/more/

=> Only registered developers can download preview releases through the Apple Developer website.

Veuillez consulter [ici](prerequisites.html) la liste des conditions préalables.

</details>


<details>
<summary>
**Can I use Windows to develop with 4D for iOS?**
</summary>

Non. Vous devez développer sur macOS, puisque la compilation de l’application finale et l'exécution du simulateur se font à l'aide de Xcode.

</details>


## Licence

<details>
<summary>
**Do I need a 4D Web Server to run 4D for iOS?**
</summary>

Non – 4D for iOS est inclus dans 4D Server v17 R2 et dans les versions plus récentes.

</details>



<details>
<summary>
**Is there a test or evaluation license available?**
</summary>

Si vous avez déjà une licence 4D Developer Pro ou 4D Server de 4D v17 R2 ou de versions plus récentes, 4D for iOS y est inclus.

Si vous n’êtes pas un partenaire 4D ou si vous ne participez pas au programme de maintenance de 4D, vous devez attendre la sortie de 4D v18.

</details>


<details>
<summary>
**What 4D license do I need to develop with 4D for iOS?**
</summary>

Pour développer des applications 4D for iOS, vous avez besoin d’une licence 4D Developer Pro v17 R2 (macOS) ou une version plus récente.

</details>


<details>
<summary>
**What 4D license do I need to deploy apps created with 4D for iOS?**
</summary>

Pour déployer des applications 4D for iOS, vous aurez besoin d’une licence 4D Server (macOS ou Windows) v17 R2 ou d'une licence plus récente.

Aucune autre licence n'est nécessaire. Vos applications 4D for iOS partageront les mêmes licences que celles de 4D Remote (client).

Les clients peuvent se connecter sur des PC Mac ou Windows, ou sur des mobiles iPhone, tant que tous les utilisateurs simultanés sont couverts par la licence 4D Server.

</details>


<details>
<summary>
**I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?**
</summary>

Vous pouvez utiliser jusqu'à quatre appareils mobiles.

</details>


## Questions diverses

<details>
<summary>
**Can I modify and update data from my iOS app?**
</summary>

Oui, bien entendu.

</details>

<details>
<summary>
**Where is my data actually stored?**
</summary>

Vos données sont stockées localement sur vos appareils iOS. Cela vous permettra d'accéder à vos données en mode hors ligne.

</details>


<details>
<summary>
**Can I use related tables in 4D for iOS?**
</summary>

Conscients de votre utilisation fréquente des tables liées, nous travaillons actuellement sur leur accessibilité, prévue pour une version ultérieure de 4D for iOS.

</details>


<details>
<summary>
**Can I use calculated fields in 4D for iOS?**
</summary>

Vous avez la possibilité de créer des champs pré-calculés dans 4D et de les publier depuis la [section Structure](structure.html) dans l'éditeur de projet de 4D for iOS.

</details>


<details>
<summary>
**Do I need to have images in my database?**
</summary>

Les images ne sont pas obligatoires, mais nous vous recommandons d'en utiliser pour garantir la meilleure expérience utilisateur.

4D for iOS offre une variété de modèles de [formulaires Liste](list-form-templates.html) et de [formulaires détaillés](detail-form-templates.html). Avec ou sans images, avec des graphiques, etc.

</details>

<details>
<summary>
**Do I need to create an icon for my iOS app?**
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

Si vous possédez déjà une icône pour votre application 4D, vous pouvez la glisser-déposer directement dans la zone consacrée à l'icône dans la section [Général](general.html) de l'éditeur de projet.

</details>


<details>
<summary>
**How can I test my app?**
</summary>

4D for iOS vous permet de tester vos applications dans le [Simulateur](simulator.html). To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details>
<summary>
**Do I need to create special iOS templates to build my apps on an iPhone or iPad?**
</summary>

Tous les modèles disponibles dans 4D for iOS sont optimisés pour iPhone. Ils fonctionnent également parfaitement sur les iPad.

</details>



<details>
<summary>
     **Do I need an Apple Developer Account?**
</summary>

Pour tester votre application, vous devez créer au moins un [compte Apple Developer gratuit](free-developer-account.html).

Pour déployer une application 4D for iOS, vous devez adhérer au [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (pour un déploiement interne) ou au [Apple Developer Program](register-apple-developer-program-organization.html) (pour un déploiement sur App Store).

</details>

<details>
<summary>
**Can I customize my 4D for iOS app?**
</summary>

4D for iOS génère un véritable projet Xcode que vous pouvez [ouvrir et modifier](open-xcode.html) à votre guise.

</details>




