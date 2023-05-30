import {Todo} from "../models/todo.models";

/**
 * 
 * @param {todo} todo 
 */
export const createTodoHTML = ( todo ) => {
    if ( !todo ) throw new Error('A TODO object is required');

    /*
    copiamos el código de app.html porque es "poco", sino tendríamos que contruirlo de otra manera
    la clase completed solo aparecerá si el todo está en done y el data-id será un atributo que corresponderá
    a cada id identificativo
    */

    // para no escribir siempre " todo. " y lo que queramos del mismo, podemos hacer una deconstrucción del todo y llamar lo que nos haga falta y así evitarnos código
    const { done, description, id} = todo; 
    
    const html = `
        
        <div class="view">
            <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
            <label>${ description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        
    `;

    /*
    como estamos crando el 'li' con js, el li del html 
    <li class="${ todo.done ? 'checked' : '' }" data-id="abc"></li>
    sobra pero las clases y los ids necesitamos crearlos
    */
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.getAttribute('data-id', id); // le damos la clase data-id para identificarlo
    todo.done ? liElement.classList.add('completed') : '';
    // liElement.classList.add('completed'); // solo si todo.done == true

    return liElement;
};