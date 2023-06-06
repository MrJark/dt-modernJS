
# Working and practicing with http request

## Basic application
API that we need: <https://rickandmortyapi.com/documentation/> **Rick and Morty API**
API that we need: <https://breakingbadquotes.xyz> **Braking Bad API**

- **Working with:**
~~ No he podido/sabido desestructurar los objetos que me dan en el character de la api~~ Ya he podido con el .slice()

<https://rickandmortyapi.com/api/character>

You can also include filters in the URL by including additional query parameters. To start filtering add a ? followed by the query 'query'='value'. If you want to chain several queries in the same call, use & followed by the query.
For example, If you want to check how many alive Ricks exist, just add ?name=rick&status=alive to the URL.

Aviable parameters:
1. name
2. status -> ( alivd, dead, unknown)
3. species
4. type
5. gender -> (female, male, genderless or unknown)

- **Working with:**

<https://github.com/shevabam/breaking-bad-quotes>

## Advanced application 

Necesito dependencias json para hacer un "backend" y para ello voy a instalar el siguiente paquete:
    **npm json-server** <https://www.npmjs.com/package/json-server> y lo instalo: **npm i json-server --save-dev**

Además también necesito unos usuarios ficticios que voy a coger del repositorio de Fernando <https://gist.github.com/Klerith/7db7e20bda7161d827b6b70cc1e23d02>

Y para que la app funcione tenemos que estar en el local host que hemos indicado, en mi caso: http://localhost:3001/users colocado en el archivo package.json como **Server**


