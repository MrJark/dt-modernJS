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

// if (dia === 0 || dia === 6 ) { // fines de semana
// if ( [0,6].includes(dia) ) { // otra forma de hacerlo para simplificar. Señalas cuales son los dias que te interesan entre [ ] y el método .includes() te dice si esos dáis están incluidos dontro del parámetro que quieres, en este caso ' dia '
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Entre semana');
//     horaApertura = 11;
// };
// reducción codigo anterior con operador tenario
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11; // esto es lo mismo que todo el if else anterior. Donde la interrogación es la validaciín de ' si es true ' y los dos puntos es el ' si no '

// if (horaActual >= horaApertura) {
//     console.log('Está abierto');
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`; // comillas francesas gracias a ES6
// }

// Reto: operación ternaria con el  mensaje (conseguido)
mensaje = ( horaActual >= horaApertura ) ? 'Estamos abiertos' : `Aun estamos cerrados, hoy abrimos a las ${horaApertura}`

console.log(horaApertura, mensaje);