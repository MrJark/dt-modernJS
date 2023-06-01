# Theory

- **Variables de entorno**

    Estas son variables que dependiendo de donde se encuentren, tendrán un valor u otro
    La forma más común de trabajar con estas variables es a través de paquetes de ' dotenv ' o .env
    Link al paquete: __https://www.npmjs.com/package/dotenv__
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