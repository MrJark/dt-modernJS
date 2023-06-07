import { User } from "../models/user";

/**
 * Para inicializar nuevos usuarios con todas las propiedades que deben tener
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

    const {
        // desestructuración de las propiedades como vienen del backend y no como las tenemos colocadas en el .json
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,

    } = localhostUser;

    return new User({
        // retorna un a nueva instancia del usuario pero ahora con las propiedades como las espero, quitando el snake_case y usado el camelCase
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}