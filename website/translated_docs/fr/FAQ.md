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

4D for iOS en v17 R2 est conçu et certifié pour Xcode 9.4.1.

La prochaine version (4D v17 R3) sera certifiée pour Xcode 10/Swift 4.2 (un macOS 10.13.6 ou 10.14 est requis)

Dans le cas où vous êtes déjà passé à Xcode 10, vous pouvez télécharger Xcode 9.4.1 ici : https://developer.apple.com/download/more/

Seuls les développeurs enregistrés peuvent télécharger des démonstrations de versions via le site web Apple Developer.

Veuillez consulter [ici](prerequisites.html) la liste des conditions préalables.

</details>

<details>
<summary>
<strong>Puis-je utiliser Windows pour développer avec 4D for iOS ?</strong>
</summary>

Non. Vous devez développer sur macOS, puisque la compilation de l’application finale et l'exécution du simulateur se font à l'aide d'Xcode.

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
<strong>Quelle licence 4D dois-je utiliser avec 4D for iOS ?</strong>
</summary>

Pour développer des applications 4D for iOS, vous avez besoin d’une licence 4D Developer Pro v17 R2 (macOS).

</details>

<details>
<summary>
<strong>Quelle licence 4D dois-je utiliser pour déployer des applications créées avec 4D for iOS ?</strong>
</summary>

Vous avez besoin d’une licence 4D Server (macOS ou Windows) v17 R2 ou d'une licence plus récente pour déployer des applications 4D for iOS.

Aucune autre licence n'est nécessaire. Vos applications 4D for iOS partageront les mêmes licences que celles de 4D Remote (client).

Les clients peuvent se connecter sur des PC Mac, Windows ou sur des mobiles iPhone, tant que l'ensemble des utilisateurs simultanés sont couverts par la licence 4D Server.

Veuillez noter que vous n’êtes pas autorisé à installer votre application mobile sur un nombre d'appareils supérieur à celui des licences 4D Server clients.

</details>

<details>
<summary>
<strong>J’ai un 4D Server et une extension pour deux clients (quatre clients au total). Combien d'appareils mobiles puis-je utiliser ?</strong>
</summary>

Vous pouvez utiliser jusqu'à quatre appareils mobiles.

</details>

## Questions diverses

<details>
<summary>
<strong>J’ai une application contenant un grand nombre de données, puis-je les intégrer toutes à mon appareil iOS ?</strong>
</summary>

4D for iOs vous permet d’intégrer un maximum de 10 000 enregistrements dans votre application.

Pour l’instant, la meilleure façon de traiter de grandes quantités de données consiste à créer une table intermédiaire et à filtrer les résultats que vous souhaitez afficher.

Les prochaines versions de 4D for iOS incluront un moyen d’appliquer des filtres afin que seule l’information requise s'affiche.

</details>

<details>
<summary>
<strong>Puis-je modifier et mettre à jour les données de mon application iOS ?</strong>
</summary>

Pour l’instant, 4D for iOS vous permet de créer des applications en lecture seule.

Les prochaines versions vous permettront d’ajouter et de modifier vos enregistrements directement à partir de votre application iOS et de synchroniser vos données avec le serveur.

</details>

<details>
<summary>
<strong>Puis-je recharger uniquement les enregistrements qui ont été modifiés ?</strong>
</summary>

Lorsque vous rechargez vos données, toutes vos données sont téléchargées pour remplacer les données existantes.

La synchronisation incrémentielle sera prévue dans une prochaine version.

</details>

<details>
<summary>
<strong>Où sont stockées mes données ?</strong>
</summary>

Vos données sont stockées localement sur vos appareils iOS. Cela vous permettra d'accéder à vos donnée en mode hors ligne.

</details>

<details>
<summary>
<strong>Puis-je des tables reliées dans 4D for iOS ?</strong>
</summary>

Conscients que vous utilisez souvent des tables reliées pour vos applications commerciales, nous travaillons sur l'accessibilité des tables reliées pour une prochaine sortie de 4D for iOS.

</details>

<details>
<summary>
<strong>Puis-je utiliser des champs calculés dans 4D for iOS ?</strong>
</summary>

Vous avez la possibilité de créer des champs pré-calculés dans 4D et de les publier depuis la [section Structure](structure.html) de l'éditeur de projet de 4D for iOS.

</details>

<details>
<summary>
<strong>Ai-je besoin d'avoir des images dans ma base de données ?</strong>
</summary>

Les images ne sont pas obligatoires, mais nous vous recommandons d'en utiliser pour garantir la meilleure expérience utilisateur.

4D for iOS offre une variété de modèles de [formulaire Liste](list-form-templates.html) et de [formulaire détaillé](detail-form-templates.html). Avec sou sans images, avec graphiques, etc...

</details>

<details>
<summary>
<strong>Dois-je créer une icône pour mon application iOS ?</strong>
</summary>

Il est fortement recommandé d'avoir une icône pour votre application 4D for iOS. Si n'en avez pas, l'icône par défaut (le logo 4D) sera affiché.

Si vous possédez déjà une icône pour votre application 4D Desktop, vous pouvez la glisser-déposer directement dans la zone consacrée à l'icône dans la section [Général](general.html) de l'éditeur de projet.

</details>

<details>
<summary>
<strong>Comment puis-je tester mon application ?</strong>
</summary>

4D for iOS vous permet de tester vos applications dans le [Simulateur](simulator.html) et/ou directement dans l'[appareil](install-device.html) iOS (iPhone et iPad).

</details>

<details>
<summary>
<strong>Dois-je créer des modèles iOS spécifiques pour créer mes applications sur un iPhone ou un iPad ?</strong>
</summary>

Tous les modèles disponibles dans 4D for iOS sont optimisés pour l'iPhone. Ils fonctionnent également parfaitement sur les iPad.

</details>

<details>
<summary>
     <strong>Ai-je besoin d'un compte Apple Developer ?</strong>
</summary>

Pour tester votre application sur un appareil iOS, vous devez créer au moins un [compte Apple Developer gratuit](free-developer-account.html).

Pour déployer une application 4D for iOS, vous devez adhérer au [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (pour un déploiement interne) ou au [Apple Developer Program](register-apple-developer-program-organization.html) (pour un déploiement sur App Store).

</details>

<details>
<summary>
<strong>Puis-je personnaliser mon application 4D for iOS ?</strong>
</summary>

4D for iOS génère un véritable projet Xcode que vous pouvez [ouvrir et modifier](open-xcode.html) à votre guise.

</details>