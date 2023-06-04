import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
    // throw new Error('No implementado');
    await loadUsersByPage( state.currentPage + 1);
};

const loadPrevioustPage = async () => {
    throw new Error('No implementado');
    
};

const onUserChange = () => {
    throw new Error('No implementado');
    
};


const reloadPage = async() => {
    throw new Error('No implementado');

};

export default {
    loadNextPage,
    loadPrevioustPage,
    onUserChange,
    reloadPage,

    getUser: () => [...state.users], // ponemos el spread porque los objetos pasan por referencia 
    getCurrentPage: () => state.currentPage,
};

