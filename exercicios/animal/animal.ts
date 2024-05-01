abstract class Animal2 {
    especie: "cachorro" | "cavalo" | "gato";
    alimentacao: "herbivoro" | "carnivoro" | "onivoro";

    constructor(especie:"cachorro" | "cavalo" | "gato", alimentacao: "herbivoro" | "carnivoro" | "onivoro"){
        this.especie = especie;
        this.alimentacao = alimentacao;
    }

    abstract vocalizacao(): void
}

export default Animal2;