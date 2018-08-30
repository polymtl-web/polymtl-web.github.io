# Routing

## C'est quoi le Routing ?

Le _routing_ dans le contexte d'une application Web est la manière de laquelle les requêtes entrantes sont divisées et traitées. Dans la section précédente, nous avons crée 2 chemins : **about** et **express** qui sont ensuite traités de manière séparée. Les routes sont la représentation logique de votre application Web.

Express offre la possibilité d'avoir plus que des simples strings dans une route.
On peut avoir des caractères spéciaux:
- /home/\* (n'importe quoi peut suivre **/home/**) **ATTENTION** : l'ordre dans laquelle vos routes sont écrites est importantes. Si vous mettez une route /\* au début, les autres routes home/[...] seront ignorés.
- /home/e?xtra (le **?** indique que le **e** est facultatif)
- /home/ext(ra)? (le **?** indique que **(ra)** est facultatif)
- /home/extr+a (le **+** indique que **r** peut appraître 1 ou plusieurs fois)

On peut aussi utiliser des expressions régulières :
- (/data | /users)/about/ (**data/about** et **users/about** pointent vers le même chemin)

On peut même utiliser un tableau :
- ['/info','/about','/credits'] (toutes les routes dans le tableau mènent vers le même chemin)

Les routes peuvent même contenir des paramètres sous la forme **:paramName**. Ceci est appelé une route **dynamique** puisqu'elle contient une ou des parties variables :
- /users/:name (le paramètre **name** peut être retrouvé comme l'attribut de **req.params**)
- /users/:name&:surname (on peut avoir plusieurs paramètres si on ajoute le caractère **&** entre chaque)
Voici un exemple complet avec lequel vous pouvez expérimenter :

```js
var express = require('express');
var app = express();

app.get('/home/e?xtra',function(req,res){
    res.send('Pas besoin du e!');
});

app.get('/home/ext(ra)?',function(req,res){
    res.send('Pas besoin du ra!');
});

app.get('/home/extr+a',function(req,res){
    res.send('On peut avoir plusieurs r');
});

app.get(/(\/data)|(\/users)\/about/,function(req,res){
    res.send('Même about dans les deux cas');
});

app.get(['/info','/about','/credits'],function(req,res){
    res.send('Toujours la même chose!');
});

app.get('/users/:nom/', function(req,res) {
res.send('Bonjour ' + req.params.nom );
});

// Essayez de mettre ceci au début et voir ce qui arrive
app.get('/home/*',function(req,res){
    res.send('Fonction par défaut');
});

app.listen(3000);
```

Pour le moment, on utilise toujours **app.get()** comme fonction de routage, mais ceci n'est pas la seule méthode qui nous est offerte par Express. En effet, Express nous offre une méthode pour chacun des verbes de HTTP : **GET, PUT, DELETE** ainsi qu'une méthode **ALL** qui s'exécute, peu importe le type de requête envoyée. Pour plus d'information, voir la section sur les différentes méthodes HTTP.

## Les Routers

Pouvoir définir des différentes routes est très pratique, mais avoir le tout dans le même fichier devient rapidement difficile à lire et à maintenir. Souvent, il y a plusieurs routes qui peuvent être regroupées ensemble puisqu'elles traitent du même domaine. Express offre un outil appelé **Router** qui permet de faire exactement ceci.

Imaginez que vous devez faire un service Web qui permet de gérer plusieurs cours en génie logiciel à Polytechnique, notamment **LOG2990** et **LOG4420**. Chaque route de votre service Web devrait commencer par /log2990/ ou /log4420/ et écrire ceci à chaque fois peut devenir très encombrant. Voici pourquoi on va utiliser un **Router**.

Première étape : créer le routeur dans un fichier **log2990.js**

```js
var express = require('express');
var router = express.Router();
var basepath = '/log2990/';

router.get('/', function(req, res){
	res.send('Page de base du cours LOG2990.');
});
	router.get('/about/', function(req, res){
res.send('Description du cours LOG2990 : Projet intégrateur de deuxième année.');
});

// on va exporter notre routeur pour l'utiliser ailleurs
module.exports = {router,basepath};
```

Deuxième étape : utiliser notre routeur dans **server.js**

```js
var express = require('Express');
var app = express();

var log2990 = require('./log2990.js');
app.use(log2990.basepath, log2990.router);

app.listen(3000);
```

Maintenant, notre **server.js** a l'air beaucoup plus propre et toute la logique est déplacée dans son propre fichier. Si on veut rajouter d'autres routeurs, on ne fait que les inclure dans le serveur avec **require** et on appelle **app.use('path',router)** ou **path** est le chemin de base du routeur et **router** est l'**Express.Router** qui va être utilisé.
Dans notre exemple, nous avons défini le chemin de base '/log2990/' donc '/about' devient alors une sous-route de /log2990/ et accessible seulement par '/log2990/about/'.

Comme exercice, vous pouvez créer votre propre routeur pour **LOG4420** dans un fichier **log4420.js** avec les mêmes méthodes que **log2990.js** et voir la différence entre les deux routeurs.