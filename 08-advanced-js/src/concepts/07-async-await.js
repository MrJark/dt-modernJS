
/**
 * 
 * @param {HTMLDListElement} element 
 */
export const asyncandawaitComponent = async( element ) => {
    console.log('Asyn & Await');
    console.time('Start');
    
    // Esta forma de llamar las const es mas lenta, aprox. 4 segundos, que usando el Promise.all
    // const value1 = await slowPromise();
    // const value2 = await midPromise();
    // const value3 = await fastPromise();

    // ESta es una forma de "hackear" la velocidad de las respuestas en las promesas
    const [ value1, value2, value3 ] = await Promise.all([
        slowPromise(),
        midPromise(),
        fastPromise(),
    ])

    element.innerHTML = `
        value1: ${value1} <br/>
        value2: ${value2} <br/>
        value3: ${value3} <br/>
    `;
    console.timeEnd('Start');
};

const slowPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Slow Promise');
    }, 2000);
});
const midPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Mid Promise');
    }, 1500);
});
const fastPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Fast Promise');
    }, 1000);
});