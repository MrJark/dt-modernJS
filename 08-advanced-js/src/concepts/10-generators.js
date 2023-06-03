
/**
 * 
 * @param {HTMLDListElement} element 
 */
export const generatorComponent = ( element ) => {
    console.log('Generator');

    const genId = idGen();
    const btnClicker = document.createElement('button'); // lo creo
    btnClicker.innerText = 'Click me'; // le doy un texto
    element.append(btnClicker); // lo renderizo

    const renderBtn = () => { 
        const {value} = genId.next(); // desestructurar la función idGen para que solo me de el value, es decir, el número, el currentId
        btnClicker.innerText = `Click ${value}`;
    };

    // btnClicker.addEventListener('click', () => renderBtn()) // como la arrow y la function no reciben valores, puedo poner solo el renderBtn:
    btnClicker.addEventListener('click', renderBtn)

};

function* idGen() {
    let currentId = 0;
    while (true) { // ciclo infinito ya que nunca puede ser false
        yield ++currentId; // suma al currentId. Si ponemos currentId++ de esta forma, lo primero que nos devuelve es un cero por el valor del currentId
    }
}