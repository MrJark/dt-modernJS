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
    const res = await fetch(url, { // si no pusiera esto, sería un GET, para obtener info y yo quiero postear, POST
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content Type': 'application/json'
        }
    })

    const newUser = await res.json();
    console.log({newUser});

    return newUser;

};