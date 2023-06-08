import { showModal } from '../render-modal/render-modal';
import './render-add-btn.css';

/**
 * 
 * @param {HTMLDivElement} element
 * 
 */
export const renderAddBtn = async ( element ) => {

    const fabBtn = document.createElement('button');
    fabBtn.innerText = ' + ';
    fabBtn.classList.add('fab-btn');

    element.append(fabBtn);

    fabBtn.addEventListener('click', () => {
        // throw alert( new Error('Not implemented yet') ); 
        showModal();
    });
};