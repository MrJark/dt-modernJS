
export class User {

    /**
     * Forma en la que voy a trabajar con los usuarios
     * @param {Like<User>} userDataLike 
     */
    constructor( {id, isActive, balance, avatar, firstName, lastName, gender} ) {
        this.id = id;
        this.isActive = isActive;
        this.balance = balance;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName =lastName;
        this.gender = gender;
    };

};