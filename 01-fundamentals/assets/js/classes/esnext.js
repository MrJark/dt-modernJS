
class Rectangulo {
    
    // area = 0; // si dejamoos el área así, puedes modificarlas de forma manual con rectangulo.area = xxx; por tanto, tienes que hacerla privadas
    #area = 0; // el ponerle el signo # hace que la propiedad se vuelva privada y pot tanto, no puedes acceder desde fuera de la misma
    base;
    altura;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15)

console.log(rectangulo);