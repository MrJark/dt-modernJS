import { User } from "../models/user";


// Esta función se crea justo de la manera contraria al localhost-user-mapper porque para yo añadir una paersona necesito que el backend entienda que pongo en first y last name ya que lo habíamos cambiado
/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( user ) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,    
    } = user;
    
    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,    
    }

}