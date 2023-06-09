import { User } from "../models/user";
import  {loadUsersByPage}  from "../use-cases/load-users-by-page"; // he intentado hacer este import y tampoco funciona

const state = {
    users: [], 
    currentPage: 0,
};

const loadNextPage = async () => {
    // throw new Error('Not implemenrted yet');
    const users = await loadUsersByPage(state.currentPage + 1);
    if ( users.length === 0) return; // si no hay usuarios, o solicito una página donde no los hay, no me retornará nada

    // Pero si sí hay usuarios, me vaya sumando las páginas y users sea = users
    state.currentPage += 1;
    state.users = users;
};

// Reto: hacer que el btn de prev page funcione (conseguido!!)
const loadPrevioustPage = async () => {
    // throw new Error('Not implemenrted yet');
    const users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 0 || state.currentPage === 1) return;

    state.currentPage -= 1;
    state.users = users;
    
};

/**
 * 
 * @param {User} updateUser 
 */
const onUserChanged = (updateUser) => {
    // throw new Error('Not implemenrted yet');
    let wasFound = false;

    state.users = state.users.map( user => {
        if(user.id === updateUser.id) {
            wasFound = true;
            return updateUser;
        }
        return user;
    });

    if( state.users.length < 10 && !wasFound) { // users mínimos por página
        state.users.push(updateUser);
    }

};

const reloadPage = async () => {
    throw new Error('Not implemenrted yet');

};

export default {
    loadNextPage,
    loadPrevioustPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]} Users with Ids, Name...
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number} Page
     */
    getCurrentPage: () => state.currentPage,
};
