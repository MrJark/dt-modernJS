// esta función crea un deck de forma aleatoria gracias al shuffle

import _ from 'underscore';

/*
Son buenas prácticas poner estos comentarios para que otras personas que revisen el código sepan cuales son los parámetros necesarios que devuelven
El tipo de comentarios de abajo, genera una ruta visual para otras personas que quieran usar el código, sepan como funciona y es gracias a pluging 'Better Comments'
*/

/**
 * Esta función crea un deck de forma aleatoria(shuffle)
 * @param {array<string>} tiposDeCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {array<string>} figurasEspeciales Ejemplo: ['A', 'J', 'Q', 'K'] 
 * @returns {array} retorna un nuevo deck
 */

export const crearDeck = (tiposDeCartas, figurasEspeciales) => {
    
    if( !tiposDeCartas || tiposDeCartas.lenght === 0) throw new Error('tiposDeCartas es obligatorio como array de strings!')
    if( !figurasEspeciales || figurasEspeciales.lenght === 0) throw new Error('figurasEspeciales es obligatorio como array de strings!')

    let deck = [];

    for (let i = 2; i <= 10 ; i++) { 
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tiposDeCartas) { 
        for (let fig of figurasEspeciales) {
            deck.push(fig + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck ;
};