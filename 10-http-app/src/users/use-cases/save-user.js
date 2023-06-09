import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost';
import { User } from '../models/user'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {

    const user = new User(userLike);

    if ( !user.firstName || !user.lastName ) throw 'The fields are required' ;
   

    const userToSave = userModelToLocalhost(user); // pasa el new user por user-to-local para cambiarle el tipo de dato para el backend
    let userUpdated;

    if (user.id) {
        // throw 'No implemented yet';
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel( userUpdated ); // para que el backend reciba los valores de las keys correctos
    
};

/**
 * Creación de nuevos usuarios
 * @param {Like<User>} user
 */
const createUser = async ( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, { 
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // si no pusiera nada, sería un GET, para obtener info y como yo quiero postear, uso POST

    const newUser = await res.json();
    console.log({newUser});

    return newUser;

};

/**
 * Modificación de usuarios. 
 * El PATCH modifica solo lo que le mandas, el PUT modifica todo el objeto
 * @param {Like<User>} user
 */
const updateUser = async ( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, { 
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // si no pusiera nada, sería un GET, para obtener info y como yo quiero postear, uso POST

    const updateUser = await res.json();
    console.log({updateUser});

    return updateUser;

};