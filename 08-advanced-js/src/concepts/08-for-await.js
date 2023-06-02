import { heroes } from "../data/heroes";

//! Este tipo de casos de uso del for await es muy específico 

/**
 * 
 * @param {HTMLDListElement} element 
 */
export const forAwaitComponent = async ( element ) => {
    console.log('For - Await');

    const heroesIds = heroes.map( hero => hero.id ); // para recorrer todos los ids del heroes.js
    
    const heroPromises = getHeroesAsync ( heroesIds );
 
    for await( const hero of heroPromises ){ // es como un ciclo for donde se ejecuta por cada uno de los elementos que le digamos pero le decimos que primero ejecute el heroPromise con el await
        element.innerHTML += `${ hero.name } <br/>`;
    }
};

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns  {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
};

const getHeroAsync = async ( id ) => {
    await new Promise(( resolve ) => {
        setTimeout( () => resolve() , 1000)
    });

    return heroes.find( hero => hero.id === id );
};