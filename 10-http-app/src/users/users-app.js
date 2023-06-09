import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { renderBtn } from "./presentation/render-btn/render-btn";
import { renderAddBtn } from "./presentation/render-add-btn/render-add-btn";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveUser } from "./use-cases/save-user";

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
    renderAddBtn(element );
    renderModal( element, async (userLike) => { // el segundo argumento es el callback que me guarda el objeto user
        const user = await saveUser(userLike); // función para uardar el nuevo user, userLike
        usersStore.onUserChanged(user); // función para cambios en los usuarios
        // console.log(user);
        renderTable(); // renderizar el modal con los nuevos users añadidos
    } );
};