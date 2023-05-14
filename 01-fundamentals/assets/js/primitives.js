
let nombre = 'string';
console.log(typeof nombre); // typeof te dice que tipo de dato está guardando la variable que le indicas

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 25;
console.log(typeof edad);

let jiji;
console.log(typeof jiji); // da undefined ya que ha sido inicializada, por eso no da error, pero no se le ha asignado valor

let esNull = null;
console.log(typeof esNull);// da un objeto, por eso se dice que null es un objeto

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1 === symbol2);// da false