import { Todo } from "../todos/models/todo.models";

export const Filters = {
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
    loadStore();
    console.log('InitStore🍍');
};

const loadStore = () => {
    // throw new Error('No implemented yet');
    if ( !localStorage.getItem('state') ) return; // si no hay nada en local, no devuelve nada
    
    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    /*
    Se hace una desestructuración porque daría error sino. Le decimos que nos de los todos y los filters, que es justo lo que hay en el state y sino hay,
    ponga por defecto el todos como vacio y el Filters como All
    Además, como local storage se guarda en string, tenemos que hacer el .parse para transformarlo
    Y ahora llamamos al todos y filters del state
    */
   state.todos = todos;
   state.filter = filter;

};

const saveInLocal = () => {
    // hay que mandar a llamar esta función cada vez que hagamos algo con los todos ya que es donde se guarda todo

    localStorage.setItem('state', JSON.stringify(state) ); // guarda en local storage la constante state y como solo guarda strings, le hacemos el JSON.stringify para que lo convierta a string

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

    saveInLocal();
};

/**
 * Añade un todo a través de la description con su respectivo id
 * @param {string} description 
 */
const addTodo = ( description ) => {
    // throw new Error('No implemented yet');
    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description));

    saveInLocal();
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

    saveInLocal();
};

/**
 * Elimina un todo gracias a su id
 * @param {string} todoId : Todo identify
 */
const deleteTodo = (todoId) => {
    // throw new Error('No implemented yet');
    state.todos = state.todos.filter( todo => todo.id != todoId); 
    // Devulevo todos los todos que tengan el id distinto al cual ha borrado

    saveInLocal();
};

/**
 * Asigna 'completed' a un todo gracias a su id
 * @param {string} todoId : Todo identify
 */
const deleteCompleted = () => {
    // throw new Error('No implemented yet');
    state.todos = state.todos.filter( todo => !todo.done ); 
    // Parecido al delete pero tiene que aquellos todos que no tengan la propiedad done

    saveInLocal();
};

/**
 * Para mostrar solo aquellos TODO que estén dentro del filtro 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    // throw new Error('No implemented yet');
    state.filter = newFilter;

    saveInLocal();
};

/**
 * Para limitar la capacidad de los Usuarios de manipular el store
 */
const getCurrentFilter = () => {
    // throw new Error('No implemented yet');
    return state.filter;

    saveInLocal();
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