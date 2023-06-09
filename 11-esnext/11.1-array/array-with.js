// Objeto original
const state = [
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

const index = 5;
const newName = 'Thor';

// FORMA ANTIGUA: antes teníamos que hacer todo esto para cambiar el nombre pero con ES6, es más sencillo
// const newState = state.map( (hero, i) => {

//     if ( i === index ) {
//         hero.name = newName;
//     }
//     return {...hero};
// });

// Forma sencilla con ES6
// const newState = state.with(index, {
//     // id: 5, // si no lo pongo, me lo sobreescribe y me elimina el id
//     name: 'Thor',
// })
// solución para no tener que ponerlo si no lo sabemos:
const newState = state.with(index, {
    ...state.at(index),
    name: 'Thor',
})

console.table(newState)