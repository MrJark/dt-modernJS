import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDListElement} element 
 * @param { (hero: Object) => void } callback
 */
export const callbacksComponent = ( element ) => {
    console.log('callbacks');

    const id = '5d86371f1efebc31def272e2';
    findHero(id, (error, hero) => {

        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    });

};

/**
 * Ejemplo de manejo de errores con callbacks (estándares antiguos)
 * @param {String} id 
 * @param {(error: String|Null, hero: Object) => void} callback 
 */
const findHero = ( id, callback ) => {
    
    const hero = heroes.find ( hero => hero.id === id );

    if (!hero) {
        callback (`Error with your id: ${id}`);
        return; // undefined
    };
    

    callback( null, hero ); // esto es el callback
};