import { Characters } from "./characters.js";
export class squire extends Characters {
    serverTo;
    servelity;
    constructor(name, family, age, state, serverTo, servelity) {
        super(name, family, age, state);
        this.serverTo = serverTo;
        this.servelity = servelity;
    }
}
