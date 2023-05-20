
const chema = {
    nombre: 'Chema',
    apellido: 'Ferrández',
    edad: 25,
    imprimir() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
const mariano = {
    nombre: 'Mariano',
    apellido: 'Gonzalez',
    edad: 30,
};

chema.imprimir();
