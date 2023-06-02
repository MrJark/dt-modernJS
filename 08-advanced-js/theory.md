# Theory

- **Variables de entorno**

    Estas son variables que dependiendo de donde se encuentren, tendrán un valor u otro
    La forma más común de trabajar con estas variables es a través de paquetes de ' dotenv ' o .env
    Link al paquete: **<https://www.npmjs.com/package/dotenv>**
    Al trabajar con vite, no nos hace falta intalarlo ya que viene por defecto

    Los casos de uso mas comunes de estás dependencias .env son:

        1. Para tener variables privadas o API_KEYs
        2. Para tener URLs específicas

    Es común también hacer una copia del archivo .env donde nombre las variables que hay en el archivo privado para ser llamadas y saber cuales se están y cual es su sintaxis.
    **ACTUALIZA SIEMPRE LAS VARIABLES**
    Como es un archivo privado, no se debe subir a los reposiotovior y para ello tenemos que agregarlo al **.gitignore** con la siguiente sintaxis: (nombre).env

    En vite las variables privadas antes de colorcarle el nombre, para no tener que volver a reescribirlas, se les coloca delante **VITE_(nombre de la variable)**
    Ej: ~~ÃPI_KEY~~ , **VITE_API_KEY:**

    Las formas en las que vite tiene de mostrar las variables .env es: **import.meta.env**

- **Callbacks**

    Son funciones que reciben como **argumento** otra función y se inicializa

- **Callbacks Hells**

    Es una recursión de callbacks, es decir, dentro de un callback hay otro callback que a su vez tiene otro callback y así sucesivamente

- **Promises**

    Son "pactos" entre dos partes donde una espera a la otra y si se rompe hay que solucionarlo. Y estas promesas son las que nos ayudan a eliminar los callbacks hell
    Las promesas tienen dos argumentos: 'resolve' y el 'reject'
    **Resolve** es lo que pasa cuando se resuelve o se da la promesa y el **reject** es cuando falla esa promesa.

    - **Async** 

        Es la forma actual y mejor de formular promesas. Transforma las funciones en promesas con solo poner la palabra reservada **async**
        Este tipo de promesas se ejecutan a destiempo, de manera **asíncorna**. Esto quiere decir que no van a seguir el orden establecido de lectura de código línea por línea de arriba a abajo sino que, primero se ejecutará el código síncrono y dejará aquellas funciones y promesas asíncronas en un stack para cuando acabe, seguir con estas últimas.

        __Una explicación muy buena viene en el libro **'Charlas TED de Chris Andreson'** donde explica que en una charla TED de **Erin McKean** donde explica a través de una metáfora que a veces JS es como ponerse primero los pantalones y luego la ropa interior. Sabes que no va en ese orden pero funciona y va todo bien. Y así explica las funciones asincronas de js__

        En las funciones asíncrones para el manejo de los errores se usa el try y el catch
