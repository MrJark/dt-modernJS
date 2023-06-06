import { baseURL, characterURL } from "./url-shortcuts";

/**
 * @returns {Promise{Objects{}}} Character information
 */
const fetchCharacters = async () => {

    const res = await fetch(`${baseURL}${characterURL}`);
    // const res = await fetch('https://rickandmortyapi.com/api/character'); // ambas const hacen lo mismo pero la primera está más simplificada y es buena práctica
    const data = await res.json();
    // console.log(data);
    return data;
};

/**
 * 
 * @param {HTMLDListElement} element 
 */
export const RickAndMorty = ( element ) => {
    console.log('Rick And Morty');
    document.querySelector('#app-title').innerHTML = 'Rick & Morty 🧪';
    element.innerHTML = 'Loading...';
    
    fetchCharacters();

    // Creo const para las caracte. de los personajes
    // Btn para next
    const nextCharacterBtn = document.createElement('button'); 
    nextCharacterBtn.innerText = 'Next Character';


    const characterNameLabel = document.createElement('h3');
    const characterOriginLabel = document.createElement('p');
    const characterStatusLabel  = document.createElement('p');
    const characterSpecieLabel  = document.createElement('p');

    

    const renderCharacter = ( data ) => {

        // # entre los cuales debería iterar la funcion para cambiar los valores
        const dataLength = data.results.length ;
        const randomCharacter = Math.floor(Math.random(dataLength) * data.results.length); // esta función me da los valores aleatorios entre el 0 y data.results.length - 1 que es 20
        console.log(randomCharacter);
        
        // prueba de ciclos for ( de esta forma no porque me los da todos, no uno solo )
        // for( let i = 0; i < data.results.length ; i++) {
        //     console.log(data.results.slice(0)[i].name);
        // };

        characterNameLabel.innerHTML = 'Name: ' + data.results.slice(0)[randomCharacter].name;
        characterOriginLabel.innerHTML = 'Origin: ' + data.results.slice(0)[randomCharacter].origin.name;
        characterSpecieLabel.innerHTML = 'Specie: ' + data.results.slice(0)[randomCharacter].species;
        characterStatusLabel.innerHTML = 'Status: ' + data.results.slice(0)[randomCharacter].status;

        element.replaceChildren(
            characterNameLabel, 
            characterOriginLabel, 
            characterSpecieLabel, 
            characterStatusLabel,
            nextCharacterBtn,
        
        );

        

        // Para comprobar si el btn funcionaba
        // console.log(nextCharacterBtn.addEventListener('click', () => {
        //     console.log('click');
        // }));
    };

    // Tarea: hacer que el btn funcione y me traiga nuevo personaje
    nextCharacterBtn.addEventListener('click' , async () => {

        element.innerHTML = 'Loading...';

        const newCharacter = await fetchCharacters();

        renderCharacter(newCharacter);
        
    });


    fetchCharacters()
        .then( data => renderCharacter(data));

};