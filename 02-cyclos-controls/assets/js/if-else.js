
let a = 5;

if (a>10) {
    console.log('es mayor a a 10');
} else {
    console.log('a no es mayor');
};

const hoy = new Date(); // el new me permite crear una nueva instancia de un objeto (o nuevos objetos) que ya existe en js, en este caso Date
console.log(hoy);
let dia = hoy.getDay();
console.log(dia);

if (dia === 0) {
    console.log('Es domingo');
} else if( dia === 1) {
    console.log('Es lunes');
} else {
    console.log('No es ni domingo ni lunes');
}// es muy tedioso validar esto para cada día
/*
No es lo mismo '=', '==' que '==='
    = -> es una asignación y es un error colocarlo si queremos hacer condicionales
    == -> es para saber si el valor es igual, indistintamente del tipo dato que sea
    === -> el más restictivo y permite saber si el valor y el tipo de dato son iguales
En buelanos tendríamos lo siguiente:
    console.log( 5 === '5');
        5 = '5' -> da un error
        5 == '5' -> da true
        5 === '5' -> da false
*/

// Tarea: imprimir el día de la semana sin usar if/else. Solo usar objetos literales
// no lo he conseguido porque creía que era más complejo, estaba intentando a través de Date sacar el día y que me lo dijera y simplemente era mostrar en consola el día dependiendo de la varibale
let today = 2;
const diasSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};
console.log(diasSemana[today]);
// otra forma de hacerlo con objetos
const diasSemana2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(diasSemana2[today]);