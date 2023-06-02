import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDListElement} element 
 */
export const asyncAwaitComponent = async( element ) => {
    console.log('Async and Await');

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f233c9f2425f16916';

    // Para manejar errores en funciones async/await se usa el try y catch
    try {
        const hero1 = await findHero (id1 );
        const hero2 = await findHero (id2 );
    
        element.innerHTML = `
            <p>${hero1.name}</p>
            <p>${hero2.name}</p>
        `;
        
    } catch (error) {
        element.innerHTML = error;
    }


};

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero )
        throw new Error(`Hero id ${id} not found`);
    return hero;
}