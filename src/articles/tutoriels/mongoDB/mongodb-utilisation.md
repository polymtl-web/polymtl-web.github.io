# MongoDB appliqué

Maintenant que vous savez c'est quoi la base de **MongoDB** et comment se connecter à votre base de données, il est temps d'apprends comment ajouter et lire l'information sur la base de données. On vous recommande fortement de lire la section sur **Mlab** pour savoir comment se connecter. 

Pour pouvoir interagir avec la base de données, il faudrait maintenir une connexion avec. La fonction **connect** offre la possibilité d'avoir une fonction _callback_ qui est executé dès que la connexion est établie. Si vous voulez accéder à vos données, c'est à l'intérieur de cette fonction que vous devez mettre votre code. Lorsque vous terminez vos manipulations, il ne faut pas oublier de fermer la connexion avec la fonction **close**.

Note importante : **MongoDB** et son module Node évoluent rapidement et font souvent des changements majeurs qui brisent la rétrocomptabilité. Ce guide a été créé avec la version 3.1 du module Node. Si vous cherchez des exemples ou des clarifications sur l'Internet, assurez-vous de tenir compte de votre version ainsi que la version donnée dans les exemples.

## Ajouter des documents

Pour ajouter des documents dans **MongoDB**, il existe deux fonctions : **insertOne(object, callback)** et **insertMany(object, callback)**. Comme leur noms l'indiquent, la première fonction permet d'ajouter un seul élément et la deuxième permet d'ajouter un tableau de documents d'un seul coup.

Les deux fonctions partagent la même signature et peuvent appeler la fonction _callback_ pour avoir plus d'information sur le résultat de la requête. Il est important de noter que la signature de la fonction _callback_ doit être la suivante : **function(error, result)** avec _error_ comme premier paramètre.

Pour mieux comprendre le fonctionnement, voici un exemple. Avant de le lancer, assurez-vous d'avoir créé une _collection_ sur votre base de données sur **Mlab**. Vous pouvez l'appeler comme vous voulez, mais on vous recommande le nom **cours** pour garder une certaine logique dans le programme. Créez un fichier **mongoInsert.js** et mettez le code suivant :

```js
var MongoClient = require('mongodb').MongoClient;

var DB_USER = "userName";
var DB_PASSWORD = "userPassword";
var DB_DB = "dataBaseName";
var DB_HOST = "ds[6 chiffres].mlab.com";
var DB_PORT = "dbPort";

var DB_URL = "mongodb://" + DB_USER + ":" + DB_PASSWORD + "@" + DB_HOST + ":" + DB_PORT + "/" + DB_DB;

MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
    var db = client.db(DB_DB);
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

Si on veut chercher de l'information de la base de données, on peut utiliser la fonction **find**. Le premier paramètre de **find** est optionnel et un paramètre de filtrage qui indique le filtre qu'on veut appliquer sur les données d'une collection. Si on ne fournit pas un paramètre, la fonction **find** nous retourne la collection au complet. 

### Requêtes

**MongoDB** permet de chercher des données à travers des requêtes ciblées pour avoir seulement les données voulues. Pour faire ceci, on utilise les opérateurs de requêtes (_query operator_) disponibles. Vous pouvez trouver la liste complète sur la [documentation de MongoDB](https://docs.mongodb.com/manual/reference/operator/query/).

Chaque opérateur s'écrit avec **$** qui le précède. Certains opérateurs ont des sous-opérateurs comme **$text** qui contient **$search** et qui est utilisé pour faire une recherche textuelle dans les données (trouver tous les documents qui contiennent entièrement ou partiellement un texte).

Les opérateurs les plus utiles sont les suivantes :

**Opérateurs logiques **
- **$and** : permets de joindre plusieurs requêtes ensemble et retourne seulement les documents qui satisfont toutes les requêtes. Exemple : **find( $and : [ { sigle : /^LOG/ }, { credits : {$lt : 4} } ] )** qui cherche tous les cours qui ont un sigle qui commence par **LOG** _ET_ qui ont moins que 4 crédits.
- **$not** : inverse le sensé d'une requête et retourne les documents qui ne correspondent pas à la requête
- **$or** : permets de joindre plusieurs requêtes ensemble et retourne les documents qui satisfont au moins une requête.
Exemple : **find( $or : [ { sigle : /^LOG/ }, { credits : {$lt : 4} } ] )** qui cherche tous les cours qui ont un sigle qui commence par **LOG** _OU_ qui ont moins que 4 crédits.

**Opérateurs de comparaison**
- **$eq** : effectue une comparaison d'égalité
- **$gt** : effectue une comparaison de type _strictement plus grand_
- **$gte** : effectue une comparaison de type _plus grand ou égal_
- **$lt** : effectue une comparaison de type _strictement plus petit_
- **$lte** : effectue une comparaison de type _plus petit ou égal_
- **$in** : effectue une comparaison avec les éléments fournis dans un tableau. Ex : **find( sigle :{$in: ["LOG2990","LOG4420"] } )** retourne seulement les cours dont le sigle est **LOG2990** ou **LOG4420**.
- **$nin** : l'inverse de **$in** et retourne les documents qui ne correspondent pas aux critères fournis dans le tableau.

Plusieurs opérateurs de comparaison peuvent être utilisés ensemble ou de manière imbriquée. Par exemple, si on veut trouver tous les cours qui ont plus que 2 crédits _ET_ moins que 5 crédits, on peut utiliser la requête suivante :
```js
MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
    var db = client.db(DB_DB);
    var cours = db.collection("cours");
    cours.find( {credits : {$gt : 2, $lt : 5} }).toArray((err,res)=>{
        console.log(res)
    });
    client.close();
})
```
### Projection
Le deuxième paramètre est un paramètre optionnel de filtrage sur les valeurs des documents dans une collection. Pour chaque champ du document, on peut spécifier _1_ ou _0_ pour signifier qu'on veut l'inclure ou exclure respectivement. Ceci est appelé la **projection** et nécessite le mot clé **projection** (seulement à partir de la version 3.0 de Mongo).

Par exemple, si on veut uniquement avoir le sigle d'un cours, on peut fournir _{projection: { sigle : 1, _id : 0}}_ comme paramètre.

**Attention** : vous ne pouvez pas mélanger les inclusions et exclusions des paramètres dans la même méthode **find**, SAUF si un des paramètres est **_id**. Exemple : _{projection: {sigle : 1, credits : 0}}_ n'est pas une notation valide.

Voici donc un exemple de comment obtenir seulement tous les sigles de cours de la collection **cours** de votre base de données: 

```js
MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
    var db = client.db(DB_DB);
    var cours = db.collection("cours");
    cours.find({}, {projection :{ sigle: 1, _id : 0}}).toArray((err,res)=>{
        console.log(res)
    });
    
    client.close();
})
```

### Trier les résultats

Après avoir obtenu les résultats de la recherche, vous pouvez trier les résultats de manière descendante ou ascendante à l'aide de la fonction **sort(criteria)** ou **criteria** est un objet qui définit le champ du document surlequel le tri s'effectue et le type de tri. Le type de tri est décidé par un paramètre qui est de 1 pour un ordre **ascendant** et -1 pour un ordre **descendant**. 

Voici donc comment on peut trier nos cours en ordre descendant selon leur nombre de crédits :

```js
MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
    var db = client.db(DB_DB);
	var cours = db.collection("cours");
	var tri = { credits : -1}
    cours.find({}).sort(tri).toArray((err,res)=>{
        console.log(res)
    });
    
    client.close();
})
```

La méthode **sort** peut être enchaînée plusieurs fois et l'ordre de tri se fait de gauche à droit. Par exemple, on pourrait trier nos cours par leur nombre de crédits et en ordre alphabétique ensuite en faisant :

```js
cours.find({}).sort( {credits : -1}).sort( {sigle : 1})
```

## Mettre à jour des documents

Pour modifier des documents dans **MongoDB**, il existe deux fonctions : **updateOne(query, newValues, callback)** et **udapteMany(query, newValues, callback)**. Comme leurs noms l'indiquent, la première fonction permet de modifier un seul élément et la deuxième permet de modifier tous les documents visés d'un seul coup.

Le paramètre **query** permet de spécifier quel(s) document(s) modifier sous la forme d'une requête. La manière de créer la requête est la même que dans la section **Retrouver des documents**. 

Le paramètre **newValues** spécifie les nouvelles valeurs après la modification. L'objet fourni contient le mot clé **$set** permettant de spécifier les changements. Par exemple, pour change le nombre de crédits du cours **LOG2990** à **8** crédits, voici la fonction à utiliser :

```js
MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
    var db = client.db(DB_DB);
    var cours = db.collection("cours");
    var query = { sigle : "LOG2990"}
    var nouveauxCredits = {$set : {credits : 8}}
    cours.updateOne(query, nouveauxCredits,function(err,res){
        if (err) throw err;
    })
    
    client.close();
})
```

Outre que **$set**, vous pouvez utiliser d'autres opérateurs pour modifier un ou plusieurs documents :
- **$inc** : incrémente la valeur du champ par le paramètre fourni
- **$mul** : multiplie la valeur du champ par le paramètre fourni
- **$rename** : renome le champ
- **$unset** : retire le champ spécifié du document

Pour les tableaux, les opérateurs suivants sont disponibles :
- **$pop** : enlève le premier ou le dernier élément d'un tableau. Pour spécifier lequel, on utilise **-1** et **1** pour le premier et le dernier respectivement. Exemple : **{ $pop : { monTableau: -1}}** enlève le premier élément du tableau **monTableau**.
- **$push** : ajoute un élément à la fin du tableau
- **$pull** : enlève tous les éléments du tableau qui correspondent aux critères fournis. Exemple : **{ $pull : { monTableau: 5}}** enlève tous éléments qui ont la valeur **5** du tableau **monTableau**.

Les fonctions de mise à jour permettent aussi de créer le document s'il n'est pas trouvé par la requête initiale. Por faire ceci, il faut inclure l'option **{upsert : true}** comme paramètre, entre les nouvelles valeurs et la fonction de _callback_. Le mot clé **$setOnInsert** peut être utilisé et va s'exécuter seulement si le document a été crée après un échec de le trouver.

## Supprimer des documents

Pour supprimer des documents dans **MongoDB**, il existe deux fonctions : **deleteOne(query, callback)** et **deleteMany(query,callback)**. Comme leurs noms l'indiquent, la première fonction permet de supprimer un seul élément et la deuxième permet de supprimer tous les documents visés d'un seul coup.

Le paramètre **query** permet de spécifier quel(s) document(s) modifier sous la forme d'une requête. La manière de créer la requête est la même que dans la section **Retrouver des documents**. 

Voici donc un exemple pratique de l'utilisation de la fonction **deleteOne** : 

```js
MongoClient.connect(DB_URL,{useNewUrlParser : true}, function(err,client){
    var db = client.db(DB_DB);
    var cours = db.collection("cours");
    var query = { sigle : "LOG2990"}
    var nouveauxCredits = {$set : {credits : 8}}
    cours.deleteOne(query, function(err,res){
		if (err) throw err;
		console.log("un document supprimé");
    })
    client.close();
})
```

Si vous voulez supprimer toute une collection au complet, vous pouvez appeler la fonction **drop** sur la collection. Cette fonction prend seulement une fonction de _callback_ en paramètre et la fonction _callback_ prend l'erreur de l'exécution ainsi que le résultat. Le résultat retourne **true** si la collection a été supprimée et **false** sinon.

# Exercice

Maintenant que vous connaissez mieux **MongoDB**, vous pouvez le mettre en application. Dans la section **Méthodes HTTP**, le concept de _CRUD_ a été introduit à travers un exemple complet. Dans cet exemple, un simple tableau d'objet a été utilisé pour garder l'information. Il est maintenant à votre tour de reprendre cet exemple et transférer l'information sur une base de données **MongoDB** ainsi que modifier le code pour intégrer l'interaction avec votre base de données et votre serveur.