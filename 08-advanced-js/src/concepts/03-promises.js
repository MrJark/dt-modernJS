import {heroes} from '../data/heroes'

/**
 * 
 * @param {HTMLDListElement} element 
 */
export const promiseComponent = ( element ) => {
    console.log('Promises');

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    };
    
    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;

    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error: </h1>
            <h3>${error}</h3>
        `;
    }

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    
    // esto es para un solo hero
    // findeHero (id1) // cuando la variable o variables que creo únicamente lo hago para mandarla/s a la función y en el mismo orden, puedo evitar popnerlas ya que por defecto es lo que hará js
    //     .then(renderHero) // para recoger lo que queiro que haga la promesa
    //     // .then(superHero => renderHero(superHero));
    //     .catch(renderError) // para recoger el error que puede dar la promesa
    //     // .catch( error => renderError (error)) // para recoger el error que puede dar la promesa
    //     .finally() // lo que se necesita para acabar la función de promesa
    //  // las propiedades .then() .catch() y .finally() son específicas de la promesas

    // para dos heros
    let hero1; // no me haría falta tener el hero2 como una constante
    
    //! Forma 1
    // findeHero (id1 )
    //     .then( (hero) => { // aun estando en promesas, esto es un callback
    //         hero1 = hero;
    //         findeHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeros(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch( renderError );
    //! Forma 2 
    //Puedo sustiruir el anterior código por el siguiente el cual es más sencillo y rápido de leer
    // findeHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findeHero(id2);
    //     }).then (hero2 => { // este then hace referencia al id2 y por tanto al hero2
    //         renderTwoHeros(hero1, hero2);
    //     })
    //     .catch( renderError );
    //!Forma 3 y más sencilla
    //Promise.all es un método de js para promesas y se puede aplicar para aquellas que no tengan interferencia entre las mismas, es decir, que no dependen una de la otra
    Promise.all([
        findeHero(id1),
        findeHero(id2),
    ])
    .then( ([hero1,hero2] /* Pongo corchetes porque es un arreglo */) => renderTwoHeros( hero1, hero2 ))
    .catch( renderError );
};

/**
 * 
 * @param {String} id
 * @returns  {Promise} 
 */
const findeHero = (id) => {

    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve (hero);
            return;
        }
        reject(`Hero with id ${id} is not found`)
    });

};