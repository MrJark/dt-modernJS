
// TIPS PARA OPERADORES TERNARIOS

const elMayor0 = (a, b) => {
    return ( a > b) ? `Es mayor a: ${a}, que b: ${b}` : `No es mayor a: ${a}, que b: ${b}` ;// con operador ternario
}

//reducimos el código porque como es una arrow y solo tiene un return se puede hacer lo siguiente:
const elMayor = (a,b) => ( a > b ) ? `Es mayor a: ${a}, que b: ${b}` : `No es mayor a: ${a}, que b: ${b}` ;
console.log(elMayor(8,6));

const membresia = (miembro) => (miembro) ? 'Cuesta $2 porque eres miembro' : 'Cuesta $10 porque no eres miembro';
console.log(membresia(true));

const amigo = true;
const amigoArr = [
    'Peter',
    'Tony',
    'Pepper',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki', // se pueden usar dentro de los arrays los operadores para tener condiciones
];
console.log(amigoArr);

// Operador ternario para más de una condición

const nota = 6;
const calificacion = nota < 5 ? `Suspenso porque tu nota es un ${nota}` : 
                    nota >= 5 ? `Suficiente porque tu nota es un ${nota}`:
                    nota >= 6 ? `Suficiente alto porque tu nota es un ${nota}` :
                    nota >= 7 ? `Notable porque tu nota es un ${nota}` :
                    nota >= 8 ? `Notable Alto porque tu nota es un ${nota}` :
                    nota >= 9 ? `Sobresaliente porque tu nota es un ${nota}`:
                    nota = 10 ? `Matrícula de Honor porque tu nota es un ${nota}` : '';
// está tabulado para entenderlo mejor pero no es necesario
console.log(calificacion);