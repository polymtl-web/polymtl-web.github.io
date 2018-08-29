# Interfaces

Étant donné que ts me l accent sur la verification des types, la notion d'interface a été introduit pour renforcer cet aspect.
Une Interface en ts peut être utilisé dans plusieurs scénarii. 

## Interface de classe

La première option, une utilisation très proche du C# ou du Java, où l'interface a pour rôle d'assurer qu'il est capable de faire une action. C'est tout simplement la base du polymorphisme. 

```TypeScript
interface Animal {
    sound(): void;
}

class Dog implements Animal {
    public sound(): void {
        console.log("woof !");
    }
}

class Cat implements Animal  {
    public sound(): void {
        console.log("Meow !");
    }
}

function lotsOfSounds (animals: Array<Animal>): void {
    animals.forEach((animal: Animal) => animal.sound());
}

let animals: Array<Animal>  = new Array<Animal>();
animals.push(new Dog());
animals.push(new Cat());

lotsOfSounds(animals);
```

<section class="panel warning">
  <div class="title">
    <h2><i class="fa fa-exclamation-circle"></i> Notez bien</h2>
  </div>
  <div class="content">
  <p>
    Dans l'exemple précédent, le code a été réduit au minimum pour pouvoir illustrer le concept d'utilisation d'une interface de classe. Dans un projet il est très rare d'avoir des fonctions déclarées hors d'une classe vu que cela irait a l'encontre tu concept de l'orienté objet et de l'encapsulation.
  </p>
  </div>
</section>

## Interface d'attribut

De la même façon que pour les fonctions, il est possible d'avoir des interfaces qui vont seulement déclarer des attributs. Si une fonction utiliser une interface de ce type en paramêtre, c'est qu'elle s'attend a des objets qui utilisent ces attributs. Il est aussi possible d'avoir des attributs optionnels ce qui peut s'avèrer être très pratique dans certains cas d'utilisation comme la communication.


```TypeScript
enum HourFormat {douze, vingtQuatre}

interface Date {
    jour: number;
    mois: string;
    annee: number;
    heure: number;
    minute: number;
    seconde?: number;
    timeZone?: string;
    format: HourFormat;
}

interface BasePacket {
    Sender: string;
    Receiver: string;
    SendingDate: Date;
    Body: string;
}

function ACoolDate(): Date {
    return {jour : 28, 
            mois: 'aout', 
            annee: 2018, 
            heure: 5, 
            minute: 45, 
            seconde: 32
            format: HourFormat.vingtQuatre };
}

function CreateResponsePacket(sender: string, receiver: string, body: string): BasePacket {
    return {Sender: sender,
            Receiver: receiver,
            Body: body,
            SendingDate: ACoolDate()};
}

function send(packet: BasePacket): void {
    // envoie le packet
}

function AnswerPacket(receiverdPacket: BasePacket): void {
    // Fait des trucs vraiments cools
    // Traite de l'information
    // fait surement de quoi avec la fonction aCoolDate

    const responsePacket: BasePacket = CreateResponsePacket(receiverdPacket.Sender, receiverdPacket.Receiver, receiverdPacket.Body);
    send(responsePacket);
}
```

Dans l'exemple précédent nous avons une base trés rudimentaire d'une architecture de communication avec une interface qui définie un paquet de base et qui utilise une autre interface pour la date. On peut aussi voir que seconde et timeZone sont des attributs optionnels et que, dans notre fonction ACoolDate, seul seconde est utilisé.

Comme vous avez pu le remarquer dans les différents exemples, il est impossible d'instancier une Interface.

<section class="panel wrong">
  <div class="title">
    <h2><i class="fa fa-ban"></i> Attention</h2>
  </div>
  <div class="content">
  <p>
    Utiliser une classe pour la communication client serveur ou même entre serveurs peut être une source d'erreur et il est recommandé d'utiliser des interfaces car lors de la sérialisation un objet va perdre toute ces fonctions.
  </p>
  </div>
</section>

## Conclusion

Il existe beaucoup plus d'utilisation des interfaces qui peuvent être utiles dans certaines situations. Pour en apprendre plus sur les Interfaces en TypeScript, rendez-vous sur leur [documentation](https://www.typescriptlang.org/docs/handbook/interfaces.html) (ressource en anglais).