# Introduction

## Préambule

Angular est un cadriciel permettant le développement Web frontal (``Front-end``) d'une application et évolue constamemnt. Ce guide a pour but d'approfondir certaines notions qui sont présentées dans le tutoriel [Tour of Heroes](https://angular.io/tutorial) (ressource en anglais). Il est donc fortement recommandé d'avoir déjà fais le tutoriel avant de commencer la lacture de ce guide.

## Comment ça marche ? 

Lorsque vous travaillez avec Angular 6, vous allez fort probablement utiliser le CLI de Angular. Cependant il est tout de même important de savoir comment il fonctionne ! 

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    La chose la plus importante qu'il faut retenir ici est que tout ce que vous faites sera utilisé uniquement par **vos clients** (google chrome, firefox ...). En aucun cas le code source développé dans une application générée par Angular CLI ne sert pour la partie serveur.
  </p>
  </div>
</section>

Un peu plus en détail, en écrivant du code, du html ou du css, vous créé des dépendances entre les différents fichiers. Par exemple, une compostante va faire référence a un fichier html, un ou plusieurs fichiers de styles, il est aussi possible que vous utilisiez des assets (des images), ou aussi n'importe qu'elle autre dépendance en terme de code, comme importation de services utiliser dans la composante ou d'une librairie. Bref, votre application à de nombreuses dépendances. 

Une fois que vous avez créé votre composante, vous allez partir votre app en utilisant ``npm start`` ou ``ng serve``, ces deux commandes sont identiques, en fait npm start ne fait qu'exécuter `ng serve`. C'est à partir de ce moment que "par magie" nous pouvons tester notre application a l'adresse ``http://localhost:4200``, mais que ce passe-t-il vraiment ?

Angular CLI utilise un module appelé [Webpack](https://webpack.js.org/). Ce module est utilisé majoritairement dans le développement de `SPA` (Single Page App). 
La première action qu'il fait est de généré un graph de dépendance de l'application. Ensuite, webpack va empaqueter (``bundle``) toutes les dépendances et les mettre dans un dossier de sortie. Ce bundle est le coeur de votre application.

En allant sur votre navigateur a l'adresse ``http://localhost:4200`` vous aller demander ce bundle et il va ensuite être affiché. Dans ce cas, votre ordinateur joue le rôle du "serveur". Et ainsi vous pouvez voir votre application.

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Attention !</h2>
  </div>
  <div class="content">
  <p>
    Le serveur en tant que tel qui va recevoir le `get` n'est pas et ne sera jamais développer par vous, c'est webpack qui s'en occupe et il est totalement indépendant de votre serveur que vous développer.
  </p>
  </div>
</section>

