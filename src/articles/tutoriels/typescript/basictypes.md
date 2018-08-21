## Boolean

Le type de base qui peut être true ou false, le `boolean` (et non bool).

```Typescript
let isDone: boolean = false;
```

## Number

Tout comme en Js, tout les nombres sont des nombres a virgule flottantes, il n'y a donc qu'un seul type qui est `number`. Aussi depuis ECMAScript 2015, le type `number` support aussi les littéraux binaire et octal.

```Typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

Les chaines de caractères sont représentés par le type `string`, il est aussi possible de templater votre chaine de caractères comme on peut le voir dans l'exemple qui suit.
```TypeScript
let nom: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = "Mon nom est ${ nom } et j'ai ${ age }."
```
## Array

Il y a deux façons de déclarer un tableau en typescript la première est tout simplement d'utiliser les crochets `[]` ou bien il est possible d'utiliser le type `générique` Array.
```TypeScript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```
## Tuple

Un `tuple` est une collection de taille fixe à valeurs hétérogènes. Par exemple, on pourrait l'utiliser pour représenter une donnée sous forme d'une pair de `string` et `number`

```TypeScript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Le tuple est un type assez avancer et peut s'averer utile dans certaines situations. Cependant, dans la majorité des cas une interface peut faire le même travail et est même plus flexible car il serait alors possible d'avoir une collection de cette interface. Ainsi, que vous utilisiez un tuple ou une interface, demandez-vous si l'utilisation de l'un ou de l'autre augmente la lisibilité et la maintenabilité de votre code.
  </p>
  </div>
</section>

## Enum

L'`enum` tout comme dans les autres langages, permet d'améliorer la lisibilité du code en donnant des noms a des ensembles de variables. Un des exemples les plus courant est pour la couleur. Par défaut, la première valeur d'une `enum` est 0.
Finalement, il est aussi possible de retouver le nom (le `string`) correspondant à la valeur dans l'`enum`.
```TypeScript
enum Color {Red = 1, Green, Blue=6}

let c: Color = Color.Green;
let nom:string = Color[2] // nom = Green
```

Dans cet exemple, on commence notre `enum` à 1, ``Green`` a donc la valeur 2 et `Blue` a été manuellement mise à 6.

## Any et Void

Le type `any` permet de représenter n'importe quel objet. Ce type peut notamment etre utile lorsqu'on ne sait pas quel type d'objet nous allons utiliser, notamment en utilisant des librairies qui ont été développer par un tierce. 
Au contraire le type `void` est en fait l'opposé de `any`, il est tout simplement utiliser comme type de retour des fonctions qui ne retourne rien (comme un C++) 

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Le type ``any`` est seulement utile lorsqu'on ne sait pas le type de retour d'une librairie ou d'une requette HTTP, c'est de très mauvaise pratique de l'utiliser abondamment, voyer le comme le type ``void*`` en C++. 
  </p>
  </div>
</section>


## Union

Bien que ce type soit avancé, il s'avère très utile afin de développer une application maintenable et permet de prévenir beaucoup d'erreurs de programmation.
Une ``union`` de types est un ``ou exclusif`` entre deux types, par exemple une fonction pourrait retourner un `number` ou un `string`.

```TypeScript
function aNumberOrAString(returnANumber: boolean) : number | string {
    return returnANumber ? 1 : "un";
}
```

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    De façon plus courrante, il est surtout utiliser pour prévenir qu'un des paramètres de la fonction peut être ``undefined`` ou ``null`` ou alors que la fonction peut retourner ``undefined`` ou ``null``. Il est aussi beaucoup utiliser dans les requettes HTTP.
  </p>
  </div>
</section>


## Null et Undefined

Les types `null` et `undefined` sont des sous types de tous les types de base, cependant, ils sont aussi la source de beaucoup d'erreur de programmation. C'est pour cela qu'il est recommander d'utiliser le flag de compilation --strictNullChecks qui rend ces types seulement assignale au type `void` (Tout simplement pour pouvoir ``return`` dans une fonction ``void``). Ainsi, si une fonction doit se préparer a checker pour un null ou un undefined, il faudra utiliser le type ``union`` qui va clairement exposer que la méthode à besoin de faire attention à un ou plusieurs de ses paramêtres. Il en va de même pour son type de retour, qui pourrait, par exemple, être `string | null | undefined`

## Conclusion

Héritant du Js, le Ts est un langage assez complet et flexible sur les types. Il existe d'autres types avancés qui peuvent être utiles dans certaines situations leur documentation est sur le site officiel de [`TypeScript`](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
