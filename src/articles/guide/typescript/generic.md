# Types Génériques

 Un des défis du développement logiciel est d'avoir un code source facilement réutilisable. Les types génériques sont un des outils permettants cela. 
 Une des meilleure façon de les introduire est de faire une petite mise en situation : 

 Notre objectif est tout simple : créer une fonction qui fonctionne comme la commende linux `echo`.
 Pour ce faire, une implémentation naïve serait de le faire pour chaque type, on aurait donc une fonction de la sorte : 

```TypeScript
function identity(arg: number): number {
    return arg;
}
```

Le problème est le suivant : il faut faire une fonction pour chaque type existant. 
Une autre possibilité pour palier à ce problème serait alors la suivante : 

```TypeScript
function identity(arg: any): any {
    return arg;
}
```

Mais le problème ici est plus grand : on a le type ``any``. En l'utilisant, nous perdons tous les avantages de typage qu'offre TypeScript. Il nous faut donc une autre solution qui nous permet de faire la même chose que le any mais en gardant tous les avantages de TypeScript.

```TypeScript
function identity<T>(arg: T): T {
    return arg;
}

let output: string = identity<string>("myString"); 
```

Et voilà le type générique ! Nous utilisons le type générique ``T`` pour dire que l'argument de la fonction et le type de retour est le même ! 

Pour plus d'information sur le type générique, voila la [documentation](https://www.typescriptlang.org/docs/handbook/generics.html) (ressource en anglais).

