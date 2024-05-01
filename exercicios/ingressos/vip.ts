import Ingresso from "./ingresso";

class VIP extends Ingresso{
    valorAdicional: number

    constructor(valorAdicional:number){
        super(20)
        this.valorAdicional = valorAdicional;
    }

    imprimirValor(): void {
        console.log(this.valor + this.valorAdicional);
    }
}

export default VIP;