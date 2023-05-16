
const regresaTrue = () => {
    return true;
}
const regresaFalse = () => {
    return false;
};

/*
Operador negación
poner un ' ! ' antes de un elemento significa negación para cualquier valor booleano

*/
console.warn('!');
console.log(!true); //regresa false
console.log(!regresaFalse()); // regresa true

/*
Operador and -> && 
para que un && (and) nos de true, todos los valores deben ser verdaderos
*/
console.warn('AND');
console.log(regresaTrue() && regresaFalse());// dará false
console.log(regresaTrue() && !regresaFalse());// dará true
/*
Esto tiene una particularidad, como ambos deben ser true para que de true, si en js el primer elemento es false, no se ejecutará lo que haya después ya que lo primero ya es false, por tanto dará false
*/

console.warn('OR'); // true
console.log(true || false); // sale true
console.log(false || true); // sale true
console.log(false || false); // sale false, esta es la única condición para que de falso

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

//Operaciones con &&
const a1 = false && 'Hola Mundo' && 149; // esto dará false, proque para que se cumpla y de el valor último, porque es el último el que vale, tiene que ser todo true
const a2 = true && 'Hola Mundo' && 149; // esto da 149
const a3 = soyFalse && 'Hola Mundo' && 149; // esto da false por soyFalse
const a4 = true && 'Hola Mundo' && true; // esto da true
const a5 = true && true && 'Hola Mundo'; // esto da Hola Mundo

console.log({a1, a2, a3, a4, a5});

//Operaciones con || 
//Con estos operadores, solo va a devolver algo que tenga valor, lo primero que tenga valor, los undefined los ignora, los null tb y los false tb

const b1 = false || 'Hola Mundo' || 159; // da hola mundo
const b2 = false || soyNull || 159; // da 159
const b3 = false || soyNull || soyUndefined || 159; // da 159
const b4 = false || soyNull || soyUndefined || 159; // da 159
const b5 = false || soyNull || soyUndefined || 159 || true; // da 159 y a true no llega porque ya ha encontrado un valor
const b6 = false || soyNull || soyUndefined || soyNull; // si ninguno tiene contenido, coge el último

console.log({b1, b2, b3, b4, b5, b6});

//Estas operaciones se ven en condicionales