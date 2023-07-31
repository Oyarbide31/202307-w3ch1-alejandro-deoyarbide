import { Characters } from "./characters.js";
export class king extends Characters{

  regnalYears;

    constructor(

      name: string,
      family: string, 
      age : number,
      state: boolean,
      regnalYears:number){

    super(name,family,age,state);

    this.regnalYears =regnalYears;

}

}
