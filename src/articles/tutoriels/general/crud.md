# Méthodes HTTP

Le standard HTTP/1.1 définit plusieurs méthodes (parfois appelés verbes) pour définir les différentes actions qui peuvent être prises avec des requêtes HTTP. Il y a 9 méthodes différentes, mais nous alons nous concentrer sur les 4 principaux : **GET,POST,PUT,DELETE**. Vous pouvez trouver la liste complète [ici](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## GET

La méthode **GET** demande une ou plusieurs données. Les requêtes **GET** devrait préférablement être utilisés afin de récupérer des données. 

## POST

La méthode **POST** sert à envoyer de l'information vers une ressource spécifiée. Ceci cause un changement d'état ou des modifications des donnés du côté du serveur. En général, l'information se trouve à l'intérieur du **body** de la requête. Pour plus d'information, lisez la section **Middleware** du tutoriel pour voir comment on peut retrouver cette information avec **Express**.

## PUT

La méthode **PUT** permet de remplacer ou modifier une ou plusieurs données. La différence entre **POST** et **PUT** est parfois ambigüe, mais **PUT** est à priviligier lorsqu'on veut modifier de l'information existante et **POST** lorsqu'on veut créer plus de données ou envoyer de l'information.

## DELETE

La méthode **DELETE** permet de supprimmer une ou plusieurs ressources spécifiées par la requête.


Pour mieux comprendre l'utilisation des différentes méthodes HTTP, vous pouvez vous baser sur l'exemple suivant. Dans cette application Web simple, nous avons une liste de cours qui sont représentés par leurs _sigle_ et leur nombre de _credits_. 

Il y a deux méthodes **GET** qui permettent d'avoir la totalité des cours sur le serveur ou un cours en particulier. 

La méthode **POST** permet de créer un nouveau cours en spécifiant son _sigle_ et ses _credits_. 

La méthode **PUT** permet de modifier le nombre de crédits d'un cours en particulier et s'assure que le cours à modifier existe dans la liste. 

Finalement, **DELETE** permet de supprimer un cours et notife l'utilisateur si jamais la suppression n'a pas été effectuée.

```js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var listeDeCours = [{sigle :"LOG2990",credits : 6},{sigle : "LOG4420",credits : 3}];

app.get('/obtenirCours',function(req,res){
	res.send(listeDeCours);
})

app.get('/obtenirCours/:sigle',function(req,res){
	var cours = listeDeCours.find((c)=>{ return c.sigle === req.params.sigle})
	res.send(cours)
})

app.post('/ajouterCours', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  var cours = { sigle : req.body.sigle, credits : req.body.credits}
  listeDeCours.push(cours);
  res.send(cours.sigle + ' a été ajouté')
})

app.delete('/supprimerCours/:sigle',function(req,res){
	var taille = listeDeCours.length;
	listeDeCours = listeDeCours.filter((c) => c.sigle !== req.params.sigle);
	if(taille > listeDeCours.length)
		res.send('Cours supprimé.')
	else
		res.send('Echec de suppression')
})

app.put('/modifierCours/',urlencodedParser,function (req,res){
	var cours = listeDeCours.find((c)=>{ return c.sigle === req.body.sigle})
	if((!cours)) return res.send('Ce cours n\'existe pas')
	cours.credits = req.body.credits
	res.send('Cours modifié')
})

app.listen(3000);

```

Pour pouvoir tester l'application Web et surtout vos requêtes HTTP, on vous recommande des outils comme [cURL](https://curl.haxx.se/), un outil en ligne de commande ou [Postman](https://www.getpostman.com/) un outil très développé qui vient avec une interface graphique et une bonne documentation.