# Validation de la page HTML
La validation d'une page HTML est une étape essentielle à réaliser. En effet, il est important que le code HTML écrit
soit correct et respecte les spécifications de HTML5, afin qu'il soit bien interprété correctement par les navigateurs 
web et les outils d'assistance, comme les lecteurs d'écran. 

Il existe un [outil](https://validator.w3.org/) fourni par W3C qui permet d'effectuer la validation d'un fichier HTML.
Ce valideur fournit un bon nombre de recommandations afin que vous puissiez corriger les erreurs qui se trouvent dans 
votre code.

Pour vous aider à corriger rapidement vos erreurs dans votre code HTML, voici une liste sommaire de vérification que 
vous pouvez regarder avant de faire valider votre page par l'outil de W3C:

1. Toutes les balises sont en minuscules
   ```html
    <P></P> <!-- Mauvais -->
    <p></p> <!-- Bon -->
   ```

1. Toutes les balises sont fermées

1. Toutes les balises `img` ont l'attribut `alt`
   ```html
   <img alt="Nom de l'image" src="https://example.org/image.png">
   ``` 
   
1. Toutes les balises `article` et `section` n'ayant pas de titre utilisent l'attribut `aria-label`
    ```html
    <section aria-label="Section sans titre">
     <p>Section n'ayant pas de titre</p>    
    </section>
    ```
1. Les balises sémantiques sont utilisées correctement

1. Le plan du document est valide

1. Le code HTML suit les recommandations d'un guide de codage (p. ex. [guide de codage de Mark Otto](http://codeguide.co/))
