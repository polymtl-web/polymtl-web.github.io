# Identifiants

L'utilisation d'identifiants (`#id`) est **à éviter** en CSS. En effet, vous ne devez pas utiliser d'identifiants 
si vous stylisez des éléments qui pourront être réutilisés sur une même page, puisque vous aurez à dupliquer inutilement 
du code CSS tout en compliquant inutilement sa maintenance. Dans ce cas, vous devriez privilégier l'utilisation de 
[sélecteurs d'éléments](./guide/css/elements) ou de [classes](./guide/css/classes).

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Il est à noter que le nom d'un identifiant doit être unique dans un document. Ainsi, vous pouvez utiliser un nom 
    d'identifiant particulier que sur un élément de votre code HTML.
  </p>
  </div>
</section>

<section class="panel wrong">
  <div class="title">
    <h2><i class="fa fa-ban"></i> Mauvaise utilisation</h2>
  </div>
  <div class="content">
    <p>Cet exemple illustre une mauvaise utilisation des identifiants en CSS puisqu'il y a du code dupliqué inutilement. Il aurait été préférable
    d'utiliser un sélecteur d'éléments ou une classe à la place.</p>
    <div class="row">
      <div class="col">
        <pre><code class="language-css">#p1 { font-weight: bold; }
#p2 { font-weight: bold; }</code></pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;p id=&quot;p1&quot;&gt;Bonjour, ceci est ...&lt;/p&gt;
&lt;p id=&quot;p2&quot;&gt;Ceci est ...&lt;/p&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="160" src="//jsfiddle.net/antoinebeland/vm1ysrxk/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

Un autre problème avec l'utilisation d'identifiants est sa spécificité. Puisque les identifiants possèdent la spécificité la plus élevée en CSS, 
il n'est pas possible d'outrepasser une propriété définie dans un identifiant par l'utilisation des sélecteurs d'éléments et de classes. Cela 
peut encore une fois complexifier inutilement le code ainsi que son débogage.

<section class="panel wrong">
  <div class="title">
    <h2><i class="fa fa-ban"></i> Mauvaise utilisation</h2>
  </div>
  <div class="content">
    <p>Cet exemple montre une mauvaise utilisation d'un identifiant CSS. Comme l'identifiant possède une spécificité très élevée, il n'est pas possible
    de modifier la couleur d'arrière-plan de l'élément via une classe.</p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">#div { background-color: #333; }
.active { background-color: #fff; }
</code></pre>
      </div>
      <div class="col">
        <pre><code class="language-html">&lt;div id=&quot;div&quot; class=&quot;active&quot;&gt;&lt;/div&gt;
        </code></pre>
      </div>
    </div>
    <iframe width="100%" height="180" src="//jsfiddle.net/antoinebeland/wf48pdzq/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

Dans certaines circonstances, l'utilisation d'identifiants peut être appropriée. Effectivement, si vous stylisez des éléments 
uniques où le code CSS ne pourra pas être réutilisé, l'utilisation d'identifiant est correcte. À titre d'exemple, si vous définissez la 
dimension d'une image unique sur une page, vous pouvez utiliser un identifiant.

<section class="panel good">
  <div class="title">
    <h2><i class="fa fa-check-circle"></i> Bonne utilisation</h2>
  </div>
  <div class="content">
    <p>L'exemple ci-dessous montre une bonne utilisation des identifiants CSS. Puisque les dimensions des différentes images sont 
    uniques et ne seront pas réutilisées ailleurs, il est correct d'utiliser des identifiants pour définir ces dimensions.</p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">#img1 { width: 100px; }
#img2 { width: 120px; }</code>
</pre>
      </div>
      <div class="col">
<pre>
<code class="language-html">&lt;img id=&quot;img1&quot; alt=&quot;Img1&quot; src=&quot;./img1.png&quot;&gt;
&lt;img id=&quot;img2&quot; alt=&quot;Img2&quot; src=&quot;./img2.png&quot;&gt;</code>
</pre>
      </div>
    </div>
    <iframe width="100%" height="160" src="//jsfiddle.net/antoinebeland/q4or9ysd/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>
