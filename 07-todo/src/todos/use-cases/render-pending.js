import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {string} elementId 
 */
export const renderPending = ( elementId ) => {

    if ( !element )
        element = document.querySelector(elementId);
    if ( !element )
        throw new Error(`Element ${elementId} not found`);
    
    // Si existe entonces:
    element.innerHTML = todoStore.getTodos( Filters.Pending ).length; // pongo .lenght porque me regresa un arreglo y necesito el número

}