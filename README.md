Référence web
=============
[![Statut du _build_](https://travis-ci.com/polymtl-web/polymtl-web.github.io.svg?branch=develop)](https://travis-ci.com/polymtl-web/polymtl-web.github.io)

Ce site web sert de référence pour les cours [LOG2990](http://www.polymtl.ca/etudes/cours/projet-de-logiciel-dapplication-web) 
et [LOG4420](http://www.polymtl.ca/etudes/cours/conception-de-sites-web-dynam-et-transact) à Polytechnique Montréal. 
Il a été écrit en TypeScript et utilise le _framework_ [Angular 6](https://angular.io/). Le site est 
actuellement hébergé à l'URL suivante: https://polymtl-web.github.io/. Pour contribuer à ce site, 
veuillez suivre les instructions suivantes.

Prérequis
---------
Avant de pouvoir être en mesure d'exécuter le projet, vous devez installer [Node.js](https://nodejs.org/en/). 
Une fois Node.js installé, vous devez taper la commande suivante dans un terminal.

```
npm install -g @angular/cli
```

Pour plus de détails, voir [angular-cli](https://github.com/angular/angular-cli).

Exécution
---------
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

Contribution
------------
Avant de pouvoir contribuer au site web, assurez-vous de récupérer le code source de l'application qui se trouve sur la 
branche `develop`. Pour contribuer au contenu du site, veuillez vous référer à l'une des deux sous-sections 
suivantes. L'ensemble des articles du site web sont écrits au format Markdown. Pour plus d'informations sur ce format, vous 
pouvez consulter ce [lien](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Il est à noter que lorsque vous soumettez des modifications sur la branche `develop`, ces mêmes modifications seront 
**automatiquement déployées** sur le site web (voir la section [Déploiement](#déploiement)). Ainsi, si vous souhaitez réaliser
des modifications sans que celles-ci soient publiées sur le site, vous devez vous créer une nouvelle branche. Une fois que
vous serez prêt à publier vos modifications, vous pourrez alors fusionner votre branche avec la branche `develop`. 

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
  "name": "Le nom réel de l'article",
  "authors": [ "Le nom du premier auteur", "..." ]
}
```

**Assurez-vous que l'identifiant (`id`) spécifié respecte le format _[kebab-case](http://wiki.c2.com/?KebabCase)_**. De 
plus, validez que le nom de l'identifiant est en français, puisqu'il apparaîtra dans l'URL du site web. Enfin, veuillez
vous assurer que le ou les noms des auteurs spécifiés sont listés dans le fichier `authors.json` se trouvant dans le dossier
`/src/articles`.

Il est également possible de spécifier le paramètre `isVisible` sur un article. Ce paramètre indique la visibilité de
l'article sur le site web. Par défaut, cette valeur est à `true`.

Une fois cette dernière étape effectuée, le tutoriel que vous avez créé devrait être disponible sur le site web.

### Guide des bonnes pratiques web 
L'ajout d'un nouvel élément dans le guide des bonnes pratiques est très similaire à la procédure qui a été décrite à la
sous-section précédente. Ainsi, vous devez créer un nouveau fichier `.md` dans le dossier correspondant à la bonne 
catégorie de l'élément dans le dossier `/src/articles/guide`.

Vous devrez par la suite référencer ce nouveau fichier dans le fichier `guide.json` qui se trouve dans le dossier
`/src/articles/guide`. Référez-vous à la sous-section précédente pour connaître la procédure pour modifier ce fichier.

Une fois l'ensemble de ces modifications effectuées, le nouvel élément devrait être disponible sur le site web.

Déploiement
-----------
Une fois que vous avez effectué votre contribution, vous devez propager vos changements sur la branche `develop` afin
que ceux-ci soient publiés sur le site web.

Lorsqu'une nouvelle contribution est soumise sur la branche `develop`, un 
[_build_ automatisé](https://travis-ci.com/polymtl-web/polymtl-web.github.io) est lancé afin de mettre à jour les 
fichiers utilisés par le site web en production se trouvant sur la branche `master`. En ce sens, avant de soumettre une 
contribution sur la branche `develop`, assurez-vous que celle-ci doit être accessible sur le site web public. Autrement, 
vous devez vous créer une nouvelle branche sur laquelle vous soumettrez vos modifications. 

Une fois que vos modifications ont bel et bien été propagées sur la branche `develop`, assurez-vous que le site web a été
mis à jour (https://polymtl-web.github.io/). Il est à noter que cette mise à jour peut prendre quelques minutes.

Soumettre un problème
---------------------
Si vous remarquez un problème avec le site web, tant que sur le fonctionnement que sur le contenu, vous pouvez ouvrir 
un nouvel [_issue_](https://github.com/polymtl-web/polymtl-web.github.io/issues) sur GitHub.

Licence
-------
Le code source du site web est disponible sous la licence GNU GPLv3. Le contenu du site web est disponible sous 
la licence [CC BY-ND](https://creativecommons.org/licenses/by-nd/2.0/ca/legalcode.fr).
 
Contact
-------
Ce projet a été réalisé par:

- [Antoine Béland](https://github.com/antoinebeland)
- [Dylan Farvaque](https://github.com/dyc0de)
- [Michel Gagnon](https://github.com/mchlggnn)
- [François Guibault](https://github.com/fguibault)
- [Konstantinos Lambrou-Latreille](https://github.com/koslambrou)
- [Nikolay Radoev](https://github.com/Bodheem)
