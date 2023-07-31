import { Character } from "./characters.js";

class king extends Character{
  constructor(public name: string, family: string, age : number,state: boolean, regnalYears:number){
    super(name,family,age,state,regnalYears);

    function greeting=(name)=>{

      console.log(`YO SOY EL REY ${this.name}, "Vais a morir todos!"`);
    }

}

}
