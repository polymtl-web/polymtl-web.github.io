# ExpressJS

Express est un cadriciel bâti sur Node qui nous donne une interface minimale permettante de créer des applications web. Express est de loin le cadriciel le plus utilisé pour des applications serveur Node et offre plusieurs outils intéressants pour simplifier la vie des développeurs. Parmi les outils offerts, il y a notamment :
- Routing
- Middleware 
- Templating

## Pourquoi Express?

Dans le premier exemple de serveur Node.js, nous avons créé un serveur très simple qui répond par un simple message statique lorsqu'on accède à notre serveur. Si jamais on voudra avoir quelque chose de plus intéressant, plusieurs pages différentes par exemple, il faudrait utiliser du _routing_ pour dire à notre serveur qu'il doit avoir un comportement différent. Si on prend notre **server.js** et on le modifie pour ajouter une page **about** et une page **express**, voici ce qu'il faut faire avec Node :

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
Si on lance notre nouveau serveur, on peut maintenant accéder aux liens **localhost:3000/about** et **localhost:3000/express** et voir du contenu différent. On peut très rapidement s'apercevoir que l'ajout d'une nouvelle page nécessite une autre condition et on peut rapidement se retrouver avec une longue cascade de _if/else_, ce qui est à éviter le plus possible.

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
Si on regarde le code plus en détail, on peut voir les trois étapes d'un serveur Node-Express de base :

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
La requête **request** représente la requête HTTP et contient ses propriétés : _query string, parameters,body, HTTP headers, etc_. De la même manière, **response** est l'objet de réponse qui est envoyée lorsqu'on termine de traiter une requête.

Dans notre exemple, la requête est traitée en envoyant qu'un simple message (_string_) avec **res.send()**. La fonction **send()** peut retourner un _string_,_array_ ou _buffer_. **res** est capable aussi d'envoyer une réponse en format JSON avec **res.json([body])** ou meme un fichier avec **res.sendFile()**. Pour savoir tout ce que **res** peut faire, consulter la [documentation](https://expressjs.com/en/api.html#res).

Finalement, il faut dire à notre application qu'elle doit écouter pour des connexions sur le port 3000 avec une fonction très similaire à celle de **Node**, la fonction **listen()** :
```js
app.listen(3000)
```