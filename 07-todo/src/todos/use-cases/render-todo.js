import { createTodoHTML } from "./create-todo-html";
import { Todo } from "../models/todo.models"

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {
    // Esta función no regresa nada ya que es en esta función donde se van a crear los todos
    // console.log(elementId, todos);

    const element = document.querySelector( elementId );

    todos.forEach( todo => {
        // element.append(createTodoHTML( todo ) );
        element.append(createTodoHTML(todo));
    });
};