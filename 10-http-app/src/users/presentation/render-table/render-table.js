import './render-table.css';
import usersStore from '../../store/users-store'
import { showModal } from '../render-modal/render-modal';

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

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();
    if ( !table ) {
        table = createTable();
        element.append(table); // pongo el append porque no queiro destruir nada que ya haya
    
        table.addEventListener('click', tableSelectListener)
    
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