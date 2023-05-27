import { Todo } from "../todos/models/todo.models";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state  = {
    todos: [
        new Todo('PIEDRA'),
        new Todo('PAPEL'),
        new Todo('TIJERA'),
        new Todo('LAGARTO'),
        new Todo('SPOCK'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore🍍');
}

export default {
    initStore, 
}