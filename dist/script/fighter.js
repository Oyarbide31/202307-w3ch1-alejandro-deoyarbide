import { Characters } from "./characters.js";
export class fighter extends Characters {
    weapon;
    skill;
    constructor(name, family, age, state, weapon, skill) {
        super(name, family, age, state);
        this.weapon = weapon;
        this.skill = skill;
    }
}
