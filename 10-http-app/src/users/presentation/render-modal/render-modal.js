import modalHtml from './render-modal.html?raw'; // el ' ?raw ' es para traer los htmls 'duros' a elementos de js pero SOLO funciona en vite. Para otras librerias, tendrán otra sintaxis
import './render-modal.css'

let modal, form;


export const showModal = () => {

    modal?.classList.remove('hide-modal'); // la ? es para validar si existe, aunque siempre debería estar
    
};

export const hideModal = () => {
    modal?.classList.add('hide-modal'); 
};

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns {html} modal
 */
export const renderModal = ( element ) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form')

    // para cerrar el modal cuando hagan click fuera del mismo
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        };
    });

    // evento para caundo se hace el envio de información, submit
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // esto es para que no se envie directamente el formulario, detenaga la acción por defecto
    });

    element.append( modal );
}