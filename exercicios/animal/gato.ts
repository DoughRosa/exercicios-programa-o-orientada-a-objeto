import Animal2 from "./animal";

class Gato2 extends Animal2{
    
    constructor(){
        super("gato","carnivoro")
    }

    vocalizacao(): void {
        console.log("miado");
    }
}

export default Gato2