# Couleurs

Il existe plusieurs manières de représenter des couleurs en CSS. Le tableau suivant montre les notations
possibles pouvant être utilisées: 

| Notation                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `#RRGGBB[AA]`                                                                        | Notation hexadécimale permettant de représenter un triplet [RGB](https://fr.wikipedia.org/wiki/Rouge_vert_bleu). Chacun des éléments du triplet comporte deux chiffres hexadécimaux pour représenter des valeurs entre 0 et 255. Il est également possible de spécifier une composante alpha.                                                                              |
| `#RGB[A]`                                                                            | Notation hexadécimale simplifiée permettant de représenter un triplet [RGB](https://fr.wikipedia.org/wiki/Rouge_vert_bleu). Cette représentation est utile pour abréger les couleurs dont les deux chiffres hexadécimaux sont identiques (p. ex. `#0099cc` devient `#09c`). Tout comme la notation précédente, il est possible de spécifier une composante alpha.          |
| <code>rgb(R,&nbsp;G,&nbsp;B)</code> ou <code>rgba(R,&nbsp;G,&nbsp;B,&nbsp;A)</code>  | Notation décimale permettant de représenter un triplet [RGB](https://fr.wikipedia.org/wiki/Rouge_vert_bleu). Chacune des valeurs du triplet doit être un nombre entre 0 et 255. Il est également possible de spécifier une composante alpha comme quatrième paramètre.                                                                                                     |
| <code>hsl(H,&nbsp;S,&nbsp;L)</code> ou <code>hsla(H,&nbsp;S,&nbsp;L,&nbsp;A)</code>  | Notation décimale permettant de représenter un triplet [HSL](https://fr.wikipedia.org/wiki/Teinte_saturation_luminosit%C3%A9). La valeur de `H` est exprimée en degrés (entre 0 et 360 degrés) alors que les paramètres `S` et `L` sont exprimés en pourcentage (entre 0% et 100%). Tout comme la représentation `rgb`, il est possible de spécifier une composante alpha. |
| Nom de la couleur (mot-clé)                                                          | Mot-clé en CSS représentant une couleur. Contrairement aux autres notations qui permettent de représenter un grand nombre de couleurs, seule une centaine sont définies comme cela (p. ex. `black`, `aliceblue`, `gold`, etc.). Voir la [liste exhaustive](https://developer.mozilla.org/fr/docs/Web/CSS/Type_color).                                                      |

Bien que toutes ces notations peuvent être utilisées en CSS, certaines sont plus populaires que d'autres. C'est
le cas de la notation hexadécimale qui est largement utilisée chez les développeurs. Cette notation à 
l'avantage d'être courte et d'être facile à écrire. Une autre notation souvent utilisée est `rgb` qui à l'avantage
d'être facile à lire. Enfin, la notation utilisant des noms de couleurs est souvent utilisée pour représenter des
couleurs usuelles, soient le noir (`black`) ou le blanc (`white`) par exemple.

Comme vous pouvez le constater, il n'y a pas nécessairement un consensus sur l'utilisation d'une notation particulière,
bien que certaines soient plus populaires. L'important est de rester consistant dans l'utilisation 
des couleurs et d'essayer de conserver une même notation pour une même feuille de style.

Si vous utilisez un [préprocesseur](/guide/css/preprocesseurs) pour générer votre code CSS, il est **fortement 
recommandé** de spécifier les couleurs que vous utilisez dans des variables. Puisqu'il est souvent nécessaire de modifier 
certaines couleurs dans les feuilles de style, l'utilisation de variables facilite grandement ce changement et 
améliore du même coup la maintenabilité de votre code.

## Précision sur la notation hexadécimale
Comme cela a été indiqué plus tôt, la notation hexadécimale est très utilisée dans les feuilles de style.
Cependant, plusieurs développeurs ne prennent pas nécessairement soin d'écrire les couleurs hexadécimales 
en utilisant toujours la même convention. Par souci de cohérence, assurez-vous d'indiquer vos couleurs 
en **minuscules**. Également, lorsque cela est approprié, utilisez la notation hexadécimale abrégée.
L'exemple de code ci-dessous illustre les bonnes pratiques à utiliser.

```css
regle {
  color: #ABC123; /* Mauvais! */
  color: #abc123; /* Bon! La couleur est en minuscule. */
  
  color: #aabbcc; /* Mauvais! */
  color: #abc;    /* Bon! La notation hexadécimale abrégée est utilisée. */
}
```

