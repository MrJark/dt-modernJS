// esto genera id únicos para cada una de las tareas que vas a tener 

import { v4 as uuidv4 } from 'uuid';

export class Todo {
    
    /**
     * 
     * @param {string} description 
     */
    constructor( description ) {
        this.id = uuidv4();
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }

};