import { Character } from "./characters.js";
class adviser extends Character {
    name;
    constructor(name, family, age, state, arma, skill, characterWhomHeAdvised) {
        super(name, family, age, state, arma, skill, characterWhomHeAdvised);
        this.name = name;
        function greeting() { }
        (name) => {
            console.log(`Yo soy el asesor ${this.name}, No sé por qué, pero creo que voy a morir pronto`);
        };
    }
}
