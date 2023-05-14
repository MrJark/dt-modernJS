
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

console.log({ arrCosas });// pongo los corchetes para que me salga en la consola el nombre de la variable, el objeto literal
// el ejercicio es sacar en la consola 'peluche' y sería: arrCosas[6][2]
// [6] con esto saco el objeto que contiene lo que queiro
// [2] como ya se en que posición essta por el [6] anterior, pongo el [2], porque es lo quiero