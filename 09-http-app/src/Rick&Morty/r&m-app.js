import { baseURL, characterURL } from "./url-shortcuts";

/**
 * @returns {Promise{Objects{}}} Character information
 */
const fetchCharacters = async () => {

    const res = await fetch(`${baseURL}${characterURL}`);
    // const res = await fetch('https://rickandmortyapi.com/api/character'); // ambas const hacen lo mismo pero la primera está más simplificada y es buena práctica
    const data = await res.json();
    console.log(data);
    return data;
};

/**
 * 
 * @param {HTMLDListElement} element 
 */
export const RickAndMorty = ( element ) => {
    console.log('Rick And Morty');
    element.innerHTML = 'Loading...';
    
    fetchCharacters();

    // Creo const para los personajes
    const characterLabel = document.createElement('p');
    const nextCharacterBtn = document.createElement('button'); 
    nextCharacterBtn.innerText = 'Next Character';

    const renderCharacter = ( data ) => {
        characterLabel.innerHTML = data.results.name;
        element.replaceChildren(characterLabel, nextCharacterBtn);

        // Para comprobar si el btn funcionaba
        // console.log(nextCharacterBtn.addEventListener('click', () => {
        //     console.log('click');
        // }));
    };
    
    fetchCharacters()
        .then( data => renderCharacter(data));

};