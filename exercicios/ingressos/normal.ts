import Ingresso from "./ingresso";

class Normal extends Ingresso{

    constructor(){
        super(20)
    }

    imprimirValor(): void {
        console.log(this.valor)
    }
}

export default Normal;