import modalHtml from './render-modal.html?raw'; // el ' ?raw ' es para traer los htmls 'duros' a elementos de js pero SOLO funciona en vite. Para otras librerias, tendrán otra sintaxis
import './render-modal.css'

let modal;


export const renderModal = ( element ) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    element.append( modal );
}