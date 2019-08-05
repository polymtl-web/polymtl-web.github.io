# Unités de mesure

Le langage CSS offre une panoplie d'unités de mesure pouvant être utilisées pour définir des dimensions. Bien entendu, certaines sont mieux adaptées
au développement web, alors que d'autres sont plus appropriées pour les supports papier. Le tableau suivant montre justement les unités recommandées 
en fonction du support qui est utilisé.

| Support        | Unités recommandées        |
| -------------- |----------------------------|
| Écran          | em, px, %                  |
| Imprimante     | em, cm, mm, in, pt, pc, %  |

Dans votre cas, vous pouvez vous limiter aux **unités recommandées pour l'écran**. En effet, les autres unités n'ont pas d'intérêt à être utilisées lorsque
vous écrivez une feuille de style pour le web puisqu'elles sont adaptées pour des éléments de grande résolution (beaucoup de pixels par pouce [ppp]). De plus, 
le rendu à l'écran peut être différent d'un périphérique à un autre en utilisant les unités recommandées pour l'impression puisqu'aucun standard n'existe pour 
ces unités pour les écrans de faible résolution.

## Quelle est la différence entre une unité _absolue_ et _relative_?

Avant d'aller plus loin, il est important de comprendre la différence entre une unité _absolue_ et _relative_. 

Une unité _absolue_, telle que le **px**, s'affichera de la même manière partout. Effectivement, que vous ayez un écran ayant une résolution de 1080p ou un appareil 
mobile possédant une résolution de 360 x 538, un pixel restera un pixel. Bien entendu, il se peut qu'un pixel prenne plus d'espace sur un écran de plus faible 
résolution que sur un de plus grande. 

Une unité _relative_, comme le **em** et **%**, dépend de la taille d'autres éléments. 

L'unité **em** est basée sur la taille de la police de caractères qui est utilisée. En ce sens, si la taille de la police de caractère pour une section d'un document 
est de 12&nbsp;px, alors cela correspond à 1&nbsp;em. Dans cette même portion de document, si vous définissez la taille d'un élément à 0,75&nbsp;em, alors cela correspond 
à 9&nbsp;px. Comme vous pouvez le constater, cette unité est très flexible puisqu'elle se mettra automatiquement à jour en fonction de la taille de la police de base. 
Ainsi, si l'usager utilise une police de grande taille sur un plus grand écran, les éléments de votre site web s'adapteront automatiquement à cette taille. Ceci est 
également vrai pour les appareils mobiles qui utilisent habituellement une taille de police plus petite.
 
L'unité **%**, quant à elle, dépend de la taille des propriétés définies par l'élément parent. Ainsi, si l'élément parent a une largeur 120&nbsp;px et que vous définissez
la largeur de l'élément courant à 25%, cela correspond à 30&nbsp;px. De manière similaire, si l'élément parent a une taille de police de caractères de 16&nbsp;px et que 
vous définissez la taille de la police de l'élément actuel à 50%, cela correspond à 8&nbsp;px. Cette unité est donc pratique pour définir les dimensions d'un élément
qui dépend de la taille de son parent.

Le tableau suivant synthétise les informations qui ont été présentées.

| Unité | Type      | Description                                                                                                                                     |
|-------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| em    | Relative  | Dépend de la taille la police de caractères de l'élément (3&nbsp;em correspond à trois fois la taille de la police de caractères de l'élément). |
| px    | Absolue   | Un pixel correspond à 1/96 ème de pouce.                                                                                                        |
| %     | Relative  | Dépend des tailles définies par l'élément parent.                                                                                               |


## Quand utiliser une unité _absolue_ ou _relative_?

La question qui vous vient sûrement à l'esprit est la suivante: quand utiliser quoi? En effet, il peut être mêlant au début de savoir quelle unité utiliser. 

Le navigateur définit toujours la taille de la police de base qui doit être utilisée par le document. En ce sens, la taille de la police définie n'est habituellement pas 
la même sur les appareils mobiles que sur les ordinateurs conventionnels. Il est donc recommandé de vous baser sur cette taille pour définir la taille de vos polices de 
caractères, de vos marges et de vos _paddings_. Ainsi, vous devriez utiliser l'unité **em** pour définir ces éléments puisqu'ils s'adapteront automatiquement 
à la bonne taille.

Pour la définition d'éléments qui doivent avoir une taille fixe, vous devriez utiliser l'unité **px**. Cela peut être par exemple la taille d'une image, d'un
entête ou d'un pied de page.

Enfin, pour les éléments qui doivent être dimensionnées en fonction de la taille de leurs parents, vous devriez utiliser l'unité **%**.

Pour résumer les propos précédents, le tableau suivant montre les unités recommandées en fonction des éléments d'une page web.

| Éléments                                      | Unités recommandées |
|-----------------------------------------------|---------------------|
| Élément de taille invariante                  | px                  |
| Élément dépendant de la taille de son  parent | %                   |
| Marges et _paddings_                          | em, px              |
| Texte                                         | em                  |

Par souci de clarté, les deux exemples suivants montrent la mauvaise utilisation d'une unité absolue puis la bonne utilisation d'une unité relative.

<section class="panel wrong">
  <div class="title">
    <h3><i class="fa fa-ban"></i> Mauvaise utilisation</h3>
  </div>
  <div class="content">
    <p>Cet exemple montre une mauvaise utilisation de l'unité pixel. En effet, cette unité ne devrait par être utilisée pour définir la taille
    du texte, puisqu'elle ne s'adaptera pas à la taille de la police de base. Ainsi, le rendu sera beaucoup trop gros pour des écrans de petite
    taille.</p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">h1 { font-size: 28px; }
p { font-size: 20px; }

.small-screen { font-size: 10px; }                           
.large-screen { font-size: 14px; }</code></pre>
      </div>
      <div class="col">
        <pre><code class="language-html">&lt;div class=&quot;small-screen&quot;&gt;
&nbsp;&nbsp;&lt;h1&gt;Un long titre...&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Un long texte...&lt;/p&gt;
&lt;/div&gt;
&lt;div class=&quot;large-screen&quot;&gt;
&nbsp;&nbsp;&lt;h1&gt;Un long titre...&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Un long texte...&lt;/p&gt;
&lt;/div&gt;

        </code></pre>
      </div>
    </div>
    <iframe width="100%" height="380" src="//jsfiddle.net/antoinebeland/y7nkLw9o/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

<section class="panel good">
  <div class="title">
    <h3><i class="fa fa-check-circle"></i> Bonne utilisation</h3>
  </div>
  <div class="content">
    <p>Cet exemple reprend l'exemple précédent en utilisant l'unité em plutôt que pixel. Il s'agit d'un bon exemple puisque la taille du texte
    se met à jour automatiquement en fonction de la police de base définie. Ainsi, le texte sera bien visible sur les deux écrans.</p>
    <div class="row">
      <div class="col">
<pre>
<code class="language-css">h1 { font-size: 1.6em; }
p { font-size: 1.2em; }

.small-screen { font-size: 10px; }                           
.large-screen { font-size: 14px; }</code></pre>
      </div>
      <div class="col">
        <pre><code class="language-html">&lt;div class=&quot;small-screen&quot;&gt;
&nbsp;&nbsp;&lt;h1&gt;Un long titre...&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Un long texte...&lt;/p&gt;
&lt;/div&gt;
&lt;div class=&quot;large-screen&quot;&gt;
&nbsp;&nbsp;&lt;h1&gt;Un long titre...&lt;/h1&gt;
&nbsp;&nbsp;&lt;p&gt;Un long texte...&lt;/p&gt;
&lt;/div&gt;

        </code></pre>
      </div>
    </div>
    <iframe width="100%" height="380" src="//jsfiddle.net/antoinebeland/q8wt1Lsu/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</section>

Pour obtenir davantage d'information sur l'utilisation des unités de mesure en CSS, vous pouvez consulter ce [lien](https://www.w3.org/Style/Examples/007/units.fr.html).
