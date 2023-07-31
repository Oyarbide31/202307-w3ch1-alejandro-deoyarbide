import { Characters } from "./characters.js";

export class adviser extends Characters{
characterWhomHeAdvised;
  constructor(

    name: string,
    family: string, 
    age : number,
    state: boolean,
    characterWhomHeAdvised:string){

    super(name,family,age,state);

    this.characterWhomHeAdvised = characterWhomHeAdvised;

  
}

}
