
let heroe = {
    nombre: 'Tony Stark',
    edad: 40,
    codeName: 'IronMan',
    vivo: false,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
    pareja: 'Pepper Pots',
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'Última Película': 'Infinity War', // no puedes poner un símbolo de - porque js lo daría como una resta y si necesitas espacios, teienes que ponerlo entre ' '
};

//Formas de visualizar el value y la key de un objeto literal
console.log(heroe);
console.log('Nombre', heroe.nombre);
console.log('Nombre', heroe['nombre']);
console.log('Edad', heroe.edad);

//Para obtener lo que hay dentro de los objetos en el objeto
console.log('Traje 1', heroe.trajes[0]); // esta forma funciona porque son arrays
console.log('Traje 1', heroe.trajes[1]);

console.log('Direccion', heroe.direccion.zip);
console.log('Direccion', heroe.direccion[0]);// aquí no funciona porque es un objeto y tenemos que usar los putnos para sus métodos
console.log('Dirección:', heroe.direccion.ubicacion);

// Reto: nº de trajes de Tony
console.log('Nº trajes:', heroe.trajes.length );
// Reto: último traje
console.log('Último traje:', heroe.trajes[heroe.trajes.length-1]);

const isTony = 'vivo';
console.log('Está vivo?', heroe[isTony]);

console.log('Última Película:', heroe['Última Película']); // como es entre comillas ese método, no puede cogerlo a través del punto y si coloca con corchetes simples y entre comillas simples o dobles