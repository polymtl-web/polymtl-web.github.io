# Manipulation des tableaux

La manipulation de tableaux en JavaScript est quelque chose d'essentiel à comprendre. Effectivement, il est très fréquent de les rencontrer
dans un programme et il est souvent nécessaire d'effectuer des opérations sur ceux-ci. Les programmeurs qui débutent avec le langage JavaScript
méconnaissent souvent l'aspect fonctionnel du langage, ce qui a comme conséquence de compliquer leurs codes. La programmation fonctionnelle peut
donc être utilisée sur les tableaux, en utilisant des fonctions telles que 
[`forEach`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach) ou 
[`find`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find), plutôt que de définir des boucles et des 
variables inutiles.

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Il est très rare que vous ayez à définir des boucles en JavaScript. En effet, il existe de nombreuses fonctions qui vous évitent d'écrire
    de longues boucles pour réaliser certaines opérations. En ce sens, si vous écrivez une boucle, posez-vous la question s'il existe 
    une fonction pour faire la fonctionnalité que vous vous apprêtez à écrire.
  </p>
  </div>
</section>

Plusieurs nouvelles fonctions ont faits leurs apparitions pour la manipulation des tableaux avec [ECMAScript&nbsp;6](http://es6-features.org/) (ES6). 
Plusieurs bibliothèques définissent également plusieurs autres fonctions qui n'ont pas été définies dans la bibliothèque standard, telles que 
[Underscore.js](https://underscorejs.org/) et [Lodash](https://lodash.com/).

Les sous-sections suivantes illustrent plusieurs cas d'utilisation lors de la manipulation des tableaux où la programmation fonctionnelle
permet de simplifier grandement le code. Pour connaître l'ensemble des fonctions pouvant utilisées sur les tableaux définies par la bibliothèque
standard, vous pouvez consulter cette [référence](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array).

## Parcours d'un tableau

Une opération fréquente sur un tableau est le parcours de celui-ci. Une approche naïve est d'utiliser une boucle `for` pour accéder aux éléments
d'un tableau. Or, il est beaucoup plus succinct et clair d'utiliser l'approche fonctionnelle, en faisant appel à la fonction 
[`forEach`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach). L'exemple de code suivant illustre 
cette différence.

```js
const array = [ 1, 2, 3, 4, 5, 6 ];

// Approche longue et naïve
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}

// Approche fonctionnelle équivalente
array.forEach(d => console.log(d));
```

## Recherche d'un élément dans un tableau

Une autre opération souvent effectuée est la recherche d'un élément dans un tableau. Effectivement, il est parfois nécessaire 
de savoir si un élément se trouve dans un tableau pour effectuer le reste des opérations. Encore une fois, l'approche fonctionnelle peut
grandement faciliter cette opération, en utilisant la fonction 
[`find`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find). L'exemple suivant montre ce cas.

```js
const array = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
const elementToFind = 'c';
let elementIsFound = false;

// Approche longue et naïve
for (let i = 0; !elementIsFound && i < array.length; ++i) {
  if (elementToFind === array[i]) {
    elementIsFound = true;
  }
}

// Approche fonctionnelle équivalente
elementIsFound = array.find(d => d === elementToFind) !== undefined;
```

## Recherche de l'indice d'un élément dans un tableau

Il peut être parfois pratique de récupérer l'indice d'un élément se trouvant dans un tableau. Cet indice pourra être alors réutilisé
pour accéder à cet élément un peu plus tard. Une approche souvent utilisée pour récupérer cet indice est d'utiliser une boucle `for` 
puis une condition. Cependant, l'approche fonctionnelle permet réaliser cela en une seule ligne en utilisant la fonction
[`findIndex`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex). L'exemple ci-dessous présente
ce cas d'utilisation.

```js
const array = [ 'bonjour', 'salut', 'hello', 'yo' ];
const elementToFind = 'salut';
let indexRetrieved = -1;

// Approche longue et naïve
for (let i = 0; indexRetrieved === -1 && i < array.length; ++i) {
  if (elementToFind === array[i]) {
    indexRetrieved = i;
  }
}

// Approche fonctionnelle équivalente
indexRetrieved = array.findIndex(d => d === elementToFind);
```

## Filtrage d'un tableau

Une opération commune qui peut être effectuée sur un tableau est de conserver uniquement certaines valeurs qui respectent une condition donnée. 
En ce sens, il faut effectuer un filtrage sur celui-ci afin de conserver les bonnes valeurs. Encore une fois, il est possible 
d'effectuer ce filtrage à l'aide d'une boucle et d'une condition. Or, une fonction existe pour faire cette opération: la fonction 
[`filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter). L'exemple suivant illustre les deux 
manières possibles pour effectuer ce filtrage.

```js
const array = [ 'bonjour', 'salut', 'hello', 'yo' ];
let arrayFiltered = [];

// Approche longue et naïve
for (let i = 0; i < array.length; ++i) {
  if (array[i].length > 2) { // On conserve les mots ayant plus de deux caractères
    arrayFiltered.push(array[i])
  }
}

// Approche fonctionnelle équivalente
arrayFiltered = array.filter(d => d.length > 2);
```

## Sommation des éléments d'un tableau

Une opération parfois nécessaire est de trouver la somme des éléments contenus dans un tableau. L'approche traditionnelle 
pour y arriver est d'utiliser une variable accumulatrice puis une boucle. Cependant, une approche plus simple existe. En 
effet, la fonction [`reduce`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce)
permet d'effectuer facilement une sommation sur un tableau. L'exemple ci-dessous montre l'utilisation de cette fonction.

```js
const array = [ 1, 2, 3, 4, 5, 6 ];
let result = 0;

// Approche longue et naïve
for (let i = 0; i < array.length; ++i) {
  result += array[i];
}

// Approche fonctionnelle équivalente
result = array.reduce((total, d) => total + d);
```

## Transformation des éléments d'un tableau

Une autre opération qui est souvent réalisée sur un tableau est d'appliquer une transformation sur celui-ci. Cette opération
consiste à parcourir le tableau en entier puis d'y appliquer une transformation quelconque sur chacun des éléments. Bien entendu,
cette opération peut se faire en utilisant une boucle. Or, il y a une fonction conçue spécifiquement pour réaliser cette opération:
la fonction [`map`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map). L'exemple suivant
montre l'utilisation de cette fonction.

```js
let array = [ 1, 2, 3, 4, 5, 6 ];

// Approche longue et naïve
for (let i = 0; i < array.length; ++i) {
  array[i] = Math.pow(array[i], 2); // Exposant 2 de chacun des éléments
}

// Approche fonctionnelle équivalente
array = array.map(d => Math.pow(d, 2));
```

## Validation d'une condition sur un tableau

Il est souvent nécessaire de valider une condition sur une ou toutes les valeurs d'un tableau. Pour y arriver,
il est possible d'utiliser une boucle puis une variable booléenne pour conserver le résultat de la condition. Cependant,
l'approche fonctionnelle permet de réaliser la même opération qu'en faisant appel à une fonction: la fonction 
[`some`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some) si l'on souhaite valider
qu'il ait au moins un élément du tableau qui respecte la condition ou la fonction 
[`every`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every) pour valider que tous 
les éléments du tableau respectent cette même condition. 

L'exemple suivant illustre l'utilisation de la fonction `some` lorsqu'au moins un élément d'un tableau
doit respecter une condition.

```js
const array = [ 1, 2, 3, 4, 5, 6 ];
let isValid = false;

// La condition à valider (élément inférieur à 7)
const condition = d => d < 7;

// Approche longue et naïve
for (let i = 0; !isValid && i < array.length; ++i) {
  if (condition(array[i])) {
    isValid = true;
  }
}

// Approche fonctionnelle équivalente
isValid = array.some(d => condition(d));
```

L'exemple ci-dessous montre l'autre cas, c'est-à-dire celui lorsque tous les éléments d'un tableau doivent respecter une condition, 
en utilisant la fonction `every`.

```js
const array = [ 1, 2, 3, 4, 5, 6 ];
let isValid = array.length > 0;

// La condition à valider (élément inférieur à 7)
const condition = d => d < 7;

// Approche longue et naïve
for (let i = 0; isValid && i < array.length; ++i) {
  isValid = condition(array[i]);
}

// Approche fonctionnelle équivalente
isValid = array.every(d => condition(d));
```
