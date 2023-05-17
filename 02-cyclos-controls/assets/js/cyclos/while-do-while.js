
// Para repetir el código varias veces
console.warn('While');
const coches = ['Ford', 'Toyota', 'Audi', 'BMW'];

let i = 0;
while (i < coches.length) { // para que se ejecuten los ciclos while, el interior del () debe ser verdadero, no puede haber un false, null o undefined
    console.log(coches[i]);
    i++;
// si cambio de orden el i++ por el log, me dará el primer elemento el Toyota y el último será undefined
};

// otra manera de ponerlo sería:
while (coches[i]) { //una forma más simplificada
    console.log(coches[i]);
    i++;
}

console.warn('Ciclos Do While');
let j = 0; // si le doy const no se puede dar porque j cambia con el tiempo
do {
    console.log(coches[j]);
    j++;
} while (coches[j]);