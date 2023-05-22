
/**
 * Creación de múltiples constructores
 * 
 * Solo se puede crear un constructor por cada clase creada pero si necesitas varios
 * constructores porque cada uno de ellos tiene que recibir un tipo de formato. En este caso
 * está persona 1 que son constantes pero a lo mejor necesitas tener la capacidad de leer 
 * un objeto que tenga la 'misma' estructura y para ello puedes crear una clase estática
 * y crear una nueva instancia de persona pero de una manera distinta al constructor
 * Para usar este 'nuevo' constructor no tenemso que llemarlo con la palabra reservada
 * 'new' solo con el nombre de la clase (Persona) y la instancia nueva (newConstructor)
 * Ej: const persona2 = Persona.newConstructor( nombreConstante )
 */

class Persona {

    static newConstructor({ name, subname, born }) { // pongo los corchetes para hacer una deconstrucción de la clase persona, como si fuera un constructor
        return new Persona(name, subname, born);
    }

    constructor(name, subname, born) {
        this.name = name;
        this.subname = subname;
        this.born = born;
    }

    getInfo() {
        console.log(`info: ${this.name} ${this.subname} de ${this.born}`);
    }
}

const name1 = 'Melisa',
      subname1 = 'Gómez',
      born1 = 'Venezuela';

const fher = {
    name: 'fernando',
    subname: 'herrera',
    born: 'costa rica',
}
    
const persona1 = new Persona(name1, subname1, born1);
const persona2 = Persona.newConstructor( fher )

persona1.getInfo();
persona2.getInfo();
