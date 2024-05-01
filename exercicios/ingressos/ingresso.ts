abstract class Ingresso {
    valor: number;

    constructor(valor:number){
        this.valor = valor;
    }

    abstract imprimirValor(): void
}

export default Ingresso;