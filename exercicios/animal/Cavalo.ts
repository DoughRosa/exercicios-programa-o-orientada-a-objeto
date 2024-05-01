import Animal2 from "./animal";

class Cavalo2 extends Animal2{
    
    constructor(){
        super("cavalo", "herbivoro")
    }

    vocalizacao(): void {
        console.log("relinche");
    }
}

export default Cavalo2