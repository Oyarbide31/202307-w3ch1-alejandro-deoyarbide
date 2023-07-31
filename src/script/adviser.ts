import { Character } from "./characters.js";

class adviser extends Character{
  constructor(public name: string, family: string, age : number,state: boolean, arma : string, skill: number, characterWhomHeAdvised: string){
    super(name,family,age,state,arma, skill,characterWhomHeAdvised);

    function greeting=(name)=>{

      console.log(`Yo soy el asesor ${this.name}, No sé por qué, pero creo que voy a morir pronto`);
    }

}

}
