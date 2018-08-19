# Système de fichiers de Node

Node permet d'avoir accès au système de fichier de l'ordinateur sur lequel l'application Node roule. Tout comme 'http', Node vient avec un module déjà existant pour accèder au système de fichiers : **fs**. Pour utiliser le module, on l'importe de la manière suivante :

```powershell
var fs = require('fs');
```

## Asynchrone vs Synchrone

Le module **fs** permet d'avoir une version asynchrone et synchrone de la majorité de ses méthodes. Les méthodes asynchrones prennent une fonction _callback_ comme dernier paramètre et cette fonction prend un paramètre d'erreur comme premier paramètre. De manière générale, les fonctions asynchrones sont fortement conseillées puisqu'elles ne bloquent pas l'exécution du programme, contrairement aux fonctions synchrones. 

**Example**
Créez un fichier **texte.txt** et mettez ce que vous voulez dedans :

```powershell
Bonjour! Voici le contenu du fichier texte.txt
Ceci sera lu par le programme
```

Créez un fichier **main.js** qui va contenir le code suivant :

```js
var fs = require('fs');

fs.readFile('texte.txt', function(error,data){
    if (error){
        return console.error(error);
    }
    console.log("Lecture asynchrone : " + data.toString());
});

console.log("Fin du programme");
```

Il suffit de rouler le programme avec la commande **node** et vérifier le résultat qui devrait être le suivant :

```powershell
Fin du programme
Lecture asynchrone : Bonjour! Voici le contenu du fichier texte.txt
Ceci sera lu par le programme
```

Il est intéressant de voir que **Fin du programme** est affiché avant le contenu du fichier. Ceci est dû au fait que _readFile_ est asynchrone et le programme n'attend pas la fin de son exécution avant de passer à la prochaine instruction. C'est seulement lorsque la lecture du fichier est terminée que la fonction _callback_ est appelé et le contenu est affiché à l'écran.