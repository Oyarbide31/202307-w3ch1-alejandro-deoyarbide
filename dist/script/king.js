import { Character } from "./characters.js";
class king extends Character {
    name;
    constructor(name, family, age, state, regnalYears) {
        super(name, family, age, state, regnalYears);
        this.name = name;
        function greeting() { }
        (name) => {
            console.log(`YO SOY EL REY ${this.name}, "Vais a morir todos!"`);
        };
    }
}
