
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

// a esta new Persona tengo que añadirle entre paréntesis tanto el nombre, como el código como la frase. Todo entre '' y separados por comas y EN EL ORDEN INDICADO
const ironman = new Persona('Tony Stark', 'Iron Man', 'Yo soy Iron Man'); 

ironman.quienSoy();
ironman.miFrase();
ironman.comidaFavoritaDar;

ironman.comidaFavorita = 'Shawarma'; // aquí se establece el valor del set
console.log(ironman);

console.log(Persona.conteo);
Persona.mensaje();