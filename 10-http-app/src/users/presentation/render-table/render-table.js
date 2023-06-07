import './render-table.css';
import usersStore from '../../store/users-store'

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
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();
    if ( !table ) {
        table = createTable();
        element.append(table); // pongo el append porque no queiro destruir nada que ya haya
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
                    <a href="#/" data-id= "${user.id}" > Select</a>
                    |
                    <a href="#/" data-id= "${user.id}" > Delete</a>
                </td>
            </tr>
        `
    }) // recorre todos los usuarios para que pueda determinar

    table.querySelector('tbody').innerHTML = tableHTL;

};