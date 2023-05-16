
// No pasa por referencia


let a = 10;
let b = a;
console.log({ a,b} );
// Me devuelve que a = 10 y b = 10

let c =10;
let d = c;
c = 30;//reasigno valor
console.log({c,d});
// El valor de c me da 30 pero el de d me da 10
// La reasignación con objetos literales no afecta a los datos guardados en memoria por eso se mantiene la d con el valor anterior


// Pasa por referencia


let juan = { nombre: 'Juan', }
let ana = juan;
console.log({juan, ana});
// devuelve juan: juan y ana: juan, lo esperado
ana.nombre = 'Ana';
console.log({juan, ana});
/*
ahora el valor de ana cambia a ana pero el valor de juan también cambia a ana
esto se debe a que el valor de ana pasa por referencia porque no es un primitivo, es un objeto
Para resolverlo, se haría a través del operador ' ... ' llamado spread
*/
let juan2 = { nombre: 'Juan', }
let ana2 = {...juan2};
console.log({juan2, ana2});
// devuelve juan: juan y ana: juan, lo esperado
ana2.nombre = 'Ana';
console.log({juan2, ana2});

/* ------------------------- */
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = {nombre: 'peter'}; //aquí peter tiene su nombre peter
console.log('nombre Peter', peter);
let tony = cambiaNombre(peter); // aquí es cuando al pasarlo por la función le cambiamos el nombre porque la función lo que hace es asignar al valor persona el nombre
let hulk = {nombre: 'hulk'};
console.log('nombre Hulk', hulk);
let newHulk = cambiaNombre(hulk);

console.log({ peter, tony, newHulk });
/*
Los tres tienen el nombre de Tony, esto es porque estás pasandolos por referencia, los mandamos a la función y en ella es donde les cambia el nombre
Para resolver el problema, simplemente tienes que transformar el argumento en objeto, ponerlo entre { } y añadirle el spread
*/
const cambiaNombre2 = ({ ...persona}) => {
    persona.nombre = 'Tony Stark';
    return persona;
};
let peterParquer = {nombre: 'Peter Parquer'}; 
console.log('nombre Peter', peterParquer);
let tonyStark = cambiaNombre2(peterParquer);
console.log({ peterParquer, tonyStark });



// Para Arreglos

const frutas = [ 'Manzana', 'Piña', 'Melocotón']
const masFrutas = [...frutas]; // lo que hace aquí el spread es no añadirme el .push() de las nuevas frutas a las frutas sino solo a más frutas, si no lo pongo, estaría modificando ambas constantes
//Existe otra manera de evitar que afecte a todas las variables y es el .slice() (sin argumentos)
// const aunMasFrutas = masFrutas.slice();
const aunMasFrutas = [...masFrutas];
//las dos lineas anteriores hacen lo mismo

masFrutas.push('Platano', 'Fresa');
aunMasFrutas.push('Mango');
console.table({frutas, masFrutas, aunMasFrutas});
/*
Cuál es mejor? Es más rápido es spread que el slice() pero dependera de para que se vaya a usar
*/



let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
lyrics.push('knees', 'and', 'toes');
console.log({lyrics});
/*
Mdn reference
La diferencia entre poner los 3 puntos o no ponerlos es que, si no los pongo me da un array con los elementos dentro de lyric pero si los pongo, me desglosa el array parts edntro de lyric como si fueran elementos del propio lyric
*/
