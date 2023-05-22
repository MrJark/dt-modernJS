

class NombreCualquiera { // el nombre de la clase puede ser cualqueira pero es buena práctica que se diferencia de los demás llamándolo Singleton o PersonaService para diferenciarlo

    // los dos campos siguientes son opcionales
    static instancia; // esto nos devuelve undefined
    nombre = ''; // esta propiedad que se coloca aquí es la que queremos manteber global

    constructor( nombre) {

        /*
        se hace una doble negación para que sea false. Ej:
        const a = undefined;
        log(a) -> undefined
        log(!a) -> true
        log(!!a) -> false
        Es más fácil para nosotros y para js trabajar con booleanos y no con undefined y como 
        la propia instancia es undefined. Lo negación de undefined es true y la doble negación es false
        */
        if (!!NombreCualquiera.instancia) { 
            return NombreCualquiera.instancia;
        }
        /*
        Con el if lo que decimos es: si no existe una instancia has una con el this de abajo
        pero si existe devuelve esa instancia. por tanto, si ya existe una isntancia llamada
        'ironman', por muchas que ponga debajo, siempre va a devolver la misma, 'ironman'
        Y si pongo primero 'hulk' siempre saldrá 'hulk'
        */

        NombreCualquiera.instancia = this;
        this.nombre = nombre;

    }

};

const instancia1 = new NombreCualquiera('ironman');
const instancia2 = new NombreCualquiera('hulk');

console.log(`El nombre de la instancia 1 es: ${instancia1.nombre}`);
console.log(`El nombre de la instancia 1 es: ${instancia2.nombre}`);