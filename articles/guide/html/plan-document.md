# Plan du document
Le plan du document (_outline_) correspond en quelque sorte à la table des matières d'un document HTML. En effet, ce plan 
permet d'avoir un aperçu de la structure d'un document et de visualiser les sections importantes de celui-ci. Il est
habituellement utilisé par des moteurs de recherche ou des outils d'assistance (p. ex. lecteur d'écran). Il est donc important que vous 
vous assuriez que le plan de votre document soit correct afin que celui-ci soit accessible et bien structuré. Vous pouvez valider
le plan de votre document HTML en utilisant cet [outil](https://gsnedders.html5.org/outliner/).

Le plan du document est généré à l'aide des balises sectionnantes de HTML, c'est-à-dire les balises sémantiques `section`, 
`article`, `aside` et `nav`, en plus des balises de titre, soient `h1`, `h2`, `h3`, `h4`, `h5` et `h6`. Avec l'arrivée de HTML5, 
il est conseillé de réaliser le sectionnement en utilisant **uniquement** les balises sémantiques puisque cela clarifie beaucoup 
la structure de la page.

Lors de l'utilisation des balises sémantiques pour réaliser le sectionnement du document, les niveaux de titre utilisés n'ont plus 
vraiment d'importance. Cependant, [les spécifications d'HTML5](http://w3c.github.io/html/sections.html#headings-and-sections) encouragent 
que les niveaux de titre correspondent au niveau d'imbrication de la section. Cela signifie que la première section devra avoir un titre 
de niveau 1 (`h1`), la section imbriquées dans la première devra avoir un titre de niveau 2 (`h2`) et ainsi de suite.

<section class="panel good">
  <div class="title">
    <h2><i class="fa fa-check-circle"></i> Bonne utilisation</h2>
  </div>
  <div class="content">
    <p>Cet exemple montre le sectionnement d'une page HTML en utilisant les balises sémantiques. Également, les niveaux de titre utilisés
    suivent les recommandations de HTML5: la première section a un titre de niveau 1, les sections directement imbriqués ont un titre de niveau 2, etc.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Titre de la page&lt;/h1&gt;
&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Introduction&lt;/h2&gt;
&nbsp;&nbsp;&lt;/section&gt;
&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;D&eacute;veloppement&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Partie 1&lt;/h3&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Partie 2&lt;/h3&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt;  
&nbsp;&nbsp;&lt;/section&gt;
&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Conclusion&lt;/h2&gt;
&nbsp;&nbsp;&lt;/section&gt;
&lt;/article&gt;</code>
</pre>
      </div>
      <div class="col">
      <pre>
        <code><ol><li>Titre de la page<ol><li>Introduction</li><li>Développement<ol><li>Partie 1</li><li>Partie 2</li></ol></li><li>Conclusion</li></ol></li></ol></code>
      <pre>
      </div>
    </div>
    <iframe width="100%" height="300" src="//jsfiddle.net/antoinebeland/uk2cbs4y/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>  
  </div>
</section>

Une des erreurs communes lors de l'écriture d'un document HTML est l'utilisation inutile de balises sectionnantes, tels que les balises `article` 
et `section`. Effectivement, certains peuvent abuser de ces balises dans leur code ce qui crée inutilement des entrées non pertinentes dans le plan de document.
En ce sens, avant d'utiliser une balise sectionnante, assurez-vous que son utilisation est justifiée.

<section class="panel wrong">
  <div class="title">
    <h2><i class="fa fa-ban"></i> Mauvaise utilisation</h2>
  </div>
  <div class="content">
    <p>Cet exemple montre l'utilisation inutile d'une balise sectionnante dans un document. Cela mène à un ajout
    inutile dans le plan du document (<em>Untitled Section</em>). Il n'aurait donc pas fallu ajouter cette section
    puisqu'elle n'apporte rien.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Un super article!&lt;/h1&gt;
&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Section 1&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Utilisation inutile d'une section --&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Un paragraphe...&lt;/p&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Un autre paragraphe...&lt;/p&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt;
&nbsp;&nbsp;&lt;/section&gt;
&lt;/article&gt;</code>
</pre>
      </div>
      <div class="col">
      <pre>
        <code><ol><li>Un super article!<ol><li>Section 1<ol><li><i>Untitled Section</i></li></ol></li></ol></li></ol></code>
      <pre>
      </div>
    </div>
    <iframe width="100%" height="220" src="//jsfiddle.net/antoinebeland/rp2ugt8e/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

Une autre erreur commune est l'utilisation inutile d'une balise de titre. Tout comme les balises sémantiques présentées un peu plus haut, l'utilisation
d'un titre peut créer une entrée dans le plan du document. Assurez-vous donc de mettre uniquement les informations qui doivent apparaître dans le
plan du document dans une balise de titre.


<section class="panel wrong">
  <div class="title">
    <h2><i class="fa fa-ban"></i> Mauvaise utilisation</h2>
  </div>
  <div class="content">
    <p>Cet exemple illustre l'utilisation non justifiée d'un élément de titre. En effet, il n'est pas pertinent d'indiquer le nom de l'auteur
    de l'article dans un titre, puisque cela crée inutilement une entrée dans le plan du document. Il aurait été préférable d'utiliser la balise
    `p` pour mettre le nom de l'auteur, puis d'utiliser une règle CSS particulière si l'on souhaitait le styliser différemment.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-html">&lt;article&gt;
&nbsp;&nbsp;&lt;h1&gt;Article int&eacute;ressant&lt;/h1&gt;
&nbsp;&nbsp;&lt;!-- Utilisation non justifi&eacute;e d'un titre --&gt;
&nbsp;&nbsp;&lt;h3&gt;Par Jean Tremblay&lt;/h3&gt;
&nbsp;&nbsp;&lt;p&gt;...&lt;/p&gt;
&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Section 1&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;...&lt;/p&gt;
&nbsp;&nbsp;&lt;/section&gt;
&nbsp;&nbsp;&lt;section&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Section 2&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;...&lt;/p&gt;
&nbsp;&nbsp;&lt;/section&gt;
&lt;/article&gt;</code>
</pre>
      </div>
      <div class="col">
      <pre>
        <code><ol><li>Article intéressant<ol><li>Par Jean Tremblay</li><li>Section 1</li><li>Section 2</li></ol></li></ol></code>
      <pre>
      </div>
    </div>
    <iframe width="100%" height="320" src="//jsfiddle.net/antoinebeland/2x8nszfq/15/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>
