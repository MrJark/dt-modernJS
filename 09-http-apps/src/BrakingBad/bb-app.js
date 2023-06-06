import { baseURL, quoteURL } from "./url-shortcuts";

/**
 * @returns {Promise{Objects{}}} Quote information
 */
const fetchQuotes = async () => {
    const res = await fetch(`${baseURL}${quoteURL}`);

    const data = await res.json();
    console.log(data);
    return data;
};

const newAuthors = '.slice(0)[0].author';
const newQuotes = '.slice(0)[0].quote';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BrankingBadApp = ( element ) => {
    console.log('Braking Bad');
    document.querySelector('#app-title').innerHTML = 'Braking Bad App 💊';
    element.innerHTML = 'Loading...';

    fetchQuotes();

    // Creo una const para los personajes y el btn
    const authorLabel = document.createElement('h3');
    const quopteLabel = document.createElement('blockquote');
    const nextQuoteBtn = document.createElement('button');
    nextQuoteBtn.innerText = 'Chick me';
    
    const renderQuote = ( data ) => {
        authorLabel.innerHTML = data.slice(0)[0].author;
        quopteLabel.innerHTML = data.slice(0)[0].quote;


        element.replaceChildren( authorLabel, quopteLabel, nextQuoteBtn );
    };

    // Tarea: hacer que el botón funcone y si bloquee (usando la propiedad disable) cuando esté loading y además, que aparezca el " Loading... " (no conseguido)
    nextQuoteBtn.addEventListener('click', async () => {
        
        element.innerHTML = 'Loading...';

        const quote = await fetchQuotes();

        renderQuote( quote );
        // Y como siempre, mi código era ma´s difícil de lo que en realidad es 😪

        // Esta era mi solución pero no la he conseguido completar, me llamaba una nueca quote pero no conseguía mostrarla
        // nextQuoteBtn.disabled = true;
        // element.innerHTML = 'Loading...';

        // const newRenderQuote = fetchQuotes( (data) => {
        //     authorLabel.innerHTML = data.slice(0)[0].author;
        //     quopteLabel.innerHTML = data.slice(0)[0].quote;
        // });

        // newRenderQuote    
    });

    

    fetchQuotes()
        // .then( data => renderQuote(data)); // es la misma que la de abajo ya que el argumento que recibe es el mismo que la función y se puede obviar
        .then( renderQuote );
/*
Resolución del problema de mostrar quote y author en las nuevas APIs
Como las nuevas APIs no son las que está usando Fernando y no están construidas igual a día de hoy (03/06/2023), el render del quote y author en pantalla no es el mismo.

Esta es la API que estoy usando " https://breakingbadquotes.xyz "

Donde Fernando pone " 
authorLabel.innerHTML = data.author;    
quopteLabel.innerHTML = data.quote;

Yo he tenido que poner lo siguiente:

authorLabel.innerHTML = data.slice(0)[0].author;
quopteLabel.innerHTML = data.slice(0)[0].quote;

El " .slice(0) " es lo que me lleva al objeto, que en esta API es todos 0 ya que por defecto es random
El " [0] " es para acceder al elemento del .slice(0) y como no está enomurada, simplemente tiene la key, author o quote, pongo el [0]
Y por úñltimo, pongo la key, que en este caso si es el " .author " o " .qoute "

Espero que le sirva a alguien. Esto me ha llevado 2horas solucionarlo :'( 
*/
};
