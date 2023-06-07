import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {HTMLDivElement} title 
 */
export const UsersApp = async (element, title) => {
    title.innerHTML = 'A title for this App';

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

};