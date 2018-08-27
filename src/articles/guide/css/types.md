# Types
Le sélecteur de type en CSS permet d'appliquer un style particulier sur l'élément du même type se trouvant dans le code 
HTML. Ce sélecteur est donc très fréquemment utilisé pour définir le style à appliquer sur l'ensemble des éléments d'un 
type précis.

À titre d'exemple, si l'on définit une règle CSS qui sélectionne tous les éléments de type «&nbsp;`p`&nbsp;», comme cela
est le cas dans l'exemple de code ci-dessous, l'ensemble des éléments «&nbsp;`p`&nbsp;» se trouvant dans le code HTML 
seront visés et appliqueront le style défini par cette règle. Dans ce cas précis, le texte des paragraphes sera en 
gras.

```css
/* Sélectionne tous les éléments « p » dans le code HTML */
p {
  font-weight: bold
}
```
<iframe width="100%" height="150" src="//jsfiddle.net/antoinebeland/m9Lhu7nx/embedded/result/" 
allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Le sélecteur de type est donc très pratique et son utilisation doit être **préviligiée** par rapport aux [classes 
CSS](/guide/css/classes). Effectivement, il n'est pas toujours nécessaire de définir une classe CSS pour styliser 
certains éléments puisque cela a pour conséquence d'ajouter inutilement de la complexité dans le code HTML.

Lors de l'écriture d'une feuille de style CSS, vous devriez donc toujours **débuter** par styliser votre HTML en 
utilisant le sélecteur de type. Une fois que vous aurez couvert l'ensemble des cas où l'utilisation de ce 
sélecteur est appropriée, vous pourrez alors utiliser une classe CSS.

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Assurez-vous de définir des règles CSS précises lorsque vous effectuez des sélections hiérarchiques. En effet,
    n'hésitez pas à utiliser les éléments `>`, `+` ou `~`, ou `:first-child` et `:last-child` pour réaliser des 
    sélections plus pointues, afin de pouvoir utiliser la sélection de types et éviter de définir inutilement des 
    classes.
  </p>
<pre>
<code class="language-css">/&#42; Exemples &#42;/
main > p {}
main p:first-child {}
main p:last-child {}
main p + p {}</code>
</pre>
  </div>
</section>

## Quand utiliser ce sélecteur?
La première question que vous vous posez est sûrement la suivante: quand devait-on utiliser ce type de sélecteur?
La réponse courte à cette question est le plus souvent possible!

Sans surprise, lorsque vous souhaitez appliquer un style sur l'ensemble des éléments d'un même type,
vous allez utiliser ce sélecteur. Cela pourrait être par exemple de formater tous les titres `h1` en
italique dans votre document.

<section class="panel good">
  <div class="title">
    <h3><i class="fa fa-check-circle"></i> Bonne utilisation</h3>
  </div>
  <div class="content">
    <p>
      Cet exemple illustre une bonne utilisation d'un sélecteur de type pour appliquer un style particulier
      sur tous les titres de niveau 1 d'une page web.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">h1 {
&nbsp;&nbsp;font-size: 1.2em;
&nbsp;&nbsp;font-style: italic;
}</code>
</pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Titre 1&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Texte associ&eacute; au titre 1...&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Titre 2&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Texte associ&eacute; au titre 1...&lt;/p&gt;
&lt;/article&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="200" src="//jsfiddle.net/antoinebeland/zqvurj19/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

Il est également justifié d'utiliser le sélecteur de type lorsque l'élément à styliser est d'un type unique ou est facilement
sélectionnable sur la page. À titre d'exemple, si vous avez uniquement un élément `header` sur votre page web, il peut être 
inutile d'y ajouter une classe pour lui appliquer un style particulier. Ainsi, il serait préférable de sélectionner cet 
élément avec un sélecteur de type, particulièrement si le style de l'élément `header` ne pourra pas être réutilisé par 
d'autres éléments de la page.

<section class="panel good">
  <div class="title">
    <h3><i class="fa fa-check-circle"></i> Bonne utilisation</h3>
  </div>
  <div class="content">
    <p>
      Cet exemple montre une bonne utilisation d'un sélecteur de type pour sélectionner un élément unique sur une page web.
      Dans ce cas précis, il s'agit l'élément `header`. Puisque le style de cet élément ne sera pas réutilisé ailleurs,
      il est pertinent d'utiliser ce sélecteur pour appliquer le style. Autrement, il aurait été préférable d'utiliser une 
      [classe](/guide/css/classes).
    </p>
    <p>
      En plus de styliser l'élément `header`, un style particulier a été appliqué sur l'élément `h1`. Encore une fois, aucune
      classe n'a été définie pour appliquer ce style, seul un sélecteur hiérarchique visant le type `h1` a été utilisé.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">header {
&nbsp;&nbsp;position: absolute;
&nbsp;&nbsp;top: 0;
&nbsp;&nbsp;left: 0;
&nbsp;&nbsp;width: 100%;
&nbsp;&nbsp;padding: 10px;
&nbsp;&nbsp;background-color: #333;
}

header > h1 {
&nbsp;&nbsp;color: white;
&nbsp;&nbsp;font-size: 1.3em;
&nbsp;&nbsp;text-align: center;
}</code>
</pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;header&gt;
&nbsp;&nbsp;&lt;h1&gt;Mon super site web!&lt;/h1&gt;
&lt;/header&gt;
&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Nom de l'article&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Le texte de l'article...&lt;/p&gt;
&lt;/article&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="240" src="//jsfiddle.net/antoinebeland/2h16e07j/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

## Quand ne pas utiliser ce sélecteur?
Maintenant que vous avez vu quelques cas d'utilisation pertinents à l'utilisation de ce sélecteur, vous vous demandez sûrement 
quand ne pas l'utiliser. La réponse est la suivante: le sélecteur de type n'est habituellement pas adapté pour **sélectionner des 
éléments précis** d'une page web qui doivent être **stylisés différemment** des autres éléments du même type. 

Afin de bien comprendre les cas où la sélection de types ne serait pas adéquate, considérez l'exemple suivant. Il arrive souvent
de voir sur un site web un élément du menu qui est sélectionné en fonction de la page active du site, comme c'est le cas actuellement. 
Comme cet élément diffère par rapport aux autres éléments du même type, il n'est pas possible de distinguer cet élément qu'en utilisant 
son type. En effet, comme vous pouvez le constater dans l'exemple ci-dessous, comment faire pour distinguer l'élément
sélectionné des autres, considérant que celui-ci change toujours? Il faut donc utiliser une propriété supplémentaire pour le sélectionner afin de lui appliquer un style particulier; on utilisera
alors une classe CSS.  

```html
<nav>
  <ul>
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Tutoriels</a></li>
    <li><a href="#">Guide</a></li><!-- ⇐ Élément actif du site web. On doit utiliser un classe CSS! --> 
  </ul>
</nav>
```

En résumé, il est préférable d'utiliser une [classe](/guide/css/classes) dans le cas où l'on souhaite styliser un 
ou des éléments de manière particulière par rapport aux autres éléments qui sont du même type.
