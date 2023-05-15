/*
Pro tips para escribir en js, y otros lenguajes, más limpio y rápido
*/

// First pro-tip
function createPerson (nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}
const person = createPerson ('Chema', 'Ferrandez');
console.log(person);
/*
Así es como se haría de una forma 'normal' pero se puede reducir de la siguiente manera:
    - si el nombre de la propiedad es = al nombre de la variable a la cual hacen referencia, no hace falta nombrarla dos veces, js entiende que es el mismo nombre
    - 
*/
function createPerson1 (nombre, apellido) {
    return { nombre, apellido }
}
const person1 = createPerson1 ('Chema', 'Ferrandez');
console.log(person1);


// Second Protip
//Crear la misma función pero en forma de arrow
const createPerson2 = (nombre, apellido) => ({ nombre, apellido });
const person2 = createPerson2 ('Chema', 'Ferrandez');
console.log(person2);

/*
Para que sea psoible crear el objeto después del => tiene que ir entre ( ) y esto quiere decir que lo quieres devolver como un objeto, todo junto
*/


// Third Protip
//para imprimir argumentos
function imprimeArgumentos () {
    console.log( arguments ); //arguments es un elemento propio de js
};
imprimeArgumentos(10, true, 'hola', 'Chema');
/*
Igual pero en arrow
El problema aquí es que en las funciones normales si se crean y por tanto se permite trabajar con los argumentos de esa manera pero en las arrow no se puede
y para soluconarlo hay que enviarle como argumento el propio 'arguments'.
Si solo le introduces eso, te da el primer argumento solo, para que te de todos los argumentos tienes que poner 3 puntos al inicio del arguments (o lo que le pidas)
este ...arguments no puede tener nada detrás, es decir, lo que quieras llamar en forma de parámetro, siempre debe de ir  delante de ' ...(lo que sea) '
Si necesitas uno de los argumentos en concreto, debes pedirselo a parte en el log, en este caso, y ya no aparecerá en el arguments
*/
const imprimeArgumentos2 = (...arguments) => {
    console.log(arguments);
};
imprimeArgumentos2(10, true, 'hola', 'Chema');
/*forma de pedir los distintos argumentos
es darla a la constante los valores entre [ ] de los nombres que quieres que tengan
Recuerda! como la edad ya la estoy pidiendo como parámetro, en la constante no me va a salir por tanto na la vpoy a pedir
*/
const imprimeArgumentos3 = (edad, ...arguments) => {
    return arguments;
};
const [vivo, saluda, nombre, casado] = imprimeArgumentos3(10, true, 'hola', 'Chema', false);
console.log( {vivo, saluda, nombre, casado} );

// Se puede hacer lo mismo, retornar lo que quieras, con funciones que retornan objetos.
const createPerson3 = (nombre, apellido) => ({ nombre, apellido });
const person3 = createPerson3 ('Chema', 'Ferrandez');
// la const person3 me devuelve un objeto pero si resulta que solo queiro el apellido, o cualquier otro elemento clave puedo:
const { apellido } = createPerson3('Chema', 'Ferrandez');
// para devolver la propiedad que quieres solo tienes que poner entre llaves, { }, lo que quieres 
console.log(person3);
console.log('Su apellido es', apellido );
// si quieres cambiar el nombre a la variables que le estás pidiendo porque el parámetro es así pero la función no:
const { apellido: nuevosApellidos } = createPerson3('Chema', 'Cascales');
console.log('Su nuevo apellido es:', nuevosApellidos);
//apellido sigue funcionando pero solo has cambiado el nombre de la variable para ese caso


// Fourth Protip
//desestructuración de objetos
const heroe = {
    nombre: 'Tony Stark',
    edad: 40,
    codeName: 'IronMan',
    vivo: false,
    pareja: 'Pepper Pots',
};

const imprimePropiedades = ( {heroe} ) => {
    console.log('nombre', heroe.nombre);
    console.log('edad', heroe.edad);
}
console.log(imprimePropiedades);
