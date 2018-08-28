# Préprocesseurs

Bien que le langage CSS possède un grand nombre de fonctionnalités, certains concepts de programmation de
base y sont manquants. Effectivement, il n'est pas possible de définir des variables ou des fonctions en CSS,
ce qui limite la réutilisation et la maintenabilité du code.

Dans le but de répondre à ce problème, plusieurs préprocesseurs ont été développés. Un préprocesseur CSS 
permet d'ajouter des fonctionnalités au langage de base tout en permettant de générer un fichier CSS valide 
en sortie. Les principaux préprocesseurs utilisés sur le marché sont [LESS](http://lesscss.org/) et 
[Sass](http://sass-lang.com/).

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Lors du développement d'un projet de moyen ou de grande envergure, il est **fortement recommandé**
    d'utiliser un **préprocesseurs CSS** pour écrire le code. Autrement, les feuilles de style peuvent 
    s'avérer très complexes à maintenir.
  </p>
  </div>
</section>

Une majorité de développeurs utilisent Sass comme préprocesseur CSS. À cet effet, nous vous recommandons 
de vous initier avec ce préprocesseur, particulièrement si vous n'avez pas d'expérience avec un autre, 
puisqu'il est majoritairement adopté par la communauté. Bien que la syntaxe Sass diffère un peu de celle 
du CSS, il existe une version appelée [SCSS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax) 
qui conserve la syntaxe que vous connaissez. 

Pour vous familiariser avec le SCSS, vous pouvez consulter ce [guide rapide](https://sass-lang.com/guide) 
qui expose les fonctionnalités principales du langage. Pour transpiler votre code en CSS, vous pouvez utiliser
[ce paquet](https://www.npmjs.com/package/sass) sur npm.
