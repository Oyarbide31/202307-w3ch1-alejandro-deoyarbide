import { Characters } from "./characters.js";
export class king extends Characters {
    regnalYears;
    constructor(name, family, age, state, regnalYears) {
        super(name, family, age, state);
        this.regnalYears = regnalYears;
    }
}
