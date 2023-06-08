import modalHtml from './render-modal.html?raw'; // el ' ?raw ' es para traer los htmls 'duros' a elementos de js pero SOLO funciona en vite. Para otras librerias, tendrán otra sintaxis
import './render-modal.css'

let modal, form;


export const showModal = () => {

    modal?.classList.remove('hide-modal'); // la ? es para validar si existe, aunque siempre debería estar
    
};

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
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

        const formData = new FormData(form); // objeto de js
        const userLike = {};
        for (const [key,value] of formData) { // ciclo for of donde la const es la desestructuración en forma de key y value del formData que sería: key: firstName , value: Chema
            if (key === 'balance') {
                userLike[key] = +value; // esta es la forma de transformar un string en un numeral ya que el balance es un numeral
                continue; // ponemos continue y no return porque esta primera permite seguir el ciclo mienstras que el return te saca de la función
            }
            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false; // porque el isActive tiene que ser un true or false y el campo devuelve un 'on'
                continue;
            }
            userLike[key] = value;
        }
        // console.log(userLike);
        hideModal();
    });

    element.append( modal );
};