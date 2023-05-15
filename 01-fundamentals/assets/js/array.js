
let arrCosas = [
    true,
    123,
    'patata',
    function () {},
    'patata',
    8,
    [
        'x',
        'patata',
        'peluche',
    ],
];

// console.log({ arrCosas });// pongo los corchetes para que me salga en la consola el nombre de la variable, el objeto literal
// el ejercicio es sacar en la consola 'peluche' y sería: arrCosas[6][2]
// [6] con esto saco el objeto que contiene lo que queiro
// [2] como ya se en que posición essta por el [6] anterior, pongo el [2], porque es lo quiero

let juegos = [
    'Zelda',
    'Mario',
    'Pokemon',
    'Minecraft',
    'Tetris',
];

// console.log({juegos}, 'Lenght:', juegos.length);

// Si quieres saber cual es el último en la posición y es un array de a saber cuantos, lo más sencillo es usar el método .lenght:
// console.log('Último juego:', juegos[juegos.length-1]);
// saber cual es el total de juego sy restarle uno porque el lenght me dice la cantidad de elementos pero en arrays partes del cero
// console.log('Penúltimo juego:', juegos[juegos.length-2]);


// Método para saber cada uno de los elementos del array .forEach(elemento, indice, arr)
juegos.forEach((juego, index, arr) => {
    console.log({juego, index, arr});
});

// Método para añadir nuevos juegos al array
//colocarlo en la última posición .push()
juegos.push('COC');
console.log({juegos});
//colocarlo en la primera posición .unshift()
juegos.unshift('Zelda 2');
console.log(juegos);
// el método .shift() borra el primer elemento del array
// el método .pop() borra el último elemento del array

// Quiero borrar algún juego del array, por ejemplo el de la posición 2. Después de añadir Zelda 2, sería Mario ya que COC está al final y no influye
// se usa el método .splice() y tiene dos argumentos: 
    //1º desde que posición quiero empezar a borrar (incluida la posición)
    //2º los elementos que quiero borrar a partir de esa posición
juegos.splice(2, 1);
console.log(juegos);

//Método para saber en que posición está un elemento. !Impotante: las mayúsculas son importantes y saber lo que quieres buscar también
let index4Zelda = juegos.indexOf('Zelda');
console.log('Zelda esté en la posición ',index4Zelda);

