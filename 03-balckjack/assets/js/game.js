/**
 * 2C -> two of clubs (tréboles)
 * 2D -> two of diamonds (diamantes)
 * 2H -> two of hearts (corazones)
 * 2S -> two of spades (picas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const figuras = ['A', 'J', 'Q', 'K'];

const crearDeck = () => { // esta función crea la baraja de forma aleatoria
    for (let i = 2; i <= 10 ; i++) { // inicio en 2 porque la bajara empieza en el 2, los ases no son el 1 y es hasta el 10 porque a partir de ahí ya son figuras
        // deck.push(i);
        for (let tipo of tipos) { // a cada número de cartas anterior le estoy añadiendo el tipo con ciclo for of
            deck.push(i + tipo)
        }
    }
    for (let tipo of tipos) { // con este ciclo añadimos las figuras a los tipos
        for (let fig of figuras) {
            deck.push(fig + tipo);
        }
    }
    // console.log(deck); // deck ordenado
    deck = _.shuffle(deck);
    console.log(deck); // este me lo da aleatorio gracias al shuffle()
    return deck;
};
crearDeck();
/*
el problema es que si llamo a la función, para dar cartas, al estar ordenadas, no tendría sentido el juego por tanto para darlas aleatorias, tengo que llamar a una libreria de terceros ya que aun no se puede en js (2023) hacerlo desde aquí
la librería es: https://underscorejs.org
La función que queremos aquí es la de .shuffle() la cual devuelve un objeto con el contenido aleatorio
el shortcute para el underscore es ' _ ' el guión bajo
*/


// FUNCIÓN PARA ELEGIR CARTA
/*
Reto: coger carta de la baraja, mostrarla en consola y que desaparezca en el deck
Lo he conseguido usando las siguientes lineas de comando (con sus respectivos .log) pero no se si serán buenas como para un código:
    const carta = deck.pop();
    delete deck.carta; // Esta parte no era necesario, solo con el .pop() o tb valdría el .shift()

*/
const pedirCarta = () => {

    if ( deck.length === 0) {
        throw 'No quedan cartas en el deck'
    }
    const carta = deck.shift();
    // delete deck.carta;

    console.log(carta);
};
pedirCarta();


// const valorCarta = (carta) => {
//     // en los strings también se pueden extraer los valores de las posiciones por tanto, para saber que valor tiene cada carta, indistintamente del palo, necesitas el número o la figura inicial
//     // const valor = carta[0]; El problema de este modo es que en el 10 hay un problema porque son dos números iniciales 
//     const value = carta.substring(0, carta.length - 1);// este método permite extraer ese string de la carta. O lo que se hace en este caso es partir de la posición cero y eliminar el último starting que es el palo. Por tanto, si tienes el 2C, elimina solo 'C' pero si tienes el 10C, elimina tb 'C' porque es el lenght -1
//     let puntos = 0; // inicializar los puntos que lleva
//     if ( isNaN( value ) ) { // el isNaN evalua si es un nombre, es decir, devolverá true si es un nombre o si no es un número
//         puntos = ( value === 'A') ? 11 : 10; // para las figuras salvo el As que vale 11 puntos, las demnás figuras valen 10

//     } else {
//         puntos = value * 1; // hacemos esta multiplicación para pasar de string a numeral 
//     }
//     console.log(puntos);
// };
// valorCarta('QS');
// simplificación con ternarios
const valorCarta = ( carta ) => {
    const value = carta.substring(0, carta.length -1); // sacamos el valor de la carta EN STRING
    return ( isNaN (value) ) ? // si el valor NO es un NÚMERO 
            (value === 'A') ? 11 : 10 // si es A vale 11, las demás letras 10
            : valor * 1; // si es cualquiero cosa ≠ noun multiplicala por 1 para transformar ese valor noun a number
};
valorCarta(pedirCarta());

// Reto: reducir la función valorCarta a las mínimas expresiones posibles
// const valorCarta2 = ( carta ) => {
//     const value = carta.substring(0, carta.length - 1);
//     // let puntos = 0;
//     if (isNaN (value)) (value === 'A') ? 11 : 10 && value * 1;
//     console.log(value);
// }
// valorCarta2('3S');
// no lo he conseguido, esta era mi solución, me da un string y no un número
