

/**
 * Eliminación de usuarios. 
 * @param {String | Number} id
 */
export const deleteUserById = async ( id ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url, { 
        method: 'DELETE',
    });
    // si no pusiera nada, sería un GET, para obtener info y como yo quiero postear, uso POST

    const deleteData = await res.json();
    console.log({deleteData});

    return true;

};