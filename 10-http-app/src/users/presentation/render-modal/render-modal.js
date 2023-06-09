import './render-modal.css'
import { getUserById } from '../../use-cases/get-user-by-id';
import { User } from '../../models/user';
import modalHtml from './render-modal.html?raw'; // el ' ?raw ' es para traer los htmls 'duros' a elementos de js pero SOLO funciona en vite. Para otras librerias, tendrán otra sintaxis

let modal, form;
let loaderUser;

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async (id) => {

    modal?.classList.remove('hide-modal'); // la ? es para validar si existe, aunque siempre debería estar
    loaderUser = {};

    if (!id) return;
    const user = await getUserById(id);
    setFormValue(user);

};

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
};

/**
 * 
 * @param {User} user 
 */
const setFormValue = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loaderUser = user;
};

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback como nuevo usuario
 * 
 */
export const renderModal =  ( element, callback ) => {
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
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // esto es para que no se envie directamente el formulario, detenaga la acción por defecto

        const formData = new FormData(form); // objeto de js
        const userLike = {...loaderUser};
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
        await callback(userLike);
        hideModal();
    });

    element.append( modal );
};