
/**
 * 
 * @param {HTMLDListElement} element 
 */
export const ejGeneratorComponent = ( element ) => {
    console.log('Ej Generator');

    const myGene = myFirstGenFunct();

    // necesitamos el next para que me de los valores del yield
    console.log(myGene.next()); 
    console.log(myGene.next());
    console.log(myGene.next());
    console.log(myGene.next()); // value: 'Cuarto valor', done: false
    console.log(myGene.next()); // value: 'No hay más', done: true
    console.log(myGene.next()); // saldrá undefined porque no hay un sexto valor -> value: undefined, done: true
    /*
    Las respuestas serán:
    value: (valor del yield), done: (boolean donde dirá si se a acabado o no dependiendo de los yield o el return que queden)
    */

};

function* myFirstGenFunct() {
    
    // los yield es donde se guardan los valores de la función
    yield 'Primer valor'; 
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    // después de l retunr ya no se puede escribir, ya que es la última línea a la cual le va a hacer caso
    return 'No hay más';
};