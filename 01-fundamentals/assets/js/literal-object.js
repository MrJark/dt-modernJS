
const heroe = {
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

// Para borrar una propiedad usas la palabra reservada 'delete'
delete heroe.edad
console.log('Edad', heroe.edad); // da undefined

// Hacer que un objeto se comporte como un array, donde sean pares 0-1
const entriesPares = Object.entries(heroe);

// Crear nuevas propiedades
heroe.casado = true; // con esto ya le estás añadiendo una propiedad
console.log(heroe);

// Bloquear el acceso a añadir o eliminar información
// Dato: Aun teniendo la palabra reservada const en 'heroe' se sigue pudiendo hacer modificaciones en sus propiedades, lo que no se puede hacer co const es dar un nuevo valor directamente por ejemplo: heroe = capitanAmerica;
Object.freeze(heroe);// esto es lo que bloquea el objeto a partir de esta línea en adelante, todo lo que pase anteriormente es posible.
// Esta propiedad no permite la modificación de la propiedad pero si permite la modificación del interior de donde apunta, es decir, puedo modificar el objeto dentro de la propiedad. Puedo cambiar donde vive, su ubicaciñon, los trajes que tiene,e tc
