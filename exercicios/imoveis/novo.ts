import Imovel from "./imovel";

class Novo extends Imovel{
    precoAdicional: number

    constructor(precoAdicional:number){
        super(100)
        this.precoAdicional = precoAdicional
    }

    imprimirPreco(){
        console.log(this.preco + this.precoAdicional);
    }
}

export default Novo;