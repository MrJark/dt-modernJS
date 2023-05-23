
/**
 * Referencias al HTML
 * Son buenas prácticas separar los códigos para simplificar y ordenar
 * Optimización del código para que pese menos quitando las const
*/

/* BOTONES */
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNewGame = document.querySelector('#btnNuevo');

/* ELEMENTOS HTML */
const scorePlayer = document.querySelector('.score-player'),
      scorePC = document.querySelector('.score-pc'),
      divCartasJugadores = document.querySelectorAll('.divCartas');
    //   cardsPlayer = document.querySelector('#jugador-cartas'),
    //   cardsPC = document.querySelector('#pc-cartas');