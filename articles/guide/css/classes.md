# Classes
Les classes en CSS (`.classe`) sont très utiles pour appliquer un style particulier sur des éléments précis d'une page web. 
Effectivement, il est justifié d'utiliser une classe CSS pour appliquer un même style sur des types différents ou encore 
d'appliquer un style distinct sur un élément d'un type précis par rapport à ceux du même type.

<section class="panel good">
  <div class="title">
    <h2><i class="fa fa-check-circle"></i> Bonne utilisation</h2>
  </div>
  <div class="content">
    <p>
      Cet exemple illustre une bonne utilisation d'une classe CSS. Puisqu'il faut appliquer un style différent
      à l'élément actif et que ce même élément n'est pas sélectionnable en utilisant son type (`a`), la classe permet
      de distinguer facilement cet élément par rapport aux autres. Ainsi, il est possible de modifier la couleur ainsi
      que l'épaisseur du texte de l'élément sélectionné.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">.active {
&nbsp;&nbsp;color: green;
&nbsp;&nbsp;font-weight: bold;
}</code></pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;nav&gt;
&nbsp;&nbsp;&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Accueil&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Tutoriels&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a class=&quot;active&quot; href=&quot;#&quot;&gt;Guide&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&lt;/ul&gt;
&lt;/nav&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="150" src="//jsfiddle.net/antoinebeland/oyef2bhw/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>
 
Une classe peut également être utile pour regrouper une portion de code qui pourra être réutilisé sur plusieurs éléments
qui ont potentiellement un type différent. À cet effet, n'hésitez pas à scinder votre code CSS en plusieurs classes afin 
de maximiser sa réutilisabilité et d'éviter la duplication de celui-ci.

<section class="panel good">
  <div class="title">
    <h2><i class="fa fa-check-circle"></i> Bonne utilisation</h2>
  </div>
  <div class="content">
    <p>
      Cet exemple montre une bonne utilisation d'une classe CSS. En effet, une portion similaire de code a été isolée dans
      une classe pour permettre à différents éléments de se positionner à droite du document. Ainsi, une image et un bouton 
      peuvent utiliser cette classe afin modifier leur positionnement.
    </p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">.pull-right {
&nbsp;&nbsp;float: right;
}</code></pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;img class=&quot;pull-right&quot; alt=&quot;Img1&quot; src=&quot;#&quot;&gt;
&lt;button class=&quot;pull-right&quot;&gt;Cliquez-moi!&lt;/button&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="160" src="//jsfiddle.net/antoinebeland/cxksqyv9/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

Bien entendu, il y a certains cas où l'utilisation d'une classe n'est pas justifiée. En effet, il peut être parfois plus
approprié d'utiliser un [sélecteur de type](/guide/css/types) en utilisant une pseudo-classe pour appliquer le style désiré.
Également, il peut être plus approprié de modifier les balises du code HTML en les remplaçant par des balises ayant une sémantique
plutôt que d'utiliser des `div` ou des `span` ayant une classe CSS.


<section class="panel wrong">
  <div class="title">
    <h2><i class="fa fa-ban"></i> Mauvaise utilisation</h2>
  </div>
  <div class="content">
    <p>
      Cet exemple illustre une mauvaise utilisation d'une classe CSS. Bien entendu, le problème à la base provient du fait
      d'avoir choisi la balise `span` pour mettre en évidence la portion de texte. Puisque cette balise n'apporte pas d'information
      et est très générique, il fallait appliquer une classe afin de sélectionner le bon élément. Il aurait donc été préférable d'utiliser
      les balises sémantiques `mark` ou `em`, qui ont la fonction de mettre en évidence un passage de texte, puis d'appliquer
      un style sur ces éléments.
    </p>
    <div class="row">
      <div class="col">
        <pre><code class="language-css">.mark {
&nbsp;&nbsp;color: white;
&nbsp;&nbsp;background-color: green;
&nbsp;&nbsp;padding: 0.2em 0.3em;
}</code></pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;p&gt;
&nbsp;&nbsp;Un texte tr&egrave;s int&eacute;ressant ayant un passage 
&nbsp;&nbsp;&lt;span class=&quot;mark&quot;&gt;marquant&lt;/span&gt;.
&lt;/p&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="100" src="//jsfiddle.net/antoinebeland/twm0uq26/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>
