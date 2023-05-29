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

// Funciones que necesitas para crear la aplicación de TODOS

const initStore = () => {
    console.log(state);
    console.log('InitStore🍍');
};

const loadStore = () => {
    throw new Error('No implemented yet');
};

/**
 * Muestra los todos dependiendo del filtro, sino los enseña todos
 * @param {string} filter 
 * Puede tener 4 estados: all, completed, pending o no valid
 */
const getTodos = ( filter = Filters.All ) => {
    // throw new Error('No implemented yet');

    // Hay 3 panoramas en esta función ya que existen 3 filtros: all, completed y pending
    switch ( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done ); 
            // El filter permite saber si todo está acabado, se podria poner todo => todo.done == true pero sería redundante ya que el .done me dice que está acabado
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
            // La negación del done es pendiente
        default:
            throw new Error(`El filtro ${ filter } no es valido`);
    };
};

/**
 * Añade un todo a través de la description con su respectivo id
 * @param {string} description 
 */
const addTodo = ( description ) => {
    // throw new Error('No implemented yet');
    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description));
};

/**
 * 
 * @param {string} todoId : Todo identify
 * Cambio de estado entre done y !done con el parámetro id
 */
const toggleTodo = (todoId) => {
    
    state.todos = state.todos.map( todo => { // el método map barre todo el arreglo, más sencillo que cualquier ciclo ese más eficiente con pocos elementos pero si tienes 1k, se hace pesado y no es el más indicado
        if (todo.id == todoId) {
            todo.done = !todo.done;
        }
        return todo; // siempre tienes que regresar la instancia 
    });
};

/**
 * Elimina un todo gracias a su id
 * @param {string} todoId : Todo identify
 */
const deleteTodo = (todoId) => {
    // throw new Error('No implemented yet');
    state.todos = state.todos.filter( todo => todo.id != todoId); 
    // Devulevo todos los todos que tengan el id distinto al cual ha borrado
};

/**
 * Asigna 'completed' a un todo gracias a su id
 * @param {string} todoId : Todo identify
 */
const deleteCompleted = (todoId) => {
    // throw new Error('No implemented yet');
    state.todos = state.todos.filter( todo => todo.done ); 
    // Parecido al delete pero tiene que aquellos todos que no tengan la propiedad done
};

/**
 * Para mostrar solo aquellos TODO que estén dentro del filtro 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    // throw new Error('No implemented yet');
    state.filter = newFilter;
};

/**
 * Para limitar la capacidad de los Usuarios de manipular el store
 */
const getCurrentFilter = () => {
    // throw new Error('No implemented yet');
    return state.filter;
};

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore, 
    loadStore,
    setFilter,
    toggleTodo,
}