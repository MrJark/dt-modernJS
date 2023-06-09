import './render-table.css';
import usersStore from '../../store/users-store'
import { showModal } from '../render-modal/render-modal';
import { deleteUserById } from '../../use-cases/delete-user-by-id';

let table;

const createTable = () => { // para crear la tabla que va a aparecer en el html
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');

    // tr es la tabla y th son los headers
    tableHeaders.innerHTML = `
        <tr>
            <th>#Id</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
};

/**
 * 
 * @param {MauseEvent} event 
 */
const tableSelectListener = (event) => {
    // console.log(event.target); // este log es para saber que es lo que estoy tocando y a partir de ahí, poder jugar con lo que quiero hacer cunado toque ese elemento
    const element = event.target.closest('.select-user'); // .closest('id o class del elemento') me parmite escuchar el click mas cercano a esta clase, en las demás partes me dará un resultado null
    if (!element) return; // si no le doy al elemento que queiro, no hace nada
    const id = element.getAttribute('data-id'); // tomo el elemento y cojo su id del data-id
    showModal(id);
};

/**
 * Eliminar usuarios
 * @param {MauseEvent} event 
 */
const tableDeleteListener = async (event) => {
    // console.log(event.target); // este log es para saber que es lo que estoy tocando y a partir de ahí, poder jugar con lo que quiero hacer cunado toque ese elemento
    const element = event.target.closest('.delete-user'); // .closest('id o class del elemento') me parmite escuchar el click mas cercano a esta clase, en las demás partes me dará un resultado null
    if (!element) return; // si no le doy al elemento que queiro, no hace nada
    const id = element.getAttribute('data-id'); // tomo el elemento y cojo su id del data-id
    try {
        await deleteUserById(id); // eliminamos página
        await usersStore.reloadPage(); // then recargamos página
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage(); // then reload current page por si hemos cambiado la página
        renderTable(); // finally recargar la tabla
    } catch (error) {
        console.log(error);
        alert('No se pudo eliminar');
    }
};

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();
    if ( !table ) {
        table = createTable();
        element.append(table); // pongo el append porque no queiro destruir nada que ya haya
    
        table.addEventListener('click', tableSelectListener);
        table.addEventListener('click', tableDeleteListener);
    
    };

    let tableHTL = '';

    // td son las descriptions
    users.forEach( user => {
        tableHTL += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" class= "select-user" data-id="${user.id}" > Select</a>
                    |
                    <a href="#/" class= "delete-user" data-id="${user.id}" > Delete</a>
                </td>
            </tr>
        `
    }) // recorre todos los usuarios para que pueda determinar

    table.querySelector('tbody').innerHTML = tableHTL;

};