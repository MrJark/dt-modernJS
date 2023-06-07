import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


/**
 * 
 * @param {number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1 ) => {

    const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_USERS}${import.meta.env.VITE_PAGE_}${page}`;
    const res = await fetch(url);
    const data = await res.json();
    
    // Tarea: traer a la consola una instancia de la data que luzzca estilo: [ User, User] pero habiendola pasado por el mapper para cambiar el snake por el camel (No conseguido)
    // const users = localhostUserToModel(data); // mi solución (fallida) a la tarea
    // const users = data.map( userLike => localhostUserToModel(userLike));
    const users = data.map(localhostUserToModel);

    console.log(users);
};