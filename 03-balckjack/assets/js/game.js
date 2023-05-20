/**
 * 2C -> two of clubs (tréboles)
 * 2D -> two of diamonds (diamantes)
 * 2H -> two of hearts (corazones)
 * 2S -> two of spades (picas)
 */
// Sintaxis del patrón módulo
(() => { // función anínima autoinvocada
    'use strict' // con este patrón, no puedo acceder con la consola a las variables aunque estén definidas

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const figuras = ['A', 'J', 'Q', 'K'];
    let puntosJugador = 0;
    let puntosPC = 0;

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
        // console.log(deck); // este me lo da aleatorio gracias al shuffle()
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
        return carta;
    };
    pedirCarta();

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

    const valorCarta = ( carta ) => {
        // Reto: reducir la función valorCarta a las mínimas expresiones posibles
        // const valorCarta2 = ( carta ) => {
        //     const value = carta.substring(0, carta.length - 1);
            // let puntos = 0;
        //     if (isNaN (value)) (value === 'A') ? 11 : 10 && value * 1;
        //     console.log(value);
        // }
        // valorCarta2('3S');
        // no lo he conseguido, esta era mi solución, me da un string y no un número
        const value = carta.substring(0, carta.length -1); // sacamos el valor de la carta EN STRING
        return ( isNaN (value) ) ? // si el valor NO es un NÚMERO 
                (value === 'A') ? 11 : 10 // si es A vale 11, las demás letras 10
                : value * 1; // si es cualquiero cosa ≠ noun multiplicala por 1 para transformar ese valor noun a number
    };

    const turnoPC = ( puntosMinimos ) => {
        // para esta funcióbn necesito el ciclo do while porque al menos tengo que ejecutar el código una vez
        // el código es muy parecido al de btnPedir ya que tengo que crear los mismos elementos pero con una lógica distinta
        // como es un código que hemos pegado, se puede inicializar y tan solo nombrarlo para cada función
        do {    
            const card = pedirCarta();
            puntosPC = puntosPC + valorCarta(card);
            scorePC.innerHTML = puntosPC;

            const cardImg = document.createElement('img');
            cardImg.src = `assets/cards/${card}.png`;
            cardImg.classList.add('carta');

            cardsPC.append(cardImg);

            if (puntosMinimos > 21) { // esto es para que cuando el jugador se pase de 21, lo único que tiene que hacer el PC es sacar una carta para ganar y para ahí
                break;
            }

        } while ((puntosPC < puntosMinimos) && (puntosMinimos <= 21));

        // Reto: lanzar un mensaje de alerta diciendo si ganaste, perdiste o empate (no conseguido por poco, hice una cadena de ifs y lo puse en el btnPedir pero cuando lo he puesto en este, me ha ido)
        // lo he hecho de otra manera pero funciona, aunque he ido añadiendo validaciones para que funcione en todos los casos
        // Tenemos que meter los alert en una setTimeout para que no salga antes de que se muestren las cartas.
        setTimeout(() => {
            if ( (puntosPC > puntosJugador && puntosPC <= 21) || puntosJugador > 21) {
                alert(`Perdiste, tus puntos son ${puntosJugador} y los del PC ${puntosPC}`);
            } else if (puntosJugador > puntosPC || puntosPC > 21) {
                alert(`Ganaste, tus puntos son ${puntosJugador} y los del PC ${puntosPC}`);
            } else {
                alert(`Empate, los puntos son ${puntosJugador}`);
            }
            // Código de Fernando
            // if (puntosPC === puntosMinimos) {
            //     alert('Empate');
            // } else if (puntosMinimos > 21) {
            //     alert('Perdiste');
            // } else if (puntosPC > 21) {
            //     alert('Ganaste');
            // }
        }, 100)


    }

    /*--------------------- */
    // Eventos

    btnPedir.addEventListener('click', () => { // las funciones que se encuentran en las posiciones de argumentos de otras funciones aquí se llaman Callbacks

        const card = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(card);
        console.log(puntosJugador);

        // Reto: poner el score en el small del h1 del jugador (no conseguido :'( )

        // scorePlayer.innerText(puntosJugador); // No funciona
        // scorePlayer.appendChild(puntosJugador); // No funciona
        scorePlayer.innerHTML = puntosJugador;

        // Creamos ahora las imágenes de las cartas que salgan
        const cardImg = document.createElement('img');
        cardImg.src = `assets/cards/${card}.png`; // para crear el src de la carta y que exista
        cardImg.classList.add('carta'); //añado el style de la carta

        cardsPlayer.append(cardImg);

        // Bloquear el btn de pedir cuando llegue a 21 o se pase
        if (puntosJugador > 21) {
            console.warn('Lo siento, perdiste :(');
            btnPedir.disabled = true; // este atributo bloquea el elemento 
            btnDetener.desabled = true;
            turnoPC (puntosJugador);
        } else if ( puntosJugador === 21) {
            console.warn('Wow, 21, toca esperar al PC');
            btnPedir.disabled = true;
            btnDetener.desabled = true;
            turnoPC (puntosJugador);

        } 
        

    });

    // Reto: hacer el btnDetener (no conseguido)
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoPC(puntosJugador);
    });

    // Reto: crear el boton 'new game' (no conseguido, queria limpiar el window con una sola linea)
    btnNewGame.addEventListener('click', () => {
        console.clear();
        deck = crearDeck();

        puntosJugador = 0;
        puntosPC = 0;

        cardsPC.innerHTML = '';
        cardsPlayer.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    });

})();


/* -------------------- */
