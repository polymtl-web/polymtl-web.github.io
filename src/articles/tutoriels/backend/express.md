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
}).listen(3000, function());
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