// da error si no pones ' ?raw ' porque está esperando un módulo de js y no un html. Lo bueno de vite es que poniendo ?raw se soluciona
import html from './app.html?raw'
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

// Función para llamra los distintos ids y classes del app.html y que no hayan strings porque es muy volátil. Si en cambian los ids o classses y los tenes en muchas funciones, puede fallar la app si no los quitas, sin embargo, si los tienes todos en una misma fucnión, solo tienes que cambiarlos cada uno, una sola vez
const ElementsIds = {
    TodoList: '.todo-list', // lista donde creo todos los todos
    NewTodoInput: '#new-todo-input',
    DestroyTodo: '.destroy',

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

    // Referencias HTML ( las hacemos aquí abajo porque hasta que no esté todo renderizado, no existen )
    
    const newDescriptionInput = document.querySelector( ElementsIds.NewTodoInput );
    const todoListUl = document.querySelector( ElementsIds.TodoList );
    // const destroyTodoListUl = document.querySelector( ElementsIds.DestroyTodo ); // no hacia falta


    // Listeners

    newDescriptionInput.addEventListener('keyup', ( event ) => {
        // console.log(event);
        if ( event.keyCode !== 13 ) return;
        // Los KeyCode son los códigos únicos de cada una de las teclas del teclado, el 13 es la de la tecla " enter " por tanto, cuando se pulse, se habrá creado una una descripción de tarea
        
        if ( event.target.value.trim().length === 0) return; 
        // .trim() elimina todos los espacios vacios por tanto, esto queire decir que si el evento, quitando todos los espacios es 0, es decir, o se ha escrito nada, no se haga nada porque no queremos tareas vacias
        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = ''; // para limpiar la caja de eventos cuando lo hemos mandado

    });

    todoListUl.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]'); // los corchetes son necesarios
        // console.log( element );
        // el método closest() permite extraer el elemento que indiquemos del padre más cencano, en este caso queremos el data-id que es donde se renderiza el id del todo
        todoStore.toggleTodo( element.getAttribute('data-id') ); 
        // con esto conseguimos extaer el id específico del todo
        
        displayTodos();
    });

    // Tarea: dar funcionalidad al boton eliminar todo (no conseguido después de 30 minutos)

    todoListUl.addEventListener('click', ( event ) => {

        const isDestroy = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]'); // tb debemos tener esta const
        console.log({isDestroy});

        if ( !element || ! isDestroy ) return; // si no son, no debe hacer nada

        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();

        // console.log(event.target.closest('destroy') ? 'cool' : 'fuck');
        // const destroy = event.targer.button.getElementByClassName('destroy')
        // console.log(destroy);
        
        // console.log(event.target);
        // const destroy = event.target.getElementByClassName('destroy');
        // console.log( event.target.getAttribute('destroy') ? 'cool' : 'fuck' );
        
        // DestroyTodo.DestroyTodo( destroy.getAttribute('destroy') );
        

    });


}