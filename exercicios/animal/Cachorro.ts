import Animal2 from "./animal";

class Cachorro2 extends Animal2{
    
    constructor(){
        super("cachorro","onivoro")
    }

    vocalizacao(): void {
        console.log("latido");
    }
}

export default Cachorro2