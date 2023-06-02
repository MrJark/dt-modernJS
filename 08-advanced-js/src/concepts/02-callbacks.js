import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDListElement} element 
 * @param { (hero: Object) => void } callback
 */
export const callbacksComponent = ( element ) => {
    console.log('callbacks');

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f1efebc31def272e2';

    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = error;
            return;
        };
        // element.innerHTML = hero?.name; // con ? validamos que si es true hero, si existe, regrese la propiedad name y si no existe, regresa undefined
        // element.innerHTML = hero?.name || 'No hero'; // la ? valida si es true y sino, devuelve el string
        findHero( id2, (error, hero2) => { // y esto es el callback hell
            if (error) {
                element.innerHTML = error;
                return; 
            };
            element.innerHTML = `${hero1.name} && ${hero2.name}`;
        })
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