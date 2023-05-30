import { createTodoHTML } from "./create-todo-html";
import { Todo } from "../models/todo.models"

let element;

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {
    // Esta función no regresa nada ya que es en esta función donde se van a crear los todos
    // console.log(elementId, todos);

    // const element = document.querySelector( elementId );
    /*
    no es eficiente tener esta línea ↑ pero es algo visual que te permite ver cómo funciona js. Para hacerla más eficiente hacemos: inicializar una variable en el scope general para llamarla dentro de esta función. Lo eficiente es lo siguiente:
    */ 
    // !element ? document.querySelector( elementId ) : element;
    // !element ? throw new Error(`Element ${ elementId } is not found`) : '';
    // No he conseguido hacerlo de esta manera porque tenía !element iguales y le asignaba valores distintos

    if ( !element )
        element = document.querySelector( elementId );
    if ( !element ) throw new Error(`Your id, ${elementId}, is not found`)

    element.innerHTML = ''; // para que no apile y acumule los distintos todos. Para purgar

    todos.forEach( todo => {
        // element.append(createTodoHTML( todo ) );
        element.append(createTodoHTML(todo));
    });
};