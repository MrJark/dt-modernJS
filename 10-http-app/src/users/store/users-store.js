import  {loadUsersByPage}  from "../use-cases/load-users-by-page"; // he intentado hacer este import y tampoco funciona

const state = {
    users: [], 
    curentPage: 0,
};

const loadNextPage = async () => {
    // throw new Error('Not implemenrted yet');
    await loadUsersByPage(state.curentPage + 1);
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

    getUsers: () => [...state.users],
    getCurrentPage: () => state.curentPage,
};
