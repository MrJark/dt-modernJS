

const heroes = [
    'Superman',
    'Batman',
    'Flash',
    'Green Lantern',
];
const heroesCopy = heroes;

heroes.sort(); // debería solo ordenarme la original, el heroes, pero lo hace a ambos porque pasan por referencia

// console.table(heroes);
// console.table(heroesCopy);

const newHeroes = [
    'Superman',
    'Batman',
    'Flash',
    'Green Lantern',
];

const sortedHeroes = newHeroes.toSorted(); // el .toSorted() me crea una copia ordenada sin modififar la original
console.table(newHeroes);
console.table(sortedHeroes);

