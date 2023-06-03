import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDListElement} element 
 */
export const asyncGeneComponent = async ( element ) => {
    console.log('Async Generators');

    const heroGen = getHeroGen();
    let isFinished = false;

    // ciclo dowhile me devuelve el value, el nombre, de cada uno de los heroes cogidos por el id mientras el isFinished esté en true, es decir, que el done sigua siendo false
    do { 
        const { value, done } = await heroGen.next();
        if (isFinished) break;
        element.innerHTML = value;

    } while ( !isFinished );
};

// función que me da cada uno de los heores en heroes esperando el tiempo del sleep()
async function* getHeroGen() {
    for ( const hero of heroes ){
        await sleep();
        yield hero.name;
    };
}

// función para devolver el resolve casa 1000 ms. Va a ser usada para decolver los nombres de los ids de los heroes
const sleep = () => { 
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    } )
}