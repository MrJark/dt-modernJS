import _ from 'underscore'
import './style.css';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

/**
 * 2C -> two of clubs (tréboles)
 * 2D -> two of diamonds (diamantes)
 * 2H -> two of hearts (corazones)
 * 2S -> two of spades (picas)
 */
// Sintaxis del patrón módulo
const miModulo = (() => { // función anínima autoinvocada
  'use strict' // con este patrón, no puedo acceder con la consola a las variables aunque estén definidas

  // Para optimizar las constantes const o let si sabemos que van una debajo de otra, podemos poner solo la primera const o let y en vez de un ' ; ' para separar, una ' , ' para decirle que es otra const o let
  let deck =      [];
  const tipos =   ['C', 'D', 'H', 'S'],
        figuras = ['A', 'J', 'Q', 'K']; // optimización de const

  let puntosJugadores = []; // por si tengo más de un jugador a parte del pc

  // Función que inicializa el juego. Es = 2 porque mínimo son 2, el player y el pc
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
      // deck = _.shuffle(deck);
      // console.log(deck); // este me lo da aleatorio gracias al shuffle()
      deck = _.shuffle(deck);
      // console.log(deck);
      return deck ;
  };
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
      // const carta = deck.shift();
      // return carta;
      // no tenia sentido el crear carta = deck.shift(); porque con solo retornar deck.shift() me sobra y ahorro espacio
      return deck.shift();
  };
  // pedirCarta();

  // const valorCarta = (carta) => {
  // en los strings también se pueden extraer los valores de las posiciones por tanto, para saber que valor tiene cada carta, indistintamente del palo, necesitas el número o la figura inicial
  // const valor = carta[0]; El problema de este modo es que en el 10 hay un problema porque son dos números iniciales 
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

  const valorCarta = ( card ) => {
      // Reto: reducir la función valorCarta a las mínimas expresiones posibles
      // const valorCarta2 = ( carta ) => {
      //     const value = carta.substring(0, carta.length - 1);
          // let puntos = 0;
      //     if (isNaN (value)) (value === 'A') ? 11 : 10 && value * 1;
      //     console.log(value);
      // }
      // valorCarta2('3S');
      // no lo he conseguido, esta era mi solución, me da un string y no un número
      const value = card.substring(0, card.length -1); // sacamos el valor de la carta EN STRING
      return ( isNaN (value) ) ? // si el valor NO es un NÚMERO 
              (value === 'A') ? 11 : 10 // si es A vale 11, las demás letras 10
              : value * 1; // si es cualquiero cosa ≠ noun multiplicala por 1 para transformar ese valor noun a number
  };

  // Turnos: 0 = primer jugador ... último = pc
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
          // Código de Fernando
          // if (puntosPC === scorePlayer) {
          //     alert('Empate');
          // } else if (puntosMinimos > 21) {
          //     alert('Perdiste');
          // } else if (puntosPC > 21) {
          //     alert('Ganaste');
          // } else {
          //     alert('Perdiste');
          // }
      }, 100);
  } 

  const turnoPC = ( scorePlayer ) => {
      // para esta funcióbn necesito el ciclo do while porque al menos tengo que ejecutar el código una vez
      // el código es muy parecido al de btnPedir ya que tengo que crear los mismos elementos pero con una lógica distinta
      // como es un código que hemos pegado, se puede inicializar y tan solo nombrarlo para cada función
      let puntosPC = 0;
      do {    
          const card = pedirCarta();
          // puntosPC = puntosPC + valorCarta(card);
          puntosPC = acumularPuntos(card, puntosJugadores.length - 1);
          // scorePC.innerHTML = puntosPC;

          crearCarta(card, puntosJugadores.length -1);
          // const cardImg = document.createElement('img');
          // cardImg.src = `assets/cards/${card}.png`;
          // cardImg.classList.add('carta');
          // cardsPC.append(cardImg);


          // if (scorePlayer > 21) { // esto es para que cuando el jugador se pase de 21, lo único que tiene que hacer el PC es sacar una carta para ganar y para ahí
          //     break;
          // }

      } while ((puntosPC < scorePlayer) && (scorePlayer <= 21));

      determineWinner();
      // Reto: lanzar un mensaje de alerta diciendo si ganaste, perdiste o empate (no conseguido por poco, hice una cadena de ifs y lo puse en el btnPedir pero cuando lo he puesto en este, me ha ido)
      // lo he hecho de otra manera pero funciona, aunque he ido añadiendo validaciones para que funcione en todos los casos
      // Tenemos que meter los alert en una setTimeout para que no salga antes de que se muestren las cartas.
  }

  /*--------------------- */
  // Eventos

  btnPedir.addEventListener('click', () => { // las funciones que se encuentran en las posiciones de argumentos de otras funciones aquí se llaman Callbacks

      const card = pedirCarta();
      const puntosJugador = acumularPuntos(card, 0); // pongo el 0 porque es el jugador 1
      // puntosJugador = puntosJugador + valorCarta(card);
      // scorePlayer.innerHTML = puntosJugador;
      crearCarta(card, 0);

      // Reto: poner el score en el small del h1 del jugador (no conseguido :'( )

      // scorePlayer.innerText(puntosJugador); // No funciona
      // scorePlayer.appendChild(puntosJugador); // No funciona

      // Creamos ahora las imágenes de las cartas que salgan
      // const cardImg = document.createElement('img');
      // cardImg.src = `assets/cards/${card}.png`; // para crear el src de la carta y que exista
      // cardImg.classList.add('carta'); //añado el style de la carta
      // cardsPlayer.append(cardImg);


      // Bloquear el btn de pedir cuando llegue a 21 o se pase
      if (puntosJugador > 21) {
          btnPedir.disabled = true; // este atributo bloquea el elemento 
          btnDetener.desabled = true;
          turnoPC(puntosJugador);
      } else if ( puntosJugador === 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoPC(puntosJugador);
      } 
      

  });

  // Reto: hacer el btnDetener (no conseguido)
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoPC(puntosJugadores[0]);
  });

  // Reto: crear el boton 'new game' (no conseguido, queria limpiar el window con una sola linea)
  btnNewGame.addEventListener('click', () => {
      startGame();

      // console.clear();
      // deck = crearDeck();
      // puntosJugador = 0;
      // puntosPC = 0;

      // scorePC.innerHTML = 0;
      // scorePlayer.innerHTML = 0;

      // cardsPC.innerHTML = '';
      // cardsPlayer.innerHTML = '';

      // btnPedir.disabled = false;
      // btnDetener.disabled = false;
  });

  return {
      nuevoJuego: startGame
  }
  // lo que haya dentro del return es lo único que se puede mostrar
})();

