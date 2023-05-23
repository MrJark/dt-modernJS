import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import _ from 'underscore';

/**
 * 2C -> two of clubs (tréboles)
 * 2D -> two of diamonds (diamantes)
 * 2H -> two of hearts (corazones)
 * 2S -> two of spades (picas)
 */
// Sintaxis del patrón módulo
const miModulo = (() => { 
  'use strict' 

 
  let deck =      [];
  const tipos =   ['C', 'D', 'H', 'S'],
        figuras = ['A', 'J', 'Q', 'K']; 

  let puntosJugadores = [];

  const startGame = ( numeroJugadores = 2 ) => {
      deck = crearDeck();
      puntosJugadores = [];
      for (let i = 0; i < numeroJugadores; i++) {
          puntosJugadores.push(0);
      }

      scorePC.innerHTML = 0;
      scorePlayer.innerHTML = 0;

      divCartasJugadores.forEach( elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }
  
  const crearDeck = () => { 
      
      for (let i = 2; i <= 10 ; i++) { 
          // deck.push(i);
          for (let tipo of tipos) { 
              deck.push(i + tipo)
          }
      }
      for (let tipo of tipos) { 
          for (let fig of figuras) {
              deck.push(fig + tipo);
          }
      }

      deck = _.shuffle(deck);
      return deck ;
  };

  const pedirCarta = () => {

      if ( deck.length === 0) {
          throw 'No quedan cartas en el deck'
      }
      return deck.shift();
  };


  const valorCarta = ( card ) => {
      const value = card.substring(0, card.length -1); 
      return ( isNaN (value) ) ? 
              (value === 'A') ? 11 : 10 
              : value * 1; 
  };


  const acumularPuntos = ( card, turno ) => {

      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(card);
      scorePlayer.innerHTML = puntosJugadores[0];
      scorePC.innerHTML = puntosJugadores[puntosJugadores.length - 1];
      return puntosJugadores[turno];
  }

  const crearCarta = ( card, turno) => {
      const cardImg = document.createElement('img');
      cardImg.src = `assets/cards/${card}.png`;
      cardImg.classList.add('carta');
      divCartasJugadores[turno].append(cardImg);
  }

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
  } 

  const turnoPC = ( scorePlayer ) => {
      let puntosPC = 0;
      do {    
          const card = pedirCarta();
          puntosPC = acumularPuntos(card, puntosJugadores.length - 1);

          crearCarta(card, puntosJugadores.length -1);

      } while ((puntosPC < scorePlayer) && (scorePlayer <= 21));

      determineWinner();
      
  }

  // Eventos

  btnPedir.addEventListener('click', () => { 
      const card = pedirCarta();
      const puntosJugador = acumularPuntos(card, 0);
      
      crearCarta(card, 0);

      if (puntosJugador > 21) {
          btnPedir.disabled = true; 
          btnDetener.desabled = true;
          turnoPC(puntosJugador);
      } else if ( puntosJugador === 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoPC(puntosJugador);
      } 
      

  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoPC(puntosJugadores[0]);
  });

  btnNewGame.addEventListener('click', () => {
      startGame();

  });

  return {
      nuevoJuego: startGame
  }
})();
