// da error si no pones ' ?raw ' porque está esperando un módulo de js y no un html. Lo bueno de vite es que poniendo ?raw se soluciona
import { renderTodos } from './use-cases';
import html from './app.html?raw'
import todoStore from '../store/todo.store';

// Función para llamra los distintos ids y classes del app.html y que no hayan strings porque es muy volátil. Si en cambian los ids o classses y los tenes en muchas funciones, puede fallar la app si no los quitas, sin embargo, si los tienes todos en una misma fucnión, solo tienes que cambiarlos cada uno, una sola vez
const ElementsIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',

};

/**
 * 
 * @param {string} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => { // el encargado de "redibujar" los todos
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        // console.log(todos);
        renderTodos( ElementsIds.TodoList, todos ); // llamo al id donde quiero que se renderice y lo que quiero que se renderice, los todos 
    }

    // Función autoinvocada  para cuando se llama a App
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app )
        displayTodos();
    })();

    // Referencias HTML ( las hacemos aquí abajo porque hasta que no esté todo renderizado estas no existen )
    
    const newDescriptionInput = document.querySelector( ElementsIds.NewTodoInput );


    // Listeners

    newDescriptionInput.addEventListener('keyup', ( event ) => {
        if ( event.KeyCode !== 13 ) return;
        // Los KeyCode son los códigos únicos de cada una de las teclas del teclado, el 13 es la de la tecla " enter " por tanto, cuando se pulse, se habrá creado una una descripción de tarea
        
        if ( event.target.value.trim().length === 0) return; 
        // .trim() elimina todos los espacios vacios por tanto, esto queire decir que si el evento, quitando todos los espacios es 0, es decir, o se ha escrito nada, no se haga nada porque no queremos tareas vacias
        todoStore.addTodo( event.target.value );

        displayTodos();

        event.target.value = ''; // para limpiar la caja de eventos cuando lo hemos mandado
    });

}