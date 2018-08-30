# MongoDB

Il est souvent très important pour une application Web de pouvoir garder des données de manière plus permanente. On peut penser aux identificateurs des utilisateurs, leurs informations personnelles ou toute autre information qu'on voudrait accéder de manière permanente.

Pour garder l'information, notre application Web aura besoin d'une base de données. Dans le cadre de ce tutoriel, nous allons utiliser **MongoDB**, une base de données NoSQL, c'est-à-dire une base de données non relationnelle. Le site officiel de [MongoDB](https://www.mongodb.com/) offre une documentation complète et la possibilité de télécharger le client **MongoDB** sur votre ordinateur pour avoir une base de données locale.

## Structure

**MongDB** est une base de données dite _orientée document_,c'est-à-dire que l'information est présentée sous la forme de documents. Un document est un regroupement d'informations sous la forme **Clé-Valeur**. Le schéma d'un document est dynamique, c'est-à-dire que les documents dans une même _collection_ n'ont pas besoin d'avoir la même structure (champs) et même les champs communs n'ont pas besoin d'avoir les mêmes types de valeurs.

Un _document_ est essentiellement un objet BSON : JSON binaire avec quelques types supplémentaires par rapport au format JSON standard. Les types acceptés du BSON sont les suivants : Double, Object, Array, Binary data,ObjectId, Boolean, Date, Null, Regular Expression,JavaScript, Symbol, 32-bit integer,Timestamp, 64-bit integer, Min key, Max key. Les seules contraintes sur le nom des champs sont qu'ils ne peuvent pas contenir : le point (**.**), le signe du dollar (**$**) ainsi que le caractère **null**.

Chaque document est identifié par une clé unique **\_id** de type _ObjectId_ avec une longueur de 12 bytes. Comme les 4 premiers bytes de cette valeur représente le temps de création, trier par **\_id** revient à trier par date de création des documents dans une collection. S'il n'est pas spécifié, **\_id** est inséré automatiquement par **MongoDB**.

Voici un exemple d'un document BSON :

```mongodb
{
    nom : {prenom :"Nikolay", famille:"Radoev"},
    age : 24,
    statut : "etudiant",
    cours : ["LOG2990","LOG4420","INF1010"]
}
```
Pour accéder à un variable qui est à l'intérieur d'une autre, on utilise la notation du point (**.**). Par exemple, pour avoir le prénom d'une personne, on doit le chercher avec **nom.prenom**,

**Attention** : la notation du point s'applique aussi pour les listes et les tableaux, contrairement à l'utilisation de **[ ] ** habituel. Donc, pour avoir le troisième cours, il faudrait faire **cours.2** et obtenir **INF1010**.

Une _collection_ dans **MongoDB** est un regroupement de plusieurs documents. Pour ceux et celles familiers avec des bases de données relationnelles, une collection est l'équivalent à une _table_. La particularité des collections est que les documents dans la collection ne sont pas nécessairement pareils. De manière générale, une collection contient des documents similaires ou qui traitent du même sujet.

Finalement, une ou plusieurs collections se retrouvent dans une _Database_. La database est tout simplement un conteneur pour les collections. Lorsqu'on a besoin de plus de puissance ou plus de place, une database peut être divisée en _shards_, c'est-à-dire des morceaux partagés sur des différentes machines qui représentent la database au complet.