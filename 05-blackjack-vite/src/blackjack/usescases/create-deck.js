
import _ from 'underscore';

// esta función crea un deck de forma aleatoria
export const crearDeck = (tiposDeCartas, figurasEspeciales) => {
      
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