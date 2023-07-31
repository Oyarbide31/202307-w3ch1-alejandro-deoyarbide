 
import { Characters } from "./characters.js";

export class fighter extends Characters{
  weapon;
  skill;
  constructor(
    
    name: string,
    family: string, 
    age : number,
    state: boolean, 
    weapon : string,
     skill: number){

    super(name,family,age,state);

this.weapon= weapon;
this.skill=skill;

}

}
