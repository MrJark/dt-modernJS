import { User } from '../models/user'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {

    const user = new User(userLike);

    if (user.id) {
        throw 'No implemented yet';
        return;
    };

    const updateUser = await createUser(user);
    return updateUser;
    
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