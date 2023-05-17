/**
 * 2C -> two of clubs (tréboles)
 * 2D -> two of diamonds (diamantes)
 * 2H -> two of hearts (corazones)
 * 2S -> two of spades (picas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const figuras = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
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
};
/*
el problema es que si llamo a la función, para dar cartas, al estar ordenadas, no tendría sentido el juego por tanto para darlas aleatorias, tengo que llamar a una libreria de terceros ya que aun no se puede en js (2023) hacerlo desde aquí
la librería es: https://underscorejs.org
La función que queremos aquí es la de .shuffle() la cual devuelve un objeto con el contenido aleatorio
*/