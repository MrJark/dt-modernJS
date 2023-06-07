import  {loadUsersByPage}  from "../use-cases/load-users-by-page"; // he intentado hacer este import y tampoco funciona

const state = {
    users: [], 
    curentPage: 0,
};

const loadNextPage = async () => {
    // throw new Error('Not implemenrted yet');
    const users = await loadUsersByPage(state.curentPage + 1);
    if ( users.length === 0) return; // si no hay usuarios, o solicito una página donde no los hay, no me retornará nada

    // Pero si sí hay usuarios, me vaya sumando las páginas y users sea = users
    state.curentPage += 1;
    state.users = users;
};

const loadPrevioustPage = async () => {
    throw new Error('Not implemenrted yet');

};

const onUserChanged = () => {
    throw new Error('Not implemenrted yet');

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
    getCurrentPage: () => state.curentPage,
};
