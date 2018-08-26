# Types
Le sélecteur de type en CSS permet d'appliquer un style particulier sur les éléments lui correspondant dans le code 
HTML. Ce sélecteur est donc très fréquemment utilisé pour définir le style à appliquer sur l'ensemble des éléments d'un 
type précis.


À titre d'exemple, si l'on définit une règle CSS qui sélectionne tous les éléments de type «&nbsp;`p`&nbsp;», comme cela
est le cas dans l'exemple de code ci-dessous, l'ensemble des éléments «&nbsp;`p`&nbsp;» se trouvant dans le code HTML 
seront visés et appliqueront le style défini par cette règle. Dans ce cas précis, le texte des paragraphes seront en gras.

```css
/* Sélectionne tous les éléments « p » dans le code HTML */
p {
  font-weight: bold
}
```
<iframe width="100%" height="150" src="//jsfiddle.net/antoinebeland/m9Lhu7nx/embedded/result/" 
allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Le sélecteur de type est donc très pratiques et son utilisation doit être **préviligié** par rapport aux [classes 
CSS](/guide/css/classes). Effectivement, il n'est pas toujours nécessaire de définir une classe CSS pour styliser 
certains éléments puisque cela a pour conséquence d'ajouter inutilement de la complexité dans le code HTML.

Lors de l'écriture d'une feuille de style CSS, vous devriez donc toujours **débuter** par styliser votre HTML en 
utilisant le sélecteur de type. Une fois que vous aurez couvert l'ensemble des cas où l'utilisation de ce 
sélecteur est appropriée, vous pourrez alors utiliser une classe CSS.

## Quand utiliser ce sélecteur?
La première question que vous vous posez est sûrement la suivante: quand devait-on utiliser ce type de sélecteur?
La réponse courte à cette question est le plus souvent qu'on peut!






## Quand ne pas utiliser ce sélecteur?
Maintenant que vous savez quand utiliser ce sélecteur, vous vous demandez sûrement quand ne pas l'utiliser. 
