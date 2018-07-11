# polymtl-web

Ce site web sert de référence pour les cours [LOG2990](http://www.polymtl.ca/etudes/cours/projet-de-logiciel-dapplication-web) 
et [LOG4420](http://www.polymtl.ca/etudes/cours/conception-de-sites-web-dynam-et-transact) à Polytechnique Montréal. 
Il a été écrit en TypeScript et utilise le _framework_ [Angular 6](https://angular.io/). Le site web est 
actuellement hébergé à l'URL suivante: https://polymtl-web.github.io/. Pour contribuer à ce site, 
veuillez suivre les instructions suivantes.

## Prérequis
Avant de pouvoir être en mesure d'exécuter le projet, vous devez installer [Node.js](https://nodejs.org/en/). 
Une fois Node.js installé, vous devez taper la commande suivante dans un terminal.

```
npm install -g @angular/cli
```

Pour plus de détails, voir [angular-cli](https://github.com/angular/angular-cli).

## Exécution
Une fois que vous avez installé les prérequis demandés, vous devez suivre les instructions suivantes pour être 
en mesure d'exécuter l'application sur une machine locale.

La première étape consiste à installer les dépendances nécessaires à Angular 6. Pour ce faire, vous devez taper la 
commande suivante dans un terminal à la racine du projet:

```
npm install
```

La deuxième étape consiste à démarrer le serveur. Encore une fois, vous devez taper la commande suivante dans un terminal:

```
npm start
```

Une fois le serveur démarré, l'application est accessible au `http://localhost:4200/`.

## Contribution
Avant de pouvoir contribuer au site web, assurez-vous de récupérer le code source du site web qui se trouve sur la 
branche `develop`. Pour contribuer au contenu du site web, veuillez vous référer à l'une des deux sous-sections 
suivantes. L'ensemble des articles du site sont écrits au format Markdown. Pour plus d'informations sur ce format, vous 
pouvez consulter ce [lien](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Tutoriels
Pour ajouter un nouveau tutoriel sur le site, vous devez créer un nouveau fichier `.md` à l'intérieur du dossier 
`/src/articles/tutoriels` correspondant à la nouvelle page du tutoriel à ajouter. Assurez-vous de créer le tutoriel dans 
la bonne catégorie, c'est-à-dire dans le bon dossier. 

Une fois votre nouveau fichier créé, vous devez référencer ce même fichier dans le fichier `tutoriels.json` se trouvant 
dans le dossier `/src/articles/tutoriels`. Pour ce faire, vous devez ajouter le tutoriel dans la bonne catégorie en ajoutant
un élément dans la liste `articles` correspondant à cette même catégorie en respectant le format suivant:

```json
{
  "id": "Le nom du fichier .md (sans l'extension .md)",
  "name": "Le nom réel de l'article"
}
```

Une fois cette dernière étape effectuée, le tutoriel que vous avez créé devrait être disponible sur le site web.

### Guide des bonnes pratiques web 
L'ajout d'un nouvel élément dans le guide des bonnes pratiques est très similaire à la procédure qui a été décrite à la
sous-section précédente. Ainsi, vous devez créer un nouveau fichier `.md` dans le dossier correspondant à la bonne 
catégorie de l'élément dans le dossier `/src/articles/guide`.

Vous devrez par la suite référencer ce nouveau fichier dans le fichier `guide.json` qui se trouve dans le dossier
`/src/articles/guide`. Référez-vous à la sous-section précédente pour connaître la procédure pour modifier ce fichier.

Une fois l'ensemble de ces modifications effectuées, le nouvel élément devrait être disponible sur le site web.

## Déploiement
Une fois que vous avez effectué votre contribution, vous devez propager vos changements sur la branche `develop`.

Par après, vous devrez mettre à jour le _build_ du site web sur la branche `master`. Pour ce faire, taper la commande 
suivante dans un terminal à la racine du projet sur la branche `develop`:

```
npm run-script build
```

Une fois cette commande exécutée, un dossier nommé `dist` aura été créé à la racine du projet. Copier l'ensemble des 
fichiers se trouvant dans le dossier `dist` puis remplacer tous les fichiers se trouvant sur la branche 
`master` par ceux que vous avez copiés. Par la suite, propager les modifications effectuées sur la branche `master`. 

Une fois cette dernière étape complétée, assurez-vous que votre modification a bel et bien été propagée sur le site 
web en production se trouvant à l'adresse suivante: https://polymtl-web.github.io/.

## Soumettre un problème
Si vous remarquez un problème avec le site web, tant que sur le fonctionnement que sur le contenu, vous pouvez ouvrir 
un nouvel [_issue_](https://github.com/polymtl-web/polymtl-web.github.io/issues) sur GitHub.

## Licence
Le code source du site web est disponible sous la licence GNU GPLv3. Le contenu du site web est disponible sous 
la licence [CC BY-ND](https://creativecommons.org/licenses/by-nd/2.0/ca/legalcode.fr).
 
## Contact
Ce projet a été réalisé par:

- [Antoine Béland](https://github.com/antoinebeland)
- Dylan Farvaque
- [Konstantinos Lambrou-Latreille](https://github.com/koslambrou)
- [Nikolay Radoev](https://github.com/Bodheem)
