import Ingresso from "./ingresso";

class Camarote extends Ingresso{
    valorAdicional: number;

    constructor(valorAdicional:number){
        super(20);
        this.valorAdicional = valorAdicional;
    }

    imprimirValor(): void {
        console.log(this.valor + this.valorAdicional);
    }
}

export default Camarote;