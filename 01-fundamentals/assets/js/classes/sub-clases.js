
class Persona {

    // las propiedades estáticas podemos usarlas sin tener que instanciar a la propia clase 
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log('Hola, soy un método estático');
    }

    // estas son propiedades que le añado a mi clase persona, pueden ser cualquiera propiedad ya que es para saber que va a tener 'dentro' la clases.
    // buena práctica ponerlas al inicio para saber que va a contener
    // las clases tienen el 'use strtict' por defecto
    nombre;
    codigo;
    frase;
    comida;

    constructor( nombre, codigo, frase ) {
        // this. hace referencia al objeto, en este caso a la clase Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set comidaFavorita( comida ) { // el set solo recibe un argumento y no puede tener el mismo nombre que la propiedad a la que llama
        // los sets son para establecer valores 
        this.comida = comida;
    }

    get comidaFavoritaDar () {
        return `La comida fav de ${this.nombre} es ${this.comida}`;
    }

    // creación de métodos y se hacen debajo del constructor
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase() {
        console.log(`${this.frase}`);
    }
}

// la palabra extends me permite hacer una extensión de la clase que yo quiera y añadirle las propiedades que quieras de más
class Heroe extends Persona{

    clan;

    constructor(nombre, codigo, frase) { // tanto el constructor como el super necesitan llamar a las mismas propiedades que llama la clase a la cual haces referencias
        super(nombre, codigo, frase); 
        // este super permite 'transferir' el constructor de la clase que estás 'copiando' y tiene que ser colocado inmediatamente después del constructor sin nada pase nada antes ya que si queremos hacer referencia con this. a la clase que estamos nombrando, nos dará error porque aun no habrá corrido el super() como para poder llamar a this. pero si es algo que no tenga que ver con el this. como la creación de constantes o similares, no importará
        this.clan = 'The Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, del clan ${this.clan} `); // con esto estoy haciendo referencia a la clase en la que estoy, a la hija pero si quiero hacer referencia tb al método de la clase padre necesito hacerlo con el super()
        super.quienSoy(); // con esto puedes conseguir no sobreescribir código
    }

}

// a esta new Persona tengo que añadirle entre paréntesis tanto el nombre, como el código como la frase. Todo entre '' y separados por comas y EN EL ORDEN INDICADO
const ironman = new Heroe('Tony Stark', 'Iron Man', 'Yo soy Ironman'); 
ironman.quienSoy();