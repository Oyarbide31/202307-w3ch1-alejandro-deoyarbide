import { Characters } from "./characters.js";
export class adviser extends Characters {
    characterWhomHeAdvised;
    constructor(name, family, age, state, characterWhomHeAdvised) {
        super(name, family, age, state);
        this.characterWhomHeAdvised = characterWhomHeAdvised;
    }
}
