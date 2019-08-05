# Balises sémantiques

Une des nouveautés de HTML5 est l'ajout de balises sémantiques pour sectionner un document. Le tableau suivant illustre 
les principales balises qui ont été ajoutées: 

| Balise        | Description   |
| ------------- |---------------|
| [`article`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/article) | Représente du contenu **autonome** et **indépendant** pouvant être réutilisé à plusieurs endroits sur le site web. Cela peut être une parution sur un blogue, un commentaire d'un usager et un widget par exemple. |
| [`aside`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/aside) | Représente du contenu n'ayant pas de rapport direct avec le contenu principal. En d'autres mots, il s'agit d'un contenu **complémentaire**.   |
| [`footer`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/footer) | Représente le pied de page d'un document ou d'une section.     |
| [`header`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/header) | Représente l'entête d'un document ou d'un contenu introductif. |
| [`main`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/main)     | Représente le contenu principal de la page. Il est à noter que cette balise peut être utilisée **qu'une seule fois** par document. |
| [`nav`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav)      | Représente une section contenant des liens vers d'autres pages du site web. Cette balise regroupe donc les liens permettant de naviguer sur le site. |
| [`section`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section) | Représente une section générique d'un site. Le contenu de la section **n'est pas nécessairement** autonome et indépendant. |

Avant l'introduction des balises sémantiques, le sectionnement d'un document se faisait uniquement en utilisant la 
balise `div`. Or, l'usage de cette balise est maintenant à éviter pour réaliser le sectionnement, puisque celle-ci 
n'apporte pas d'information sur les sections d'un document. En ce sens, le `div` peut être utilisé **uniquement** s'il 
n'y a aucune autre balise sémantique qui est adaptée.

Lorsque vous balisez un document, assurez-vous d'utiliser la balise qui est adaptée en fonction de la section du 
document que vous sectionnez. Bien entendu, certaines balises sémantiques peuvent paraître très similaires et peuvent 
engendrer une certaine confusion, menant à une mauvaise utilisation de celles-ci. C'est le cas des balises `section`, 
`article` et `aside`. Les deux sous-sections qui suivent précisent leurs utilisations.

## Balises `section` et `article`

La balise `section` représente une section **générique** d'un document, c'est-à-dire une section qui regroupe du contenu
similaire et qui possède habituellement un titre. La balise `article`, quant à elle, possède les mêmes caractéristiques
que la balise précédente, en plus de posséder les spécificités suivantes: son contenu doit être **autonome** 
et **indépendant**. En bref, la balise `article` peut être vue comme un cas particulier de la balise `section`. La figure
suivante illustre d'ailleurs les propos précédents.

<img alt="Balises section et article" src="./assets/images/section-article.png">

En résumé, si le contenu de la section du document peut être réutilisé ailleurs sur le site web
et que cette même section est indépendante et complète, vous pouvez utiliser la balise `article`. Autrement, privilégier
l'utilisation de la balise `section`.

<section class="panel wrong">
  <div class="title">
    <h3><i class="fa fa-ban"></i> Mauvaise utilisation</h3>
  </div>
  <div class="content">
    <p>L'exemple ci-dessous montre une mauvaise utilisation des balises `section` et `article`. En effet, puisqu'il s'agit
     d'un contenu indépendant et possiblement réutilisable, il aurait été préférable d'utiliser la 
     balise `article` plutôt que la balise `section` pour définir l'article de blog. Également, puisque l'introduction 
     ne peut être séparée de l'article du blog, il aurait fallu utiliser la balise `section` plutôt que la balise `article`
     pour cette portion.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;section&gt;&lt;!-- Mauvaise utilisation de la balise &quot;section&quot; --&gt;
&nbsp;&nbsp;&lt;h1&gt;Article de blog&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Bonjour, ceci est un article de blog.&lt;/p&gt;
&nbsp;&nbsp;&lt;article&gt;&lt;!-- Mauvaise utilisation de la balise &quot;article&quot; --&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Introduction&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Texte d'introduction...&lt;/p&gt;
&nbsp;&nbsp;&lt;/article&gt;
&lt;/section&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="230" src="//jsfiddle.net/antoinebeland/c8mgarjy/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

<section class="panel good">
  <div class="title">
    <h3><i class="fa fa-check-circle"></i> Bonne utilisation</h3>
  </div>
  <div class="content">
    <p>L'exemple ci-dessous illustre une bonne utilisation des balises `section` et `article`. Puisque la section montrant
    les différents articles portant sur les recettes est dépendante de plusieurs autres éléments (les recettes), il faut 
    utiliser la balise `section`. Les fragments de recettes, eux, peuvent être définies avec la balise `article`, 
    car ils sont complets et pourraient être réutilisés ailleurs sur le site.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;section&gt;
&nbsp;&nbsp;&lt;h1&gt;Articles portant sur: &lt;em&gt;recette&lt;/em&gt;&lt;/h1&gt;
&nbsp;&nbsp;&lt;article&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Poulet au beurre&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Le poulet au beurre est une sp&eacute;cialit&eacute; indienne...&lt;/p&gt;
&nbsp;&nbsp;&lt;/article&gt;
&nbsp;&nbsp;&lt;article&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Contre-filet de boeuf&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Le contre-filet de boeuf...&lt;/p&gt;
&nbsp;&nbsp;&lt;/article&gt;
&lt;/section&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="260" src="//jsfiddle.net/antoinebeland/hu5qsyn0/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>  
  </div>
</section>

## Balise `aside`

La balise `aside` est utilisée pour présenter des informations complémentaires au contenu principal de la page. 
Cela peut être la biographie de l'auteur de l'article présenté ou des liens externes associés au contenu principal, par exemple.
Cette balise est souvent utilisée de façon incorrecte pour définir un panneau latéral (_sidebar_) qui n'a pas de lien
avec le contenu principal. 

<section class="panel wrong">
  <div class="title">
    <h3><i class="fa fa-ban"></i> Mauvaise utilisation</h3>
  </div>
  <div class="content">
    <p>L'exemple ci-dessous montre une mauvaise utilisation de la balise `aside`. Effectivement, la balise `aside` définit
    un panneau latéral qui n'a pas de lien direct avec l'article principal, puisque ce panneau contient les liens
    vers les articles disponibles sur le site web. Dans ce cas, il aurait été préférable d'utiliser la balise `section` 
    ou la balise `nav` pour définir cet élément.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;main&gt;
&nbsp;&nbsp;&lt;aside&gt;&lt;!-- Mauvaise utilisaton de l'&eacute;l&eacute;ment &quot;aside&quot; --&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a class=&quot;selected&quot; href=&quot;#&quot;&gt;Poulet au beurre&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Homard thermidor&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Boeuf bourguignon&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Soupe au poulet&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&lt;/aside&gt;
&nbsp;&nbsp;&lt;article&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Recette de poulet au beurre&lt;/h1&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Voici les ingr&eacute;dients n&eacute;cessaires pour la recette:&lt;/p&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;675 g de hauts de cuisses de poulet d&eacute;soss&eacute;s&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;45 ml de beurre&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;...&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&lt;/article&gt;
&lt;/main&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="240" src="//jsfiddle.net/antoinebeland/8qodprw0/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

<section class="panel good">
  <div class="title">
    <h3><i class="fa fa-check-circle"></i> Bonne utilisation</h3>
  </div>
  <div class="content">
    <p>L'exemple ci-dessous illustre une bonne utilisation de la balise `aside`. Dans cet exemple, le contenu de la 
    balise `aside` apporte une information complémentaire au contenu de l'article, ce qui est correct.</p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Un professeur de Polytechnique Montr&eacute;al se d&eacute;marque&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Le professeur XYZ s'est d&eacute;marqu&eacute; avec ses recherches sur...&lt;/p&gt;
&nbsp;&nbsp;&lt;aside&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Polytechnique Montr&eacute;al est un &eacute;tablissement d'enseignement sup&eacute;rieur fond&eacute; en 1873.&lt;/p&gt;
&nbsp;&nbsp;&lt;/aside&gt;
&lt;/article&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="200" src="//jsfiddle.net/antoinebeland/594bnush/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>
