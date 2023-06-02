
/**
 * 
 * @param {HTMLDListElement} element 
 */
export const promiseRaceComponent = ( element ) => {
    console.log('Promise Race');

    element.innerHTML= 'Loading...'; // para tener algo mientras se carga como buena práctica

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }
    Promise.race([ // la función race hace que se haga una 'carrera' entre las funciones y que retorne en este caso, la más rápida
        slowPromise(),
        midPromise(),
        fastPromise(),
    // ]).then (value => renderValue(value)) // igual que:
    ]).then(renderValue);

};

const slowPromise = () => new Promise( resolve => { // cte que devuelve una Promesa que tiene como función devolver Solw Promise' en 2000ms
    setTimeout( () => {
        resolve('Slow Promise');
    }, 2000);
});
const midPromise = () => new Promise( resolve => { // cte que devuelve una Promesa que tiene como función devolver Solw Promise' en 2000ms
    setTimeout( () => {
        resolve('Mid Promise');
    }, 1500);
});
const fastPromise = () => new Promise( resolve => { // cte que devuelve una Promesa que tiene como función devolver Solw Promise' en 2000ms
    setTimeout( () => {
        resolve('Fast Promise');
    }, 1000);
});