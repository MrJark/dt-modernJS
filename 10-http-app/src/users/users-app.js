import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { renderBtn } from "./presentation/render-btn/render-btn";

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {HTMLDivElement} title 
 */
export const UsersApp = async (element, title) => {
    title.innerHTML = 'A title for this App';

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = ''; // quito el loading porque ya no está cargando, ya tengo la tabla

    renderTable( element );
    renderBtn(element);
};