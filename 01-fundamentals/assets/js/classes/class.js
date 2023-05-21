
class Persona {

    // estas son propiedades que le añado a mi clase persona, pueden ser cualquiera propiedad ya que es para saber que va a tener 'dentro' la clases.
    // buena práctica ponerlas al inicio para saber que va a contener
    // las clases tienen el 'use strtict' por defecto
    nombre;
    codigo;
    frase;

    constructor( nombre, codigo, frase ) {
        // this. hace referencia al objeto, en este caso a la clase Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

// a esta new Persona tengo que añadirle entre paréntesis tanto el nombre, como el código como la frase. Todo entre '' y separados por comas y EN EL ORDEN INDICADO
const spiderman = new Persona(); 