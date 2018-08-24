# MongoDB appliqué

Maintenant que vous c'est quoi la base de **MongoDB** et comment se connecter à votre base de données, il est temps d'apprends comment ajouter et lire l'information sur la base de données. On vous recommande fortement de lire la section sur **Mlab** pour savoir comment se connecter. 

Pour pouvoir intéragir avec la base de données, il faudrait maintenir une connection avec. La fonction **connect** offre la possibilité d'avoir une fonction _callback_ qui est executé dès que la connection est établie. Si vous voulez accéder à vos données, c'est à l'intérieur de cette fonction que vous devez mettre votre code. Lorsque vous terminez vos manipulations, il ne faut pas oublier de fermer la connection avec la fonction **close**.


## Ajouter des documents

Pour ajouter des documents dans **MongoDB**, il existe deux fonctions : **insertOne(object, callback)** et **insertMany(object, callback)**. Comme leur noms l'indiquent, la première fonction permet d'ajouter un seul élément et la deuxième permet d'ajouter un tableau de documents d'un seul coup.

Les deux fonctions partagent la même signature et peuvent appeler la fonction _callback_ pour avoir plus d'information sur le résultat de la requête. Il est important de noter que la signature de la fonction _callback_ doit être la suivante : **function(error, result)** avec _error_ comme premier paramètre.

Pour mieux comprendre le fonctionnement, voici un exemple. Avant de le lancer, assurez vous d'avoir crée une _collection_ sur votre base de données sur **Mlab**. Vous pouvez l'appeler comme vous voulez, mais on vous recommande le nom **cours** pour garder une certainne logique dans le programme. Créez un fichier **mongoInsert.js** et mettez le code suivant :

```js
var MongoClient = require('mongodb').MongoClient;

var DB_USER = "userName";
var DB_PASSWORD = "userPassword";
var DB_DB = "dataBaseName";
var DB_HOST = "ds[6 chiffres].mlab.com";
var DB_PORT = "dbPort";

var DB_URL = "mongodb://" + DB_USER + ":" + DB_PASSWORD + "@" + DB_HOST + ":" + DB_PORT + "/" + DB_DB;

MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
	db = client.db(DB_DB);
	var cours = db.collection("cours");
	
	var log2990 = { sigle : "LOG2990", credits : 3};
	cours.insertOne(log2990,function(error,res){
		if (err) throw err;
    	console.log("document inserée");
	})

	var nouveauxCours = [
		{ sigle : "LOG4420", credits : 3},
		{ sigle : "INF1010", credits : 2},
		{ sigle : "LOG4900", credits : 6}
	];
	cours.insertMany(nouveauxCours,function(error,res){
		if (err) throw err;
    	console.log("documents inserées");
	})
	client.close();
})
```

Si vous lancez le script, vous devez avoir les 2 messages de confirmation d'insertion dans la console et si vous allez sur l'interface **Mlab**, votre collection devrait maintenant contenir 4 nouveaux documents.

## Retrouver des documents

Si on veut chercher de l'information de la base de données, on peut utiliser la fonction **find**. Le premier paramètre de **find** est optionel et un paramètre de filtrage qui indique le filtre qu'on veut appliquer sur les données d'une collection. Si on ne fournit pas un paramètre, la fonction **find** nous retourne la collection au complet. Le deuxième paramêtre est un paramètre optionel de filtrage sur les valeurs des documents dans une collection. Pour chaque champ du document, on peut spécifier _1_ ou _0_ pour signifier qu'on veut l'inclure ou exclure respectivement. Cest est appelé la **projection** et nécessite le mot clé **projection**.

Par exemple, si on veut uniquement avoir le sigle d'un cours, on peut fournir  _{projection: { sigle : 1, _id : 0}}_ comme parmêtre.

 **Attention** : vous ne pouvez pas mélanger les inclusions et exclusions des paramêtres dans la même méthode **find**, SAUF si un des paramètres est **_id**. Exemple : _{projection: {sigle : 1, credits : 0}}_ n'est pas une notation valide.

Voici donc un exemple de comment obtenir seulement tous les sigles de cours de la collection **cours** de votre base de données: 

```js
MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
	db = client.db(DB_DB);
	var cours = db.collection("cours");
	cours.find({}, {projection :{ sigle: 1, _id : 0}}).toArray((err,res)=>{
		console.log(res)
	});
	
	client.close();
})
```
