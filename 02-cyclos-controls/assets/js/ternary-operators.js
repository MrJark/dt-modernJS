/**
 * Ejemplo para el ejercicio: Una tienda
 * Entre semana se abre a las 11
 * Fines de semana se abre a las 9
 * 
 * ¡En cuenta!
 * Los días empiezan el domingo en js y es el 0
 */

//Una persona consulta algo el domingo a las 10:00

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX:XX

if (dia === 0 || dia === 6 ) { // fines de semana
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Entre semana');
    horaApertura = 11;
};

if (horaActual >= horaApertura) {
    console.log('Está abierto');
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`; // comillas francesas gracias a ES6
}

console.log({});