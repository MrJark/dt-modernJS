/*
Reto: factorizar la función valorCarta:
    No lo he conseguido por lo mismo que le roder-card, creia que era más difícil porque tendría que llamar a otras dependencias de otros archivos pero no, solo era cortar, pegar, exportar e importar
*/

/**
 * Te da el valor de la carta obtenida
 * @param {string} card 
 * @returns {number} valor de la carta 
 */

export const valorCarta = ( card ) => {
  
    const value = card.substring(0, card.length -1);
    return ( isNaN (value) ) ?
            (value === 'A') ? 11 : 10 
            : value * 1;
};