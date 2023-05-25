// import { pedirCarta } from "./order-card";
// import { acumularPuntos } from './index'

// /**
//  * Turno del PC
//  * @param {number} scorePlayer puntos del jugador y/o mínimos que el pc necesita para ganar
//  * @param {Array<string>} deck
//  * 
//  */

// export const turnoPC = ( scorePlayer, puntosJugadores,deck = []) => {
    
//     if (!scorePlayer) throw new Error('Los puntyos del jugador son necesearios para saber si gana el PC o no')

//     let puntosPC = 0;

//     do {    
//         const card = pedirCarta( deck );
//         puntosPC = acumularPuntos(card, puntosJugadores.length - 1);

//         crearCarta(card, puntosJugadores.length -1);
        
//     } while ((puntosPC < scorePlayer) && (scorePlayer <= 21));

//     determineWinner();
    
// };

