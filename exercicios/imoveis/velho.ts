import Imovel from "./imovel";

class Velho extends Imovel{
    desconto: number

    constructor(desconto:number){
        super(100)
        this.desconto = desconto
    }

    imprimirPrecoComDesconto(){
        console.log(this.preco - this.desconto);
    }
}

export default Velho;