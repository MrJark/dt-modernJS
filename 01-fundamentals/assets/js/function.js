
// Formas para definir funciones

function saludar() { // lo que se coloca dentro de los paréntesis son los argumentos
    console.log('Hola mundo');
};

const salu2 = function () {
    console.log('Hola Mundo');
};

const u_U = () => { // arrow function y son las más utilizadas

};

// Retos

function sumar (a, b) {
    return a +' '+ b;
};
console.log(sumar('Hola', 'Mundo'));

function sumar2 (a, b) {
    return a + b;
};
console.log(sumar2(2,3));
// la siguiente función hace lo mismo que la de sumar anterior pero más corta ya que solo quiero el return, en el caso que tuviera más elementos, no se podría hacer

const sumar3 = (a,b) => a + b; 
console.log(sumar3(2,7));

// Reto: transformar getAleatorio en getAleatorio2 pero siendo arrrow function
function getAleatorio() {
    return Math.random()*100;
};
console.log('Random1:',getAleatorio());

const getAleatorio2 = () => Math.random()*100; 
console.log('Random2:',getAleatorio2());

