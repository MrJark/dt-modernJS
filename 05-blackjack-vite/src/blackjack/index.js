import _ from 'underscore';

import { crearDeck, pedirCarta, valorCarta } from './usescases'; // con una sola línea hemos simplificado todo el index


const miModulo = (() => { 
  'use strict' 
  let deck =      [];
  const tipos =   ['C', 'D', 'H', 'S'],
        figuras = ['A', 'J', 'Q', 'K']; 

  let puntosJugadores = []; 

  const startGame = ( numeroJugadores = 2 ) => {
    deck = crearDeck(tipos, figuras);
    puntosJugadores = [];
    for (let i = 0; i < numeroJugadores; i++) {
        puntosJugadores.push(0);
    }

    scorePC.innerHTML = 0;
    scorePlayer.innerHTML = 0;

    divCartasJugadores.forEach( elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  deck = crearDeck(tipos, figuras);

  const acumularPuntos = ( card, turno ) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(card);
    scorePlayer.innerHTML = puntosJugadores[0];
    scorePC.innerHTML = puntosJugadores[puntosJugadores.length - 1];
    return puntosJugadores[turno];
  };

  const crearCarta = ( card, turno) => {
    const cardImg = document.createElement('img');
    cardImg.src = `assets/cards/${card}.png`;
    cardImg.classList.add('carta');
    divCartasJugadores[turno].append(cardImg);
  };

  const determineWinner = () => {

    const [ scorePlayer, puntosPC ] = puntosJugadores;

      setTimeout(() => {
        if ( (puntosPC > scorePlayer && puntosPC <= 21) || scorePlayer > 21) {
            alert(`Perdiste, tus puntos son ${scorePlayer} y los del PC ${puntosPC}`);
        } else if (scorePlayer > puntosPC || puntosPC > 21) {
            alert(`Ganaste, tus puntos son ${scorePlayer} y los del PC ${puntosPC}`);
        } else {
            alert(`Empate, los puntos son ${scorePlayer}`);
        }
      }, 100);
  };

  const turnoPC = ( scorePlayer ) => {
    
    let puntosPC = 0;
    do {    
        const card = pedirCarta( deck );
        puntosPC = acumularPuntos(card, puntosJugadores.length - 1);

        crearCarta(card, puntosJugadores.length -1);
        
    } while ((puntosPC < scorePlayer) && (scorePlayer <= 21));

    determineWinner();
    
  };

  btnPedir.addEventListener('click', () => { 
    const card = pedirCarta( deck );
    const puntosJugador = acumularPuntos(card, 0); 
    crearCarta(card, 0);

    
    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.desabled = true;
        turnoPC(puntosJugador, scorePlayer, puntosJugadores, deck);
    } else if ( puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPC(puntosJugador, scorePlayer, puntosJugadores, deck);
    } 
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoPC(puntosJugadores[0], scorePlayer, puntosJugadores, deck);
  });


  btnNewGame.addEventListener('click', () => {
    startGame();

  });

  return {
    nuevoJuego: startGame
  };

})();

