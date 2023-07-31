import { Characters } from "./characters.js";
export class squire extends Characters{

serverTo;
servelity;
  constructor(
    name: string,
    family: string,
    age : number,
    state: boolean,
    serverTo:string,
    servelity:string,
      
      ){
    super(name,family,age,state);

    this.serverTo= serverTo;
    this.servelity=servelity;

}

}
