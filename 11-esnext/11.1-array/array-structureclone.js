// Objeto original
const superHeroes = [
    {
        id: 1,
        name: 'IronMan',
    },
    'Black Panther',
    {
        id: 2,
        name: 'Spiderman',
    },
    {
        id: 3,
        name: 'Hulk',
    },
    {
        id: 4,
        name: 'Antman',
    },
    {
        id: 5,
        name: 'Locky',
    },
];

// Si queremos explorar los arreglos u objetos, las buenas prácticas dicen que tenemos que hacer una copia del mismo
const superHeroesCopy = [...superHeroes]; // el operador spread me permite hacer la copia
superHeroesCopy[0].name = 'IronWoman'; // esto me cambia el nombre de la copía y de la original porque pasan por referencia cosa que los primitivos no
superHeroesCopy[1] = 'Black Widow'; // no cambia el original porque al ser un primitivo, no pasa por referencia

console.table(superHeroes);
console.table(superHeroesCopy);

const superHeroesCopy2 = structuredClone(superHeroes);
superHeroesCopy2[0].name = 'IronWoman - Pepper Pots';

console.table(superHeroesCopy2);