/*
Reto: factorizar la función pedirCarta y para ello necesito:
    El deck de la parte de create-deck, necesito exportar ese deck a este archivo

    No he sabido hacerlo, he intentado llamar la función crearDeck y sacar el deck de ella pero no he podido

    No hacia falta sacar el deck del crearDeck, solo tenía que llamar al deck y con eso era suficiente, estaba complicándolo más de la cuenta
*/

// import { crearDeck } from "./create-deck";

/**
 * 
 * @param {array<string>} deck es un arreglo de string
 * @returns {string} retorna una carta del deck
 */

export const pedirCarta = ( deck ) => {

    // const deck = crearDeck(deck);

    if ( !deck || deck.length === 0) throw new Error('No quedan cartas en el deck');
    return deck.shift();
};

