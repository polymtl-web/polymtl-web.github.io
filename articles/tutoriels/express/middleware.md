# Middleware

Express fonctionne un peu comme une chaine de montage avec plusieurs étapes qui se terminent lorsqu'on envoie une réponse à la requête reçue par le serveur. À date, nous avons vu seulement des chaînes de montage d'un seule étape. Pour inclure d'autres étapes à notre chaîne, on fait usage des **Middleware** qui sont offerts par Express. 

Un **Middleware** se présente sous la forme suivante :

```js
var express = require('Express');
var app = express();

//Notre middleware
app.use('/about/',function(req,res,next){
    console.log("Le temps de la requête est : " + Date.now());
    next();
})

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

Si on lance notre serveur et on va sur les différentes pages, on peut voir que seulement la page '/about' produit une sortie dans la console. Ceci est dû au fait que la fonction **app.use** a le paramètre de la route qui définit où le **Middleware** est appliqué. Si jamais le paramètre est vide, le **Middleware** est appliqué sur toutes les routes.

Nous avons un nouveau paramètre dans la fonction de _callback_ de **app.use** : **next**. **next**, comme son nom l'indique, est la directive qui dit à notre **Middleware** de terminer et de passer à la prochaine étape à la chaîne de **Middleware**. Si **next** est appelé avec 'route', (**next('route')**), le contrôle est passé à la prochaine fonction qui gère la route et saute complètement tous les **Middleware** entre les deux.

Les **Middleware** peuvent aussi être utilisés dans un **Router** et ne sont valides que sur les méthodes dans le **Router**. L'utilisation reste exactement la même, sauf pour le saut de **Middleware** qui se fait plutôt avec **next('router')**.

L'ordre des **Middleware** est très important aussi. Ils sont exécutés dans l'ordre dans lesquels ils sont définis. Lorsqu'on avait présenté le routage, une notre importante était donnée pour des routes de type /* placées au début du fichier. Comme elles étaient définies en premier, elles étaient aussi exécutées en premier et on ne se rend jamais plus loin. Il est important d'être conscient de l'ordre de vos **Middleware** et de s'assurer qu'ils sont définis dans l'ordre dans lequel vous voulez qu'ils soient exécutés.

Voici un exemple concret de la séquence de **Middleware** que pouvez tester. Important à noter que les méthodes HTTP (get) sont aussi des **Middleware** et peuvent ne pas être la dernière étape de la chaîne de traitement.

```js
var express = require('express');
var app = express();

//Premier Middleware
app.use(function(req, res, next){
    console.log("Debut");
    next();
});

app.get('/home', function(req, res, next){
    console.log("Traitement de la requête");
    res.send("Traitement de la requête");
    next();
});

// Dernier Middleware
app.use('/home', function(req, res){
    console.log('Fin');
});

app.listen(3000);
```

Si on lance notre serveur et on va sur la page '/home', on peut voir que dans notre console, on a le message suivant :

```powershell
Debut
Traitement de la requête
Fin
```

Il existe un type spécifique de **Middleware** qui traite les erreurs. La fonction a une signature spécifique avec **4** paramètres et le premier est toujours **l'erreur** et le dernier est **next** qui doit **toujours** être spécifié, même s'il n'est pas appelé.
Voici un exemple d'un **Middleware** de traitement d'erreur :

```js
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Il y a quelque chose de brise!')
})
```

## Autres Middleware

Plusieurs **Middlware** sont maintenus par l'équipe d'ExpressJS, mais ne font pas partie d'Express en tant que tels. Certains d'entre eux sont très pratiques et vous pouvez trouver la liste complète avec leur documentation [ici](http://expressjs.com/en/resources/middleware.html). Dans le cadre de ce tutoriel, on va présenter **body-parser** qui est un **Middleware** très utile pour les requêtes HTTP, notamment les requêtes **POST** puisqu'il rajoute un **body** dans la requête. Le **body** d'une requête **POST** permet de passer de l'information supplémentaire.

Tout comme **Express**, **body-parser** doit être installé avant d'être disponible et il est disponible à travers **npm** avec la commande suivante : **npm install --save body-parser**. Ensuite, pour l'utiliser, on a besoin de **require('body-parser')**.

Voici un exemple simple qui permet d'illustrer l'utilisation de **body-parser**. À l'aide du **Middleware**, on est capable de lire la variable **username** dans le **body** de la requête :

```js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)

app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    var user = req.body.username
    console.log(user)
    res.send('welcome, ' + user)
})

app.listen(3000);
```

**body-parser** est aussi capable gérer d'autres types d'information, notamment du JSON et du texte simple. Pour plus d'information, vous pouvez regarder la [documentation de **body-parser**](http://expressjs.com/en/resources/middleware/body-parser.html).