# ExpressJS

Express est un cadriciel bati sur Node qui nous donne une interface minimale permettante de créer des applications web. Express est de loins le cadriciel le plus utilisé pour des applications serveur Node et offre plusieurs outils intéressants pour simplifier la vie des développeurs. Parmi les outils offerts, il y a notamment :
- Routing [ADD DESCRIPTION HERE]
- Middleware [ADD DESCRIPTION HERE]
- Cookies [ADD DESCRIPTION HERE]
- Templating [ADD DESCRIPTION HERE]


## Pourquoi Express?

Dans le premier exemple de serveur Node.js, nous avons crée un serveur très simple qui répond par un simple message statique lorsqu'on accède à notre serveur. Si jamais on voudrait avoir quelque chose de plus intéressant, plusieurs pages différentes par exemple, il faudrait utiliser du _routing_ pour dire à notre serveur qu'il doit avoir un comportement différent. Si on prend notre **server.js** et on le modifie pour ajouter une page **about** et une page **express**, voici ce qu'il faut faire avec Node :

```js
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var url = req.url;
    if(url ==='/about'){
        res.write('<h1>Une page sur nous<h1>'); 
        res.end(); 
    }else if(url ==='/express'){
        res.write('<h1>Une page sur ExpressJS<h1>'); 
        res.end(); 
    }else{
        res.write('<h1>Exemple de serveur Node avec routage!<h1>'); 
        res.end(); 
    }
}).listen(3000);
```
Si on lance notre nouveau serveur, on peut maintenant accéder aux liens **localhost:3000/about** et **localhost:3000/express** et voir du contenu différent. On peut très rapidement s'appercevoir que l'ajout d'une nouvelle page nécessite une autre condition et on peut rapidement se retrouver avec une longue cascade de _if/else_, ce qui est à éviter le plus possible.

Pour résoudre ce problème, on peut se tourner vers **Express**. Voici le même code écrit en utilisant Express:

```js
var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Exemple de serveur Node avec routage!");
})
app.get('/about',function(req,res){
    res.send("Une page sur nous");
})
app.get('/express',function(req,res){
    res.send("Une page sur ExpressJS");
})

app.listen(3000);
```

On peut donc voir qu'on a éliminé le besoin d'avoir une séquence de _if/else_ dans notre code et maintenant, chaque route est définie dans sa propre fonction. Ceci rend le code plus lisible, et surtout, plus facilement à maintenir et modifier. 
Si on regarde le code plus en détails, on peut voir les trois étapes d'un serveur Node-Express de base :

```js
var express = require('express');
var app = express();
```

Avec ces 2 lignes, on vient d'importer **Express** et on a initialisé notre variable **app**.

Pour traiter nos requêtes, on les a séparés dans des fonctions différentes qui ont le format suivant :

```js
app.get('/about',function(req,res){
    res.send("Une page sur nous");
})
```

La fonction **app.get(route,callback)** définit le comportement(_callback_) de notre serveur lorsqu'on reçoit une requête **GET** sur la route (_route_) définie. La fonction **callback** accepte 2 paramètres : **request(req)** et **response(res)**. 
La requête **request** représente la requête HTTP et contient ses propriétés : _query string, parameters,body, HTTP headers, etc_. De la même manière, **response** est l'objet de réponse qui est envoyé lorsqu'on termine de traiter une requête.

Dans notre exemple, la requête est traitée en envoyant qu'un simple message (_string_) avec **res.send()**. La fonction **send()** peut retourner un _string_,_array_ ou _buffer_. **res** est capable aussi d'envoyer une réponse en format JSON avec **res.json([body])** ou meme un fichier avec **res.sendFile()**. Pour savoir tout ce que **res** peut faire, consulter la [documentation](https://expressjs.com/en/api.html#res).

Finalement, il faut dire à notre application qu'elle doit écouter pour des connections sur le port 3000 avec une fonction très similaire à celle de **Node**, la fonction **listen()** :
```js
app.listen(3000)
```


## C'est quoi le Routing ?

Le _routing_ dans le contexte d'une application Web est la manière de la quelle les requêtes entrantes sont divisées et traitées. Dans la section précédante, nous avons crée 2 chemins : **about** et **express** qui sont ensuite traités de manière séparée. Les routes sont la représentation logique de votre application Web.

Express offre la possibilité d'avoir plus que des simples strings dans une route.
On peut avoir des caractères spéciaux:
- /home/\* (n'importe quoi peut suivre **/home/**)  **ATTENTION** : l'ordre dans laquelle vos routes sont écrites est importantes. Si vous mettez une route /\* au début, les autres routes home/[...] seront ignorés.
- /home/e?xtra  (le **?** indique que le **e** est facultatif)
- /home/ext(ra)? (le **?** indique que **(ra)** est facultatif)
- /home/extr+a  (le **+** indique que **r** peut appraître 1 ou plusieurs fois)

On peut aussi utiliser des expressions régulières :
- (/data | /users)/about/  (**data/about** et **users/about** pointent vers le même chemin)

On peut même utiliser un tableau :
- ['/info','/about','/credits'] (tous les routes dans le tableau mennent vers le même chemin)

Les routes peuvent même contenir des paramètres sous la forme **:paramName**. Ceci est appelé une route **dynamique** puisqu'elle contient une ou des parties variables  :
- /users/:name  (Le paramètre **name** peut être retrouvé comme l'attribut de **req.params**)
- /users/:name&:surname (On peut avoir plusieurs paramètres si on ajoute le caractère **&** entre chaque)
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
	res.send('Meme about dans les deux cas');
});

app.get(['/info','/about','/credits'],function(req,res){
	res.send('Toujours la meme chose!');
});

app.get('/users/:nom/', function(req,res) {
  res.send('Bonjour ' + req.params.nom );
 
});

// Essayez de mettre ceci au debut et voir ce qui arrive
app.get('/home/*',function(req,res){
	res.send('Fonction par defaut');
});

app.listen(3000);
```

Pour le moment, on utilise toujours **app.get()** comme fonction de routage, mais ceci n'est pas la seule méthode qui nous est offerte par Express. En effet, Express nous offre une méthode pour chacun des verbes de HTTP : **GET, PUT, DELETE**  ainsi qu'une méthode **ALL** qui s'exécute peu importe le type de requête envoyée. Pour plus d'information, voir la section sur les différentes méthodes HTTP.

## Les Routers

Pouvoir définier des différentes routes est très pratique, mais avoir le tout dans le même fichier devient rapidement difficile à lire et à maintenir. Souvent, il y a plusieurs routes qui peuvent être regroupées ensemble puisqu'elles traitent du même domaine. Express offre un outil appelé **Router** qui permet de faire exactement ceci.

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

var log2990  = require('./log2990.js');
app.use(log2990.basepath, log2990.router);

app.listen(3000);
```

Maintenant, notre **server.js** a l'air beaucoup plus propre et toute la logique est déplacée dans sont propre fichier. Si on veut rajouter d'autres routeurs, on ne fait que les inclure dans le serveur avec **require** et on appelle **app.use('path',router)** ou **path** est le chemin de base du routeur et **router** est l'**Express.Router** qui va être utilisé.
Dans notre exemple, nous avons défini le chemin de base '/log2990/' donc '/about' devient alors une sous-route de /log2990/ et accessible seulement par '/log2990/about/'.

Comme exercice, vous pouvez créer votre propre routeur pour **LOG4420** dans un fichier **log4420.js** avec les mêmes méthodes que **log2990.js** et voir la différence entre les deux routeurs.
