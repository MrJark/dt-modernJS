// da error si no pones ' ?raw ' porque está esperando un módulo de js y no un html. Lo bueno de vite es que poniendo ?raw se soluciona
import html from './app.html?raw'

/**
 * 
 * @param {string} elementId 
 */
export const App = ( elementId ) => {

    // Función autoinvocada  para cuando se llama a App
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app )
    })();

}