import userStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-btn.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderBtn = ( element ) => {
    const nextBtn = document.createElement('button');
    nextBtn.innerText = ' >> ';

    const prevBtn = document.createElement('button');
    prevBtn.innerText = ' << ';

    const currentPabeLabel = document.createElement('span');
    currentPabeLabel.id = 'current-page';
    currentPabeLabel.innerText = userStore.getCurrentPage();

    element.append( prevBtn, currentPabeLabel, nextBtn);

    nextBtn.addEventListener('click', async () =>{
        await userStore.loadNextPage();
        currentPabeLabel.innerText = userStore.getCurrentPage();
        renderTable(element);
    });

    prevBtn.addEventListener('click', async () => {
        await userStore.loadPrevioustPage();
        currentPabeLabel.innerText = userStore.getCurrentPage();
        renderTable(element);
    });
}