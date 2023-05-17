
const heroes = ['Ironman', 'Black Widow', 'Spiderman', 'Capitana Marvel'];

console.warn('Ciclo "for" tradicional ');

for (let i = 0; i < heroes.length; i++) { 
    console.log(heroes[i]);
    
};
/*
Partes del ciclo for tradicional:
    1º -> inicialización de la variable, normalmente se inicia en 0 pero tb puede ser en cualquier otro número
    2º -> la condición que vamos a validar, el ciclo se irá validando mientras esta sea verdadera
    3º -> condición de incrementación
Sintaxis básica de los ciclos for pero se puede sustituir por el 'for in'
*/

console.warn('Ciclo "for in" ');

for ( let i in heroes ) {
    console.log(heroes[i]);
};
/**
 * Los ciclos for in iteran sobre todas las propiedades de un objeto y son la 'sustitución' de los for tradicionales
 * 
 */

console.warn('Ciclo "for of" ');

for ( let heroe of heroes ) {
    console.log(heroe);
};
/**
 * Estos ciclos se acostumbra poner la variable que queires hacer log, en este caso heroe, en singular en comparación al objeto que se va a mapear. Si fuera el objeto patatas, el let sería patata
 * Estos ciclos for of no se pueden dar en todos los objetos, es específica para las colecciones
 * Se usa mucho para obtener referencias de los valores del objeto
 */